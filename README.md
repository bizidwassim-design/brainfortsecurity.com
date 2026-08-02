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
  app/            # Routes: /, /services, /about, /contact, /privacy, /terms
                  # + sitemap.ts, robots.ts, not-found.tsx
  components/
    ui/           # ShadCN-style primitives (button, card, input, …)
    layout/       # Header, footer, brand logo
    home/         # Home page sections
    contact/      # Contact form (client component)
    motion/       # Framer Motion wrappers
    seo/          # JSON-LD structured data
  i18n/           # Locale dictionaries (EN shipped; FR/AR ready)
  lib/            # Site config, services data, utilities
public/           # Static assets (logo.svg, og.png, favicon)
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

English ships today. The architecture is ready for **French** and **Arabic**:

1. All copy lives in `src/i18n/en.ts` (typed `Dictionary`).
2. Add `fr.ts` / `ar.ts` mirroring that shape and register them in
   `src/i18n/index.ts`.
3. Introduce a `[locale]` route segment when translations are ready.
4. Arabic renders right-to-left automatically via `localeDirection` (the
   root layout sets `dir` from it).
5. Brand logos are locale-aware (`<Logo locale="fr" />`): English and
   Arabic share the gold "BRAINFORT SECURITY" lockup; French uses the
   fleur-de-lys "BrAInFort Sécurité Inc." lockup.

## Branding

- `public/logo.svg` + `src/components/layout/brand-mark.tsx` — SVG
  recreation of the official EN/AR shield (circuit-brain + maple leaf,
  gold/red).
- `public/logo-fr.svg` + `src/components/layout/brand-mark-fr.tsx` — SVG
  recreation of the official FR shield (fleur-de-lys + circuit brain,
  navy/red/blue; the site header uses a light-on-dark recolor).
- If the brand team exports official vector assets, drop them in as
  replacements.
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

- [ ] French (`fr`) and Arabic (`ar`) locales with `[locale]` routing
- [ ] Cloudflare Worker form backend with Turnstile bot protection
- [ ] Blog / insights section (MDX)
- [ ] Case studies with real client testimonials
- [ ] Cloudflare Web Analytics snippet
- [ ] Official logo vector assets from the brand team

## License

[MIT](LICENSE) © 2026 BrainFort Security Inc.
