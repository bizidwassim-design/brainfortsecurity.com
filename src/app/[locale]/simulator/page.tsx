import type { Metadata } from "next";

import { Reveal } from "@/components/motion/reveal";
import { CostSimulator } from "@/components/simulator/cost-simulator";
import { Badge } from "@/components/ui/badge";
import { alternatesFor, getDictionary, type Locale } from "@/i18n";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.simulatorPage.metaTitle,
    description: dict.simulatorPage.metaDescription,
    alternates: alternatesFor(locale, "/simulator/"),
    // Deliberately discreet: reachable only via the free-guide link.
    robots: { index: false, follow: false },
  };
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
              dict={{
                inputsTitle: t.inputsTitle,
                inputs: t.inputs,
                monthLabel: t.monthLabel,
                prepaidLabel: t.prepaidLabel,
                perYear: t.perYear,
                essentialBilling: t.essentialBilling,
                monthlyBilling: t.monthlyBilling,
                disclaimer: t.disclaimer,
                cta: t.cta,
              }}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
