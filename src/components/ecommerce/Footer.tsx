import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/50 bg-white/50 backdrop-blur-xl" id="contact">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-2xl bg-gradient-to-br from-brand to-[oklch(0.55_0.18_300)] font-display font-extrabold text-white">
                N
              </span>
              <span className="font-display text-xl font-extrabold text-ink">
                Nimbus
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ink/60">
              Soft, smart tech for a lighter way to live. Curated with care since
              2019.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-ink/40">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li>
                <a href="#about" className="transition-colors hover:text-brand">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-brand"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-brand"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-ink/40">
              Get in touch
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li>
                <a
                  href="mailto:kunal832006@gmail.com"
                  className="transition-colors hover:text-brand"
                >
                  kunal832006@gmail.com
                </a>
              </li>
              <li>
                12 Cloud Avenue
                <br />
                New Delhi, IN 110001
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-ink/40">
              Follow us
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-2xl border border-white/60 bg-white/70 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/60 pt-6 text-sm text-ink/50 md:flex-row">
          <p>© 2025 Nimbus. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-brand">
              Terms & Conditions
            </a>
            <a href="#" className="transition-colors hover:text-brand">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
