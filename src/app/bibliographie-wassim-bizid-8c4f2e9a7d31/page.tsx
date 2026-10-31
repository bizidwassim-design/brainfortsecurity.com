import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Award,
  Blocks,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleGauge,
  CloudCog,
  Database,
  ExternalLink,
  FileCheck2,
  Fingerprint,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  Network,
  Radar,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import { siteConfig } from "@/lib/site";

const portfolioSlug = "bibliographie-wassim-bizid-8c4f2e9a7d31";
const portfolioUrl = siteConfig.url + "/" + portfolioSlug + "/";
const linkedInUrl = "https://www.linkedin.com/in/wassim-bizid/";
const githubUrl = "https://github.com/bizidwassim-design";

export const metadata: Metadata = {
  title: "Cybersecurity & GRC Portfolio — Wassim Bizid",
  description:
    "Unlisted professional portfolio of Wassim Bizid: cybersecurity leadership, GRC, identity, vulnerability management, security engineering and automation.",
  referrer: "no-referrer",
  alternates: { canonical: portfolioUrl },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
  openGraph: {
    type: "profile",
    url: portfolioUrl,
    title: "Wassim Bizid — Cybersecurity & GRC Portfolio",
    description:
      "Selected work across governance, risk, compliance, identity, SecOps and security automation.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary",
    title: "Wassim Bizid — Cybersecurity & GRC Portfolio",
    description:
      "Selected work across governance, risk, compliance, identity, SecOps and security automation.",
  },
};

const palette = {
  ink: "#24445D",
  sky: "#2F80ED",
  skyPale: "#EAF4FF",
  coral: "#FF7A6B",
  coralPale: "#FFF0EC",
  mint: "#42C7A5",
  mintPale: "#E7FAF4",
  lilac: "#8B7CF6",
  lilacPale: "#F0EEFF",
  sun: "#F5C451",
  sunPale: "#FFF8D8",
} as const;

const impactMetrics = [
  { value: "15+", label: "years in IT", detail: "Infrastructure, cloud, operations and security" },
  { value: "10+", label: "years in cybersecurity", detail: "Strategy, architecture, GRC and SecOps" },
  { value: "33→83%+", label: "Secure Score", detail: "Risk-led Microsoft security programme" },
  { value: "40+", label: "applications in SSO", detail: "Identity governance and faster revocation" },
] as const;

const operatingPrinciples: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  tone: string;
}> = [
  {
    title: "Govern with evidence",
    description:
      "Translate policies and frameworks into named owners, measurable controls, audit-ready evidence and clear executive decisions.",
    icon: FileCheck2,
    tone: palette.skyPale,
  },
  {
    title: "Engineer for reality",
    description:
      "Build controls around actual identities, assets, traffic flows and operational constraints—not a paper-only target state.",
    icon: Network,
    tone: palette.mintPale,
  },
  {
    title: "Automate with accountability",
    description:
      "Use PowerShell, APIs, KQL and dashboards to remove repetitive work while keeping approvals and human judgment visible.",
    icon: Workflow,
    tone: palette.coralPale,
  },
];

