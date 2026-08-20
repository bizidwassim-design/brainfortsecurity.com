import type { Metadata, Viewport } from "next";
import { Cairo, Geist } from "next/font/google";

import {
  defaultLocale,
  localeDirection,
  locales,
  type Locale,
} from "@/i18n";

import "../../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-arabic",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = { themeColor: "#0a0a0c" };

export const metadata: Metadata = {
  // Companion screen for the Android app only — never indexed.
  robots: { index: false, follow: false },
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function AppLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  const locale: Locale = locales.includes(raw as Locale)
    ? (raw as Locale)
    : defaultLocale;

  return (
    <html lang={locale} dir={localeDirection[locale]}>
      <body
        className={`${geist.variable} ${cairo.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
