import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import { VisitFAQ } from "@/components/home/VisitFAQ";
import { NAV_BAR_HEIGHT_PX } from "@/lib/navLinks";
import { siteConfig } from "@/lib/siteConfig";

const { restaurant } = siteConfig;

export function VisitSection() {
  return (
    <section
      id="visit"
      className="page-x border-t border-dashed border-text-primary/10 bg-surface-muted py-[calc(var(--spacing-section-sm)+0.25in)]"
      style={{ scrollMarginTop: NAV_BAR_HEIGHT_PX }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-[26rem_minmax(0,1fr)] md:gap-10">
        <FadeIn className="min-h-0 w-full">
          <PixelFrame
            label="Breaking Dawn · Los Gatos"
            labelPosition="overlay"
            className="h-full w-full"
          >
            <div className="relative aspect-[682/1024] w-full md:aspect-auto md:h-full md:min-h-0">
              <Image
                src={restaurant.visitImage}
                alt="Fried chicken sandwich and fries at Breaking Dawn in Los Gatos"
                fill
                sizes="(max-width: 768px) 100vw, 26rem"
                quality={90}
                className="object-cover"
              />
            </div>
          </PixelFrame>
        </FadeIn>

        <FadeIn delay={0.1} className="flex min-w-0 flex-col justify-between gap-6 md:gap-6">
          <div>
            <p className="type-eyebrow">Swing By</p>
            <h2 className="type-heading-xl mt-2 text-text-primary">
              Servin&apos; Burgs
            </h2>
            <div className="mt-4 flex flex-col gap-1 text-text-primary">
              {restaurant.hours.map((block) => (
                <div key={block.days}>
                  <p className="font-semibold">{block.days}</p>
                  <p className="text-text-secondary">{block.time}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-text-secondary">
              {restaurant.address}, {restaurant.city}
            </p>
            <p className="type-body-lg mt-4">
              One kitchen, two concepts. B.O.B. runs the line for both: Breaking
              Dawn Brunch in the morning and First Born Los Gatos for happy hour
              and dinner.
            </p>
            <p className="type-body-lg mt-3">
              Walk in, grab a seat, and watch the line. Our chefs cook every
              patty. B.O.B. handles the garnish. Our servers bring it to your
              table.
            </p>
          </div>

          <div className="grid shrink-0 grid-cols-2 gap-3">
            <a
              href={restaurant.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-h-14 items-center justify-center px-3 text-center text-xs leading-snug md:min-h-[3.75rem] md:px-4 md:text-sm"
            >
              Reserve at Breaking Dawn Brunch on Yelp →
            </a>
            <a
              href={restaurant.openTableUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline min-h-14 items-center justify-center px-3 text-center text-xs leading-snug md:min-h-[3.75rem] md:px-4 md:text-sm"
            >
              Reserve at First Born Los Gatos on OpenTable →
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-5xl">
        <VisitFAQ />
      </div>
    </section>
  );
}
