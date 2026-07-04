import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { siteConfig } from "@/lib/siteConfig";

export function BookDemoCTA() {
  return (
    <section className="page-x bg-surface-dark py-[var(--spacing-section-sm)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-x-6 gap-y-8 md:gap-x-8">
        <FadeIn className="col-span-12 flex flex-col gap-5 md:col-span-5">
          <div>
            <p className="type-eyebrow-on-dark">03 · Next step</p>
            <h2 className="type-heading-md mt-2 text-text-on-dark">
              Ready to put B.O.B. in your kitchen?
            </h2>
            <p className="mt-3 max-w-xs leading-relaxed text-text-on-dark-muted">
              Book a call and we&apos;ll walk you through ownership, setup, and
              menu training for your operation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a call →
            </Link>
            <a
              href={`mailto:${siteConfig.salesEmail}`}
              className="inline-flex items-center border border-white/20 px-5 py-3 text-sm font-semibold text-text-on-dark transition-colors hover:bg-white/5"
            >
              Email us →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
