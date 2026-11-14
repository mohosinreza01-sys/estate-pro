import type { Metadata } from "next";
import Navbar from "../../components/layouts/Navbar";
import PropertyGallery from "../../components/property/PropertyGallery";
import PropertyOverview from "../../components/property/PropertyOverview";
import PropertyFeatures from "../../components/property/PropertyFeatures";
import AgentCard from "../../components/property/AgentCard";
import MarketAnalysis from "../../components/property/MarketAnalysis";
import RecommendedProperties from "../../components/property/RecommendedProperties";
import Footer from "../../components/layouts/Footer";
import {
  MapPin,
  School,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "4430 Brighton Ct | Zenvia Real Estate",
  description:
    "Explore this 4-bedroom home in Harrisburg, Pennsylvania, view property details, and contact the listing agent.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container-main">
        {/* Property Gallery */}
        <div className="pt-5 sm:pt-7">
          <PropertyGallery />
        </div>

        {/* Property Overview + Agent */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
          <div>
            <PropertyOverview />
            <PropertyFeatures />
          </div>

          <div className="pt-0 lg:pt-10">
            <div className="sticky top-6">
              <AgentCard />
            </div>
          </div>
        </div>

        {/* Location */}
        <section className="border-t border-gray-200 py-8 sm:py-10">
          <h2 className="text-xl font-bold tracking-tight">Location</h2>

          <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={17} className="text-[#084477]" aria-hidden="true" />
            4430 Brighton Ct, Harrisburg, PA 17112
          </p>

          <div
            role="img"
            aria-label="Map preview of the Harrisburg, Pennsylvania area"
            className="map-placeholder relative mt-5 flex h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-[#dce7dc] sm:h-[280px]"
          >
            <div className="absolute left-[12%] top-[20%] h-10 w-10 rounded-full bg-white/70" />
            <div className="absolute right-[15%] top-[25%] h-14 w-14 rounded-full bg-white/60" />
            <div className="absolute bottom-[16%] left-[28%] h-8 w-8 rounded-full bg-white/70" />
            <div className="relative flex flex-col items-center rounded-2xl border border-white/80 bg-white/95 px-5 py-4 text-center shadow-lg backdrop-blur">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#084477] text-white shadow-md">
                <MapPin size={22} aria-hidden="true" />
              </span>
              <p className="mt-3 font-semibold text-[#17212f]">
                Harrisburg, Pennsylvania
              </p>
              <a
                href="https://maps.google.com/?q=4430+Brighton+Ct,+Harrisburg,+PA+17112"
                target="_blank"
                rel="noreferrer"
                className="mt-1 text-xs font-semibold text-[#084477] hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <MarketAnalysis />

        {/* Schools */}
        <section className="border-t border-gray-200 py-8 sm:py-10">
          <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <School size={22} className="text-[#084477]" aria-hidden="true" />
            Nearby schools
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["Central Elementary School", "Elementary", "8/10"],
              ["Harrisburg Middle School", "Middle School", "7/10"],
              ["Central High School", "High School", "9/10"],
            ].map(([name, type, rating]) => (
              <div key={name} className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:shadow-sm">
                <p className="font-semibold">{name}</p>
                <p className="mt-1 text-sm text-gray-500">{type}</p>
                <p className="mt-4 border-t border-gray-100 pt-3 text-sm font-semibold text-emerald-700">
                  Rating <span className="ml-1">{rating}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-400">
            Illustrative school data for UI demonstration.
          </p>
        </section>

        {/* Recommendations */}
        <RecommendedProperties />

        {/* Agent CTA */}
        <section className="relative my-10 overflow-hidden rounded-3xl bg-[#084477] px-6 py-12 text-center text-white sm:px-12 sm:py-14">
          <div aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[35px] border-white/5" />
          <div aria-hidden="true" className="absolute -bottom-36 -left-20 h-64 w-64 rounded-full border-[35px] border-white/5" />

          <h2 className="relative text-2xl font-bold tracking-tight sm:text-3xl">
            Talk to a Zenvia agent
          </h2>

          <p className="relative mx-auto mt-3 max-w-lg text-sm leading-6 text-white/75">
            Have questions about this property? Our real estate
            professionals are ready to help you find your perfect home.
          </p>

          <a
            href="#contact-agent"
            className="relative mt-7 inline-flex min-h-12 items-center rounded-lg bg-white px-7 py-3 text-sm font-bold text-[#084477] transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MessageCircle className="mr-2 inline" size={17} />
            Contact an Agent
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
