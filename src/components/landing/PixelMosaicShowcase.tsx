import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import { VideoEmbed } from "@/components/shared/VideoEmbed";
import {
  homeShowcaseTiles,
  type ShowcaseTile,
} from "@/lib/homeShowcase";

const sizeClasses: Record<ShowcaseTile["size"], string> = {
  sm: "col-span-1 aspect-square",
  md: "col-span-2 aspect-[4/3]",
  lg: "col-span-2 row-span-2 min-h-[min(60vw,420px)] md:min-h-0",
  wide: "col-span-2 aspect-[16/9]",
};

function ShowcaseTileContent({ tile }: { tile: ShowcaseTile }) {
  if (tile.type === "video") {
    return (
      <VideoEmbed
        src={tile.src}
        title={tile.alt}
        className="absolute inset-0 h-full w-full"
      />
    );
  }

  return (
    <Image
      src={tile.src}
      alt={tile.alt}
      fill
      sizes="(max-width: 768px) 50vw, 25vw"
      className="object-cover"
    />
  );
}

function MosaicTile({ tile, index }: { tile: ShowcaseTile; index: number }) {
  const ctaFooter = tile.cta ? (
    <a href={tile.cta.href} className="btn-primary">
      {tile.cta.label}
    </a>
  ) : undefined;

  const fillClass = tile.size === "lg" ? "h-full" : "w-full min-w-0";

  return (
    <FadeIn
      delay={index * 0.06}
      className={`${sizeClasses[tile.size]} flex ${fillClass}`}
    >
      <PixelFrame
        label={tile.label}
        footer={ctaFooter}
        className="h-full w-full"
      >
        <div
          className={`relative w-full ${
            tile.size === "lg" ? "min-h-[240px] md:min-h-full md:h-full" : "h-full min-h-[120px]"
          }`}
        >
          <ShowcaseTileContent tile={tile} />
        </div>
      </PixelFrame>
    </FadeIn>
  );
}

export function PixelMosaicShowcase() {
  return (
    <section className="section-shell bg-background">
      <FadeIn className="mb-10 md:mb-14">
        <h2 className="type-heading-xl text-text-primary">
          A look inside the kitchen.
        </h2>
        <p className="type-body-lg mt-3 max-w-xl">
          Photos and clips from the line. B.O.B. at work.
        </p>
      </FadeIn>

      <div className="grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {homeShowcaseTiles.map((tile, i) => (
          <MosaicTile key={tile.id} tile={tile} index={i} />
        ))}
      </div>
    </section>
  );
}
