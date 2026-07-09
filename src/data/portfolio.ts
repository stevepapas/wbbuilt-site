import { images } from './site';

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
const malvernEastBase = '/images/portfolio/malvern-east-multi-res';
const oconnellsHotelBase = '/images/portfolio/oconnells-hotel-south-melbourne';
const boydsBase = '/images/portfolio/boyds-south-yarra';
const collinsArchBase = '/images/portfolio/collins-arch-cafe';
const homeCoBase = '/images/portfolio/home-co';
const rusticaBase = '/images/portfolio/rustica-chapel-st';

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
    cardImage: images.commercial,
    cardAlt: 'WB Built commercial construction project in Melbourne',
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'rockley-house',
    categorySlug: 'residential',
    name: 'Rockley House',
    location: 'South Yarra, Victoria',
    scope: 'High-end residential home',
    highlights: [
      'Bespoke residential home in South Yarra',
      'Architectural coordination and refined interior finishes',
      'Aerial and interior documentation of completed form',
      'Delivered with precision, care and attention to detail',
    ],
    seoDescription:
      'Rockley House, South Yarra — high-end residential construction by WB Built, delivered with architectural precision and exceptional finish quality.',
    cardImage: `${rockleyHouseBase}/meta/card.jpg`,
    cardAlt: 'WB Built residential home at Rockley House, South Yarra',
    heroImage: `${rockleyHouseBase}/meta/hero.jpg`,
    ogImage: `${rockleyHouseBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/rockley-house-south-yarra/manifest.json',
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
    name: 'Collins Arch Cafe',
    location: 'Melbourne CBD, Victoria',
    scope: 'Cafe fit-out at Collins Arch',
    highlights: [
      'Hospitality cafe fit-out in Melbourne CBD',
      'Operational flow and customer experience considered throughout',
      'Refined finishes built for high-traffic venue use',
      'Delivered with disciplined coordination and quality control',
    ],
    seoDescription:
      'Collins Arch Cafe fit-out by WB Built — hospitality construction in Melbourne CBD delivering atmosphere, detail and operational flow.',
    cardImage: `${collinsArchBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at Collins Arch Cafe, Melbourne',
    heroImage: `${collinsArchBase}/meta/hero.jpg`,
    ogImage: `${collinsArchBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/collins-arch-cafe/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from Collins Arch Cafe. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'home-co',
    categorySlug: 'hospitality',
    name: 'HOME CO',
    location: 'Melbourne, Victoria',
    scope: 'Hospitality venue fit-out',
    highlights: [
      'Hospitality fit-out delivered for HOME CO',
      'Atmosphere, detail and operational flow considered throughout',
      'Refined venue spaces built to make a strong impression',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      'HOME CO hospitality fit-out by WB Built — venue construction in Melbourne delivering atmosphere, detail and operational flow.',
    cardImage: `${homeCoBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at HOME CO, Melbourne',
    heroImage: `${homeCoBase}/meta/hero.jpg`,
    ogImage: `${homeCoBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/home-co/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from HOME CO. Images are optimised for web viewing and ready to share across social channels.',
  },
  {
    slug: 'rustica-chapel-st',
    categorySlug: 'hospitality',
    name: 'Rustica',
    location: 'Chapel Street, Melbourne',
    scope: 'Hospitality venue fit-out',
    highlights: [
      'Hospitality fit-out on Chapel Street',
      'Atmosphere, detail and operational flow considered throughout',
      'Refined venue spaces built to make a strong impression',
      'Delivered with disciplined coordination and quality finishes',
    ],
    seoDescription:
      'Rustica Chapel Street hospitality fit-out by WB Built — venue construction delivering atmosphere, detail and operational flow.',
    cardImage: `${rusticaBase}/meta/card.jpg`,
    cardAlt: 'WB Built hospitality fit-out at Rustica, Chapel Street',
    heroImage: `${rusticaBase}/meta/hero.jpg`,
    ogImage: `${rusticaBase}/meta/og.jpg`,
    manifestPath: 'images/portfolio/rustica-chapel-st/manifest.json',
    galleryIntro:
      'Browse interior and venue photography from Rustica, Chapel Street. Images are optimised for web viewing and ready to share across social channels.',
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
