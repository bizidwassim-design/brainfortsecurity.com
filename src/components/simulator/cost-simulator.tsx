"use client";

import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Factory,
  HeartHandshake,
  Laptop,
  Minus,
  Network,
  Plus,
  Server,
  Users,
  type LucideIcon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/i18n";
import { cn } from "@/lib/utils";

/** Internal rate card (USD/month). Keep in sync with the sales grid. */
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

type Commitment = "monthly" | "annual" | "twoyear";
const COMMITMENT_DISCOUNT: Record<Commitment, number> = {
  monthly: 1,
  annual: 0.9,
  twoyear: 0.85,
};

interface CostSimulatorProps {
  locale: Locale;
  packages: Array<{ name: string; recommended?: boolean }>;
  recommendedBadge: string;
  dict: Dictionary["simulatorPage"];
  /** mailto CTA instead of the contact page (used inside the mobile app). */
  ctaHref?: string;
}

export function CostSimulator({
  locale,
  packages,
  recommendedBadge,
  dict,
  ctaHref,
}: CostSimulatorProps) {
  const [counts, setCounts] = useState({
    workstations: 0,
    servers: 0,
    network: 0,
    users: 0,
  });
  const [sites, setSites] = useState(1);
  const [ot, setOt] = useState(false);
  const [nonprofit, setNonprofit] = useState(false);
  const [commitment, setCommitment] = useState<Commitment>("monthly");

  const fmt = new Intl.NumberFormat(
    locale === "fr" ? "fr-CA" : locale === "ar" ? "ar" : "en-CA",
  );

  const clamp = (value: number, max = 10000) =>
    Math.max(0, Math.min(max, Math.floor(value) || 0));

  const setCount = (key: keyof typeof counts, value: number) =>
    setCounts((prev) => ({ ...prev, [key]: clamp(value) }));

  // Environment multiplier: +10%/extra site (max +30%), +15% OT, −15% non-profit.
  const multiplier =
    (1 + Math.min(Math.max(sites - 1, 0), 3) * 0.1) *
    (ot ? 1.15 : 1) *
    (nonprofit ? 0.85 : 1);

  const estimates = RATES.map((rate) => {
    const raw =
      rate.base +
      counts.workstations * rate.ws +
      counts.servers * rate.srv +
      counts.network * rate.net +
      counts.users * rate.user;
    const monthly = Math.round(Math.max(raw, rate.min) * multiplier);
    const yearly = Math.round(
      monthly * 12 * COMMITMENT_DISCOUNT[commitment],
    );
    return { id: rate.id, monthly, yearly };
  });

  // Suggested tier from the sales-grid qualification rule.
  const bestFit =
    counts.workstations <= 25 && sites <= 1 && !ot
      ? 0
      : counts.workstations <= 100
        ? 1
        : 2;

  const fields = ["workstations", "servers", "network", "users"] as const;

  const stepper = (
    id: string,
    label: string,
    Icon: LucideIcon,
    value: number,
    onChange: (next: number) => void,
  ) => (
    <div key={id}>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center gap-2 text-sm font-medium text-muted-foreground"
      >
        <Icon className="size-4 text-primary" aria-hidden="true" />
        {label}
      </label>
      <div className="flex items-stretch gap-2" dir="ltr">
        <button
          type="button"
          aria-label="−"
          onClick={() => onChange(value - 1)}
          className="flex w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Minus className="size-4" aria-hidden="true" />
        </button>
        <input
          id={id}
          type="number"
          min={0}
          inputMode="numeric"
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="w-full rounded-xl border border-border bg-card/60 px-4 py-2.5 text-center text-base font-semibold tabular-nums text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          type="button"
          aria-label="+"
          onClick={() => onChange(value + 1)}
          className="flex w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Plus className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[400px_1fr]">
      {/* Asset + options form */}
      <form
        className="glass h-fit space-y-8 rounded-3xl p-7 lg:sticky lg:top-24"
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <h2 className="text-base font-semibold text-foreground">
            {dict.inputsTitle}
          </h2>
          <div className="mt-5 space-y-5">
            {fields.map((key) =>
              stepper(`sim-${key}`, dict.inputs[key], FIELD_ICONS[key], counts[key], (n) =>
                setCount(key, n),
              ),
            )}
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            {dict.optionsTitle}
          </h2>
          <div className="mt-5 space-y-5">
            {stepper("sim-sites", dict.sitesLabel, Building2, sites, (n) =>
              setSites(Math.max(1, Math.min(20, Math.floor(n) || 1))),
            )}
            <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-muted-foreground">
              <input
                type="checkbox"
                checked={ot}
                onChange={(event) => setOt(event.target.checked)}
                className="size-5 accent-[#d4af37]"
              />
              <Factory className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {dict.otLabel}
            </label>
            <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-muted-foreground">
              <input
                type="checkbox"
                checked={nonprofit}
                onChange={(event) => setNonprofit(event.target.checked)}
                className="size-5 accent-[#d4af37]"
              />
              <HeartHandshake
                className="size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              {dict.nonprofitLabel}
            </label>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">
            {dict.commitmentTitle}
          </h2>
          <div className="mt-4 grid gap-2">
            {(
              [
                ["monthly", dict.commitmentMonthly],
                ["annual", dict.commitmentAnnual],
                ["twoyear", dict.commitmentTwoYear],
              ] as Array<[Commitment, string]>
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setCommitment(value)}
                aria-pressed={commitment === value}
                className={cn(
                  "rounded-xl border px-4 py-2.5 text-start text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  commitment === value
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-card/60 text-muted-foreground hover:border-primary/40",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </form>

      {/* Estimates */}
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          {estimates.map((estimate, index) => {
            const pkg = packages[index];
            const isBestFit = index === bestFit;
            return (
              <div
                key={estimate.id}
                className={cn(
                  "glass relative flex h-full flex-col rounded-2xl p-6 transition-shadow duration-500",
                  pkg?.recommended && "border border-primary/40",
                  isBestFit &&
                    "border border-primary shadow-[0_0_24px_rgba(212,175,55,0.25)]",
                )}
              >
                {isBestFit && (
                  <span className="absolute -top-3 start-5 rounded-md border border-primary bg-primary px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-primary-foreground">
                    {dict.bestFitLabel}
                  </span>
                )}
                {!isBestFit && pkg?.recommended && (
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
                  {commitment === "monthly" ? "12 ×" : dict.prepaidLabel}{" "}
                  <span
                    className="font-semibold tabular-nums text-foreground"
                    dir="ltr"
                  >
                    {fmt.format(estimate.yearly)}
                  </span>{" "}
                  {dict.perYear}
                </p>
                <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
                  {index === 0 ? (
                    <>
                      {dict.essentialBilling} — {dict.essentialSplitLabel}{" "}
                      <span className="font-semibold tabular-nums" dir="ltr">
                        {fmt.format(Math.round(estimate.yearly / 2))}
                      </span>
                    </>
                  ) : (
                    dict.monthlyBilling
                  )}
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

        <a
          href={ctaHref ?? `/${locale}/contact/`}
          className={cn(buttonVariants({ size: "lg" }), "group")}
        >
          {dict.cta}
          <ArrowRight
            className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
