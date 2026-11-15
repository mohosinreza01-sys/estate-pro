"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, House, Menu, X } from "lucide-react";

const navLinks = [
  ["Buy a home", "/#featured-homes"],
  ["Rent", "/#property-types"],
  ["Neighborhoods", "/#neighborhoods"],
  ["About us", "/about"],
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[#e9e3d6] bg-[#faf9f4]/95 text-[#19372f] shadow-[0_3px_18px_rgba(19,55,43,0.05)] backdrop-blur-xl">
      <nav className="container-main relative flex min-h-[78px] items-center justify-between gap-5 sm:min-h-[84px]">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987d48]"
          onClick={closeMenu}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#e9e1cf] text-[#214b38]">
            <House size={21} strokeWidth={2.2} aria-hidden="true" />
          </span>
          <span className="text-[22px] font-semibold tracking-[-0.04em] sm:text-2xl">
            zenvia<span className="text-[#b99a5a]">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#526158] transition hover:text-[#987d48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987d48] xl:text-sm"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-[#214b38] px-5 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#faf8f0] shadow-[0_5px_15px_rgba(20,54,38,0.16)] transition hover:bg-[#173a2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#987d48] sm:inline-flex"
        >
          Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          className="rounded-full border border-[#e4dcc8] bg-[#f4f0e5] p-2.5 text-[#19372f] transition hover:border-[#c5ad70] hover:bg-[#ece5d2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#987d48] lg:hidden"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full overflow-hidden rounded-b-[24px] border-t border-[#d3b875]/20 bg-[#102e24] px-5 pb-5 pt-5 text-[#faf8f0] shadow-[0_24px_50px_rgba(10,31,23,0.28)] sm:px-7 lg:hidden"
          >
            <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d3b875]">
                Explore Zenvia
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
                Menu / 04
              </p>
            </div>
            <div>
              {navLinks.map(([label, href], index) => (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-white/10 px-1 py-4 text-[15px] font-semibold uppercase tracking-[0.09em] text-white/85 transition hover:text-[#e3cc91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d3b875] sm:text-base"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-serif text-sm font-normal tracking-normal text-[#d3b875]">
                      0{index + 1}
                    </span>
                    {label}
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d3b875]"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#d3b875] text-[12px] font-bold uppercase tracking-[0.12em] text-[#173a2b] transition hover:bg-[#e3cc91]"
            >
              Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
