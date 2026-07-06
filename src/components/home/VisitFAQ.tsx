"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { siteConfig } from "@/lib/siteConfig";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const visitFaqs: FAQ[] = [
  {
    question:
      "Can I order from BurgerBots if I have special dietary requirements?",
    answer:
      "Absolutely! We have delicious vegetarian, vegan, and gluten free options. And if you're allergic to something? We gotchu'. Just chat with one of our humans before ordering or pop a note in your online order. Easy peasy, extra cheesy!",
  },
  {
    question: "Is everything freshly stocked and prepared?",
    answer:
      "Man, we're obsessed with freshness. In fact, that's the whole point of this (gestures around). Every part of your burger is prepped with quality ingredients. We're talking the lettuce, the onions, the tomatoes, all of it gets the VIP treatment, sliced, diced, and prepped right in front of you in real time. We also restock B.O.B's goods several times a day, so no leftovers are sitting around for hours. (Ew.)",
  },
  {
    question: "Can I watch my burger be made, or is that just weird?",
    answer:
      "You sure can! (To be honest, we'd be kinda bummed out if you didn't.) Unlike other automated burger machines, we don't gatekeep what's inside. B.O.B. is encased in crystal clear glass, so you can watch the whole process from garnish to plate right before your eyes. (Not gonna lie, it's pretty dope.) Just ask one of our friendly servers to let you know when your burger is being made and head over to the shiny Bot in the corner to watch the magic roll out.",
  },
  {
    question:
      "Where can I get my BurgerBots burg from? Do I have to make a reservation?",
    answer: (
      <>
        BurgerBots is currently and exclusively available at 160 W Main Street,
        Los Gatos, home to Breaking Dawn Brunch and First Born Los Gatos.
        Can&apos;t make it in? Order your BurgerBots burger online through either
        restaurant&apos;s website or your favorite meal delivery app. Order
        through the Breaking Dawn Brunch website{" "}
        <Link
          href="https://www.breakingdawnbrunch.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-text-primary underline underline-offset-2"
        >
          HERE
        </Link>
        .
      </>
    ),
  },
  {
    question: "Does BurgerBots have space for humans? I need a job.",
    answer: (
      <>
        We love adding good humans to the roster. Send us your resume at{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="font-medium text-text-primary underline underline-offset-2"
        >
          {siteConfig.contactEmail}
        </a>
        , and B.O.B. (or one of his underlings) will get back to you.
      </>
    ),
  },
];

function FAQItem({ question, answer }: FAQ) {
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
          open ? "max-h-[600px] pb-5" : "max-h-0"
        }`}
      >
        <div className="type-body-sm">{answer}</div>
      </div>
    </div>
  );
}

export function VisitFAQ() {
  return (
    <div className="mt-8 border-t border-dashed border-text-primary/10 pt-6">
      <FadeIn>
        <h3 className="type-heading-md text-text-primary">Try a Burger FAQ</h3>
      </FadeIn>
      <div className="mt-6 flex flex-col">
        {visitFaqs.map((faq, i) => (
          <FadeIn key={faq.question} delay={i * 0.06}>
            <FAQItem question={faq.question} answer={faq.answer} />
          </FadeIn>
        ))}
        <div className="border-t border-border-subtle" />
      </div>
    </div>
  );
}