interface Project {
  number: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  built: string[];
  evidence: string;
  tools: string[];
  icon: LucideIcon;
  tone: string;
  accent: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Enterprise security posture & endpoint hardening",
    category: "GRC · Microsoft Security · Assurance",
    summary:
      "A risk-led hardening programme that connected policy, GPO deployment, endpoint telemetry and executive posture reporting.",
    challenge:
      "Security recommendations were distributed across tools and teams, making ownership, prioritisation and proof of control effectiveness difficult.",
    built: [
      "A prioritised remediation roadmap mapped to Microsoft Secure Score and operational risk.",
      "18 Defender Attack Surface Reduction rules in block mode across approximately 500 devices.",
      "More than 60 Windows security GPOs covering Defender, identity, SMB, removable media, sessions and servers.",
      "Telemetry-based validation to distinguish reporting discrepancies from actual control failure.",
    ],
    evidence:
      "Secure Score progressed from 33% to above 83%, with control status tracked through recurring governance reviews.",
    tools: ["Microsoft Defender XDR", "Active Directory", "Group Policy", "NinjaOne", "PowerShell"],
    icon: ShieldCheck,
    tone: palette.skyPale,
    accent: palette.sky,
  },
  {
    number: "02",
    title: "Identity lifecycle automation",
    category: "IAM · Joiner–Mover–Leaver · ITSM",
    summary:
      "An end-to-end onboarding and offboarding workflow designed to reduce forgotten access, licences and manual hand-offs.",
    challenge:
      "Manual requests could omit mailbox, group, application or licence actions and leave access active after a departure.",
    built: [
      "Reference-role provisioning to propose access based on a comparable employee, subject to review.",
      "PowerShell automation for accounts, groups, mailboxes and licence actions in a Windows environment.",
      "REST API calls that write traceable records into the ITSM workflow.",
      "A revocation path that treats offboarding speed and completeness as security controls.",
    ],
    evidence:
      "Reduced repetitive technician effort while improving the consistency and traceability of identity changes.",
    tools: ["PowerShell", "Active Directory", "Microsoft 365", "REST APIs", "ITSM"],
    icon: Fingerprint,
    tone: palette.lilacPale,
    accent: palette.lilac,
  },
  {
    number: "03",
    title: "Data governance, DLP & collaboration security",
    category: "Microsoft 365 · Purview · Data Protection",
    summary:
      "A recurring governance cycle for SharePoint access, external sharing, retention and sensitivity labelling.",
    challenge:
      "Orphaned accounts, inactive guests, indefinite external sharing and ageing data increased both exposure and storage cost.",
    built: [
      "Tenant-wide AvePoint assessments for orphaned, inactive and guest accounts plus stale external sharing.",
      "Quarterly remediation cycles to revoke obsolete access and remove unneeded data.",
      "Purview labels for Public, Internal and Sensitive information, with Internal as the default posture.",
      "Hardened Teams and SharePoint defaults after an external support-impersonation incident.",
    ],
    evidence:
      "Reduced stale access and unnecessary storage while making external sharing an intentional, labelled decision.",
    tools: ["AvePoint", "Microsoft Purview", "SharePoint", "Teams", "Entra ID"],
    icon: CloudCog,
    tone: palette.coralPale,
    accent: palette.coral,
  },
  {
    number: "04",
    title: "Executive cyber risk dashboard",
    category: "GRC · Power BI · CISO Reporting",
    summary:
      "A unified Power BI view connecting operational telemetry with risk, response and human-risk indicators.",
    challenge:
      "Leadership needed a concise view of control health without navigating multiple operational consoles.",
    built: [
      "MTTD, MTTR and response-time views for security operations.",
      "Vulnerability ageing bands at 30, 60 and 90+ days to make remediation debt visible.",
      "Awareness, phishing-simulation and training-compliance measures from MetaCompliance.",
      "Microsoft 365 Defender and Secure Score inputs for an integrated posture narrative.",
    ],
    evidence:
      "Created a repeatable executive review that links trends and exceptions to accountable follow-up actions.",
    tools: ["Power BI", "Microsoft Defender XDR", "Secure Score", "MetaCompliance"],
    icon: LayoutDashboard,
    tone: palette.sunPale,
    accent: palette.sun,
  },
  {
    number: "05",
    title: "ELK SIEM engineering & KQL-driven response",
    category: "SecOps · Detection Engineering · Automation",
    summary:
      "A practical monitoring and response capability combining centralised telemetry, analyst dashboards and repeatable investigation logic.",
    challenge:
      "Analysts needed faster paths from raw events to triage context, detection evidence and response actions.",
    built: [
      "An ELK-based SIEM pipeline with Elasticsearch storage and Kibana dashboards for operational visibility.",
      "Purpose-built visualisations for alert volume, event sources, severity and investigation trends.",
      "KQL detection and investigation logic to standardise common incident-response scenarios.",
      "Automation patterns that preserve analyst review for consequential actions.",
    ],
    evidence:
      "Turned fragmented security events into reusable views and consistent response workflows.",
    tools: ["Elasticsearch", "Logstash", "Kibana", "KQL", "Microsoft Defender XDR"],
    icon: Radar,
    tone: palette.mintPale,
    accent: palette.mint,
  },
  {
    number: "06",
    title: "Continuous vulnerability management",
    category: "Vulnerability Management · OpenVAS · Remediation",
    summary:
      "A scheduled vulnerability-management workflow built on a dedicated Kali Linux and OpenVAS scanning platform.",
    challenge:
      "The programme needed consistent VLAN coverage and a way to separate new, persistent and remediated findings over time.",
    built: [
      "Installed and configured OpenVAS on a dedicated Kali Linux virtual machine.",
      "Defined discovery and scanning scope across approved VLAN segments.",
      "Scheduled monthly scans and comparison views for remediation tracking.",
      "Structured follow-up around vulnerability age, exposure and responsible owners.",
    ],
    evidence:
      "Established a recurring evidence trail for newly discovered, outstanding and remediated vulnerabilities.",
    tools: ["Kali Linux", "OpenVAS", "VLAN discovery", "Scheduling", "Reporting"],
    icon: ScanSearch,
    tone: palette.skyPale,
    accent: palette.sky,
  },
  {
    number: "07",
    title: "Firewall rule audit & network segmentation",
    category: "Network Security · Cisco Meraki · Control Review",
    summary:
      "An automated firewall-rule assessment used to identify ineffective rules and support stronger VLAN segmentation.",
    challenge:
      "Rules with no observed hits could indicate obsolete, mis-scoped or ineffective controls and created unnecessary complexity.",
    built: [
      "Exported the firewall rule base and usage evidence into a structured Excel review workbook.",
      "Flagged no-hit rules for validation rather than assuming that inactivity alone meant safe deletion.",
      "Worked with the network architect to validate flows, ownership and business need.",
      "Used findings to improve rule hygiene and segmentation between VLANs.",
    ],
    evidence:
      "Produced an auditable review trail and a safer, evidence-based path to network-policy simplification.",
    tools: ["Cisco Meraki", "Excel", "APIs", "Network architecture", "VLANs"],
    icon: Network,
    tone: palette.lilacPale,
    accent: palette.lilac,
  },
  {
    number: "08",
    title: "OT visibility & industrial remote-access governance",
    category: "OT Security · Segmentation · Third-Party Access",
    summary:
      "A collaborative IT/OT programme to baseline industrial traffic and replace shared vendor access with accountable identities.",
    challenge:
      "Industrial operations required reliable vendor support while limiting unobserved traffic and generic privileged access.",
    built: [
      "Separated IT and OT zones with firewall controls and reviewed permitted cross-zone flows.",
      "Used Armis visibility to understand device relationships, protocols and normal communication patterns.",
      "Translated observed flows into a validated communication matrix and enforceable network policy.",
      "Required named vendor accounts and MFA for remote industrial support instead of generic shared credentials.",
    ],
    evidence:
      "Improved industrial accountability and made deviations from expected device communications easier to identify and investigate.",
    tools: ["Armis", "Cisco Meraki", "MFA", "OT asset visibility", "Remote access"],
    icon: ServerCog,
    tone: palette.coralPale,
    accent: palette.coral,
  },
  {
    number: "09",
    title: "Asset inventory reconciliation",
    category: "GRC · CMDB · Security Automation",
    summary:
      "An automated control that compares Active Directory devices with the CMDB and opens exceptions in the ITSM platform.",
    challenge:
      "Unknown or unregistered devices weaken asset ownership, patch governance, incident response and audit confidence.",
    built: [
      "PowerShell collection and normalisation of Active Directory computer objects.",
      "Automated comparison against CMDB records through REST APIs.",
      "Exception tickets routed to technicians when a device was missing from the inventory.",
      "Traceable remediation rather than a one-time spreadsheet reconciliation.",
    ],
    evidence:
      "Converted asset completeness into a continuous control with an accountable exception workflow.",
    tools: ["PowerShell", "Active Directory", "CMDB", "REST APIs", "ITSM"],
    icon: Database,
    tone: palette.mintPale,
    accent: palette.mint,
  },
  {
    number: "10",
    title: "Human-risk & awareness programme",
    category: "Security Culture · Phishing · Multi-site Governance",
    summary:
      "A full-year awareness programme designed around engagement patterns, seasonal risk and friendly competition.",
    challenge:
      "Training engagement was strongest early in the year and declined unless content remained timely and personally relevant.",
    built: [
      "An annual curriculum planned in January with higher-value modules positioned while engagement is highest.",
      "Seasonal campaigns for travel, public Wi-Fi, holiday offers and other context-specific risks.",
      "October Cybersecurity Awareness Month challenges across Québec, British Columbia and Florida sites.",
      "Scoreboards, recognition and phishing-reporting competitions to reinforce vigilance through participation.",
    ],
    evidence:
      "Made awareness an ongoing behavioural programme instead of a once-a-year compliance exercise.",
    tools: ["MetaCompliance", "Phishing simulation", "Learning design", "Power BI", "Campaign planning"],
    icon: Users,
    tone: palette.sunPale,
    accent: palette.sun,
  },
  {
    number: "11",
    title: "Layered web & collaboration protection",
    category: "Defence in Depth · Endpoint · Network",
    summary:
      "Complementary endpoint, network and collaboration controls that reduce exposure beyond the office perimeter.",
    challenge:
      "Users could encounter unwanted or high-risk content on corporate networks, remotely, or through external collaboration channels.",
    built: [
      "Defender for Endpoint web-content filtering for roaming and remote devices.",
      "Cisco Meraki content controls as a second enforcement layer on managed networks.",
      "Restricted unsolicited external Teams communication following a social-engineering incident.",
      "Aligned exceptions and user communication with legitimate business needs.",
    ],
    evidence:
      "Reduced preventable exposure while maintaining controlled exception paths for business activity.",
    tools: ["Defender for Endpoint", "Cisco Meraki", "Microsoft Teams", "Web filtering"],
    icon: LockKeyhole,
    tone: palette.skyPale,
    accent: palette.sky,
  },
  {
    number: "12",
    title: "Patch, drift & endpoint operations automation",
    category: "Security Operations · NinjaOne · Continuous Compliance",
    summary:
      "A recurring endpoint-control package that joins hardening, software updates, Windows patching and compliance visibility.",
    challenge:
      "A secure baseline can erode quickly when settings change, patches lag or risky local practices go unnoticed.",
    built: [
      "A NinjaOne hardening package that regularly validates and reapplies required endpoint settings.",
      "Automated software and Windows patch deployment with operational follow-up.",
      "Reporting to flag potential clear-text password storage in common document formats.",
      "User guidance toward approved password-manager practices when risky storage was identified.",
    ],
    evidence:
      "Created a repeatable control loop for endpoint drift, patch status and selected risky behaviours.",
    tools: ["NinjaOne", "Defender ASR", "Windows Update", "Automation", "Reporting"],
    icon: CircleGauge,
    tone: palette.lilacPale,
    accent: palette.lilac,
  },
  {
    number: "13",
    title: "ISO 27001 ISMS implementation lab",
    category: "PORTFOLIO LAB · ISO 27001:2022 · GRC",
    summary:
      "A complete, evidence-oriented ISMS build that demonstrates how ISO 27001 moves from a standard into a working governance system.",
    challenge:
      "A credible ISO 27001 programme needs more than policy templates: scope, risk decisions, control applicability, evidence, ownership and continual improvement must remain connected.",
    built: [
      "Define the organisational context, interested parties, ISMS scope, governance roles and measurable objectives.",
      "Create the asset and risk registers, assessment method, risk-treatment plan and approval workflow.",
      "Map all 93 ISO 27001:2022 Annex A controls in a Statement of Applicability with rationale, owners and evidence.",
      "Model the internal-audit, management-review, corrective-action and continual-improvement cycle.",
    ],
    evidence:
      "Portfolio lab in development. Planned public deliverables will use a fictional organisation and synthetic evidence; no certification claim is made.",
    tools: ["ISO 27001:2022", "Annex A", "Statement of Applicability", "Risk register", "Audit programme"],
    icon: BookOpenCheck,
    tone: palette.sunPale,
    accent: "#C79012",
  },
];

