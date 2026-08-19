import { ContactCta } from "@/components/contact-cta";
import { ComplianceSection } from "@/components/home/compliance-section";
import { Hero } from "@/components/home/hero";
import { IndustriesSection } from "@/components/home/industries-section";
import { OfficesSection } from "@/components/home/offices-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhySection } from "@/components/home/why-section";
import { getDictionary, type Locale } from "@/i18n";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <ServicesOverview locale={locale} dict={dict} />
      <WhySection dict={dict} />
      <StatsSection dict={dict} />
      <IndustriesSection dict={dict} />
      <OfficesSection dict={dict} />
      <ComplianceSection dict={dict} />
      <TestimonialsSection dict={dict} />
      <ContactCta locale={locale} dict={dict} />
    </>
  );
}
