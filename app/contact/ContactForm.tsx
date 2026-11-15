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
      className="rounded-[24px] border border-[#e5dece] bg-[#fbf9f2] p-5 shadow-[0_16px_45px_rgba(26,41,29,0.07)] sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[#46554b]">
          Your name
          <input
            name="name"
            autoComplete="name"
            required
            className="min-h-12 rounded-xl border border-[#ddd6c6] bg-white/70 px-4 text-base font-normal text-[#19372f] outline-none transition placeholder:text-[#9a988d] focus:border-[#927747] focus:ring-4 focus:ring-[#b99a5a]/15"
            placeholder="Name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#46554b]">
          Email address
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="min-h-12 rounded-xl border border-[#ddd6c6] bg-white/70 px-4 text-base font-normal text-[#19372f] outline-none transition placeholder:text-[#9a988d] focus:border-[#927747] focus:ring-4 focus:ring-[#b99a5a]/15"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-medium text-[#46554b]">
        Phone number <span className="font-normal text-[#99968a]">(optional)</span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          className="min-h-12 rounded-xl border border-[#ddd6c6] bg-white/70 px-4 text-base font-normal text-[#19372f] outline-none transition placeholder:text-[#9a988d] focus:border-[#927747] focus:ring-4 focus:ring-[#b99a5a]/15"
          placeholder="(555) 555-5555"
        />
      </label>

      <label className="mt-5 grid gap-2 text-sm font-medium text-[#46554b]">
        How can we help?
        <textarea
          name="message"
          required
          rows={5}
          className="resize-y rounded-xl border border-[#ddd6c6] bg-white/70 px-4 py-3 text-base font-normal text-[#19372f] outline-none transition placeholder:text-[#9a988d] focus:border-[#927747] focus:ring-4 focus:ring-[#b99a5a]/15"
          placeholder="Tell us what you would like to know."
        />
      </label>

      <p className="mt-4 text-xs leading-5 text-[#777465]">
        Submitting opens your email app with a prefilled message. The message is
        not sent until you review and send it there.
      </p>

      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#214b38] px-6 text-sm font-semibold text-[#faf8f0] transition hover:bg-[#173a2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#927747] sm:w-auto"
      >
        Prepare your message
        <ArrowRight size={17} aria-hidden="true" />
      </button>

      <p role="status" aria-live="polite" className="mt-3 text-sm text-[#765f2f]">
        {status}
      </p>
    </form>
  );
}
