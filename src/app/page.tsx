import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/home/hero";
import { IndustriesSection } from "@/components/home/industries-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhySection } from "@/components/home/why-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhySection />
      <StatsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ContactCta />
    </>
  );
}
