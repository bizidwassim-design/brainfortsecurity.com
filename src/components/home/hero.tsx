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
    <section className="hero-glow grid-pattern relative overflow-hidden">
      <div aria-hidden="true" className="aurora" />
      {/* World map backdrop, faded on the end side (mockup style) */}
      <Image
        src="/world-map.svg"
        alt=""
        width={1010}
        height={666}
        aria-hidden="true"
        className="pointer-events-none absolute -end-32 top-8 hidden w-[720px] select-none opacity-25 lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
          {/* Vertical brand lockup: shield + wordmark + tagline */}
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <Image
                src="/brand/shield-canadian.webp"
                alt=""
                width={320}
                height={503}
                priority
                aria-hidden="true"
                className="h-56 w-auto sm:h-72"
              />
            </div>
          </Reveal>

          <div className="text-center lg:text-start">
            <Reveal delay={0.05}>
              <Badge className="mb-6 uppercase tracking-wider">
                {dict.hero.badge}
              </Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
                {before}
                <span className="bg-gradient-to-r from-[#f1d68a] via-[#d4af37] to-[#9a7a1f] bg-clip-text text-transparent">
                  {dict.hero.highlight}
                </span>
                {after}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                {dict.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
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

        <Reveal delay={0.4}>
          <ul className="mt-16 grid gap-8 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {dict.hero.features.map((feature, index) => {
              const Icon = featureIcons[index] ?? ShieldCheck;
              return (
                <li key={feature.title} className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/5">
                    <Icon
                      className="neon-icon size-6 text-primary"
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
