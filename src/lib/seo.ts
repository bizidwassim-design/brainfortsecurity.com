import type { Metadata } from "next";

import { alternatesFor, localeOg, type Locale } from "@/i18n";
import { siteConfig } from "@/lib/site";

/**
 * Full per-page metadata: title, description, canonical/hreflang alternates,
 * and — critically — page-specific Open Graph / Twitter tags (including the
 * page's own `og:url`). Without this, Next.js silently inherits the root
 * layout's OG/Twitter block on every sub-page, so sharing any link other
 * than the homepage previews with the homepage's title/description/url.
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = `${siteConfig.url}/${locale}${path}`;

  return {
    title,
    description,
    alternates: alternatesFor(locale, path),
    openGraph: {
      type: "website",
      locale: localeOg[locale],
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
