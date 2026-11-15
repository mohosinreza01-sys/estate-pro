"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Bath,
  BedDouble,
  House,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";
import { featuredProperties } from "../../data/properties";

const differencePoints = [
  {
    icon: MapPin,
    title: "Local insight",
    description: "A team that knows Harrisburg and its neighborhoods.",
  },
  {
    icon: House,
    title: "Homes with character",
    description: "Thoughtful places with room to feel at home.",
  },
  {
    icon: Sparkles,
    title: "Personal guidance",
    description: "Clear answers and care at every step.",
  },
];

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
      <section className="relative isolate min-h-[590px] overflow-hidden bg-[#102e24] sm:min-h-[650px]">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2200&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102e24]/95 via-[#102e24]/75 to-[#102e24]/25" />
        <div className="container-main flex min-h-[590px] flex-col justify-center pb-10 pt-16 sm:min-h-[650px] sm:pb-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d6c494]/35 bg-[#f7f3e8]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#e2cf9f] backdrop-blur">
              <Sparkles size={14} aria-hidden="true" />
              A more considered way home
            </p>
            <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#faf8f0] sm:text-6xl lg:text-[72px]">
              Find a place
              <br />
              <span className="font-serif font-normal italic text-[#d3b875]">
                to call yours.
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#e4e6dc]/85 sm:text-lg">
              Beautiful homes, good people, and a little more clarity for
              whatever comes next.
            </p>
          </div>

          <form
            onSubmit={handleSearch}
            className="mt-8 grid max-w-4xl gap-2 rounded-[20px] border border-[#e9e1d0] bg-[#faf8f0]/95 p-3 shadow-[0_22px_70px_rgba(5,22,15,0.35)] backdrop-blur sm:grid-cols-[minmax(0,1.3fr)_minmax(180px,0.8fr)_auto] sm:items-center sm:p-3.5"
          >
            <label className="grid gap-1 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#766f5f]">
              Where do you want to live?
              <span className="flex items-center gap-2">
                <MapPin
                  size={17}
                  className="shrink-0 text-[#987d48]"
                  aria-hidden="true"
                />
                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="City, neighborhood, or ZIP"
                  className="h-8 w-full bg-transparent text-sm font-medium normal-case tracking-normal text-[#19372f] outline-none placeholder:font-normal placeholder:text-[#a09a8b]"
                />
              </span>
            </label>
            <label className="grid gap-1 border-t border-[#e8e2d4] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#766f5f] sm:border-l sm:border-t-0 sm:py-1.5 sm:pl-5">
              Bedrooms
              <select
                value={bedrooms}
                onChange={(event) => setBedrooms(event.target.value)}
                className="h-8 w-full bg-transparent text-sm font-medium normal-case tracking-normal text-[#19372f] outline-none"
              >
                <option value="any">Any number</option>
                <option value="2">2+ bedrooms</option>
                <option value="3">3+ bedrooms</option>
                <option value="4">4+ bedrooms</option>
              </select>
            </label>
            <button
              type="submit"
              className="button-primary min-h-12 !bg-[#b99a5a] !text-[#182f25] hover:!bg-[#d0b779]"
            >
              <Search size={17} aria-hidden="true" />
              <span className="sm:hidden lg:inline">Search homes</span>
              <span className="hidden sm:inline lg:hidden">Search</span>
            </button>
          </form>
          <p className="mt-3 text-xs text-[#e4e6dc]/75">
            Curated homes around Harrisburg, Pennsylvania
          </p>
        </div>
        <a
          href="#featured-homes"
          className="absolute bottom-7 right-[max(24px,calc((100vw-1280px)/2))] hidden items-center gap-2 text-xs font-medium text-[#f4eedc] transition hover:gap-3 sm:flex"
        >
          Explore featured homes <ArrowRight size={14} aria-hidden="true" />
        </a>
      </section>

      <section className="container-main relative z-10 -mt-7 pb-5 sm:-mt-10 sm:pb-8">
        <div className="relative overflow-hidden rounded-[26px] border border-[#e7ddc6] bg-[#f6f2e7] p-5 shadow-[0_20px_70px_rgba(26,41,29,0.18)] backdrop-blur-xl sm:p-7 lg:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#d9c99f]/35 blur-3xl"
          />
          <div className="relative grid gap-6 lg:grid-cols-[0.8fr_2fr] lg:items-center lg:gap-9">
            <div className="lg:border-r lg:border-[#e9eeeb] lg:pr-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#987d48]">
                The Zenvia difference
              </p>
              <h2 className="mt-2 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#173a2b] sm:text-[27px]">
                Your next move, made more thoughtful.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {differencePoints.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="flex gap-3 rounded-2xl border border-[#e8e1d2] bg-[#fbf9f2] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#d8c99e] hover:bg-white hover:shadow-[0_12px_30px_rgba(27,65,52,0.07)] sm:block sm:border-transparent sm:bg-transparent sm:p-3 sm:shadow-none"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e9e1cf] text-[#927747]">
                    <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="sm:mt-3">
                    <h3 className="text-sm font-semibold text-[#214238]">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-[#777465]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="featured-homes"
        className="container-main scroll-mt-24 py-14 sm:py-20"
      >
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Good places, thoughtfully found</p>
            <h2 className="section-title">Homes worth coming home to.</h2>
            <p className="mt-2 text-sm text-[#777465]">
              A few local favorites to get you started.
            </p>
          </div>
          {appliedLocation || appliedBedrooms !== "any" ? (
            <button
              type="button"
              onClick={clearSearch}
              className="rounded-full border border-[#d8c99e] px-4 py-2 text-sm font-semibold text-[#765f2f] transition hover:bg-[#f4efdf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#765f2f]"
            >
              Clear filters
            </button>
          ) : (
            <span className="hidden text-sm font-medium text-[#87938f] sm:block">
              {featuredProperties.length} handpicked homes
            </span>
          )}
        </div>

        <p className="sr-only" aria-live="polite">
          {matchingProperties.length} featured homes found
        </p>

        {matchingProperties.length > 0 ? (
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {matchingProperties.map((property, index) => (
              <article
                key={property.id}
                className="group overflow-hidden rounded-[20px] border border-[#e9e4d8] bg-[#fffefa] transition duration-300 hover:-translate-y-1 hover:border-[#d6c594] hover:shadow-[0_18px_48px_rgba(18,55,43,0.14)]"
              >
                <Link
                  href={
                    property.id === "brighton-ct"
                      ? "/properties/brighton-ct"
                      : "/contact"
                  }
                  className="relative block h-60 overflow-hidden bg-[#eae7dc] sm:h-64"
                >
                  <Image
                    src={property.image}
                    alt={`Home for ${property.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#f7f2e5]/95 px-3 py-1.5 text-[11px] font-semibold text-[#765f2f] shadow-sm">
                    {index === 0 ? "Zenvia pick" : "For sale"}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-[#102e24]/95 px-3 py-1.5 text-xs font-semibold text-[#f8f4e9] backdrop-blur">
                    {property.price}
                  </span>
                </Link>
                <div className="p-5">
                  <h3 className="text-lg font-semibold tracking-tight text-[#19372f]">
                    {property.title}
                  </h3>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-[#77786e]">
                    <MapPin size={14} aria-hidden="true" />
                    {property.address}, {property.city}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#eee9dd] pt-4 text-xs font-medium text-[#65736d]">
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble size={15} className="text-[#987d48]" aria-hidden="true" />
                      {property.beds} beds
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Bath size={15} className="text-[#987d48]" aria-hidden="true" />
                      {property.baths} baths
                    </span>
                    <span>{property.sqft} sqft</span>
                    <Link
                      href={
                        property.id === "brighton-ct"
                          ? "/properties/brighton-ct"
                          : "/contact"
                      }
                      className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-[#765f2f] transition group-hover:gap-2"
                    >
                      View home <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-2xl border border-dashed border-[#d8c99e] bg-[#f7f4ea] px-5 py-12 text-center">
            <h3 className="font-semibold text-[#19372f]">
              No featured homes match those filters.
            </h3>
            <p className="mt-2 text-sm text-[#777465]">
              Try a nearby town or choose a different bedroom count.
            </p>
            <button
              type="button"
              onClick={clearSearch}
              className="mt-4 rounded-full bg-[#e9e1cf] px-4 py-2 text-sm font-semibold text-[#765f2f] hover:bg-[#dfd2b1]"
            >
              Show all homes
            </button>
          </div>
        )}
      </section>
    </>
  );
}
