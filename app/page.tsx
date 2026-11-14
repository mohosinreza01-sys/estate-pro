import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Compass,
  House,
  KeyRound,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import HomePropertyFinder from "./components/home/HomePropertyFinder";

export const metadata: Metadata = {
  title: "Zenvia | Find a Home in Harrisburg",
  description:
    "Explore homes around Harrisburg, compare property details, and connect with a local real estate professional through Zenvia.",
};

const waysToMove = [
  {
    icon: House,
    title: "Buy a home",
    description:
      "Explore featured homes, compare the details, and take a closer look at a property that fits your plans.",
    label: "Browse homes",
    href: "#featured-homes",
  },
  {
    icon: KeyRound,
    title: "Find a rental",
    description:
      "Tell us what you are looking for and start a conversation about rental options in the area.",
    label: "Ask about rentals",
    href: "/contact",
  },
  {
    icon: Building2,
    title: "Sell your property",
    description:
      "Have a home to sell? Reach out and let our team know how we can help with your next move.",
    label: "Talk to our team",
    href: "/contact",
  },
];

const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Start with the homes and places that catch your eye. Use the search to narrow the featured listings.",
  },
  {
    number: "02",
    title: "Compare",
    description:
      "Review the price, features, location, and other details before deciding what you want to know more about.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Contact the listing agent or send our team a message to talk through your next step.",
  },
];

const benefits = [
  {
    icon: Compass,
    title: "A clearer first step",
    description:
      "Useful property information and simple search tools help you focus on the homes that matter to you.",
  },
  {
    icon: BadgeCheck,
    title: "Details in one place",
    description:
      "See key home features, neighborhood context, and ways to contact an agent without searching around.",
  },
  {
    icon: MessageCircle,
    title: "Real conversations",
    description:
      "When you are ready, reach a real estate professional directly with your questions.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomePropertyFinder />

        <section
          id="explore-options"
          className="border-y border-gray-100 bg-[#f7f9fb] py-14 sm:py-18"
        >
          <div className="container-main">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#084477]">
                Make your move
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#17212f]">
                What brings you here?
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Wherever you are in your real estate journey, start with the
                path that makes sense for you.
              </p>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {waysToMove.map(({ icon: Icon, title, description, label, href }) => (
                <article
                  key={title}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf2f8] text-[#084477]">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[#17212f]">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                    {description}
                  </p>
                  <Link
                    href={href}
                    className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#084477] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477]"
                  >
                    {label}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-main py-14 sm:py-18">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#084477]">
                The Zenvia difference
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#17212f]">
                Real estate, with more clarity and connection.
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                We bring the important details and the people behind a move
                closer together, so exploring a home can feel more
                straightforward.
              </p>
              <Link
                href="/about"
                className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#084477] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477]"
              >
                Get to know Zenvia
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <Icon
                    size={21}
                    className="text-[#084477]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-semibold text-[#17212f]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="bg-[#f7f9fb] py-14 sm:py-18"
        >
          <div className="container-main">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#084477]">
                Simple by design
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#17212f]">
                Three steps to a more informed move
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map(({ number, title, description }) => (
                <article
                  key={number}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <p className="text-sm font-bold tracking-[0.14em] text-[#084477]">
                    {number}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-[#17212f]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-main py-14 sm:py-18">
          <div className="grid gap-8 overflow-hidden rounded-3xl border border-[#dce7dc] bg-[#edf3ee] p-6 sm:p-9 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#084477]">
                Rooted in the region
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#17212f]">
                Discover Harrisburg and nearby communities.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
                From the city to neighboring towns, explore homes across the
                Harrisburg area and connect with an agent to learn more about
                the places on your list.
              </p>
              <Link
                href="https://maps.google.com/?q=Harrisburg,+PA"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-[#084477] shadow-sm transition hover:bg-[#084477] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477]"
              >
                <MapPin size={16} aria-hidden="true" />
                Explore the area
              </Link>
            </div>
            <div
              role="img"
              aria-label="Map-style preview of Harrisburg and nearby communities"
              className="map-placeholder relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-white/80 sm:min-h-[280px]"
            >
              <div className="absolute left-[12%] top-[20%] h-10 w-10 rounded-full bg-white/70" />
              <div className="absolute right-[15%] top-[25%] h-14 w-14 rounded-full bg-white/60" />
              <div className="absolute bottom-[16%] left-[28%] h-8 w-8 rounded-full bg-white/70" />
              <div className="relative flex items-center gap-3 rounded-full border border-white bg-white/95 px-5 py-3 shadow-lg">
                <MapPin size={20} className="text-[#084477]" aria-hidden="true" />
                <span className="text-sm font-semibold text-[#17212f]">
                  Harrisburg, PA
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="container-main pb-14 sm:pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-[#084477] px-6 py-12 text-center text-white sm:px-12 sm:py-14">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[35px] border-white/5"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-36 -left-20 h-64 w-64 rounded-full border-[35px] border-white/5"
            />
            <h2 className="relative text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to make your next move?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-6 text-white/75">
              Tell us what you are looking for. Our team can help you take the
              next step and connect you with the right person.
            </p>
            <Link
              href="/contact"
              className="relative mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#084477] transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Talk to our team
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
