# InferEdgeLab website - Astro + TypeScript

Static, multi-page company website for InferEdgeLab. Hosted on **GitHub Pages** at `https://inferedgelab.com`. The build is plain HTML/CSS/JS, so it can move to Cloudflare Pages, Vercel or Netlify later without code changes (`vercel.json` is kept for that).

## Run locally

Requires Node.js 20.3+ and npm.

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # type and template checks
npm run build      # outputs dist/
npm run preview
```

## Deploy to GitHub Pages (one-time setup)

1. Push this folder to the repository root on `main`.
2. Free GitHub Pages needs a **public** repository (private repos need a paid GitHub plan). Keep business code, such as the InferEdge engine, in a separate private repo.
3. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
4. Repo **Settings → Pages → Custom domain**: `inferedgelab.com` (also stored in `public/CNAME`).
5. At the domain registrar, add DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<github-username-or-org>.github.io`
   Check GitHub's Pages documentation for the current IPs before adding them.
6. When the certificate is ready, tick **Enforce HTTPS**.
7. Verify the domain in the GitHub account or organization settings (Pages → Verified domains) to stop anyone else using it on GitHub Pages.

Notes:
- `build.format: 'file'` emits `capabilities.html` etc., so GitHub Pages serves clean URLs like `/capabilities` with no redirect.
- `public/.nojekyll` stops GitHub's Jekyll step from hiding the `_astro/` asset folder.
- GitHub Pages cannot set HTTP security headers or redirects; the headers in `vercel.json` apply only if you move to Vercel.

## Edit content in one place

Almost all copy lives in `src/data/site.ts`:

| What | Key |
|---|---|
| Company name, tagline, email, navigation, hero | `site` |
| Product (InferEdge) name and one-liner | `product` |
| Services cards | `capabilities` |
| Pricing cards and note | `offers`, `pricingNote` |
| Case studies (placeholders) | `caseStudies` |
| Founders (placeholders) | `founders` |
| Booking link (placeholder) | `site.bookingUrl` |
| Contact form topics | `contactTopics` |

## Placeholders to fill before or soon after launch

- **Contact form delivery**: GitHub Pages has no backend, so without a form key the contact form falls back to a `mailto:` link, which fails for visitors with no configured email app. Get a free access key at https://web3forms.com (no account needed, 250 submissions/month) using `hello@inferedgelab.com`, then set it as `PUBLIC_WEB3FORMS_ACCESS_KEY` - in `.env` for local dev, and as a GitHub repo secret (**Settings → Secrets and variables → Actions**) for the live build.
- **Booking link**: set `site.bookingUrl` to your Zoho Bookings (or Calendly) link. Until then, "Book a call" buttons open a pre-filled email.
- **Case studies**: when a benchmark is written up, set `status: 'published'`, add a one-line `result` and an `href`.
- **Founders**: both names and bios are filled in - add LinkedIn URLs when ready.
- **Analytics (optional)**: Cloudflare Web Analytics is cookie-free and needs no consent banner. Get a free token at Cloudflare dashboard → Analytics & Logs → Web Analytics, then set `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` the same way as the Web3Forms key above. Leave unset to keep analytics off - the privacy notice automatically reflects whichever state is true.

## Before public launch

1. Confirm `hello@inferedgelab.com` exists in Zoho and someone checks it daily.
2. Replace the social card text or design if wanted (`public/social-card.svg`, then regenerate `public/social-card.png`, 1200×630).
3. Have the privacy notice and terms reviewed when budget allows; they are plain-language starting points, not legal advice.
4. Re-check every claim, benchmark and price against what you actually deliver.
5. After going live, add the site to Google Search Console and submit `/sitemap.xml`.

## Keeping InferEdge confidential

The public site describes only what InferEdge helps customers achieve. Do not add screenshots, report formats, architecture or method descriptions. Share those only under NDA.
