import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gauge } from "lucide-react";

import { PostureChecklist } from "@/components/guide/posture-checklist";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { alternatesFor, getDictionary, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.guidePage.metaTitle,
    description: dict.guidePage.metaDescription,
    alternates: alternatesFor(locale, "/guide/"),
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <section className="hero-glow py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Badge>{dict.guidePage.eyebrow}</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {dict.guidePage.title}
              </h1>
              <span
                aria-hidden="true"
                className="mx-auto block h-1 w-12 rounded-full bg-primary"
              />
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {dict.guidePage.intro}
              </p>
              <p className="glass mx-auto flex max-w-2xl items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground">
                <Gauge
                  className="size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {dict.guidePage.simulator.instruction}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-24" aria-label={dict.guidePage.eyebrow}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <PostureChecklist
              stepLabel={dict.guidePage.stepLabel}
              items={dict.guidePage.items}
              simulator={dict.guidePage.simulator}
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-labelledby="guide-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="hero-glow glass rounded-3xl px-6 py-14 text-center sm:px-16">
              <h2
                id="guide-cta"
                className="text-2xl font-bold text-foreground sm:text-3xl"
              >
                {dict.guidePage.ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {dict.guidePage.ctaBody}
              </p>
              <div className="mt-6">
                <Link
                  href={`/${locale}/contact/`}
                  className={cn(buttonVariants({ size: "lg" }), "group")}
                >
                  {dict.guidePage.ctaButton}
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
