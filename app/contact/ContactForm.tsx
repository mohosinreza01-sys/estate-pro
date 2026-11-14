"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Zenvia inquiry from ${name}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : "", "", message]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:hello@zenvia.com?subject=${subject}&body=${body}`;
    setStatus(
      "Your email app should open with your message. Review it there and send it when you are ready.",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Your name
          <input
            name="name"
            autoComplete="name"
            required
            className="min-h-12 rounded-xl border border-gray-300 px-4 text-base font-normal text-[#17212f] outline-none transition placeholder:text-gray-400 focus:border-[#084477] focus:ring-4 focus:ring-[#084477]/10"
            placeholder="Name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Email address
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="min-h-12 rounded-xl border border-gray-300 px-4 text-base font-normal text-[#17212f] outline-none transition placeholder:text-gray-400 focus:border-[#084477] focus:ring-4 focus:ring-[#084477]/10"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-medium text-gray-700">
        Phone number <span className="font-normal text-gray-400">(optional)</span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          className="min-h-12 rounded-xl border border-gray-300 px-4 text-base font-normal text-[#17212f] outline-none transition placeholder:text-gray-400 focus:border-[#084477] focus:ring-4 focus:ring-[#084477]/10"
          placeholder="(555) 555-5555"
        />
      </label>

      <label className="mt-5 grid gap-2 text-sm font-medium text-gray-700">
        How can we help?
        <textarea
          name="message"
          required
          rows={5}
          className="resize-y rounded-xl border border-gray-300 px-4 py-3 text-base font-normal text-[#17212f] outline-none transition placeholder:text-gray-400 focus:border-[#084477] focus:ring-4 focus:ring-[#084477]/10"
          placeholder="Tell us what you would like to know."
        />
      </label>

      <p className="mt-4 text-xs leading-5 text-gray-500">
        Submitting opens your email app with a prefilled message. The message is
        not sent until you review and send it there.
      </p>

      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#084477] px-5 text-sm font-semibold text-white transition hover:bg-[#062f55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477] sm:w-auto"
      >
        Prepare your message
        <ArrowRight size={17} aria-hidden="true" />
      </button>

      <p role="status" aria-live="polite" className="mt-3 text-sm text-[#084477]">
        {status}
      </p>
    </form>
  );
}
