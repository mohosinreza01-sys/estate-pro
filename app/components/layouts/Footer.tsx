import Link from "next/link";
import { ArrowUpRight, House, Mail, MapPin, Phone } from "lucide-react";

const exploreLinks = [
  ["Buy a home", "/#featured-homes"],
  ["Explore rentals", "/#property-types"],
  ["Neighborhoods", "/#neighborhoods"],
  ["Sell your property", "/contact"],
] as const;

const companyLinks = [
  ["About us", "/about"],
  ["Our services", "/about#how-we-help"],
  ["Careers", "mailto:hello@zenvia.com?subject=Careers"],
  ["Contact", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#102e24] text-[#faf8f0]">
      <div className="container-main grid gap-9 py-11 sm:grid-cols-2 sm:py-14 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1.15fr]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-sm text-xl font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#d3b875]">
              <House size={19} aria-hidden="true" />
            </span>
            zenvia<span className="text-[#d3b875]">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
            A more personal way to find a place that feels like yours.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-xs text-white/55">
            <MapPin size={14} aria-hidden="true" />
            Proudly rooted in Harrisburg, PA
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            {exploreLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition hover:text-[#d3b875] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            {companyLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition hover:text-[#d3b875] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Get in touch</h2>
          <div className="mt-4 space-y-3 text-sm text-white/60">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 transition hover:text-[#d3b875]"
            >
              <Phone size={15} aria-hidden="true" />
              +1 234 567 890
            </a>
            <a
              href="mailto:hello@zenvia.com"
              className="flex items-center gap-2 transition hover:text-[#d3b875]"
            >
              <Mail size={15} aria-hidden="true" />
              hello@zenvia.com
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold">A little inspiration?</h2>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Good homes, neighborhood notes, and helpful ideas for your next move.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#d3b875] px-4 text-xs font-semibold text-[#173a2b] transition hover:bg-[#f4ecd8]"
          >
            Get in touch <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col gap-2 py-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Zenvia Real Estate. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/contact" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
