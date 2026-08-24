import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Download,
  FileText,
  Zap,
} from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary, type Locale } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(
    locale,
    "/packages/",
    dict.packagesPage.metaTitle,
    dict.packagesPage.metaDescription,
  );
}

export default async function PackagesPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.packagesPage;

  return (
    <>
      <section className="hero-glow relative overflow-hidden py-20 sm:py-24">
        <div aria-hidden="true" className="aurora" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow={t.eyebrow}
              title={t.title}
              subtitle={t.subtitle}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="glass mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 rounded-full px-5 py-2.5 text-center text-sm font-medium text-foreground">
              <Zap className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {t.aiNote}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/services/`}
                className={cn(buttonVariants({ variant: "outline" }), "group")}
              >
                {dict.nav.services}
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href={`/${locale}/simulator/`}
                className={cn(buttonVariants({ variant: "outline" }), "group")}
              >
                {dict.nav.cost}
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-24" aria-label={t.title}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {t.packages.map((pkg, index) => (
              <Reveal key={pkg.id} delay={index * 0.08}>
                <article
                  id={pkg.id}
                  className={cn(
                    "glass card-lift relative flex h-full flex-col rounded-2xl p-6 sm:p-8",
                    pkg.recommended && "border border-primary/50",
                  )}
                >
                  {pkg.recommended && (
                    <span className="absolute -top-3.5 start-6 rounded-md border border-primary bg-background px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary">
                      {t.recommendedBadge}
                    </span>
                  )}
                  {/* Flyer-style numbered header: 01 / 02 / 03 */}
                  <p
                    aria-hidden="true"
                    className="gold-text text-4xl font-extrabold tabular-nums leading-none"
                  >
                    {`0${index + 1}`}
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-foreground">
                    {pkg.name}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-1 w-10 rounded-full bg-primary"
                  />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-primary">
                    {pkg.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pkg.audience}
                  </p>

                  <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-foreground">
                    {t.servicesTitle}
                  </h3>
                  {pkg.includesNote && (
                    <p className="mt-1 text-xs font-medium text-primary">
                      {pkg.includesNote}
                    </p>
                  )}
                  <ul className="mt-3 space-y-2">
                    {pkg.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                    <FileText className="size-4 text-primary" aria-hidden="true" />
                    {t.deliverablesTitle}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {pkg.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground before:me-2 before:text-primary before:content-['•']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                    <CalendarClock
                      className="size-4 text-primary"
                      aria-hidden="true"
                    />
                    {t.frequencyTitle}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {pkg.frequency.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground before:me-2 before:text-primary before:content-['•']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex-1" />
                  <Link
                    href={`/${locale}/contact/`}
                    className={cn(
                      buttonVariants({
                        variant: pkg.recommended ? "default" : "outline",
                        size: "lg",
                      }),
                      "group w-full",
                    )}
                  >
                    {t.ctaLabel}
                    <ArrowRight
                      className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service catalogue flyer download */}
      <section className="pb-20 sm:pb-24" aria-labelledby="catalogue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="glass grid items-center gap-8 overflow-hidden rounded-3xl p-6 sm:p-10 lg:grid-cols-[minmax(0,420px)_1fr]">
              <a
                href="/downloads/brainfort-service-catalogue.pdf"
                target="_blank"
                rel="noopener"
                aria-label={t.catalogue.button}
                className="block overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Image
                  src="/catalogue-cover.webp"
                  alt={t.catalogue.coverAlt}
                  width={880}
                  height={620}
                  className="w-full"
                />
              </a>
              <div className="text-center lg:text-start">
                <h2
                  id="catalogue"
                  className="text-2xl font-bold text-foreground sm:text-3xl"
                >
                  {t.catalogue.title}
                </h2>
                <span
                  aria-hidden="true"
                  className="mx-auto mt-4 block h-1 w-12 rounded-full bg-primary lg:mx-0"
                />
                <p className="mt-4 text-muted-foreground">{t.catalogue.body}</p>
                <div className="mt-6">
                  <a
                    href="/downloads/brainfort-service-catalogue.pdf"
                    target="_blank"
                    rel="noopener"
                    className={cn(buttonVariants({ size: "lg" }), "group")}
                  >
                    <Download className="size-4" aria-hidden="true" />
                    {t.catalogue.button}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="border-y border-border bg-card/30 py-20 sm:py-28"
        aria-labelledby="comparison"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              id="comparison"
              title={t.comparisonTitle}
              badgeVariant="secondary"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass mt-14 overflow-x-auto rounded-2xl">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-4 text-start font-semibold">
                      {t.servicesTitle}
                    </th>
                    {t.packages.map((pkg) => (
                      <th
                        key={pkg.id}
                        scope="col"
                        className={cn(
                          "p-4 text-center font-semibold",
                          pkg.recommended && "text-primary",
                        )}
                      >
                        {pkg.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.comparison.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-border/60 last:border-0"
                    >
                      <th
                        scope="row"
                        className="p-4 text-start font-medium text-foreground"
                      >
                        {row.label}
                      </th>
                      {row.values.map((value, i) => (
                        <td
                          key={i}
                          className={cn(
                            "p-4 text-center",
                            value === "—"
                              ? "text-muted-foreground/50"
                              : value === "✓"
                                ? "font-bold text-primary"
                                : "text-muted-foreground",
                          )}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-3xl text-center text-xs italic text-muted-foreground">
              {t.excludedNote}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="pt-20 sm:pt-28">
        <ContactCta locale={locale} dict={dict} />
      </div>
    </>
  );
}
