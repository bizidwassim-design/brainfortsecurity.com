/** Client logos shown in the trust strip (assets in public/clients/). */
export interface ClientLogo {
  name: string;
  href: string;
  src: string;
  width: number;
  height: number;
  /** Dark/colored logos need a light chip to stay readable on the dark theme. */
  lightChip?: boolean;
}

export const clients: ClientLogo[] = [
  {
    name: "Les Serres Folia",
    href: "https://serresfolia.com",
    src: "/clients/serres-folia.svg",
    width: 366,
    height: 248,
    lightChip: true,
  },
  {
    name: "Attitude Fraîche",
    href: "https://attitudefraiche.com",
    src: "/clients/attitude-fraiche.png",
    width: 252,
    height: 108,
  },
  {
    name: "Vegpro International",
    href: "https://vegpro.com",
    src: "/clients/vegpro.svg",
    width: 420,
    height: 107,
  },
];
