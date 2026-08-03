/**
 * English dictionary — the canonical shape (`Dictionary` = typeof en).
 * All user-facing copy lives in dictionaries so locales stay in sync.
 */
export const en = {
  meta: {
    title: "BrainFort Security — Canadian Cybersecurity Consulting",
    description:
      "Canadian cybersecurity consulting firm headquartered in Montréal, serving clients across Canada and the Middle East — identity security, Zero Trust, Microsoft security, cloud security, and AI-powered security automation.",
  },
  a11y: {
    skipToContent: "Skip to main content",
  },
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    cta: "Book a Consultation",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    languageLabel: "Language",
  },
  hero: {
    badge: "Building Trust. Securing Tomorrow.",
    title: "Fortify Your Business Against Modern Cyber Threats",
    highlight: "Modern Cyber Threats",
    subtitle:
      "BrainFort Security helps organizations across Canada and the Middle East assess, architect, and automate their security posture — from identity and Zero Trust to cloud and AI-powered defense.",
    primaryCta: "Get a Security Assessment",
    secondaryCta: "Explore Services",
    highlights: [
      "Zero Trust Ready",
      "Identity-First Security",
      "AI-Powered Assessments",
    ],
  },
  servicesOverview: {
    eyebrow: "What We Do",
    title: "Security Services Built for Real-World Risk",
    subtitle:
      "Practical, vendor-aware consulting that hardens your environment without slowing your business down.",
    viewAll: "View All Services",
  },
  why: {
    eyebrow: "Why BrainFort",
    title: "A Partner That Thinks Like an Attacker, Plans Like an Architect",
    items: [
      {
        title: "Senior-Level Expertise",
        description:
          "Every engagement is led by senior consultants with deep Microsoft, cloud, and identity security experience — no junior hand-offs.",
      },
      {
        title: "AI-Powered Efficiency",
        description:
          "We use AI-driven tooling to accelerate assessments and surface risks faster, so you get insight in days, not months.",
      },
      {
        title: "Actionable Roadmaps",
        description:
          "Findings come with prioritized, budget-aware remediation plans your team can actually execute.",
      },
      {
        title: "Canada–Middle East Reach",
        description:
          "Proudly Canadian and headquartered in Montréal, with an active presence in the UAE and Saudi Arabia — we bridge North American security rigor with Gulf-region momentum.",
      },
    ],
  },
  stats: {
    eyebrow: "Impact That Compounds",
    title: "Security Outcomes You Can Measure",
    items: [
      { value: "20+", label: "Years of combined security expertise" },
      {
        value: "95%",
        label: "Of breaches start with identity — we start there too",
      },
      { value: "4x", label: "Faster assessments with AI-assisted analysis" },
      { value: "3", label: "Regions served — Canada, UAE, Saudi Arabia" },
    ],
  },
  industries: {
    eyebrow: "Who We Serve",
    title: "Trusted Across Regulated and High-Risk Industries",
    subtitle:
      "From Montréal to Dubai and Riyadh — from the plant floor to the boardroom — we tailor security programs to the way your industry actually operates.",
    items: [
      {
        title: "Small & Medium Business",
        description: "Enterprise-grade security scaled to SMB budgets and teams.",
      },
      {
        title: "Manufacturing",
        description: "Protecting OT, IT, and supply chains from disruption.",
      },
      {
        title: "Healthcare",
        description: "Safeguarding patient data and clinical continuity.",
      },
      {
        title: "Finance",
        description: "Meeting regulatory expectations while staying agile.",
      },
      {
        title: "Municipalities",
        description: "Defending public services and citizen trust.",
      },
    ],
  },
  offices: {
    eyebrow: "Where We Are",
    title: "Three Sites. One Standard of Security.",
    subtitle:
      "A Canadian headquarters with an active presence in the Gulf — collaboration across time zones, delivery without borders.",
    items: [
      {
        flag: "ca",
        city: "Montréal",
        label: "Montréal, Canada",
        sublabel: "Headquarters",
      },
      {
        flag: "ae",
        city: "Dubai",
        label: "United Arab Emirates",
        sublabel: "Regional office",
      },
      {
        flag: "sa",
        city: "Riyadh",
        label: "Saudi Arabia",
        sublabel: "Regional office",
      },
    ],
  },
  compliance: {
    eyebrow: "Standards Alignment",
    title: "Aligned with National Cybersecurity Frameworks",
    subtitle:
      "Our methodologies map to the guidance of the national cybersecurity authorities in the regions we serve.",
    disclaimer:
      "Independent alignment with published frameworks — not an endorsement, certification, or affiliation.",
    items: [
      {
        name: "Canadian Centre for Cyber Security (CCCS)",
        country: "Canada",
        href: "https://www.cyber.gc.ca/en/",
      },
      {
        name: "Cyber Security Council",
        country: "United Arab Emirates",
        href: "https://csc.gov.ae/",
      },
      {
        name: "National Cybersecurity Authority (NCA — ECC)",
        country: "Saudi Arabia",
        href: "https://nca.gov.sa/en/",
      },
    ],
  },
  clients: {
    eyebrow: "Client Trust",
    title: "Trusted by Leading Organizations",
    subtitle:
      "We protect the operations of companies that feed and supply thousands every day.",
  },
  testimonials: {
    eyebrow: "Client Voices",
    title: "What Our Clients Say",
    subtitle: "Real outcomes from organizations we help protect.",
    items: [
      {
        quote:
          "BrainFort's identity assessment gave us a clear, prioritized roadmap. Within a quarter we closed our most critical gaps.",
        author: "IT Director",
        company: "Manufacturing Client",
      },
      {
        quote:
          "They translated complex security findings into language our executive team could act on immediately.",
        author: "CIO",
        company: "Healthcare Client",
      },
      {
        quote:
          "The Zero Trust roadmap was pragmatic and staged — no rip-and-replace, just steady measurable progress.",
        author: "Security Lead",
        company: "Municipal Client",
      },
    ],
  },
  contactCta: {
    title: "Ready to Strengthen Your Security Posture?",
    subtitle:
      "Book a no-obligation consultation and get a clear picture of where you stand — and where to go next.",
    button: "Contact Us Today",
  },
  services: [
    {
      id: "identity-assessment",
      title: "Identity Assessment",
      description:
        "Deep-dive review of your identity infrastructure — accounts, privileges, MFA coverage, and conditional access — to close the number-one attack vector.",
      outcomes: [
        "Privileged access and MFA gap analysis",
        "Conditional Access policy review",
        "Prioritized identity hardening roadmap",
      ],
    },
    {
      id: "zero-trust-architecture",
      title: "Zero Trust Architecture",
      description:
        "Pragmatic Zero Trust strategy and design — verify explicitly, use least privilege, and assume breach — staged to fit your budget and operations.",
      outcomes: [
        "Zero Trust maturity assessment",
        "Reference architecture and target state",
        "Phased adoption roadmap",
      ],
    },
    {
      id: "microsoft-365-security",
      title: "Microsoft 365 Security",
      description:
        "Harden Exchange Online, SharePoint, Teams, and Defender for Office 365 against phishing, data leakage, and account takeover.",
      outcomes: [
        "Secure Score improvement plan",
        "Threat protection policy tuning",
        "Data loss prevention baseline",
      ],
    },
    {
      id: "entra-id-security",
      title: "Entra ID Security",
      description:
        "Specialized review of Microsoft Entra ID — app registrations, workload identities, PIM, and hybrid sync — to eliminate silent privilege risks.",
      outcomes: [
        "App and consent risk review",
        "Privileged Identity Management design",
        "Hybrid identity hardening plan",
      ],
    },
    {
      id: "cloud-security-assessment",
      title: "Cloud Security Assessment",
      description:
        "Configuration and architecture review across Azure and multi-cloud estates — posture, network, encryption, and governance.",
      outcomes: [
        "Cloud posture and misconfiguration report",
        "Landing zone and governance review",
        "Cost-aware remediation plan",
      ],
    },
    {
      id: "cybersecurity-audit",
      title: "Cybersecurity Audit",
      description:
        "Holistic audit of controls, policies, and practices mapped to recognized frameworks — a clear baseline for boards, insurers, and regulators.",
      outcomes: [
        "Framework-mapped control assessment",
        "Executive-ready risk report",
        "Compliance readiness gap list",
      ],
    },
    {
      id: "ai-security-advisory",
      title: "AI Security Advisory",
      description:
        "Adopt AI safely and defend with it — governance for AI use in your business, plus AI-powered automation for your security operations.",
      outcomes: [
        "AI usage risk and governance framework",
        "Security automation opportunity map",
        "Copilot and LLM deployment guardrails",
      ],
    },
    {
      id: "vulnerability-assessment",
      title: "Vulnerability Assessment",
      description:
        "Systematic discovery and risk-ranking of vulnerabilities across your infrastructure, endpoints, and applications.",
      outcomes: [
        "Internal and external vulnerability scans",
        "Risk-ranked findings with context",
        "Patch and mitigation prioritization",
      ],
    },
    {
      id: "penetration-test-preparation",
      title: "Penetration Test Preparation",
      description:
        "Get maximum value from your next pentest — scope it correctly, fix the obvious first, and turn results into lasting improvements.",
      outcomes: [
        "Pre-test hardening sprint",
        "Scoping and vendor selection guidance",
        "Post-test remediation planning",
      ],
    },
    {
      id: "security-architecture-review",
      title: "Security Architecture Review",
      description:
        "Independent review of your security architecture — segmentation, defense in depth, monitoring coverage, and resilience by design.",
      outcomes: [
        "Architecture strengths and gaps analysis",
        "Defense-in-depth improvement plan",
        "Monitoring and detection coverage map",
      ],
    },
  ],
  servicesPage: {
    metaTitle: "Cybersecurity Services",
    metaDescription:
      "Identity assessments, Zero Trust architecture, Microsoft 365 and Entra ID security, cloud security, vulnerability management, and AI security advisory for Canada and the Middle East.",
    eyebrow: "Our Services",
    title: "Cybersecurity Services That Move the Needle",
    subtitle:
      "Focused engagements with clear deliverables — assessments, architecture, and advisory that reduce real risk.",
    outcomesLabel: "What you get",
    process: {
      eyebrow: "How We Work",
      title: "A Proven Engagement Process",
      steps: [
        {
          title: "Discover",
          description:
            "We map your environment, business context, and threat profile.",
        },
        {
          title: "Assess",
          description:
            "AI-assisted analysis identifies gaps, misconfigurations, and exposure.",
        },
        {
          title: "Roadmap",
          description:
            "You receive a prioritized, budget-aware remediation plan.",
        },
        {
          title: "Elevate",
          description:
            "We support execution, validate progress, and measure improvement.",
        },
      ],
    },
  },
  aboutPage: {
    metaTitle: "About Us",
    metaDescription:
      "BrainFort Security Inc. is a Canadian cybersecurity consulting firm helping organizations across Canada and the Middle East build resilient, modern security programs.",
    eyebrow: "About BrainFort",
    title: "Security Expertise, Engineered for Canadian Business",
    intro:
      "BrainFort Security Inc. is a Canadian cybersecurity consulting firm founded on a simple conviction: strong security should accelerate a business, not slow it down.",
    missionTitle: "Our Mission",
    mission:
      "To make enterprise-grade cybersecurity accessible and actionable for organizations of every size — combining senior expertise with AI-powered efficiency.",
    valuesTitle: "What We Stand For",
    values: [
      {
        title: "Clarity Over Complexity",
        description:
          "We translate technical risk into decisions executives can make with confidence.",
      },
      {
        title: "Evidence-Based Security",
        description:
          "Recommendations grounded in your real environment and real threat data — never generic checklists.",
      },
      {
        title: "Partnership, Not Dependency",
        description:
          "We build your team's capability so security maturity outlives the engagement.",
      },
      {
        title: "Relentless Curiosity",
        description:
          "The threat landscape evolves daily. So do we — from attacker techniques to AI defense.",
      },
    ],
    approachTitle: "Our Approach",
    approach:
      "We start with identity — the modern security perimeter — and expand across endpoints, cloud, data, and operations. Every engagement pairs deep technical assessment with pragmatic, staged roadmaps aligned to your budget and risk appetite. We are Microsoft-security specialists and cloud-native practitioners, and we use AI automation to deliver in days what traditional consultancies deliver in months. With teams collaborating across Montréal, the UAE, and Saudi Arabia, we bring Canadian rigor and Middle East market insight to every engagement.",
    ctaTitle: "Let's Build Your Security Roadmap",
    ctaButton: "Talk to Us",
  },
  contactPage: {
    metaTitle: "Contact",
    metaDescription:
      "Get in touch with BrainFort Security for cybersecurity assessments, Zero Trust architecture, and Microsoft security consulting in Canada and the Middle East.",
    eyebrow: "Contact",
    title: "Let's Talk Security",
    subtitle:
      "Tell us about your environment and goals. We respond within one business day.",
    infoTitle: "Prefer email?",
    infoSubtitle: "Reach us directly and we'll take it from there.",
    departmentsTitle: "Reach the Right Team",
    departments: [
      { key: "sales", label: "Sales & new business" },
      { key: "support", label: "Technical support" },
      { key: "audit", label: "Audits & assessments" },
      { key: "careers", label: "Careers" },
      { key: "privacy", label: "Privacy requests" },
    ],
    phoneTitle: "Phone",
    officesTitle: "Our Offices",
    locationTitle: "Location",
    location:
      "Headquartered in Montréal, Canada — serving clients across Canada, the UAE, and Saudi Arabia.",
    form: {
      name: "Full Name",
      namePlaceholder: "Jane Doe",
      company: "Company",
      companyPlaceholder: "Acme Inc.",
      email: "Business Email",
      emailPlaceholder: "jane@company.com",
      phone: "Phone (optional)",
      phonePlaceholder: "+1 (555) 000-0000",
      message: "How can we help?",
      messagePlaceholder:
        "Tell us about your security goals, current challenges, or the assessment you're considering…",
      submit: "Send Message",
      submitting: "Sending…",
      success:
        "Thank you — your message has been sent. We'll get back to you within one business day.",
      error:
        "Something went wrong sending your message. Please try again or email us directly.",
      notConfigured:
        "The contact form is not connected yet. Please email us directly at",
      requiredHint: "Required fields are marked with *",
    },
  },
  footer: {
    tagline:
      "Cybersecurity consulting across Canada and the Middle East — identity, Zero Trust, Microsoft security, cloud, and AI-powered defense.",
    servicesTitle: "Services",
    companyTitle: "Company",
    legalTitle: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    careers: "Careers",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    back: "Back to Home",
  },
  privacyPage: {
    metaTitle: "Privacy Policy",
    metaDescription:
      "Privacy Policy for BrainFort Security Inc. — how we collect, use, and protect your personal information.",
    title: "Privacy Policy",
    lastUpdated: "Last updated: August 2, 2026",
    contactIntro: "Questions about this policy? Reach us at",
    sections: [
      {
        title: "1. Introduction",
        body: "BrainFort Security Inc. (“BrainFort”, “we”, “us”) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard personal information when you visit brainfortsecurity.com or engage our services. We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation, including Quebec's Law 25.",
      },
      {
        title: "2. Information We Collect",
        body: "We collect the contact information you provide through our contact form — name, company, email address, phone number, and message content — as well as technical information collected automatically by our hosting provider for security and performance, such as IP address, browser type, and pages visited.",
      },
      {
        title: "3. How We Use Your Information",
        body: "We use your information to respond to inquiries and provide requested services, to improve our website and service offerings, and to meet legal and regulatory obligations. We do not sell, rent, or trade your personal information to third parties.",
      },
      {
        title: "4. Data Retention",
        body: "We retain personal information only as long as necessary to fulfill the purposes for which it was collected, or as required by law. Contact form submissions are retained for the duration of our business relationship or until you request deletion.",
      },
      {
        title: "5. Data Security",
        body: "As a cybersecurity firm, we apply industry best practices to protect your data, including encryption in transit, access controls, and minimal data collection by design.",
      },
      {
        title: "6. Your Rights",
        body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us at the email address below.",
      },
      {
        title: "7. Third-Party Services",
        body: "Our website is hosted on Cloudflare Pages. Form submissions may be processed by a third-party form service. These providers process data on our behalf under their own privacy safeguards.",
      },
      {
        title: "8. Changes to This Policy",
        body: "We may update this policy from time to time. Material changes will be reflected by an updated “Last updated” date on this page.",
      },
    ],
  },
  termsPage: {
    metaTitle: "Terms of Use",
    metaDescription: "Terms of Use for the BrainFort Security website.",
    title: "Terms of Use",
    lastUpdated: "Last updated: August 2, 2026",
    contactIntro: "Questions about these terms? Contact us at",
    sections: [
      {
        title: "1. Acceptance of Terms",
        body: "By accessing brainfortsecurity.com, you agree to these Terms of Use. If you do not agree, please do not use this website. The site is operated by BrainFort Security Inc., a company incorporated in Canada.",
      },
      {
        title: "2. Use of Content",
        body: "All content on this website — text, graphics, logos, and design — is the property of BrainFort Security Inc. and is protected by Canadian and international copyright law. You may view and print content for personal or internal business use; any other reproduction or distribution requires our prior written consent.",
      },
      {
        title: "3. No Professional Advice",
        body: "Website content is provided for general information only and does not constitute professional security, legal, or compliance advice. Engagements are governed by separate written agreements.",
      },
      {
        title: "4. Disclaimer of Warranties",
        body: "This website is provided “as is” without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.",
      },
      {
        title: "5. Limitation of Liability",
        body: "To the maximum extent permitted by law, BrainFort Security Inc. shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.",
      },
      {
        title: "6. External Links",
        body: "This site may link to third-party websites. We are not responsible for their content or privacy practices.",
      },
      {
        title: "7. Governing Law",
        body: "These terms are governed by the laws of the Province of Quebec and the federal laws of Canada applicable therein.",
      },
    ],
  },
};
