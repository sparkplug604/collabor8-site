type GalleryImage = {
  src: string;
  alt: string;
  position?: string;
  fit?: string;
  scale?: string;
  modalPosition?: string;
  modalFit?: string;
  modalScale?: string;
  mobileModalPosition?: string;
  mobileModalFit?: string;
  mobileModalScale?: string;
  credit?: string;
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
      'This transformative urban development in the Township of Langley is the heart of the Willoughby Town Centre. Consisting of over 30,000 sqft of office space and 35,000 sf of retail space, this development will be home to the Fraser Valley Public Library, servicing the 92 new residential homes created in the District.',
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
      'The development is situated on a 7-acre site in the Ponds area of Upper Mission in Kelowna, BC with Phases 1 and 2 comprising approximately 100,000 sqft of retail. The site is designated as a Village Centre providing day to day services and acts as a social hub for the area\'s residents. The use of stylized wood trestle elements are a nod to the nearby iconic train trestles and have been integrated into the design of the buildings, signage and landscape creating a unique local character to the development. An intricate pedestrian path system throughout the site is combined with localized, intimate plaza areas, creating informal gathering places for the community.',
    client: 'Callahan Property Group',
    services: 'Retail',
    location: 'Kelowna, BC',
    cover: image('/client-images/mission-village-at-the-ponds/featured.jpg', 'Featured view of Mission Village at the Ponds'),
    gallery: [
      image('/client-images/mission-village-at-the-ponds/featured.jpg', 'Featured view of Mission Village at the Ponds'),
      image('/client-images/mission-village-at-the-ponds/01.jpg', 'Additional project image for Mission Village at the Ponds'),
      {
        ...image('/client-images/mission-village-at-the-ponds/02.jpg', 'Additional project image for Mission Village at the Ponds'),
        modalPosition: '50% 22%',
        modalFit: 'cover',
      },
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
      'The Fairwinds Landing mixed-use development is located at Schooner Cove near Nanoose Bay on Vancouver Island adjacent to the existing marina. The development is comprised of two buildings: the first is an existing hotel stripped down to its structure and repurposed to a new Service Commercial and Tourism Hub. The second is a new 6 storey, 39 strata unit residential building.',
    client: 'FW Enterprises Ltd.',
    services: 'Mixed-use (Multi-Family & Commercial)',
    location: 'Nanoose Bay, BC',
    cover: image('/client-images/fairwinds/03.jpg', 'Featured view of Fairwinds'),
    gallery: [
      image('/client-images/fairwinds/03.jpg', 'Featured view of Fairwinds'),
      image('/client-images/fairwinds/featured.jpg', 'Additional project image for Fairwinds'),
      image('/client-images/fairwinds/01.jpg', 'Additional project image for Fairwinds'),
      image('/client-images/fairwinds/02.jpg', 'Additional project image for Fairwinds'),
    ],
  },
  {
    slug: 'the-carleton',
    category: 'Mixed-Use',
    name: 'The Carleton',
    subtitle: 'Burnaby, BC',
    description:
      'This 5 storey, 28 unit strata-titled development is located in Burnaby, BC. Using mass timber floor construction with traditional wood framed walls, the innovative use of Nail Laminated Timber (NLT) panels for the floors allowed for exposed wood ceilings creating a striking unique aesthetic for the developer.',
    client: 'Censorio Group',
    services: 'Mixed Use (Multi-Family & Retail)',
    location: 'Burnaby, BC',
    cover: {
      ...image('/client-images/the-carleton/featured.jpg', 'Featured view of The Carleton', '50% 34%'),
      scale: '1.16',
    },
    gallery: [
      {
        ...image('/client-images/the-carleton/featured.jpg', 'Featured view of The Carleton', '50% 36%'),
        modalPosition: '50% 40%',
        modalFit: 'cover',
        modalScale: '1.06',
        mobileModalPosition: 'center',
        mobileModalFit: 'contain',
        mobileModalScale: '1',
      },
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
      'An infill project on an existing shopping centre site, this four storey mixed-use development features two levels of underground parking, three floors of office space and retail on two floors making creative use of the sloping site. The building is sited against the existing pedestrian oriented neighborhood along 137th Street, continuing the Main Street retail frontage. The second level retail backs onto the existing Power Centre style shopping centre with at grade parking on the podium. The 45,000 sqft development received LEED Platinum certification.',
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
      'Comprising approximately 325,000 sqft on a 16.3 acre site, this two storey compact urban retail development is a planned life-style centre, with an animated High Street threaded through the development. A dedicated public and pedestrian right-of-way is woven through the project, connecting Alexandra Way with the Alexandra neighbourhood. This unique project integrates a new 2 level Wal-Mart within a variety of CRUs and mid-size anchors. Parking is internalized to reinforce the streetscape along Alderbridge Way. In addition, approximately 1.65 acres of the site is dedicated as parkland to augment adjoining City property as a public benefit.',
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
      'Working with Starbucks at locations across BC, Alberta and Saskatchewan, our responsibilities include base building design, store layout, coordination of all consultants, working drawings and contract administration.',
    client: 'Starbucks',
    services: 'Retail',
    location: 'Various',
    cover: {
      ...image('/client-images/starbucks/new-featured.jpg', 'Featured view of Starbucks project', '50% 18%'),
      scale: '1.16',
    },
    gallery: [
      {
        ...image('/client-images/starbucks/new-featured.jpg', 'Featured view of Starbucks project', '50% 18%'),
        modalPosition: '50% 16%',
        modalFit: 'cover',
        modalScale: '1.12',
        mobileModalPosition: 'center',
        mobileModalFit: 'contain',
        mobileModalScale: '1',
      },
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
      'Architects for London Drugs for over 30 years. Our involvement in stores across BC, Alberta, Saskatchewan and Manitoba includes new and renovated stores in urban multi-level spaces, suburban prototypical pad buildings and regional shopping centres. Responsibilities include store layout design, building permit applications, coordination with base building team, working drawings and construction administration.',
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
      'A 102,000 sf expansion to an existing operating 430,000 sf warehouse and office complex will provide the future expansion space needed for the current tenant. The additional 100,000 warehouse and 2,000 sf mezzanine added an additional 25 full size bays and 2 at grade bays. Built to shell building specifications, the space is ready for sublease. Photos by Hornell Creative Inc.',
    client: 'Beedie',
    services: 'Industrial',
    location: 'Delta, BC',
    cover: image('/client-images/leons-expansion/featured.jpg', 'Featured view of Leons Expansion', '50% 18%'),
    gallery: [
      {
        ...image('/client-images/leons-expansion/featured.jpg', 'Featured view of Leons Expansion', '50% 18%'),
        modalPosition: '50% 8%',
        modalFit: 'cover',
        modalScale: '1.14',
        mobileModalPosition: 'center',
        mobileModalFit: 'contain',
        mobileModalScale: '1',
        credit: 'Photo credit: Hornell Creative Inc.',
      },
      { ...image('/client-images/leons-expansion/01.jpg', 'Additional project image for Leons Expansion'), credit: 'Photo credit: Hornell Creative Inc.' },
      { ...image('/client-images/leons-expansion/02.jpg', 'Additional project image for Leons Expansion'), credit: 'Photo credit: Hornell Creative Inc.' },
      { ...image('/client-images/leons-expansion/03.JPEG', 'Additional project image for Leons Expansion'), credit: 'Photo credit: Hornell Creative Inc.' },
      { ...image('/client-images/leons-expansion/04.JPEG', 'Additional project image for Leons Expansion'), credit: 'Photo credit: Hornell Creative Inc.' },
    ],
  },
];
