import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const portfolioRoot = path.join(root, 'public', 'images', 'portfolio');

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

export function galleryReorderDevPlugin() {
  return {
    name: 'gallery-reorder-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/api/dev/reorder-gallery' || req.method !== 'POST') {
          next();
          return;
        }

        try {
          const body = await readBody(req);
          const { manifestPath, order, kinds, hidden } = JSON.parse(body);

          if (!manifestPath || !Array.isArray(order)) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'manifestPath and order are required' }));
            return;
          }

          const manifestFile = path.join(root, 'public', manifestPath);
          const resolved = path.resolve(manifestFile);

          if (!resolved.startsWith(portfolioRoot)) {
            res.statusCode = 403;
            res.end(JSON.stringify({ error: 'Invalid manifest path' }));
            return;
          }

          const manifest = JSON.parse(fs.readFileSync(resolved, 'utf8'));
          const byId = Object.fromEntries(manifest.map((image) => [image.id, image]));

          if (kinds && typeof kinds === 'object') {
            for (const [id, kind] of Object.entries(kinds)) {
              if (byId[id] && (kind === 'interior' || kind === 'exterior')) {
                byId[id].kind = kind;
              }
            }
          }

          if (hidden && typeof hidden === 'object') {
            for (const [id, isHidden] of Object.entries(hidden)) {
              if (!byId[id]) continue;
              if (isHidden) byId[id].hidden = true;
              else delete byId[id].hidden;
            }
          }

          const reordered = order.map((id) => byId[id]).filter(Boolean);
          for (const image of manifest) {
            if (!reordered.some((entry) => entry.id === image.id)) {
              reordered.push(byId[image.id]);
            }
          }

          const interior = reordered.filter((image) => image.kind !== 'exterior' && image.kind !== 'aerial');
          const exterior = reordered.filter((image) => image.kind === 'exterior' || image.kind === 'aerial');
          const normalized = [...interior, ...exterior];

          fs.writeFileSync(resolved, `${JSON.stringify(normalized, null, 2)}\n`);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, count: normalized.length }));
        } catch (error) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: String(error) }));
        }
      });
    },
  };
}
