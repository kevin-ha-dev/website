"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { investorRequestCopy, investorStageOptions } from "@/lib/investorDeck";

const labelClass = "text-sm font-semibold text-text-on-dark";
const inputClass =
  "w-full border border-white/20 rounded-input bg-white/5 px-4 py-3 text-sm text-text-on-dark placeholder:text-text-on-dark-muted outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition";

export function InvestorRequestForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      stage: String(formData.get("stage") ?? "").trim(),
      about: String(formData.get("about") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/investors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      router.push("/investors/thank-you");
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className={labelClass}>
          Name and firm <span className="text-brand">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={investorRequestCopy.namePlaceholder}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className={labelClass}>
          Work email <span className="text-brand">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@firm.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="stage" className={labelClass}>
          What stage do you typically invest at?{" "}
          <span className="text-brand">*</span>
        </label>
        <select
          id="stage"
          name="stage"
          required
          defaultValue=""
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>
            Select a stage
          </option>
          {investorStageOptions.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="about" className={labelClass}>
          Tell us about yourself <span className="text-brand">*</span>
        </label>
        <textarea
          id="about"
          name="about"
          required
          rows={5}
          placeholder={investorRequestCopy.aboutPlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-brand" role="alert">
          Something went wrong sending your request. Please try again or email{" "}
          {investorRequestCopy.fallbackEmail}.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary mt-2 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : investorRequestCopy.submitLabel}
      </button>
    </form>
  );
}
