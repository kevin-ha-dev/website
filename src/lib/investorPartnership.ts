export type PartnershipHighlight = {
  title: string;
  detail: string;
};

export type PressLink = {
  source: string;
  title: string;
  href: string;
  image: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
};

export const abbPartnershipHighlights: PartnershipHighlight[] = [
  {
    title: "IRB 360 FlexPicker",
    detail: "Delta robot for hygienic, high-speed topping selection.",
  },
  {
    title: "YuMi cobot",
    detail: "Human-safe final assembly with sub-millimeter placement.",
  },
  {
    title: "Inventory system",
    detail: "Real-time stock tracking across the full assembly cell.",
  },
];

export const abbPartnershipProof = [
  { value: "Live", label: "production today" },
  { value: "Breaking Dawn", label: "Los Gatos, CA" },
  { value: "Food-grade", label: "hygienic cell" },
] as const;

export const abbPressLinks: PressLink[] = [
  {
    source: "ABC7 News",
    title:
      "New Silicon Valley restaurant using robots to make your hamburgers",
    href: "https://www.youtube.com/watch?v=VZA4m52TGUk",
    image: {
      src: "https://img.youtube.com/vi/VZA4m52TGUk/maxresdefault.jpg",
      alt: "ABC7 Eyewitness News segment on Burger Bots in Los Gatos",
      objectPosition: "center",
    },
  },
  {
    source: "NBC Bay Area",
    title: "Silicon Valley burger joint features robots in the kitchen",
    href: "https://www.youtube.com/watch?v=GBX35xWi0i4",
    image: {
      src: "https://img.youtube.com/vi/GBX35xWi0i4/maxresdefault.jpg",
      alt: "NBC Bay Area news segment on Burger Bots in Los Gatos",
      objectPosition: "center",
    },
  },
  {
    source: "ABB Robotics",
    title:
      "ABB and BurgerBots unveil robotic burger-making to revolutionize fast food prep",
    href: "https://www.youtube.com/watch?v=tN-5uXWRa9M",
    image: {
      src: "https://img.youtube.com/vi/tN-5uXWRa9M/maxresdefault.jpg",
      alt: "ABB YuMi cobot assembling burgers on the BurgerBots line at Breaking Dawn",
      objectPosition: "center",
    },
  },
];

export const abbPartnershipCopy = {
  eyebrow: "Partnership",
  title: "Built with ABB Robotics",
  body: "Industrial automation on a live commercial line: FlexPicker and YuMi working together at Breaking Dawn in Los Gatos, with ABB's global service network and hygienic design standards behind the cell. The same platform ABB deploys across food and beverage worldwide, proven on a live BurgerBots line.",
  image: {
    src: "/assets/showcase/burgerbot-action.jpg",
    alt: "B.O.B. on the live BurgerBots line at Breaking Dawn",
  },
};
