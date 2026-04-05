"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "El Problema", href: "#problema" },
  { label: "Solución", href: "#solucion" },
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Diferencial", href: "#comparativa" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          transition: "box-shadow 0.3s ease",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#inicio">
            <Image src="/logo.png" alt="GondolApp" width={140} height={40} style={{ height: 40, width: "auto" }} priority />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ color: "#3a4a56", fontSize: "0.9rem", fontWeight: 500, textDecoration: "none", transition: "color 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3a4a56")}
              >
                {l.label}
              </a>
            ))}
            <a href="#contacto" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.88rem" }}>
              Acceso anticipado
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(true)}
            aria-label="Menu"
          >
            <span style={{ width: 24, height: 2, background: "var(--green-dark)", borderRadius: 2, display: "block" }} />
            <span style={{ width: 24, height: 2, background: "var(--green-dark)", borderRadius: 2, display: "block" }} />
            <span style={{ width: 24, height: 2, background: "var(--green-dark)", borderRadius: 2, display: "block" }} />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div className={`mobile-overlay ${open ? "open" : ""}`}>
        <button
          onClick={() => setOpen(false)}
          style={{ position: "absolute", top: 20, right: 24, padding: 8 }}
          aria-label="Cerrar"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="var(--green-dark)" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ color: "var(--green-dark)", fontSize: "1.4rem", fontWeight: 600, textDecoration: "none" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={() => setOpen(false)}
          className="btn-primary"
        >
          Acceso anticipado
        </a>
      </div>
    </>
  );
}
