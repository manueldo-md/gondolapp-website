"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "La necesidad", href: "#problema" },
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Cómo funciona", href: "#solucion" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#inicio">
            <Image src="/logo.png" alt="GondolApp" width={140} height={40} style={{ height: 36, width: "auto" }} priority />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8" style={{ marginRight: "auto", marginLeft: "2rem" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} style={{
                color: "var(--slate-600, #475569)",
                fontSize: "0.9rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--g-700)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--slate-600, #475569)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://gondolapp-delta.vercel.app/" className="btn btn-secondary" style={{ padding: "9px 20px", fontSize: "0.875rem" }} target="_blank" rel="noopener noreferrer">
              Login
            </a>
            <a href="#contacto" className="btn btn-primary" style={{ padding: "9px 20px", fontSize: "0.875rem" }}>
              Acceso anticipado
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button className="md:hidden" onClick={() => setOpen(true)} style={{ padding: 8, background: "none", border: "none", cursor: "pointer" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[0,1,2].map(i => <span key={i} style={{ width: 22, height: 2, background: "var(--slate-700)", borderRadius: 2, display: "block" }} />)}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-overlay ${open ? "open" : ""}`}>
        <button onClick={() => setOpen(false)} style={{ position: "absolute", top: 20, right: 20, padding: 8, background: "none", border: "none", cursor: "pointer" }}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="var(--slate-700)" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text)",
            fontSize: "1.5rem",
            fontWeight: 700,
            textDecoration: "none",
          }}>{l.label}</a>
        ))}
        <a href="#contacto" onClick={() => setOpen(false)} className="btn btn-primary">
          Acceso anticipado
        </a>
      </div>
    </>
  );
}
