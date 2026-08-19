"use client";

import { useEffect, useRef, useState } from "react";
import {
  ClipboardCheck,
  Cloud,
  Compass,
  Crosshair,
  GraduationCap,
  Handshake,
  KeyRound,
  LifeBuoy,
  Radar,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const categoryIcons: Record<string, LucideIcon> = {
  governance: Compass,
  audits: ClipboardCheck,
  offensive: Crosshair,
  protection: ShieldCheck,
  identity: KeyRound,
  resilience: LifeBuoy,
  training: GraduationCap,
  thirdparty: Handshake,
  cloud: Cloud,
  intel: Radar,
};

interface CategoryNavProps {
  ariaLabel: string;
  categories: Array<{ id: string; title: string; count: number }>;
}

export function CategoryNav({ ariaLabel, categories }: CategoryNavProps) {
  const [active, setActive] = useState<string | null>(null);
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Scrollspy: highlight the category currently in view.
  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  // Keep the active chip visible inside the horizontal strip.
  useEffect(() => {
    if (!active) return;
    chipRefs.current[active]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [active]);

  const scrollTo = (id: string) => (event: React.MouseEvent) => {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    setActive(id);
    el.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      aria-label={ariaLabel}
      className="glass sticky top-16 z-40 border-y border-border"
    >
      <div className="edge-fade-x scrollbar-none mx-auto max-w-7xl overflow-x-auto px-6 py-3 lg:px-10">
        <ul className="flex items-center gap-2 whitespace-nowrap">
          {categories.map((category) => {
            const Icon = categoryIcons[category.id] ?? ShieldCheck;
            const isActive = active === category.id;
            return (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  ref={(el) => {
                    chipRefs.current[category.id] = el;
                  }}
                  onClick={scrollTo(category.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_0_18px_rgba(212,175,55,0.35)]"
                      : "border-border/70 bg-card/40 text-muted-foreground hover:border-primary/50 hover:text-foreground",
                  )}
                >
                  <Icon
                    className={cn(
                      "size-3.5 shrink-0 transition-colors",
                      isActive
                        ? "text-primary-foreground"
                        : "text-primary group-hover:text-primary",
                    )}
                    aria-hidden="true"
                  />
                  {category.title}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[0.65rem] font-bold leading-none transition-colors",
                      isActive
                        ? "bg-black/20 text-primary-foreground"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    {category.count}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
