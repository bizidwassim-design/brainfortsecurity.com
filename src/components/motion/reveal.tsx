import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  className?: string;
}

/** Keep important content visible during static rendering and hydration. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  void delay;
  return <div className={className}>{children}</div>;
}
