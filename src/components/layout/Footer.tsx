import React from "react";
import { siteConfig } from "@/lib/siteConfig";

type FooterProps = {
  variant?: "full" | "minimal";
  /** Match the 1200px content column used on buy/investor pages */
  contentWidth?: "1200";
};

function SocialIcons() {
  return (
  <>
    <a href="#" aria-label="LinkedIn">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-text-on-dark"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </a>
    <a href="#" aria-label="Twitter">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-text-on-dark"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    </a>
    <a href="#" aria-label="YouTube">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-text-on-dark"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    </a>
    <a href={`mailto:${siteConfig.contactEmail}`} aria-label="Email">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-text-on-dark"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    </a>
  </>
  );
}

export function Footer({ variant = "full", contentWidth }: FooterProps) {
  const innerClass =
    contentWidth === "1200" ? "mx-auto w-full max-w-[1200px]" : "";

  if (variant === "minimal") {
    return (
      <footer className="flex flex-col bg-surface-dark">
        <div className="border-t border-dashed border-border-dark" />
        <div className="page-x py-10">
          <div
            className={`flex flex-col items-center gap-6 md:flex-row md:justify-between ${innerClass}`}
          >
            <p className="type-eyebrow text-center text-text-on-dark-muted md:text-left">
              <span className="block">Breaking Dawn & First Born</span>
              <span className="block">160 W Main St, 95030</span>
            </p>
            <div className="flex items-center justify-center gap-8">
              <SocialIcons />
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="flex flex-col bg-surface-dark">
      <div className="section-shell flex flex-col items-center gap-10">
        <h2 className="type-cta max-w-[700px] text-center text-text-on-dark">
          Less time on the line.
          <br />
          More time on what matters.
        </h2>
        <a
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-button bg-background px-9 py-4 text-base font-semibold text-brand-contrast"
        >
          Book a call
        </a>
      </div>

      <div className="border-t border-dashed border-border-dark" />

      <div className="page-x flex items-center justify-center gap-8 py-10">
        <SocialIcons />
      </div>
    </footer>
  );
}
