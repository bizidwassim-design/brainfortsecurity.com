import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";
import { clients } from "@/lib/clients";

interface ClientsSectionProps {
  dict: Dictionary;
}

function LogoRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-20 px-10"
      aria-hidden={hidden || undefined}
    >
      {clients.map((client) => (
        <li key={client.name} className="shrink-0">
          <a
            href={client.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={client.name}
            tabIndex={hidden ? -1 : undefined}
            className={`block rounded-xl opacity-90 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              client.lightChip ? "bg-white/95 px-4 py-2" : ""
            }`}
          >
            <Image
              src={client.src}
              alt={hidden ? "" : client.name}
              width={client.width}
              height={client.height}
              className="h-14 w-auto sm:h-16"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * Dynamic client catalog: an auto-scrolling marquee fed by
 * `src/lib/clients.ts` — drop a logo file in public/clients/ and add one
 * entry there to extend it. Pauses on hover/focus; static when the user
 * prefers reduced motion.
 */
export function ClientsSection({ dict }: ClientsSectionProps) {
  return (
    <section
      className="border-y border-border bg-card/30 py-20 sm:py-28"
      aria-labelledby="clients"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="clients"
            eyebrow={dict.clients.eyebrow}
            title={dict.clients.title}
            subtitle={dict.clients.subtitle}
            badgeVariant="secondary"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="marquee relative mt-14 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="marquee-track flex w-max">
              <LogoRow />
              <LogoRow hidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
