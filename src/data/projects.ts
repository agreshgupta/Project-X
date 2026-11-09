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
      img('out/05 Marketing Campaign AW\'26/slide33_01', 'Three models in navy and red polos and a green varsity sweater reading books in a library corner'),
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
    cover: img('out/06 USPA Campaign SS\'26/slide37_01', 'Two models laughing on a sunlit beach in a red-print shirt dress and wide-leg jeans', '50% 30%'),
    images: [
      img('out/06 USPA Campaign SS\'26/slide37_01', 'Two models laughing on a sunlit beach in a red-print shirt dress and wide-leg jeans'),
      img('out/06 USPA Campaign SS\'26/slide37_02', 'Green and red ringer tees with a striped tote on a navy-striped lounger by a pool'),
      img('out/06 USPA Campaign SS\'26/slide39_01', 'Model in a floral-print shirt and cream trousers on a striped beach lounger at sunset'),
      img('out/06 USPA Campaign SS\'26/slide39_02', 'Three models in blue polo, red graphic tee and floral shirt relaxing on a striped beach towel'),
      img('out/06 USPA Campaign SS\'26/slide39_03', 'Model in a floral-print shirt seated on a striped towel with a straw hat on the beach'),
      img('out/06 USPA Campaign SS\'26/slide40_01', 'Model in a cream rugby polo, navy track pants and cap leaning on a post by a pool'),
      img('out/06 USPA Campaign SS\'26/slide40_02', 'Two models on striped loungers by the sea, one in a cream knit dress and silk scarf'),
      img('out/06 USPA Campaign SS\'26/slide40_03', 'Smiling model in a cream knit dress with a printed silk scarf by the sea'),
      img('out/06 USPA Campaign SS\'26/slide41_01', 'Model in a white tank and light wide-leg jeans carrying tan buckle sandals poolside'),
      img('out/06 USPA Campaign SS\'26/slide41_02', 'Two models poolside taking a selfie with a camcorder in a floral tee and striped shirt'),
      img('out/06 USPA Campaign SS\'26/slide41_03', 'Model in a floral tee and bandana holding watermelon at the edge of a pool'),
      img('out/06 USPA Campaign SS\'26/slide42_01', 'Model in a red striped knit polo and beige trousers leaning on a wooden post by a pool'),
      img('out/06 USPA Campaign SS\'26/slide42_02', 'Model in a mustard textured polo dress seated on a cream lounge chair'),
      img('out/06 USPA Campaign SS\'26/slide42_03', 'Model in a brown geometric-print shirt dress walking along the shoreline at golden hour'),
    ],
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
    cover: img('out/02 Hyper Nature/slide13_01', 'Two models in graphic sweatshirts, one with a plaid skirt and rotary phone, in an overgrown office set'),
    images: [
      img('fm-hyper-nature', 'Model in a rust-brown Hyper Nature sweatshirt, portrait'),
      img('fm-mono', 'Black-and-white still of a model in cargo trousers beside cardboard boxes'),
      img('out/02 Hyper Nature/slide13_01', 'Two models in graphic sweatshirts, one with a plaid skirt and rotary phone, in an overgrown office set'),
      img('out/02 Hyper Nature/slide13_02', 'Model in a navy Wanderlust sweatshirt seated in grass beside a model in denim by a photocopier'),
      img('out/02 Hyper Nature/slide13_03', 'Two models in green Wild Woods sweatshirts beside a filing cabinet among mossy rocks'),
      img('out/02 Hyper Nature/slide14_01', 'Model in a Blossom sweatshirt and plaid skirt on an office chair as papers fly through a wild garden'),
      img('out/02 Hyper Nature/slide14_02', 'Two models in a cropped black jacket and a red sweatshirt leaning on a photocopier among plants'),
      img('out/02 Hyper Nature/slide14_03', 'Model in a cropped black jacket and grey cargo trousers on a step ladder among cardboard boxes'),
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
    ],
    moodboards: [img('mb-kstreet', 'K-Street moodboard: collage of street-style snapshots')],
    credits: '',
  },
  {
    slug: 'flying-machine-laundered-black',
    title: 'Laundered Black',
    brand: FM,
    season: '',
    category: 'Campaign',
    summary: 'Washed-black denim, wide legs and a little rock ’n’ roll.',
    role: 'Styled the denim campaign, building washed-black and grey looks across studio and street sets.',
    cover: img('out/01 Laundred Black/slide07_01', 'Two models in washed-black and grey wide-leg denim in a moody living-room set', '50% 30%'),
    images: [
      img('out/01 Laundred Black/slide07_02', 'Model in a sheer-sleeve black top and black wide-leg jeans holding a mug by a leather sofa'),
      img('out/01 Laundred Black/slide07_03', 'Model in a black graphic tee and grey washed jeans seated on a leather sofa'),
      img('out/01 Laundred Black/slide07_04', 'Close crop of black and grey wide-leg denim with ankle boots and chunky loafers'),
      img('out/01 Laundred Black/slide08_01', 'Model in a cropped graphic tee and grey wide-leg jeans against an industrial wall'),
      img('out/01 Laundred Black/slide08_02', 'Model in a striped open shirt and washed-black jeans against a metal shutter'),
      img('out/01 Laundred Black/slide08_03', 'Model in a rose graphic tee and black wide-leg jeans beside a motorbike'),
    ],
    moodboards: [img('out/01 Laundred Black/Mood board', 'Laundered Black moodboard: washed-black and grey denim, white tanks and wide-leg silhouettes')],
    credits: '',
  },
