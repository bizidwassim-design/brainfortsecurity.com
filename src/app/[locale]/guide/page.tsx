import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gauge } from "lucide-react";

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
    "/guide/",
    dict.guidePage.metaTitle,
    dict.guidePage.metaDescription,
  );
}

export default async function GuidePage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="light-surface">
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Badge className="border-primary/40 bg-primary/10 text-[#7a5f16]">
                {dict.guidePage.eyebrow}
              </Badge>
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
              <p className="mx-auto flex max-w-2xl items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm">
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
            <InsuranceSimulator
              categories={dict.guidePage.categories}
              simulator={dict.guidePage.simulator}
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-labelledby="guide-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-sm sm:px-16">
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

          {/* Deliberately discreet entry point to the cost simulator. */}
          <p className="mt-8 text-center">
            <Link
              href={`/${locale}/simulator/`}
              className="text-xs text-muted-foreground/70 underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              {dict.guidePage.costLink} →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
