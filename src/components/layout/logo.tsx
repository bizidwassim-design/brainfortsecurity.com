import Image from "next/image";
import Link from "next/link";

import { defaultLocale, type Locale } from "@/i18n";
import { siteConfig } from "@/lib/site";

interface LogoProps {
  locale?: Locale;
}

/** Official shield and wordmark assets only — never redraw the brand. */
export function Logo({ locale = defaultLocale }: LogoProps) {
  const isFrench = locale === "fr";

  return (
    <Link
      href={`/${locale}/`}
      className="flex items-center gap-0 overflow-hidden rounded-lg bg-[#0a0a0c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`${siteConfig.name} — ${isFrench ? "Accueil" : "Home"}`}
    >
      <Image
        src="/brand/shield-web.webp"
        alt=""
        width={260}
        height={433}
        aria-hidden="true"
        className="h-10 w-auto"
      />
      <Image
        src="/brand/wordmark.png"
        alt={siteConfig.name}
        width={1200}
        height={500}
        className="ms-1 h-11 w-auto object-contain"
        priority
      />
    </Link>
  );
}
