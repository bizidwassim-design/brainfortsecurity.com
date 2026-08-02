import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { getDictionary } from "@/i18n";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const dict = getDictionary();

/* lucide-react dropped brand icons, so LinkedIn is inlined. */
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const footerLinkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {dict.footer.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BrainFort Security on LinkedIn"
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={`Email ${siteConfig.name}`}
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer services">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {dict.footer.servicesTitle}
            </h2>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/#${service.id}`}
                    className={footerLinkClass}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {dict.footer.companyTitle}
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className={footerLinkClass}>
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className={footerLinkClass}>
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClass}>
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {dict.footer.legalTitle}
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className={footerLinkClass}>
                  {dict.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className={footerLinkClass}>
                  {dict.footer.terms}
                </Link>
              </li>
            </ul>
            <ul className="mt-6 space-y-2.5">
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.regions.join(" · ")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.legalName}{" "}
            {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
