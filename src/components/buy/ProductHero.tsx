import { ScrollToHashLink } from "@/components/shared/ScrollToHashLink";
import { VideoEmbed } from "@/components/shared/VideoEmbed";
import { buyRequestSectionCopy } from "@/lib/buyRequest";
import { NAV_BAR_HEIGHT_PX } from "@/lib/navLinks";
import { siteConfig } from "@/lib/siteConfig";

export function ProductHero() {
  return (
    <section className="page-x border-b border-text-primary/10 bg-background">
      <div
        className="mx-auto grid max-w-[1200px] grid-cols-12 gap-x-6 gap-y-5 pb-14 md:gap-x-8 md:gap-y-10 md:pb-20"
        style={{ paddingTop: NAV_BAR_HEIGHT_PX + 72 }}
      >
        <h1 className="type-display-sm col-span-12 text-text-primary md:col-span-5 lg:col-span-4">
          Put B.O.B. in your kitchen.
        </h1>
        <p className="type-body col-span-12 max-w-xs leading-relaxed md:col-span-5 lg:col-span-4">
          Want to learn more? Tell us about your operation and we&apos;ll walk
          you through ownership, setup, and menu training.
        </p>

        <div className="col-span-12 md:col-start-7 md:col-span-6 md:row-start-1 md:row-span-3 lg:col-start-6 lg:col-span-7">
          <div className="relative aspect-video w-full border border-text-primary/12 bg-text-primary/4">
            <VideoEmbed
              src={siteConfig.demoVideoUrl}
              title="BurgerBots in action"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <ScrollToHashLink
          href="#request"
          className="btn-primary col-span-12 mt-1 w-full justify-center md:col-span-5 md:w-fit md:justify-start lg:col-span-4"
        >
          {buyRequestSectionCopy.ctaLabel}
        </ScrollToHashLink>
      </div>
    </section>
  );
}
