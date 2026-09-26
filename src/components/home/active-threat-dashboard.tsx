"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  Bot,
  ExternalLink,
  Globe2,
  Radio,
  ShieldAlert,
} from "lucide-react";

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

const metricKeys = [
  "activeMaliciousUrls",
  "urlsLast24Hours",
  "recentIocs",
  "commandAndControl",
] as const;
const metricIcons = [Globe2, Activity, ShieldAlert, Bot];

/**
 * Live-ish threat metrics, aggregated only (no malicious URL/IOC is ever
 * rendered). Data comes from public/data/active-threats.json, refreshed by a
 * scheduled GitHub Action that pulls URLhaus + ThreatFox every 30 minutes.
 */
export function ActiveThreatDashboard({ dict }: { dict: Dictionary }) {
  const [data, setData] = useState<ThreatData | null>(null);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    let active = true;
    const load = () =>
      fetch(`/data/active-threats.json?t=${Date.now()}`, { cache: "no-store" })
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
  const maxMalware = Math.max(
    ...(data?.topMalware.map((item) => item.count) ?? [1]),
  );

  return (
    <section
      className="dark-surface relative overflow-hidden py-20 sm:py-28"
      aria-labelledby="active-threats-title"
    >
      <div
        className="grid-pattern absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge className="border-secondary/30 bg-secondary/10 text-secondary">
                <Radio
                  className="me-2 size-3.5 animate-pulse"
                  aria-hidden="true"
                />
                {dict.activeThreats.eyebrow}
              </Badge>
              <h2
                id="active-threats-title"
                className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
              >
                {dict.activeThreats.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {dict.activeThreats.subtitle}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 px-4 py-3 text-xs text-muted-foreground">
              <span
                className={offline ? "text-amber-400" : "text-emerald-400"}
                aria-hidden="true"
              >
                ●
              </span>{" "}
              {data
                ? `${dict.activeThreats.synced} ${new Intl.DateTimeFormat(
                    dict.activeThreats.locale,
                    { dateStyle: "medium", timeStyle: "short" },
                  ).format(new Date(data.updatedAt))}`
                : offline
                  ? dict.activeThreats.unavailable
                  : dict.activeThreats.connecting}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dict.activeThreats.metrics.map((metric, index) => {
            const Icon = metricIcons[index] ?? Activity;
            const value = data ? data.metrics[metricKeys[index]] : null;
            return (
              <div
                key={metric.label}
                className="rounded-2xl border border-border bg-card/40 p-5"
              >
                <Icon
                  className="size-5 text-secondary"
                  aria-hidden="true"
                />
                <p
                  className="mt-5 text-3xl font-extrabold text-foreground"
                  aria-live="polite"
                >
                  {value === null ? "—" : formatter.format(value)}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground/80">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {metric.detail}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-2xl border border-border bg-card/30 p-6">
            <h3 className="font-bold text-foreground">
              {dict.activeThreats.topTitle}
            </h3>
            <div className="mt-6 space-y-4">
              {(data?.topMalware ?? []).map((item) => (
                <div key={item.name}>
                  <div className="mb-1.5 flex justify-between gap-4 text-xs">
                    <span className="text-foreground/70">{item.name}</span>
                    <span className="font-mono text-secondary">
                      {formatter.format(item.count)}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
                      style={{
                        width: `${Math.max(5, (item.count / maxMalware) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card/30 p-6">
            <h3 className="font-bold text-foreground">
              {dict.activeThreats.sourcesTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {dict.activeThreats.sourcesBody}
            </p>
            <div className="mt-5 space-y-2">
              {(data?.sources ?? dict.activeThreats.sources).map((source) => (
                <a
                  key={source.name}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground/70 transition hover:border-secondary/40 hover:text-foreground"
                >
                  {source.name}
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted-foreground/80">
          {dict.activeThreats.disclaimer}
        </p>
      </div>
    </section>
  );
}
