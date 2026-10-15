# Sanskriti Basnet: portfolio site

Astro + Tailwind static site. Content lives in simple files you can edit. Nothing to run on a server.

## Part 1: See it on your computer
1. Install Node.js (LTS) from nodejs.org.
2. In this folder: `npm install` then `npm run dev`. Open the link it prints.

## Part 2: What to edit (no coding needed)
| I want to… | Edit |
|---|---|
| Change name, tagline, email, Instagram / LinkedIn / Canva links, About text, numbers, experience, skills | `src/data/site.ts` |
| Add or edit a project | drop photos in `public/work/`, edit `src/data/projects.ts` |
| Replace the VM photos | `src/data/vm.ts` (steps inside the file) |
| Add a video reel | `src/data/videos.ts` (steps inside the file) |
| Add your CV | save as `public/sanskriti-basnet-cv.pdf` (without your phone number) |
| Show your phone number | `showPhone: true` in `site.ts` |
| Hide impact numbers | `showImpactNumbers: false` in `site.ts` |
| Add your portrait | photo in `public/work/`, name in `portrait` in `site.ts` |

Dummy links are marked `[ADD: …]`. Search the project for `[ADD` to find everything still waiting.
Photos: ~1200px wide WebP/JPG. If a face is cropped badly on a card, add a focus, e.g. `img('file','alt','50% 20%')`.

## Part 3: Put it online (free)
1. Create a GitHub account, make a new repository, upload this folder (GitHub Desktop is easiest).
2. Create a Cloudflare account, go to Workers & Pages, Create, Pages, Connect to Git, choose the repository.
3. Build command `npm run build`, output folder `dist`. Deploy. You get a free `*.pages.dev` address.
4. Buy a domain, add it under the Pages project's Custom domains. Update `site` in `astro.config.mjs`, `url` in `site.ts` and the Sitemap line in `public/robots.txt`.
5. Every time you save changes to GitHub, the site rebuilds by itself.

Videos: keep MP4s under 25 MB and put them in `public/videos/`. Larger files go in Cloudflare R2 (public bucket), then paste the link as `src`. Compress reels first (e.g. HandBrake, 720p).

## Part 4 (optional, later): a real dashboard (Sanity)
Use this only if editing files becomes annoying. Free plan; check current limits when you sign up.
1. `npm create sanity@latest` in a NEW folder, copy `sanity/schemas/index.ts` into its `schemaTypes`.
2. Run `npx sanity deploy` to get an online dashboard where you upload photos and add projects by filling a form.
3. In Cloudflare Pages settings add `PUBLIC_SANITY_PROJECT_ID` (and `PUBLIC_SANITY_DATASET`). Add a Sanity webhook to Cloudflare's deploy hook so Publish rebuilds the site.
The loader for this is in `src/lib/content.ts`. It has not been tested against a live Sanity project; test with one project before moving everything over.