const events = [
  {
    date: "2026",
    title: "GISEC Global",
    place: "Dubai, UAE",
    note: "Adversarial testing of an AI security solution and field observations on prompt injection, jailbreaks and secure-by-design claims.",
    href: "https://www.linkedin.com/posts/wassim-bizid_gisecglobal-gisec2026-gisecdubai-activity-7506328983148408832-Kgf1",
    tone: palette.skyPale,
  },
  {
    date: "2026",
    title: "GoSec Conference",
    place: "Montréal, Canada",
    note: "Reflections on the speed asymmetry created by AI-enabled attacks, Zero Trust and machine-speed response.",
    href: "https://www.linkedin.com/posts/wassim-bizid_gosec2026-cybers%C3%A9curit%C3%A9-ia-activity-7509056766341615616-rIGv",
    tone: palette.coralPale,
  },
  {
    date: "2026",
    title: "Bell Cyber — AI-powered SOC",
    place: "Canada",
    note: "Exchange with public- and private-sector leaders on autonomous SOC operations, AI agents and Canadian digital sovereignty.",
    href: "https://www.linkedin.com/posts/wassim-bizid_cybersecurity-artificialintelligence-ai-activity-7511480181333688320-kgOB",
    tone: palette.mintPale,
  },
  {
    date: "2026",
    title: "IANS Agentic AI Threat Modeling Symposium",
    place: "Virtual",
    note: "Threat modeling for agentic systems, STRIDE, framework supply-chain risks, guardrail bypass and sensitive data in observability logs.",
    href: "https://www.linkedin.com/posts/wassim-bizid_agentic-ai-threat-modeling-are-we-ready-activity-7438321739614474241-lB9k",
    tone: palette.lilacPale,
  },
  {
    date: "08 Sep 2026",
    title: "5th MENA Cyber Security Conference",
    place: "Riyadh, Saudi Arabia",
    note: "Delegate participation focused on cyber resilience across the GCC, infrastructure security and trusted digital operations.",
    tone: palette.sunPale,
  },
  {
    date: "2024",
    title: "GoSec Conference",
    place: "Montréal, Canada",
    note: "Two days of cybersecurity talks, solution briefings, peer exchange and professional networking.",
    href: "https://www.linkedin.com/posts/wassim-bizid_gosec2024-cybersecurity-networking-activity-7239789607372959744-xKmU",
    tone: palette.skyPale,
  },
] as const;

