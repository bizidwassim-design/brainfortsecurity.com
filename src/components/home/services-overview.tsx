import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/i18n";
import { FEATURED_SERVICES_COUNT, serviceIcons } from "@/lib/services";
import { cn } from "@/lib/utils";

interface ServicesOverviewProps {
  locale: Locale;
  dict: Dictionary;
}

export function ServicesOverview({ locale, dict }: ServicesOverviewProps) {
  const featured = dict.services.slice(0, FEATURED_SERVICES_COUNT);

  return (
    <section className="py-20 sm:py-28" aria-labelledby="services-overview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="services-overview"
            eyebrow={dict.servicesOverview.eyebrow}
            title={dict.servicesOverview.title}
            subtitle={dict.servicesOverview.subtitle}
          />
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => {
            const Icon = serviceIcons[service.id] ?? ShieldCheck;
            /* Alternate gold/red accent — stays inside the brand palette while
               giving each card a distinct identity. */
            const isGold = index % 2 === 0;
            return (
              <Reveal key={service.id} delay={index * 0.06}>
                <div
                  id={service.id}
                  className="card-lift glass flex h-full scroll-mt-32 flex-col rounded-2xl p-7"
                >
                  <div
                    className={cn(
                      "flex size-14 shrink-0 items-center justify-center rounded-2xl border",
                      isGold
                        ? "border-primary/25 bg-primary/5"
                        : "border-secondary/25 bg-secondary/5",
                    )}
                  >
                    <Icon
                      className={cn(
                        "neon-icon size-7",
                        isGold ? "text-primary" : "text-secondary",
                      )}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href={`/${locale}/services/`}
                    className={cn(
                      "group/link mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold transition-colors",
                      isGold
                        ? "text-primary hover:text-[#7a5f16]"
                        : "text-secondary hover:text-[#9c1f1f]",
                    )}
                  >
                    {dict.servicesOverview.learnMore}
                    <ArrowRight
                      className="size-4 transition-transform group-hover/link:translate-x-1 rtl:rotate-180 rtl:group-hover/link:-translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/services/`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group",
              )}
            >
              {dict.servicesOverview.viewAll}
              <ArrowRight
                className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