//   {
//     slug: 'flying-machine-red-room',
//     title: 'Red Room',
//     brand: FM,
//     season: '',
//     category: 'Campaign',
//     summary: 'One colour. Zero apologies.',
//     role: 'Styled the campaign looks and directed model styling for the Flying Machine key art.',
//     cover: img('fm-silhouette', 'Silhouetted model in boots striding against a saturated red backdrop'),
//     images: [
//       img('fm-silhouette', 'Silhouetted model in boots striding against a saturated red backdrop'),
//       img('fm-phone', 'Model in a hooded jacket filming on a phone, lit in red'),
//       img('fm-walk', 'Silhouetted model walking on a red set'),
//     ],
//     moodboards: [img('mb-laundered-black', 'Laundered Black moodboard: monochrome denim and street looks')],
//     credits: '',
//   },
  {
    slug: 'uspa-campaign-aw25',
    title: 'Campaign',
    brand: USPA,
    season: 'AW’25',
    category: 'Campaign',
    summary: 'Safari tones, heritage prints, desert light.',
    role: 'Led campaign and social media styling, from concept to shoot execution.',
    cover: img('out/07 USPA Campaign AW\'25/slide49_01', 'Model in a beige polo and trousers resting her hand on a white horse in the desert', '50% 30%'),
    images: [
      img('out/07 USPA Campaign AW\'25/slide48_01', 'Model in a green striped shirt with a cream knit over the shoulders in a desert valley'),
      img('out/07 USPA Campaign AW\'25/slide48_02', 'Model in an olive knit dress with a navy printed scarf belt against sandstone rocks'),
      img('out/07 USPA Campaign AW\'25/slide48_03', 'Model in sunglasses, an olive polo and dark trousers with a tan belt walking through dunes'),
      img('out/07 USPA Campaign AW\'25/slide49_01', 'Model in a beige polo and trousers resting her hand on a white horse in the desert'),
      img('out/07 USPA Campaign AW\'25/slide49_02', 'Model in a navy leaf-print blouse and beige shorts against desert hills'),
      img('out/07 USPA Campaign AW\'25/slide49_03', 'Model in an olive belted shirt dress and boots standing in dry desert grass'),
      img('out/07 USPA Campaign AW\'25/slide50_01', 'Model in a rust USPA polo with a silk scarf at the waist in a desert landscape'),
      img('out/07 USPA Campaign AW\'25/slide50_02', 'Model in a rust USPA polo and matching trousers walking beneath mountains'),
      img('out/07 USPA Campaign AW\'25/slide50_03', 'Smiling model in a brown wool coat and cream knit in warm desert light'),
      img('out/07 USPA Campaign AW\'25/slide50_04', 'Model laughing in a brown coat, cable-knit turtleneck and belted cream trousers'),
      img('out/07 USPA Campaign AW\'25/slide51_01', 'Model in a houndstooth coat, crest tee and dark jeans on a rocky desert slope'),
      img('out/07 USPA Campaign AW\'25/slide51_02', 'Model in a houndstooth coat and crest tee with hands in pockets under a blue sky'),
      img('out/07 USPA Campaign AW\'25/slide51_03', 'Model in a black and rust leaf-print shirt and cream jeans in the desert'),
      img('out/07 USPA Campaign AW\'25/slide51_04', 'Model in a cream shirt with botanical embroidery and cream jeans against desert peaks'),
    ],
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
    cover: img('out/08 USPA Campaign SS\'25/slide58_01', 'Model in a white botanical-hem dress with a straw bag on garden steps beside a cherub statue', '50% 35%'),
    images: [
      img('out/08 USPA Campaign SS\'25/slide54_01', 'ELLE April 2025 partner feature cover: model in a white embroidered shirt and shorts with a straw bag beside a cherub statue'),
      img('out/08 USPA Campaign SS\'25/slide56_01', 'Model in a red and pink leaf-print shirt dress on a lawn lined with cypress trees'),
      img('out/08 USPA Campaign SS\'25/slide56_02', 'Model in a lilac wave-stripe wrap dress by a pool with classical statues at sunset'),
      img('out/08 USPA Campaign SS\'25/slide56_03', 'Model in a purple and white floral puff-sleeve dress leaning against an ochre wall'),
      img('out/08 USPA Campaign SS\'25/slide57_01', 'Model in a light blue shirt dress holding a sun hat beside a pool and hydrangeas'),
      img('out/08 USPA Campaign SS\'25/slide57_02', 'Model in a green floral midi dress and wedge sandals on sunlit stone steps'),
      img('out/08 USPA Campaign SS\'25/slide57_03', 'Model in a striped belted shirt dress holding a straw hat in a garden gazebo'),
      img('out/08 USPA Campaign SS\'25/slide57_04', 'Model in a blue printed shirt dress on a lawn in front of cypress trees'),
      img('out/08 USPA Campaign SS\'25/slide58_01', 'Model in a white botanical-hem dress with a straw bag on garden steps beside a cherub statue'),
      img('out/08 USPA Campaign SS\'25/slide58_02', 'Model in a red floral puff-sleeve dress standing in a stone garden gazebo'),
      img('out/08 USPA Campaign SS\'25/slide58_03', 'Model in an orange polo and cream jeans leaning on a column beside a stone fountain'),
      img('out/08 USPA Campaign SS\'25/slide58_04', 'Model in an orange polo, cream flared jeans and heels by a fountain and terracotta arches'),
    ],
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
    cover: img('out/10 Winter Catalogue/slide69_03', 'Model in a navy pinstripe crest blazer, argyle polo and pleated pinstripe skirt against wooden panelling', '50% 20%'),
    images: [
      img('out/10 Winter Catalogue/slide69_03', 'Model in a navy pinstripe crest blazer, argyle polo and pleated pinstripe skirt against wooden panelling'),
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
    cover: img('out/04 Footwear & Accessories\'26/slide32_04', 'Model in a pink shirt and burgundy knit seated on a pink armchair with a monogram tote bag', '60% 40%'),
    images: [
      img('out/04 Footwear & Accessories\'26/slide30_01', 'Model in a blue USPA shirt, white shorts and a brown buckle belt on a red set'),
      img('out/04 Footwear & Accessories\'26/slide30_02', 'Model in a blue USPA shirt adjusting white chunky sneakers on a red set'),
      img('out/04 Footwear & Accessories\'26/slide30_03', 'Smiling model in a blue USPA shirt and white shorts against a red backdrop'),
      img('out/04 Footwear & Accessories\'26/slide31_01', 'Model in a lime shirt and jeans seated on sandstone steps holding brown monogram loafers'),
      img('out/04 Footwear & Accessories\'26/slide31_02', 'Model in a lime shirt, white tank and wide-leg jeans in front of an arched doorway'),
      img('out/04 Footwear & Accessories\'26/slide31_03', 'Model in a lime shirt and jeans seated on steps wearing brown monogram loafers'),
      img('out/04 Footwear & Accessories\'26/slide32_02', 'Model in a pink crest shirt and cream trousers leaning against a wall'),
      img('out/04 Footwear & Accessories\'26/slide32_03', 'Model leaning on a pink armchair holding blush horsebit loafers'),
      img('out/04 Footwear & Accessories\'26/slide32_04', 'Model in a pink shirt and burgundy knit seated on a pink armchair with a monogram tote bag'),
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
