"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { buttonVariants } from "@/components/ui/button";
import {
  locales,
  localeNames,
  type Dictionary,
  type Locale,
} from "@/i18n";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: `/${locale}/`, label: dict.nav.home, exact: true },
    { href: `/${locale}/services/`, label: dict.nav.services, exact: false },
    { href: `/${locale}/about/`, label: dict.nav.about, exact: false },
    { href: `/${locale}/contact/`, label: dict.nav.contact, exact: false },
  ];

  const isActive = (href: string, exact: boolean) =>
    exact
      ? pathname === href || pathname === href.replace(/\/$/, "")
      : pathname.startsWith(href.replace(/\/$/, ""));

  /** Current path with the locale prefix stripped, for the switcher. */
  const restPath = pathname.replace(/^\/(en|fr|ar)(?=\/|$)/, "") || "/";

  const switcher = (
    <nav aria-label={dict.nav.languageLabel}>
      <ul className="flex items-center gap-0.5 rounded-lg border border-border p-0.5">
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={`/${l}${restPath}`}
              lang={l}
              aria-label={localeNames[l]}
              aria-current={l === locale ? "true" : undefined}
              className={cn(
                "block rounded-md px-2 py-1 text-xs font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                l === locale
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <header className="glass sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo locale={locale} />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={
                    isActive(item.href, item.exact) ? "page" : undefined
                  }
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive(item.href, item.exact)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {switcher}
          <Link
            href={`/${locale}/contact/`}
            className={cn(buttonVariants({ size: "sm" }))}
          >
            {dict.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
          className="flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-border lg:hidden"
        >
          <ul className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={
                    isActive(item.href, item.exact) ? "page" : undefined
                  }
                  className={cn(
                    "block rounded-lg px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive(item.href, item.exact)
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={`/${locale}/contact/`}
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {dict.nav.cta}
              </Link>
            </li>
            <li className="flex justify-center pt-3">{switcher}</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
