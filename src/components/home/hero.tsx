import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck, Zap } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/i18n";
import { cn } from "@/lib/utils";

const highlightIcons = [ShieldCheck, Lock, Zap];

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  const [before, after] = dict.hero.title.split(dict.hero.highlight);

  return (
    <section className="hero-glow grid-pattern relative overflow-hidden">
      <div aria-hidden="true" className="aurora" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Image
              src="/brand/shield-web.webp"
              alt=""
              width={260}
              height={433}
              priority
              aria-hidden="true"
              className="mx-auto mb-6 h-20 w-auto drop-shadow-[0_0_20px_rgba(212,175,55,0.35)] sm:h-24"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <Badge className="mb-6">{dict.hero.badge}</Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {before}
              <span className="bg-gradient-to-r from-[#f1d68a] via-[#d4af37] to-[#9a7a1f] bg-clip-text text-transparent">
                {dict.hero.highlight}
              </span>
              {after}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {dict.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                {dict.hero.secondaryCta}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="mx-auto mt-14 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              {dict.hero.highlights.map((label, index) => {
                const Icon = highlightIcons[index] ?? ShieldCheck;
                return (
                  <li
                    key={label}
                    className="glass flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
                  >
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                    {label}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
