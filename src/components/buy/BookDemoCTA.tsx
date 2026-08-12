import { FadeIn } from "@/components/shared/FadeIn";
import { BuyRequestForm } from "@/components/buy/BuyRequestForm";
import { buyRequestSectionCopy } from "@/lib/buyRequest";

export function BookDemoCTA() {
  const { title, description } = buyRequestSectionCopy;

  return (
    <section
      id="request"
      className="page-x scroll-mt-24 border-t border-text-primary/10 bg-surface-dark py-[var(--spacing-section-sm)]"
    >
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <FadeIn>
          <h2 className="type-heading-xl text-text-on-dark">{title}</h2>
          <p className="mt-4 max-w-md leading-relaxed text-text-on-dark-muted">
            {description}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <BuyRequestForm />
        </FadeIn>
      </div>
    </section>
  );
}
