import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import {
  InvestorGridRow,
  InvestorSectionGrid,
} from "@/components/investors/InvestorSectionGrid";
import { PressCard } from "@/components/investors/PressCard";
import {
  investorDeckCopy,
  investorHeroCopy,
  investorFounderCopy,
  investorProofCopy,
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
      <section
        className="section-shell border-b border-text-primary/10 bg-background !pb-0 !pt-0"
      >
        <div
          className="mx-auto w-full max-w-[1200px] pb-14 md:pb-20"
          style={{ paddingTop: NAV_BAR_HEIGHT_PX + 72 }}
        >
          <div className="grid grid-cols-12 gap-x-6 gap-y-5 md:gap-x-8">
          <h1 className="type-display-sm col-span-12 md:col-span-5 lg:col-span-4">
            <span className="block text-brand">Automating the line.</span>
            <span className="block text-text-primary">Scaling consistency.</span>
          </h1>
          <p className="type-body col-span-12 max-w-xs leading-relaxed md:col-span-5 lg:col-span-4">
            {investorHeroCopy.intro}
          </p>
          <Link
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary col-span-12 mt-1 w-fit md:col-span-5 lg:col-span-4"
          >
            {investorDeckCopy.ctaLabel}
          </Link>

          <div className="relative col-span-12 aspect-video w-full border border-text-primary/12 bg-text-primary/4 md:col-span-6 md:col-start-7 md:row-start-1 md:row-span-4 md:aspect-auto md:min-h-0 lg:col-span-7 lg:col-start-6">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover object-[center_80%]"
              priority
            />
          </div>
          </div>
        </div>
      </section>

      <section className="section-shell !py-0 mt-8 md:mt-12">
        <FadeIn className="mx-auto w-full max-w-[1200px]">
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
            title={investorProofCopy.title}
            className="border-t-0 pt-0"
          >
            <p className="type-body mb-6 max-w-md leading-relaxed text-text-secondary md:mb-8">
              {investorProofCopy.intro}
            </p>
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
          </InvestorSectionGrid>

          <FadeIn
            delay={0.2}
            className="border-t border-text-primary/10 pt-10 md:pt-12"
          >
            <p className="type-heading-sm mb-6 text-text-primary md:mb-8">
              Press
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8">
              {abbPressLinks.map((article, i) => (
                <FadeIn key={article.href} delay={0.24 + i * 0.06}>
                  <PressCard article={article} />
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn
            delay={0.26}
            className="grid grid-cols-12 gap-x-6 gap-y-6 border-t border-text-primary/10 pt-10 md:gap-x-8 md:gap-y-8 md:pt-12"
          >
            <p className="type-heading-sm col-span-12 text-text-primary md:col-span-4">
              {investorFounderCopy.eyebrow}
            </p>
            <div className="col-span-12 md:col-span-4 md:row-start-2">
              <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden border border-text-primary/12 bg-text-primary/4">
                <Image
                  src={investorFounderCopy.image.src}
                  alt={investorFounderCopy.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  quality={92}
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="col-span-12 flex flex-col gap-8 md:col-span-8 md:col-start-5 md:row-start-2 md:gap-10">
              <blockquote className="max-w-[34rem]">
                <p className="type-heading-md text-balance leading-tight tracking-tight text-text-primary">
                  &ldquo;{investorFounderCopy.quote}&rdquo;
                </p>
              </blockquote>
              <div className="max-w-lg border-t border-text-primary/10 pt-8">
                <p className="type-body leading-relaxed">
                  {investorFounderCopy.body}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
