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

  // Office presence: HQ address plus the two regional offices, kept at
  // city-level precision to match what's publicly disclosed elsewhere on
  // the site (no street address is published for Dubai/Riyadh).
  const departments = [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#office-montreal`,
      name: `${siteConfig.name} — Montréal (HQ)`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montréal",
        addressCountry: "CA",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#office-dubai`,
      name: `${siteConfig.name} — Dubai`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#office-riyadh`,
      name: `${siteConfig.name} — Riyadh`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Riyadh",
        addressCountry: "SA",
      },
    },
  ];

  const serviceCatalog = {
    "@type": "OfferCatalog",
    name: dict.catalog.title,
    itemListElement: dict.catalog.categories.map((category) => ({
      "@type": "Service",
      name: category.title,
      description: category.description,
      areaServed: ["CA", "AE", "SA"],
    })),
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icons/icon-512.png`,
    description: dict.meta.description,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montréal",
      addressCountry: "CA",
    },
    department: departments,
    sameAs: [siteConfig.links.linkedin],
    areaServed: ["CA", "AE", "SA"],
    knowsAbout: dict.services.map((service) => service.title),
    hasOfferCatalog: serviceCatalog,
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
