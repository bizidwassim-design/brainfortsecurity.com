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
    packages: "Packages",
    freeGuide: "Free Guide",
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
    features: [
      {
        title: "Zero Trust Ready",
        description:
          "Implement Zero Trust architecture to minimize risk and strengthen resilience.",
      },
      {
        title: "Identity-First Security",
        description:
          "Secure every identity across your ecosystem with adaptive, intelligent controls.",
      },
      {
        title: "AI-Powered Assessments",
        description:
          "Leverage AI-driven analytics to detect threats faster and respond with precision.",
      },
      {
        title: "Proudly Canadian",
        description:
          "Serving organizations across Canada and the Middle East.",
      },
      {
        title: "Enterprise-Grade Security",
        description:
          "Aligned with industry best practices and global compliance standards.",
      },
      {
        title: "Expert Team",
        description:
          "Certified cybersecurity experts dedicated to your security and success.",
      },
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
  catalog: {
    eyebrow: "Service Catalog",
    title: "The Complete BrainFort Catalog",
    subtitle:
      "Fifty focused services across ten domains — engage one, or let us assemble the program your organization needs.",
    countLabel: "services",
    aiNote:
      "AI-augmented efficiency in every phase — faster assessments, deeper analysis, controlled costs.",
    categories: [
      {
        id: "governance",
        title: "Strategy & Governance",
        description:
          "Set direction, measure risk, and lead security at the executive level.",
        items: [
          "Cybersecurity maturity assessment",
          "Cyber risk analysis and assessment",
          "Cybersecurity roadmap development",
          "Outsourced security leadership — vCISO",
          "Security policies and procedures development",
          "Cybersecurity architecture and strategy",
          "Cybersecurity dashboards and KPIs",
          "Cyber insurance application and renewal support",
          "Client and partner security requirements assessment",
        ],
      },
      {
        id: "audits",
        title: "Technical Audits",
        description:
          "Independent, evidence-based reviews of your critical environments.",
        items: [
          "Cybersecurity audit",
          "Microsoft 365 audit",
          "Active Directory audit",
          "Network infrastructure audit",
          "Firewall and VPN audit",
          "Cloud environments audit",
          "Wi-Fi network audit",
        ],
      },
      {
        id: "offensive",
        title: "Penetration Testing & Vulnerabilities",
        description: "Find and fix weaknesses before attackers do.",
        items: [
          "External penetration testing",
          "Internal penetration testing",
          "One-time vulnerability assessment",
          "Continuous vulnerability management",
          "Security patch management",
          "Applied patch validation",
        ],
      },
      {
        id: "protection",
        title: "Systems & Email Protection",
        description: "Harden the tools your business runs on every day.",
        items: [
          "Antivirus and EDR management",
          "Microsoft 365 hardening",
          "Email security",
          "Phishing protection",
        ],
      },
      {
        id: "identity",
        title: "Identity & Access",
        description: "Control who can access what — everywhere.",
        items: [
          "Identity and access management",
          "Multi-factor authentication deployment",
          "Conditional Access implementation",
          "Privileged account management",
          "Periodic access reviews",
          "Single sign-on (SSO) deployment",
        ],
      },
      {
        id: "resilience",
        title: "Resilience & Continuity",
        description: "Be ready to respond, recover, and keep operating.",
        items: [
          "Incident response plan",
          "Cybersecurity incident preparedness",
          "Crisis simulation exercises",
          "Business continuity plan",
          "Disaster recovery plan",
          "Backup audit and hardening",
          "Backup restoration testing",
        ],
      },
      {
        id: "training",
        title: "Training & Awareness",
        description: "Turn your people into your strongest defense.",
        items: [
          "Employee training and awareness",
          "Phishing simulations",
          "Cybersecurity training for executives",
          "Training for IT administrators",
        ],
      },
      {
        id: "thirdparty",
        title: "Third-Party Risk",
        description: "Manage the risk that comes with every vendor.",
        items: [
          "Vendor risk assessment",
          "Third-party security assessment",
          "Vendor management program development",
        ],
      },
      {
        id: "cloud",
        title: "Cloud & Zero Trust",
        description: "Secure modern infrastructure by design.",
        items: [
          "Azure, AWS and Google Cloud hardening",
          "Zero Trust architecture implementation",
        ],
      },
      {
        id: "intel",
        title: "Threat Intelligence",
        description: "Know what's coming before it reaches you.",
        items: ["Cyber threat monitoring", "Dark web monitoring"],
      },
    ],
  },
  packagesPage: {
    metaTitle: "Cybersecurity Packages",
    metaDescription:
      "Cyber Essential, Cyber Advanced and Cyber Premium — managed cybersecurity packages for SMBs and enterprises: audits, vulnerability management, training, vCISO and more.",
    eyebrow: "B2B Service Packages",
    title: "Cybersecurity Packages",
    subtitle:
      "Solutions for SMBs and enterprises that want to strengthen security, reduce risk, and improve resilience.",
    servicesTitle: "Included services",
    deliverablesTitle: "Deliverables",
    frequencyTitle: "Cadence",
    ctaLabel: "Request a Quote",
    aiNote:
      "AI-augmented efficiency in every phase — faster assessments, deeper analysis, controlled costs.",
    recommendedBadge: "Most Popular",
    comparisonTitle: "Package Comparison",
    excludedNote:
      "Compliance audits, 24/7 SOC, managed SIEM, MDR, emergency incident response, data protection and application security/DevSecOps are not included in these packages.",
    packages: [
      {
        id: "essential",
        name: "Cyber Essential",
        tagline: "Foundational protection",
        audience:
          "For small businesses building a solid security foundation.",
        includesNote: "",
        recommended: false,
        services: [
          "Initial cybersecurity maturity assessment",
          "Inventory of essential IT assets",
          "Priority risk analysis",
          "Microsoft 365 security audit",
          "Administrator accounts review",
          "Multi-factor authentication verification",
          "Conditional Access rules review",
          "External vulnerability scan",
          "Email security audit",
          "Antivirus and EDR configuration review",
          "Backup assessment",
          "Annual phishing simulation",
          "Annual employee awareness training",
          "Essential security policies development",
          "Priority recommendations report",
        ],
        deliverables: [
          "Maturity report",
          "Register of key risks",
          "Prioritized action plan",
          "Essential cybersecurity policies",
          "Awareness report",
          "Annual executive report",
        ],
        frequency: [
          "Full assessment at onboarding",
          "Vulnerability scan every six months",
          "Annual security posture review",
          "Advisory support within included hours",
        ],
      },
      {
        id: "advanced",
        name: "Cyber Advanced",
        tagline: "Strengthened security",
        audience:
          "For growing SMBs that want continuous cybersecurity management.",
        includesNote: "Everything in Cyber Essential, plus:",
        recommended: true,
        services: [
          "Continuous vulnerability management",
          "Quarterly internal and external scans",
          "Active Directory audit",
          "Network infrastructure audit",
          "Firewall and VPN audit",
          "Wi-Fi network audit",
          "Cloud configuration review",
          "Security patch management and tracking",
          "Applied patch validation",
          "Periodic account and access reviews",
          "Privileged accounts review",
          "Microsoft 365 hardening",
          "Antivirus and EDR optimization",
          "Incident response plan",
          "Business continuity plan",
          "Disaster recovery plan",
          "Annual backup restoration test",
          "Quarterly phishing simulations",
          "Annual employee training",
          "Specialized training for administrators",
          "Critical vendor assessment",
          "Quarterly cybersecurity dashboard",
        ],
        deliverables: [
          "Vulnerability dashboard",
          "Quarterly reports",
          "Incident response plan",
          "Continuity and recovery plan",
          "Privileged access register",
          "Critical vendors report",
          "Annual roadmap",
          "Quarterly executive presentation",
        ],
        frequency: [
          "Quarterly vulnerability scans",
          "Access reviews every six months",
          "Quarterly phishing simulations",
          "Quarterly follow-up meeting",
          "Annual update of plans and policies",
        ],
      },
      {
        id: "premium",
        name: "Cyber Premium",
        tagline: "Complete security partnership",
        audience:
          "For organizations with complex environments, multiple sites, or elevated security requirements.",
        includesNote: "Everything in Cyber Advanced, plus:",
        recommended: false,
        services: [
          "Outsourced security leadership — vCISO",
          "Cybersecurity strategy development and oversight",
          "Annual security program management",
          "In-depth risk analysis",
          "Annual external penetration test",
          "Annual internal penetration test",
          "Advanced Active Directory assessment",
          "In-depth Azure, AWS or Google Cloud review",
          "Zero Trust architecture design",
          "Identity and access management program",
          "Privileged access management implementation",
          "Quarterly privileged accounts review",
          "Advanced vulnerability management",
          "Monthly remediation tracking",
          "Crisis simulation exercises with leadership",
          "Annual continuity and recovery tests",
          "Complete vendor risk management program",
          "Custom cyber threat intelligence",
          "Dark web exposure monitoring",
          "Cyber insurance support",
          "Specialized executive training",
          "Monthly cybersecurity committee",
          "Periodic risk presentations to leadership",
        ],
        deliverables: [
          "Cybersecurity strategy",
          "Multi-year roadmap",
          "Consolidated risk register",
          "Penetration test reports",
          "Target Zero Trust architecture",
          "Access management program",
          "Monthly executive dashboard",
          "Cyber threat report",
          "Vendor risk report",
          "Annual report to senior management",
        ],
        frequency: [
          "Monthly vCISO support",
          "Monthly vulnerability tracking",
          "Monthly cybersecurity committee",
          "Quarterly privileged access review",
          "Annual penetration test",
          "Annual crisis exercise",
          "Annual strategic review",
        ],
      },
    ],
    comparison: [
      { label: "Maturity assessment", values: ["✓", "✓", "✓"] },
      { label: "Risk analysis", values: ["Essential", "Detailed", "In-depth"] },
      { label: "Microsoft 365 audit", values: ["✓", "✓", "✓"] },
      {
        label: "Vulnerability scanning",
        values: ["Semi-annual", "Quarterly", "Continuous"],
      },
      { label: "Active Directory audit", values: ["—", "✓", "Advanced"] },
      { label: "Network, firewall & Wi-Fi audit", values: ["—", "✓", "✓"] },
      { label: "Patch management", values: ["—", "✓", "✓"] },
      { label: "Penetration testing", values: ["—", "—", "✓"] },
      {
        label: "Cloud security",
        values: ["Initial review", "Technical review", "In-depth review"],
      },
      {
        label: "Identity & access management",
        values: ["Baseline", "Intermediate", "Full program"],
      },
      { label: "Incident response plan", values: ["—", "✓", "✓"] },
      {
        label: "Continuity & recovery",
        values: ["Backup review", "Plans & tests", "Full program"],
      },
      {
        label: "Phishing simulations",
        values: ["Annual", "Quarterly", "Custom"],
      },
      {
        label: "Vendor risk management",
        values: ["—", "Critical vendors", "Full program"],
      },
      { label: "Threat intelligence", values: ["—", "—", "✓"] },
      { label: "Dark web monitoring", values: ["—", "—", "✓"] },
      { label: "vCISO", values: ["—", "Optional", "Included"] },
      {
        label: "Executive reporting",
        values: ["Annual", "Quarterly", "Monthly"],
      },
    ],
  },
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
    teamImageAlt:
      "The BrainFort Security operations team monitoring live threat dashboards.",
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
    cookies: "Cookie Policy",
    disclosure: "Responsible Disclosure",
    trust: "Trust Center",
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
  disclosurePage: {
    metaTitle: "Responsible Disclosure",
    metaDescription:
      "How to report a security vulnerability to BrainFort Security — our response commitments, safe harbor, and timelines.",
    title: "Responsible Disclosure Policy",
    lastUpdated: "Last updated: August 2, 2026",
    intro:
      "Security research makes everyone safer. If you believe you have found a vulnerability in one of our systems, we want to hear from you — and we commit to working with you transparently and quickly.",
    contactIntro:
      "Report vulnerabilities to our security team, encrypted if possible:",
    pgpNote: "PGP key",
    securityTxtNote: "Machine-readable policy",
    sections: [
      {
        title: "1. How to Report",
        body: "Email audit@brainfortsecurity.com with a description of the issue, the affected URL or component, steps to reproduce, and any proof-of-concept. Please encrypt sensitive reports with our PGP key. Do not open a public issue or disclose the finding before we have addressed it.",
      },
      {
        title: "2. Our Commitments",
        body: "We acknowledge reports within 2 business days, provide a status update at least every 7 days, and target remediation within 7 days for critical issues, 30 days for high severity, and 90 days for medium and low severity. We will credit you in our acknowledgments if you wish.",
      },
      {
        title: "3. Safe Harbor",
        body: "We will not initiate legal action against researchers who act in good faith: make every effort to avoid privacy violations and service disruption, do not access or exfiltrate data beyond what is necessary to demonstrate the issue, and give us reasonable time to remediate before any public disclosure.",
      },
      {
        title: "4. Scope",
        body: "In scope: brainfortsecurity.com and its subdomains. Out of scope: denial-of-service testing, social engineering, physical attacks, spam, and vulnerabilities in third-party services we use (report those to the respective vendor).",
      },
    ],
  },
  cookiesPage: {
    metaTitle: "Cookie Policy",
    metaDescription:
      "Cookie Policy for brainfortsecurity.com — what cookies we use and how to control them.",
    title: "Cookie Policy",
    lastUpdated: "Last updated: August 2, 2026",
    contactIntro: "Questions about cookies? Reach us at",
    sections: [
      {
        title: "1. What Are Cookies",
        body: "Cookies are small text files stored by your browser when you visit a website. They can be essential to make a site work, or used for analytics and advertising.",
      },
      {
        title: "2. Cookies We Use Today",
        body: "This website does not set any advertising or cross-site tracking cookies. Our infrastructure provider (Cloudflare) may set strictly necessary operational cookies for security purposes, such as bot mitigation. These are essential and do not track you across sites.",
      },
      {
        title: "3. Analytics We May Add",
        body: "If we introduce analytics tools (such as privacy-focused web analytics, Microsoft Clarity, or Google Analytics), this policy will be updated first, and where required by law we will ask for your consent before any non-essential cookie is set.",
      },
      {
        title: "4. Managing Cookies",
        body: "You can control and delete cookies through your browser settings. Blocking essential cookies may affect the security features of this site.",
      },
    ],
  },
  guidePage: {
    metaTitle: "Free Security Guide",
    metaDescription:
      "Free quick-start security guide: 14 practical, high-impact steps to secure your environment — MFA, network segmentation, server hardening, ASR rules, and more.",
    eyebrow: "Free Guide",
    title: "Start Securing Your Environment",
    intro:
      "Fourteen practical, high-impact measures our consultants recommend to every organization. Free to use — no signup, no email required.",
    stepLabel: "Step",
    items: [
      {
        title: "Enable MFA for every account with a mailbox",
        description:
          "Enforce multi-factor authentication on all user accounts that have a mailbox — they are the most targeted by phishing and credential theft.",
      },
      {
        title: "Use dynamic groups instead of static groups",
        description:
          "In Active Directory and Entra ID, build group membership from attribute rules so access assignments stay accurate automatically as people join, move, or leave.",
      },
      {
        title: "Tag devices, users, and applications",
        description:
          "Apply tags as much as you can to device, user, and application objects — ownership, criticality, and environment tags make scoping policies and incident response far faster.",
      },
      {
        title: "Segment your network",
        description:
          "Separate servers, workstations, IoT/OT, and guest traffic into distinct zones with controlled flows between them to contain lateral movement.",
      },
      {
        title: "Require passwords of at least 14 characters",
        description:
          "Length beats complexity. Set a 14-character minimum and pair it with screening against known-breached passwords.",
      },
      {
        title: "Deny logon for service accounts",
        description:
          "Service accounts must be denied interactive and remote logon — grant only the exact 'log on as a service' right where required.",
      },
      {
        title: "Use dedicated accounts for administration",
        description:
          "Create separate, dedicated admin accounts for administrative tasks — never browse the web or read email with a privileged account.",
      },
      {
        title: "Audit guest accounts regularly",
        description:
          "Review external and guest accounts on a schedule and remove those that are no longer needed or have gone inactive.",
      },
      {
        title: "Apply retention to files shared externally",
        description:
          "Expire external sharing links and apply retention policies to files shared with external users so data doesn't linger outside your control.",
      },
      {
        title: "Apply hardening on servers",
        description:
          "Deploy recognized hardening baselines (CIS, Microsoft) and remove unnecessary roles, features, and services from every server.",
      },
      {
        title: "Configure Attack Surface Reduction rules",
        description:
          "Enable Microsoft Defender ASR rules to block common malware techniques like Office macro abuse and credential dumping.",
      },
      {
        title: "Audit passwords regularly",
        description:
          "Regularly test your directory for weak, reused, or breached passwords and force resets where needed.",
      },
      {
        title: "Integrate a password management solution",
        description:
          "Deploy an enterprise password manager so teams stop reusing passwords or storing them in plain text.",
      },
      {
        title: "Run vulnerability scans periodically",
        description:
          "Schedule recurring vulnerability scans across your environment and remediate findings by risk priority.",
      },
    ],
    ctaTitle: "Need help putting these in place?",
    ctaBody:
      "Our consultants can implement every one of these measures for you — assessed, deployed, and documented.",
    ctaButton: "Book a Consultation",
  },
  trustPage: {
    metaTitle: "Trust Center",
    metaDescription:
      "BrainFort Security Trust Center — how we secure our own website, email, and data: security headers, TLS, DNSSEC, email authentication, responsible disclosure.",
    eyebrow: "Trust Center",
    title: "We Practice What We Advise",
    intro:
      "As a cybersecurity firm, we hold ourselves to the same standards we recommend to our clients. This page documents — verifiably — how this website and our communications are secured.",
    verifyNote:
      "Everything on this page can be independently verified with public tools (securityheaders.com, SSL Labs, DNSViz, MXToolbox).",
    contactTitle: "Security Contact",
    contactBody:
      "Found something? Tell us — encrypted if possible.",
    pillars: [
      {
        title: "Transport Security",
        items: [
          "TLS 1.3 with automatic HTTPS redirection",
          "HSTS enabled (6 months, includeSubDomains)",
          "DNSSEC active on brainfortsecurity.com",
        ],
      },
      {
        title: "Application Hardening",
        items: [
          "Content-Security-Policy restricting all external code",
          "X-Frame-Options: DENY and frame-ancestors 'none'",
          "nosniff, strict Referrer-Policy, minimal Permissions-Policy",
        ],
      },
      {
        title: "Email Authenticity",
        items: [
          "SPF restricted to Google Workspace senders",
          "DKIM signatures on all outgoing mail",
          "DMARC monitoring in place",
        ],
      },
      {
        title: "Availability",
        items: [
          "Served from Cloudflare's global edge network",
          "Fully static architecture — no database or origin server to breach",
          "Version-controlled deployments with CI checks",
        ],
      },
      {
        title: "Data & Privacy",
        items: [
          "Minimal data collection by design — no tracking cookies",
          "PIPEDA and Quebec Law 25 aligned privacy practices",
          "Corporate data in Google Workspace with enforced MFA",
        ],
      },
      {
        title: "Vulnerability Disclosure",
        items: [
          "Published responsible disclosure policy with safe harbor",
          "Signed security.txt at /.well-known/security.txt",
          "PGP key available for encrypted reports",
        ],
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
