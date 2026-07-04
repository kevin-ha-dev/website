import React from "react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-svh w-full items-center overflow-hidden bg-background">
      <div className="page-x relative z-10 flex w-full -translate-y-[0.35in] items-center justify-between gap-12 py-16 max-md:flex-col max-md:items-start max-md:gap-6">
        <div className="relative z-10 flex max-w-2xl flex-col items-start gap-5">
          <p className="type-eyebrow">Los Gatos, CA · Open Tues to Sun</p>

          <h1 className="type-display-xl">
            <span className="block text-text-primary">Made by robots.</span>
            <span className="block text-brand">Loved by humans.</span>
          </h1>

          <p className="type-body-lg">
            Our chefs prepare every burger in house using quality beef. B.O.B.
            handles the garnish, sliced veggies, sauces, the build, to the same
            spec every time. Our humans bring it to your table.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#visit" className="btn-primary">
              Try a Burger →
            </a>
            <Link href="/buy" className="btn-outline">
              Own a BurgerBot
            </Link>
            <Link href="/investors" className="btn-outline">
              Investor Material
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[var(--spacing-page-x)] z-0 flex -translate-x-8 -translate-y-[calc(50%+0.35in)] items-center justify-end max-md:top-auto max-md:right-[var(--spacing-page-x)] max-md:bottom-[calc(7.5rem+0.25in)] max-md:-translate-x-4 max-md:translate-y-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/burgerbots-logo-hero.png"
          alt=""
          width={440}
          height={472}
          className="h-[min(50vh,460px)] w-auto max-w-none select-none object-contain max-md:h-[min(32vh,240px)]"
        />
      </div>

      <p className="type-eyebrow absolute right-[var(--spacing-page-x)] bottom-[calc(2.5rem+0.25in)] text-right text-[0.875rem]">
        <span className="block cursor-default underline-offset-[0.2em] transition-[text-decoration] hover:underline">
          Breaking Dawn & First Born
        </span>
        <span className="block cursor-default underline-offset-[0.2em] transition-[text-decoration] hover:underline">
          160 W Main St, 95030
        </span>
      </p>
    </section>
  );
}
