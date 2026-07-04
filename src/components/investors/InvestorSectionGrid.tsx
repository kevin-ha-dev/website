import { FadeIn } from "@/components/shared/FadeIn";
import type { ReactNode } from "react";

type InvestorSectionGridProps = {
  id?: string;
  title: string;
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function InvestorSectionGrid({
  id,
  title,
  children,
  delay = 0,
  className = "",
}: InvestorSectionGridProps) {
  return (
    <div
      id={id}
      className={`scroll-mt-[85px] grid grid-cols-12 gap-x-6 gap-y-6 border-t border-text-primary/10 pt-10 md:gap-x-8 md:gap-y-8 md:pt-14 ${className}`}
    >
      <FadeIn delay={delay} className="col-span-12 md:col-span-4">
        <h2 className="type-heading-md text-text-primary">{title}</h2>
      </FadeIn>
      <div className="col-span-12 md:col-span-8 md:col-start-5">{children}</div>
    </div>
  );
}

type InvestorGridRowProps = {
  label: string;
  children: ReactNode;
  isLast?: boolean;
  delay?: number;
};

export function InvestorGridRow({
  label,
  children,
  isLast = false,
  delay = 0,
}: InvestorGridRowProps) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`grid grid-cols-1 gap-2 border-t border-text-primary/10 py-4 md:grid-cols-[5.5rem_1fr] md:gap-x-8 md:py-5 ${
          isLast ? "border-b" : ""
        }`}
      >
        <p className="type-eyebrow text-text-primary">{label}</p>
        <div>{children}</div>
      </div>
    </FadeIn>
  );
}
