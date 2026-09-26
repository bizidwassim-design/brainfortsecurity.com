import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, LockKeyhole, Network, UserCheck } from "lucide-react";

import { AgenticArchitecture } from "@/components/home/agentic-architecture";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary, type Locale } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface PageProps { params: Promise<{ locale: Locale }>; }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale).agenticPage;
  return pageMetadata(locale, "/agentic-security/", t.metaTitle, t.metaDescription);
}

export default async function AgenticSecurityPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.agenticPage;
  return (
    <>
      <section className="hero-glow py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal><div><Badge>{t.eyebrow}</Badge><h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">{t.title}</h1><p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t.intro}</p><div className="mt-7 flex flex-wrap gap-3"><Link href={`/${locale}/contact/`} className={cn(buttonVariants({ size: "lg" }), "group")}>{t.demoCta}<ArrowRight className="group-hover:translate-x-1 rtl:rotate-180" /></Link><Link href={`/${locale}/simulator/`} className={buttonVariants({ variant: "outline", size: "lg" })}>{t.pricingCta}</Link></div></div></Reveal>
          <Reveal delay={0.1}><Image src="/about/agentic-client.webp" alt={t.imageAlt} width={1536} height={864} priority className="rounded-3xl border border-primary/20 shadow-2xl" /></Reveal>
        </div>
      </section>
      <AgenticArchitecture dict={dict} />
      <section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Reveal><div className="mx-auto max-w-3xl text-center"><Badge>{t.scopeEyebrow}</Badge><h2 className="mt-4 text-3xl font-bold">{t.scopeTitle}</h2></div></Reveal><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{t.scope.map((item) => <div key={item} className="glass flex items-start gap-3 rounded-2xl p-5"><Check className="mt-0.5 size-5 shrink-0 text-[#7a5f16]" /><span className="text-sm font-semibold">{item}</span></div>)}</div></div></section>
      <section className="border-y border-border bg-card/35 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 lg:grid-cols-3">{t.governance.map((item, index) => { const Icon=[Network,LockKeyhole,UserCheck][index] ?? UserCheck; return <div key={item.title} className="glass rounded-2xl p-7"><Icon className="size-6 text-[#7a5f16]" /><h2 className="mt-5 text-xl font-bold">{item.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p></div>; })}</div></div></section>
      <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><Badge>{t.cycleEyebrow}</Badge><h2 className="mt-4 text-3xl font-bold">{t.cycleTitle}</h2><ol className="mt-8 space-y-4">{t.cycle.map((item,index)=><li key={item} className="flex gap-4 rounded-2xl border border-border bg-card p-5"><span className="gold-text font-extrabold">0{index+1}</span><span className="text-sm leading-relaxed">{item}</span></li>)}</ol></div><div className="glass h-fit rounded-3xl p-8"><h2 className="text-2xl font-bold">{t.boundariesTitle}</h2><ul className="mt-6 space-y-4">{t.boundaries.map((item)=><li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><LockKeyhole className="mt-0.5 size-4 shrink-0 text-[#7a5f16]" />{item}</li>)}</ul></div></div></section>
      <section className="pb-20 sm:pb-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="dark-surface rounded-3xl p-8 text-center sm:p-14"><h2 className="text-3xl font-bold">{t.ctaTitle}</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t.ctaBody}</p><Link href={`/${locale}/contact/`} className={cn(buttonVariants({ size: "lg" }), "mt-7")}>{t.demoCta}</Link></div></div></section>
    </>
  );
}
