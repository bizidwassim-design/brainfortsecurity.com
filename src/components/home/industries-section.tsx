import {
  Banknote,
  Building2,
  Factory,
  HeartPulse,
  Landmark,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";

const icons = [Building2, Factory, HeartPulse, Banknote, Landmark];

interface IndustriesSectionProps {
  dict: Dictionary;
}

export function IndustriesSection({ dict }: IndustriesSectionProps) {
  return (
    <section
      className="border-y border-border bg-card/30 py-20 sm:py-28"
      aria-labelledby="industries"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="industries"
            eyebrow={dict.industries.eyebrow}
            title={dict.industries.title}
            subtitle={dict.industries.subtitle}
            badgeVariant="secondary"
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {dict.industries.items.map((industry, index) => {
            const Icon = icons[index] ?? Building2;
            return (
              <Reveal key={industry.title} delay={index * 0.06}>
                <li className="glass h-full rounded-2xl p-6 text-center">
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-foreground">
                    {industry.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {industry.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
