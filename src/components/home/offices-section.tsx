import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";

interface OfficesSectionProps {
  dict: Dictionary;
}

/**
 * Beacon positions on public/world-map.svg (percent of the map box).
 * Computed from the map's Mercator projection (x = 2.8034·lon + 475.3,
 * y = Mercator(lat), fitted to <0.5 px against the AE/DE border paths):
 *   Montréal 45.5017N 73.5673W · Dubai 25.2048N 55.2708E ·
 *   Riyadh 24.7136N 46.6753E
 */
const CITY_POSITIONS: Record<
  string,
  { x: number; y: number; labelBelow?: boolean }
> = {
  ca: { x: 26.64, y: 48.18 },
  ae: { x: 62.4, y: 58.73 },
  sa: { x: 60.01, y: 58.96, labelBelow: true },
};

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

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 max-w-4xl" dir="ltr">
            <Image
              src="/world-map.svg"
              alt=""
              width={1010}
              height={666}
              className="w-full select-none"
              aria-hidden="true"
            />
            {dict.offices.items.map((office) => {
              const pos = CITY_POSITIONS[office.flag];
              if (!pos) return null;
              return (
                <div
                  key={office.flag}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                  <span className="relative flex size-3 sm:size-3.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex h-full w-full rounded-full border border-[#f1d68a] bg-primary shadow-[0_0_12px_rgba(212,175,55,0.9)]" />
                  </span>
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.65rem] font-semibold text-[#e9d18b] sm:text-xs ${
                      pos.labelBelow ? "top-full mt-1.5" : "bottom-full mb-1.5"
                    }`}
                  >
                    {office.city}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
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
