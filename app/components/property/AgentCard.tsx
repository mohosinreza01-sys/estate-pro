import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function AgentCard() {
  return (
    <aside
      id="contact-agent"
      className="scroll-mt-24 rounded-[24px] border border-[#d3b875]/25 bg-[#173a2b] p-5 text-[#faf8f0] shadow-[0_20px_50px_rgba(16,46,36,0.18)] sm:p-6"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d3b875]">
        Listing agent
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d3b875]/40 bg-[#d3b875]/15 text-sm font-semibold text-[#e4cc8f]"
        >
          CV
        </div>
        <div>
          <h2 className="text-base font-semibold text-[#faf8f0]">
            Carolina Vassalo Coimbra
          </h2>
          <p className="mt-1 text-xs text-white/55">Zenvia Realty</p>
        </div>
      </div>

      <div className="mt-5 space-y-3 border-t border-white/15 pt-4 text-sm">
        <a
          href="tel:+16308518290"
          className="flex items-center gap-2 text-white/75 transition hover:text-[#e3cc91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d3b875]"
        >
          <Phone size={16} className="text-[#d3b875]" aria-hidden="true" />
          (630) 851-8290
        </a>
        <a
          href="mailto:carolina@example.com"
          className="flex items-center gap-2 text-white/75 transition hover:text-[#e3cc91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d3b875]"
        >
          <Mail size={16} className="text-[#d3b875]" aria-hidden="true" />
          carolina@example.com
        </a>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 text-white/70">
        Interested in this home? Get in touch with Carolina to arrange a visit
        or ask a question.
      </div>

      <Link
        href="mailto:carolina@example.com?subject=Question%20about%204430%20Brighton%20Ct"
        className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#d3b875] px-4 text-sm font-semibold text-[#173a2b] transition hover:bg-[#e3cc91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <MessageCircle size={16} aria-hidden="true" />
        Contact the agent
      </Link>

      <p className="mt-3 text-center text-xs text-white/45">
        Your information will be kept private.
      </p>
    </aside>
  );
}
