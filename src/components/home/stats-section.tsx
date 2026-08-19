import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";

interface StatsSectionProps {
  dict: Dictionary;
}

/**
 * Dashboard-style stats: an animated gauge (built from the identity stat)
 * beside the remaining stat tiles — a nod to security-dashboard UIs.
 */
export function StatsSection({ dict }: StatsSectionProps) {
  const gaugeStat = dict.stats.items[1];
  const gaugeValue = parseInt(gaugeStat.value, 10) || 95;
  const tiles = dict.stats.items.filter((_, index) => index !== 1);

  return (
    <section className="editorial-light py-20 sm:py-28" aria-labelledby="stats">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="stats"
            eyebrow={dict.stats.eyebrow}
            title={dict.stats.title}
          />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[320px_1fr]">
          <Reveal>
            <div className="glass card-lift flex h-full flex-col items-center justify-center rounded-2xl p-8 text-center">
              <svg
                viewBox="0 0 200 112"
                className="w-full max-w-[240px]"
                role="img"
                aria-label={`${gaugeStat.value} — ${gaugeStat.label}`}
              >
                <defs>
                  <linearGradient id="gauge-gold" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#9a7a1f" />
                    <stop offset="0.5" stopColor="#d4af37" />
                    <stop offset="1" stopColor="#f1d68a" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="rgba(212,175,55,0.15)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                <path
                  d="M20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="url(#gauge-gold)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  pathLength={100}
                  strokeDasharray={`${gaugeValue} 100`}
                  className="gauge-arc"
                />
                <text
                  x="100"
                  y="88"
                  textAnchor="middle"
                  className="fill-[#f1d68a]"
                  fontSize="34"
                  fontWeight="800"
                >
                  {gaugeStat.value}
                </text>
              </svg>
              <p className="mt-3 max-w-[240px] text-sm leading-relaxed text-muted-foreground">
                {gaugeStat.label}
              </p>
            </div>
          </Reveal>

          <dl className="grid gap-6 sm:grid-cols-3">
            {tiles.map((stat, index) => (
              <Reveal key={stat.label} delay={(index + 1) * 0.08}>
                <div className="glass card-lift flex h-full flex-col justify-center rounded-2xl p-8 text-center">
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
      </div>
    </section>
  );
}
