import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";

interface OfficesSectionProps {
  dict: Dictionary;
}

export function OfficesSection({ dict }: OfficesSectionProps) {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="offices">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="offices"
            eyebrow={dict.offices.eyebrow}
            title={dict.offices.title}
            subtitle={dict.offices.subtitle}
          />
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {dict.offices.items.map((office, index) => (
            <Reveal key={office.flag} delay={index * 0.08}>
              <li className="glass flex h-full flex-col items-center rounded-2xl p-8 text-center">
                <Image
                  src={`/flags/${office.flag}.svg`}
                  alt=""
                  width={64}
                  height={40}
                  className="mb-4 h-10 w-auto rounded-sm border border-border"
                  aria-hidden="true"
                />
                <h3 className="text-base font-semibold text-foreground">
                  {office.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {office.sublabel}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
