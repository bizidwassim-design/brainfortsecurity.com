"use client";

import { useMemo, useState } from "react";
import {
  Bug,
  Fingerprint,
  Radar,
  RotateCcw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const categoryIcons: LucideIcon[] = [Fingerprint, Radar, Bug, ShieldCheck];

interface SimCategory {
  id: string;
  title: string;
  description: string;
  items: Array<{ title: string; description: string }>;
}

interface InsuranceSimulatorProps {
  categories: SimCategory[];
  simulator: {
    instruction: string;
    scoreTitle: string;
    checkedLabel: string;
    dashboardTitle: string;
    yesLabel: string;
    noLabel: string;
    reset: string;
    bands: Array<{ label: string; description: string }>;
  };
}

function bandFor(score: number) {
  if (score < 40) return 0;
  if (score < 70) return 1;
  if (score < 90) return 2;
  return 3;
}

/** Gauge bands: [from, to] in %, credit-score-style colors. */
const GAUGE_BANDS: Array<{ from: number; to: number; color: string }> = [
  { from: 0, to: 40, color: "#e11d48" },
  { from: 40, to: 70, color: "#f97316" },
  { from: 70, to: 90, color: "#eab308" },
  { from: 90, to: 100, color: "#22c55e" },
];

/** Point on the semicircle for a 0..1 fraction (left → top → right). */
function gaugePoint(f: number, r: number) {
  const a = Math.PI * f;
  return { x: 100 - r * Math.cos(a), y: 100 - r * Math.sin(a) };
}

function gaugeArc(from: number, to: number, r: number) {
  const p1 = gaugePoint(from, r);
  const p2 = gaugePoint(to, r);
  return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${r} ${r} 0 0 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
}

export function InsuranceSimulator({
  categories,
  simulator,
}: InsuranceSimulatorProps) {
  const [checked, setChecked] = useState<boolean[][]>(() =>
    categories.map((category) => category.items.map(() => false)),
  );

  const setAnswer = (catIndex: number, itemIndex: number, value: boolean) => {
    setChecked((prev) =>
      prev.map((row, ci) =>
        ci === catIndex
          ? row.map((v, ii) => (ii === itemIndex ? value : v))
          : row,
      ),
    );
  };

  const reset = () => {
    setChecked(categories.map((category) => category.items.map(() => false)));
  };

  const totalItems = useMemo(
    () => categories.reduce((sum, c) => sum + c.items.length, 0),
    [categories],
  );
  const totalDone = useMemo(
    () => checked.reduce((sum, row) => sum + row.filter(Boolean).length, 0),
    [checked],
  );
  const score = totalItems ? Math.round((totalDone / totalItems) * 100) : 0;
  const bandIndex = bandFor(score);
  const band = simulator.bands[bandIndex];
  const bandColor = GAUGE_BANDS[bandIndex].color;
  const anyChecked = totalDone > 0;

  const categoryScores = useMemo(
    () =>
      categories.map((category, ci) => {
        const done = checked[ci]?.filter(Boolean).length ?? 0;
        const pct = category.items.length
          ? Math.round((done / category.items.length) * 100)
          : 0;
        return { done, total: category.items.length, pct };
      }),
    [categories, checked],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
      <div className="space-y-14">
        {categories.map((category, ci) => {
          const CategoryIcon = categoryIcons[ci] ?? ShieldCheck;
          return (
            <div key={category.id} id={`cat-${category.id}`} className="scroll-mt-32">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/5">
                  <CategoryIcon
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <ol className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                {category.items.map((item, ii) => {
                  const answer = checked[ci]?.[ii] ?? false;
                  return (
                    <li
                      key={item.title}
                      className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                    >
                      <div className="flex gap-4">
                        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold tabular-nums text-muted-foreground">
                          {ii + 1}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div
                        role="group"
                        aria-label={item.title}
                        className="flex shrink-0 gap-2 ps-11 sm:ps-0"
                      >
                        <button
                          type="button"
                          onClick={() => setAnswer(ci, ii, true)}
                          aria-pressed={answer === true}
                          className={cn(
                            "rounded-lg border px-4 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            answer === true
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground",
                          )}
                        >
                          {simulator.yesLabel}
                        </button>
                        <button
                          type="button"
                          onClick={() => setAnswer(ci, ii, false)}
                          aria-pressed={answer === false}
                          className={cn(
                            "rounded-lg border px-4 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            answer === false
                              ? "border-secondary bg-secondary/10 text-secondary"
                              : "border-border bg-transparent text-muted-foreground hover:border-secondary/40 hover:text-foreground",
                          )}
                        >
                          {simulator.noLabel}
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>

      {/* Sticky score + dashboard panel */}
      <aside className="lg:sticky lg:top-36 lg:self-start">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {simulator.scoreTitle}
          </h2>

          {/* Credit-score-style segmented gauge with needle */}
          <div className="relative mx-auto mt-6 w-full max-w-64" dir="ltr">
            <svg viewBox="0 0 200 112" className="w-full">
              {GAUGE_BANDS.map((segment) => (
                <path
                  key={segment.from}
                  d={gaugeArc(
                    segment.from / 100 + (segment.from === 0 ? 0 : 0.008),
                    segment.to / 100 - (segment.to === 100 ? 0 : 0.008),
                    78,
                  )}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="20"
                  opacity={bandIndex === GAUGE_BANDS.indexOf(segment) ? 1 : 0.35}
                  className="transition-opacity duration-500"
                />
              ))}
              {/* Needle */}
              <g
                style={{
                  transform: `rotate(${(score / 100) * 180 - 90}deg)`,
                  transformOrigin: "100px 100px",
                  transition: "transform 700ms cubic-bezier(.34,1.3,.64,1)",
                }}
              >
                <polygon
                  points="100,38 95.5,100 104.5,100"
                  className="fill-foreground"
                />
              </g>
              <circle cx="100" cy="100" r="8" className="fill-foreground" />
              <circle cx="100" cy="100" r="3.5" className="fill-card" />
              {/* Scale endpoints */}
              <text
                x="22"
                y="111"
                textAnchor="middle"
                className="fill-current text-muted-foreground"
                fontSize="9"
              >
                0
              </text>
              <text
                x="178"
                y="111"
                textAnchor="middle"
                className="fill-current text-muted-foreground"
                fontSize="9"
              >
                100
              </text>
            </svg>
          </div>

          <p aria-live="polite" className="mt-4">
            <span
              className="text-5xl font-extrabold tabular-nums tracking-tight transition-colors duration-500"
              style={{ color: bandColor }}
            >
              {score}
            </span>
            <span className="ms-1 text-sm font-semibold text-muted-foreground">
              / 100
            </span>
          </p>

          <p className="mt-3 text-sm text-muted-foreground">
            <span className="font-semibold tabular-nums text-foreground">
              {totalDone}/{totalItems}
            </span>{" "}
            {simulator.checkedLabel}
          </p>

          <p
            className="mt-5 text-lg font-bold transition-colors duration-500"
            style={{ color: bandColor }}
          >
            {band.label}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {band.description}
          </p>

          {anyChecked && (
            <button
              type="button"
              onClick={reset}
              className="mt-6 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <RotateCcw className="size-3.5" aria-hidden="true" />
              {simulator.reset}
            </button>
          )}
        </div>

        {/* Dashboard: score by domain */}
        <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {simulator.dashboardTitle}
          </h3>
          <ul className="mt-4 space-y-4">
            {categories.map((category, ci) => {
              const CategoryIcon = categoryIcons[ci] ?? ShieldCheck;
              const stat = categoryScores[ci];
              const color = GAUGE_BANDS[bandFor(stat.pct)].color;
              return (
                <li key={category.id}>
                  <a
                    href={`#cat-${category.id}`}
                    className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary">
                        <CategoryIcon
                          className="size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {category.title}
                      </span>
                      <span
                        className="text-xs font-semibold tabular-nums"
                        style={{ color }}
                      >
                        {stat.done}/{stat.total}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${stat.pct}%`, backgroundColor: color }}
                      />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
}
