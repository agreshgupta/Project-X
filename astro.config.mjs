// Astro config. Change `site` to your real domain once you have one
// (used for the sitemap and social-share image links).
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sanskritibasnet.com', // [ADD: your real domain]
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
