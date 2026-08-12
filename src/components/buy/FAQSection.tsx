"use client";

import { useState } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { ScrollToHashLink } from "@/components/shared/ScrollToHashLink";
import { siteConfig } from "@/lib/siteConfig";

const faqs = [
  {
    question: "Do I need to redesign my kitchen to install it?",
    answer:
      "BurgerBots is designed to work in the kitchen you already have and can be configured to fit your space.",
  },
  {
    question: "What does setup look like?",
    answer:
      "We come in and coordinate with your team on your menu, restaurant setup, and delivery.",
  },
  {
    question: "How fast can it actually work?",
    answer:
      "BurgerBots garnishes the burger in 27 seconds.",
  },
  {
    question:
      "I want in on this bun in a million experience. Can I buy or license my own BurgerBot from you?",
    answer: (
      <>
        You bet.{" "}
        <ScrollToHashLink
          href="#request"
          className="font-medium text-text-primary underline underline-offset-2"
        >
          Tell us about your kitchen
        </ScrollToHashLink>{" "}
        and we&apos;ll follow up, or email{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="font-medium text-text-primary underline underline-offset-2"
        >
          {siteConfig.contactEmail}
        </a>
        .
      </>
    ),
  },
];

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-border-subtle">
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-8 text-sm font-medium text-text-primary">
          {question}
        </span>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center text-xl font-light text-text-primary transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-64 pb-5" : "max-h-0"
        }`}
      >
        <div className="type-body-sm">{answer}</div>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="section-shell border-b border-text-primary/10 bg-background">
      <div className="mx-auto grid max-w-[1200px] grid-cols-12 gap-x-6 gap-y-8 md:gap-x-8">
        <FadeIn className="col-span-12 md:col-span-4">
          <h2 className="type-heading-md text-text-primary">
            Your questions answered
          </h2>
        </FadeIn>
        <div className="col-span-12 flex flex-col md:col-span-8 md:col-start-5">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.08}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </FadeIn>
          ))}
          <div className="border-t border-border-subtle" />
        </div>
      </div>
    </section>
  );
}
