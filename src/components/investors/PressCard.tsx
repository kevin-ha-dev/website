"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { PressLink } from "@/lib/investorPartnership";

function getYoutubeVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/,
  );
  return match?.[1] ?? null;
}

type PressCardProps = {
  article: PressLink;
};

export function PressCard({ article }: PressCardProps) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYoutubeVideoId(article.href);

  const media = (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-text-primary/12 bg-background">
      {playing && videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={article.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <>
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes="(max-width: 640px) 33vw, (max-width: 1200px) 30vw, 380px"
            quality={92}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            style={
              article.image.objectPosition
                ? { objectPosition: article.image.objectPosition }
                : undefined
            }
          />
          {videoId ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group/play absolute inset-0 flex items-center justify-center bg-text-primary/15 transition-colors hover:bg-text-primary/25"
              aria-label={`Play ${article.title}`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/95 text-text-primary shadow-sm transition-transform group-hover/play:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="ml-0.5 h-5 w-5 fill-current"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          ) : null}
        </>
      )}
    </div>
  );

  if (!videoId) {
    return (
      <Link
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col"
      >
        {media}
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
    );
  }

  return (
    <div className="flex flex-col">
      {media}
      <p className="type-eyebrow mt-4 mb-1.5">{article.source}</p>
      <p className="text-sm font-medium leading-snug text-text-primary">
        {article.title}
      </p>
    </div>
  );
}
