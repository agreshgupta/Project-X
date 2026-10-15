/**
 * ============================================================
 *  PROJECTS  –  add a new project by copying one block below
 * ============================================================
 *  1. Put your image files in  /public/work/   (WebP or JPG, ~1200px wide is plenty)
 *  2. Add a block to the `projects` list (first in the list = shows first)
 *  3. Save. The site updates. No other file needs touching.
 *
 *  Image helper:   img('file-name-without-extension', 'what the photo shows')
 *  The second part is the ALT TEXT: describe the photo in one short sentence.
 *
 *  categories (must match exactly):
 *   'Campaign' | 'Catalogue & E-commerce' | 'Visual Merchandising'
 *   | 'Influencer & Content' | 'Personal / Editorial'
 */
export type Img = { file: string; alt: string; focus?: string };
// focus (optional) = where to keep centred when a photo is cropped to a card, e.g. '78% 30%' (x% y%).
export const img = (file: string, alt: string, focus?: string): Img => ({ file, alt, focus });

export type Project = {
  slug: string; // web address: /work/<slug>
  title: string;
  brand: string; // shown as text only
  season: string; // e.g. "AW’25". Leave '' if not needed
  category: string;
  summary: string; // ONE short line shown on the card
  role: string; // what you did, 1–2 short sentences
  cover: Img;
  images: Img[]; // final shoot images
  moodboards?: Img[]; // optional. Adds the Moodboard / Shoot toggle
  videos?: string[]; // optional. ids from videos.ts
  credits?: string; // [ADD: photographer, models, makeup…]. Hidden while empty.
};

const FM = 'Flying Machine';
const USPA = 'U.S. Polo Assn.';

