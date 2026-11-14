"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, Bath, BedDouble, MapPin, Search } from "lucide-react";
import { featuredProperties } from "../../data/properties";

export default function HomePropertyFinder() {
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("any");
  const [appliedLocation, setAppliedLocation] = useState("");
  const [appliedBedrooms, setAppliedBedrooms] = useState("any");

  const matchingProperties = useMemo(() => {
    const searchTerm = appliedLocation.trim().toLowerCase();

    return featuredProperties.filter((property) => {
      const matchesLocation =
        !searchTerm ||
        `${property.title} ${property.address} ${property.city}`
          .toLowerCase()
          .includes(searchTerm);
      const matchesBedrooms =
        appliedBedrooms === "any" ||
        property.beds >= Number(appliedBedrooms);

      return matchesLocation && matchesBedrooms;
    });
  }, [appliedBedrooms, appliedLocation]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAppliedLocation(location);
    setAppliedBedrooms(bedrooms);
    document
      .getElementById("featured-homes")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearSearch() {
    setLocation("");
    setBedrooms("any");
    setAppliedLocation("");
    setAppliedBedrooms("any");
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#062f55]">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#062f55]/95 via-[#062f55]/80 to-[#062f55]/30"
        />
        <div className="container-main relative py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur">
              A better place to begin
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find a home that feels like yours.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              Explore homes around Harrisburg, compare the details that matter,
              and connect with a local real estate professional.
            </p>
          </div>

          <form
            onSubmit={handleSearch}
            className="mt-8 grid gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:grid-cols-[minmax(0,1fr)_190px_auto] sm:items-end sm:p-4"
          >
            <label className="grid gap-1.5 px-2 text-xs font-semibold text-gray-500">
              Location or keyword
              <span className="flex items-center gap-2">
                <MapPin
                  size={17}
                  className="shrink-0 text-[#084477]"
                  aria-hidden="true"
                />
                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Try Harrisburg"
                  className="h-10 w-full bg-transparent text-sm font-medium text-[#17212f] outline-none placeholder:font-normal placeholder:text-gray-400"
                />
              </span>
            </label>
            <label className="grid gap-1.5 border-t border-gray-100 px-2 pt-3 text-xs font-semibold text-gray-500 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
              Bedrooms
              <select
                value={bedrooms}
                onChange={(event) => setBedrooms(event.target.value)}
                className="h-10 w-full bg-transparent text-sm font-medium text-[#17212f] outline-none"
              >
                <option value="any">Any number</option>
                <option value="2">2+ bedrooms</option>
                <option value="3">3+ bedrooms</option>
                <option value="4">4+ bedrooms</option>
              </select>
            </label>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#084477] px-6 text-sm font-semibold text-white transition hover:bg-[#062f55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477]"
            >
              <Search size={17} aria-hidden="true" />
              Find a home
            </button>
          </form>
          <p className="mt-3 text-xs text-white/70">
            Search the featured homes below by location or bedroom count.
          </p>
        </div>
      </section>

      <section
        id="featured-homes"
        className="container-main scroll-mt-24 py-14 sm:py-18"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#084477]">
              Find your fit
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#17212f]">
              Featured homes
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              A few places to start your search in the Harrisburg area.
            </p>
          </div>
          {appliedLocation || appliedBedrooms !== "any" ? (
            <button
              type="button"
              onClick={clearSearch}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-[#084477] hover:bg-[#eaf2f8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#084477]"
            >
              Clear filters
            </button>
          ) : null}
        </div>

        <p className="sr-only" aria-live="polite">
          {matchingProperties.length} featured homes found
        </p>

        {matchingProperties.length > 0 ? (
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {matchingProperties.map((property) => (
              <article
                key={property.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={property.image}
                    alt={`Home for ${property.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#084477] shadow-sm">
                    {property.id === "brighton-ct" ? "Featured listing" : "For sale"}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-2xl font-bold tracking-tight text-[#17212f]">
                    {property.price}
                  </p>
                  <h3 className="mt-1 font-semibold text-[#17212f]">
                    {property.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin size={15} aria-hidden="true" />
                    {property.address}, {property.city}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble size={16} className="text-[#084477]" aria-hidden="true" />
                      {property.beds} beds
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Bath size={16} className="text-[#084477]" aria-hidden="true" />
                      {property.baths} baths
                    </span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <Link
                    href={
                      property.id === "brighton-ct"
                        ? "/properties/brighton-ct"
                        : "/contact"
                    }
                    className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#084477] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477]"
                  >
                    {property.id === "brighton-ct"
                      ? "View property"
                      : "Ask about this home"}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-12 text-center">
            <h3 className="font-semibold text-[#17212f]">
              No featured homes match those filters.
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Try a nearby town or choose a different bedroom count.
            </p>
            <button
              type="button"
              onClick={clearSearch}
              className="mt-4 rounded-lg px-3 py-2 text-sm font-semibold text-[#084477] hover:bg-[#eaf2f8]"
            >
              Show all featured homes
            </button>
          </div>
        )}
      </section>
    </>
  );
}
