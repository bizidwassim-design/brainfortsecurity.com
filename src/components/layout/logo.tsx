import Link from "next/link";

import { BrandMark } from "@/components/layout/brand-mark";
import { siteConfig } from "@/lib/site";

/**
 * Brand lockup: shield mark + "BRAINFORT SECURITY" wordmark with the
 * signature red "AI". Shared across all locales (EN / FR / AR).
 */
export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`${siteConfig.name} — Home`}
    >
      <BrandMark className="h-10 w-9" />
      <span className="flex flex-col leading-none">
        <span className="gold-text text-lg font-extrabold tracking-wide">
          BR<span className="text-accent">AI</span>NFORT
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-[#d4af37]">
          Security
        </span>
      </span>
    </Link>
  );
}
