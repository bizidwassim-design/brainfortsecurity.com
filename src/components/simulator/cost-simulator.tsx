"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Laptop,
  Network,
  Server,
  Users,
  type LucideIcon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/i18n";
import { cn } from "@/lib/utils";

/** Internal rate card (CAD/month). Keep in sync with the sales grid. */
const RATES = [
  { id: "essential", base: 450, ws: 6, srv: 25, net: 10, user: 2, min: 600 },
  { id: "advanced", base: 950, ws: 12, srv: 45, net: 18, user: 4, min: 1500 },
  { id: "elite", base: 2800, ws: 18, srv: 70, net: 28, user: 6, min: 4500 },
] as const;

const FIELD_ICONS: Record<string, LucideIcon> = {
  workstations: Laptop,
  servers: Server,
  network: Network,
  users: Users,
};

interface CostSimulatorProps {
  locale: Locale;
  packages: Array<{ name: string; recommended?: boolean }>;
  recommendedBadge: string;
  dict: {
    inputsTitle: string;
    inputs: {
      workstations: string;
      servers: string;
      network: string;
      users: string;
    };
    monthLabel: string;
    prepaidLabel: string;
    perYear: string;
    essentialBilling: string;
    monthlyBilling: string;
    taxNote: string;
    disclaimer: string;
    cta: string;
  };
}

export function CostSimulator({
  locale,
  packages,
  recommendedBadge,
  dict,
}: CostSimulatorProps) {
  const [counts, setCounts] = useState({
    workstations: 10,
    servers: 1,
    network: 2,
    users: 10,
  });

  const fmt = new Intl.NumberFormat(
    locale === "fr" ? "fr-CA" : locale === "ar" ? "ar" : "en-CA",
  );

  const setCount = (key: keyof typeof counts) => (value: string) => {
    const n = Math.max(0, Math.min(10000, Math.floor(Number(value) || 0)));
    setCounts((prev) => ({ ...prev, [key]: n }));
  };

  const estimates = RATES.map((rate) => {
    const raw =
      rate.base +
      counts.workstations * rate.ws +
      counts.servers * rate.srv +
      counts.network * rate.net +
      counts.users * rate.user;
    const monthly = Math.max(raw, rate.min);
    return { id: rate.id, monthly, prepaidYear: Math.round(monthly * 12 * 0.9) };
  });

  const fields = ["workstations", "servers", "network", "users"] as const;

  return (
    <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
      {/* Asset form */}
      <form
        className="glass h-fit rounded-3xl p-8 lg:sticky lg:top-36"
        onSubmit={(event) => event.preventDefault()}
      >
        <h2 className="text-base font-semibold text-foreground">
          {dict.inputsTitle}
        </h2>
        <div className="mt-6 space-y-5">
          {fields.map((key) => {
            const Icon = FIELD_ICONS[key];
            return (
              <div key={key}>
                <label
                  htmlFor={`sim-${key}`}
                  className="mb-1.5 flex items-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                  {dict.inputs[key]}
                </label>
                <input
                  id={`sim-${key}`}
                  type="number"
                  min={0}
                  max={10000}
                  inputMode="numeric"
                  value={counts[key]}
                  onChange={(event) => setCount(key)(event.target.value)}
                  className="w-full rounded-xl border border-border bg-card/60 px-4 py-2.5 text-base font-semibold tabular-nums text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  dir="ltr"
                />
              </div>
            );
          })}
        </div>
      </form>

      {/* Estimates */}
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          {estimates.map((estimate, index) => {
            const pkg = packages[index];
            return (
              <div
                key={estimate.id}
                className={cn(
                  "glass relative flex h-full flex-col rounded-2xl p-6",
                  pkg?.recommended && "border border-primary/50",
                )}
              >
                {pkg?.recommended && (
                  <span className="absolute -top-3 start-5 rounded-md border border-primary bg-background px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-primary">
                    {recommendedBadge}
                  </span>
                )}
                <p
                  aria-hidden="true"
                  className="gold-text text-2xl font-extrabold tabular-nums leading-none"
                >
                  {`0${index + 1}`}
                </p>
                <h3 className="mt-2 text-base font-extrabold uppercase tracking-tight text-foreground">
                  {pkg?.name}
                </h3>
                <p className="mt-4">
                  <span
                    className="gold-text text-3xl font-extrabold tabular-nums"
                    dir="ltr"
                  >
                    {fmt.format(estimate.monthly)}
                  </span>
                  <span className="ms-1.5 text-xs text-muted-foreground">
                    {dict.monthLabel}
                  </span>
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {dict.prepaidLabel}{" "}
                  <span className="font-semibold tabular-nums text-foreground" dir="ltr">
                    {fmt.format(estimate.prepaidYear)}
                  </span>{" "}
                  {dict.perYear}
                </p>
                <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
                  {index === 0 ? dict.essentialBilling : dict.monthlyBilling}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-xs font-semibold text-muted-foreground">
          {dict.taxNote}
        </p>
        <p className="text-xs italic leading-relaxed text-muted-foreground">
          {dict.disclaimer}
        </p>

        <Link
          href={`/${locale}/contact/`}
          className={cn(buttonVariants({ size: "lg" }), "group")}
        >
          {dict.cta}
          <ArrowRight
            className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
