import React from "react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-svh w-full items-center overflow-hidden bg-background max-md:items-start max-md:pt-[calc(85px+0.25in)]">
      <div className="page-x relative z-10 flex w-full -translate-y-[0.35in] items-center justify-between gap-12 py-16 max-md:translate-y-0 max-md:flex-col max-md:items-start max-md:gap-6 max-md:py-0 max-md:pb-16">
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

          <div className="flex w-full flex-col gap-1.5 md:flex-row md:flex-wrap md:items-center md:gap-3">
            <a href="#visit" className="btn-primary">
              Try a Burger →
            </a>
            <div className="grid grid-cols-2 gap-3 md:contents">
              <Link
                href="/buy"
                className="btn-outline min-h-14 items-center justify-center px-3 text-center text-xs leading-snug md:min-h-[3.75rem] md:px-4 md:text-sm"
              >
                Own a BurgerBot
              </Link>
              <Link
                href="/investors"
                className="btn-outline min-h-14 items-center justify-center px-3 text-center text-xs leading-snug md:min-h-[3.75rem] md:px-4 md:text-sm"
              >
                Investor Material
              </Link>
            </div>
          </div>

          <p className="type-eyebrow mt-8 text-[0.875rem] md:hidden">
            <span className="block cursor-default underline-offset-[0.2em] transition-[text-decoration] hover:underline">
              Breaking Dawn & First Born
            </span>
            <span className="block cursor-default underline-offset-[0.2em] transition-[text-decoration] hover:underline">
              160 W Main St, 95030
            </span>
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[var(--spacing-page-x)] z-0 hidden items-center justify-end md:flex"
        style={{ transform: "translate(-2rem, calc(-50% - .5in))" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/burgerbots-logo-hero.png"
          alt=""
          width={440}
          height={472}
          className="h-[min(50vh,460px)] w-auto max-w-none select-none object-contain"
        />
      </div>

      <p className="type-eyebrow absolute right-[var(--spacing-page-x)] bottom-[calc(2.5rem+0.25in)] hidden text-right text-[0.875rem] md:block">
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
