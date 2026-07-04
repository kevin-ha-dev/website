export type MenuItem = {
  id: string;
  name: string;
  description: string;
  note: string;
  ctaLabel: string;
  image: string;
};

export const menuHighlights: MenuItem[] = [
  {
    id: "burger-and-fries",
    name: "Burger & Fries",
    description:
      "Quality beef grilled by our chefs, finished by B.O.B. The combo that started it all.",
    note: "Fresh-ground beef, melted cheese, and a side of thick-cut fries.",
    ctaLabel: "Try Burger & Fries →",
    image: "/assets/menu/breaking-dawn-burger-and-fries.png",
  },
  {
    id: "chicken",
    name: "Chicken Burger",
    description:
      "Crispy fried chicken, stacked with lettuce, tomato, and onion, built to spec every time.",
    note: "Golden crunch on the outside, same precise build on every order.",
    ctaLabel: "Try Chicken Burger →",
    image: "/assets/menu/breaking-dawn-chicken-burger.png",
  },
  {
    id: "lemongrass-tofu",
    name: "Lemongrass Tofu Burger",
    description:
      "Seared tofu with lemongrass, crisp produce, and the same sub-mm care as everything on the line.",
    note: "Bold lemongrass flavor, layered to spec. No shortcuts, no compromise.",
    ctaLabel: "Try Lemongrass Tofu →",
    image: "/assets/menu/breaking-dawn-lemongrass-tofu-burger.png",
  },
];
