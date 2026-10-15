// OPTIONAL (Part 3 of the README). Copy this folder's files into a Sanity Studio project's /schemaTypes.
import { defineType, defineField } from 'sanity';

const imageField = (name: string, title: string) =>
  defineField({
    name, title, type: 'image', options: { hotspot: true },
    fields: [defineField({ name: 'alt', title: 'Alt text (describe the photo in one sentence)', type: 'string', validation: (r) => r.required() })],
  });

export const project = defineType({
  name: 'project', title: 'Project', type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'brand', type: 'string', description: 'Text only, e.g. U.S. Polo Assn.' }),
    defineField({ name: 'season', type: 'string', description: 'e.g. AW’26 (optional)' }),
    defineField({ name: 'category', type: 'string', options: { list: ['Campaign', 'Catalogue & E-commerce', 'Visual Merchandising', 'Influencer & Content', 'Personal / Editorial'] } }),
    defineField({ name: 'summary', type: 'string', description: 'One short line for the card' }),
    defineField({ name: 'role', type: 'text', rows: 2 }),
    defineField({ name: 'credits', type: 'string' }),
    defineField({ name: 'sortOrder', type: 'number', description: 'Lower number shows first' }),
    imageField('cover', 'Cover image'),
    defineField({ name: 'images', type: 'array', of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt text' }] }] }),
    defineField({ name: 'moodboards', type: 'array', of: [{ type: 'image', fields: [{ name: 'alt', type: 'string', title: 'Alt text' }] }] }),
    defineField({ name: 'videos', type: 'array', of: [{ type: 'reference', to: [{ type: 'reel' }] }] }),
  ],
});

export const reel = defineType({
  name: 'reel', title: 'Reel (video)', type: 'document',
  fields: [
    defineField({ name: 'id', type: 'string', description: 'e.g. video-01' }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'brand', type: 'string' }),
    defineField({ name: 'orientation', type: 'string', options: { list: ['portrait', 'landscape'] }, initialValue: 'portrait' }),
    defineField({ name: 'url', type: 'url', description: 'Link to the MP4 (Cloudflare R2 public link)' }),
    imageField('poster', 'Cover frame'),
    defineField({ name: 'sortOrder', type: 'number' }),
  ],
});

export const siteSettings = defineType({
  name: 'siteSettings', title: 'Site settings', type: 'document',
  fields: [
    defineField({ name: 'vmHeading', type: 'string' }),
    defineField({ name: 'vmNote', type: 'string' }),
    defineField({ name: 'vmFrames', title: 'VM photos', type: 'array', of: [{
      type: 'object', fields: [imageField('image', 'Photo'), defineField({ name: 'caption', type: 'string' })],
    }] }),
  ],
});

export const schemaTypes = [project, reel, siteSettings];
