import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import { VideoEmbed } from "@/components/shared/VideoEmbed";
import {
  homeShowcaseTiles,
  type ShowcaseTile,
} from "@/lib/homeShowcase";

const mobileSizeClasses: Record<ShowcaseTile["size"], string> = {
  sm: "col-span-1 aspect-square",
  md: "col-span-2 aspect-[4/3]",
  lg: "col-span-2 row-span-2 min-h-[min(57vw,398px)]",
  wide: "col-span-2 aspect-[16/9]",
};

const mobileOrderClasses: Record<string, string> = {
  "bob-demo": "order-1",
  grind: "order-2",
  arm: "order-3",
  burger: "order-4",
  kitchen: "order-5",
  visit: "order-6",
};

const desktopSizeClasses: Record<ShowcaseTile["size"], string> = {
  sm: "aspect-square",
  md: "aspect-[4/3]",
  lg: "min-h-[304px] flex-1",
  wide: "aspect-[16/9]",
};

function ShowcaseTileContent({ tile }: { tile: ShowcaseTile }) {
  if (tile.type === "video") {
    return (
      <VideoEmbed
        src={tile.src}
        title={tile.alt}
        className="absolute inset-0"
      />
    );
  }

  return (
    <Image
      src={tile.src}
      alt={tile.alt}
      fill
      sizes="(max-width: 768px) 50vw, 25vw"
      className={`object-cover ${tile.imageClassName ?? ""}`}
    />
  );
}

function MosaicTile({
  tile,
  index,
  className = "",
}: {
  tile: ShowcaseTile;
  index: number;
  className?: string;
}) {
  const ctaFooter = tile.cta ? (
    <a
      href={tile.cta.href}
      className="btn-primary justify-center py-[var(--bb-button-sm-padding-y)] md:py-[var(--bb-button-padding-y)]"
    >
      {tile.cta.label}
    </a>
  ) : undefined;

  const fillClass = tile.size === "lg" ? "h-full" : "w-full min-w-0";

  return (
    <FadeIn
      delay={index * 0.06}
      className={`${mobileSizeClasses[tile.size]} ${mobileOrderClasses[tile.id] ?? ""} md:order-0 flex ${fillClass} ${className}`}
    >
      <PixelFrame
        label={tile.label}
        labelPosition="overlay"
        footer={ctaFooter}
        className="h-full w-full"
      >
        <div
          className={`relative h-full w-full ${
            tile.size === "lg" ? "min-h-[228px] md:min-h-full" : "min-h-[114px]"
          }`}
        >
          <ShowcaseTileContent tile={tile} />
        </div>
      </PixelFrame>
    </FadeIn>
  );
}

function tileIndex(id: string) {
  return homeShowcaseTiles.findIndex((tile) => tile.id === id);
}

function tileById(id: string) {
  const tile = homeShowcaseTiles.find((item) => item.id === id);
  if (!tile) {
    throw new Error(`Missing showcase tile: ${id}`);
  }
  return tile;
}

export function PixelMosaicShowcase() {
  return (
    <section className="page-x section-y-md bg-background">
      <FadeIn className="mb-10 md:mb-14">
        <div className="flex flex-col gap-2">
          <h2 className="type-heading-xl text-text-primary">
            A look inside the kitchen.
          </h2>
          <p className="type-heading-md leading-snug text-text-primary">
            &ldquo;Side by side,{" "}
            <span className="font-semibold text-brand">not head to head.</span>
            &rdquo;
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-5">
        <div className="contents md:flex md:min-h-0 md:flex-col md:gap-5">
          <MosaicTile
            tile={tileById("bob-demo")}
            index={tileIndex("bob-demo")}
            className={`md:col-span-auto md:row-span-auto ${desktopSizeClasses.lg}`}
          />
          <MosaicTile
            tile={tileById("kitchen")}
            index={tileIndex("kitchen")}
            className={desktopSizeClasses.wide}
          />
        </div>

        <div className="contents md:flex md:flex-col md:gap-5">
          <MosaicTile
            tile={tileById("grind")}
            index={tileIndex("grind")}
            className={desktopSizeClasses.md}
          />
          <div className="contents md:grid md:grid-cols-2 md:gap-5">
            <MosaicTile
              tile={tileById("arm")}
              index={tileIndex("arm")}
              className={desktopSizeClasses.sm}
            />
            <MosaicTile
              tile={tileById("burger")}
              index={tileIndex("burger")}
              className={desktopSizeClasses.sm}
            />
          </div>
          <MosaicTile
            tile={tileById("visit")}
            index={tileIndex("visit")}
            className={desktopSizeClasses.md}
          />
        </div>
      </div>
    </section>
  );
}
