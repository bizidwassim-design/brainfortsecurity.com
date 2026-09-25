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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => {
            const Icon = serviceIcons[service.id] ?? ShieldCheck;
            return (
              <Reveal key={service.id} delay={index * 0.06}>
                <div
                  id={service.id}
                  className="glass card-lift group h-full scroll-mt-32 rounded-2xl p-7"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                    <Icon className="size-6 text-[#7a5f16]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7a5f16]">
                    {dict.servicesOverview.learnMore}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
                  </span>
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
