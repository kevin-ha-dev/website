export const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/buy", label: "Own a BurgerBot" },
  { href: "/investors", label: "Investor Material" },
] as const;

export const lightPages = new Set(["/home", "/buy", "/investors"]);

/** Path → back-arrow destination (left side of nav, replaces logo). */
export const backNavHrefs: Record<string, string> = {
  "/buy": "/home",
  "/buy/thank-you": "/buy",
  "/investors": "/home",
  "/investors/thank-you": "/investors",
};

/** 52px logo + py-4 padding + 1px bottom border */
export const NAV_BAR_HEIGHT_PX = 85;
