import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck } from "lucide-react";

import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { alternatesFor, getDictionary, type Locale } from "@/i18n";
import { serviceIcons } from "@/lib/services";

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

  return (
    <>
      <section className="hero-glow py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={dict.servicesPage.eyebrow}
              title={dict.servicesPage.title}
              subtitle={dict.servicesPage.subtitle}
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-label={dict.nav.services}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {dict.services.map((service, index) => {
              const Icon = serviceIcons[service.id] ?? ShieldCheck;
              return (
                <Reveal key={service.id} delay={(index % 2) * 0.08}>
                  <Card
                    id={service.id}
                    className="group h-full scroll-mt-24 transition-colors hover:border-primary/50"
                  >
                    <CardHeader>
                      <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                        {dict.servicesPage.outcomesLabel}
                      </p>
                      <ul className="space-y-2">
                        {service.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2
                              className="mt-0.5 size-4 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
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
                <li className="glass h-full rounded-2xl p-6">
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
