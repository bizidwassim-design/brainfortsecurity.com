import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StructuredData } from "@/components/seo/structured-data";
import {
  alternatesFor,
  getDictionary,
  isLocale,
  localeDirection,
  localeOg,
  locales,
  type Locale,
} from "@/i18n";
import { siteConfig } from "@/lib/site";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* Cairo: fixed weights (not the variable font) — reliable Arabic shaping
   across browsers. */
const arabicFont = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.meta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.description,
    keywords: [
      "cybersecurity consulting",
      "Canada",
      "Middle East",
      "UAE",
      "Saudi Arabia",
      "Zero Trust",
      "identity security",
      "Microsoft 365 security",
      "Entra ID",
      "cloud security",
      "vulnerability assessment",
      "AI security",
      "security architecture",
    ],
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    alternates: alternatesFor(locale, "/"),
    openGraph: {
      type: "website",
      locale: localeOg[locale],
      url: `${siteConfig.url}/${locale}/`,
      siteName: siteConfig.name,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <html
      lang={typedLocale}
      dir={localeDirection[typedLocale]}
      className={`${geistSans.variable} ${geistMono.variable} ${arabicFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          {dict.a11y.skipToContent}
        </a>
        <StructuredData locale={typedLocale} />
        <Header locale={typedLocale} dict={dict} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={typedLocale} dict={dict} />
      </body>
    </html>
  );
}
