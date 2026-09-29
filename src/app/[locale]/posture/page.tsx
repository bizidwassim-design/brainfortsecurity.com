import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { InsuranceSimulator } from "@/components/guide/insurance-simulator";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary, type Locale } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

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
    "/posture/",
    dict.posturePage.metaTitle,
    dict.posturePage.metaDescription,
  );
}

export default async function PosturePage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const page = dict.posturePage;

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Badge>{page.eyebrow}</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {page.title}
              </h1>
              <span
                aria-hidden="true"
                className="mx-auto block h-1 w-12 rounded-full bg-primary"
              />
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {page.intro}
              </p>
              <p className="mx-auto flex max-w-2xl items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-medium text-foreground shadow-sm">
                <ShieldCheck
                  className="size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {page.simulator.instruction}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-24" aria-label={page.eyebrow}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <InsuranceSimulator
              categories={dict.guidePage.categories}
              simulator={page.simulator}
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-labelledby="posture-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-sm sm:px-16">
              <h2
                id="posture-cta"
                className="text-2xl font-bold text-foreground sm:text-3xl"
              >
                {page.ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {page.ctaBody}
              </p>
              <div className="mt-6">
                <Link
                  href={`/${locale}/contact/`}
                  className={cn(buttonVariants({ size: "lg" }), "group")}
                >
                  {page.ctaButton}
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </Reveal>

          <p className="mt-8 text-center">
            <Link
              href={`/${locale}/simulator/`}
              className="rounded text-xs text-muted-foreground/70 underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {page.costLink} →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