const credentials = [
  { name: "CISSP", issuer: "ISC2", focus: "Security leadership & architecture" },
  { name: "CISM", issuer: "ISACA", focus: "Governance, risk & cyber programmes" },
  { name: "Azure Security Engineer", issuer: "Microsoft", focus: "Azure security & identity" },
  { name: "ITIL Foundation", issuer: "EXIN", focus: "IT service governance" },
  { name: "RHCSA", issuer: "Red Hat", focus: "Linux administration & security" },
  { name: "MCSA Cloud Platform", issuer: "Microsoft", focus: "Cloud infrastructure" },
  { name: "Mini-MBA", issuer: "McGill — Desautels", focus: "Leadership, strategy & business" },
] as const;

const githubRoadmap = [
  {
    title: "M365 GRC Assessment Framework",
    description: "Maturity levels, expected evidence and a risk-prioritised remediation plan.",
  },
  {
    title: "Cyber Risk Register Starter Kit",
    description: "Risk statements, impact criteria, treatment decisions, owners and review cadence.",
  },
  {
    title: "Third-Party Cyber Risk Pack",
    description: "Supplier questionnaire, criticality model, minimum clauses and incident playbook.",
  },
  {
    title: "AI Agent Security Checklist",
    description: "Non-human identity, autonomy, memory, data, auditability and human approval controls.",
  },
  {
    title: "ISO 27001 ISMS Builder",
    description: "A fictional end-to-end ISMS with risk treatment, Statement of Applicability, evidence and audit cycle.",
  },
] as const;

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#24445D] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[#5C7287] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#CFE0EC] bg-white px-3 py-1.5 text-xs font-semibold text-[#46647A]">
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#D9E7EF] bg-white shadow-[0_18px_60px_-38px_rgba(47,128,237,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-38px_rgba(47,128,237,0.42)]">
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div
            className="flex size-12 items-center justify-center rounded-2xl"
            style={{ backgroundColor: project.tone, color: project.accent }}
          >
            <Icon className="size-6" aria-hidden="true" />
          </div>
          <span className="font-mono text-sm font-bold text-[#90A8B8]">{project.number}</span>
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em]" style={{ color: project.accent }}>
          {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-[#24445D]">{project.title}</h3>
        <p className="mt-4 leading-7 text-[#5C7287]">{project.summary}</p>
      </div>

      <details className="mt-auto border-t border-[#E3EDF3] bg-[#FCFEFF] open:bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-sm font-bold text-[#24445D] sm:px-8 [&::-webkit-details-marker]:hidden">
          Read the case study
          <ChevronDown className="size-5 text-[#2F80ED] transition group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="space-y-6 px-6 pb-8 sm:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#90A8B8]">Challenge</p>
            <p className="mt-2 leading-7 text-[#5C7287]">{project.challenge}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#90A8B8]">What I built</p>
            <ul className="mt-3 space-y-3">
              {project.built.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[#5C7287]">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#42C7A5]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#E7FAF4] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#238D73]">Evidence of impact</p>
            <p className="mt-2 text-sm leading-6 text-[#416779]">{project.evidence}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => <Pill key={tool}>{tool}</Pill>)}
          </div>
        </div>
      </details>
    </article>
  );
}

