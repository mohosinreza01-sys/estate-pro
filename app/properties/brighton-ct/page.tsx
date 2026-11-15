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
        <div className="pt-5 sm:pt-8">
          <PropertyGallery />
        </div>

        {/* Property Overview + Agent */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px] lg:gap-10">
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
        <section className="border-t border-[#e6dfd0] py-8 sm:py-10">
          <p className="eyebrow">A sense of place</p>
          <h2 className="section-title text-2xl">Location</h2>

          <p className="mt-3 flex items-center gap-2 text-sm text-[#777465]">
            <MapPin size={17} className="text-[#927747]" aria-hidden="true" />
            4430 Brighton Ct, Harrisburg, PA 17112
          </p>

          <div
            role="img"
            aria-label="Map preview of the Harrisburg, Pennsylvania area"
            className="relative mt-5 flex h-[220px] items-center justify-center overflow-hidden rounded-[24px] border border-[#dcd7c7] bg-[radial-gradient(ellipse_at_20%_28%,rgba(104,132,97,0.24)_0,transparent_30%),radial-gradient(ellipse_at_78%_72%,rgba(104,132,97,0.2)_0,transparent_32%),linear-gradient(135deg,#e9e7da,#dddfd1)] sm:h-[280px]"
          >
            <div aria-hidden="true" className="absolute inset-x-[-10%] top-[28%] h-8 rotate-[-8deg] border-y border-white/65 bg-white/20" />
            <div aria-hidden="true" className="absolute inset-x-[-10%] bottom-[21%] h-6 rotate-[9deg] border-y border-white/65 bg-white/20" />
            <div className="absolute left-[12%] top-[20%] h-10 w-10 rounded-full bg-[#f7f3e8]/55" />
            <div className="absolute right-[15%] top-[25%] h-14 w-14 rounded-full bg-[#f7f3e8]/45" />
            <div className="absolute bottom-[16%] left-[28%] h-8 w-8 rounded-full bg-[#f7f3e8]/55" />
            <div className="relative flex flex-col items-center rounded-2xl border border-[#e4dcc8] bg-[#faf8f0]/95 px-5 py-4 text-center shadow-[0_16px_40px_rgba(26,41,29,0.14)] backdrop-blur">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#173a2b] text-[#d3b875] shadow-md">
                <MapPin size={22} aria-hidden="true" />
              </span>
              <p className="mt-3 font-semibold text-[#173a2b]">
                Harrisburg, Pennsylvania
              </p>
              <a
                href="https://maps.google.com/?q=4430+Brighton+Ct,+Harrisburg,+PA+17112"
                target="_blank"
                rel="noreferrer"
                className="mt-1 text-xs font-semibold text-[#765f2f] hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <MarketAnalysis />

        {/* Schools */}
        <section className="border-t border-[#e6dfd0] py-8 sm:py-10">
          <p className="eyebrow">Around the neighborhood</p>
          <h2 className="section-title flex items-center gap-2 text-2xl">
            <School size={22} className="text-[#927747]" aria-hidden="true" />
            Nearby schools
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["Central Elementary School", "Elementary", "8/10"],
              ["Harrisburg Middle School", "Middle School", "7/10"],
              ["Central High School", "High School", "9/10"],
            ].map(([name, type, rating]) => (
              <div key={name} className="rounded-2xl border border-[#e5dece] bg-[#fbf9f2] p-5 transition hover:border-[#c5ad70] hover:shadow-[0_14px_35px_rgba(26,41,29,0.08)]">
                <p className="font-semibold text-[#173a2b]">{name}</p>
                <p className="mt-1 text-sm text-[#777465]">{type}</p>
                <p className="mt-4 border-t border-[#e9e3d6] pt-3 text-sm font-semibold text-[#765f2f]">
                  Rating <span className="ml-1">{rating}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[#858174]">
            Illustrative school data for UI demonstration.
          </p>
        </section>

        {/* Recommendations */}
        <RecommendedProperties />

        {/* Agent CTA */}
        <section className="relative my-10 overflow-hidden rounded-[26px] bg-[#173a2b] px-6 py-12 text-center text-[#faf8f0] shadow-[0_22px_60px_rgba(16,46,36,0.15)] sm:px-12 sm:py-14">
          <div aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[35px] border-[#d3b875]/10" />
          <div aria-hidden="true" className="absolute -bottom-36 -left-20 h-64 w-64 rounded-full border-[35px] border-[#d3b875]/10" />

          <p className="relative text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d3b875]">
            One thoughtful conversation away
          </p>
          <h2 className="relative mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Talk to a Zenvia agent
          </h2>

          <p className="relative mx-auto mt-3 max-w-lg text-sm leading-6 text-white/70">
            Have questions about this property? Our real estate
            professionals are ready to help you find your perfect home.
          </p>

          <a
            href="#contact-agent"
            className="relative mt-7 inline-flex min-h-12 items-center rounded-full bg-[#d3b875] px-7 py-3 text-sm font-semibold text-[#173a2b] transition hover:bg-[#e3cc91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
