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
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        {/* Business-card composition: large shield beside the message. */}
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Reveal>
            <Image
              src="/brand/shield-web.webp"
              alt=""
              width={260}
              height={433}
              priority
              aria-hidden="true"
              className="mx-auto h-48 w-auto sm:h-64 lg:h-80"
            />
          </Reveal>

          <div className="text-center lg:text-start">
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
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">
                {dict.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
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
          <ul className="mx-auto mt-16 flex max-w-3xl flex-wrap items-start justify-center gap-10 sm:gap-16">
            {dict.hero.highlights.map((label, index) => {
              const Icon = highlightIcons[index] ?? ShieldCheck;
              return (
                <li
                  key={label}
                  className="neon-float flex w-32 flex-col items-center gap-3 text-center"
                  style={{ animationDelay: `${index * 0.7}s` }}
                >
                  <span className="flex size-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/5">
                    <Icon
                      className="neon-icon size-8 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
