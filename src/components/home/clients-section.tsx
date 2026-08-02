import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary } from "@/i18n";
import { clients } from "@/lib/clients";

interface ClientsSectionProps {
  dict: Dictionary;
}

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

        <ul className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {clients.map((client, index) => (
            <Reveal key={client.name} delay={index * 0.08}>
              <li>
                <a
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={client.name}
                  className="block rounded-lg opacity-70 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="h-12 w-auto brightness-0 invert sm:h-14"
                  />
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
