import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileCheck2,
  Fingerprint,
  Globe2,
  GraduationCap,
  KeyRound,
  Languages,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import { siteConfig } from "@/lib/site";

const portfolioSlug = "bibliographie-wassim-bizid-8c4f2e9a7d31";
const portfolioUrl = `${siteConfig.url}/${portfolioSlug}/`;
const linkedInUrl = "https://www.linkedin.com/in/wassim-bizid/";

export const metadata: Metadata = {
  title: "Bibliographie professionnelle — Wassim Bizid",
  description:
    "Portfolio professionnel privé de Wassim Bizid : leadership cybersécurité, gouvernance, risques, conformité, IAM, vulnérabilités et sécurité augmentée par l’IA.",
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
    title: "Wassim Bizid — Portfolio cybersécurité & GRC",
    description:
      "Leadership cybersécurité, gouvernance des risques, conformité, IAM et automatisation sécurisée par l’IA.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Wassim Bizid — Portfolio cybersécurité et GRC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wassim Bizid — Portfolio cybersécurité & GRC",
    description:
      "Leadership cybersécurité, gouvernance des risques, conformité, IAM et automatisation sécurisée par l’IA.",
    images: [siteConfig.ogImage],
  },
};

const impactMetrics = [
  { value: "15+", label: "ans en TI", detail: "Infrastructure, cloud, opérations et sécurité" },
  { value: "10+", label: "ans en cybersécurité", detail: "Stratégie, architecture, GRC et SecOps" },
  { value: "33→83%", label: "Microsoft Secure Score", detail: "Programme structuré de gouvernance et de durcissement" },
  { value: "40+", label: "applications en SSO", detail: "Entra ID, MFA, Conditional Access et cycle JML" },
  { value: "7", label: "experts dirigés", detail: "Équipe TI et cybersécurité multidisciplinaire" },
  { value: "3", label: "régions desservies", detail: "Canada, Émirats arabes unis et Arabie saoudite" },
] as const;

const grcPillars: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}> = [
  {
    title: "Gouvernance",
    description:
      "Transformer les objectifs d’affaires en politiques, responsabilités et décisions de sécurité mesurables.",
    icon: Building2,
    items: ["Feuille de route cyber", "Politiques et standards", "Indicateurs exécutifs"],
  },
  {
    title: "Gestion des risques",
    description:
      "Identifier, prioriser et traiter les risques selon l’exposition réelle, l’impact métier et l’effort requis.",
    icon: Target,
    items: ["Registre des risques", "Plans de traitement", "Risque tiers et supply chain"],
  },
  {
    title: "Conformité",
    description:
      "Relier les contrôles techniques aux cadres de référence et préparer des preuves compréhensibles pour les auditeurs.",
    icon: Scale,
    items: ["ISO 27001", "NIST CSF", "CIS Controls et exigences assureurs"],
  },
  {
    title: "Assurance continue",
    description:
      "Mesurer l’efficacité des contrôles, suivre la remédiation et maintenir la posture au-delà d’un audit ponctuel.",
    icon: ShieldCheck,
    items: ["Tests de contrôles", "Tableaux de bord", "Amélioration continue"],
  },
];

interface Project {
  title: string;
  category: string;
  summary: string;
  challenge: string;
  actions: string[];
  outcomes: string[];
  tools: string[];
  icon: LucideIcon;
  source?: string;
}

