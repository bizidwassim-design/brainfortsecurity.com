import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/i18n";
import { cn } from "@/lib/utils";

interface ContactCtaProps {
  locale: Locale;
  dict: Dictionary;
}

export function ContactCta({ locale, dict }: ContactCtaProps) {
  return (
    <section className="pb-20 sm:pb-28" aria-labelledby="contact-cta">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="hero-glow glass relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-16">
            <h2
              id="contact-cta"
              className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {dict.contactCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {dict.contactCta.subtitle}
            </p>
            <div className="mt-8">
              <Link
                href={`/${locale}/contact/`}
                className={cn(buttonVariants({ size: "lg" }), "group")}
              >
                {dict.contactCta.button}
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
  );
}
