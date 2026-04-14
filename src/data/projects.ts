type GalleryImage = {
  src: string;
  alt: string;
  position?: string;
  fit?: string;
  captionOpacity?: string;
};

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const withBase = (path: string) => `${base}${path.replace(/^\/+/, '')}`;

export type WorkProject = {
  slug: string;
  category: string;
  name: string;
  subtitle: string;
  description: string;
  client: string;
  services: string;
  location: string;
  cover: GalleryImage;
  gallery: GalleryImage[];
};

const image = (
  src: string,
  alt: string,
  position = '50% 62%',
  fit = 'cover',
  captionOpacity = '0.5'
): GalleryImage => ({
  src: withBase(src),
  alt,
  position,
  fit,
  captionOpacity,
});

export const workProjects: WorkProject[] = [
  {
    slug: 'district-block-b',
    category: 'Mixed-Use',
    name: 'District (Block B)',
    subtitle: 'Township of Langley',
    description:
      'Willoughby Town Centre mixed-use hub combining office, retail, library, and residential uses to give the District a civic heart and strong daily street life.',
    client: 'Pollyco',
    services: 'Mixed-use (Multi-Family, Office & Retail)',
    location: 'Township of Langley',
    cover: image('/client-images/district-block-b/featured.jpg', 'Featured view of District (Block B)'),
    gallery: [
      image('/client-images/district-block-b/featured.jpg', 'Featured view of District (Block B)'),
      image('/client-images/district-block-b/01.jpg', 'Additional project image for District (Block B)'),
      image('/client-images/district-block-b/02.jpg', 'Additional project image for District (Block B)'),
      image('/client-images/district-block-b/03.jpg', 'Additional project image for District (Block B)'),
      image('/client-images/district-block-b/04.jpg', 'Additional project image for District (Block B)'),
      image('/client-images/district-block-b/05.jpg', 'Additional project image for District (Block B)'),
    ],
  },
  {
    slug: 'mission-village-at-the-ponds',
    category: 'Retail',
    name: 'Mission Village at the Ponds',
    subtitle: 'Kelowna, BC',
    description:
      'Village-centre retail development in Upper Mission shaped by trestle-inspired forms, walkable plazas, and a tenant mix built around everyday community use.',
    client: 'Callahan Property Group',
    services: 'Retail',
    location: 'Kelowna, BC',
    cover: image('/client-images/mission-village-at-the-ponds/featured.jpg', 'Featured view of Mission Village at the Ponds'),
    gallery: [
      image('/client-images/mission-village-at-the-ponds/featured.jpg', 'Featured view of Mission Village at the Ponds'),
      image('/client-images/mission-village-at-the-ponds/01.jpg', 'Additional project image for Mission Village at the Ponds'),
      image('/client-images/mission-village-at-the-ponds/02.jpg', 'Additional project image for Mission Village at the Ponds'),
      image('/client-images/mission-village-at-the-ponds/03.jpg', 'Additional project image for Mission Village at the Ponds'),
      image('/client-images/mission-village-at-the-ponds/04.jpg', 'Additional project image for Mission Village at the Ponds'),
      image('/client-images/mission-village-at-the-ponds/05.jpg', 'Additional project image for Mission Village at the Ponds'),
    ],
  },
  {
    slug: 'fairwinds',
    category: 'Mixed-Use',
    name: 'Fairwinds',
    subtitle: 'Nanoose Bay, BC',
    description:
      'Marina-adjacent mixed-use development pairing a repurposed hotel commercial hub with a new six-storey residential building at Schooner Cove.',
    client: 'FW Enterprises Ltd.',
    services: 'Mixed-use (Multi-Family & Commercial)',
    location: 'Nanoose Bay, BC',
    cover: image('/client-images/fairwinds/featured.jpg', 'Featured view of Fairwinds'),
    gallery: [
      image('/client-images/fairwinds/featured.jpg', 'Featured view of Fairwinds'),
      image('/client-images/fairwinds/01.jpg', 'Additional project image for Fairwinds'),
      image('/client-images/fairwinds/02.jpg', 'Additional project image for Fairwinds'),
      image('/client-images/fairwinds/03.jpg', 'Additional project image for Fairwinds'),
    ],
  },
  {
    slug: 'the-carleton',
    category: 'Mixed-Use',
    name: 'The Carleton',
    subtitle: 'Burnaby, BC',
    description:
      'Five-storey Burnaby strata project using NLT floor panels and exposed wood ceilings to create a distinctive multi-residential and retail offering.',
    client: 'Censorio Group',
    services: 'Mixed Use (Multi-Family & Retail)',
    location: 'Burnaby, BC',
    cover: image('/client-images/the-carleton/featured.jpg', 'Featured view of The Carleton'),
    gallery: [
      image('/client-images/the-carleton/featured.jpg', 'Featured view of The Carleton'),
      image('/client-images/the-carleton/01.jpg', 'Additional project image for The Carleton'),
      image('/client-images/the-carleton/02.jpg', 'Additional project image for The Carleton'),
      image('/client-images/the-carleton/03.jpg', 'Additional project image for The Carleton'),
    ],
  },
  {
    slug: 'centre-of-newton-office',
    category: 'Mixed-Use',
    name: 'Centre of Newton Office',
    subtitle: 'Surrey, BC',
    description:
      'Infill mixed-use office and retail project extending the pedestrian main street, using the sloped site to organize frontage, parking, and LEED Platinum performance.',
    client: 'Value Group',
    services: 'Mixed-use (Office & Retail)',
    location: 'Surrey, BC',
    cover: image('/client-images/centre-of-newton-office/featured.jpg', 'Featured view of Centre of Newton Office', '50% 92%', 'cover', '0.5'),
    gallery: [
      image('/client-images/centre-of-newton-office/featured.jpg', 'Featured view of Centre of Newton Office', '50% 92%', 'cover', '0.5'),
      image('/client-images/centre-of-newton-office/01.JPG', 'Additional project image for Centre of Newton Office', '50% 92%', 'cover', '0.5'),
      image('/client-images/centre-of-newton-office/02.JPG', 'Additional project image for Centre of Newton Office', '50% 92%', 'cover', '0.5'),
      image('/client-images/centre-of-newton-office/03.JPG', 'Additional project image for Centre of Newton Office'),
      image('/client-images/centre-of-newton-office/04.JPG', 'Additional project image for Centre of Newton Office'),
    ],
  },
  {
    slug: 'central-at-garden-city',
    category: 'Retail',
    name: 'Central @ Garden City',
    subtitle: 'Richmond, BC',
    description:
      'Large-format urban retail centre in Richmond with an animated high street, integrated anchors, internalized parking, and connected public open space.',
    client: 'SmartREIT',
    services: 'Retail',
    location: 'Richmond, BC',
    cover: image('/client-images/central-at-garden-city/featured.jpg', 'Featured view of Central at Garden City'),
    gallery: [
      image('/client-images/central-at-garden-city/featured.jpg', 'Featured view of Central at Garden City'),
      image('/client-images/central-at-garden-city/01.jpg', 'Additional project image for Central at Garden City'),
      image('/client-images/central-at-garden-city/02.jpg', 'Additional project image for Central at Garden City'),
      image('/client-images/central-at-garden-city/03.jpg', 'Additional project image for Central at Garden City'),
      image('/client-images/central-at-garden-city/04.jpg', 'Additional project image for Central at Garden City'),
    ],
  },
  {
    slug: 'starbucks',
    category: 'Retail',
    name: 'Starbucks',
    subtitle: 'Various',
    description:
      'Ongoing regional rollout work delivering base building design, store planning, consultant coordination, and contract administration across Western Canada.',
    client: 'Starbucks',
    services: 'Retail',
    location: 'Various',
    cover: image('/client-images/starbucks/featured.jpg', 'Featured view of Starbucks project'),
    gallery: [
      image('/client-images/starbucks/featured.jpg', 'Featured view of Starbucks project'),
      image('/client-images/starbucks/01.jpg', 'Additional project image for Starbucks'),
      image('/client-images/starbucks/02.jpg', 'Additional project image for Starbucks'),
      image('/client-images/starbucks/03.jpg', 'Additional project image for Starbucks'),
    ],
  },
  {
    slug: 'london-drugs',
    category: 'Retail',
    name: 'London Drugs',
    subtitle: 'Various',
    description:
      'Long-term retail design partnership spanning new and renovated stores in urban, suburban, and shopping-centre formats across Western Canada.',
    client: 'London Drugs',
    services: 'Retail',
    location: 'Various',
    cover: image('/client-images/london-drugs/featured.JPEG', 'Featured view of London Drugs project', '50% 100%', 'cover'),
    gallery: [
      image('/client-images/london-drugs/featured.JPEG', 'Featured view of London Drugs project', '50% 100%', 'cover'),
      image('/client-images/london-drugs/01.jpg', 'Additional project image for London Drugs', '50% 100%', 'cover', '0.5'),
      image('/client-images/london-drugs/02.JPEG', 'Additional project image for London Drugs', '50% 58%'),
    ],
  },
  {
    slug: 'leons-expansion',
    category: 'Industrial',
    name: 'Leons Expansion',
    subtitle: 'Delta, BC',
    description:
      'Warehouse expansion for an active Delta distribution complex, adding future-ready shell space, mezzanine area, and additional full-size loading bays.',
    client: 'Beedie',
    services: 'Industrial',
    location: 'Delta, BC',
    cover: image('/client-images/leons-expansion/featured.jpg', 'Featured view of Leons Expansion'),
    gallery: [
      image('/client-images/leons-expansion/featured.jpg', 'Featured view of Leons Expansion'),
      image('/client-images/leons-expansion/01.jpg', 'Additional project image for Leons Expansion'),
      image('/client-images/leons-expansion/02.jpg', 'Additional project image for Leons Expansion'),
      image('/client-images/leons-expansion/03.JPEG', 'Additional project image for Leons Expansion'),
      image('/client-images/leons-expansion/04.JPEG', 'Additional project image for Leons Expansion'),
    ],
  },
];
