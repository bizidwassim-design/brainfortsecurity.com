import Link from "next/link";

import { defaultLocale, type Locale } from "@/i18n";
import { siteConfig } from "@/lib/site";

interface LogoProps {
  locale?: Locale;
}

/** Red sparkles above the "AI", as in the official wordmark. */
function Sparkles() {
  return (
    <svg
      viewBox="0 0 44 26"
      aria-hidden="true"
      className="absolute -top-3 left-1/2 h-3.5 w-auto -translate-x-1/2 text-accent"
      fill="currentColor"
    >
      <path d="M13 0l3.2 7.8L24 11l-7.8 3.2L13 22l-3.2-7.8L2 11l7.8-3.2Z" />
      <path d="M31 4l1.9 4.6L37.5 10l-4.6 1.9L31 16.5l-1.9-4.6L24.5 10l4.6-1.4Z" />
      <path d="M38 16l1.2 2.9 2.9 1.1-2.9 1.2L38 24l-1.2-2.8-2.8-1.2 2.8-1.1Z" />
    </svg>
  );
}

/**
 * Brand wordmark lockup (typography-only, per the official logo):
 * gold "BRAINFORT" with the red "AI" + sparkles, "SECURITY" letter-spaced
 * beneath. FR uses the "BrAInFort / Sécurité Inc." wording. If official
 * vector files land in public/brand/, swap this component to render them.
 */
export function Logo({ locale = defaultLocale }: LogoProps) {
  const isFrench = locale === "fr";

  return (
    <Link
      href={`/${locale}/`}
      className="flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`${siteConfig.name} — ${isFrench ? "Accueil" : "Home"}`}
    >
      <span className="flex flex-col pt-2 leading-none">
        <span className="gold-text text-xl font-extrabold tracking-wide">
          {isFrench ? "Br" : "BR"}
          <span className="relative text-accent">
            AI
            <Sparkles />
          </span>
          {isFrench ? "nFort" : "NFORT"}
        </span>
        <span className="mt-1.5 flex items-center gap-2 text-[0.6rem] font-semibold uppercase text-[#d4af37]">
          <span aria-hidden="true" className="h-px w-4 bg-[#d4af37]/60" />
          {/* Inline letter-spacing so the Arabic reset can't flatten it. */}
          <span style={{ letterSpacing: isFrench ? "0.18em" : "0.42em" }}>
            {isFrench ? "Sécurité Inc." : "Security"}
          </span>
          <span aria-hidden="true" className="h-px w-4 bg-[#d4af37]/60" />
        </span>
      </span>
    </Link>
  );
}
