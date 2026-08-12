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
  title: "Let's start a conversation.",
  description:
    "We share our deck, financial overview, and technical documentation with qualified investors. Tell us a little about yourself and Liz will follow up personally if it's a fit.",
  ctaLabel: "Request an intro →",
};

export const investorStageOptions = [
  "Pre-seed",
  "Seed",
  "Series A",
  "Series B+",
  "Angel",
  "Family office",
  "Other",
] as const;

export const investorRequestCopy = {
  namePlaceholder: "Your name and firm (or 'angel' is fine)",
  aboutPlaceholder:
    "What you typically back, and why BurgerBots caught your eye. Liz reads these personally.",
  submitLabel: "Send request →",
  fallbackEmail: "realhuman@burgerbots.com",
};

export const investorHeroCopy = {
  intro:
    "Live robotic assembly in a commercial kitchen today, not a pilot, not a lab.",
};

export const investorProofCopy = {
  title: "Proven concept.",
  intro:
    "We operate a proven robotic kitchen in a customer-facing restaurant.",
};

export const investorProofPoints = [
  "Live production at Breaking Dawn & First Born, Los Gatos, since April 2025",
  "Successfully trained non-engineers to operate the machine in daily production",
  "The robot draws families, media coverage, and attention to the restaurant — proof of our approach to the future of food",
] as const;

export const investorFounderCopy = {
  eyebrow: "Founder",
  quote:
    "Every big invention was built by just a kid who wanted to play and try something new",
  body:
    "Elizabeth Truong has over two decades as a restaurant operator. She leads alongside robotics and software engineers and restaurant operators, all enthused to reshape the future of food.",
  image: {
    src: "/assets/investors/founder.png",
    alt: "Elizabeth Truong, BurgerBots founder",
  },
} as const;
