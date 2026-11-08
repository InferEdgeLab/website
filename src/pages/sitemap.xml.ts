import { site } from '../data/site';

const routes = ['/', '/services', '/inferedge', '/technology', '/security', '/contact', '/privacy', '/terms'];

export function GET() {
  // Build-time date (static output has no per-request clock); regenerates on every rebuild.
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes.map((route) => `  <url><loc>${site.url}${route}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
