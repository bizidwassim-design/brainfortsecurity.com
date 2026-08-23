import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Cloud,
  Compass,
  Crosshair,
  GraduationCap,
  Handshake,
  KeyRound,
  LifeBuoy,
  Radar,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { AppTabs } from "@/components/app/app-tabs";
import { CostSimulator } from "@/components/simulator/cost-simulator";
import { buttonVariants } from "@/components/ui/button";
import {
  getDictionary,
  localeNames,
  locales,
  type Locale,
} from "@/i18n";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, LucideIcon> = {
  governance: Compass,
  audits: ClipboardCheck,
  offensive: Crosshair,
  protection: ShieldCheck,
  identity: KeyRound,
  resilience: LifeBuoy,
  training: GraduationCap,
  thirdparty: Handshake,
  cloud: Cloud,
  intel: Radar,
};

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return { title: dict.appPage.metaTitle };
}

export default async function MobileAppPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const simulator = (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <CostSimulator
          locale={locale}
          packages={dict.packagesPage.packages.map((pkg) => ({
            name: pkg.name,
            recommended: pkg.recommended,
          }))}
          recommendedBadge={dict.packagesPage.recommendedBadge}
          dict={dict.simulatorPage}
          ctaHref={`mailto:${siteConfig.emails.sales}?subject=${encodeURIComponent(dict.appPage.contactCta)}`}
        />
      </div>
    </section>
  );

  const catalog = (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-3">
        {dict.catalog.categories.map((category) => {
          const Icon = categoryIcons[category.id] ?? ShieldCheck;
          return (
            <details key={category.id} className="glass group rounded-2xl">
              <summary className="flex cursor-pointer list-none items-center gap-3 p-5 [&::-webkit-details-marker]:hidden">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-foreground">
                    {category.title}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {category.description}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary"
                >
                  {category.items.length}
                </span>
                <ChevronDown
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <ul className="space-y-2.5 px-5 pb-5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          );
        })}
        <p className="glass mt-4 rounded-full px-5 py-2.5 text-center text-xs font-medium text-foreground">
          {dict.catalog.aiNote}
        </p>
      </div>
    </section>
  );

  const booking = (
    <section className="px-4 py-10 sm:px-6">
      <div className="glass mx-auto max-w-xl rounded-3xl p-8 text-center sm:p-12">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/5">
          <CalendarClock
            className="neon-icon size-7 text-primary"
            aria-hidden="true"
          />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-foreground">
          {dict.appPage.bookingTitle}
        </h2>
        <span
          aria-hidden="true"
          className="mx-auto mt-4 block h-1 w-12 rounded-full bg-primary"
        />
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {dict.appPage.bookingBody}
        </p>
        <div className="mt-7">
          <a
            href="https://calendly.com/wassim-bizid-brainfortsecurity/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "group")}
          >
            {dict.appPage.bookingCta}
            <ArrowRight
              className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {/* Minimal app header: brand (non-navigating) + language switch */}
      <header className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <span className="flex items-center gap-2.5">
          <Image
            src="/brand/shield-web.webp"
            alt=""
            width={260}
            height={433}
            aria-hidden="true"
            className="h-9 w-auto"
          />
          <span className="gold-text text-lg font-extrabold tracking-wide">
            {locale === "fr" ? "Br" : "BR"}
            <span className="text-accent">AI</span>
            {locale === "fr" ? "nFort" : "NFORT"}
          </span>
        </span>
        <nav aria-label={dict.nav.languageLabel}>
          <ul className="flex items-center gap-0.5 rounded-lg border border-border p-0.5">
            {locales.map((l) => (
              <li key={l}>
                <Link
                  href={`/app/${l}/`}
                  lang={l}
                  aria-label={localeNames[l]}
                  aria-current={l === locale ? "true" : undefined}
                  className={cn(
                    "block rounded-md px-2 py-1 text-xs font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    l === locale
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <AppTabs
          simulatorLabel={dict.appPage.tabSimulator}
          catalogLabel={dict.appPage.tabCatalog}
          bookingLabel={dict.appPage.tabBooking}
          simulator={simulator}
          catalog={catalog}
          booking={booking}
        />
      </main>
    </>
  );
}
