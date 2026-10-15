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
    { ...img('fm-kstreet-3', 'Model in a graphic raglan tee leaning on shelves of snacks'), caption: 'Set and shelf styling, K-Street' },
    { ...img('fm-kstreet-b-1', 'Model seated in a shopping trolley in a snack-aisle set'), caption: 'Set and shelf styling, K-Street' },
    { ...img('fm-kstreet-2', 'Group of models in graphic tees among supermarket shelves'), caption: 'Set and shelf styling, K-Street' },
  ],
};
