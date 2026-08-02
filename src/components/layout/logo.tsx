import Link from "next/link";

import { BrandMark } from "@/components/layout/brand-mark";
import { BrandMarkFr } from "@/components/layout/brand-mark-fr";
import { defaultLocale, type Locale } from "@/i18n";
import { siteConfig } from "@/lib/site";

interface LogoProps {
  locale?: Locale;
}

/**
 * Locale-aware brand lockup:
 *  - EN / AR — gold shield (brain + maple leaf) with "BRAINFORT SECURITY"
 *    and the signature red "AI".
 *  - FR — castle shield (fleur-de-lys + circuit brain) with
 *    "BrAInFort Sécurité Inc.".
 */
export function Logo({ locale = defaultLocale }: LogoProps) {
  const isFrench = locale === "fr";

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`${siteConfig.name} — Home`}
    >
      {isFrench ? (
        <BrandMarkFr className="h-10 w-9" />
      ) : (
        <BrandMark className="h-10 w-9" />
      )}
      {isFrench ? (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-wide text-foreground">
            Br<span className="text-accent">AI</span>nFort
          </span>
          <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-slate-300">
            Sécurité Inc.
          </span>
        </span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className="gold-text text-lg font-extrabold tracking-wide">
            BR<span className="text-accent">AI</span>NFORT
          </span>
          <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-[#d4af37]">
            Security
          </span>
        </span>
      )}
    </Link>
  );
}
