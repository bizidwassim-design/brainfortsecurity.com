import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { alternatesFor, getDictionary, type Locale } from "@/i18n";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.contactPage.metaTitle,
    description: dict.contactPage.metaDescription,
    alternates: alternatesFor(locale, "/contact/"),
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <section className="hero-glow py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <Badge>{dict.contactPage.eyebrow}</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {dict.contactPage.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {dict.contactPage.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <div className="glass rounded-3xl p-6 sm:p-10">
              <ContactForm dict={dict.contactPage.form} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mb-1 text-base font-semibold text-foreground">
                  {dict.contactPage.infoTitle}
                </h2>
                <p className="mb-3 text-sm text-muted-foreground">
                  {dict.contactPage.infoSubtitle}
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  dir="ltr"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mb-1 text-base font-semibold text-foreground">
                  {dict.contactPage.phoneTitle}
                </h2>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  dir="ltr"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="glass rounded-2xl p-6">
                <h2 className="mb-4 text-base font-semibold text-foreground">
                  {dict.contactPage.officesTitle}
                </h2>
                <ul className="space-y-4">
                  {dict.offices.items.map((office) => (
                    <li key={office.flag} className="flex items-center gap-3">
                      <Image
                        src={`/flags/${office.flag}.svg`}
                        alt=""
                        width={40}
                        height={26}
                        className="h-6 w-auto rounded-sm border border-border"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {office.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {office.sublabel}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
