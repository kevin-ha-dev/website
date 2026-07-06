import { FadeIn } from "@/components/shared/FadeIn";
import type { InvestorMetric, ProductMetric } from "@/lib/metrics";

type MetricsGridProps =
  | {
      variant: "product";
      metrics: ProductMetric[];
      background?: boolean;
      eyebrow?: string;
      compact?: never;
      embedded?: never;
    }
  | {
      variant: "investor";
      metrics: InvestorMetric[];
      background?: boolean;
      eyebrow?: string;
      compact?: boolean;
      embedded?: boolean;
    };

export function MetricsGrid(props: MetricsGridProps) {
  const { variant, metrics, background = true, eyebrow } = props;
  const compact = variant === "investor" ? (props.compact ?? false) : false;
  const embedded = variant === "investor" ? (props.embedded ?? false) : false;

  const sectionClass = [
    !embedded && (variant === "product" ? "page-x mt-8 md:mt-12" : "section-shell"),
    embedded && "page-x",
    variant === "investor" &&
      !embedded &&
      (compact
        ? "border-y border-text-primary/10 py-8 md:py-10"
        : "border-y border-text-primary/10 py-14 md:py-16"),
    embedded && (compact ? "pt-8 pb-4 md:pt-12 md:pb-8" : "py-10 md:py-12"),
    background && "bg-surface-muted",
  ]
    .filter(Boolean)
    .join(" ");

  if (variant === "product") {
    const productMetrics = metrics as ProductMetric[];
    return (
      <section className={sectionClass}>
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid auto-rows-fr grid-cols-2 divide-x divide-y divide-text-primary/10 border-y border-text-primary/10 lg:grid-cols-4 lg:divide-y-0">
            {productMetrics.map((stat, i) => (
              <FadeIn key={stat.value} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col items-center justify-center gap-1 px-5 py-8 text-center md:px-8 md:py-10">
                  <p className="font-sans text-2xl font-bold tracking-tight text-text-primary md:text-4xl">
                    {stat.value}
                  </p>
                  <p
                    className={`type-eyebrow text-text-primary ${stat.unit || stat.label ? "" : "invisible"}`}
                  >
                    {stat.unit || stat.label || "\u00A0"}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const investorMetrics = metrics as InvestorMetric[];
  const Wrapper = embedded ? "div" : "section";
  return (
    <Wrapper className={sectionClass}>
      {eyebrow && (
        <FadeIn>
          <p
            className={
              compact
                ? "type-eyebrow mb-4 hidden sm:block md:mb-5"
                : "type-eyebrow mb-10"
            }
          >
            {eyebrow}
          </p>
        </FadeIn>
      )}
      <div
        className={
          compact
            ? "grid grid-cols-3 gap-x-2 gap-y-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-5 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6"
            : "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {investorMetrics.map((metric, i) => (
          <FadeIn key={metric.label} delay={i * 0.06}>
            <div
              className={
                compact
                  ? "flex flex-col gap-0.5 border-t border-dashed border-text-primary/10 pt-2.5"
                  : "flex flex-col gap-1 border-t border-dashed border-text-primary/10 pt-4"
              }
            >
              <p className="type-eyebrow">{metric.label}</p>
              <p
                className={
                  compact
                    ? "font-mono text-base font-bold tracking-tight text-text-primary sm:text-lg md:text-xl"
                    : "font-mono text-2xl font-bold tracking-tight text-text-primary"
                }
              >
                {metric.value}
              </p>
              <p
                className={
                  compact
                    ? "type-body-sm hidden leading-snug sm:block"
                    : "type-body-sm leading-snug"
                }
              >
                {metric.detail}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Wrapper>
  );
}
