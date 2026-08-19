import { ar } from "./ar";
import { en } from "./en";
import { fr } from "./fr";

/**
 * i18n core. Every locale ships a full dictionary; routes live under
 * `/(en|fr|ar)/…` via the `app/[locale]` segment. The root `/` is
 * redirected to `/en/` by `public/_redirects` (Cloudflare Pages).
 *
 * The shared header lockup uses only official assets from `public/brand/`.
 */
export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  fr: "ltr",
  ar: "rtl",
};

/** Native-language names for the switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

/** OpenGraph locale identifiers. */
export const localeOg: Record<Locale, string> = {
  en: "en_CA",
  fr: "fr_CA",
  ar: "ar_AE",
};

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, fr, ar };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale] ?? en;
}

/**
 * Canonical + hreflang alternates for a page path (path starts with "/",
 * e.g. "/services/").
 */
export function alternatesFor(locale: Locale, path: string) {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      en: `/en${path}`,
      fr: `/fr${path}`,
      ar: `/ar${path}`,
      "x-default": `/en${path}`,
    },
  };
}
