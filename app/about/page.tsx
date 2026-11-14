import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, HeartHandshake, House, ShieldCheck } from "lucide-react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

export const metadata: Metadata = {
  title: "About Zenvia | Real Estate Made More Personal",
  description:
    "Learn how Zenvia helps home buyers explore properties and connect with real estate professionals.",
};

const principles = [
  {
    icon: Compass,
    title: "Guidance that feels clear",
    description:
      "Property details, useful context, and a direct way to reach an agent help make the next step easier to understand.",
  },
  {
    icon: HeartHandshake,
    title: "People come first",
    description:
      "Every move is personal. We make it easier to start a conversation around the home and the questions that matter to you.",
  },
  {
    icon: ShieldCheck,
    title: "Information you can use",
    description:
      "We present the details in one place so you can compare the essentials and decide what you would like to explore further.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#f3f7fa]">
          <div className="container-main grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#084477]">
                About Zenvia
              </p>
              <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#17212f] sm:text-5xl">
                Finding a home should feel more human.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                A home search is about more than an address. Zenvia brings
                property information and a personal connection together, so
                you can explore with confidence and reach out when you are ready.
              </p>
              <Link
                href="/properties/brighton-ct"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#084477] px-5 text-sm font-semibold text-white transition hover:bg-[#062f55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477]"
              >
                Explore this home
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-[#dbe7ee] shadow-sm sm:min-h-[380px]">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop"
                alt="Warm, light-filled living room in a modern home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur sm:inset-x-6 sm:bottom-6">
                <p className="text-sm font-semibold text-[#17212f]">
                  A thoughtful place to begin
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Browse the details, then connect with a real person.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-we-help"
          className="container-main scroll-mt-24 py-14 sm:py-18"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#084477]">
              What matters to us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17212f]">
              A simpler, more personal home search
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              We focus on making the first steps feel clear, useful, and easy to
              act on.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf2f8] text-[#084477]">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#17212f]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="container-main pb-14 sm:pb-20">
          <div className="grid gap-8 rounded-3xl bg-[#f3f7fa] p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#084477] shadow-sm">
                <House size={21} aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#17212f]">
                Your next step starts with a conversation.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                Whether you are exploring a property or have a question, our
                contact page makes it easy to reach out.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#084477] px-5 text-sm font-semibold text-[#084477] transition hover:bg-[#084477] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477]"
            >
              Get in touch
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
