export type ProseSection = {
  heading: string;
  body: string[];
};

export const howItWorksSections: ProseSection[] = [
  {
    heading: "The system",
    body: [
      "BurgerBots is built around one idea: the robot should fit your kitchen, not the other way around. It installs in hours, not weeks. No structural changes, no disruption. Your staff keeps working while it gets set up.",
    ],
  },
  {
    heading: "The assembly arm",
    body: [
      "Gentle enough to handle a brioche bun without crushing it. Precise enough to place a tomato the same way, every time, for a thousand orders straight. Show it a new build a few times and it learns. No programming, no specialist, no downtime.",
    ],
  },
  {
    heading: "The dispensary",
    body: [
      "Every sauce, every topping, portioned the same way every time. Not approximately. Exactly. Swapping out a module takes under ninety seconds. Menu changes never mean stopping the line.",
    ],
  },
  {
    heading: "Built to scale",
    body: [
      "One unit handles up to 300 covers an hour. Add more and they work together automatically, sharing the queue and balancing the load. One location or four hundred, and getting a new site up and running takes less than a day.",
    ],
  },
];

export const investorThesisSections: ProseSection[] = [
  {
    heading: "Cost of goods",
    body: [
      "BurgerBots helps operators make better cost of goods decisions through our inventory software.",
    ],
  },
  {
    heading: "Customer service",
    body: [
      "We provide consistency, efficiency, and transparency. Every order built the same, every time.",
    ],
  },
  {
    heading: "Restaurant systems",
    body: [
      "We reshape how your restaurant runs, from assembly to operations, with a consistent product and an experience built for the future of food.",
    ],
  },
];

export const investorDifferentiationSection: ProseSection = {
  heading: "Differentiation",
  body: [
    "Modular architecture: each dispensary module hot-swaps in under 90 seconds. Multi-unit deployments share order queues automatically. Add capacity by adding units, not by re-architecting the line.",
    "We are a team that features a restaurant operator with 25+ years of experience, a robotics engineer with 10 years of experience, and a team of operators.",
  ],
};
