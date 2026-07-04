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
    value: "Consistency",
    unit: "",
    label: "",
  },
  {
    value: "Transparency",
    unit: "",
    label: "",
  },
  {
    value: "Efficiency",
    unit: "",
    label: "",
  },
  {
    value: "Quality",
    unit: "You want every time",
    label: "",
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
