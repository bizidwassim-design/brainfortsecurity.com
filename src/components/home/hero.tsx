import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Lock,
  MapPin,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/i18n";
import { cn } from "@/lib/utils";

const featureIcons = [ShieldCheck, Lock, Zap, MapPin, BadgeCheck, Users];

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  const [before, after] = dict.hero.title.split(dict.hero.highlight);

  return (
    <section className="hero-glow relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="aurora" />
      {/* World map backdrop, faded on the end side (mockup style) */}
      <Image
        src="/world-map.svg"
        alt=""
        width={1010}
        height={666}
        aria-hidden="true"
        className="pointer-events-none absolute -end-28 top-10 hidden w-[650px] select-none opacity-[0.12] lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Reveal delay={0.05}>
              <Badge className="mb-7 uppercase tracking-[0.16em]">
                {dict.hero.badge}
              </Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl font-extrabold leading-[1.06] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
                {before}
                <span className="bg-gradient-to-r from-[#f1d68a] via-[#d4af37] to-[#9a7a1f] bg-clip-text text-transparent">
                  {dict.hero.highlight}
                </span>
                {after}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
                {dict.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={`/${locale}/contact/`}
                  className={cn(buttonVariants({ size: "lg" }), "group")}
                >
                  {dict.hero.primaryCta}
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href={`/${locale}/services/`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                  )}
                >
                  {dict.hero.secondaryCta}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.25}>
          <ul className="mt-16 grid overflow-hidden rounded-2xl border border-border bg-card/35 sm:grid-cols-3">
            {dict.hero.features.slice(0, 3).map((feature, index) => {
              const Icon = featureIcons[index] ?? ShieldCheck;
              return (
                <li key={feature.title} className="flex items-start gap-4 border-b border-border p-6 last:border-b-0 sm:border-b-0 sm:border-e sm:last:border-e-0">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/5">
                    <Icon
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="text-start">
                    <h3 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
