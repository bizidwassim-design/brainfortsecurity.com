import { cn } from "@/lib/utils";

interface BrandMarkFrProps {
  className?: string;
}

/**
 * French-market shield mark — castle-crowned shield holding a fleur-de-lys
 * (left) and a blue circuit-brain (right). SVG recreation of the official
 * "BrAInFort Sécurité Inc." logo, recolored light-on-dark for this site;
 * the faithful navy-on-light original lives in `public/logo-fr.svg`.
 */
export function BrandMarkFr({ className }: BrandMarkFrProps) {
  return (
    <svg
      viewBox="0 0 64 72"
      role="img"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id="bf-circuit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {/* Castle-crowned shield: merlons flanking a central gate tower */}
      <path
        d="M6 40 V6 H15 V12 H23 V6 H28 V12 A4 4 0 0 1 36 12 V6 H41 V12 H49 V6 H58 V40 C58 54 46 63.5 32 69 C18 63.5 6 54 6 40 Z"
        fill="rgba(226,232,240,0.05)"
        stroke="#e2e8f0"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Center divider */}
      <path d="M32 18 V62" stroke="#e2e8f0" strokeWidth="1.4" />
      {/* Fleur-de-lys (left) */}
      <path
        d="M23 20 c-2.6 4.6 -4.2 7.6 -4.2 10.6 c0 2.6 1.8 4.4 4.2 5.2 c2.4 -.8 4.2 -2.6 4.2 -5.2 c0 -3 -1.6 -6 -4.2 -10.6 Z"
        fill="#e2e8f0"
      />
      <path
        d="M16.5 30.5 c-2.8 1.4 -3.4 5.4 -.8 7 c1.8 1.1 3.8 .2 4.5 -1.5 M29.5 30.5 c2.8 1.4 3.4 5.4 .8 7 c-1.8 1.1 -3.8 .2 -4.5 -1.5"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M18.5 40 H27.5" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M23 42 c-1.4 2.6 -2.6 4.4 -4.2 5.6 M23 42 c1.4 2.6 2.6 4.4 4.2 5.6 M23 42 V49"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Circuit brain (right) */}
      <path
        d="M38 22 c4 -1.5 7.5 1 7 4.5 c3 1 3.5 4.5 1.5 6.5 c1.5 2.5 .5 5.5 -2 6.5 c0 3 -3 5 -6 4 M38 22 c-1.5 .5 -2.5 2 -2.5 3.5 M40 30 h4 M38 36 h5 M40 43 h3"
        fill="none"
        stroke="url(#bf-circuit)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="30" r="1.8" fill="none" stroke="url(#bf-circuit)" strokeWidth="1.6" />
      <circle cx="45" cy="36" r="1.8" fill="none" stroke="url(#bf-circuit)" strokeWidth="1.6" />
      <circle cx="45" cy="43" r="1.8" fill="none" stroke="url(#bf-circuit)" strokeWidth="1.6" />
      <circle cx="38" cy="49" r="1.8" fill="none" stroke="url(#bf-circuit)" strokeWidth="1.6" />
      <path
        d="M38 47.5 c-1 -1.5 -1.5 -3 -1.5 -4.5"
        fill="none"
        stroke="url(#bf-circuit)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
