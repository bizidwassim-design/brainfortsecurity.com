import type { Metadata } from "next";

import { alternatesFor, getDictionary, type Locale } from "@/i18n";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.termsPage.metaTitle,
    description: dict.termsPage.metaDescription,
    alternates: alternatesFor(locale, "/terms/"),
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          {dict.termsPage.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {dict.termsPage.lastUpdated}
        </p>

        <div className="mt-10 space-y-10">
          {dict.termsPage.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </div>
          ))}

          <p className="leading-relaxed text-muted-foreground">
            {dict.termsPage.contactIntro}{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-primary underline-offset-4 hover:underline"
              dir="ltr"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
