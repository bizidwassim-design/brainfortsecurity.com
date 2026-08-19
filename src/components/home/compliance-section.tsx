import { ExternalLink, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";

interface ComplianceSectionProps {
  dict: Dictionary;
}

/**
 * Text-only regulatory alignment strip. Deliberately no official logos:
 * government insignia are protected and logo use would imply endorsement.
 */
export function ComplianceSection({ dict }: ComplianceSectionProps) {
  return (
    <section className="editorial-light py-20 sm:py-28" aria-labelledby="compliance">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="compliance"
            eyebrow={dict.compliance.eyebrow}
            title={dict.compliance.title}
            subtitle={dict.compliance.subtitle}
          />
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {dict.compliance.items.map((item, index) => (
            <Reveal key={item.href} delay={index * 0.08}>
              <li className="glass card-lift h-full rounded-2xl p-6 text-center">
                <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {item.name}
                  <ExternalLink
                    className="size-3.5 shrink-0 text-muted-foreground"
                    aria-hidden="true"
                  />
                </a>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.country}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
            {dict.compliance.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
