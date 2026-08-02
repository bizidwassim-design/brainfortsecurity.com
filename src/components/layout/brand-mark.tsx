import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
}

/**
 * BrainFort shield mark — crenellated fort shield holding a circuit-brain
 * (gold, left) and a maple leaf (red, right) around a central keyhole.
 * SVG recreation of the official logo; replace alongside `public/logo.svg`
 * if the brand team ships updated vector assets.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 72"
      role="img"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id="bf-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f1d68a" />
          <stop offset="0.55" stopColor="#d4af37" />
          <stop offset="1" stopColor="#9a7a1f" />
        </linearGradient>
      </defs>
      {/* Crenellated shield outline */}
      <path
        d="M6 40 V4 H16 V10 H26 V4 H38 V10 H48 V4 H58 V40 C58 54 46 63.5 32 69 C18 63.5 6 54 6 40 Z"
        fill="rgba(212,175,55,0.06)"
        stroke="url(#bf-gold)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Brain hemisphere (left, gold) */}
      <path
        d="M28 20 c-5 -1 -9 2 -9 6 c-3 1 -4 4 -2.5 6.5 c-2 2.5 -1 6 1.5 7 c0 3.5 3.5 6 7 5 M21.5 27.5 c2 -.5 3.5 .5 4 2 M20 34 c2.5 -.5 4.5 1 5 3"
        fill="none"
        stroke="url(#bf-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Maple leaf (right, red) */}
      <path
        d="M42 18 l1.8 3.4 2.6 -1.2 -0.6 3.4 3.4 0.4 -2.4 2.6 1.8 3 -3.4 -0.4 -0.4 3.4 -2.8 -2.6 -2.8 2.6 -0.4 -3.4 -3.4 0.4 1.8 -3 -2.4 -2.6 3.4 -0.4 -0.6 -3.4 2.6 1.2 Z"
        fill="#e3342f"
      />
      {/* Circuit traces under the leaf */}
      <path
        d="M42 32 v9 M37.5 34 v6 M46.5 34 v6"
        stroke="#e3342f"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="37.5" cy="41.5" r="1.4" fill="#e3342f" />
      <circle cx="46.5" cy="41.5" r="1.4" fill="#e3342f" />
      <circle cx="42" cy="43" r="1.4" fill="#e3342f" />
      {/* Keyhole */}
      <circle
        cx="32"
        cy="47"
        r="4"
        fill="none"
        stroke="url(#bf-gold)"
        strokeWidth="2.4"
      />
      <path
        d="M32 51 l-2.4 8.5 h4.8 Z"
        fill="url(#bf-gold)"
      />
    </svg>
  );
}
