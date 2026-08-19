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
  const band = simulator.bands[bandFor(score)];
  const anyChecked = done > 0;

  // Ring geometry: r=54 → circumference ≈ 339.3
  const CIRCUMFERENCE = 2 * Math.PI * 54;

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

          <div className="relative mx-auto mt-6 size-44">
            <svg viewBox="0 0 120 120" className="size-full -rotate-90">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                strokeWidth="9"
                className="stroke-border"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                strokeWidth="9"
                strokeLinecap="round"
                stroke="url(#posture-gold)"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE * (1 - score / 100)}
                className="transition-[stroke-dashoffset] duration-700 ease-out"
              />
              <defs>
                <linearGradient
                  id="posture-gold"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#f1d68a" />
                  <stop offset="55%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#9a7a1f" />
                </linearGradient>
              </defs>
            </svg>
            <p
              aria-live="polite"
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <span className="gold-text text-5xl font-extrabold tabular-nums tracking-tight">
                {score}
              </span>
              <span className="text-xs font-semibold text-muted-foreground">
                / 100
              </span>
            </p>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-semibold tabular-nums text-foreground">
              {done}/{items.length}
            </span>{" "}
            {simulator.checkedLabel}
          </p>

          <p className="gold-text mt-5 text-lg font-bold">{band.label}</p>
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
      </aside>
    </div>
  );
}
