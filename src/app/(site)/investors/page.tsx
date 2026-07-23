import { InvestorCTA } from "@/components/investors/InvestorCTA";
import { InvestorDeckPreview } from "@/components/investors/InvestorDeckPreview";
import { InvestorHero } from "@/components/investors/InvestorHero";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Material | BURGERBOTS",
  description:
    "BurgerBots investor overview: live robotic kitchen assembly in Los Gatos, with demonstration-based learning and scalable rollout.",
};

export default function InvestorsPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background text-text-primary">
      <InvestorHero />
      <InvestorDeckPreview />
      <InvestorCTA />
      <Footer variant="minimal" />
    </main>
  );
}
