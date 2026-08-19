# BrainFort Security — brainfortsecurity.com

Marketing website for **BrainFort Security Inc.**, a Canadian cybersecurity
consulting firm. *Building Trust. Securing Tomorrow.*

Built with **Next.js (App Router, static export)**, **TypeScript**,
**TailwindCSS v4**, ShadCN-style UI components, **Lucide icons**, and
**Framer Motion**. Deployed on **Cloudflare Pages**.

## Tech Stack

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 16 (App Router, `output: "export"`)   |
| Language   | TypeScript (strict)                           |
| Styling    | TailwindCSS v4 (CSS-first `@theme` tokens)    |
| Components | ShadCN-style primitives in `src/components/ui` |
| Icons      | lucide-react                                  |
| Animation  | framer-motion (respects `prefers-reduced-motion`) |
| Hosting    | Cloudflare Pages (static)                     |

## Installation

```bash
git clone <your-github-repo-url>
cd brainfortsecurity.com
npm install
```

## Development

```bash
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run lint    # ESLint
npm run build   # Production build → static site in out/
```

## Project Structure

```
src/
  app/            # 12 pages × EN/FR/AR + sitemap, robots and 404
  components/
    ui/           # ShadCN-style primitives (button, card, input, …)
    layout/       # Header, footer, brand logo
    home/         # Home page sections
    contact/      # Contact form (client component)
    motion/       # Framer Motion wrappers
    seo/          # JSON-LD structured data
  i18n/           # Locale dictionaries (EN shipped; FR/AR ready)
  lib/            # Site config, services data, utilities
public/           # Official brand, catalogue and other static assets
```

## Environment Variables

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
| -------- | ------- |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | URL the contact form POSTs to (Formspree form URL or a Cloudflare Worker). Empty ⇒ the form shows an "email us directly" fallback. |

No secrets live in this repository. Form-backend credentials belong in the
Worker / Formspree configuration, never in the site bundle.

### Connecting the contact form

- **Formspree**: create a form, set
  `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/<id>`.
- **Cloudflare Worker**: deploy a Worker that accepts `multipart/form-data`
  POSTs (fields: `name`, `company`, `email`, `phone`, `message`) and set the
  variable to the Worker URL. Add Turnstile in the Worker for bot protection
  if desired (a honeypot field is already built in).

## Deployment — Cloudflare Pages

The site is a fully static export (`out/`), ideal for Cloudflare Pages.

1. Push this repository to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git** and select the repo.
3. Build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. Add `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` under
   **Settings → Environment variables** (Production & Preview).
5. Add the custom domain `brainfortsecurity.com` under **Custom domains**.

Every push to `main` triggers a production deploy; branches get preview URLs.

## Internationalization (i18n)

The site ships in **English, French, and Arabic**:

- Routes live under `/en/`, `/fr/`, and `/ar/` (`src/app/[locale]`);
  the root `/` redirects to `/en/` via `public/_redirects`.
- All copy lives in `src/i18n/{en,fr,ar}.ts` (typed `Dictionary` —
  English is the canonical shape).
- Arabic renders right-to-left (`dir="rtl"`) with Cairo and a
  letter-spacing reset (spacing breaks connected Arabic script).
- A language switcher (EN/FR/AR) sits in the header.
- The header uses the shared official BrainFort shield and wordmark assets.
- hreflang alternates are emitted per page and in the sitemap.

## Branding

- The logo must never be redrawn. Header and footer use only the approved
  files in `public/brand/` (`shield.png`, `shield-web.webp`,
  `shield-canadian.webp`, and `wordmark.png`).
- The downloadable tri-fold service catalogue lives in `public/catalogue/`.
- Client logos live in `public/clients/`, office flags in `public/flags/`.
- Brand palette: black background (`#0A0A0C`), gold primary (`#D4AF37`),
  red accents (`#D92B2B` / `#EF4444` — the "AI" in BR**AI**NFORT), warm
  ivory foreground.

## SEO

- `robots.txt` and `sitemap.xml` generated at build (`src/app/robots.ts`,
  `src/app/sitemap.ts`).
- OpenGraph + Twitter Card metadata in `src/app/layout.tsx`; per-page titles,
  descriptions, and canonical URLs on every route.
- Organization + WebSite JSON-LD in `src/components/seo/structured-data.tsx`.
- OG image: `public/og.png` (1200×630).

## Future Improvements

- [ ] Cloudflare Worker form backend with Turnstile bot protection
- [ ] Blog / insights section (MDX)
- [ ] Case studies with real client testimonials
- [ ] Cloudflare Web Analytics snippet

## License

[MIT](LICENSE) © 2026 BrainFort Security Inc.
