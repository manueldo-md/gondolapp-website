"use client";

import Image from "next/image";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cómo funciona", href: "#solucion" },
  { label: "Para marcas", href: "#marcas" },
  { label: "Para distribuidoras", href: "#distribuidoras" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-dark)", padding: "3rem 1.5rem 2rem" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="GondolApp"
              width={140}
              height={40}
              style={{ height: 34, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.75 }}
            />
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", marginTop: "0.35rem" }}>
              El mapa del consumo masivo argentino
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:hola@gondolapp.com"
            style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem", textDecoration: "none" }}
          >
            hola@gondolapp.com
          </a>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "2rem", paddingTop: "1.5rem", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>
            © 2026 GondolApp. Todos los derechos reservados. Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
}
