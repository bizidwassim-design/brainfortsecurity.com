import type { Metadata } from "next";
import { FileKey2, FileText } from "lucide-react";

import { getDictionary, type Locale } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return pageMetadata(
    locale,
    "/disclosure/",
    dict.disclosurePage.metaTitle,
    dict.disclosurePage.metaDescription,
  );
}

export default async function DisclosurePage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          {dict.disclosurePage.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {dict.disclosurePage.lastUpdated}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {dict.disclosurePage.intro}
        </p>

        <div className="glass mt-8 rounded-2xl p-6">
          <p className="text-sm text-muted-foreground">
            {dict.disclosurePage.contactIntro}
          </p>
          <p className="mt-2">
            <a
              href={`mailto:${siteConfig.emails.audit}`}
              className="text-base font-semibold text-primary underline-offset-4 hover:underline"
              dir="ltr"
            >
              {siteConfig.emails.audit}
            </a>
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a
              href="/pgp-key.txt"
              className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:underline"
            >
              <FileKey2 className="size-4 text-primary" aria-hidden="true" />
              {dict.disclosurePage.pgpNote}
            </a>
            <a
              href="/.well-known/security.txt"
              className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:underline"
            >
              <FileText className="size-4 text-primary" aria-hidden="true" />
              {dict.disclosurePage.securityTxtNote}
            </a>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {dict.disclosurePage.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
