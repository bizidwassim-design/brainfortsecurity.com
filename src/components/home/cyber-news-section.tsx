"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Bot, Bug, CircleDollarSign, ShieldAlert } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/i18n";

const metricIcons = [CircleDollarSign, ShieldAlert, Bug, Bot];
const feedUrl = "https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json";

interface KevItem {
  vendorProject: string;
  dateAdded: string;
  knownRansomwareCampaignUse?: string;
}

interface KevFeed {
  count: number;
  dateReleased: string;
  vulnerabilities: KevItem[];
}

interface CyberNewsSectionProps {
  dict: Dictionary;
}

export function CyberNewsSection({ dict }: CyberNewsSectionProps) {
  const [feed, setFeed] = useState<KevFeed | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(feedUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Feed unavailable");
        return response.json() as Promise<KevFeed>;
      })
      .then(setFeed)
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  const liveValues = useMemo(() => {
    if (!feed) return null;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 30);
    const recent = feed.vulnerabilities.filter((item) => new Date(`${item.dateAdded}T00:00:00Z`) >= cutoff).length;
    const ransomware = feed.vulnerabilities.filter((item) => item.knownRansomwareCampaignUse === "Known").length;
    const vendors = new Set(feed.vulnerabilities.map((item) => item.vendorProject.trim()).filter(Boolean)).size;
    return [feed.count, recent, ransomware, vendors].map((value) => new Intl.NumberFormat(dict.cyberNews.locale).format(value));
  }, [feed, dict.cyberNews.locale]);

  return (
    <section className="relative overflow-hidden border-y border-border bg-[#111113] py-20 text-white sm:py-28" aria-labelledby="cyber-news-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(164,31,45,0.12),transparent_30%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge className="border-[#d4af37]/30 bg-[#d4af37]/10 text-[#efd878]">{dict.cyberNews.eyebrow}</Badge>
              <h2 id="cyber-news-title" className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{dict.cyberNews.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">{dict.cyberNews.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-white/55">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {feed ? `${dict.cyberNews.updated} ${new Intl.DateTimeFormat(dict.cyberNews.locale, { dateStyle: "medium" }).format(new Date(feed.dateReleased))}` : dict.cyberNews.loading}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dict.cyberNews.items.map((item, index) => {
            const Icon = metricIcons[index] ?? ShieldAlert;
            return (
              <Reveal key={item.value} delay={index * 0.06}>
                <a href={item.href} target="_blank" rel="noreferrer" className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/45 hover:bg-white/[0.075]">
                  <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#efd878]">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight className="size-4 text-white/35 transition group-hover:text-[#efd878] rtl:-scale-x-100" aria-hidden="true" />
                  </div>
                  <p className="mt-8 text-4xl font-extrabold tracking-tight text-[#efd878]" aria-live="polite">{liveValues?.[index] ?? "—"}</p>
                  <h3 className="mt-3 text-base font-semibold text-white">{item.label}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{item.detail}</p>
                  <p className="mt-6 border-t border-white/10 pt-4 text-xs font-semibold uppercase tracking-wider text-white/45">{item.source}</p>
                </a>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-white/40">{dict.cyberNews.disclaimer}</p>
      </div>
    </section>
  );
}