const projects: Project[] = [
  {
    title: "Programme de gouvernance Microsoft 365",
    category: "GRC · Audit readiness · Microsoft Security",
    summary:
      "Structuration d’un programme de gouvernance et de durcissement pour un environnement Microsoft 365 hybride et multisite.",
    challenge:
      "Prioriser un grand volume de recommandations, clarifier la propriété des contrôles et produire des preuves exploitables par la direction et les auditeurs.",
    actions: [
      "Établissement d’une baseline et d’une feuille de route fondée sur le risque.",
      "Gouvernance des identités, MFA, Conditional Access, PIM, Defender et LAPS.",
      "Suivi mensuel des écarts, responsables, échéances et indicateurs exécutifs.",
    ],
    outcomes: [
      "Microsoft Secure Score amélioré de 33 % à 83 %.",
      "Audit Microsoft 365 réalisé avec succès par un cabinet externe.",
      "Plus de 40 applications intégrées au SSO et environ 700 appareils couverts par des contrôles renforcés.",
    ],
    tools: ["Entra ID", "Microsoft Defender XDR", "Intune", "PIM", "Secure Score"],
    icon: TrendingUp,
  },
  {
    title: "Gouvernance IAM et cycle Joiner–Mover–Leaver",
    category: "IAM · Zero Trust · Gouvernance des accès",
    summary:
      "Réduction du risque d’accès résiduel par la centralisation des identités et l’automatisation de l’approvisionnement et du retrait des accès.",
    challenge:
      "Des applications SaaS gérées séparément créaient des délais d’offboarding et des risques de sessions encore actives après le départ d’un employé.",
    actions: [
      "Centralisation des accès via Entra ID avec SAML et SCIM.",
      "Mise en place de MFA, Conditional Access, PIM et principes du moindre privilège.",
      "Alignement du processus RH, des propriétaires d’applications et des contrôles de revue d’accès.",
    ],
    outcomes: [
      "Révocation d’accès ramenée à quelques minutes sur le périmètre automatisé.",
      "Diminution des tâches manuelles et amélioration de la traçabilité des mouvements d’utilisateurs.",
    ],
    tools: ["Entra ID", "SAML", "SCIM", "Conditional Access", "PIM"],
    icon: Fingerprint,
    source:
      "https://www.linkedin.com/posts/wassim-bizid_iam-cybersecurity-sso-activity-7459691983633076224-Jla4",
  },
  {
    title: "Programme de gestion des vulnérabilités",
    category: "Risk management · Vulnérabilités · Remédiation",
    summary:
      "Création d’un cycle récurrent reliant inventaire, scan, validation, priorisation métier, remédiation et reddition de comptes.",
    challenge:
      "Passer d’une liste technique de vulnérabilités à un programme où chaque actif, exposition et action possède un propriétaire et une échéance.",
    actions: [
      "Déploiement de scans récurrents OpenVAS et validation des résultats à risque élevé.",
      "Priorisation selon l’exploitabilité, l’exposition Internet, la criticité métier et les contrôles compensatoires.",
      "Assignation des remédiations, suivi des exceptions et mesure du risque résiduel.",
    ],
    outcomes: [
      "Cycle de remédiation structuré et reproductible pour les équipes systèmes et réseau.",
      "Visibilité renforcée sur les actifs, versions, propriétaires et dépendances exposées.",
    ],
    tools: ["OpenVAS", "Defender Vulnerability Management", "NinjaOne", "Jira", "Meraki"],
    icon: Network,
    source:
      "https://www.linkedin.com/posts/wassim-bizid_cybersecurity-secops-vulnerabilitymanagement-activity-7461269048153010176-QEqj",
  },
  {
    title: "Risque tiers et réponse supply chain",
    category: "Third-party risk · Incident governance · Résilience",
    summary:
      "Encadrement du risque créé par un partenaire compromis et renforcement des mécanismes de validation des demandes sensibles.",
    challenge:
      "Limiter la propagation d’un incident fournisseur vers les employés, la finance et les opérations sans interrompre inutilement les échanges d’affaires.",
    actions: [
      "Coordination des parties prenantes internes, du fournisseur et des spécialistes externes.",
      "Communication ciblée, validation hors bande et règles d’escalade pour les demandes inhabituelles.",
      "Revue des dépendances, accès, échanges de fichiers et contrôles compensatoires.",
    ],
    outcomes: [
      "Réduction du risque de fraude et de compromission secondaire.",
      "Formalisation d’un modèle de réponse réutilisable pour les incidents de partenaires.",
    ],
    tools: ["Third-party risk", "Incident response", "M365", "Defender", "Awareness"],
    icon: KeyRound,
  },
  {
    title: "Gouvernance du risque humain",
    category: "Awareness · Phishing · Mesure du comportement",
    summary:
      "Programme bilingue de sensibilisation et de simulations de phishing adapté aux réalités opérationnelles de plusieurs sites.",
    challenge:
      "Faire évoluer les comportements sans créer de fatigue, tout en donnant à la direction des indicateurs utiles et actionnables.",
    actions: [
      "Campagnes progressives en français et en anglais avec scénarios réalistes.",
      "Segmentation des audiences, suivi des comportements à risque et formation ciblée.",
      "Communication continue sur les fraudes, partenaires compromis et méthodes de validation.",
    ],
    outcomes: [
      "Programme étendu à plus de 450 employés.",
      "Meilleure visibilité sur les comportements à risque et les besoins de coaching ciblé.",
    ],
    tools: ["MetaCompliance", "Phishing simulations", "Reporting", "Microsoft 365"],
    icon: Users,
  },
  {
    title: "SOC augmenté par l’IA et gouverné par l’humain",
    category: "AI governance · SecOps · Security automation",
    summary:
      "Conception d’une interface unifiée reliant les outils de sécurité à des agents IA via des serveurs MCP spécialisés.",
    challenge:
      "Réduire la fragmentation entre les consoles tout en conservant des limites d’autorisation, une validation humaine et une traçabilité complète.",
    actions: [
      "Développement de sept serveurs MCP pour exposer uniquement les opérations autorisées.",
      "Orchestration de Defender, Microsoft 365, Meraki, NinjaOne, Kali, Jira et PRTG.",
      "Définition de garde-fous, séparation lecture/écriture et approbation humaine des actions sensibles.",
    ],
    outcomes: [
      "Réduction du changement de contexte pour une équipe de sept personnes.",
      "Investigations accélérées sans déléguer les décisions de risque à l’IA.",
    ],
    tools: ["MCP", "Claude Code", "Defender XDR", "Meraki", "NinjaOne", "Jira"],
    icon: Bot,
    source:
      "https://www.linkedin.com/posts/wassim-bizid_cybersecurity-ai-mcp-activity-7456818538046111744-oNdC",
  },
];

