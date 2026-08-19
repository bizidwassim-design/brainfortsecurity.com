"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Ban,
  CheckCircle2,
  Circle,
  FileClock,
  KeyRound,
  Network,
  Radar,
  RotateCcw,
  SearchCheck,
  Server,
  ShieldAlert,
  ShieldCheck,
  Tags,
  UserCog,
  Users,
  UserSearch,
  Vault,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const stepIcons: LucideIcon[] = [
  ShieldCheck,
  Users,
  Tags,
  Network,
  KeyRound,
  Ban,
  UserCog,
  UserSearch,
  FileClock,
  Server,
  ShieldAlert,
  SearchCheck,
  Vault,
  Radar,
];

const STORAGE_KEY = "bf-posture-checklist";

interface PostureChecklistProps {
  stepLabel: string;
  items: Array<{ title: string; description: string }>;
  simulator: {
    instruction: string;
    scoreTitle: string;
    checkedLabel: string;
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

export function PostureChecklist({
  stepLabel,
  items,
  simulator,
}: PostureChecklistProps) {
  const [checked, setChecked] = useState<boolean[]>(() =>
    items.map(() => false),
  );

  // Restore saved progress after hydration (server always renders unchecked,
  // so state must be applied post-mount rather than in the initializer).
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const saved: unknown = JSON.parse(raw);
        if (Array.isArray(saved)) {
          setChecked(items.map((_, i) => saved[i] === true));
        }
      } catch {
        /* corrupted storage — start fresh */
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [items]);

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = prev.map((v, i) => (i === index ? !v : v));
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  };

  const reset = () => {
    setChecked(items.map(() => false));
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* storage unavailable */
    }
  };

  const done = useMemo(() => checked.filter(Boolean).length, [checked]);
  const score = Math.round((done / items.length) * 100);
  const bandIndex = bandFor(score);
  const band = simulator.bands[bandIndex];
  const bandColor = GAUGE_BANDS[bandIndex].color;
  const anyChecked = done > 0;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
      <ol className="grid gap-5 md:grid-cols-2">
        {items.map((item, index) => {
          const Icon = stepIcons[index] ?? ShieldCheck;
          const isOn = checked[index];
          return (
            <li key={item.title}>
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-pressed={isOn}
                className={cn(
                  "glass card-lift h-full w-full rounded-2xl p-6 text-start transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isOn && "border border-primary/60 bg-primary/5",
                )}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-xl border transition-colors",
                      isOn
                        ? "border-primary bg-primary/15"
                        : "border-primary/25 bg-primary/5",
                    )}
                  >
                    <Icon
                      className="neon-icon size-6 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {stepLabel} {index + 1}
                      </span>
                      {isOn ? (
                        <CheckCircle2
                          className="size-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                      ) : (
                        <Circle
                          className="size-5 shrink-0 text-muted-foreground/40"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                    <span className="mt-1 block text-base font-semibold text-foreground">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </span>
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Sticky score panel */}
      <aside className="lg:sticky lg:top-36 lg:self-start">
        <div className="glass rounded-3xl p-8 text-center">
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
                  opacity={bandIndex === GAUGE_BANDS.indexOf(segment) ? 1 : 0.45}
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
              <circle cx="100" cy="100" r="3.5" className="fill-background" />
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
              {done}/{items.length}
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

          {/* Range legend */}
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border pt-5 text-start">
            {GAUGE_BANDS.map((segment, i) => (
              <li key={segment.from} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-2.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: segment.color,
                    opacity: bandIndex === i ? 1 : 0.5,
                  }}
                />
                <span
                  className={cn(
                    "text-xs",
                    bandIndex === i
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  <span dir="ltr" className="tabular-nums">
                    {segment.from}–{segment.to === 100 ? 100 : segment.to - 1}
                  </span>{" "}
                  {simulator.bands[i].label}
                </span>
              </li>
            ))}
          </ul>

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
      </aside>
    </div>
  );
}
