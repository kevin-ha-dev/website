export type SystemModule = {
  id: string;
  name: string;
  description: string;
  tagline?: string;
  image?: string;
  specs?: string[];
};

export const systemModules: SystemModule[] = [
  {
    id: "assembler",
    name: "Assembler",
    description:
      "A six-axis robot arm that builds every burger to spec: bun, protein, toppings, sauces. Sub-millimeter consistency on every single order. Learns new recipes from a handful of live demonstrations.",
    image: "/robot-arm.png",
    specs: [
      "Six-axis manipulator",
      "Sub-mm placement repeatability",
      "Demo-based recipe acquisition",
      "Gentle handling for delicate ingredients",
    ],
  },
  {
    id: "dispensary",
    name: "Dispensary",
    description:
      "Gram-level precision for every sauce, liquid, and dry topping. Portion consistency is guaranteed, not approximated. The module hot-swaps in under 90 seconds when you change the menu.",
    image: "/burger.png",
    specs: [
      "Gram-level portion control",
      "Hot-swap modules (< 90 sec)",
      "Sauces, liquids, dry toppings",
      "No line stop for menu changes",
    ],
  },
  {
    id: "conveyor",
    name: "Conveyor",
    description:
      "A variable-speed belt that moves product between stations at a pace set by the live order queue. Self-adjusts to downstream bottlenecks detected by the onboard vision system.",
    image: "/technology.png",
    specs: [
      "Variable-speed belt system",
      "Queue-driven pacing",
      "Vision-based bottleneck detection",
      "Continuous hygiene monitoring",
    ],
  },
  {
    id: "interface",
    name: "Interface",
    description:
      "A single glove-friendly touchscreen gives operators full visibility into queue position, throughput, and system health in real time. No IT overhead, no proprietary software.",
    image: "/contact.png",
    specs: [
      "Glove-friendly touchscreen",
      "Real-time queue and throughput",
      "No IT overhead or logins",
      "Readable under kitchen lighting",
    ],
  },
  {
    id: "intelligence",
    name: "Intelligence",
    description:
      "On-device ML inference powers recipe learning, vision-based quality checks, and throughput optimization locally, with no cloud round-trips during production.",
    specs: [
      "On-device ML inference",
      "Vision-based quality checks",
      "Local recipe and rhythm learning",
      "No cloud dependency in production",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    description:
      "One unit handles up to 300 covers an hour. Add more and they work together automatically, sharing the queue and balancing the load.",
    specs: [
      "300 covers/hr per unit",
      "Multi-unit queue sharing",
      "Automatic load balancing",
      "< 1 day new-site deployment",
    ],
  },
];

/** Three modules for the interactive buy-page showcase. */
export const showcaseModules: SystemModule[] = [
  {
    id: "fresh-cut",
    name: "Fresh Cut",
    tagline: "On-demand veggie prep",
    description:
      "Lettuce, tomato, onion, and pickle, sliced and portioned the moment an order comes in. Four dedicated cutting stations mean nothing sits prepped and waiting, every veggie hits the burger minutes after it's cut, not hours.",
  },
  {
    id: "sauced-up",
    name: "Sauced Up",
    tagline: "Portion-controlled sauces",
    description:
      "Every sauce and condiment dispensed in consistent, repeatable portions, order after order. No heavy hand on the mayo one time and a dry burger the next, B.O.B. aims for the same amount every time, across all four sauce lanes.",
  },
  {
    id: "fries-served",
    name: "Fries, Served",
    tagline: "Fryer lane to tray",
    description:
      "B.O.B.'s clamshell arm lifts a fresh batch from the fryer lane and plates it alongside your burger, moving fries from fryer to tray without manual handling in normal operation. Same portion, same timing, every order.",
  },
];

/** All modules with specs for the investor architecture grid. */
export const investorModules = systemModules.filter((m) => m.specs);
