"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Como funciona", href: "#ecosistema" },
  { label: "Para marcas", href: "#marcas" },
  { label: "Para distribuidoras", href: "#distribuidoras" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md bg-white/95 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#inicio" className="font-[family-name:var(--font-syne)] text-xl font-bold text-bosque">
            Gondolapp
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-bosque transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-lg bg-bosque px-5 py-2 text-sm font-medium text-white hover:bg-pradera transition-colors"
            >
              Quiero una demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="h-6 w-6 text-bosque" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-gray-600 hover:text-bosque"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-bosque px-5 py-3 text-center text-sm font-medium text-white"
          >
            Quiero una demo
          </a>
        </div>
      )}
    </nav>
  );
}
