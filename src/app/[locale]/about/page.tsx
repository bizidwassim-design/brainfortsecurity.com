import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Eye, Handshake, Lightbulb } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary, type Locale } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

const valueIcons = [Eye, Compass, Handshake, Lightbulb];

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(
    locale,
    "/about/",
    dict.aboutPage.metaTitle,
    dict.aboutPage.metaDescription,
  );
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

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

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <figure className="card-lift relative overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-[0_28px_80px_-42px_rgba(122,95,22,0.38)]">
              <Image
                src="/about/agentic-client.webp"
                alt={dict.aboutPage.teamImageAlt}
                width={1536}
                height={864}
                className="aspect-[16/9] w-full object-cover"
              />
              <figcaption className="absolute inset-x-4 bottom-4 max-w-md rounded-2xl border border-white/15 bg-[#0a0a0c]/85 p-4 text-start text-white shadow-2xl backdrop-blur-md sm:inset-x-auto sm:start-6 sm:bottom-6 sm:p-5">
                <p className="text-sm font-bold text-[#efd878] sm:text-base">{dict.aboutPage.agenticImageTitle}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:text-sm">{dict.aboutPage.agenticImageBody}</p>
              </figcaption>
            </figure>
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
                    <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
                  href={`/${locale}/contact/`}
                  className={cn(buttonVariants({ size: "lg" }), "group")}
                >
                  {dict.aboutPage.ctaButton}
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
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
