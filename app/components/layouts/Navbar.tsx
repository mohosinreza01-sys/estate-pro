"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Menu, X } from "lucide-react";

const navLinks = [
  ["Buy", "/#featured-homes"],
  ["Rent", "/#explore-options"],
  ["Sell", "/contact"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

const accountLinks = [
  ["Manage Rentals", "mailto:hello@zenvia.com?subject=Manage%20rentals"],
  ["Advertise", "mailto:hello@zenvia.com?subject=Advertising"],
  ["Help", "mailto:hello@zenvia.com?subject=Help"],
  ["Sign In", "mailto:hello@zenvia.com?subject=Account%20support"],
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-20 bg-[#084477] text-white shadow-sm">
      <nav className="container-main relative flex min-h-[68px] items-center justify-between gap-5">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          onClick={closeMenu}
        >
          <Home size={24} strokeWidth={2.5} aria-hidden="true" />
          <span className="text-xl font-bold tracking-tight">Zenvia</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-white/85 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 text-sm text-white/80 xl:flex">
          {accountLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          className="rounded-lg p-2 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
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
            className="absolute inset-x-0 top-full rounded-b-xl border-t border-white/10 bg-[#084477] px-4 pb-4 pt-2 shadow-xl lg:hidden"
          >
            <div className="grid gap-1">
              {navLinks.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1 border-t border-white/15 pt-2">
              {accountLinks.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
