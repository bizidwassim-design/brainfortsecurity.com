import type { Dictionary } from "./index";

/** Dictionnaire français. */
export const fr: Dictionary = {
  meta: {
    title: "BrainFort Sécurité — Conseil en cybersécurité au Canada",
    description:
      "Firme canadienne de conseil en cybersécurité à Montréal, au service du Canada et du Moyen-Orient — sécurité des identités, Zéro Confiance, sécurité Microsoft et évaluations propulsées par l'IA.",
  },
  a11y: {
    skipToContent: "Passer au contenu principal",
  },
  nav: {
    mainLabel: "Navigation principale",
    mobileLabel: "Navigation mobile",
    home: "Accueil",
    services: "Services",
    packages: "Forfaits",
    cost: "Tarification",
    freeGuide: "Simulateur d'assurance cyber",
    about: "À propos",
    contact: "Contact",
    cta: "Réserver une consultation",
    openMenu: "Ouvrir le menu de navigation",
    closeMenu: "Fermer le menu de navigation",
    languageLabel: "Langue",
  },
  hero: {
    badge: "La cybersécurité senior pour les entreprises en croissance",
    title: "La cybersécurité des PME, avec l'attention que vous méritez",
    highlight: "l'attention que vous méritez",
    subtitle:
      "Audits, sécurité Microsoft 365, Zéro Confiance et mise en œuvre concrète, dirigés par des consultants seniors au Canada et au Moyen-Orient.",
    primaryCta: "Demander une consultation",
    secondaryCta: "Voir les tarifs",
    visualTitle: "Une protection conçue pour votre entreprise",
    visualSubtitle: "Expertise senior · feuilles de route concrètes",
    trustSignals: ["Montréal", "Dubaï", "Riyad", "Consultants seniors"],
    features: [
      {
        title: "Prêt pour le Zéro Confiance",
        description:
          "Déployez une architecture Zéro Confiance pour réduire les risques et renforcer la résilience.",
      },
      {
        title: "Sécurité axée sur l'identité",
        description:
          "Sécurisez chaque identité de votre écosystème avec des contrôles adaptatifs et intelligents.",
      },
      {
        title: "Évaluations propulsées par l'IA",
        description:
          "Exploitez l'analyse par IA pour détecter les menaces plus vite, réduire les délais de livraison et rehausser la qualité de chaque livrable.",
      },
      {
        title: "Fièrement canadienne",
        description:
          "Au service des organisations du Canada et du Moyen-Orient.",
      },
      {
        title: "Sécurité de calibre entreprise",
        description:
          "Alignée sur les meilleures pratiques et les normes de conformité mondiales.",
      },
      {
        title: "Équipe experte",
        description:
          "Des experts certifiés en cybersécurité dévoués à votre sécurité et à votre succès.",
      },
    ],
  },
  servicesOverview: {
    eyebrow: "Ce que nous faisons",
    title: "Des services de sécurité conçus pour les risques réels",
    subtitle:
      "Un conseil pratique et neutre vis-à-vis des fournisseurs, qui renforce votre environnement sans ralentir vos activités.",
    viewAll: "Voir tous les services",
    learnMore: "Découvrir ce service",
  },
  process: {
    eyebrow: "Notre méthode",
    title: "De l'incertitude à un plan de sécurité concret",
    subtitle: "Un accompagnement ciblé en quatre étapes pour les PME en croissance qui recherchent de la clarté, du rythme et une attention senior.",
    items: [
      { title: "Diagnostiquer", description: "Nous examinons vos identités, votre nuage, Microsoft 365, vos contrôles et vos priorités d'affaires.", deliverable: "Portrait des risques et de la maturité" },
      { title: "Prioriser", description: "Nous classons les constats selon leur impact, leur urgence, l'effort requis et votre budget.", deliverable: "Feuille de route de remédiation priorisée" },
      { title: "Mettre en œuvre", description: "Nos consultants seniors configurent, renforcent, documentent et valident les contrôles convenus.", deliverable: "Contrôles implantés et documentés" },
      { title: "Suivre", description: "Nous évaluons les progrès, les nouveaux risques et les prochaines actions à forte valeur.", deliverable: "Progrès mensuels et prochaines actions" },
    ],
  },
  why: {
    eyebrow: "Pourquoi BrainFort",
    title: "Un partenaire qui pense comme un attaquant et planifie comme un architecte",
    items: [
      {
        title: "Expertise de haut niveau",
        description:
          "Chaque mandat est mené par des conseillers principaux possédant une expertise approfondie en sécurité Microsoft, infonuagique et des identités — aucun transfert à des juniors.",
      },
      {
        title: "IA agentique, connectée à vos plateformes",
        description:
          "Notre IA agentique se connecte directement à vos environnements Microsoft 365, infonuagiques et réseau via des serveurs MCP sécurisés — elle automatise la découverte et l'analyse pour faire avancer chaque projet dans les meilleurs délais.",
      },
      {
        title: "Feuilles de route actionnables",
        description:
          "Nos constats s'accompagnent de plans de remédiation priorisés et adaptés à votre budget, que votre équipe peut réellement exécuter.",
      },
      {
        title: "Présence Canada–Moyen-Orient",
        description:
          "Fièrement canadienne et établie à Montréal, avec une présence active aux Émirats arabes unis et en Arabie saoudite — nous unissons la rigueur nord-américaine et l'élan de la région du Golfe.",
      },
    ],
  },
  architecture: {
    eyebrow: "Architecture d'IA agentique",
    title: "Notre approche",
    subtitle:
      "Une seule IA agentique, connectée via des serveurs MCP sécurisés à chaque système qu'elle doit voir — votre infonuagique, votre tenant Microsoft 365, votre couche de virtualisation, votre supervision et votre plateforme GRC.",
    hubLine1: "BrainFort",
    hubLine2: "IA agentique",
    mcpLabel: "MCP",
    nodes: [
      "Microsoft Azure",
      "AWS",
      "Microsoft 365",
      "Hyper-V",
      "VMware",
      "Supervision et SIEM",
      "Plateforme GRC",
    ],
  },
  stats: {
    eyebrow: "Un impact qui se cumule",
    title: "Des résultats de sécurité mesurables",
    items: [
      { value: "15", label: "Années d'expertise combinée en sécurité" },
      {
        value: "95 %",
        label: "Des brèches commencent par l'identité — nous aussi",
      },
      {
        value: "4x",
        label: "Des évaluations plus rapides grâce à l'analyse assistée par l'IA",
      },
      {
        value: "3",
        label: "Régions desservies — Canada, ÉAU, Arabie saoudite",
      },
    ],
  },
  cyberNews: {
    eyebrow: "Baromètre cyber mondial",
    title: "Les chiffres qui redéfinissent la cybersécurité",
    subtitle: "Une lecture concise des plus récentes données mondiales sur les compromissions — et de leur portée pour les PME en croissance.",
    locale: "fr-CA",
    updated: "Flux actualisé le",
    loading: "Connexion au flux en direct…",
    items: [
      { value: "total", label: "Vulnérabilités exploitées connues", detail: "Vulnérabilités confirmées comme exploitées lors d'attaques réelles et recensées dans le catalogue actif.", source: "Données CISA KEV en direct", href: "https://github.com/cisagov/kev-data" },
      { value: "recent", label: "Nouvelles entrées sur 30 jours", detail: "Vulnérabilités récemment ajoutées qui demandent une analyse et une remédiation prioritaires.", source: "Données CISA KEV en direct", href: "https://github.com/cisagov/kev-data" },
      { value: "ransomware", label: "Liées à des campagnes de rançongiciel", detail: "Vulnérabilités dont l'utilisation est confirmée dans des campagnes de rançongiciel connues.", source: "Données CISA KEV en direct", href: "https://github.com/cisagov/kev-data" },
      { value: "vendors", label: "Fournisseurs technologiques touchés", detail: "Fournisseurs et projets distincts représentés dans le catalogue actuel des vulnérabilités exploitées.", source: "Données CISA KEV en direct", href: "https://github.com/cisagov/kev-data" },
    ],
    disclaimer: "Les chiffres sont calculés dans votre navigateur à partir du miroir GitHub officiel de la CISA, synchronisé avec le catalogue KEV à chaque mise à jour.",
  },
  activeThreats: {
    locale: "fr-CA",
    eyebrow: "Surveillance des menaces actives",
    title: "Les signaux observés dans le paysage mondial des menaces",
    subtitle: "Des indicateurs agrégés et fréquemment synchronisés provenant de réseaux indépendants de renseignement sur les menaces. Aucun indicateur malveillant n'est exposé sur cette page.",
    synced: "Données synchronisées le",
    connecting: "Chargement des données synchronisées…",
    unavailable: "Dernière synchronisation temporairement indisponible",
    metrics: [
      { label: "URL malveillantes actuellement en ligne", detail: "URL de distribution de charges et de logiciels malveillants observées par URLhaus." },
      { label: "URL malveillantes signalées en 24 h", detail: "Nouvelles observations URLhaus durant la dernière fenêtre mobile de 24 heures." },
      { label: "Indicateurs de logiciels malveillants récents", detail: "Indicateurs présents dans la plus récente exportation ThreatFox." },
      { label: "Indicateurs de commande et contrôle", detail: "Indicateurs récents classés comme infrastructure de commande et contrôle de botnets." },
    ],
    topTitle: "Familles de logiciels malveillants les plus observées",
    sourcesTitle: "Sources de renseignement",
    sourcesBody: "Le fichier synchronisé est produit automatiquement à partir de flux communautaires publics toutes les 30 minutes.",
    sources: [{ name: "URLhaus", href: "https://urlhaus.abuse.ch/" }, { name: "ThreatFox", href: "https://threatfox.abuse.ch/" }],
    disclaimer: "Ces décomptes agrégés offrent une lecture de la situation, sans mesurer l'ensemble de la cybercriminalité mondiale. La disponibilité et les méthodes de classification des sources peuvent influencer les totaux.",
  },
  industries: {
    eyebrow: "Qui nous servons",
    title: "La confiance des industries réglementées et à haut risque",
    subtitle:
      "De Montréal à Dubaï et Riyad — de l'usine au conseil d'administration — nous adaptons les programmes de sécurité à la réalité de votre industrie.",
    items: [
      {
        title: "PME",
        description:
          "Une sécurité de calibre entreprise adaptée aux budgets et aux équipes des PME.",
      },
      {
        title: "Fabrication",
        description:
          "Protéger les TO, les TI et les chaînes d'approvisionnement contre les interruptions.",
      },
      {
        title: "Santé",
        description:
          "Protéger les données des patients et la continuité clinique.",
      },
      {
        title: "Finance",
        description:
          "Répondre aux exigences réglementaires tout en restant agile.",
      },
      {
        title: "Municipalités",
        description:
          "Défendre les services publics et la confiance des citoyens.",
      },
    ],
  },
  whatsapp: {
    label: "Discuter sur WhatsApp",
    officeLabel: "Discuter sur WhatsApp — {city}",
  },
  offices: {
    eyebrow: "Où nous sommes",
    title: "Trois sites. Une seule norme de sécurité.",
    subtitle:
      "Un siège social canadien et une présence active dans le Golfe — une collaboration à travers les fuseaux horaires, une prestation sans frontières.",
    items: [
      {
        flag: "ca",
        city: "Montréal",
        label: "Montréal, Canada",
        sublabel: "Siège social",
      },
      {
        flag: "ae",
        city: "Dubaï",
        label: "Émirats arabes unis",
        sublabel: "Bureau régional",
      },
      {
        flag: "sa",
        city: "Riyad",
        label: "Arabie saoudite",
        sublabel: "Bureau régional",
      },
    ],
  },
  compliance: {
    eyebrow: "Alignement réglementaire",
    title: "Alignés sur les cadres nationaux de cybersécurité",
    subtitle:
      "Nos méthodologies s'appuient sur les lignes directrices des autorités nationales de cybersécurité des régions que nous servons.",
    disclaimer:
      "Alignement indépendant sur des cadres publiés — ne constitue ni une approbation, ni une certification, ni une affiliation.",
    items: [
      {
        name: "Centre canadien pour la cybersécurité (CCC)",
        country: "Canada",
        href: "https://www.cyber.gc.ca/fr/",
      },
      {
        name: "Cyber Security Council",
        country: "Émirats arabes unis",
        href: "https://csc.gov.ae/",
      },
      {
        name: "National Cybersecurity Authority (NCA — ECC)",
        country: "Arabie saoudite",
        href: "https://nca.gov.sa/en/",
      },
    ],
  },
  testimonials: {
    eyebrow: "Témoignages",
    title: "Ce que disent nos clients",
    subtitle: "Des résultats concrets pour les organisations que nous protégeons.",
    items: [
      {
        quote:
          "L'évaluation des identités de BrainFort nous a donné une feuille de route claire et priorisée. En un trimestre, nous avons comblé nos lacunes les plus critiques.",
        author: "Directeur TI",
        company: "Client du secteur manufacturier",
      },
      {
        quote:
          "Ils ont traduit des constats de sécurité complexes dans un langage sur lequel notre direction pouvait agir immédiatement.",
        author: "DPI",
        company: "Client du secteur de la santé",
      },
      {
        quote:
          "La feuille de route Zéro Confiance était pragmatique et progressive — pas de table rase, seulement des progrès constants et mesurables.",
        author: "Responsable de la sécurité",
        company: "Client municipal",
      },
    ],
  },
  contactCta: {
    title: "Prêt à renforcer votre posture de sécurité?",
    subtitle:
      "Réservez une consultation sans engagement et obtenez un portrait clair de votre situation — et des prochaines étapes.",
    button: "Contactez-nous",
  },
  services: [
    {
      id: "identity-assessment",
      title: "Évaluation des identités",
      description:
        "Examen approfondi de votre infrastructure d'identités — comptes, privilèges, couverture MFA et accès conditionnel — pour fermer le premier vecteur d'attaque.",
      outcomes: [
        "Analyse des écarts d'accès privilégiés et de MFA",
        "Revue des politiques d'accès conditionnel",
        "Feuille de route priorisée de durcissement des identités",
      ],
    },
    {
      id: "zero-trust-architecture",
      title: "Architecture Zéro Confiance",
      description:
        "Stratégie et conception Zéro Confiance pragmatiques — vérifier explicitement, appliquer le moindre privilège, présumer la brèche — par étapes adaptées à votre budget et à vos opérations.",
      outcomes: [
        "Évaluation de maturité Zéro Confiance",
        "Architecture de référence et état cible",
        "Feuille de route d'adoption progressive",
      ],
    },
    {
      id: "microsoft-365-security",
      title: "Sécurité Microsoft 365",
      description:
        "Durcir Exchange Online, SharePoint, Teams et Defender pour Office 365 contre l'hameçonnage, les fuites de données et la prise de contrôle de comptes.",
      outcomes: [
        "Plan d'amélioration du niveau de sécurité (Secure Score)",
        "Optimisation des politiques de protection contre les menaces",
        "Base de prévention des pertes de données",
      ],
    },
    {
      id: "entra-id-security",
      title: "Sécurité Entra ID",
      description:
        "Revue spécialisée de Microsoft Entra ID — inscriptions d'applications, identités de charge de travail, PIM et synchronisation hybride — pour éliminer les risques de privilèges silencieux.",
      outcomes: [
        "Revue des risques liés aux applications et aux consentements",
        "Conception de la gestion des identités privilégiées (PIM)",
        "Plan de durcissement de l'identité hybride",
      ],
    },
    {
      id: "cloud-security-assessment",
      title: "Évaluation de la sécurité infonuagique",
      description:
        "Revue de configuration et d'architecture pour Azure et les environnements multinuages — posture, réseau, chiffrement et gouvernance.",
      outcomes: [
        "Rapport sur la posture et les mauvaises configurations",
        "Revue des zones d'atterrissage et de la gouvernance",
        "Plan de remédiation tenant compte des coûts",
      ],
    },
    {
      id: "cybersecurity-audit",
      title: "Audit de cybersécurité",
      description:
        "Audit global des contrôles, politiques et pratiques aligné sur des cadres reconnus — une base claire pour les conseils d'administration, assureurs et régulateurs.",
      outcomes: [
        "Évaluation des contrôles alignée sur les cadres",
        "Rapport de risques prêt pour la direction",
        "Liste des écarts de conformité",
      ],
    },
    {
      id: "ai-security-advisory",
      title: "Conseil en sécurité de l'IA",
      description:
        "Adopter l'IA en toute sécurité et s'en servir pour se défendre — gouvernance de l'IA dans votre entreprise et automatisation de vos opérations de sécurité.",
      outcomes: [
        "Cadre de gouvernance et de risques d'utilisation de l'IA",
        "Cartographie des occasions d'automatisation de la sécurité",
        "Garde-fous de déploiement pour Copilot et les LLM",
      ],
    },
    {
      id: "vulnerability-assessment",
      title: "Évaluation des vulnérabilités",
      description:
        "Découverte systématique et classement par risque des vulnérabilités de votre infrastructure, de vos postes et de vos applications.",
      outcomes: [
        "Balayages de vulnérabilités internes et externes",
        "Constats classés par risque et mis en contexte",
        "Priorisation des correctifs et des mesures d'atténuation",
      ],
    },
    {
      id: "penetration-test-preparation",
      title: "Préparation aux tests d'intrusion",
      description:
        "Tirez le maximum de votre prochain test d'intrusion — définissez la bonne portée, corrigez l'évident d'abord et transformez les résultats en améliorations durables.",
      outcomes: [
        "Sprint de durcissement préalable au test",
        "Conseils de cadrage et de sélection du fournisseur",
        "Planification de la remédiation post-test",
      ],
    },
    {
      id: "security-architecture-review",
      title: "Revue d'architecture de sécurité",
      description:
        "Revue indépendante de votre architecture de sécurité — segmentation, défense en profondeur, couverture de surveillance et résilience dès la conception.",
      outcomes: [
        "Analyse des forces et des lacunes de l'architecture",
        "Plan d'amélioration de la défense en profondeur",
        "Cartographie de la couverture de surveillance et de détection",
      ],
    },
  ],
  catalog: {
    eyebrow: "Catalogue de services",
    title: "Le catalogue complet BrainFort",
    subtitle:
      "Cinquante-neuf services ciblés répartis en dix domaines — retenez-en un seul, ou laissez-nous assembler le programme dont votre organisation a besoin.",
    countLabel: "services",
    aiNote:
      "Efficacité propulsée par l'IA à toutes les phases — évaluations plus rapides, analyses plus fines, coûts maîtrisés.",
    categories: [
      {
        id: "governance",
        title: "Stratégie et gouvernance",
        description:
          "Donner la direction, mesurer le risque et piloter la sécurité au niveau exécutif.",
        items: [
          "Diagnostic de maturité en cybersécurité",
          "Analyse et évaluation des risques cyber",
          "Programme de gouvernance, risques et conformité (GRC)",
          "Élaboration d'une feuille de route de cybersécurité",
          "Responsable de la sécurité externalisé — vCISO",
          "Élaboration de politiques et procédures de sécurité",
          "Architecture et stratégie de cybersécurité",
          "Production de tableaux de bord et d'indicateurs de cybersécurité",
          "Accompagnement pour la souscription ou le renouvellement d'une assurance cyber",
          "Préparation pour l'obtention d'une couverture d'assurance cyber",
          "Évaluation des exigences de sécurité des clients et partenaires",
        ],
      },
      {
        id: "audits",
        title: "Audits techniques",
        description:
          "Des revues indépendantes et factuelles de vos environnements critiques.",
        items: [
          "Audit de cybersécurité",
          "Audit Microsoft 365",
          "Audit Active Directory",
          "Audit des infrastructures réseau",
          "Audit des pare-feu et VPN",
          "Audit des environnements infonuagiques",
          "Audit des réseaux Wi-Fi",
        ],
      },
      {
        id: "offensive",
        title: "Tests d'intrusion et vulnérabilités",
        description:
          "Trouver et corriger les faiblesses avant les attaquants.",
        items: [
          "Test d'intrusion externe",
          "Test d'intrusion interne",
          "Scan de vulnérabilités",
          "Analyse ponctuelle des vulnérabilités",
          "Gestion continue des vulnérabilités",
          "Remédiation des vulnérabilités",
          "Gestion des correctifs de sécurité",
          "Validation des correctifs appliqués",
        ],
      },
      {
        id: "protection",
        title: "Protection des systèmes et de la messagerie",
        description:
          "Durcir les outils sur lesquels votre entreprise fonctionne chaque jour.",
        items: [
          "Gestion des antivirus et EDR",
          "Durcissement du tenant Microsoft 365 (Exchange Online, Teams, SharePoint)",
          "Durcissement selon les benchmarks CIS",
          "Réduction de la surface d'attaque (alignée sur MITRE ATT&CK)",
          "Sécurité de la messagerie électronique",
          "Protection contre l'hameçonnage",
          "Automatisation des tâches de sécurité récurrentes",
        ],
      },
      {
        id: "identity",
        title: "Identités et accès",
        description: "Contrôler qui accède à quoi — partout.",
        items: [
          "Gestion des identités et des accès",
          "Déploiement de l'authentification multifacteur",
          "Mise en place de l'accès conditionnel",
          "Gestion des comptes privilégiés",
          "Révision périodique des accès",
          "Déploiement de l'authentification unique (SSO)",
        ],
      },
      {
        id: "resilience",
        title: "Résilience et continuité",
        description:
          "Être prêt à répondre, à récupérer et à poursuivre les activités.",
        items: [
          "Plan de réponse aux incidents",
          "Élaboration de playbooks de réponse aux incidents",
          "Gestion et réponse aux incidents",
          "Préparation aux incidents de cybersécurité",
          "Exercices de simulation de crise",
          "Plan de continuité des activités",
          "Plan de reprise après sinistre",
          "Audit et sécurisation des sauvegardes",
          "Tests de restauration des sauvegardes",
        ],
      },
      {
        id: "training",
        title: "Formation et sensibilisation",
        description:
          "Faire de vos équipes votre meilleure ligne de défense.",
        items: [
          "Formation et sensibilisation des employés",
          "Simulations d'hameçonnage",
          "Formation en cybersécurité pour les dirigeants",
          "Formation des administrateurs informatiques",
        ],
      },
      {
        id: "thirdparty",
        title: "Risques liés aux tiers",
        description:
          "Maîtriser le risque qui accompagne chaque fournisseur.",
        items: [
          "Évaluation des risques liés aux fournisseurs",
          "Évaluation de sécurité des tierces parties",
          "Élaboration d'un programme de gestion des fournisseurs",
        ],
      },
      {
        id: "cloud",
        title: "Infonuagique et Zéro Confiance",
        description: "Sécuriser l'infrastructure moderne dès la conception.",
        items: [
          "Sécurisation des environnements Azure, AWS et Google Cloud",
          "Mise en place d'une architecture Zero Trust",
        ],
      },
      {
        id: "intel",
        title: "Renseignement sur les menaces",
        description: "Savoir ce qui arrive avant que cela vous atteigne.",
        items: [
          "Veille sur les cybermenaces",
          "Surveillance du Web clandestin",
        ],
      },
    ],
  },
  packagesPage: {
    metaTitle: "Forfaits de cybersécurité",
    metaDescription:
      "Cyber Essential, Cyber Advanced et Cyber Premium — des forfaits de cybersécurité gérée pour PME et entreprises : audits, gestion des vulnérabilités, formation, vCISO et plus.",
    eyebrow: "Forfaits de services B2B",
    title: "Forfaits de cybersécurité",
    subtitle:
      "Des solutions adaptées aux PME et aux entreprises souhaitant renforcer leur sécurité, réduire leurs risques et améliorer leur résilience.",
    servicesTitle: "Services inclus",
    deliverablesTitle: "Livrables",
    frequencyTitle: "Fréquence",
    ctaLabel: "Demander une soumission",
    catalogue: {
      title: "Cybersécurité gérée pour les entreprises",
      body: "Obtenez le catalogue de services B2B complet — les trois niveaux de service, les couvertures et les cadences — dans un PDF imprimable.",
      button: "Télécharger le catalogue (PDF)",
      coverAlt:
        "Brochure du catalogue de services BrainFort Sécurité — Cybersécurité gérée pour les entreprises",
    },
    aiNote:
      "Efficacité propulsée par l'IA à toutes les phases — évaluations plus rapides, analyses plus fines, coûts maîtrisés.",
    recommendedBadge: "Le plus choisi",
    comparisonTitle: "Comparaison des forfaits",
    excludedNote:
      "Les audits de conformité, le SOC 24/7, le SIEM géré, le MDR, l'intervention d'urgence, la protection des données et la sécurité applicative/DevSecOps ne sont pas inclus dans ces forfaits.",
    packages: [
      {
        id: "essential",
        name: "Cyber Essential",
        tagline: "Protection fondamentale",
        audience:
          "Pour les petites entreprises souhaitant établir une base de sécurité solide.",
        includesNote: "",
        recommended: false,
        services: [
          "Diagnostic initial de maturité en cybersécurité",
          "Inventaire des actifs informatiques essentiels",
          "Analyse des risques prioritaires",
          "Audit de sécurité Microsoft 365",
          "Vérification des comptes administrateurs",
          "Vérification de l'authentification multifacteur",
          "Revue des règles d'accès conditionnel",
          "Analyse externe des vulnérabilités",
          "Audit de la sécurité de la messagerie",
          "Vérification de la configuration des antivirus et EDR",
          "Évaluation des sauvegardes",
          "Simulation d'hameçonnage annuelle",
          "Formation annuelle de sensibilisation des employés",
          "Élaboration des politiques de sécurité essentielles",
          "Rapport de recommandations prioritaires",
        ],
        deliverables: [
          "Rapport de maturité",
          "Registre des principaux risques",
          "Plan d'action priorisé",
          "Politiques essentielles de cybersécurité",
          "Rapport de sensibilisation",
          "Rapport annuel destiné à la direction",
        ],
        frequency: [
          "Diagnostic complet au démarrage",
          "Analyse des vulnérabilités tous les six mois",
          "Revue annuelle de la posture de sécurité",
          "Soutien-conseil selon les heures incluses",
        ],
      },
      {
        id: "advanced",
        name: "Cyber Advanced",
        tagline: "Sécurité renforcée",
        audience:
          "Pour les PME en croissance qui souhaitent une gestion continue de leur cybersécurité.",
        includesNote: "Tous les services de Cyber Essential, plus :",
        recommended: true,
        services: [
          "Gestion continue des vulnérabilités",
          "Analyses internes et externes trimestrielles",
          "Audit Active Directory",
          "Audit des infrastructures réseau",
          "Audit des pare-feu et VPN",
          "Audit des réseaux Wi-Fi",
          "Revue de la configuration infonuagique",
          "Gestion et suivi des correctifs de sécurité",
          "Validation des correctifs appliqués",
          "Révision périodique des comptes et des accès",
          "Revue des comptes privilégiés",
          "Renforcement de la sécurité Microsoft 365",
          "Optimisation des configurations antivirus et EDR",
          "Plan de réponse aux incidents",
          "Plan de continuité des activités",
          "Plan de reprise après sinistre",
          "Test annuel de restauration des sauvegardes",
          "Simulations d'hameçonnage trimestrielles",
          "Formation annuelle des employés",
          "Formation spécialisée pour les administrateurs",
          "Évaluation des fournisseurs critiques",
          "Tableau de bord trimestriel de cybersécurité",
        ],
        deliverables: [
          "Tableau de bord des vulnérabilités",
          "Rapports trimestriels",
          "Plan de réponse aux incidents",
          "Plan de continuité et de reprise",
          "Registre des accès privilégiés",
          "Rapport sur les fournisseurs critiques",
          "Feuille de route annuelle",
          "Présentation trimestrielle à la direction",
        ],
        frequency: [
          "Analyses de vulnérabilités trimestrielles",
          "Révision des accès tous les six mois",
          "Simulations d'hameçonnage trimestrielles",
          "Rencontre de suivi trimestrielle",
          "Mise à jour annuelle des plans et politiques",
        ],
      },
      {
        id: "premium",
        name: "Cyber Premium",
        tagline: "Accompagnement complet",
        audience:
          "Pour les entreprises ayant des environnements complexes, plusieurs sites ou des exigences de sécurité élevées.",
        includesNote: "Tous les services de Cyber Advanced, plus :",
        recommended: false,
        services: [
          "Service de responsable de la sécurité externalisé — vCISO",
          "Élaboration et suivi de la stratégie de cybersécurité",
          "Gestion du programme annuel de sécurité",
          "Analyse approfondie des risques",
          "Test d'intrusion externe annuel",
          "Test d'intrusion interne annuel",
          "Évaluation avancée d'Active Directory",
          "Revue approfondie des environnements Azure, AWS ou Google Cloud",
          "Conception d'une architecture Zero Trust",
          "Programme de gestion des identités et des accès",
          "Mise en place d'une gestion des accès privilégiés",
          "Révision trimestrielle des comptes privilégiés",
          "Gestion avancée des vulnérabilités",
          "Suivi mensuel de la remédiation",
          "Exercices de simulation de crise avec la direction",
          "Tests annuels de continuité et de reprise",
          "Programme complet de gestion des risques fournisseurs",
          "Veille personnalisée sur les cybermenaces",
          "Surveillance de l'exposition sur le Web clandestin",
          "Accompagnement pour l'assurance cyber",
          "Formation spécialisée des dirigeants",
          "Comité mensuel de cybersécurité",
          "Présentation périodique des risques à la direction",
        ],
        deliverables: [
          "Stratégie de cybersécurité",
          "Feuille de route pluriannuelle",
          "Registre consolidé des risques",
          "Rapports de tests d'intrusion",
          "Architecture cible Zero Trust",
          "Programme de gestion des accès",
          "Tableau de bord exécutif mensuel",
          "Rapport sur les cybermenaces",
          "Rapport sur les risques fournisseurs",
          "Rapport annuel destiné à la direction générale",
        ],
        frequency: [
          "Accompagnement vCISO mensuel",
          "Suivi mensuel des vulnérabilités",
          "Comité de cybersécurité mensuel",
          "Révision trimestrielle des accès privilégiés",
          "Test d'intrusion annuel",
          "Exercice de crise annuel",
          "Revue stratégique annuelle",
        ],
      },
    ],
    comparison: [
      { label: "Diagnostic de maturité", values: ["✓", "✓", "✓"] },
      {
        label: "Analyse des risques",
        values: ["Essentielle", "Détaillée", "Approfondie"],
      },
      { label: "Audit Microsoft 365", values: ["✓", "✓", "✓"] },
      {
        label: "Analyse des vulnérabilités",
        values: ["Semestrielle", "Trimestrielle", "Continue"],
      },
      { label: "Audit Active Directory", values: ["—", "✓", "Avancé"] },
      { label: "Audit réseau, pare-feu et Wi-Fi", values: ["—", "✓", "✓"] },
      { label: "Gestion des correctifs", values: ["—", "✓", "✓"] },
      { label: "Test d'intrusion", values: ["—", "—", "✓"] },
      {
        label: "Sécurité infonuagique",
        values: ["Revue initiale", "Revue technique", "Revue approfondie"],
      },
      {
        label: "Gestion des identités et des accès",
        values: ["Base", "Intermédiaire", "Programme complet"],
      },
      { label: "Plan de réponse aux incidents", values: ["—", "✓", "✓"] },
      {
        label: "Continuité et reprise",
        values: ["Revue des sauvegardes", "Plans et tests", "Programme complet"],
      },
      {
        label: "Simulations d'hameçonnage",
        values: ["Annuelles", "Trimestrielles", "Personnalisées"],
      },
      {
        label: "Gestion des risques fournisseurs",
        values: ["—", "Fournisseurs critiques", "Programme complet"],
      },
      { label: "Veille sur les menaces", values: ["—", "—", "✓"] },
      { label: "Surveillance du Web clandestin", values: ["—", "—", "✓"] },
      { label: "vCISO", values: ["—", "Optionnel", "Inclus"] },
      {
        label: "Rapports à la direction",
        values: ["Annuel", "Trimestriel", "Mensuel"],
      },
    ],
  },
  servicesPage: {
    metaTitle: "Services de cybersécurité",
    metaDescription:
      "Évaluations des identités, architecture Zéro Confiance, sécurité Microsoft 365 et Entra ID, sécurité infonuagique, gestion des vulnérabilités et conseil en sécurité de l'IA pour le Canada et le Moyen-Orient.",
    eyebrow: "Nos services",
    title: "Des services de cybersécurité qui font la différence",
    subtitle:
      "Des mandats ciblés avec des livrables clairs — évaluations, architecture et conseil qui réduisent les risques réels.",
    outcomesLabel: "Ce que vous obtenez",
    process: {
      eyebrow: "Notre façon de travailler",
      title: "Un processus d'engagement éprouvé",
      steps: [
        {
          title: "Découvrir",
          description:
            "Nous cartographions votre environnement, votre contexte d'affaires et votre profil de menaces.",
        },
        {
          title: "Évaluer",
          description:
            "L'analyse assistée par l'IA identifie les écarts, les mauvaises configurations et l'exposition.",
        },
        {
          title: "Planifier",
          description:
            "Vous recevez un plan de remédiation priorisé et adapté à votre budget.",
        },
        {
          title: "Élever",
          description:
            "Nous appuyons l'exécution, validons les progrès et mesurons l'amélioration.",
        },
      ],
    },
  },
  aboutPage: {
    metaTitle: "À propos",
    metaDescription:
      "BrainFort Sécurité Inc. est une firme canadienne de conseil en cybersécurité qui aide les organisations du Canada et du Moyen-Orient à bâtir des programmes de sécurité modernes et résilients.",
    eyebrow: "À propos de BrainFort",
    title: "Une expertise en sécurité conçue pour les entreprises d'ici",
    intro:
      "BrainFort Sécurité Inc. est une firme canadienne de conseil en cybersécurité fondée sur une conviction simple : une sécurité solide doit accélérer l'entreprise, pas la ralentir.",
    teamImageAlt:
      "Un consultant senior de BrainFort gère les identités, Microsoft 365, le nuage, le réseau, les terminaux et la conformité du client au moyen d'une plateforme d'IA agentique centrale, sous le regard du client.",
    agenticImageTitle: "Nous gérons votre infrastructure grâce à l'IA agentique",
    agenticImageBody:
      "Les agents spécialisés de BrainFort surveillent et coordonnent continuellement votre environnement. Nos consultants seniors supervisent les décisions et transforment les constats en actions sûres et concrètes.",
    missionTitle: "Notre mission",
    mission:
      "Rendre la cybersécurité de calibre entreprise accessible et actionnable pour les organisations de toutes tailles — en combinant expertise de haut niveau et efficacité propulsée par l'IA.",
    valuesTitle: "Nos valeurs",
    values: [
      {
        title: "La clarté avant la complexité",
        description:
          "Nous traduisons le risque technique en décisions que les dirigeants peuvent prendre avec confiance.",
      },
      {
        title: "Une sécurité fondée sur les faits",
        description:
          "Des recommandations ancrées dans votre environnement réel et des données de menaces réelles — jamais de listes génériques.",
      },
      {
        title: "Partenariat, pas dépendance",
        description:
          "Nous développons les capacités de votre équipe pour que la maturité en sécurité survive au mandat.",
      },
      {
        title: "Une curiosité sans relâche",
        description:
          "Le paysage des menaces évolue chaque jour. Nous aussi — des techniques d'attaque à la défense par l'IA.",
      },
    ],
    approachTitle: "Notre approche",
    approach:
      "Nous commençons par l'identité — le périmètre de sécurité moderne — puis élargissons aux postes, à l'infonuagique, aux données et aux opérations. Chaque mandat allie une évaluation technique approfondie à des feuilles de route pragmatiques et progressives, alignées sur votre budget et votre appétit pour le risque. Spécialistes de la sécurité Microsoft et praticiens de l'infonuagique, nous utilisons l'automatisation par l'IA pour livrer en jours ce que les firmes traditionnelles livrent en mois. Avec des équipes qui collaborent entre Montréal, les Émirats arabes unis et l'Arabie saoudite, nous apportons la rigueur canadienne et la connaissance du marché du Moyen-Orient à chaque mandat.",
    ctaTitle: "Bâtissons votre feuille de route de sécurité",
    ctaButton: "Parlez-nous",
  },
  contactPage: {
    metaTitle: "Contact",
    metaDescription:
      "Communiquez avec BrainFort Sécurité pour des évaluations de cybersécurité, une architecture Zéro Confiance et du conseil en sécurité Microsoft au Canada et au Moyen-Orient.",
    eyebrow: "Contact",
    title: "Parlons sécurité",
    subtitle:
      "Parlez-nous de votre environnement et de vos objectifs. Nous répondons en un jour ouvrable.",
    infoTitle: "Vous préférez le courriel?",
    infoSubtitle: "Écrivez-nous directement et nous prenons le relais.",
    departmentsTitle: "Joindre la bonne équipe",
    departments: [
      { key: "sales", label: "Ventes et nouveaux mandats" },
      { key: "support", label: "Soutien technique" },
      { key: "audit", label: "Audits et évaluations" },
      { key: "careers", label: "Carrières" },
      { key: "privacy", label: "Demandes de confidentialité" },
    ],
    phoneTitle: "Téléphone",
    officesTitle: "Nos bureaux",
    locationTitle: "Emplacement",
    location:
      "Siège social à Montréal, Canada — au service de clients au Canada, aux Émirats arabes unis et en Arabie saoudite.",
    form: {
      name: "Nom complet",
      namePlaceholder: "Jeanne Tremblay",
      company: "Entreprise",
      companyPlaceholder: "Acme inc.",
      email: "Courriel professionnel",
      emailPlaceholder: "jeanne@entreprise.com",
      phone: "Téléphone (facultatif)",
      phonePlaceholder: "+1 (555) 000-0000",
      message: "Comment pouvons-nous vous aider?",
      messagePlaceholder:
        "Parlez-nous de vos objectifs de sécurité, de vos défis actuels ou de l'évaluation que vous envisagez…",
      submit: "Envoyer le message",
      submitting: "Envoi en cours…",
      success:
        "Merci — votre message a été envoyé. Nous vous répondrons en un jour ouvrable.",
      error:
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous écrire directement.",
      notConfigured:
        "Le formulaire n'est pas encore connecté. Veuillez nous écrire directement à",
      requiredHint: "Les champs obligatoires sont marqués d'un *",
    },
  },
  footer: {
    tagline:
      "Conseil en cybersécurité au Canada et au Moyen-Orient — identité, Zéro Confiance, sécurité Microsoft, infonuagique et défense propulsée par l'IA.",
    servicesTitle: "Services",
    companyTitle: "Entreprise",
    legalTitle: "Mentions légales",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    cookies: "Politique de cookies",
    disclosure: "Divulgation responsable",
    trust: "Centre de confiance",
    careers: "Carrières",
    rights: "Tous droits réservés.",
  },
  notFound: {
    title: "Page introuvable",
    description: "La page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
  privacyPage: {
    metaTitle: "Politique de confidentialité",
    metaDescription:
      "Politique de confidentialité de BrainFort Sécurité Inc. — comment nous recueillons, utilisons et protégeons vos renseignements personnels.",
    title: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour : 2 août 2026",
    contactIntro: "Des questions sur cette politique? Écrivez-nous à",
    sections: [
      {
        title: "1. Introduction",
        body: "BrainFort Sécurité Inc. (« BrainFort », « nous ») s'engage à protéger votre vie privée. Cette politique explique comment nous recueillons, utilisons et protégeons les renseignements personnels lorsque vous visitez brainfortsecurity.com ou retenez nos services. Nous nous conformons à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) et aux lois provinciales applicables, dont la Loi 25 du Québec.",
      },
      {
        title: "2. Renseignements que nous recueillons",
        body: "Nous recueillons les coordonnées que vous fournissez via notre formulaire de contact — nom, entreprise, courriel, téléphone et contenu du message — ainsi que des renseignements techniques recueillis automatiquement par notre hébergeur à des fins de sécurité et de performance, comme l'adresse IP, le type de navigateur et les pages visitées.",
      },
      {
        title: "3. Utilisation de vos renseignements",
        body: "Nous utilisons vos renseignements pour répondre aux demandes et fournir les services demandés, pour améliorer notre site et nos offres de services, et pour respecter nos obligations légales et réglementaires. Nous ne vendons, ne louons ni n'échangeons vos renseignements personnels à des tiers.",
      },
      {
        title: "4. Conservation des données",
        body: "Nous conservons les renseignements personnels uniquement le temps nécessaire aux fins pour lesquelles ils ont été recueillis, ou tel qu'exigé par la loi. Les soumissions du formulaire de contact sont conservées pendant la durée de notre relation d'affaires ou jusqu'à ce que vous en demandiez la suppression.",
      },
      {
        title: "5. Sécurité des données",
        body: "En tant que firme de cybersécurité, nous appliquons les meilleures pratiques de l'industrie pour protéger vos données : chiffrement en transit, contrôles d'accès et collecte minimale par conception.",
      },
      {
        title: "6. Vos droits",
        body: "Vous pouvez en tout temps demander l'accès à vos renseignements personnels, leur rectification ou leur suppression en nous écrivant à l'adresse ci-dessous.",
      },
      {
        title: "7. Services de tiers",
        body: "Notre site est hébergé sur Cloudflare Pages. Les soumissions de formulaire peuvent être traitées par un service tiers. Ces fournisseurs traitent les données en notre nom selon leurs propres mesures de protection.",
      },
      {
        title: "8. Modifications de cette politique",
        body: "Nous pouvons mettre à jour cette politique de temps à autre. Tout changement important sera reflété par une nouvelle date de « Dernière mise à jour » sur cette page.",
      },
    ],
  },
  disclosurePage: {
    metaTitle: "Divulgation responsable",
    metaDescription:
      "Comment signaler une vulnérabilité de sécurité à BrainFort Sécurité — nos engagements de réponse, la protection des chercheurs et nos délais.",
    title: "Politique de divulgation responsable",
    lastUpdated: "Dernière mise à jour : 2 août 2026",
    intro:
      "La recherche en sécurité nous rend tous plus sûrs. Si vous pensez avoir découvert une vulnérabilité dans l'un de nos systèmes, nous voulons le savoir — et nous nous engageons à collaborer avec vous rapidement et en toute transparence.",
    contactIntro:
      "Signalez les vulnérabilités à notre équipe de sécurité, de façon chiffrée si possible :",
    pgpNote: "Clé PGP",
    securityTxtNote: "Politique lisible par machine",
    sections: [
      {
        title: "1. Comment signaler",
        body: "Écrivez à audit@brainfortsecurity.com avec une description du problème, l'URL ou le composant touché, les étapes de reproduction et toute preuve de concept. Chiffrez les rapports sensibles avec notre clé PGP. Ne publiez pas la faille avant que nous l'ayons corrigée.",
      },
      {
        title: "2. Nos engagements",
        body: "Nous accusons réception sous 2 jours ouvrables, fournissons un suivi au moins tous les 7 jours, et visons une correction sous 7 jours pour les failles critiques, 30 jours pour les failles majeures et 90 jours pour les failles moyennes et mineures. Nous vous créditerons dans nos remerciements si vous le souhaitez.",
      },
      {
        title: "3. Protection des chercheurs (Safe Harbor)",
        body: "Nous n'engagerons aucune poursuite contre les chercheurs de bonne foi : évitez toute atteinte à la vie privée et toute interruption de service, n'accédez pas à plus de données que nécessaire pour démontrer la faille, et laissez-nous un délai raisonnable de correction avant toute divulgation publique.",
      },
      {
        title: "4. Portée",
        body: "Dans la portée : brainfortsecurity.com et ses sous-domaines. Hors portée : les tests de déni de service, l'ingénierie sociale, les attaques physiques, le pourriel et les vulnérabilités des services tiers que nous utilisons (à signaler au fournisseur concerné).",
      },
    ],
  },
  cookiesPage: {
    metaTitle: "Politique de cookies",
    metaDescription:
      "Politique de cookies de brainfortsecurity.com — quels témoins nous utilisons et comment les contrôler.",
    title: "Politique de cookies",
    lastUpdated: "Dernière mise à jour : 2 août 2026",
    contactIntro: "Des questions sur les cookies? Écrivez-nous à",
    sections: [
      {
        title: "1. Que sont les cookies",
        body: "Les cookies (témoins) sont de petits fichiers texte stockés par votre navigateur lors de la visite d'un site. Ils peuvent être essentiels au fonctionnement du site, ou servir à l'analyse et à la publicité.",
      },
      {
        title: "2. Les cookies que nous utilisons aujourd'hui",
        body: "Ce site utilise Google Analytics 4, avec anonymisation des adresses IP, pour comprendre comment les visiteurs utilisent le site. Notre fournisseur d'infrastructure (Cloudflare) peut aussi déposer des cookies opérationnels strictement nécessaires à des fins de sécurité, comme la protection contre les robots. Nous ne déposons aucun cookie publicitaire ni de suivi intersites.",
      },
      {
        title: "3. Google Analytics",
        body: "Google Analytics dépose des cookies pour recueillir des données d'utilisation anonymisées — pages visitées, localisation générale, type d'appareil — afin de nous aider à comprendre et améliorer le site. Les adresses IP sont anonymisées avant stockage. Vous pouvez vous désinscrire en tout temps avec le module complémentaire de désactivation Google Analytics, ou en bloquant les cookies d'analyse dans les paramètres de votre navigateur.",
      },
      {
        title: "4. Gérer les cookies",
        body: "Vous pouvez contrôler et supprimer les cookies dans les paramètres de votre navigateur. Le blocage des cookies essentiels peut affecter les fonctions de sécurité de ce site.",
      },
    ],
  },
  guidePage: {
    metaTitle: "Simulateur gratuit d'assurance cyber",
    metaDescription:
      "Simulateur interactif et gratuit de préparation à l'assurance cyber : obtenez votre score d'assurabilité selon l'identité, la préparation aux menaces, la gestion des vulnérabilités et les contrôles de base — les mêmes questions que les assureurs posent.",
    eyebrow: "Simulateur gratuit d'assurance cyber",
    title: "Votre organisation est-elle assurable?",
    intro:
      "Seize contrôles tirés directement de vraies demandes d'assurance cyber, répartis sur les quatre domaines que les assureurs évaluent réellement. Libre d'accès — sans inscription ni courriel.",
    simulator: {
      instruction:
        "C'est aussi un simulateur : cochez chaque contrôle déjà en place et obtenez votre score d'assurabilité sur 100 — les mêmes questions que posent les assureurs cyber dans chaque demande.",
      scoreTitle: "Votre score d'assurabilité",
      checkedLabel: "contrôles en place",
      dashboardTitle: "Score par domaine",
      yesLabel: "Oui",
      noLabel: "Non",
      reset: "Réinitialiser",
      bands: [
        {
          label: "Critique",
          description:
            "La plupart des assureurs refuseraient ou surprimeraient fortement ce profil. Commencez par la MFA et la vérification hors bande des virements — les deux premiers contrôles vérifiés par les assureurs.",
        },
        {
          label: "À risque",
          description:
            "Des contrôles clés de souscription manquent. Combler ces écarts améliore à la fois votre admissibilité et votre prime.",
        },
        {
          label: "Bonne progression",
          description:
            "Un profil solide et assurable. Comblez les derniers écarts pour débloquer les meilleures conditions disponibles.",
        },
        {
          label: "Excellent",
          description:
            "Profil de premier plan. Les assureurs récompensent ce niveau par une couverture plus large et des primes plus basses — continuez à le valider régulièrement.",
        },
      ],
    },
    categories: [
      {
        id: "identity",
        title: "Identité et accès",
        description:
          "Qui peut entrer, et à quel point c'est contrôlé — la couche la plus attaquée dans chaque brèche.",
        items: [
          {
            title: "MFA exigée sur chaque compte courriel",
            description:
              "L'authentification multifacteur est exigée pour l'accès à distance à tous les comptes courriel de l'entreprise — le point d'entrée le plus ciblé par les attaquants.",
          },
          {
            title: "MFA exigée pour l'accès réseau à distance",
            description:
              "Le VPN et tout autre accès à distance à votre réseau exigent l'authentification multifacteur, pas seulement un mot de passe.",
          },
          {
            title: "MFA exigée sur les ressources infonuagiques sensibles",
            description:
              "Chaque application ou emplacement de stockage infonuagique contenant des données sensibles ou confidentielles exige l'authentification multifacteur pour y accéder.",
          },
          {
            title: "Droits d'administrateur local restreints",
            description:
              "Les utilisateurs courants n'ont pas de droits d'administrateur local sur leurs postes, et les comptes à privilèges sont séparés de l'usage quotidien.",
          },
        ],
      },
      {
        id: "threat",
        title: "Menaces et préparation aux incidents",
        description:
          "Ce qui se passe dès que quelque chose tourne mal — détection, réponse et contrôles anti-fraude.",
        items: [
          {
            title: "Surveillance réseau ou SOC en place",
            description:
              "Une solution de surveillance ou un centre des opérations de sécurité alerte votre organisation en cas d'activité suspecte ou malveillante sur le réseau.",
          },
          {
            title: "Plan de réponse aux incidents testé périodiquement",
            description:
              "Un plan formel de réponse aux incidents cyber existe et est testé selon un calendrier régulier, pas seulement rédigé et classé.",
          },
          {
            title: "Formation annuelle par simulations d'hameçonnage",
            description:
              "Les employés sont testés par des simulations d'hameçonnage au moins une fois par année pour maintenir leur vigilance.",
          },
          {
            title: "Vérification hors bande pour les virements de fonds",
            description:
              "Avant de modifier les coordonnées bancaires d'un fournisseur ou de virer des fonds, votre équipe vérifie la demande par un canal distinct — le premier contrôle vérifié par les assureurs pour la couverture crime.",
          },
        ],
      },
      {
        id: "vulnerability",
        title: "Gestion des vulnérabilités",
        description:
          "À quelle vitesse vous détectez les failles — et à quelle vitesse vous les corrigez — avant les attaquants.",
        items: [
          {
            title: "Analyses de vulnérabilités récurrentes",
            description:
              "Votre périmètre réseau est analysé pour détecter les vulnérabilités selon un calendrier récurrent, pas seulement une fois par année.",
          },
          {
            title: "Tests d'intrusion réguliers",
            description:
              "Des tests d'intrusion indépendants sur votre réseau et vos applications sont réalisés au moins une fois par année.",
          },
          {
            title: "EDR déployé sur chaque poste",
            description:
              "La détection et réponse aux points d'accès (EDR) est déployée et surveillée sur l'ensemble des postes — pas seulement les serveurs ou une partie des appareils.",
          },
          {
            title: "Aucun logiciel obsolète non géré",
            description:
              "Les systèmes en fin de vie ou de support sont identifiés et soit retirés, soit complètement isolés du réseau.",
          },
        ],
      },
      {
        id: "controls",
        title: "Contrôles de base",
        description:
          "Le socle que tout assureur cyber attend avant même de vous soumettre une soumission.",
        items: [
          {
            title: "Pare-feu nouvelle génération à chaque point d'entrée",
            description:
              "Des pare-feu nouvelle génération sont déployés à tous les points d'entrée et de sortie du réseau, pas seulement en périphérie.",
          },
          {
            title: "Filtrage des courriels avec DMARC appliqué",
            description:
              "Les courriels entrants et sortants sont filtrés contre le pourriel et le contenu malveillant, avec DMARC appliqué contre l'usurpation.",
          },
          {
            title: "Données sensibles chiffrées au repos et en transit",
            description:
              "Les données sensibles et confidentielles sont chiffrées à la fois lorsqu'elles sont stockées et lorsqu'elles circulent sur votre réseau.",
          },
          {
            title: "Sauvegardes testées et isolées de l'environnement de production",
            description:
              "Les sauvegardes sont conservées déconnectées de l'environnement de production et vous testez régulièrement la restauration complète — pas seulement la réussite de la tâche de sauvegarde.",
          },
        ],
      },
    ],
    ctaTitle: "Besoin d'aide pour combler ces écarts?",
    ctaBody:
      "Nos consultants implantent chacun de ces contrôles et préparent votre demande pour que vous obteniez de meilleures conditions.",
    ctaButton: "Réserver une consultation",
    costLink: "Estimer le coût de votre protection",
  },
  simulatorPage: {
    metaTitle: "Simulateur de coûts",
    metaDescription:
      "Estimez le coût indicatif des forfaits de cybersécurité gérée BrainFort selon vos postes, serveurs et équipements réseau.",
    eyebrow: "Simulateur de coûts",
    title: "Estimez le coût de votre protection",
    intro:
      "Entrez le nombre de vos actifs pour obtenir une estimation indicative de chaque niveau de service. Chaque mandat est confirmé par une soumission sur mesure.",
    inputsTitle: "Votre environnement",
    inputs: {
      workstations: "Postes de travail et portables",
      servers: "Serveurs (physiques, virtuels ou infonuagiques)",
      network: "Équipements réseau (commutateurs, pare-feu, Wi-Fi)",
      users: "Utilisateurs Microsoft 365 / boîtes courriel",
    },
    monthLabel: "$ US / mois",
    prepaidLabel: "Prépaiement annuel (−10 %) :",
    prepaidLabelTwoYear: "Prépaiement pour 2 ans (−15 %) :",
    perYear: "$ US / an",
    taxNote: "Tous les prix sont hors taxes applicables.",
    optionsTitle: "Options",
    sitesLabel: "Sites / emplacements",
    otLabel: "Environnement industriel / OT (+15 %)",
    nonprofitLabel: "OBNL ou éducation (−15 %)",
    commitmentTitle: "Engagement",
    commitmentMonthly: "Mensuel",
    commitmentAnnual: "Annuel prépayé (−10 %)",
    commitmentTwoYear: "2 ans (−15 %)",
    bestFitLabel: "Adapté à votre profil",
    billingMonthly: "Facturé mensuellement.",
    billingAnnualPrepaid: "Facturé en une fois, payé d'avance pour l'année.",
    billingTwoYearPrepaid: "Facturé en une fois, payé d'avance pour deux ans.",
    disclaimer:
      "Estimation indicative seulement — le prix final est confirmé par une soumission sur mesure après un court appel découverte, selon votre environnement et votre profil de risque.",
    cta: "Demander une soumission sur mesure",
    hourly: {
      eyebrow: "Tarifs horaires standards",
      title: "Une tarification horaire simple et transparente",
      intro:
        "Parce que nous travaillons exclusivement avec des PME, chaque mandat reçoit la même attention aux détails de niveau senior — aucun client n'est trop petit pour compter.",
      rateSuffix: "/ heure",
      unitLabel: "heures / mois",
      tiers: [
        {
          hours: "20",
          rate: "250",
          note: "Idéal pour un accompagnement continu et léger",
        },
        {
          hours: "50",
          rate: "200",
          note: "Le plus courant pour les PME en croissance",
        },
        {
          hours: "50+",
          rate: "180",
          note: "Volume élevé, capacité dédiée",
        },
      ],
      footnote:
        "Les taux s'appliquent aux heures de consultation, d'implémentation et de conseil, facturées mensuellement. Tous les prix excluent les taxes applicables.",
    },
  },
  appPage: {
    metaTitle: "App BrainFort",
    tabSimulator: "Simulateur de coûts",
    tabCatalog: "Catalogue de services",
    tabBooking: "Rendez-vous",
    bookingTitle: "Réservez une rencontre de 30 minutes",
    bookingBody:
      "Choisissez un créneau directement dans notre agenda — une visioconférence de 30 minutes pour discuter de votre environnement, de vos priorités et du bon niveau de protection. Sans engagement.",
    bookingCta: "Choisir un créneau",
    contactCta: "Demander une soumission",
  },
  trustPage: {
    metaTitle: "Centre de confiance",
    metaDescription:
      "Centre de confiance de BrainFort Sécurité — comment nous sécurisons notre propre site, nos courriels et nos données : en-têtes de sécurité, TLS, DNSSEC, authentification des courriels, divulgation responsable.",
    eyebrow: "Centre de confiance",
    title: "Nous appliquons ce que nous conseillons",
    intro:
      "En tant que firme de cybersécurité, nous nous imposons les normes que nous recommandons à nos clients. Cette page documente — de façon vérifiable — comment ce site et nos communications sont sécurisés.",
    verifyNote:
      "Tout ce qui figure sur cette page peut être vérifié de façon indépendante avec des outils publics (securityheaders.com, SSL Labs, DNSViz, MXToolbox).",
    contactTitle: "Contact sécurité",
    contactBody: "Vous avez trouvé quelque chose? Dites-le-nous — chiffré si possible.",
    pillars: [
      {
        title: "Sécurité du transport",
        items: [
          "TLS 1.3 avec redirection HTTPS automatique",
          "HSTS activé (6 mois, includeSubDomains)",
          "DNSSEC actif sur brainfortsecurity.com",
        ],
      },
      {
        title: "Durcissement applicatif",
        items: [
          "Content-Security-Policy bloquant tout code externe",
          "X-Frame-Options: DENY et frame-ancestors 'none'",
          "nosniff, Referrer-Policy stricte, Permissions-Policy minimale",
        ],
      },
      {
        title: "Authenticité des courriels",
        items: [
          "SPF restreint aux serveurs Google Workspace",
          "Signatures DKIM sur tous les courriels sortants",
          "Surveillance DMARC en place",
        ],
      },
      {
        title: "Disponibilité",
        items: [
          "Servi par le réseau mondial de Cloudflare",
          "Architecture entièrement statique — ni base de données ni serveur d'origine à compromettre",
          "Déploiements versionnés avec vérifications CI",
        ],
      },
      {
        title: "Données et confidentialité",
        items: [
          "Collecte minimale par conception — aucun cookie de suivi",
          "Pratiques alignées sur la LPRPDE et la Loi 25 du Québec",
          "Données d'entreprise dans Google Workspace avec MFA imposée",
        ],
      },
      {
        title: "Divulgation des vulnérabilités",
        items: [
          "Politique de divulgation responsable publiée avec Safe Harbor",
          "security.txt signé sous /.well-known/security.txt",
          "Clé PGP disponible pour les rapports chiffrés",
        ],
      },
    ],
  },
  termsPage: {
    metaTitle: "Conditions d'utilisation",
    metaDescription:
      "Conditions d'utilisation du site Web de BrainFort Sécurité.",
    title: "Conditions d'utilisation",
    lastUpdated: "Dernière mise à jour : 2 août 2026",
    contactIntro: "Des questions sur ces conditions? Écrivez-nous à",
    sections: [
      {
        title: "1. Acceptation des conditions",
        body: "En accédant à brainfortsecurity.com, vous acceptez les présentes conditions d'utilisation. Si vous n'êtes pas d'accord, veuillez ne pas utiliser ce site. Le site est exploité par BrainFort Sécurité Inc., une société constituée au Canada.",
      },
      {
        title: "2. Utilisation du contenu",
        body: "Tout le contenu de ce site — textes, graphiques, logos et design — est la propriété de BrainFort Sécurité Inc. et est protégé par le droit d'auteur canadien et international. Vous pouvez consulter et imprimer le contenu pour un usage personnel ou interne; toute autre reproduction ou distribution exige notre consentement écrit préalable.",
      },
      {
        title: "3. Aucun conseil professionnel",
        body: "Le contenu du site est fourni à titre informatif seulement et ne constitue pas un conseil professionnel en sécurité, juridique ou de conformité. Les mandats sont régis par des ententes écrites distinctes.",
      },
      {
        title: "4. Exclusion de garanties",
        body: "Ce site est fourni « tel quel », sans garantie d'aucune sorte, expresse ou implicite. Nous ne garantissons pas que le site sera ininterrompu, exempt d'erreurs ou de composantes nuisibles.",
      },
      {
        title: "5. Limitation de responsabilité",
        body: "Dans la mesure maximale permise par la loi, BrainFort Sécurité Inc. ne saurait être tenue responsable des dommages indirects, accessoires ou consécutifs découlant de votre utilisation de ce site.",
      },
      {
        title: "6. Liens externes",
        body: "Ce site peut contenir des liens vers des sites de tiers. Nous ne sommes pas responsables de leur contenu ni de leurs pratiques de confidentialité.",
      },
      {
        title: "7. Droit applicable",
        body: "Les présentes conditions sont régies par les lois de la province de Québec et les lois fédérales du Canada qui s'y appliquent.",
      },
    ],
  },
};
