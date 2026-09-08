import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Services", href: "#services" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-2xl bg-gradient-to-br from-brand to-[oklch(0.55_0.18_300)] text-lg font-display font-extrabold text-white shadow-lg shadow-brand/30">
            N
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-ink">
            Nimbus
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-ink/70 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#products"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark sm:inline-block"
          >
            Login
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-2xl border border-white/60 bg-white/70 backdrop-blur md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="size-5 text-ink" />
            ) : (
              <Menu className="size-5 text-ink" />
            )}
          </button>
        </div>

      </div>

      {mobileOpen && (
        <div className="border-t border-white/60 bg-white/80 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-ink/80 transition-colors hover:bg-white/70 hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#products"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/30"
            >
              Login
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}
