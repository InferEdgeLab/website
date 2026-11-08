import { site } from '../data/site';

export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
