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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => {
            const Icon = serviceIcons[service.id] ?? ShieldCheck;
            return (
              <Reveal key={service.id} delay={index * 0.06}>
                {/* Flip card: front = icon + title, back = description. */}
                <div className="flip-card h-60" tabIndex={0}>
                  <div className="flip-inner">
                    <div className="flip-face glass flex flex-col items-center justify-center gap-4 rounded-2xl p-6 text-center">
                      <div className="neon-float flex size-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/5">
                        <Icon
                          className="neon-icon size-8 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-lg font-semibold leading-snug text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flip-back flip-face glass flex flex-col justify-center rounded-2xl border border-primary/40 p-6">
                      <div className="mb-3 flex items-center gap-2.5">
                        <Icon
                          className="size-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <p className="text-sm font-semibold text-primary">
                          {service.title}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
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
