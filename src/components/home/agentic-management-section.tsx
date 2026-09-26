import Link from "next/link";
import { ArrowRight, Eye, Lightbulb, Settings2 } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/i18n";
import { cn } from "@/lib/utils";

const icons = [Eye, Lightbulb, Settings2];

export function AgenticManagementSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.agenticPage;
  return (
    <section className="dark-surface relative overflow-hidden py-20 sm:py-28" aria-labelledby="agentic-management">
      <div className="aurora opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading id="agentic-management" eyebrow={t.eyebrow} title={t.homeTitle} subtitle={t.homeIntro} /></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.capabilities.map((item, index) => {
            const Icon = icons[index] ?? Eye;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.045] p-6">
                  <Icon className="size-6 text-[#efd878]" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{item.description}</p>
                  <p className="mt-5 border-t border-white/10 pt-4 text-xs font-semibold uppercase tracking-wide text-[#efd878]">{item.control}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-primary/20 bg-primary/10 p-6 sm:flex-row">
            <p className="max-w-3xl text-sm leading-relaxed text-white/70">{t.authorizationNote}</p>
            <Link href={`/${locale}/agentic-security/`} className={cn(buttonVariants({ size: "lg" }), "group shrink-0")}>{t.learnMore}<ArrowRight className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