function DashboardHeader({ title, label }: { title: string; label: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#DCEAF2] px-5 py-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#90A8B8]">{label}</p>
        <h3 className="mt-1 font-black text-[#24445D]">{title}</h3>
      </div>
      <span className="rounded-full bg-[#E7FAF4] px-3 py-1 text-[11px] font-bold text-[#238D73]">SYNTHETIC</span>
    </div>
  );
}

function CisoDashboard() {
  const cards = [
    ["MTTD", "24 min", "↓ 18%"],
    ["MTTR", "58 min", "↓ 12%"],
    ["90d+ vulns", "27", "↓ 9"],
    ["Training", "84%", "↑ 6%"],
  ] as const;
  const bars = [42, 58, 51, 67, 72, 76, 83];

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#D7E8F2] bg-white shadow-[0_22px_70px_-45px_rgba(47,128,237,0.5)]">
      <DashboardHeader title="Executive risk pulse" label="Power BI reconstruction" />
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cards.map(([label, value, trend], index) => (
            <div key={label} className="rounded-2xl p-3" style={{ backgroundColor: [palette.skyPale, palette.mintPale, palette.coralPale, palette.lilacPale][index] }}>
              <p className="text-[10px] font-bold uppercase tracking-wide text-[#6C8395]">{label}</p>
              <p className="mt-2 text-xl font-black text-[#24445D]">{value}</p>
              <p className="mt-1 text-xs font-bold text-[#238D73]">{trend}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-2xl border border-[#E2EDF3] p-4">
            <div className="flex items-center justify-between text-xs font-bold text-[#6C8395]">
              <span>Posture trend</span><span>7 reviews</span>
            </div>
            <div className="mt-4 flex h-28 items-end gap-2">
              {bars.map((height, index) => (
                <div key={height + "-" + index} className="flex-1 rounded-t-md bg-[#8FC5FF]" style={{ height: height + "%" }} />
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-[#FFF8D8] p-4">
            <p className="text-xs font-bold text-[#6C8395]">Vulnerability age</p>
            <div className="mt-4 space-y-3">
              {([
                ["0–30d", 78, palette.mint],
                ["31–60d", 48, palette.sun],
                ["61–90d", 31, palette.coral],
                ["90d+", 18, palette.lilac],
              ] as const).map(([label, width, color]) => (
                <div key={label}>
                  <div className="mb-1 flex justify-between text-[10px] font-bold text-[#6C8395]">
                    <span>{label}</span><span>{width}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white">
                    <div className="h-2 rounded-full" style={{ width: width + "%", backgroundColor: color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SiemDashboard() {
  const points = [28, 46, 35, 70, 54, 82, 62, 88, 72, 94, 79, 86];

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#D7E8F2] bg-white shadow-[0_22px_70px_-45px_rgba(139,124,246,0.5)]">
      <DashboardHeader title="Detection & investigation" label="Kibana reconstruction" />
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            ["Alerts", "1,284", palette.skyPale],
            ["High severity", "37", palette.coralPale],
            ["Sources", "18", palette.mintPale],
          ].map(([label, value, tone]) => (
            <div key={label} className="rounded-2xl p-3" style={{ backgroundColor: tone }}>
              <p className="text-[10px] font-bold uppercase text-[#6C8395]">{label}</p>
              <p className="mt-2 text-xl font-black text-[#24445D]">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-[#E2EDF3] p-4">
          <div className="flex items-center justify-between text-xs font-bold text-[#6C8395]">
            <span>Events over time</span><span>24 hours</span>
          </div>
          <div className="mt-5 flex h-28 items-end gap-1.5">
            {points.map((height, index) => (
              <div key={height + "-" + index} className="flex-1 rounded-t bg-gradient-to-t from-[#8B7CF6] to-[#B9AEFF]" style={{ height: height + "%" }} />
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-[#5C7287]">
          <span className="rounded-xl bg-[#EAF4FF] py-2">Identity</span>
          <span className="rounded-xl bg-[#E7FAF4] py-2">Endpoint</span>
          <span className="rounded-xl bg-[#FFF0EC] py-2">Network</span>
        </div>
      </div>
    </div>
  );
}

function SectionShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={["mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className].join(" ")}>{children}</div>;
}

export default function WassimPortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF7] text-[#24445D] selection:bg-[#BDE2FF] selection:text-[#24445D]">
      <header className="sticky top-0 z-50 border-b border-[#DCE9EF]/90 bg-[#FFFDF7]/90 backdrop-blur-xl">
        <SectionShell className="flex min-h-20 items-center justify-between gap-6 py-3">
          <a href="#top" className="flex items-center gap-3" aria-label="Back to the top">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-[#2F80ED] text-sm font-black text-white shadow-[0_10px_24px_-12px_rgba(47,128,237,0.9)]">WB</span>
            <span>
              <span className="block text-sm font-black tracking-tight text-[#24445D]">Wassim Bizid</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7D95A6]">Cybersecurity & GRC</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-[#5C7287] lg:flex" aria-label="Portfolio navigation">
            <a className="transition hover:text-[#2F80ED]" href="#work">Selected work</a>
            <a className="transition hover:text-[#2F80ED]" href="#dashboards">Dashboards</a>
            <a className="transition hover:text-[#2F80ED]" href="#events">Events</a>
            <a className="transition hover:text-[#2F80ED]" href="#credentials">Credentials</a>
          </nav>
          <a href={linkedInUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#BFDDF5] bg-white px-4 py-2.5 text-sm font-bold text-[#2F80ED] transition hover:-translate-y-0.5 hover:border-[#2F80ED]">
            LinkedIn <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </SectionShell>
      </header>

      <section id="top" className="relative isolate scroll-mt-24 border-b border-[#DCE9EF]">
        <div className="absolute -left-24 top-12 -z-10 size-72 rounded-full bg-[#D9EEFF] blur-3xl" />
        <div className="absolute -right-24 top-0 -z-10 size-80 rounded-full bg-[#FFE1DB] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -z-10 size-72 -translate-x-1/2 rounded-full bg-[#DDF8EF] blur-3xl" />
        <SectionShell className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CBE2F2] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#52758C] shadow-sm">
              <Sparkles className="size-4 text-[#FF7A6B]" aria-hidden="true" />
              Security leadership · GRC · Engineering
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#24445D] sm:text-6xl lg:text-7xl">
              I turn security telemetry into
              <span className="block text-[#2F80ED]">accountable risk decisions.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5C7287] sm:text-xl">
              Cybersecurity and IT leader connecting governance, identity, cloud, endpoints, SecOps and industrial environments—then making the programme measurable for executives and practical for operators.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-[#2F80ED] px-6 py-3.5 text-sm font-black text-white shadow-[0_14px_30px_-15px_rgba(47,128,237,0.8)] transition hover:-translate-y-0.5 hover:bg-[#2673D7]">
                Explore selected work <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a href={"mailto:" + siteConfig.email} className="inline-flex items-center gap-2 rounded-full border border-[#BFDDF5] bg-white px-6 py-3.5 text-sm font-black text-[#24445D] transition hover:-translate-y-0.5 hover:border-[#2F80ED]">
                <Mail className="size-4 text-[#FF7A6B]" aria-hidden="true" /> Contact
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-[#7D95A6]">
              <LockKeyhole className="size-4 shrink-0 text-[#42C7A5]" aria-hidden="true" />
              Unlisted portfolio · no search indexing · shareable only by direct link
            </p>
          </div>

          <aside className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-6 -top-6 size-24 rounded-[2rem] bg-[#FFF0EC]" />
            <div className="absolute -bottom-6 -right-6 size-28 rounded-full bg-[#E7FAF4]" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D6E7F0] bg-white p-7 shadow-[0_32px_90px_-48px_rgba(47,128,237,0.5)] sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <div className="flex size-20 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-[#EAF4FF] via-[#F0EEFF] to-[#FFF0EC] text-2xl font-black text-[#2F80ED]">WB</div>
                <span className="rounded-full bg-[#E7FAF4] px-4 py-2 text-xs font-bold text-[#238D73]">Open to strategic conversations</span>
              </div>
              <h2 className="mt-8 text-3xl font-black tracking-tight text-[#24445D]">Wassim Bizid</h2>
              <p className="mt-2 font-bold text-[#2F80ED]">MBA · CISSP · CISM · ITIL</p>
              <div className="mt-7 space-y-4 border-t border-[#E1ECF2] pt-7 text-sm text-[#5C7287]">
                <p className="flex items-start gap-3"><BriefcaseBusiness className="mt-0.5 size-5 shrink-0 text-[#FF7A6B]" aria-hidden="true" /><span><strong className="text-[#24445D]">Focus:</strong> cyber strategy, GRC, identity, Zero Trust and security automation</span></p>
                <p className="flex items-start gap-3"><Globe2 className="mt-0.5 size-5 shrink-0 text-[#42C7A5]" aria-hidden="true" /><span><strong className="text-[#24445D]">Perspective:</strong> Canada, United States and the Middle East</span></p>
                <p className="flex items-start gap-3"><Users className="mt-0.5 size-5 shrink-0 text-[#8B7CF6]" aria-hidden="true" /><span><strong className="text-[#24445D]">Leadership:</strong> multidisciplinary IT and cybersecurity teams</span></p>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {["English", "French", "Arabic"].map((language, index) => (
                  <span key={language} className="rounded-full px-3 py-1.5 text-xs font-bold text-[#46647A]" style={{ backgroundColor: [palette.skyPale, palette.coralPale, palette.sunPale][index] }}>{language}</span>
                ))}
              </div>
            </div>
          </aside>
        </SectionShell>

        <SectionShell className="pb-16 sm:pb-20">
          <div className="grid overflow-hidden rounded-[2rem] border border-[#D8E7EF] bg-white sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric, index) => (
              <div key={metric.label} className={"p-6 sm:p-7 " + (index > 0 ? "border-t border-[#E1ECF2] sm:border-l sm:border-t-0 " : "") + (index === 2 ? "lg:border-l" : "")}>
                <p className="text-3xl font-black tracking-tight text-[#2F80ED]">{metric.value}</p>
                <p className="mt-1 text-sm font-black text-[#24445D]">{metric.label}</p>
                <p className="mt-2 text-xs leading-5 text-[#7D95A6]">{metric.detail}</p>
              </div>
            ))}
          </div>
        </SectionShell>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="approach-title">
        <SectionShell>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionTitle eyebrow="My operating model" title="Controls that survive contact with operations." description="I work across the full control lifecycle: define the risk, design the guardrail, automate what is repeatable, measure effectiveness and return evidence to governance." />
            <div className="grid gap-4 sm:grid-cols-3">
              {operatingPrinciples.map((principle) => {
                const Icon = principle.icon;
                return (
                  <article key={principle.title} className="rounded-[1.75rem] border border-[#DCE9EF] p-5" style={{ backgroundColor: principle.tone }}>
                    <Icon className="size-6 text-[#2F80ED]" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-black text-[#24445D]">{principle.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#5C7287]">{principle.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </SectionShell>
      </section>

      <section id="work" className="scroll-mt-24 border-y border-[#DCE9EF] bg-[#F8FCFF] py-20 sm:py-28" aria-labelledby="work-title">
        <SectionShell>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionTitle eyebrow="Selected work" title="Programmes built from policy to proof." description="A curated set of hands-on programmes across GRC, security engineering and operations. Client names, internal identifiers and sensitive topology details are intentionally removed." />
            <div className="flex shrink-0 items-center gap-3 rounded-2xl bg-[#E7FAF4] px-5 py-4 text-sm font-bold text-[#238D73]">
              <BookOpenCheck className="size-5" aria-hidden="true" /> 13 case studies
            </div>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </SectionShell>
      </section>

      <section id="dashboards" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="dashboards-title">
        <SectionShell>
          <SectionTitle eyebrow="Dashboard gallery" title="From raw signals to an executive narrative." description="These light-theme reconstructions illustrate the information architecture of dashboards I designed. All numbers shown here are synthetic and do not represent any client environment." />
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            <CisoDashboard />
            <SiemDashboard />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-[#D7E8F2] bg-[#E7FAF4] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#238D73]">OpenVAS programme</p><h3 className="mt-2 text-xl font-black text-[#24445D]">Remediation movement</h3></div>
                <ScanSearch className="size-7 text-[#42C7A5]" aria-hidden="true" />
              </div>
              <div className="mt-7 space-y-4">
                {([
                  ["Remediated", 74, palette.mint],
                  ["In progress", 47, palette.sky],
                  ["Accepted risk", 22, palette.sun],
                ] as const).map(([label, width, color]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-xs font-bold text-[#5C7287]"><span>{label}</span><span>{width}%</span></div>
                    <div className="h-3 rounded-full bg-white"><div className="h-3 rounded-full" style={{ width: width + "%", backgroundColor: color }} /></div>
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-[1.75rem] border border-[#D7E8F2] bg-[#FFF0EC] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C95D50]">Human risk programme</p><h3 className="mt-2 text-xl font-black text-[#24445D]">Reporting behaviour</h3></div>
                <Users className="size-7 text-[#FF7A6B]" aria-hidden="true" />
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3 text-center">
                {[
                  ["Phish reported", "↑ 31%"],
                  ["Repeat clicks", "↓ 18%"],
                  ["Training", "84%"],
                ].map(([label, value], index) => (
                  <div key={label} className="rounded-2xl bg-white p-4"><p className="text-lg font-black" style={{ color: [palette.sky, palette.mint, palette.lilac][index] }}>{value}</p><p className="mt-2 text-[10px] font-bold uppercase leading-4 text-[#6C8395]">{label}</p></div>
                ))}
              </div>
            </article>
          </div>
        </SectionShell>
      </section>

      <section id="events" className="scroll-mt-24 border-y border-[#DCE9EF] bg-[#FFF9ED] py-20 sm:py-28" aria-labelledby="events-title">
        <SectionShell>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionTitle eyebrow="Industry engagement" title="Learning in the field—and testing the claims." description="Selected cybersecurity events documented through public posts and event credentials. I use conferences to challenge assumptions, compare operating models and bring practical lessons back into security programmes." />
              <a href={linkedInUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#2F80ED] hover:underline">View the complete LinkedIn activity <ExternalLink className="size-4" aria-hidden="true" /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {events.map((event) => (
                <article key={event.title + "-" + event.date} className="rounded-[1.75rem] border border-[#DCE7ED] p-6" style={{ backgroundColor: event.tone }}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#2F80ED]">{event.date}</span>
                    <CalendarDays className="size-5 text-[#8B7CF6]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-[#24445D]">{event.title}</h3>
                  <p className="mt-1 text-sm font-bold text-[#5C7287]">{event.place}</p>
                  <p className="mt-4 text-sm leading-6 text-[#5C7287]">{event.note}</p>
                  {"href" in event ? (
                    <a href={event.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-black text-[#2F80ED] hover:underline">Public field note <ArrowUpRight className="size-4" aria-hidden="true" /></a>
                  ) : (
                    <p className="mt-5 text-xs font-bold text-[#7D95A6]">Verified from event credential</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </SectionShell>
      </section>

      <section id="credentials" className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="credentials-title">
        <SectionShell>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionTitle eyebrow="Credentials" title="Technical depth, governance perspective." description="Formal security and technology credentials reinforced by business leadership education and continuous field learning." />
              <div className="mt-8 rounded-[1.75rem] bg-[#EAF4FF] p-6">
                <GraduationCap className="size-7 text-[#2F80ED]" aria-hidden="true" />
                <p className="mt-4 font-black text-[#24445D]">Framework fluency</p>
                <p className="mt-2 text-sm leading-6 text-[#5C7287]">NIST CSF · ISO 27001 · CIS Controls · Zero Trust · Microsoft security architecture · risk treatment and audit evidence</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((credential, index) => (
                <article key={credential.name} className="flex gap-4 rounded-[1.5rem] border border-[#DCE9EF] bg-white p-5 shadow-[0_18px_50px_-42px_rgba(47,128,237,0.5)]">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: [palette.skyPale, palette.coralPale, palette.mintPale, palette.lilacPale][index % 4] }}><Award className="size-5 text-[#2F80ED]" aria-hidden="true" /></span>
                  <div><h3 className="font-black text-[#24445D]">{credential.name}</h3><p className="mt-1 text-xs font-bold text-[#2F80ED]">{credential.issuer}</p><p className="mt-2 text-sm leading-5 text-[#5C7287]">{credential.focus}</p></div>
                </article>
              ))}
            </div>
          </div>
        </SectionShell>
      </section>

      <section className="border-y border-[#DCE9EF] bg-[#F8FCFF] py-20 sm:py-28" aria-labelledby="github-title">
        <SectionShell>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionTitle eyebrow="Public lab roadmap" title="Turning field experience into reusable GRC assets." description="The following repositories are being prepared for publication. They are presented as a roadmap—not as already released work." />
              <a href={githubUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2F80ED] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5">GitHub profile <ExternalLink className="size-4" aria-hidden="true" /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {githubRoadmap.map((item, index) => (
                <article key={item.title} className="rounded-[1.75rem] border border-[#DCE9EF] p-6" style={{ backgroundColor: [palette.skyPale, palette.mintPale, palette.coralPale, palette.lilacPale][index % 4] }}>
                  <div className="flex items-center justify-between gap-4"><Blocks className="size-6 text-[#2F80ED]" aria-hidden="true" /><span className="rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#7D95A6]">In preparation</span></div>
                  <h3 className="mt-5 text-lg font-black text-[#24445D]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5C7287]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </SectionShell>
      </section>

      <section className="py-20 sm:py-28">
        <SectionShell>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#CFE4F2] bg-gradient-to-br from-[#EAF4FF] via-white to-[#FFF0EC] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="absolute left-8 top-8 size-20 rounded-full bg-[#E7FAF4]" />
            <div className="absolute bottom-8 right-8 size-24 rounded-[2rem] bg-[#FFF8D8]" />
            <div className="relative mx-auto max-w-3xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#2F80ED]">Let’s compare notes</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#24445D] sm:text-5xl">Security should be measurable, explainable and usable.</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5C7287]">For conversations about cybersecurity leadership, GRC transformation, identity, SecOps or secure AI adoption.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={"mailto:" + siteConfig.email} className="inline-flex items-center gap-2 rounded-full bg-[#2F80ED] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5"><Mail className="size-4" aria-hidden="true" />{siteConfig.email}</a>
                <a href={linkedInUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#BFDDF5] bg-white px-6 py-3.5 text-sm font-black text-[#24445D] transition hover:-translate-y-0.5">Connect on LinkedIn <ArrowUpRight className="size-4 text-[#2F80ED]" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </SectionShell>
      </section>

      <footer className="border-t border-[#DCE9EF] bg-white py-10">
        <SectionShell className="flex flex-col gap-6 text-sm text-[#6C8395] sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-black text-[#24445D]">Wassim Bizid · Cybersecurity & GRC Portfolio</p><p className="mt-1 text-xs">Selected work has been anonymised; dashboard values are illustrative.</p></div>
          <div className="flex flex-wrap gap-5 text-xs font-bold"><a href={linkedInUrl} target="_blank" rel="noreferrer" className="hover:text-[#2F80ED]">LinkedIn</a><a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-[#2F80ED]">GitHub</a><a href={"mailto:" + siteConfig.email} className="hover:text-[#2F80ED]">Email</a></div>
        </SectionShell>
      </footer>
    </main>
  );
}
