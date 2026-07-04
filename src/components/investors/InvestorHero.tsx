import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import {
  InvestorGridRow,
  InvestorSectionGrid,
} from "@/components/investors/InvestorSectionGrid";
import {
  investorDeckCopy,
  investorHeroCopy,
  investorPressCopy,
  investorProofPoints,
} from "@/lib/investorDeck";
import {
  abbPartnershipCopy,
  abbPartnershipProof,
  abbPressLinks,
} from "@/lib/investorPartnership";
import { NAV_BAR_HEIGHT_PX } from "@/lib/navLinks";
import { investorThesisSections } from "@/lib/proseSections";
import { siteConfig } from "@/lib/siteConfig";

export function InvestorHero() {
  const { image } = abbPartnershipCopy;

  return (
    <>
      <section className="page-x border-b border-text-primary/10 bg-background">
        <div
          className="mx-auto grid max-w-[1200px] grid-cols-12 gap-x-6 gap-y-10 pb-14 md:gap-x-8 md:pb-20"
          style={{ paddingTop: NAV_BAR_HEIGHT_PX + 72 }}
        >
          <div className="col-span-12 flex flex-col gap-5 md:col-span-5 lg:col-span-4">
            <p className="type-eyebrow">Investor material</p>
            <h1 className="type-display-sm">
              <span className="block text-brand">Automating the line.</span>
              <span className="block text-text-primary">Scaling consistency.</span>
            </h1>
            <p className="type-body max-w-xs leading-relaxed">
              {investorHeroCopy.intro}
            </p>
            <Link
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-1 w-fit"
            >
              {investorDeckCopy.ctaLabel}
            </Link>
          </div>

          <div className="col-span-12 md:col-start-7 md:col-span-6 lg:col-start-6 lg:col-span-7">
            <div className="relative aspect-video w-full border border-text-primary/12 bg-text-primary/4">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="type-body-sm mt-3 tracking-wide text-text-secondary">
              Fig. 01 · Live line at Breaking Dawn
            </p>
          </div>
        </div>
      </section>

      <section className="page-x mt-8 md:mt-12">
        <FadeIn className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 divide-y divide-text-primary/10 border-y border-text-primary/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {abbPartnershipProof.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 px-5 py-6 md:px-8 md:py-7"
              >
                <p className="type-metric text-text-primary">{item.value}</p>
                <p className="type-eyebrow text-text-primary">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="section-shell border-b border-text-primary/10 bg-background">
        <div className="mx-auto w-full max-w-[1200px]">
          <InvestorSectionGrid
            id="thesis"
            index="01 · Thesis"
            title="Why now."
            className="border-t-0 pt-0"
          >
            {investorThesisSections.map((section, i) => (
              <InvestorGridRow
                key={section.heading}
                label={section.heading}
                isLast={i === investorThesisSections.length - 1}
                delay={i * 0.06}
              >
                <p className="type-body leading-relaxed">{section.body[0]}</p>
              </InvestorGridRow>
            ))}
          </InvestorSectionGrid>
        </div>
      </section>

      <section
        id="proof"
        className="section-shell scroll-mt-[85px] border-b border-text-primary/10 bg-surface-muted"
      >
        <div className="mx-auto max-w-[1200px]">
          <InvestorSectionGrid
            index="02 · Proof"
            title="On the line."
            className="border-t-0 pt-0"
          >
            {investorProofPoints.map((point, i) => (
              <InvestorGridRow
                key={point}
                label={String(i + 1).padStart(2, "0")}
                isLast={i === investorProofPoints.length - 1}
                delay={i * 0.06}
              >
                <p className="type-body leading-relaxed">{point}</p>
              </InvestorGridRow>
            ))}

            <FadeIn delay={0.2} className="mt-10 border-t border-text-primary/10 pt-10 md:mt-12 md:pt-12">
              <p className="type-eyebrow mb-3">Press</p>
              <p className="type-body mb-6 max-w-md leading-relaxed text-text-secondary md:mb-8">
                {investorPressCopy.description}
              </p>
              <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-8">
                {abbPressLinks.map((article, i) => (
                  <FadeIn
                    key={article.href}
                    delay={0.24 + i * 0.06}
                    className="col-span-12 sm:col-span-4"
                  >
                    <Link
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col"
                    >
                      <div className="relative aspect-square w-full overflow-hidden border border-text-primary/12 bg-background">
                        <Image
                          src={article.image.src}
                          alt={article.image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 260px"
                          quality={92}
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                          style={
                            article.image.objectPosition
                              ? { objectPosition: article.image.objectPosition }
                              : undefined
                          }
                        />
                      </div>
                      <p className="type-eyebrow mt-4 mb-1.5">{article.source}</p>
                      <p className="text-sm font-medium leading-snug text-text-primary">
                        <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] group-hover:decoration-text-primary/35">
                          {article.title}
                        </span>
                        <span
                          aria-hidden
                          className="ml-1 inline-block text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:text-text-primary"
                        >
                          →
                        </span>
                      </p>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </InvestorSectionGrid>
        </div>
      </section>
    </>
  );
}
