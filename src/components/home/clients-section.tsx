import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";
import { clients } from "@/lib/clients";

interface ClientsSectionProps {
  dict: Dictionary;
}

const SECONDS_PER_LOGO = 4;

/**
 * Client trust carousel: one logo visible at a time, cross-fading on a
 * pure-CSS cycle (see .logo-slide in globals.css). With reduced motion
 * every logo is shown statically instead.
 */
export function ClientsSection({ dict }: ClientsSectionProps) {
  const cycle = clients.length * SECONDS_PER_LOGO;

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
          <ul className="relative mx-auto mt-14 flex h-28 max-w-xl flex-wrap items-center justify-center gap-10 motion-reduce:h-auto">
            {clients.map((client, index) => (
              <li
                key={client.name}
                className="logo-slide absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  animationDuration: `${cycle}s`,
                  animationDelay: `${index * SECONDS_PER_LOGO}s`,
                }}
              >
                <a
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={client.name}
                  className={`block rounded-xl transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    client.lightChip ? "bg-white/95 px-5 py-3" : ""
                  }`}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="h-16 w-auto sm:h-20"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
