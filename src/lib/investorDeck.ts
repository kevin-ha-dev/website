export type DeckTopic = {
  title: string;
  description: string;
};

export const investorDeckTopics: DeckTopic[] = [
  {
    title: "Market thesis",
    description:
      "Labor constraints, consistency at scale, and why commercial kitchens are the next automation frontier.",
  },
  {
    title: "Financial overview",
    description:
      "Unit economics, international model, and path to revenue across restaurant operators.",
  },
  {
    title: "Technology & integration",
    description:
      "On-device robotics, demonstration-based learning, and same-day kitchen integration.",
  },
  {
    title: "Traction & partnerships",
    description:
      "Live production at Breaking Dawn, ABB Robotics partnership, and go-to-market strategy.",
  },
];

export const investorDeckCopy = {
  eyebrow: "Investor deck",
  title: "Full materials available on request.",
  description:
    "We share our deck, financial overview, and technical documentation with qualified investors. Reach out and we'll send everything over.",
  ctaLabel: "Request investor deck →",
  emailLabel: "Email us →",
};

export const investorHeroCopy = {
  intro:
    "Live robotic assembly in a commercial kitchen today, not a pilot, not a lab.",
};

export const investorProofPoints = [
  "Live production at Breaking Dawn & First Born, Los Gatos, since April 2025",
  "ABB FlexPicker and YuMi cobots in daily production",
  "Covered by ABB, NBC Bay Area, and ABC7",
] as const;

export const investorPressCopy = {
  description:
    "Local news and industry press on what's running in production today.",
};
