import { BookDemoCTA } from "@/components/buy/BookDemoCTA";
import { FAQSection } from "@/components/buy/FAQSection";
import { ProductHero } from "@/components/buy/ProductHero";
import { ProductStats } from "@/components/buy/ProductStats";
import { SpecTable } from "@/components/shared/SpecTable";
import { Footer } from "@/components/layout/Footer";
import { buyHardwareSection } from "@/lib/hardwareSpecs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Own a BurgerBot | BURGERBOTS",
  description:
    "Meet B.O.B., the BurgerBot system that fits your kitchen. Our team handles setup, 27 seconds a burger, learns from live demonstrations.",
};

export default function BuyPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background text-text-primary">
      <ProductHero />
      <ProductStats />
      <SpecTable {...buyHardwareSection} layout="split" />
      <FAQSection />
      <BookDemoCTA />
      <Footer variant="minimal" contentWidth="1200" />
    </main>
  );
}
