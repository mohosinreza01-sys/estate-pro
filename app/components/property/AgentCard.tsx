import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function AgentCard() {
  return (
    <aside
      id="contact-agent"
      className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_12px_36px_-24px_rgba(15,23,42,0.35)] sm:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
        Listing agent
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f1f8] text-sm font-bold text-[#084477]"
        >
          CV
        </div>
        <div>
          <h2 className="text-base font-bold text-[#17212f]">
            Carolina Vassalo Coimbra
          </h2>
          <p className="mt-1 text-xs text-gray-500">Zenvia Realty</p>
        </div>
      </div>

      <div className="mt-5 space-y-3 border-t border-gray-100 pt-4 text-sm">
        <a
          href="tel:+16308518290"
          className="flex items-center gap-2 text-gray-600 transition hover:text-[#084477] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#084477]"
        >
          <Phone size={16} className="text-[#084477]" aria-hidden="true" />
          (630) 851-8290
        </a>
        <a
          href="mailto:carolina@example.com"
          className="flex items-center gap-2 text-gray-600 transition hover:text-[#084477] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#084477]"
        >
          <Mail size={16} className="text-[#084477]" aria-hidden="true" />
          carolina@example.com
        </a>
      </div>

      <div className="mt-5 rounded-xl bg-[#f4f8fb] p-4 text-sm leading-6 text-gray-600">
        Interested in this home? Get in touch with Carolina to arrange a visit
        or ask a question.
      </div>

      <Link
        href="mailto:carolina@example.com?subject=Question%20about%204430%20Brighton%20Ct"
        className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#084477] px-4 text-sm font-semibold text-white transition hover:bg-[#062f55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477]"
      >
        <MessageCircle size={16} aria-hidden="true" />
        Contact the agent
      </Link>

      <p className="mt-3 text-center text-xs text-gray-400">
        Your information will be kept private.
      </p>
    </aside>
  );
}
