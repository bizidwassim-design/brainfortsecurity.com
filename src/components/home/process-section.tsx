import { Search, ListChecks, Rocket, Activity } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";

const icons = [Search, ListChecks, Rocket, Activity];

interface ProcessSectionProps {
  dict: Dictionary;
}

export function ProcessSection({ dict }: ProcessSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" aria-labelledby="process-title">
      <div className="grid-pattern absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading id="process-title" eyebrow={dict.process.eyebrow} title={dict.process.title} subtitle={dict.process.subtitle} />
        </Reveal>
        <div className="relative mt-14">
          <div className="process-line absolute top-8 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent lg:block" aria-hidden="true" />
          <ol className="relative grid gap-5 lg:grid-cols-4">
          {dict.process.items.map((item, index) => {
            const Icon = icons[index] ?? Activity;
            return (
              <li key={item.title} className="relative">
                <Reveal delay={index * 0.08}>
                  <div className="group h-full rounded-2xl border border-border bg-background/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_45px_-24px_rgba(122,95,22,0.35)]">
                    <div className="flex items-center justify-between">
                      <span className="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-primary/25 bg-[#171513] text-[#efd878] shadow-lg">
                        <Icon className="size-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-bold text-primary">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    <p className="mt-5 border-t border-border pt-4 text-xs font-semibold uppercase tracking-wide text-[#7a5f16]">{item.deliverable}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
          </ol>
        </div>
      </div>
    </section>
  );
}
