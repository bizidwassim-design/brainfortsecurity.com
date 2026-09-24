import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { CostSimulator } from "@/components/simulator/cost-simulator";
import { Badge } from "@/components/ui/badge";
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
    "/simulator/",
    dict.simulatorPage.metaTitle,
    dict.simulatorPage.metaDescription,
  );
}

export default async function SimulatorPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.simulatorPage;

  return (
    <>
      <section className="hero-glow py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Badge>{t.eyebrow}</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {t.title}
              </h1>
              <span
                aria-hidden="true"
                className="mx-auto block h-1 w-12 rounded-full bg-primary"
              />
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t.intro}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20" aria-label={t.hourly.eyebrow}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge>{t.hourly.eyebrow}</Badge>
              <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                {t.hourly.title}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                {t.hourly.intro}
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
              {t.hourly.tiers.map((tier, index) => (
                <div
                  key={tier.hours}
                  className={cn(
                    "glass card-lift relative flex flex-col items-center rounded-2xl p-7 text-center",
                    index === 1 && "border border-primary/50",
                  )}
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    <span
                      className="gold-text text-2xl font-extrabold tabular-nums"
                      dir="ltr"
                    >
                      {tier.hours}
                    </span>{" "}
                    {t.hourly.unitLabel}
                  </p>
                  <p className="mt-4">
                    <span
                      className="text-4xl font-extrabold tabular-nums text-foreground"
                      dir="ltr"
                    >
                      ${tier.rate}
                    </span>
                    <span className="ms-1 text-sm text-muted-foreground">
                      {t.hourly.rateSuffix}
                    </span>
                  </p>
                  <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                    {tier.note}
                  </p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-center text-xs italic text-muted-foreground">
              {t.hourly.footnote}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-label={t.eyebrow}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <CostSimulator
              locale={locale}
              packages={dict.packagesPage.packages.map((pkg) => ({
                name: pkg.name,
                recommended: pkg.recommended,
              }))}
              recommendedBadge={dict.packagesPage.recommendedBadge}
              dict={t}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
