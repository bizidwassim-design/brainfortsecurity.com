import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  FileKey2,
  FileText,
  Globe,
  Lock,
  Mail,
  ShieldCheck,
  Server,
  Database,
  Bug,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { getDictionary, type Locale } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const pillarIcons = [Lock, ShieldCheck, Mail, Server, Database, Bug];

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
    "/trust/",
    dict.trustPage.metaTitle,
    dict.trustPage.metaDescription,
  );
}

export default async function TrustPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <section className="hero-glow py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Badge>{dict.trustPage.eyebrow}</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {dict.trustPage.title}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {dict.trustPage.intro}
              </p>
              <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="size-4 text-primary" aria-hidden="true" />
                {dict.trustPage.verifyNote}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-label={dict.trustPage.eyebrow}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dict.trustPage.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? ShieldCheck;
              return (
                <Reveal key={pillar.title} delay={(index % 3) * 0.08}>
                  <div className="glass h-full rounded-2xl p-6">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h2 className="mb-3 text-base font-semibold text-foreground">
                      {pillar.title}
                    </h2>
                    <ul className="space-y-2">
                      {pillar.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="glass mx-auto mt-12 max-w-2xl rounded-2xl p-8 text-center">
              <h2 className="text-lg font-semibold text-foreground">
                {dict.trustPage.contactTitle}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {dict.trustPage.contactBody}
              </p>
              <p className="mt-4">
                <a
                  href={`mailto:${siteConfig.emails.audit}`}
                  className="text-base font-semibold text-primary underline-offset-4 hover:underline"
                  dir="ltr"
                >
                  {siteConfig.emails.audit}
                </a>
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-sm">
                <a
                  href="/pgp-key.txt"
                  className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:underline"
                >
                  <FileKey2
                    className="size-4 text-primary"
                    aria-hidden="true"
                  />
                  {dict.disclosurePage.pgpNote}
                </a>
                <a
                  href="/.well-known/security.txt"
                  className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:underline"
                >
                  <FileText
                    className="size-4 text-primary"
                    aria-hidden="true"
                  />
                  security.txt
                </a>
                <Link
                  href={`/${locale}/disclosure/`}
                  className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:underline"
                >
                  <Bug className="size-4 text-primary" aria-hidden="true" />
                  {dict.footer.disclosure}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
