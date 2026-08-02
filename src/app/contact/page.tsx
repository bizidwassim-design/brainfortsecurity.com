import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { getDictionary } from "@/i18n";
import { siteConfig } from "@/lib/site";

const dict = getDictionary();

export const metadata: Metadata = {
  title: dict.contactPage.metaTitle,
  description: dict.contactPage.metaDescription,
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
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
              <ContactForm />
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
                  className="text-sm font-semibold text-secondary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
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
                  className="text-sm font-semibold text-secondary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <MapPin className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mb-1 text-base font-semibold text-foreground">
                  {dict.contactPage.locationTitle}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {dict.contactPage.location}
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
