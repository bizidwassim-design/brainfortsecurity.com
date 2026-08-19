import type { Metadata } from "next";
import {
  CheckCircle2,
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
  Zap,
  type LucideIcon,
} from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { CategoryNav } from "@/components/services/category-nav";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { alternatesFor, getDictionary, type Locale } from "@/i18n";

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
  return {
    title: dict.servicesPage.metaTitle,
    description: dict.servicesPage.metaDescription,
    alternates: alternatesFor(locale, "/services/"),
  };
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const total = dict.catalog.categories.reduce(
    (sum, category) => sum + category.items.length,
    0,
  );

  return (
    <>
      <section className="hero-glow relative overflow-hidden py-20 sm:py-24">
        <div aria-hidden="true" className="aurora" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={dict.catalog.eyebrow}
              title={dict.catalog.title}
              subtitle={dict.catalog.subtitle}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-center">
              <span className="gold-text text-5xl font-extrabold tracking-tight">
                {total}
              </span>
              <span className="ms-2 text-lg text-muted-foreground">
                {dict.catalog.countLabel}
              </span>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="glass mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 rounded-full px-5 py-2.5 text-center text-sm font-medium text-foreground">
              <Zap className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {dict.catalog.aiNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category quick navigation */}
      <CategoryNav
        ariaLabel={dict.catalog.eyebrow}
        categories={dict.catalog.categories.map((category) => ({
          id: category.id,
          title: category.title,
          count: category.items.length,
        }))}
      />

      <section className="py-16 sm:py-20" aria-label={dict.catalog.title}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {dict.catalog.categories.map((category, index) => {
              const Icon = categoryIcons[category.id] ?? ShieldCheck;
              return (
                <Reveal key={category.id} delay={(index % 2) * 0.06}>
                  <article
                    id={category.id}
                    className="glass card-lift h-full scroll-mt-36 rounded-2xl p-6 sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="size-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold text-foreground">
                            {category.title}
                          </h2>
                          <p className="mt-0.5 text-sm text-muted-foreground">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <Badge aria-hidden="true" className="shrink-0">
                        {category.items.length}
                      </Badge>
                    </div>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
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
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="border-y border-border bg-card/30 py-20 sm:py-28"
        aria-labelledby="process"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              id="process"
              eyebrow={dict.servicesPage.process.eyebrow}
              title={dict.servicesPage.process.title}
              badgeVariant="secondary"
            />
          </Reveal>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.servicesPage.process.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <li className="glass card-lift h-full rounded-2xl p-6">
                  <Badge className="mb-4" aria-hidden="true">
                    {`0${index + 1}`}
                  </Badge>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <div className="pt-20 sm:pt-28">
        <ContactCta locale={locale} dict={dict} />
      </div>
    </>
  );
}