export const projects: Project[] = [
  {
    slug: 'uspa-marketing-campaign-aw26',
    title: 'Marketing Campaign',
    brand: USPA,
    season: 'AW’26',
    category: 'Campaign',
    summary: 'Layered knits, deep burgundy, a coffee-run kind of cold.',
    role: 'Led campaign and social media styling, from concept to shoot execution.',
    cover: img('us-aw26-duo', 'Two models in burgundy knitwear and a long coat, carrying coffee cups outdoors'),
    images: [
      img('us-aw26-duo', 'Two models in burgundy knitwear and a long coat, carrying coffee cups outdoors'),
      img('us-aw26-trio', 'Three models seated on a wooden bench in layered denim, shirts and a cap'),
      img('us-banner', 'Five smiling models in colourful polo shirts against a blue sky banner'),
    ],
    credits: '', // [ADD: photographer / models / year]
  },
  {
    slug: 'uspa-campaign-ss26',
    title: 'Campaign',
    brand: USPA,
    season: 'SS’26',
    category: 'Campaign',
    summary: 'Modern Marine. Stripes, sun and a very good tote.',
    role: 'Led campaign and social media styling, from concept to shoot execution.',
    cover: img('us-ss26-reading', 'Model in a pink jacket reading in soft, sunlit light', '80% 30%'),
    images: [img('us-ss26-reading', 'Model in a pink jacket reading in soft, sunlit light')],
    moodboards: [img('mb-modern-marine', 'Modern Marine moodboard: nautical stripes, red accents and beachwear references')],
    credits: '',
  },
  {
    slug: 'flying-machine-hyper-nature',
    title: 'Hyper Nature',
    brand: FM,
    season: '',
    category: 'Campaign',
    summary: 'Outdoors, but make it streetwear.',
    role: 'Developed styling concepts and outfit combinations aligned with Flying Machine’s identity.',
    cover: img('fm-hyper-nature', 'Model in a rust-brown Hyper Nature sweatshirt, portrait'),
    images: [
      img('fm-hyper-nature', 'Model in a rust-brown Hyper Nature sweatshirt, portrait'),
      img('fm-mono', 'Black-and-white still of a model in cargo trousers beside cardboard boxes'),
    ],
    moodboards: [img('mb-hyper-nature', 'Hyper Nature moodboard: layered outdoor looks in greens and earth tones')],
    credits: '',
  },
  {
    slug: 'flying-machine-k-street',
    title: 'K-Street',
    brand: FM,
    season: '',
    category: 'Campaign',
    summary: 'A supermarket aisle turned into a runway.',
    role: 'Directed campaign and social shoot styling. Led model styling, garment pairing and accessories.',
    cover: img('fm-kstreet-b-2', 'Model in sunglasses and a graphic tee holding snack packets in a stocked aisle'),
    images: [
      img('fm-kstreet-b-2', 'Model in sunglasses and a graphic tee holding snack packets in a stocked aisle'),
      img('fm-kstreet-1', 'Model in a graphic tee and gingham skirt in a styled supermarket aisle'),
      img('fm-kstreet-2', 'Group of models in graphic tees among supermarket shelves'),
      img('fm-kstreet-3', 'Model in a graphic raglan tee leaning on shelves of snacks'),
      img('fm-kstreet-b-1', 'Model seated in a shopping trolley in a snack-aisle set'),
      img('fm-kstreet-b-3', 'Models in oversized graphic tees surrounded by snacks'),
      img('fm-sofa', 'Two models on a yellow sofa in a sun-flared campaign frame'),
    ],
    moodboards: [img('mb-kstreet', 'K-Street moodboard: collage of street-style snapshots')],
    credits: '',
  },
  {
    slug: 'flying-machine-red-room',
    title: 'Red Room',
    brand: FM,
    season: '',
    category: 'Campaign',
    summary: 'One colour. Zero apologies.',
    role: 'Styled the campaign looks and directed model styling for the Flying Machine key art.',
    cover: img('fm-silhouette', 'Silhouetted model in boots striding against a saturated red backdrop'),
    images: [
      img('fm-silhouette', 'Silhouetted model in boots striding against a saturated red backdrop'),
      img('fm-phone', 'Model in a hooded jacket filming on a phone, lit in red'),
      img('fm-walk', 'Silhouetted model walking on a red set'),
    ],
    moodboards: [img('mb-laundered-black', 'Laundered Black moodboard: monochrome denim and street looks')],
    credits: '',
  },
  {
    slug: 'uspa-campaign-aw25',
    title: 'Campaign',
    brand: USPA,
    season: 'AW’25',
    category: 'Campaign',
    summary: 'Safari tones, heritage prints, desert light.',
    role: 'Led campaign and social media styling, from concept to shoot execution.',
    cover: img('us-aw25-peaks', 'U.S. Polo Assn. autumn-winter title frame over a mountain range at sunset'),
    images: [img('us-aw25-peaks', 'U.S. Polo Assn. autumn-winter title frame over a mountain range at sunset')],
    moodboards: [
      img('mb-safari', 'Safari moodboard: horses, neutrals and wide-brim hats'),
      img('mb-heritage', 'Heritage moodboard: rich rugs, prints and portrait references'),
    ],
    credits: '',
  },
  {
    slug: 'uspa-campaign-ss25',
    title: 'Campaign',
    brand: USPA,
    season: 'SS’25',
    category: 'Campaign',
    summary: 'Garden party dresses, stone statues, golden hour.',
    role: 'Executed campaign styling for U.S. Polo Assn. womenswear.',
    cover: img('us-ss25-statues', 'Model in a patterned dress standing between stone statues in a garden', '50% 40%'),
    images: [img('us-ss25-statues', 'Model in a patterned dress standing between stone statues in a garden')],
    moodboards: [img('mb-garden', 'Garden moodboard: gazebo, greenery and summer dresses')],
    credits: '',
  },
  {
    slug: 'uspa-summer-catalogue',
    title: 'Summer Catalogue',
    brand: USPA,
    season: '',
    category: 'Catalogue & E-commerce',
    summary: 'Clean looks that sell. Styled to be shoppable.',
    role: 'Catalogue and e-commerce styling for U.S. Polo Assn.',
    cover: img('us-summer-a-1', 'Model in a pale blue striped shirt and jeans on a white background', 'center 0%'),
    images: [
      img('us-summer-a-1', 'Model in a pale blue striped shirt and jeans on a white background'),
      img('us-summer-a-2', 'Model in a knitted dress with a scarf over the shoulders'),
      img('us-summer-a-3', 'Model in a graphic tee with a striped sweater tied at the waist'),
      img('us-summer-b-1', 'Model in a floral tee and pink skirt with a red scarf'),
      img('us-summer-b-2', 'Model in a cream tee and jeans with a scarf at the waist'),
      img('us-summer-b-3', 'Model in a red shirt and beige trousers'),
    ],
  },
  {
    slug: 'uspa-winter-catalogue',
    title: 'Winter Catalogue',
    brand: USPA,
    season: '',
    category: 'Catalogue & E-commerce',
    summary: 'Wood panelling, plaid, polos with crests.',
    role: 'Catalogue and e-commerce styling for U.S. Polo Assn.',
    cover: img('us-winter-a-1', 'Model in a maroon polo with a crest, against wooden panelling', 'center 8%'),
    images: [
      img('us-winter-a-1', 'Model in a maroon polo with a crest, against wooden panelling'),
      img('us-winter-a-2', 'Model in a white shirt and tartan coat'),
      img('us-winter-a-3', 'Model in a rust jumper and checked jacket'),
      img('us-winter-polo', 'Model in a blue polo and plaid pleated skirt'),
      img('us-winter-uspa', 'Model in a navy USPA sweatshirt with a blue scarf and plaid skirt'),
    ],
  },
  {
    slug: 'uspa-footwear-accessories-26',
    title: 'Footwear & Accessories',
    brand: USPA,
    season: '’26',
    category: 'Influencer & Content',
    summary: 'Bags, loafers and a very red set. Made for the feed.',
    role: 'Led social media styling for the footwear and accessories series, including Top Picks, Fit Check and What’s in my bag.',
    cover: img('us-fw-1', 'Model in a blue shirt and white shorts on a red set'),
    images: [
      img('us-fw-1', 'Model in a blue shirt and white shorts on a red set'),
      img('us-fw-2', 'Model in a red cardigan holding heeled footwear on a pink armchair'),
      img('us-fw-3', 'Model in a lime jacket and jeans seated on stone steps with loafers'),
    ],
  },
];

export const categoriesOrder = [
  'Campaign',
  'Catalogue & E-commerce',
  'Visual Merchandising',
  'Influencer & Content',
  'Personal / Editorial',
];
