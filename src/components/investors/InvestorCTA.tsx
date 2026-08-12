import { FadeIn } from "@/components/shared/FadeIn";
import { InvestorRequestForm } from "@/components/investors/InvestorRequestForm";
import { investorDeckCopy } from "@/lib/investorDeck";

export function InvestorCTA() {
  const { title, description } = investorDeckCopy;

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
          <InvestorRequestForm />
        </FadeIn>
      </div>
    </section>
  );
}
