import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {dict.guidePage.intro}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-24" aria-label={dict.guidePage.eyebrow}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {dict.guidePage.items.map((item, index) => {
              const checkboxId = `guide-check-${index + 1}`;
              const descriptionId = `guide-description-${index + 1}`;

              return (
                <Reveal key={item.title} delay={(index % 2) * 0.04}>
                  <li className="glass card-lift h-full rounded-2xl p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <input
                        id={checkboxId}
                        type="checkbox"
                        aria-describedby={descriptionId}
                        className="mt-1 size-5 shrink-0 cursor-pointer accent-[#d4af37]"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <label
                          htmlFor={checkboxId}
                          className="mt-1 block cursor-pointer text-base font-semibold text-foreground"
                        >
                          {item.title}
                        </label>
                        <p
                          id={descriptionId}
                          className="mt-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
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
