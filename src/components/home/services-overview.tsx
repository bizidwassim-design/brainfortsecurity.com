import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/i18n";
import { FEATURED_SERVICES_COUNT, serviceIcons } from "@/lib/services";
import { cn } from "@/lib/utils";

const serviceAccents = [
  "from-amber-500/20 text-amber-800",
  "from-red-500/15 text-red-800",
  "from-blue-500/15 text-blue-800",
  "from-violet-500/15 text-violet-800",
  "from-emerald-500/15 text-emerald-800",
  "from-slate-500/15 text-slate-800",
];

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
                <Link
                  href={`/${locale}/services/#${service.id}`}
                  id={service.id}
                  className="glass card-lift group relative block h-full scroll-mt-32 overflow-hidden rounded-2xl p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className={cn("absolute inset-x-0 top-0 h-24 bg-gradient-to-b to-transparent opacity-70", serviceAccents[index])} aria-hidden="true" />
                  <div className={cn("relative mb-5 flex size-12 items-center justify-center rounded-xl border border-current/15 bg-white/70 shadow-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110", serviceAccents[index])}>
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7a5f16]">
                    {dict.servicesOverview.learnMore}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
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
