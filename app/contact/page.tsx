import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
        <section className="bg-[#f3f7fa]">
          <div className="container-main py-12 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#084477]">
              Contact Zenvia
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#17212f] sm:text-5xl">
              Let&apos;s talk about what comes next.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Ask about a property, tell us what you are looking for, or simply
              start a conversation with our team.
            </p>
          </div>
        </section>

        <section className="container-main grid gap-8 py-10 sm:py-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:gap-12">
          <div>
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-[#17212f]">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          <aside className="space-y-5 lg:pt-12">
            <div className="rounded-2xl bg-[#084477] p-6 text-white sm:p-7">
              <p className="text-sm font-semibold text-white/70">
                Prefer a direct conversation?
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                We&apos;re here to help.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Reach out by phone or email and let us know how we can help
                with your real estate plans.
              </p>
              <a
                href="tel:+1234567890"
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-[#084477] transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Call Zenvia
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
              <h2 className="font-bold text-[#17212f]">Contact details</h2>
              <div className="mt-4 space-y-4">
                {contactMethods.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("https://") ? "_blank" : undefined}
                    rel={href.startsWith("https://") ? "noreferrer" : undefined}
                    className="flex items-start gap-3 rounded-lg text-sm transition hover:text-[#084477] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477]"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf2f8] text-[#084477]">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-gray-500">{label}</span>
                      <span className="mt-1 block font-medium text-[#17212f]">
                        {value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <p className="px-1 text-sm leading-6 text-gray-500">
              Looking at a specific home?{" "}
              <Link
                href="/properties/brighton-ct#contact-agent"
                className="font-semibold text-[#084477] hover:underline"
              >
                Contact its listing agent.
              </Link>
            </p>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
