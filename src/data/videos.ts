/**
 * ============================================================
 *  REELS (videos)
 * ============================================================
 *  A reel only appears on the site once it has a `src`.
 *
 *  OPTION A (simplest): put the MP4 in /public/videos/ and use  src: '/videos/video-01.mp4'
 *           Keep each file under ~25 MB (Cloudflare Pages limit is 25 MB per file).
 *  OPTION B (bigger files): upload to Cloudflare R2, make the bucket public,
 *           and paste the full link:  src: 'https://pub-xxxx.r2.dev/video-01.mp4'
 *
 *  poster      = a still from /public/work/ shown before the video plays (file name, no extension)
 *  orientation = 'portrait' (reels) or 'landscape'
 *
 *  Your Word notes list 27 videos. The landscape ones are: 5, 17, 20 and 25.
 */
export type Video = {
  id: string;
  title: string;
  brand: string;
  orientation: 'portrait' | 'landscape';
  poster: string;
  src: string; // '' = hidden for now
};

export const videos: Video[] = [
  { id: 'fm-menswear-03', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-08-13 at 11.45.53 AM.mp4' },
  { id: 'fm-menswear-01', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-08-13 at 11.32.17 AM.mp4' },
  { id: 'laundered-black-01', title: 'Laundered Black', brand: 'Flying Machine', orientation: 'portrait', poster: 'mb-laundered-black', src: '/videos/Laundred black/WhatsApp Video 2026-09-09 at 8.07.31 PM.mp4' },
  { id: 'fm-menswear-04', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-08-13 at 11.48.19 AM.mp4' },
  { id: 'fm-menswear-02', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-08-13 at 11.40.58 AM.mp4' },
  { id: 'laundered-black-02', title: 'Laundered Black', brand: 'Flying Machine', orientation: 'portrait', poster: 'mb-laundered-black', src: '/videos/Laundred black/WhatsApp Video 2026-09-09 at 8.09.03 PM.mp4' },
  { id: 'fm-menswear-05', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-08-13 at 11.48.50 AM.mp4' },
  { id: 'fm-menswear-06', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-08-13 at 11.49.27 AM.mp4' },
  { id: 'fm-menswear-07', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-08-13 at 11.49.58 AM.mp4' },
  { id: 'celebrity-01', title: 'Celebrity Shoot', brand: 'USPA', orientation: 'portrait', poster: 'us-aw25-peaks', src: '/videos/CELEBRITY SHOOT/WhatsApp Video 2026-09-08 at 4.19.48 PM.mp4' },
  { id: 'celebrity-02', title: 'Celebrity Shoot', brand: 'USPA', orientation: 'portrait', poster: 'us-aw25-peaks', src: '/videos/CELEBRITY SHOOT/WhatsApp Video 2026-09-08 at 4.20.09 PM.mp4' },
  { id: 'fm-menswear-08', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-08-13 at 11.50.36 AM.mp4' },
  { id: 'fm-menswear-09', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-08-13 at 11.51.17 AM.mp4' },
  { id: 'fm-menswear-10', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-08-13 at 11.51.51 AM.mp4' },
  { id: 'celebrity-03', title: 'Celebrity Shoot', brand: 'USPA', orientation: 'portrait', poster: 'us-aw25-peaks', src: '/videos/CELEBRITY SHOOT/WhatsApp Video 2026-09-08 at 4.22.12 PM.mp4' },
  { id: 'celebrity-04', title: 'Celebrity Shoot', brand: 'USPA', orientation: 'portrait', poster: 'us-aw25-peaks', src: '/videos/CELEBRITY SHOOT/WhatsApp Video 2026-09-08 at 4.23.38 PM.mp4' },
  { id: 'fm-menswear-11', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-08-13 at 11.52.29 AM.mp4' },
  { id: 'fm-menswear-12', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-09-16 at 4.47.28 PM.mp4' },
  { id: 'fm-menswear-13', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-09-16 at 4.48.22 PM.mp4' },
  { id: 'fm-menswear-14', title: 'FM Menswear', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-sofa', src: '/videos/FM MENSWEAR/WhatsApp Video 2026-09-16 at 4.49.00 PM.mp4' },
  { id: 'celebrity-05', title: 'Celebrity Shoot', brand: 'USPA', orientation: 'portrait', poster: 'us-aw25-peaks', src: '/videos/CELEBRITY SHOOT/WhatsApp Video 2026-09-16 at 4.47.28 PM.mp4' },

  // ---------- Landscape----------
  { id: 'SS25', title: 'USPA - SS_25', brand: 'USPA', orientation: 'landscape', poster: 'us-ss25-statues', src: '/videos/USPA - SS_25/SS25.mp4' },
  { id: 'SS26', title: 'USPA - SS_26', brand: 'USPA', orientation: 'landscape', poster: 'us-ss26-reading', src: '/videos/USPA SS_26/SS26.mp4' },
  { id: 'AW25', title: 'USPA - AW_25', brand: 'USPA', orientation: 'landscape', poster: 'us-aw25-peaks', src: '/videos/USPA AW_25/AW25.mp4' },

  // ---------- OVER 25 MB: too big for Cloudflare Pages ----------
  // Upload these to Cloudflare R2 (Option B), swap src for the R2 link, then remove the //.
  // { id: 'hyper-nature-01', title: 'Hyper Nature', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-hyper-nature', src: '/videos/HYPER NATURE/VIDEO 1.mp4' }, // 75.9 MB
  // { id: 'hyper-nature-02', title: 'Hyper Nature', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-hyper-nature', src: '/videos/HYPER NATURE/VIDEO 2.mp4' }, // 60.7 MB
  // { id: 'k-street', title: 'K-Street', brand: 'Flying Machine', orientation: 'landscape', poster: 'fm-k-street-stairs', src: '/videos/K-STREET/FM K-Pop_3840x2160.mp4' }, // 60.4 MB
  // { id: 'aw26-everyday-shirts', title: 'USPA AW 26 - Everyday Shirts', brand: 'USPA', orientation: 'portrait', poster: 'us-aw26-duo', src: '/videos/USPA AW 26/EVERYDAY SHIRTS_1080x1920.mp4' }, // 32.8 MB
  // { id: 'aw26-reel-8', title: 'USPA AW 26 - Reel 8', brand: 'USPA', orientation: 'portrait', poster: 'us-aw26-trio', src: '/videos/USPA AW 26/REEL 8.mp4' }, // 35.5 MB
  // { id: 'aw26-travelers-diary', title: 'USPA AW 26 - The Traveler’s Diary', brand: 'USPA', orientation: 'portrait', poster: 'us-winter-a-1', src: '/videos/USPA AW 26/THE TRAVELER’S DIARY_1080x1920.mp4' }, // 60.9 MB
  // { id: 'aw26-varsity', title: 'USPA AW 26 - Varsity', brand: 'USPA', orientation: 'landscape', poster: 'us-winter-uspa', src: '/videos/USPA AW 26/USPA VARSITY_1920x1080_15SEC.mp4' }, // 89.3 MB
  // { id: 'aw26-winter-classics', title: 'USPA AW 26 - Winter Classics', brand: 'USPA', orientation: 'landscape', poster: 'us-winter-polo', src: '/videos/USPA AW 26/USPA_WINTER CLASSICS_1920x1080_15 SEC.mp4' }, // 86.0 MB
  // { id: 'aw26-varsity-library-portrait', title: 'USPA AW 26 - Varsity Library', brand: 'USPA', orientation: 'portrait', poster: 'us-winter-a-2', src: '/videos/USPA AW 26/VARSITY LIBRARY_1080x1920.mp4' }, // 48.8 MB
  // { id: 'aw26-varsity-library-landscape', title: 'USPA AW 26 - Varsity Library', brand: 'USPA', orientation: 'landscape', poster: 'us-winter-a-3', src: '/videos/USPA AW 26/VARSITY LIBRARY_1920x1080.mp4' }, // 48.8 MB

  // Copy this line for each reel, remove the // and fill it in:
  // { id: 'video-01', title: 'Hyper Nature reel', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-hyper-nature', src: '/videos/video-01.mp4' },
];
