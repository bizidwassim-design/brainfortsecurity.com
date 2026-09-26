import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";

interface AgenticArchitectureProps {
  dict: Dictionary;
}

const CENTER = { x: 460, y: 310 };
const RADIUS = 215;
const NODE_COUNT = 7;

/** Node type → which minimal glyph to draw (no third-party logos, generic shapes only). */
const NODE_KIND: Array<"cloud" | "grid" | "layers" | "pulse" | "check"> = [
  "cloud",
  "cloud",
  "grid",
  "layers",
  "layers",
  "pulse",
  "check",
];

function nodePosition(index: number) {
  const angle = ((-90 + index * (360 / NODE_COUNT)) * Math.PI) / 180;
  return {
    x: CENTER.x + RADIUS * Math.cos(angle),
    y: CENTER.y + RADIUS * Math.sin(angle),
  };
}

function NodeIcon({ kind, x, y }: { kind: string; x: number; y: number }) {
  const stroke = "#d4af37";
  const common = {
    stroke,
    strokeWidth: 1.6,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (kind) {
    case "cloud":
      return (
        <path
          d={`M ${x - 13} ${y + 5} a 6 6 0 0 1 1 -11.9 a 8 8 0 0 1 15.4 -2.4 a 6.5 6.5 0 0 1 -1.4 14.3 z`}
          {...common}
        />
      );
    case "grid":
      return (
        <g {...common}>
          <rect x={x - 12} y={y - 12} width="9.5" height="9.5" rx="1.5" />
          <rect x={x + 2.5} y={y - 12} width="9.5" height="9.5" rx="1.5" />
          <rect x={x - 12} y={y + 2.5} width="9.5" height="9.5" rx="1.5" />
          <rect x={x + 2.5} y={y + 2.5} width="9.5" height="9.5" rx="1.5" />
        </g>
      );
    case "layers":
      return (
        <g {...common}>
          <rect x={x - 13} y={y - 11} width="26" height="8" rx="1.5" />
          <rect x={x - 13} y={y + 0.5} width="26" height="8" rx="1.5" />
          <rect x={x - 13} y={y + 12} width="26" height="8" rx="1.5" />
        </g>
      );
    case "pulse":
      return (
        <path
          d={`M ${x - 14} ${y} h 6 l 3 -8 l 5 16 l 4 -8 h 6`}
          {...common}
        />
      );
    case "check":
      return (
        <g {...common}>
          <path d={`M ${x} ${y - 13} l 11 4 v 8 c 0 7 -5 11 -11 13 c -6 -2 -11 -6 -11 -13 v -8 z`} />
          <path d={`M ${x - 5} ${y} l 3.5 3.5 l 7 -7`} />
        </g>
      );
    default:
      return null;
  }
}

export function AgenticArchitecture({ dict }: AgenticArchitectureProps) {
  const t = dict.architecture;
  const nodes = t.nodes.map((label, i) => ({
    label,
    kind: NODE_KIND[i],
    pos: nodePosition(i),
  }));

  return (
    <section
      className="border-y border-border bg-card/30 py-20 sm:py-28"
      aria-labelledby="agentic-architecture"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="agentic-architecture"
            eyebrow={t.eyebrow}
            title={t.title}
            subtitle={t.subtitle}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass mx-auto mt-12 max-w-4xl rounded-3xl p-4 sm:p-8" dir="ltr">
            <svg viewBox="0 0 920 600" className="w-full" role="img" aria-label={t.subtitle}>
              {/* Connectors + MCP labels */}
              {nodes.map((node) => {
                const midX = (CENTER.x + node.pos.x) / 2;
                const midY = (CENTER.y + node.pos.y) / 2;
                return (
                  <g key={`line-${node.label}`}>
                    <line
                      x1={CENTER.x}
                      y1={CENTER.y}
                      x2={node.pos.x}
                      y2={node.pos.y}
                      stroke="rgba(212,175,55,0.32)"
                      strokeWidth="1.5"
                    />
                    <rect
                      x={midX - 20}
                      y={midY - 10}
                      width="40"
                      height="20"
                      rx="10"
                      fill="#ffffff"
                      stroke="rgba(212,175,55,0.5)"
                      strokeWidth="1"
                    />
                    <text
                      x={midX}
                      y={midY + 4}
                      textAnchor="middle"
                      fontSize="9.5"
                      fontWeight="700"
                      letterSpacing="0.05em"
                      fill="#7a5f16"
                    >
                      {t.mcpLabel}
                    </text>
                  </g>
                );
              })}

              {/* Outer platform nodes */}
              {nodes.map((node) => (
                <g key={node.label}>
                  <rect
                    x={node.pos.x - 78}
                    y={node.pos.y - 34}
                    width="156"
                    height="68"
                    rx="14"
                    fill="#ffffff"
                    stroke="rgba(212,175,55,0.4)"
                    strokeWidth="1.3"
                  />
                  <NodeIcon kind={node.kind} x={node.pos.x - 50} y={node.pos.y} />
                  <text
                    x={node.pos.x + 4}
                    y={node.pos.y + 4}
                    textAnchor="middle"
                    fontSize="12.5"
                    fontWeight="600"
                    fill="#1c1712"
                  >
                    {node.label}
                  </text>
                </g>
              ))}

              {/* Center hub */}
              <circle
                cx={CENTER.x}
                cy={CENTER.y}
                r="82"
                fill="url(#hubGlow)"
                stroke="#d4af37"
                strokeWidth="2"
              />
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#fbeec7" />
                  <stop offset="100%" stopColor="#f3e6bd" />
                </radialGradient>
              </defs>
              <text
                x={CENTER.x}
                y={CENTER.y - 6}
                textAnchor="middle"
                fontSize="16"
                fontWeight="800"
                fill="#7a5f16"
              >
                {t.hubLine1}
              </text>
              <text
                x={CENTER.x}
                y={CENTER.y + 16}
                textAnchor="middle"
                fontSize="16"
                fontWeight="800"
                fill="#7a5f16"
              >
                {t.hubLine2}
              </text>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
