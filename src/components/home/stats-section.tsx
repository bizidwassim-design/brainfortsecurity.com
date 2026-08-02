import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";

interface StatsSectionProps {
  dict: Dictionary;
}

export function StatsSection({ dict }: StatsSectionProps) {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="stats">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="stats"
            eyebrow={dict.stats.eyebrow}
            title={dict.stats.title}
          />
        </Reveal>

        <dl className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.stats.items.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="glass flex flex-col rounded-2xl p-8 text-center">
                <dt className="order-2 mt-2 block text-sm leading-relaxed text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="order-1 bg-gradient-to-r from-[#f1d68a] to-[#d4af37] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
