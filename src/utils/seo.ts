import { withBase } from './paths';

export function absoluteUrl(path: string, site: string | URL): string {
  const base = typeof site === 'string' ? site.replace(/\/$/, '') : site.origin;
  if (path.startsWith('http')) return path;
  const normalized = withBase(path);
  return `${base}${normalized.startsWith('/') ? normalized : `/${normalized}`}`;
}
