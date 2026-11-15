import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Zenvia | Let's Talk Real Estate",
  description:
    "Contact Zenvia with questions about a property, buying, selling, or working with a real estate agent.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@zenvia.com",
    href: "mailto:hello@zenvia.com",
  },
  {
    icon: Phone,
    label: "Call",
    value: "+1 234 567 890",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    label: "Our area",
    value: "Harrisburg, Pennsylvania",
    href: "https://maps.google.com/?q=Harrisburg,+PA",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-[#102e24] text-[#faf8f0]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-48 h-[34rem] w-[34rem] rounded-full border border-[#d3b875]/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-28 h-[25rem] w-[25rem] rounded-full border border-[#d3b875]/15"
          />
          <div className="container-main relative grid gap-9 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d3b875]">
                A good place to begin
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">
                Let&apos;s talk about
                <br />
                <span className="font-serif font-normal italic text-[#d3b875]">
                  what comes next.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#f4f0e4]/75 sm:text-lg">
                Tell us what you&apos;re looking for, ask about a home, or simply
                start a conversation with our local team.
              </p>
            </div>
            <div className="relative flex max-w-sm items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d3b875]/15 text-[#d3b875]">
                <MapPin size={21} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#d3b875]">
                  Rooted in the region
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Harrisburg, Pennsylvania
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f0e6]">
          <div className="container-main grid gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)] lg:gap-12 lg:py-20">
            <div>
              <p className="eyebrow">We&apos;re listening</p>
              <h2 className="section-title text-3xl sm:text-4xl">
                Tell us a little about your next move.
              </h2>
              <p className="mt-3 mb-7 max-w-xl text-sm leading-6 text-[#6f746a]">
                Share a few details and we&apos;ll help you find the right next
                step. Your message opens in your email app for you to review.
              </p>
              <ContactForm />
            </div>

            <aside className="space-y-5 lg:pt-14">
              <div className="rounded-[24px] bg-[#173a2b] p-6 text-[#faf8f0] shadow-[0_20px_50px_rgba(16,46,36,0.16)] sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d3b875]">
                  Prefer a direct conversation?
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  We&apos;re here to help.
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Reach out by phone or email and let us know how we can help
                  with your real estate plans.
                </p>
                <a
                  href="tel:+1234567890"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#d3b875] px-5 text-sm font-semibold text-[#173a2b] transition hover:bg-[#e3cc91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Call Zenvia <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>

              <div className="rounded-[24px] border border-[#e5dece] bg-[#fbf9f2] p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#927747]">
                  Keep in touch
                </p>
                <h2 className="mt-2 text-lg font-semibold text-[#173a2b]">
                  Contact details
                </h2>
                <div className="mt-5 space-y-4">
                  {contactMethods.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("https://") ? "_blank" : undefined}
                      rel={href.startsWith("https://") ? "noreferrer" : undefined}
                      className="group flex items-start gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#927747]"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e9e1cf] text-[#927747] transition group-hover:bg-[#173a2b] group-hover:text-[#f8f4e9]">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-[#777465]">{label}</span>
                        <span className="mt-1 block text-sm font-medium text-[#29443c] transition group-hover:text-[#927747]">
                          {value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <p className="px-1 text-sm leading-6 text-[#6f746a]">
                Looking at a specific home?{" "}
                <Link
                  href="/properties/brighton-ct#contact-agent"
                  className="font-semibold text-[#765f2f] hover:underline"
                >
                  Contact its listing agent.
                </Link>
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
