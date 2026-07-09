/** Prefix an app path with the configured Astro base (e.g. /wbbuilt/). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path === '/' || path === '') return base;
  return base + path.replace(/^\//, '');
}

/** Local public asset or external URL — leaves http(s) URLs unchanged. */
export function assetUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return withBase(path);
}

/** Strip the Astro base from the current pathname for route matching. */
export function routePath(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!base) return pathname;
  return pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
}
