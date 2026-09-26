"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Subtle gold halo that follows the pointer within its parent (the hero
 * section). Skipped entirely under prefers-reduced-motion.
 */
export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const parent = ref.current?.parentElement;
    if (!parent) return;

    const handleMove = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      setPos({
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100,
      });
    };

    parent.addEventListener("pointermove", handleMove);
    return () => parent.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden transition-opacity duration-500 sm:block"
      style={{
        opacity: pos ? 1 : 0,
        background: pos
          ? `radial-gradient(480px circle at ${pos.x}% ${pos.y}%, rgba(212,175,55,0.14), transparent 65%)`
          : undefined,
      }}
    />
  );
}
