"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  buyOperationOptions,
  buyRequestCopy,
} from "@/lib/buyRequest";

const labelClass = "text-sm font-semibold text-text-on-dark";
const inputClass =
  "w-full border border-white/20 rounded-input bg-white/5 px-4 py-3 text-sm text-text-on-dark placeholder:text-text-on-dark-muted outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition";

export function BuyRequestForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      operation: String(formData.get("operation") ?? "").trim(),
      about: String(formData.get("about") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/buy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      router.push("/buy/thank-you");
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className={labelClass}>
          Name and restaurant <span className="text-brand">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={buyRequestCopy.namePlaceholder}
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
          placeholder="you@restaurant.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="operation" className={labelClass}>
          What best describes your operation?{" "}
          <span className="text-brand">*</span>
        </label>
        <select
          id="operation"
          name="operation"
          required
          defaultValue=""
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {buyOperationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="about" className={labelClass}>
          Tell us about your kitchen <span className="text-brand">*</span>
        </label>
        <textarea
          id="about"
          name="about"
          required
          rows={5}
          placeholder={buyRequestCopy.aboutPlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-brand" role="alert">
          Something went wrong sending your request. Please try again or email{" "}
          {buyRequestCopy.fallbackEmail}.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary mt-2 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : buyRequestCopy.submitLabel}
      </button>
    </form>
  );
}
