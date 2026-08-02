export const siteConfig = {
  name: "BrainFort Security",
  legalName: "BrainFort Security Inc.",
  tagline: "Building Trust. Securing Tomorrow.",
  url: "https://brainfortsecurity.com",
  description:
    "Canadian cybersecurity consulting firm headquartered in Montréal, serving clients across Canada and the Middle East — identity security, Zero Trust, Microsoft security, cloud security, and AI-powered security automation.",
  locale: "en_CA",
  country: "Canada",
  city: "Montréal",
  regions: ["Montréal, Canada", "UAE", "Saudi Arabia"],
  email: "contact@brainfortsecurity.com",
  phone: "+1 514 559 2551",
  phoneHref: "+15145592551",
  links: {
    linkedin: "https://www.linkedin.com/company/brainfort-security",
  },
  ogImage: "/og.png",
} as const;

export type SiteConfig = typeof siteConfig;
