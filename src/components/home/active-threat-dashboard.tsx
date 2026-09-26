"use client";

import { useEffect, useState } from "react";
import { Activity, Bot, ExternalLink, Globe2, Radio, ShieldAlert } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/i18n";

interface ThreatData {
  updatedAt: string;
  metrics: {
    activeMaliciousUrls: number;
    urlsLast24Hours: number;
    recentIocs: number;
    commandAndControl: number;
  };
  topMalware: { name: string; count: number }[];
  sources: { name: string; href: string }[];
}

const metricKeys = ["activeMaliciousUrls", "urlsLast24Hours", "recentIocs", "commandAndControl"] as const;
const metricIcons = [Globe2, Activity, ShieldAlert, Bot];

export function ActiveThreatDashboard({ dict }: { dict: Dictionary }) {
  const [data, setData] = useState<ThreatData | null>(null);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    let active = true;
    const load = () => fetch(`/data/active-threats.json?t=${Date.now()}`, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Threat feed unavailable");
        return response.json() as Promise<ThreatData>;
      })
      .then((payload) => {
        if (active) {
          setData(payload);
          setOffline(false);
        }
      })
      .catch(() => active && setOffline(true));
    load();
    const timer = window.setInterval(load, 5 * 60 * 1000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  const formatter = new Intl.NumberFormat(dict.activeThreats.locale);
  const maxMalware = Math.max(...(data?.topMalware.map((item) => item.count) ?? [1]));

  return (
    <section className="relative overflow-hidden bg-[#08090b] py-20 text-white sm:py-28" aria-labelledby="active-threats-title">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge className="border-red-400/25 bg-red-500/10 text-red-300"><Radio className="me-2 size-3.5 animate-pulse" />{dict.activeThreats.eyebrow}</Badge>
              <h2 id="active-threats-title" className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{dict.activeThreats.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">{dict.activeThreats.subtitle}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/55">
              <span className={offline ? "text-amber-300" : "text-emerald-300"}>●</span>{" "}
              {data ? `${dict.activeThreats.synced} ${new Intl.DateTimeFormat(dict.activeThreats.locale, { dateStyle: "medium", timeStyle: "short" }).format(new Date(data.updatedAt))}` : offline ? dict.activeThreats.unavailable : dict.activeThreats.connecting}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dict.activeThreats.metrics.map((metric, index) => {
            const Icon = metricIcons[index] ?? Activity;
            const value = data ? data.metrics[metricKeys[index]] : null;
            return (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <Icon className="size-5 text-red-300" aria-hidden="true" />
                <p className="mt-5 text-3xl font-extrabold text-white" aria-live="polite">{value === null ? "—" : formatter.format(value)}</p>
                <p className="mt-2 text-sm font-semibold text-white/80">{metric.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/40">{metric.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <h3 className="font-bold">{dict.activeThreats.topTitle}</h3>
            <div className="mt-6 space-y-4">
              {(data?.topMalware ?? []).map((item) => (
                <div key={item.name}>
                  <div className="mb-1.5 flex justify-between gap-4 text-xs"><span className="text-white/70">{item.name}</span><span className="font-mono text-red-300">{formatter.format(item.count)}</span></div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-red-500 to-amber-400" style={{ width: `${Math.max(5, (item.count / maxMalware) * 100)}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <h3 className="font-bold">{dict.activeThreats.sourcesTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/45">{dict.activeThreats.sourcesBody}</p>
            <div className="mt-5 space-y-2">
              {(data?.sources ?? dict.activeThreats.sources).map((source) => (
                <a key={source.name} href={source.href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-white/70 transition hover:border-red-400/30 hover:text-white">
                  {source.name}<ExternalLink className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-white/35">{dict.activeThreats.disclaimer}</p>
      </div>
    </section>
  );
}
