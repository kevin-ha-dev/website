import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { NAV_BAR_HEIGHT_PX } from "@/lib/navLinks";

export const metadata: Metadata = {
  title: "Request received | BURGERBOTS",
  description:
    "Thanks for reaching out. Liz will review your note and follow up about ownership.",
};

export default function BuyThankYouPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background text-text-primary">
      <section className="page-x flex flex-1 items-center">
        <div
          className="mx-auto flex w-full max-w-[1200px] flex-col items-center pb-24 text-center"
          style={{ paddingTop: NAV_BAR_HEIGHT_PX + 72 }}
        >
          <p className="type-eyebrow text-brand">Request received</p>
          <h1 className="type-display-sm mt-4 max-w-xl text-text-primary">
            Thanks, this is on Liz&apos;s desk.
          </h1>
          <p className="type-body mt-6 max-w-xl leading-relaxed">
            Liz reads every note personally. If there&apos;s a fit, we&apos;ll
            reach out from realhuman@burgerbots.com to walk through ownership,
            setup, and menu training for your kitchen. No automated funnel — just
            a real reply.
          </p>
          <Link href="/buy" className="btn-primary mt-10 w-fit">
            ← Back to Own a BurgerBot
          </Link>
        </div>
      </section>
      <Footer variant="minimal" />
    </main>
  );
}
