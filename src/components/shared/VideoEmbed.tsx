"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
  className?: string;
};

function isEmbedUrl(src: string) {
  return /youtube\.com|youtu\.be|vimeo\.com/.test(src);
}

function NativeVideo({
  src,
  title,
  className = "",
}: {
  src: string;
  title: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className || "relative h-full w-full"}>
      <video
        ref={videoRef}
        src={src}
        title={title}
        muted
        playsInline
        loop
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

export function VideoEmbed({ src, title, className = "" }: Props) {
  const [active, setActive] = useState(false);

  if (!isEmbedUrl(src)) {
    return <NativeVideo src={src} title={title} className={className} />;
  }

  return (
    <div className={`relative ${className}`}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
      {!active && (
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />
      )}
    </div>
  );
}
