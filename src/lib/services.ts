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

/**
 * Icon per service id. Titles/descriptions/outcomes live in the locale
 * dictionaries (`src/i18n/*.ts`) under `services`, keyed by the same ids.
 */
export const serviceIcons: Record<string, LucideIcon> = {
  "identity-assessment": Fingerprint,
  "zero-trust-architecture": ShieldCheck,
  "microsoft-365-security": LayoutGrid,
  "entra-id-security": KeyRound,
  "cloud-security-assessment": Cloud,
  "cybersecurity-audit": ClipboardCheck,
  "ai-security-advisory": BrainCircuit,
  "vulnerability-assessment": Bug,
  "penetration-test-preparation": Crosshair,
  "security-architecture-review": Network,
};

export const FEATURED_SERVICES_COUNT = 6;
