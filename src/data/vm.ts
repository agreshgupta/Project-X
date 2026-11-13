/**
 * ============================================================
 *  VISUAL MERCHANDISING STRIP (home page)
 * ============================================================
 *  Your portfolio PDFs contain NO store photos, so these three frames use
 *  set-styling shots from the K-Street shoot and are captioned honestly.
 *
 *  TO SWAP IN REAL STORE PHOTOS:
 *   1. Drop the photos into /public/work/  (e.g. uspa-store-01.webp)
 *   2. Replace the file name, alt text and caption below.
 *   3. Save. Done.
 */
import { img } from './projects';

export const vm = {
  heading: 'From shoot set to shop floor.',
  note: 'Pan-India VM execution across 100+ U.S. Polo Assn. stores.',
  frames: [
    { ...img('left_vm', 'Wall display, layered autumn tones'), caption: 'Wall display, layered autumn tones' },
    { ...img('center_vm', 'Mannequin and table display, shop floor'), caption: 'Mannequin and table display, shop floor' },
    { ...img('right_vm', 'Wall display, prints and stripes'), caption: 'Wall display, prints and stripes' },
  ],
};
