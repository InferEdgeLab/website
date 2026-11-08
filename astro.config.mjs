import { defineConfig } from 'astro/config';

// Canonical origin. GitHub Pages serves the custom domain set in public/CNAME.
const site = (process.env.PUBLIC_SITE_URL || 'https://inferedgelab.com').replace(/\/$/, '');

export default defineConfig({
  site,
  output: 'static',
  // Emit /services.html (not /services/index.html) so GitHub Pages serves clean URLs
  // like /services without a trailing-slash redirect. Vercel/Netlify/Cloudflare handle this too.
  build: { format: 'file' },
  trailingSlash: 'never',
  // /capabilities was renamed to /services; this generates a static meta-refresh page
  // at the old path so GitHub Pages (no server redirects) still sends visitors onward.
  redirects: {
    '/capabilities': '/services',
  },
});
