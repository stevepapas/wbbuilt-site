export type PortfolioImage = {
  id: string;
  thumb: string;
  full: string;
  kind: 'interior' | 'exterior';
  alt: string;
  hidden?: boolean;
};

export type PortfolioProject = {
  slug: string;
  categorySlug: string;
  name: string;
  location: string;
  scope: string;
  highlights: string[];
  seoDescription: string;
  cardImage: string;
  cardAlt: string;
  heroImage: string;
  ogImage: string;
  manifestPath: string;
  galleryIntro?: string;
  reelVideo?: string;
  reelPoster?: string;
  reelCaption?: string;
};

export type PortfolioCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  seoDescription: string;
  cardImage: string;
  cardAlt: string;
  heroImage?: string;
};

const stLeonardsBase = '/images/portfolio/multi-residential-st-leonards';
const kerrStBase = '/images/portfolio/kerr-st-fitzroy';
const rockleyHouseBase = '/images/portfolio/rockley-house-south-yarra';
const hawthornGardenHouseBase = '/images/portfolio/hawthorn-garden-house';
const middleParkBase = '/images/portfolio/middle-park';
const armstrongHouseBase = '/images/portfolio/armstrong-house-albert-park';
const oxfordHouseBase = '/images/portfolio/oxford-house-newport';
const salfordHouseBase = '/images/portfolio/salford-house-balwyn';
const silverHouseBase = '/images/portfolio/silver-house-eltham';
const sunburyHouseBase = '/images/portfolio/sunbury-house';
const malvernEastBase = '/images/portfolio/malvern-east-multi-res';
const hothamHillBase = '/images/portfolio/hotham-hill-apartments';
const margotTownhouseBase = '/images/portfolio/margot-townhouse-doncaster';
const oconnellsHotelBase = '/images/portfolio/oconnells-hotel-south-melbourne';
const boydsBase = '/images/portfolio/boyds-south-yarra';
const collinsArchBase = '/images/portfolio/collins-arch-cafe';
const homeCoBase = '/images/portfolio/home-co';
const domain179Base = '/images/portfolio/179-domain-south-yarra';
const flyingDuckBase = '/images/portfolio/flying-duck-hotel-prahran';
const hobsonsBayBase = '/images/portfolio/hobsons-bay-hotel';
const orrongHotelBase = '/images/portfolio/orrong-hotel-toorak';
const rusticaBrightonBase = '/images/portfolio/rustica-brighton';
const rusticaQueenCollinsBase = '/images/portfolio/rustica-queen-collins';
const rusticaSouthYarraBase = '/images/portfolio/rustica-south-yarra';
const brixWorkplaceBase = '/images/portfolio/brix-workplace-hampton';
const glenroyDentalBase = '/images/portfolio/glenroy-dental';
const ivanhoeGirlsBase = '/images/portfolio/ivanhoe-girls-grammar';
const princesHwyBase = '/images/portfolio/princes-hwy-werribee';

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: 'residential',
    title: 'WB Built Residential',
    shortTitle: 'Residential',
    description:
      'High-end residential construction delivered with precision, care and attention to detail. WB Built creates refined homes that balance architectural intent, build quality and long-term livability.',
    seoDescription:
      'Explore WB Built residential construction projects across Melbourne — bespoke homes delivered with precision, architectural coordination and exceptional finish quality.',
    cardImage: `${rockleyHouseBase}/meta/card.jpg`,
    cardAlt: 'WB Built high-end residential construction at Rockley House, South Yarra',
    heroImage: `${rockleyHouseBase}/meta/hero.jpg`,
  },
  {
    slug: 'hospitality',
    title: 'WB Built Hospitality',
    shortTitle: 'Hospitality',
    description:
      'Hospitality fit-outs and venue projects built with an understanding of detail, atmosphere and operational flow. WB Built delivers spaces that are durable, functional and designed to make a strong impression.',
    seoDescription:
      'WB Built hospitality construction and fit-out projects across Melbourne — venues built with attention to detail, atmosphere and operational flow.',
    cardImage: `${oconnellsHotelBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at O\'Connells Hotel, South Melbourne',
    heroImage: `${oconnellsHotelBase}/meta/hero.jpg`,
  },
  {
    slug: 'multi-residential',
    title: 'WB Built Multi-Residential',
    shortTitle: 'Multi-Res',
    description:
      'Multi-residential developments delivered with structure, coordination and confidence. WB Built brings experience across apartments, mixed-use projects and complex builds requiring strong management, technical precision and consistent quality.',
    seoDescription:
      'WB Built multi-residential construction projects across Melbourne — apartments and mixed-use developments delivered with coordination, technical precision and consistent quality.',
    cardImage: `${stLeonardsBase}/meta/card.jpg`,
    cardAlt: 'WB Built multi-residential construction in Melbourne',
    heroImage: `${stLeonardsBase}/meta/hero.jpg`,
  },
  {
    slug: 'commercial',
    title: 'WB Built Commercial',
    shortTitle: 'Commercial',
    description:
      'Commercial projects delivered with strong site management, technical capability and a clear focus on program, quality and outcome. WB Built works collaboratively with clients, consultants and project teams from planning through to completion.',
    seoDescription:
      'View WB Built commercial construction projects — offices, fit-outs and complex builds across Melbourne delivered with strong site management and technical capability.',
    cardImage: `${brixWorkplaceBase}/meta/card.jpg`,
    cardAlt: 'WB Built commercial construction project at Brix Workplace, Hampton',
    heroImage: `${brixWorkplaceBase}/meta/hero.jpg`,
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'rockley-house',
    categorySlug: 'residential',
    name: 'Rockley House',
    location: 'Rockley Road, South Yarra, Victoria',
    scope: 'High-end residential home',
    highlights: [
      'Bespoke residential home on Rockley Road, South Yarra',
      'Architectural coordination and refined interior finishes',
      'Aerial and interior documentation of completed form',
      'Delivered with precision, care and attention to detail',
    ],
    seoDescription:
      'Rockley House, Rockley Road South Yarra — high-end residential construction by WB Built, delivered with architectural precision and exceptional finish quality.',
    cardImage: `${rockleyHouseBase}/meta/card.jpg`,
    cardAlt: 'WB Built residential home at Rockley House, South Yarra',
    heroImage: `${rockleyHouseBase}/meta/hero.jpg`,
    ogImage: `${rockleyHouseBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/rockley-house-south-yarra/manifest.json',
    reelVideo: `${rockleyHouseBase}/reel.mp4`,
    reelPoster: `${rockleyHouseBase}/meta/hero.jpg`,
    reelCaption:
      'A short walkthrough of Rockley House — a high-end residential build on Rockley Road, South Yarra.',
    galleryIntro:
      'Browse interior, architectural and aerial photography from Rockley House, South Yarra. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'hawthorn-garden-house',
    categorySlug: 'residential',
    name: 'Hawthorn Garden House',
    location: 'Hawthorn, Victoria',
    scope: 'High-end residential home with landscaped gardens',
    highlights: [
      'Bespoke garden house in Hawthorn',
      'Seamless connection between interior living and outdoor spaces',
      'Refined architectural detailing and quality finishes',
      'Delivered with precision, care and attention to detail',
    ],
    seoDescription:
      'Hawthorn Garden House — high-end residential construction by WB Built, blending refined interiors with considered outdoor living in Hawthorn.',
    cardImage: `${hawthornGardenHouseBase}/meta/card.jpg`,
    cardAlt: 'WB Built residential home at Hawthorn Garden House',
    heroImage: `${hawthornGardenHouseBase}/meta/hero.jpg`,
    ogImage: `${hawthornGardenHouseBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/hawthorn-garden-house/manifest.json',
    galleryIntro:
      'Browse interior, architectural and aerial photography from Hawthorn Garden House. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'middle-park',
    categorySlug: 'residential',
    name: 'Middle Park',
    location: 'Middle Park, Victoria',
    scope: 'High-end residential home',
    highlights: [
      'Bespoke residential home in Middle Park',
      'Architectural coordination and refined interior finishes',
      'Quality craftsmanship across living, kitchen and bedroom spaces',
      'Delivered with precision, care and attention to detail',
    ],
    seoDescription:
      'Middle Park residential home by WB Built — high-end construction delivered with architectural precision and exceptional finish quality.',
    cardImage: `${middleParkBase}/meta/card.jpg`,
    cardAlt: 'WB Built residential home in Middle Park',
    heroImage: `${middleParkBase}/meta/hero.jpg`,
    ogImage: `${middleParkBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/middle-park/manifest.json',
    galleryIntro:
      'Browse interior and architectural photography from Middle Park. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'armstrong-house',
    categorySlug: 'residential',
    name: 'Armstrong House',
    location: 'Albert Park, Victoria',
    scope: 'Alterations and additions to a period home',
    highlights: [
      'Alterations and additions to a period home in Albert Park',
      'Architectural coordination across heritage and new work',
      'Refined interior finishes and detailed craftsmanship',
      'Delivered with precision, care and attention to detail',
    ],
    seoDescription:
      'Armstrong House, Albert Park — alterations and additions to a period home by WB Built, delivered with architectural precision and exceptional finish quality.',
    cardImage: `${armstrongHouseBase}/meta/card.jpg`,
    cardAlt: 'WB Built residential alterations at Armstrong House, Albert Park',
    heroImage: `${armstrongHouseBase}/meta/hero.jpg`,
    ogImage: `${armstrongHouseBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/armstrong-house-albert-park/manifest.json',
    galleryIntro:
      'Browse interior and architectural photography from Armstrong House, Albert Park. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'oxford-house',
    categorySlug: 'residential',
    name: 'Oxford House',
    location: 'Newport, Victoria',
    scope: 'High-end residential home',
    highlights: [
      'High-end residential home in Newport',
      'Architectural coordination and refined interior finishes',
      'Quality craftsmanship across living and outdoor spaces',
      'Delivered with precision, care and attention to detail',
    ],
    seoDescription:
      'Oxford House, Newport — high-end residential construction by WB Built, delivered with architectural precision and exceptional finish quality.',
    cardImage: `${oxfordHouseBase}/meta/card.jpg`,
    cardAlt: 'WB Built residential home at Oxford House, Newport',
    heroImage: `${oxfordHouseBase}/meta/hero.jpg`,
    ogImage: `${oxfordHouseBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/oxford-house-newport/manifest.json',
    galleryIntro:
      'Browse interior and architectural photography from Oxford House, Newport. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'salford-house',
    categorySlug: 'residential',
    name: 'Salford House',
    location: 'Balwyn, Victoria',
    scope: 'High-end house with basement carpark',
    highlights: [
      'High-end residential home with basement carpark in Balwyn',
      'Complex structural coordination across levels',
      'Refined architectural detailing and quality finishes',
      'Delivered with precision, care and attention to detail',
    ],
    seoDescription:
      'Salford House, Balwyn — high-end residential construction with basement carpark by WB Built, delivered with architectural precision and exceptional finish quality.',
    cardImage: `${salfordHouseBase}/meta/card.jpg`,
    cardAlt: 'WB Built residential home at Salford House, Balwyn',
    heroImage: `${salfordHouseBase}/meta/hero.jpg`,
    ogImage: `${salfordHouseBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/salford-house-balwyn/manifest.json',
    galleryIntro:
      'Browse interior and architectural photography from Salford House, Balwyn. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'silver-house',
    categorySlug: 'residential',
    name: 'Silver House',
    location: 'Eltham, Victoria',
    scope: "Alterations and additions to a 1970s mud brick home",
    highlights: [
      "Alterations and additions to a 1970s mud brick home in Eltham",
      'Sensitive integration of new work with existing fabric',
      'Refined interior finishes and detailed craftsmanship',
      'Delivered with precision, care and attention to detail',
    ],
    seoDescription:
      'Silver House, Eltham — alterations and additions to a 1970s mud brick home by WB Built, delivered with architectural precision and exceptional finish quality.',
    cardImage: `${silverHouseBase}/meta/card.jpg`,
    cardAlt: 'WB Built residential alterations at Silver House, Eltham',
    heroImage: `${silverHouseBase}/meta/hero.jpg`,
    ogImage: `${silverHouseBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/silver-house-eltham/manifest.json',
    galleryIntro:
      'Browse interior and architectural photography from Silver House, Eltham. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'sunbury-house',
    categorySlug: 'residential',
    name: 'Sunbury House',
    location: 'Sunbury, Victoria',
    scope: 'High-end house and outbuilding',
    highlights: [
      'High-end residential home and outbuilding in Sunbury',
      'Architectural coordination across house and ancillary buildings',
      'Quality craftsmanship and refined finishes throughout',
      'Delivered with precision, care and attention to detail',
    ],
    seoDescription:
      'Sunbury House — high-end residential construction with outbuilding by WB Built, delivered with architectural precision and exceptional finish quality.',
    cardImage: `${sunburyHouseBase}/meta/card.jpg`,
    cardAlt: 'WB Built residential home at Sunbury House',
    heroImage: `${sunburyHouseBase}/meta/hero.jpg`,
    ogImage: `${sunburyHouseBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/sunbury-house/manifest.json',
    galleryIntro:
      'Browse interior and architectural photography from Sunbury House. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'st-leonards',
    categorySlug: 'multi-residential',
    name: 'St Leonards Multi-Residential',
    location: 'St Leonards, Victoria',
    scope: 'Multi-residential apartments and mixed-use development',
    highlights: [
      'Complex multi-storey structural coordination',
      'High-quality interior and common-area finishes',
      'Aerial documentation of build progress and completed form',
      'Delivered with disciplined site management and quality control',
    ],
    seoDescription:
      'St Leonards multi-residential development by WB Built — apartments and mixed-use construction delivered with coordination, technical precision and consistent quality.',
    cardImage: `${stLeonardsBase}/meta/card.jpg`,
    cardAlt: 'Aerial view of WB Built multi-residential development at St Leonards',
    heroImage: `${stLeonardsBase}/meta/hero.jpg`,
    ogImage: `${stLeonardsBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/multi-residential-st-leonards/manifest.json',
    galleryIntro:
      'Browse interior, architectural and aerial photography from the St Leonards development. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'kerr-st-fitzroy',
    categorySlug: 'multi-residential',
    name: 'Kerr Street, Fitzroy Multi-Residential',
    location: 'Fitzroy, Victoria',
    scope: 'Multi-residential apartments and townhouse development',
    highlights: [
      'Inner-city multi-residential delivery in Fitzroy',
      'Architectural coordination across apartments and shared spaces',
      'Quality interior finishes and detailed craftsmanship',
      'Managed with disciplined site coordination and quality control',
    ],
    seoDescription:
      'Kerr Street, Fitzroy multi-residential development by WB Built — inner-city apartments delivered with precision, coordination and quality finishes.',
    cardImage: `${kerrStBase}/meta/card.jpg`,
    cardAlt: 'WB Built multi-residential development at Kerr Street, Fitzroy',
    heroImage: `${kerrStBase}/meta/hero.jpg`,
    ogImage: `${kerrStBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/kerr-st-fitzroy/manifest.json',
    galleryIntro:
      'Browse interior and architectural photography from the Kerr Street, Fitzroy development. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'malvern-east',
    categorySlug: 'multi-residential',
    name: 'Malvern East Multi-Residential',
    location: 'Malvern East, Victoria',
    scope: 'Multi-residential apartments and development',
    highlights: [
      'Multi-residential delivery in Malvern East',
      'Architectural coordination across apartments and shared spaces',
      'Quality interior finishes and detailed craftsmanship',
      'Aerial and interior documentation of completed form',
    ],
    seoDescription:
      'Malvern East multi-residential development by WB Built — apartments delivered with precision, coordination and quality finishes.',
    cardImage: `${malvernEastBase}/meta/card.jpg`,
    cardAlt: 'WB Built multi-residential development at Malvern East',
    heroImage: `${malvernEastBase}/meta/hero.jpg`,
    ogImage: `${malvernEastBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/malvern-east-multi-res/manifest.json',
    galleryIntro:
      'Browse interior, architectural and aerial photography from the Malvern East development. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'hotham-hill-apartments',
    categorySlug: 'multi-residential',
    name: 'Hotham Hill Apartments Multi-Residential',
    location: 'North Melbourne, Victoria',
    scope: '10 apartments over 3 levels with basement car park',
    highlights: [
      '10 apartments over three levels in North Melbourne',
      'Basement car park and complex structural coordination',
      'Quality interior finishes and detailed craftsmanship',
      'Aerial and interior documentation of completed form',
    ],
    seoDescription:
      'Hotham Hill Apartments, North Melbourne — multi-residential development by WB Built with basement car park, delivered with precision, coordination and quality finishes.',
    cardImage: `${hothamHillBase}/meta/card.jpg`,
    cardAlt: 'WB Built multi-residential development at Hotham Hill Apartments, North Melbourne',
    heroImage: `${hothamHillBase}/meta/hero.jpg`,
    ogImage: `${hothamHillBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/hotham-hill-apartments/manifest.json',
    galleryIntro:
      'Browse interior, architectural and aerial photography from Hotham Hill Apartments. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'margot-townhouse',
    categorySlug: 'multi-residential',
    name: 'Margot Townhouse Multi-Residential',
    location: 'Doncaster, Victoria',
    scope: 'Townhouse development including basement carpark',
    highlights: [
      'Townhouse development with basement carpark in Doncaster',
      'Architectural coordination across dwellings and shared spaces',
      'Quality interior finishes and detailed craftsmanship',
      'Managed with disciplined site coordination and quality control',
    ],
    seoDescription:
      'Margot Townhouse, Doncaster — multi-residential townhouse development by WB Built with basement carpark, delivered with precision, coordination and quality finishes.',
    cardImage: `${margotTownhouseBase}/meta/card.jpg`,
    cardAlt: 'WB Built multi-residential townhouse development at Margot Townhouse, Doncaster',
    heroImage: `${margotTownhouseBase}/meta/hero.jpg`,
    ogImage: `${margotTownhouseBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/margot-townhouse-doncaster/manifest.json',
    galleryIntro:
      'Browse interior and architectural photography from Margot Townhouse, Doncaster. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'oconnells-hotel',
    categorySlug: 'hospitality',
    name: "O'Connells Hotel",
    location: 'South Melbourne, Victoria',
    scope: 'Hospitality venue fit-out and refurbishment',
    highlights: [
      'Hospitality fit-out in South Melbourne',
      'Atmosphere, detail and operational flow considered throughout',
      'Durable, functional spaces designed to make a strong impression',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      "O'Connells Hotel, South Melbourne — hospitality fit-out by WB Built, delivering atmosphere, detail and operational flow across the venue.",
    cardImage: `${oconnellsHotelBase}/meta/card.jpg`,
    cardAlt: "WB Built hospitality fit-out at O'Connells Hotel, South Melbourne",
    heroImage: `${oconnellsHotelBase}/meta/hero.jpg`,
    ogImage: `${oconnellsHotelBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/oconnells-hotel-south-melbourne/manifest.json',
    galleryIntro:
      "Browse interior and venue photography from O'Connells Hotel, South Melbourne. Images are optimised for web viewing and ready to share across social channels.",
  },
  {
    slug: 'boyds-south-yarra',
    categorySlug: 'hospitality',
    name: "BOYD'S South Yarra",
    location: 'South Yarra, Victoria',
    scope: 'Hospitality venue fit-out on Domain Road',
    highlights: [
      'Hospitality fit-out on Domain Road, South Yarra',
      'Atmosphere, detail and operational flow considered throughout',
      'Refined venue spaces built to make a strong impression',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      "BOYD'S South Yarra — hospitality fit-out by WB Built on Domain Road, delivering atmosphere, detail and operational flow across the venue.",
    cardImage: `${boydsBase}/meta/card.jpg`,
    cardAlt: "WB Built hospitality fit-out at BOYD'S, South Yarra",
    heroImage: `${boydsBase}/meta/hero.jpg`,
    ogImage: `${boydsBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/boyds-south-yarra/manifest.json',
    galleryIntro:
      "Browse interior and venue photography from BOYD'S, South Yarra. Images are optimised for web viewing and ready to share across social channels.",
  },
  {
    slug: 'collins-arch-cafe',
    categorySlug: 'hospitality',
    name: 'First Love Coffee',
    location: 'Collins Street, Melbourne CBD',
    scope: 'Cafe fit-out at Collins Arch',
    highlights: [
      'Cafe fit-out on Collins Street in Melbourne CBD',
      'Operational flow and customer experience considered throughout',
      'Refined finishes built for high-traffic venue use',
      'Delivered with disciplined coordination and quality control',
    ],
    seoDescription:
      'First Love Coffee at Collins Arch — hospitality cafe fit-out by WB Built in Melbourne CBD delivering atmosphere, detail and operational flow.',
    cardImage: `${collinsArchBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at First Love Coffee, Collins Arch',
    heroImage: `${collinsArchBase}/meta/hero.jpg`,
    ogImage: `${collinsArchBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/collins-arch-cafe/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from First Love Coffee at Collins Arch. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'home-co',
    categorySlug: 'hospitality',
    name: 'HOME CO Cafe',
    location: 'Hawthorn, Victoria',
    scope: 'Cafe fit-out',
    highlights: [
      'Cafe fit-out delivered for HOME CO in Hawthorn',
      'Atmosphere, detail and operational flow considered throughout',
      'Refined venue spaces built to make a strong impression',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      'HOME CO Cafe, Hawthorn — hospitality fit-out by WB Built delivering atmosphere, detail and operational flow.',
    cardImage: `${homeCoBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at HOME CO Cafe, Hawthorn',
    heroImage: `${homeCoBase}/meta/hero.jpg`,
    ogImage: `${homeCoBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/home-co/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from HOME CO Cafe, Hawthorn. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: '179-domain',
    categorySlug: 'hospitality',
    name: '179 Domain',
    location: 'South Yarra, Victoria',
    scope: 'Wine bar and cafe fit-out',
    highlights: [
      'Wine bar and cafe fit-out on Domain Road, South Yarra',
      'Atmosphere, detail and operational flow considered throughout',
      'Refined venue spaces built to make a strong impression',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      '179 Domain, South Yarra — wine bar and cafe fit-out by WB Built delivering atmosphere, detail and operational flow.',
    cardImage: `${domain179Base}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at 179 Domain, South Yarra',
    heroImage: `${domain179Base}/meta/hero.jpg`,
    ogImage: `${domain179Base}/meta/og.jpg`,
    manifestPath: 'images/portfolio/179-domain-south-yarra/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from 179 Domain, South Yarra. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'flying-duck-hotel',
    categorySlug: 'hospitality',
    name: 'Flying Duck Hotel',
    location: 'Prahran, Victoria',
    scope: 'Hotel refurbishment and alterations',
    highlights: [
      'Hotel refurbishment and alterations in Prahran',
      'Atmosphere, detail and operational flow considered throughout',
      'Durable, functional spaces designed to make a strong impression',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      'Flying Duck Hotel, Prahran — hospitality refurbishment by WB Built delivering atmosphere, detail and operational flow across the venue.',
    cardImage: `${flyingDuckBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at Flying Duck Hotel, Prahran',
    heroImage: `${flyingDuckBase}/meta/hero.jpg`,
    ogImage: `${flyingDuckBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/flying-duck-hotel-prahran/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from Flying Duck Hotel, Prahran. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'hobsons-bay-hotel',
    categorySlug: 'hospitality',
    name: 'Hobsons Bay Hotel',
    location: 'Williamstown, Victoria',
    scope: 'Three-level pub refurbishment including rooftop bar',
    highlights: [
      'Three-level pub refurbishment in Williamstown',
      'Addition of a rooftop bar and venue upgrades throughout',
      'Atmosphere, detail and operational flow considered throughout',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      'Hobsons Bay Hotel, Williamstown — three-level pub refurbishment including rooftop bar by WB Built, delivering atmosphere, detail and operational flow.',
    cardImage: `${hobsonsBayBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at Hobsons Bay Hotel, Williamstown',
    heroImage: `${hobsonsBayBase}/meta/hero.jpg`,
    ogImage: `${hobsonsBayBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/hobsons-bay-hotel/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from Hobsons Bay Hotel, Williamstown. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'orrong-hotel',
    categorySlug: 'hospitality',
    name: 'Orrong Hotel',
    location: 'Toorak, Victoria',
    scope: 'Art Deco hotel refurbishment',
    highlights: [
      'Art Deco hotel refurbishment in Toorak',
      'Sensitive restoration balanced with contemporary venue needs',
      'Atmosphere, detail and operational flow considered throughout',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      'Orrong Hotel, Toorak — Art Deco hotel refurbishment by WB Built delivering atmosphere, detail and operational flow across the venue.',
    cardImage: `${orrongHotelBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at Orrong Hotel, Toorak',
    heroImage: `${orrongHotelBase}/meta/hero.jpg`,
    ogImage: `${orrongHotelBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/orrong-hotel-toorak/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from Orrong Hotel, Toorak. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'rustica-brighton',
    categorySlug: 'hospitality',
    name: 'Rustica Brighton',
    location: 'Brighton, Victoria',
    scope: 'Cafe fit-out',
    highlights: [
      'Cafe fit-out in Brighton',
      'Atmosphere, detail and operational flow considered throughout',
      'Refined venue spaces built to make a strong impression',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      'Rustica Brighton — cafe fit-out by WB Built delivering atmosphere, detail and operational flow.',
    cardImage: `${rusticaBrightonBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at Rustica Brighton',
    heroImage: `${rusticaBrightonBase}/meta/hero.jpg`,
    ogImage: `${rusticaBrightonBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/rustica-brighton/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from Rustica Brighton. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'rustica-queen-collins',
    categorySlug: 'hospitality',
    name: 'Rustica Queen & Collins',
    location: 'Melbourne CBD, Victoria',
    scope: 'Cafe fit-out',
    highlights: [
      'Cafe fit-out at Queen & Collins in Melbourne CBD',
      'Operational flow and customer experience considered throughout',
      'Refined finishes built for high-traffic venue use',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      'Rustica Queen & Collins — cafe fit-out by WB Built in Melbourne CBD delivering atmosphere, detail and operational flow.',
    cardImage: `${rusticaQueenCollinsBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at Rustica Queen & Collins',
    heroImage: `${rusticaQueenCollinsBase}/meta/hero.jpg`,
    ogImage: `${rusticaQueenCollinsBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/rustica-queen-collins/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from Rustica Queen & Collins. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'rustica-south-yarra',
    categorySlug: 'hospitality',
    name: 'Rustica South Yarra',
    location: 'South Yarra, Victoria',
    scope: 'Cafe fit-out including commercial bakery and patisserie',
    highlights: [
      'Cafe fit-out with commercial bakery and patisserie in South Yarra',
      'Operational flow across front-of-house and production spaces',
      'Refined finishes built for high-traffic hospitality use',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      'Rustica South Yarra — cafe fit-out including commercial bakery and patisserie by WB Built, delivering atmosphere, detail and operational flow.',
    cardImage: `${rusticaSouthYarraBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at Rustica South Yarra',
    heroImage: `${rusticaSouthYarraBase}/meta/hero.jpg`,
    ogImage: `${rusticaSouthYarraBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/rustica-south-yarra/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from Rustica South Yarra. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'brix-workplace',
    categorySlug: 'commercial',
    name: 'Brix Workplace',
    location: 'Hampton, Victoria',
    scope: 'Office base build and fit-out',
    highlights: [
      'Office base build and fit-out in Hampton',
      'Strong site management and technical coordination',
      'Quality finishes suited to contemporary workplace use',
      'Delivered with a clear focus on program, quality and outcome',
    ],
    seoDescription:
      'Brix Workplace, Hampton — office base build and fit-out by WB Built, delivered with strong site management and technical capability.',
    cardImage: `${brixWorkplaceBase}/meta/card.jpg`,
    cardAlt: 'WB Built commercial fit-out at Brix Workplace, Hampton',
    heroImage: `${brixWorkplaceBase}/meta/hero.jpg`,
    ogImage: `${brixWorkplaceBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/brix-workplace-hampton/manifest.json',
    galleryIntro:
      'Browse interior and architectural photography from Brix Workplace, Hampton. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'glenroy-dental',
    categorySlug: 'commercial',
    name: 'Glenroy Dental',
    location: 'Glenroy, Victoria',
    scope: 'Dental clinic base build and fit-out',
    highlights: [
      'Dental clinic base build and fit-out in Glenroy',
      'Technical coordination across clinical and reception spaces',
      'Durable finishes suited to healthcare environments',
      'Delivered with a clear focus on program, quality and outcome',
    ],
    seoDescription:
      'Glenroy Dental — dental clinic base build and fit-out by WB Built, delivered with strong site management and technical capability.',
    cardImage: `${glenroyDentalBase}/meta/card.jpg`,
    cardAlt: 'WB Built commercial fit-out at Glenroy Dental',
    heroImage: `${glenroyDentalBase}/meta/hero.jpg`,
    ogImage: `${glenroyDentalBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/glenroy-dental/manifest.json',
    galleryIntro:
      'Browse interior and architectural photography from Glenroy Dental. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'ivanhoe-girls-grammar',
    categorySlug: 'commercial',
    name: 'Ivanhoe Girls Grammar School',
    location: 'Ivanhoe, Victoria',
    scope: 'Refurbishment and alterations to the Performing Arts Centre',
    highlights: [
      'Refurbishment and alterations to the IGGS Performing Arts Centre',
      'Complex coordination within an active school environment',
      'Quality finishes suited to performance and education spaces',
      'Delivered with a clear focus on program, quality and outcome',
    ],
    seoDescription:
      'Ivanhoe Girls Grammar School Performing Arts Centre — commercial refurbishment by WB Built, delivered with strong site management and technical capability.',
    cardImage: `${ivanhoeGirlsBase}/meta/card.jpg`,
    cardAlt: 'WB Built commercial refurbishment at Ivanhoe Girls Grammar School',
    heroImage: `${ivanhoeGirlsBase}/meta/hero.jpg`,
    ogImage: `${ivanhoeGirlsBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/ivanhoe-girls-grammar/manifest.json',
    galleryIntro:
      'Browse interior and architectural photography from the Ivanhoe Girls Grammar School Performing Arts Centre. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'princes-hwy',
    categorySlug: 'commercial',
    name: 'Princes Hwy',
    location: 'Werribee, Victoria',
    scope: 'Office and retail base building',
    highlights: [
      'Office and retail base building in Werribee',
      'Strong site management and technical coordination',
      'Quality delivery across commercial and retail spaces',
      'Delivered with a clear focus on program, quality and outcome',
    ],
    seoDescription:
      'Princes Hwy, Werribee — office and retail base building by WB Built, delivered with strong site management and technical capability.',
    cardImage: `${princesHwyBase}/meta/card.jpg`,
    cardAlt: 'WB Built commercial construction at Princes Hwy, Werribee',
    heroImage: `${princesHwyBase}/meta/hero.jpg`,
    ogImage: `${princesHwyBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/princes-hwy-werribee/manifest.json',
  },
];

export function getPortfolioCategory(slug: string): PortfolioCategory | undefined {
  return portfolioCategories.find((c) => c.slug === slug);
}

export function getPortfolioProject(categorySlug: string, projectSlug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.categorySlug === categorySlug && p.slug === projectSlug);
}

export function getProjectsByCategory(categorySlug: string): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.categorySlug === categorySlug);
}

export const portfolioIndexDescription =
  'View selected WB Built projects across residential, multi-residential and commercial construction, delivered with precision, coordination and quality.';
