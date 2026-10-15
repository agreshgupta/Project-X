/**
 * Content loader. Reads from the simple data files by default.
 * If you later set PUBLIC_SANITY_PROJECT_ID (see README, Part 3), it reads from Sanity instead.
 * Build-time only: this runs when the site is built, never in a visitor's browser.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { projects as localProjects, categoriesOrder, type Project, type Img } from '../data/projects';
import { videos as localVideos, type Video } from '../data/videos';
import { vm as localVm } from '../data/vm';

export type RImg = { src: string; alt: string; width: number; height: number; focus?: string };
export type RProject = Omit<Project, 'cover' | 'images' | 'moodboards'> & {
  cover: RImg;
  images: RImg[];
  moodboards: RImg[];
};
export type RVideo = Omit<Video, 'poster'> & { poster: RImg };

const PUBLIC = path.resolve('public');
const EXTS = ['webp', 'jpg', 'jpeg', 'png', 'avif'];
const cache = new Map<string, RImg>();

async function resolveLocal(i: Img): Promise<RImg> {
  const hit = cache.get(i.file);
  if (hit) return { ...hit, alt: i.alt, focus: i.focus };
  const ext = EXTS.find((e) => fs.existsSync(path.join(PUBLIC, 'work', `${i.file}.${e}`)));
  if (!ext) throw new Error(`Image not found in /public/work: "${i.file}" (looked for ${EXTS.join(', ')})`);
  const file = path.join(PUBLIC, 'work', `${i.file}.${ext}`);
  const meta = await sharp(file).metadata();
  const out = { src: `/work/${i.file}.${ext}`, alt: i.alt, width: meta.width ?? 1000, height: meta.height ?? 1000, focus: i.focus };
  cache.set(i.file, out);
  return out;
}

const SANITY_ID = import.meta.env.PUBLIC_SANITY_PROJECT_ID as string | undefined;
const SANITY_DATASET = (import.meta.env.PUBLIC_SANITY_DATASET as string | undefined) ?? 'production';

async function sanityFetch<T>(groq: string): Promise<T> {
  const url = `https://${SANITY_ID}.apicdn.sanity.io/v2024-01-01/data/query/${SANITY_DATASET}?query=${encodeURIComponent(groq)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity request failed: ${res.status}`);
  return (await res.json()).result as T;
}

const IMG_FIELDS = `{ "src": asset->url + "?w=1600&auto=format", alt, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height }`;

export async function getProjects(): Promise<RProject[]> {
  if (SANITY_ID) {
    const rows = await sanityFetch<any[]>(`*[_type=="project"] | order(sortOrder asc, _createdAt desc){
      "slug": slug.current, title, brand, season, category, summary, role, credits,
      "cover": cover${IMG_FIELDS}, "images": images[]${IMG_FIELDS}, "moodboards": moodboards[]${IMG_FIELDS},
      "videos": videos[]->id }`);
    return rows.map((r) => ({ ...r, images: r.images ?? [], moodboards: r.moodboards ?? [], videos: r.videos ?? [] }));
  }
  return Promise.all(
    localProjects.map(async (p) => ({
      ...p,
      cover: await resolveLocal(p.cover),
      images: await Promise.all(p.images.map(resolveLocal)),
      moodboards: await Promise.all((p.moodboards ?? []).map(resolveLocal)),
    })),
  );
}

export async function getVideos(): Promise<RVideo[]> {
  if (SANITY_ID) {
    const rows = await sanityFetch<any[]>(`*[_type=="reel" && defined(url)] | order(sortOrder asc){
      id, title, brand, orientation, "src": url, "poster": poster${IMG_FIELDS} }`);
    return rows;
  }
  const live = localVideos.filter((v) => v.src);
  return Promise.all(live.map(async (v) => ({ ...v, poster: await resolveLocal({ file: v.poster, alt: `${v.title} cover frame` }) })));
}

export async function getVm() {
  if (SANITY_ID) {
    const row = await sanityFetch<any>(`*[_type=="siteSettings"][0]{ vmHeading, vmNote, "vmFrames": vmFrames[]{ "image": ${IMG_FIELDS.replace('{ "src"', '{ "src"')}, caption } }`);
    if (row?.vmFrames?.length)
      return { heading: row.vmHeading, note: row.vmNote, frames: row.vmFrames.map((f: any) => ({ ...f.image, caption: f.caption })) as (RImg & { caption: string })[] };
  }
  const frames = await Promise.all(localVm.frames.map(async (f) => ({ ...(await resolveLocal(f)), caption: f.caption })));
  return { heading: localVm.heading, note: localVm.note, frames };
}

export function categoriesIn(list: RProject[]): string[] {
  const present = new Set(list.map((p) => p.category));
  return categoriesOrder.filter((c) => present.has(c));
}

export const titleOf = (p: { brand: string; title: string; season: string }) =>
  [p.brand, p.title, p.season].filter(Boolean).join(' ');
