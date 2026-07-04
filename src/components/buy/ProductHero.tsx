import Link from "next/link";
import { VideoEmbed } from "@/components/shared/VideoEmbed";
import { NAV_BAR_HEIGHT_PX } from "@/lib/navLinks";
import { siteConfig } from "@/lib/siteConfig";

export function ProductHero() {
  return (
    <section className="page-x border-b border-text-primary/10 bg-background">
      <div
        className="mx-auto grid max-w-[1200px] grid-cols-12 gap-x-6 gap-y-10 pb-14 md:gap-x-8 md:pb-20"
        style={{ paddingTop: NAV_BAR_HEIGHT_PX + 72 }}
      >
        <div className="col-span-12 flex flex-col gap-5 md:col-span-5 lg:col-span-4">
          <h1 className="type-display-sm text-text-primary">
            Put B.O.B. in your kitchen.
          </h1>
          <p className="type-body max-w-xs leading-relaxed">
            Want to learn more? Book a call and we&apos;ll walk you through
            ownership, setup, and menu training.
          </p>
          <Link
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-1 w-fit"
          >
            Book a call →
          </Link>
        </div>

        <div className="col-span-12 md:col-start-7 md:col-span-6 lg:col-start-6 lg:col-span-7">
          <div className="relative aspect-video w-full border border-text-primary/12 bg-text-primary/4">
            <VideoEmbed
              src={siteConfig.demoVideoUrl}
              title="BurgerBots in action"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
