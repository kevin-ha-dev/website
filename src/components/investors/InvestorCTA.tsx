import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { investorDeckCopy } from "@/lib/investorDeck";
import { siteConfig } from "@/lib/siteConfig";

export function InvestorCTA() {
  const { title, description, ctaLabel, emailLabel } = investorDeckCopy;

  return (
    <section className="page-x border-t border-text-primary/10 bg-surface-dark py-[var(--spacing-section-sm)]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
        <FadeIn>
          <h2 className="type-heading-xl text-text-on-dark">{title}</h2>
          <p className="mt-4 max-w-md leading-relaxed text-text-on-dark-muted">
            {description}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="grid grid-cols-1 gap-3 sm:w-max sm:grid-cols-2">
            <Link
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              {ctaLabel}
            </Link>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm font-semibold text-text-on-dark transition-colors hover:bg-white/5"
            >
              {emailLabel}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
