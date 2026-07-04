"use client";

import { siteConfig } from "@/lib/siteConfig";

const inputClass =
  "w-full border border-border-default rounded-input bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-disabled outline-none focus:ring-2 focus:ring-brand/40 transition";

export function ContactForm() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <h1 className="type-heading-xl text-center text-text-primary mb-4">
        Let&apos;s talk
      </h1>
      <p className="type-body text-center mb-10">
        Tell us about your operations and we&apos;ll get back to you within an
        hour. Or{" "}
        <a
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-primary underline font-medium hover:opacity-70 transition-opacity"
        >
          book a call
        </a>{" "}
        directly.
      </p>

      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-text-primary">
            Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-text-primary">
            Work Email <span className="text-error">*</span>
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-text-primary">
            Phone Number
          </label>
          <input type="tel" placeholder="(optional)" className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-text-primary">
            Tell us about your operations
          </label>
          <textarea
            placeholder="What tasks are you looking to automate?"
            rows={5}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="btn-secondary w-full rounded-button active:scale-[0.98] mt-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
