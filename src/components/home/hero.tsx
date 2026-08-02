import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck, Zap } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/i18n";
import { cn } from "@/lib/utils";

const dict = getDictionary();

const heroHighlights = [
  { icon: ShieldCheck, label: "Zero Trust Ready" },
  { icon: Lock, label: "Identity-First Security" },
  { icon: Zap, label: "AI-Powered Assessments" },
];

export function Hero() {
  return (
    <section className="hero-glow grid-pattern relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge variant="secondary" className="mb-6">
              {dict.hero.badge}
            </Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {dict.hero.title.replace(dict.hero.highlight, "")}
              <span className="bg-gradient-to-r from-blue-400 via-primary to-secondary bg-clip-text text-transparent">
                {dict.hero.highlight}
              </span>
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
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "group")}
              >
                {dict.hero.primaryCta}
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/services"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                {dict.hero.secondaryCta}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="mx-auto mt-14 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              {heroHighlights.map((item) => (
                <li
                  key={item.label}
                  className="glass flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
                >
                  <item.icon
                    className="size-4 text-secondary"
                    aria-hidden="true"
                  />
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
