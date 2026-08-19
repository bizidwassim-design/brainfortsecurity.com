import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  FileText,
  Zap,
} from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { alternatesFor, getDictionary, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.packagesPage.metaTitle,
    description: dict.packagesPage.metaDescription,
    alternates: alternatesFor(locale, "/packages/"),
  };
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
                    <Badge className="absolute -top-3 start-6">
                      {t.recommendedBadge}
                    </Badge>
                  )}
                  <h2 className="gold-text text-2xl font-extrabold tracking-tight">
                    {pkg.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-primary">
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
