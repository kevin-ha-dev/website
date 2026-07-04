export type ProductMetric = {
  value: string;
  unit: string;
  label: string;
};

export type InvestorMetric = {
  label: string;
  value: string;
  detail: string;
};

export const productMetrics: ProductMetric[] = [
  {
    value: "27",
    unit: "seconds a burger",
    label: "",
  },
  {
    value: "6-axis",
    unit: "robot arm",
    label: "",
  },
  {
    value: "Gram-level",
    unit: "sauce control",
    label: "",
  },
  {
    value: "Sub-mm",
    unit: "precision",
    label: "Consistent assembly on every bun, sauce, and topping.",
  },
];

export const investorMetrics: InvestorMetric[] = [
  {
    label: "Speed",
    value: "27 sec/burger",
    detail: "Garnish to assembled burger",
  },
  {
    label: "International",
    value: "< 1 day",
    detail: "Install and operational same day, no structural changes",
  },
  {
    label: "Menu swap",
    value: "90 sec",
    detail: "Hot-swap dispensary modules without stopping the line",
  },
  {
    label: "Precision",
    value: "Sub-mm",
    detail: "Assembly repeatability across thousands of orders",
  },
  {
    label: "Training",
    value: "Demo-based",
    detail: "New recipes learned from live demonstrations, not code",
  },
];
