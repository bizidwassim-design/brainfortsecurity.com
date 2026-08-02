import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Eye, Handshake, Lightbulb } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/i18n";
import { cn } from "@/lib/utils";

const dict = getDictionary();

export const metadata: Metadata = {
  title: dict.aboutPage.metaTitle,
  description: dict.aboutPage.metaDescription,
  alternates: {
    canonical: "/about/",
  },
};

const valueIcons = [Eye, Compass, Handshake, Lightbulb];

export default function AboutPage() {
  return (
    <>
      <section className="hero-glow py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Badge>{dict.aboutPage.eyebrow}</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {dict.aboutPage.title}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {dict.aboutPage.intro}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-24" aria-labelledby="mission">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="glass mx-auto max-w-3xl rounded-3xl p-8 text-center sm:p-12">
              <h2
                id="mission"
                className="mb-4 text-2xl font-bold text-foreground sm:text-3xl"
              >
                {dict.aboutPage.missionTitle}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {dict.aboutPage.mission}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="border-y border-border bg-card/30 py-20 sm:py-28"
        aria-labelledby="values"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              id="values"
              title={dict.aboutPage.valuesTitle}
              badgeVariant="secondary"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.aboutPage.values.map((value, index) => {
              const Icon = valueIcons[index] ?? Eye;
              return (
                <Reveal key={value.title} delay={index * 0.08}>
                  <div className="glass h-full rounded-2xl p-6">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="approach">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-6">
              <h2
                id="approach"
                className="text-center text-2xl font-bold text-foreground sm:text-3xl"
              >
                {dict.aboutPage.approachTitle}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {dict.aboutPage.approach}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-labelledby="about-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="hero-glow glass rounded-3xl px-6 py-14 text-center sm:px-16">
              <h2
                id="about-cta"
                className="text-2xl font-bold text-foreground sm:text-3xl"
              >
                {dict.aboutPage.ctaTitle}
              </h2>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "group")}
                >
                  {dict.aboutPage.ctaButton}
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
