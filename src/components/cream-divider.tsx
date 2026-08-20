/**
 * Flyer-style cream transition band between dark sections — the light
 * constellation panel from the printed brochure, used as a separator.
 */
export function CreamDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative h-16 overflow-hidden border-y border-[#ddd4c2] bg-[#ece7dc] sm:h-20"
    >
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#d9d0ba" strokeWidth="1.2" fill="none">
          <path d="M-40 90 L140 62 L320 20 L520 84 L710 38 L900 74 L1080 18 L1260 60" />
          <path d="M140 62 L320 110 M320 20 L180 -10 M520 84 L640 120 M710 38 L760 -12 M900 74 L1010 115 M1080 18 L960 -14" />
          <path d="M140 62 L520 84 M710 38 L1080 18" opacity="0.5" />
        </g>
        <g fill="#d9d0ba">
          <circle cx="140" cy="62" r="7" />
          <circle cx="320" cy="20" r="5" />
          <circle cx="520" cy="84" r="8" />
          <circle cx="710" cy="38" r="5" />
          <circle cx="900" cy="74" r="7" />
          <circle cx="1080" cy="18" r="5" />
        </g>
      </svg>
    </div>
  );
}
