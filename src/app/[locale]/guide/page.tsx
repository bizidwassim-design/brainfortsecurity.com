import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Ban,
  FileClock,
  KeyRound,
  Network,
  Radar,
  SearchCheck,
  Server,
  ShieldAlert,
  ShieldCheck,
  Tags,
  UserCog,
  Users,
  UserSearch,
  Vault,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { alternatesFor, getDictionary, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

const stepIcons = [
  ShieldCheck,
  Users,
  Tags,
  Network,
  KeyRound,
  Ban,
  UserCog,
  UserSearch,
  FileClock,
  Server,
  ShieldAlert,
  SearchCheck,
  Vault,
  Radar,
];

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
          <ol className="grid gap-6 md:grid-cols-2">
            {dict.guidePage.items.map((item, index) => {
              const Icon = stepIcons[index] ?? ShieldCheck;
              return (
                <Reveal key={item.title} delay={(index % 2) * 0.08}>
                  <li className="glass card-lift h-full rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/5">
                        <Icon
                          className="neon-icon size-6 text-primary"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {dict.guidePage.stepLabel} {index + 1}
                        </p>
                        <h2 className="mt-1 text-base font-semibold text-foreground">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
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
