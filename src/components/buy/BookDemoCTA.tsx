import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { siteConfig } from "@/lib/siteConfig";

export function BookDemoCTA() {
  return (
    <section className="page-x bg-surface-dark py-[var(--spacing-section-sm)]">
      <FadeIn className="flex w-full flex-col items-start gap-5">
        <div>
          <h2 className="type-heading-md text-text-on-dark">
            Ready to put B.O.B. in your kitchen?
          </h2>
          <p className="mt-3 max-w-xs leading-relaxed text-text-on-dark-muted">
            Book a call and we&apos;ll walk you through ownership, setup, and
            menu training for your operation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:w-max sm:grid-cols-2">
          <Link
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center"
          >
            Book a call →
          </Link>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm font-semibold text-text-on-dark transition-colors hover:bg-white/5"
          >
            Email us →
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
