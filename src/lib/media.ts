// Small helper: turn a file name in /public/work into {src, alt, width, height}.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import type { RImg } from './content';

export async function getImg(file: string, alt: string): Promise<RImg> {
  for (const ext of ['webp', 'jpg', 'jpeg', 'png', 'avif']) {
    const p = path.resolve('public', 'work', `${file}.${ext}`);
    if (fs.existsSync(p)) {
      const m = await sharp(p).metadata();
      return { src: `/work/${file}.${ext}`, alt, width: m.width ?? 1000, height: m.height ?? 1000 };
    }
  }
  throw new Error(`Image not found in /public/work: "${file}"`);
}