const credentials = [
  { name: "CISSP", issuer: "ISC2", focus: "Leadership et architecture de sécurité" },
  { name: "CISM", issuer: "ISACA", focus: "Gouvernance, risque et programme cyber" },
  { name: "Azure Security Engineer", issuer: "Microsoft", focus: "Sécurité Azure et identité" },
  { name: "ITIL Foundation", issuer: "EXIN", focus: "Gestion et gouvernance des services TI" },
  { name: "RHCSA", issuer: "Red Hat", focus: "Administration et sécurité Linux" },
  { name: "MCSA Cloud Platform", issuer: "Microsoft", focus: "Infrastructure et plateforme cloud" },
  { name: "Mini-MBA", issuer: "McGill — Desautels", focus: "Leadership, stratégie et affaires" },
] as const;

const githubRoadmap = [
  {
    title: "M365 GRC Assessment Framework",
    description: "Grille d’évaluation, niveaux de maturité, preuves attendues et plan de remédiation priorisé.",
  },
  {
    title: "Cyber Risk Register Starter Kit",
    description: "Modèle de registre des risques, critères d’impact, appétit au risque et suivi des plans de traitement.",
  },
  {
    title: "Third-Party Cyber Risk Pack",
    description: "Questionnaire fournisseur, matrice de criticité, clauses minimales et playbook d’incident tiers.",
  },
  {
    title: "AI Agent Security Governance Checklist",
    description: "Contrôles d’identité non humaine, mémoire, autonomie, données, journalisation et approbation humaine.",
  },
] as const;

