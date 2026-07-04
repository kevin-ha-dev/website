import React from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { PixelFrame } from "@/components/home/PixelFrame";
import { bobFacts } from "@/lib/bobFacts";

export function BobFactCards() {
  return (
    <section className="page-x section-y-md bg-background">
      <FadeIn className="mb-8 md:mb-10">
        <h2 className="type-heading-md text-text-primary">
          A few things about our robot chef.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {bobFacts.map((fact, i) => (
          <FadeIn key={fact.id} delay={i * 0.06}>
            <PixelFrame>
              <div className="flex aspect-square flex-col items-center justify-center gap-2 p-4 text-center">
                <p className="type-heading-md font-bold leading-none text-text-primary">
                  {fact.value}
                </p>
                <p className="type-detail">
                  {fact.label}
                </p>
              </div>
            </PixelFrame>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
