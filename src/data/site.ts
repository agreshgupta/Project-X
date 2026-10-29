/**
 * ============================================================
 *  SITE SETTINGS  –  the one file to edit for text & links
 * ============================================================
 *  Everything marked [ADD: …] or "dummy" is waiting for your real details.
 */
export const site = {
  name: 'Sanskriti Basnet',
  firstName: 'Sanskriti',
  lastName: 'Basnet',
  title: 'Stylist & Visual Merchandiser',
  location: 'Bengaluru, India',
  url: 'https://sanskritibasnet.com', // [ADD: real domain once bought]

  // Hero tagline. Alternatives to try: "I style it. I frame it first." / "From camera frame to shop floor."
  tagline: 'Garments in. Stories out.',

  // SEO
  seoTitle: 'Sanskriti Basnet | Stylist & Visual Merchandiser, Bengaluru',
  seoDescription:
    'Womenswear stylist and visual merchandiser in Bengaluru. Campaign, catalogue and retail styling for Flying Machine, U.S. Polo Assn. and Arrow.',

  // Brand names shown as TEXT ONLY (no logos, no implied endorsement)
  brands: ['Flying Machine', 'U.S. Polo Assn.', 'Arrow'],

  // ---------- CONTACT ----------
  email: 'sanskritibasnet2001@gmail.com',
  // Phone stays OFF the public site until you say so. Set showPhone: true to display it.
  phone: '8918234098',
  showPhone: false,

  // ---------- LINKS (DUMMY – replace with real ones) ----------
  links: {
    instagram: 'https://www.instagram.com/the.pixiee', // [ADD: your Instagram]
    linkedin: 'https://www.linkedin.com/in/sanskriti-basnet-86bab8200/', // [ADD: your LinkedIn]
    canva: 'https://canva.link/10684wooocm0gbb', // [ADD: your Canva portfolio link]
    cv: '/sanskriti-basnet-cv.pdf', // [ADD: drop your CV PDF into /public with this name]
  },

  // ---------- ABOUT ----------
  // Optional portrait. Put a photo in /public/work and write its file name (no extension), e.g. 'portrait'
  portrait: '' as string,
  aboutHeadline: 'I build looks the way a director frames a scene.',
  aboutText:
    'Two years leading styling and creative direction for Arvind Womenswear’s marketing and catalogue shoots. Set, pose, garment pairing, final frame. A cinematography degree taught me to see the shot before it exists. Retail taught me what actually sells.',

  // ---------- IMPACT NUMBERS ----------
  // These come from your own portfolio slides. Set to false to hide them in one click
  // if any brand asks you to keep them private.
  showImpactNumbers: true,
};

/** Numbers shown in the stats band. Taken from your portfolio and CV – edit freely. */
export const stats = {
  headline: [
    { value: '100+', label: 'U.S. Polo Assn. stores styled pan-India' },
    { value: '3', label: 'womenswear brands under one visual direction' },
    { value: '2+', label: 'years leading campaign and catalogue shoots' },
  ],
  byBrand: [
    {
      brand: 'Flying Machine',
      items: [
        { value: '6.4X', label: 'engagement growth' },
        { value: '3X', label: 'campaign reach' },
        { value: '3.49 → 6.89', label: 'campaign ROI' },
      ],
    },
    {
      brand: 'U.S. Polo Assn.',
      items: [
        { value: '2X', label: 'engagement growth' },
        { value: '1.8X', label: 'new customer acquisition' },
        { value: '1.8X', label: 'organic contribution' },
        { value: '50%', label: 'YoY impressions' },
      ],
    },
  ],
};

/** Experience timeline (from your CV). */
export const experience = [
  {
    role: 'Asst. Manager, Stylist & VM',
    company: 'Arvind Fashions Limited, Womenswear',
    period: '2025 – Present',
    brands: 'U.S. Polo Assn., Flying Machine, Arrow',
    points: [
      'Lead womenswear styling and visual direction across three brands.',
      'Lead campaign, catalogue and e-commerce shoots, from styling to execution.',
      'Drive U.S. Polo Assn. womenswear VM across 100+ stores pan-India.',
      'Review styling decks and guide junior stylists.',
    ],
  },
  {
    role: 'Management Trainee, Stylist & VM',
    company: 'Arvind Fashions Limited, Womenswear',
    period: '2024 – 2025',
    brands: 'U.S. Polo Assn., Flying Machine',
    points: [
      'Executed campaign, catalogue and e-commerce styling for U.S. Polo Assn.',
      'Led pan-India VM execution and brand presentation.',
      'Styled Flying Machine campaigns and influencer collaborations.',
    ],
  },
];

export const skills = [
  'Styling',
  'Creative direction',
  'Visual merchandising',
  'Season launch execution',
  'Planograms',
  'Campaign management',
  'Influencer & content styling',
  'Trend research',
];

export const education = [
  { degree: 'Masters in Fashion Management', school: 'NIFT, Kolkata' },
  { degree: 'B.Sc. in Mass Communication & Cinematography', school: 'St. Xavier’s College, Kolkata' },
];

export const languages = ['English', 'Hindi', 'Bengali', 'Nepali'];
