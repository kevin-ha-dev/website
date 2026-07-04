import { MetricsGrid } from "@/components/shared/MetricsGrid";
import { productMetrics } from "@/lib/metrics";

export function ProductStats() {
  return (
    <MetricsGrid variant="product" metrics={productMetrics} background={false} />
  );
}
