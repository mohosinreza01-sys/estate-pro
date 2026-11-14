import Link from "next/link";
import { Home, Mail, Phone } from "lucide-react";

const exploreLinks = [
  ["Buy a home", "/#featured-homes"],
  ["Rent a home", "/#explore-options"],
  ["Sell your property", "/contact"],
  ["Find an agent", "/contact"],
] as const;

const companyLinks = [
  ["About us", "/about"],
  ["Our services", "/about#how-we-help"],
  ["Careers", "mailto:hello@zenvia.com?subject=Careers"],
  ["Contact", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="mt-8 bg-[#062f55] text-white">
      <div className="container-main grid gap-9 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-sm text-xl font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Home size={22} aria-hidden="true" />
            Zenvia
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
            Discover exceptional properties and find a place you&apos;ll love
            to call home.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            {exploreLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            {companyLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Get in touch</h2>
          <div className="mt-4 space-y-3 text-sm text-white/65">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Phone size={15} aria-hidden="true" />
              +1 234 567 890
            </a>
            <a
              href="mailto:hello@zenvia.com"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Mail size={15} aria-hidden="true" />
              hello@zenvia.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main py-5 text-center text-xs text-white/50">
          © 2026 Zenvia Real Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
