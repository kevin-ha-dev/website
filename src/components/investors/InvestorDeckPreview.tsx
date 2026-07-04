import { FadeIn } from "@/components/shared/FadeIn";
import {
  InvestorGridRow,
  InvestorSectionGrid,
} from "@/components/investors/InvestorSectionGrid";
import { investorDeckTopics } from "@/lib/investorDeck";

export function InvestorDeckPreview() {
  return (
    <section className="section-shell border-b border-text-primary/10 bg-background">
      <div className="mx-auto max-w-[1200px]">
        <InvestorSectionGrid
          title="What's inside."
          className="border-t-0 pt-0"
        >
          {investorDeckTopics.map((topic, i) => (
            <InvestorGridRow
              key={topic.title}
              label={String(i + 1).padStart(2, "0")}
              isLast={i === investorDeckTopics.length - 1}
              delay={i * 0.06}
            >
              <p className="text-sm font-semibold tracking-tight text-text-primary">
                {topic.title}
              </p>
              <p className="type-body mt-1 leading-relaxed">{topic.description}</p>
            </InvestorGridRow>
          ))}
        </InvestorSectionGrid>
      </div>
    </section>
  );
}
