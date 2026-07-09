import type { PortfolioImage } from '../data/portfolio';

export function normalizeGalleryKind(kind?: string): PortfolioImage['kind'] {
  return kind === 'exterior' || kind === 'aerial' ? 'exterior' : 'interior';
}

/** Keep each image's relative position within its kind, with interiors first. */
export function sortGalleryImages<T extends { kind: string }>(images: T[]): T[] {
  const interior: T[] = [];
  const exterior: T[] = [];

  for (const image of images) {
    if (normalizeGalleryKind(image.kind) === 'exterior') {
      exterior.push(image);
    } else {
      interior.push(image);
    }
  }

  return [...interior, ...exterior];
}

export function galleryOrderKey(images: Array<{ id: string }>): string {
  return images.map((image) => image.id).join('|');
}
