import { getDictionary, type Locale } from "@/i18n";
import { siteConfig } from "@/lib/site";

const inLanguage: Record<Locale, string> = {
  en: "en-CA",
  fr: "fr-CA",
  ar: "ar",
};

interface StructuredDataProps {
  locale: Locale;
}

/**
 * Organization + WebSite structured data (schema.org), rendered once per
 * locale layout.
 */
export function StructuredData({ locale }: StructuredDataProps) {
  const dict = getDictionary(locale);

  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/og.png`,
    description: dict.meta.description,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montréal",
      addressCountry: "CA",
    },
    sameAs: [siteConfig.links.linkedin],
    areaServed: ["CA", "AE", "SA"],
    knowsAbout: dict.services.map((service) => service.title),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}/`,
    inLanguage: inLanguage[locale],
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
