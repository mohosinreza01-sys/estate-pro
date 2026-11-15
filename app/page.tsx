import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  House,
  KeyRound,
  Sparkles,
} from "lucide-react";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import HomePropertyFinder from "./components/home/HomePropertyFinder";

export const metadata: Metadata = {
  title: "Zenvia | Find a Home in Harrisburg",
  description:
    "Discover thoughtfully selected homes around Harrisburg and find a place that feels like yours with Zenvia.",
};

const propertyTypes = [
  { icon: House, label: "Houses", count: "Find your space", href: "#featured-homes" },
  { icon: Building2, label: "Apartments", count: "City living", href: "#featured-homes" },
  { icon: KeyRound, label: "Rentals", count: "A flexible stay", href: "#featured-homes" },
  { icon: Sparkles, label: "New homes", count: "A fresh start", href: "#featured-homes" },
];

const neighborhoods = [
  {
    name: "Downtown Harrisburg",
    detail: "City living, beautifully connected",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Mechanicsburg",
    detail: "Room to settle in",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&auto=format&fit=crop",
    className: "",
  },
  {
    name: "Camp Hill",
    detail: "A neighborhood feel",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format&fit=crop",
    className: "",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell us what feels like home",
    description:
      "Set your priorities, explore the neighborhoods, and find a few places that feel right.",
  },
  {
    number: "02",
    title: "Get the full picture",
    description:
      "Compare the details that matter and get thoughtful answers from a local expert.",
  },
  {
    number: "03",
    title: "Make your next move",
    description:
      "When you are ready, we’ll help turn your shortlist into a confident next step.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomePropertyFinder />

        <section id="property-types" className="container-main py-12 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">A place for every next chapter</p>
              <h2 className="section-title">Explore by property type</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#71807b]">
              From a first apartment to a forever home, find a space that fits
              the way you want to live.
            </p>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {propertyTypes.map(({ icon: Icon, label, count, href }) => (
              <Link
                key={label}
                href={href}
                className="group rounded-2xl border border-[#e7e0d1] bg-[#f7f4eb] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#c5ad70] hover:bg-[#fffdf7] hover:shadow-[0_14px_40px_rgba(18,55,43,0.1)] sm:p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9e1cf] text-[#927747] transition group-hover:bg-[#214b38] group-hover:text-[#f8f4e9]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="mt-5 block font-semibold text-[#173a2b]">
                  {label}
                </span>
                <span className="mt-1 block text-xs text-[#777465]">{count}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[#f3f0e6] py-14 sm:py-20">
          <div className="container-main grid gap-9 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16">
            <div className="relative min-h-[300px] overflow-hidden rounded-[26px] sm:min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&auto=format&fit=crop"
                alt="A light-filled home surrounded by greenery"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082e26]/45 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-xl border border-[#e7ddc6] bg-[#faf7ed]/95 px-4 py-3 shadow-lg backdrop-blur">
                <p className="text-xs font-medium text-[#927747]">LOCAL KNOWLEDGE</p>
                <p className="mt-1 text-sm font-semibold text-[#173a2b]">
                  Right here in Harrisburg
                </p>
              </div>
            </div>
            <div className="max-w-lg">
              <p className="eyebrow">A more personal way home</p>
              <h2 className="section-title text-3xl sm:text-4xl">
                Good moves start with good people.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6f746a] sm:text-base">
                Finding a home is a big, personal thing. Our local team brings
                together thoughtful guidance, honest details, and a little
                extra care at every step.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Local insight from people who know the area",
                  "Clear answers, without the pressure",
                  "Support that stays with you from search to keys",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-[#29443c]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e9e1cf] text-[#927747]">
                      <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="button-primary mt-8">
                Meet your local team <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="bg-[#173a2b] py-14 text-[#f8f4e9] sm:py-20"
        >
          <div className="container-main">
            <div className="mx-auto max-w-xl text-center">
              <p className="eyebrow !text-[#d3b875]">The process, made personal</p>
              <h2 className="section-title !text-[#f8f4e9]">
                A little more clarity at every step.
              </h2>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {processSteps.map(({ number, title, description }) => (
                <article
                  key={number}
                  className="rounded-2xl border border-white/15 bg-white/[0.045] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#d3b875]/50 hover:bg-white/[0.075] sm:p-7"
                >
                  <span className="text-sm font-semibold tracking-[0.12em] text-[#d3b875]">
                    {number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#fbf8ef]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#f8f4e9]/65">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden py-16 sm:py-24">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&auto=format&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[#09251e]/55" />
          <div className="container-main flex min-h-56 flex-col items-start justify-center text-white sm:min-h-72">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d3b875]">
              Take a closer look
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Imagine the life you could make here.
            </h2>
            <Link
              href="/properties/brighton-ct"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f6f1e4] px-5 text-sm font-semibold text-[#173a2b] transition hover:bg-[#d3b875] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Tour a featured home <ArrowDownRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section id="neighborhoods" className="container-main py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Find your corner of the world</p>
              <h2 className="section-title">Get to know the neighborhood.</h2>
            </div>
            <Link
              href="https://maps.google.com/?q=Harrisburg,+PA"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#765f2f] transition hover:gap-3"
            >
              Explore the area <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-7 grid auto-rows-[210px] gap-4 md:grid-cols-3 md:auto-rows-[230px]">
            {neighborhoods.map(({ name, detail, image, className }) => (
              <Link
                key={name}
                href="https://maps.google.com/?q=Harrisburg,+PA"
                target="_blank"
                rel="noreferrer"
                className={`group relative isolate overflow-hidden rounded-2xl ${className}`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="-z-20 object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#09251e]/80 via-[#09251e]/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-6">
                  <div>
                    <p className="text-lg font-semibold">{name}</p>
                    <p className="mt-1 text-xs text-white/75">{detail}</p>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f3e5bd]/50 bg-[#102e24]/25 text-[#f3e5bd] backdrop-blur transition group-hover:bg-[#d3b875] group-hover:text-[#173a2b]">
                    <ChevronRight size={17} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="container-main pb-14 sm:pb-20">
          <div className="relative overflow-hidden rounded-[26px] bg-[#102e24] px-6 py-10 text-white shadow-[0_24px_70px_rgba(16,46,36,0.16)] sm:px-10 sm:py-12 lg:px-14">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[1px] border-[#d3b875]/20 sm:right-14"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-14 h-52 w-52 rounded-full border-[1px] border-[#d3b875]/15"
            />
            <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d3b875]">
                  Your next chapter starts here
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Looking for a place to call yours?
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Tell us what matters most. We’ll help you find a home that
                  feels like the right fit.
                </p>
              </div>
              <Link href="/contact" className="button-light shrink-0">
                Let’s find your home <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
