import { en } from "./en";

/**
 * i18n foundation.
 *
 * English is the only shipped locale today. The architecture is ready for
 * French (`fr`) and Arabic (`ar`):
 *  1. Create `src/i18n/fr.ts` / `src/i18n/ar.ts` mirroring the `Dictionary`
 *     shape and register them in `dictionaries` below.
 *  2. Introduce a `[locale]` route segment (or middleware) once the
 *     translated content is ready.
 *  3. For Arabic, set `dir="rtl"` on <html> — see `localeDirection` below;
 *     the layout reads it so RTL comes for free when `ar` ships.
 *  4. Brand logos are locale-aware (see `components/layout/logo.tsx`):
 *     EN and AR share the gold "BRAINFORT SECURITY" lockup
 *     (`public/logo.svg`); FR uses the fleur-de-lys "BrAInFort
 *     Sécurité Inc." lockup (`public/logo-fr.svg`).
 */
export const locales = ["en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  fr: "ltr",
  ar: "rtl",
};

export type Dictionary = typeof en;

const dictionaries: Partial<Record<Locale, Dictionary>> = {
  en,
};

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale] ?? en;
}
