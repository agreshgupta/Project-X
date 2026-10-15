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
  // Copy this line for each reel, remove the // and fill it in:
  // { id: 'video-01', title: 'Hyper Nature reel', brand: 'Flying Machine', orientation: 'portrait', poster: 'fm-hyper-nature', src: '/videos/video-01.mp4' },
];
