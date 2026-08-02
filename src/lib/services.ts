import {
  BrainCircuit,
  Bug,
  ClipboardCheck,
  Cloud,
  Crosshair,
  Fingerprint,
  KeyRound,
  LayoutGrid,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  outcomes: string[];
}

export const services: Service[] = [
  {
    id: "identity-assessment",
    icon: Fingerprint,
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
    icon: ShieldCheck,
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
    icon: LayoutGrid,
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
    icon: KeyRound,
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
    icon: Cloud,
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
    icon: ClipboardCheck,
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
    icon: BrainCircuit,
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
    icon: Bug,
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
    icon: Crosshair,
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
    icon: Network,
    title: "Security Architecture Review",
    description:
      "Independent review of your security architecture — segmentation, defense in depth, monitoring coverage, and resilience by design.",
    outcomes: [
      "Architecture strengths and gaps analysis",
      "Defense-in-depth improvement plan",
      "Monitoring and detection coverage map",
    ],
  },
];

/** Subset featured on the home page. */
export const featuredServices = services.slice(0, 6);
