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
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="text-center lg:text-start">
            <Reveal delay={0.05}>
              <Badge className="mb-3 uppercase tracking-wider sm:mb-6">
                {dict.hero.badge}
              </Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
                {before}
                <span className="bg-gradient-to-r from-[#d4af37] via-[#b8901f] to-[#7a5f16] bg-clip-text text-transparent">
                  {dict.hero.highlight}
                </span>
                {after}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                {dict.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
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
                  href={`/${locale}/simulator/`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                  )}
                >
                  {dict.hero.secondaryCta}
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-2 shadow-[0_28px_80px_-36px_rgba(28,23,18,0.38)]">
                <Image
              src="/about/security-layers.webp"
                  alt=""
                  width={1536}
                  height={1024}
                  priority
                  aria-hidden="true"
                  className="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
                />
                <div className="absolute bottom-5 start-5 flex items-center gap-3 rounded-xl border border-white/15 bg-[#0a0a0c]/90 px-4 py-3 text-start shadow-xl backdrop-blur">
                  <Image src="/brand/shield-web.webp" alt="" width={260} height={433} aria-hidden="true" className="h-9 w-auto" />
                  <div>
                    <p className="text-xs font-semibold text-white">{dict.hero.visualTitle}</p>
                    <p className="mt-0.5 text-[0.7rem] text-[#c8c1b2]">{dict.hero.visualSubtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <ul className="mt-12 grid gap-5 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
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
