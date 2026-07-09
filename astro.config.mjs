import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { galleryReorderDevPlugin } from './scripts/dev-gallery-reorder-plugin.mjs';

const base = process.env.ASTRO_BASE || '/';
const site = process.env.ASTRO_SITE || 'https://wbbuilt.com.au';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    plugins: [galleryReorderDevPlugin()],
  },
});
