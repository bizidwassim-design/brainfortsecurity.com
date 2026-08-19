import { Award, Bot, Globe2, Map } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";

const icons = [Award, Bot, Map, Globe2];

interface WhySectionProps {
  dict: Dictionary;
}

export function WhySection({ dict }: WhySectionProps) {
  return (
    <section
      className="border-y border-border py-20 sm:py-28"
      aria-labelledby="why-brainfort"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="why-brainfort"
            eyebrow={dict.why.eyebrow}
            title={dict.why.title}
            badgeVariant="secondary"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.why.items.map((item, index) => {
            const Icon = icons[index] ?? Award;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="glass card-lift h-full rounded-2xl p-6">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