const publicSources = [
  {
    label: "Profil professionnel LinkedIn",
    href: linkedInUrl,
  },
  {
    label: "SOC augmenté par sept serveurs MCP",
    href: "https://www.linkedin.com/posts/wassim-bizid_cybersecurity-ai-mcp-activity-7456818538046111744-oNdC",
  },
  {
    label: "Gouvernance IAM et offboarding par SSO",
    href: "https://www.linkedin.com/posts/wassim-bizid_iam-cybersecurity-sso-activity-7459691983633076224-Jla4",
  },
  {
    label: "Gouvernance des données avant l’adoption de l’IA",
    href: "https://www.linkedin.com/posts/wassim-bizid_cybersecurity-artificialintelligence-ai-activity-7470606489867694080-2uQX",
  },
  {
    label: "Évaluation adversariale d’une solution de sécurité IA",
    href: "https://www.linkedin.com/posts/wassim-bizid_gisecglobal-gisec2026-gisecdubai-activity-7506328983148408832-Kgf1",
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
      <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#7a5f16]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <span className="mt-5 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
      {description && (
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_20px_55px_-38px_rgba(28,23,18,0.35)]">
      <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
        <div className="relative overflow-hidden bg-[#11100e] p-7 text-white sm:p-9">
          <div
            className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(212,175,55,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.12)_1px,transparent_1px)] [background-size:36px_36px]"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-2xl border border-[#efd878]/25 bg-[#efd878]/10 text-[#efd878]">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[#efd878]">
                PROJET {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#efd878]">
              {project.category}
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/65">{project.summary}</p>
          </div>
        </div>

        <div className="p-7 sm:p-9">
          <div className="grid gap-7 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7a5f16]">
                Enjeu
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {project.challenge}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7a5f16]">
                Actions clés
              </p>
              <ul className="mt-3 space-y-2.5">
                {project.actions.map((action) => (
                  <li key={action} className="flex gap-2.5 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#7a5f16]" aria-hidden="true" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-primary/25 bg-primary/[0.07] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7a5f16]">
              Résultats et valeur
            </p>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2.5 text-sm leading-6 text-foreground/80">
                  <TrendingUp className="mt-1 size-4 shrink-0 text-[#7a5f16]" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-muted/55 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tool}
              </span>
            ))}
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-[#7a5f16] transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Publication associée
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PrivatePortfolioPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate overflow-hidden bg-[#0a0a0c] text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(212,175,55,0.28),transparent_32%),radial-gradient(circle_at_82%_40%,rgba(156,31,31,0.2),transparent_36%)]" />
        <div
          className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(212,175,55,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.08)_1px,transparent_1px)] [background-size:52px_52px]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 pb-20 pt-7 sm:px-6 sm:pb-28 lg:px-8">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl border border-[#efd878]/30 bg-[#efd878]/10 text-[#efd878]">
                <LockKeyhole className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Portfolio professionnel</p>
                <p className="text-xs text-white/50">Accès non répertorié · partage par lien</p>
              </div>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">
              Version initiale · Octobre 2026
            </p>
          </div>

          <div className="grid items-center gap-12 pt-16 lg:grid-cols-[1.32fr_0.68fr] lg:pt-24">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[#efd878]/30 bg-[#efd878]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#efd878]">
                  Cybersecurity Leadership
                </span>
                <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                  GRC
                </span>
                <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                  AI Security
                </span>
              </div>

              <p className="mt-8 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#efd878]">
                Wassim Bizid · MBA · CISSP · CISM
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.06] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
                Gouverner le risque.
                <span className="block bg-gradient-to-r from-[#efd878] via-[#d4af37] to-[#b68d24] bg-clip-text text-transparent">
                  Transformer la sécurité.
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
                Leader trilingue en cybersécurité avec une expérience à l’intersection de la gouvernance,
                du risque, de la conformité, des opérations de sécurité et de l’automatisation par l’IA.
                Mon approche relie les contrôles techniques aux priorités d’affaires, aux audits et aux
                décisions exécutives.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#efd878] px-5 py-3 text-sm font-bold text-[#171204] transition-colors hover:bg-[#f5e4a7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efd878] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c]"
                >
                  Consulter mon profil LinkedIn
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efd878]"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-[#efd878]" aria-hidden="true" />
                  Montréal · Dubai · GCC
                </span>
                <span className="inline-flex items-center gap-2">
                  <Languages className="size-4 text-[#efd878]" aria-hidden="true" />
                  Français · Arabe · Anglais
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe2 className="size-4 text-[#efd878]" aria-hidden="true" />
                  Canada · États-Unis · Moyen-Orient
                </span>
              </div>
            </div>

            <aside className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#efd878]/25 bg-white/[0.07] p-7 shadow-[0_30px_90px_-35px_rgba(212,175,55,0.45)] backdrop-blur-xl sm:p-9">
                <div className="absolute -right-16 -top-16 size-52 rounded-full bg-[#d4af37]/15 blur-3xl" aria-hidden="true" />
                <div className="relative flex items-start justify-between gap-5">
                  <div className="flex size-24 items-center justify-center rounded-[1.75rem] border border-[#efd878]/35 bg-[#efd878]/10 font-mono text-4xl font-black text-[#efd878] shadow-inner">
                    WB
                  </div>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
                    Disponible
                  </span>
                </div>
                <div className="relative mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#efd878]">
                    Positionnement
                  </p>
                  <p className="mt-3 text-2xl font-bold leading-tight text-white">
                    Cybersecurity & GRC Leader
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Gouvernance pragmatique, architecture de sécurité, IAM, cyber-risque, conformité et
                    transformation des opérations.
                  </p>
                </div>
                <div className="relative mt-7 grid grid-cols-2 gap-3">
                  {[
                    ["Stratégie", "GRC"],
                    ["Identité", "Zero Trust"],
                    ["Opérations", "SecOps"],
                    ["Innovation", "AI Security"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-[11px] uppercase tracking-[0.12em] text-white/40">{label}</p>
                      <p className="mt-1.5 text-sm font-bold text-white/85">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 pb-16 sm:-mt-10 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-border bg-white shadow-[0_28px_70px_-38px_rgba(28,23,18,0.38)] sm:grid-cols-2 lg:grid-cols-3">
            {impactMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`p-6 sm:p-7 ${index % 3 !== 2 ? "lg:border-r lg:border-border" : ""} ${index < 3 ? "border-b border-border" : ""}`}
              >
                <p className="text-3xl font-black tracking-tight text-[#7a5f16]">{metric.value}</p>
                <p className="mt-1 text-sm font-bold text-foreground">{metric.label}</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-labelledby="profile-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <SectionTitle eyebrow="Profil" title="Qui je suis" />
          <div className="space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Je suis un leader en cybersécurité possédant plus de quinze ans d’expérience en TI et plus
              de dix ans en sécurité. Mon parcours couvre l’infrastructure, le cloud, l’identité, les
              opérations, l’architecture et la gouvernance — un avantage important pour évaluer un risque
              dans son contexte réel plutôt que comme un simple écart de conformité.
            </p>
            <p>
              J’ai dirigé une équipe multidisciplinaire dans un environnement multisite au Canada et aux
              États-Unis, tout en soutenant des initiatives au Moyen-Orient. Je traduis les exigences des
              cadres de référence en actions réalisables, puis je mesure leur adoption, leur efficacité et
              leur contribution à la résilience de l’organisation.
            </p>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {[
                { icon: BriefcaseBusiness, label: "Leadership", text: "Stratégie, budget, feuille de route et équipe" },
                { icon: FileCheck2, label: "Assurance", text: "Audit readiness, preuves et efficacité des contrôles" },
                { icon: Sparkles, label: "Innovation", text: "Automatisation sécurisée et gouvernance de l’IA" },
              ].map(({ icon: Icon, label, text }) => (
                <div key={label} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <Icon className="size-5 text-[#7a5f16]" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-foreground">{label}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#efeade]/60 py-20 sm:py-28" aria-labelledby="grc-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Modèle de pratique"
            title="La GRC comme système de décision"
            description="Ma démarche relie quatre capacités complémentaires. L’objectif n’est pas de produire plus de documents, mais de donner aux décideurs une vision fiable du risque et aux équipes un chemin clair vers la remédiation."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {grcPillars.map(({ title, description, icon: Icon, items }, index) => (
              <article key={title} className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[#171513] text-[#efd878]">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs font-bold text-[#7a5f16]">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                <ul className="mt-auto space-y-2 border-t border-border pt-5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-semibold text-foreground/70">
                      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="projects-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Études de cas"
            title="Projets sélectionnés"
            description="Les exemples suivants présentent le problème, la méthode et la valeur produite. Les noms de clients, architectures détaillées et données opérationnelles ont été volontairement anonymisés."
          />
          <div className="mt-12 space-y-7">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#11100e] py-20 text-white sm:py-28" aria-labelledby="credentials-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#efd878]">
                Formation et certifications
              </p>
              <h2 id="credentials-title" className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Une base technique, managériale et GRC
              </h2>
              <span className="mt-5 block h-1 w-14 rounded-full bg-[#d4af37]" aria-hidden="true" />
              <p className="mt-5 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                Des certifications de gouvernance et d’architecture, complétées par une formation en
                leadership et en stratégie d’affaires à McGill.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((credential, index) => (
                <article
                  key={credential.name}
                  className={`rounded-2xl border border-white/10 bg-white/[0.05] p-5 ${index === credentials.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#efd878]/25 bg-[#efd878]/10 text-[#efd878]">
                      {index === credentials.length - 1 ? (
                        <GraduationCap className="size-5" aria-hidden="true" />
                      ) : (
                        <BadgeCheck className="size-5" aria-hidden="true" />
                      )}
                    </span>
                    <div>
                      <h3 className="font-bold text-white">{credential.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#efd878]">
                        {credential.issuer}
                      </p>
                      <p className="mt-2 text-sm leading-5 text-white/55">{credential.focus}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="github-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[#171513] text-[#efd878]">
                <Code2 className="size-6" aria-hidden="true" />
              </span>
              <h2 id="github-title" className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Prochainement sur GitHub
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Ces livrables seront progressivement publiés sous forme de modèles réutilisables, sans
                données clients ni informations confidentielles.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {githubRoadmap.map((item) => (
                <article key={item.title} className="group rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <Layers3 className="size-5 text-[#7a5f16]" aria-hidden="true" />
                    <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                      En préparation
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[#efeade]/60 py-20 sm:py-24" aria-labelledby="sources-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <span className="flex size-12 items-center justify-center rounded-2xl border border-border bg-white text-[#7a5f16] shadow-sm">
                <ExternalLink className="size-5" aria-hidden="true" />
              </span>
              <h2 id="sources-title" className="mt-6 text-2xl font-extrabold text-foreground sm:text-3xl">
                Références publiques
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Profil et publications professionnelles utilisés pour documenter cette première version.
              </p>
            </div>
            <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              {publicSources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                  >
                    <span>{source.label}</span>
                    <ArrowUpRight className="size-4 shrink-0 text-[#7a5f16]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0c] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#efd878]">
                Échange professionnel
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Parlons gouvernance, cyber-risque et transformation sécurisée.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#efd878] px-5 py-3 text-sm font-bold text-[#171204] transition-colors hover:bg-[#f5e4a7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efd878]"
              >
                LinkedIn
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efd878]"
              >
                Me contacter
                <Mail className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5 pt-8 text-xs leading-5 text-white/40 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <p className="font-semibold text-white/60">Confidentialité et accès</p>
              <p className="mt-1.5">
                Cette page n’est liée à aucun menu, n’apparaît pas dans le sitemap et demande aux moteurs
                de recherche de ne pas l’indexer. Elle demeure toutefois accessible à toute personne qui
                obtient ou partage son URL; il ne s’agit pas d’une authentification par mot de passe.
              </p>
            </div>
            <p className="shrink-0 sm:text-right">
              © 2026 Wassim Bizid
              <br />
              Bibliographie professionnelle
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
