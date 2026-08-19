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
    <section className="editorial-light py-20 sm:py-28" aria-labelledby="services-overview">
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
              <Reveal key={service.id} delay={index * 0.04}>
                <article className="glass card-lift group relative h-full min-h-64 overflow-hidden rounded-2xl p-7">
                  <span className="absolute end-5 top-4 text-5xl font-black text-primary/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mb-8 flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="max-w-[16rem] text-xl font-bold leading-snug text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/services/`}
              className={cn(
                buttonVariants({ size: "lg" }),
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
