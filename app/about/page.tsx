import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
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
        <section className="relative isolate overflow-hidden bg-[#102e24] text-[#faf8f0]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-36 -top-40 h-[30rem] w-[30rem] rounded-full border border-[#d3b875]/15"
          />
          <div className="container-main relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d3b875]">
                The story behind Zenvia
              </p>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">
                Finding home should feel
                <span className="mt-1 block font-serif font-normal italic text-[#d3b875]">
                  more human.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#f4f0e4]/75">
                A home search is about more than an address. We bring useful
                property details and a personal connection together, so you can
                explore with confidence and reach out when you are ready.
              </p>
              <Link
                href="/properties/brighton-ct"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#d3b875] px-5 text-sm font-semibold text-[#173a2b] transition hover:bg-[#e3cc91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore a featured home
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="relative min-h-[300px] overflow-hidden rounded-[26px] border border-[#d3b875]/25 bg-[#294438] shadow-[0_26px_70px_rgba(4,20,13,0.28)] sm:min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop"
                alt="Warm, light-filled living room in a modern home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102e24]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-[#102e24]/70 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                <p className="text-sm font-semibold text-[#faf8f0]">
                  A thoughtful place to begin
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Browse the details, then connect with a real person.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-we-help" className="scroll-mt-24 bg-[#f3f0e6] py-14 sm:py-20">
          <div className="container-main">
            <div className="max-w-2xl">
              <p className="eyebrow">What matters to us</p>
              <h2 className="section-title text-3xl sm:text-4xl">
                A simpler, more personal home search.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#6f746a]">
                We focus on making the first steps feel clear, useful, and easy
                to act on.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {principles.map(({ icon: Icon, title, description }, index) => (
                <article
                  key={title}
                  className="group rounded-[22px] border border-[#e5dece] bg-[#fbf9f2] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c5ad70] hover:bg-[#fffdf8] hover:shadow-[0_18px_40px_rgba(26,41,29,0.09)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9e1cf] text-[#927747] transition group-hover:bg-[#173a2b] group-hover:text-[#f8f4e9]">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <span className="font-serif text-sm italic text-[#aa9565]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-[#173a2b]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6f746a]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-main py-14 sm:py-20">
          <div className="relative overflow-hidden rounded-[26px] bg-[#173a2b] p-6 text-[#faf8f0] shadow-[0_22px_60px_rgba(16,46,36,0.13)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-[#d3b875]/20"
            />
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d3b875]">
                Your next step starts here
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Let&apos;s find a place that feels like yours.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                Whether you are exploring a property or have a question, our
                team is ready to help you take the next step.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative mt-6 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#d3b875] px-5 text-sm font-semibold text-[#173a2b] transition hover:bg-[#e3cc91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:mt-0"
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
