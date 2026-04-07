"use client";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────
const reportPages = [
  "/screenshots-informe/Informe1.jpg",
  "/screenshots-informe/informe2.jpg",
  "/screenshots-informe/informe3.jpg",
  "/screenshots-informe/informe4.jpg",
];

const gondolaPhotos = [
  "001","002","003","004","005","006","007","008","009","010",
].map(n => `/screenshots-reales/${n}.jpg`);

const stats = [
  { val: "+500", label: "Fotos verificadas en campo" },
  { val: "133",  label: "Puntos de venta relevados" },
  { val: "< 48 hs", label: "Del campo al reporte final" },
];

const insights = [
  "Presencia real de cada SKU en góndola, no estimada",
  "Precios reales capturados in-situ en 16 ciudades",
  "Quiebres detectados y clasificados automáticamente por IA",
];

// ─── Section ──────────────────────────────────────────────────────────────
export default function Informe() {
  return (
    <section id="informe" style={{
      background: "linear-gradient(170deg, var(--g-900) 0%, #030f07 100%)",
      overflow: "hidden",
      padding: "7rem 0 0",
    }}>
      {/* SVG duotone filter definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="duotone-green">
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.02 0.10" />
              <feFuncG type="table" tableValues="0.12 0.72" />
              <feFuncB type="table" tableValues="0.06 0.22" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ── Header ── */}
        <div className="blur-in" style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="badge" style={{
            marginBottom: "1.25rem", display: "inline-flex",
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.3)",
            color: "var(--g-400)",
          }}>
            Reporte procesado
          </span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 800, letterSpacing: "-0.03em",
            color: "#fff", lineHeight: 1.08,
            marginBottom: "1.25rem",
          }}>
            El primer reporte del canal<br />tradicional con datos reales
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            lineHeight: 1.75, maxWidth: 520, margin: "0 auto",
          }}>
            Fotos verificadas en campo, procesadas por IA y convertidas
            en inteligencia de mercado accionable.
          </p>
        </div>

        {/* ── Main 2-col: stack + stats ── */}
        <div className="informe-main blur-in" style={{ transitionDelay: "80ms" }}>

          {/* LEFT: Report stack */}
          <div className="report-stack-wrap">
            <div className="report-stack">
              {reportPages.map((src, i) => (
                <div key={i} className={`report-card report-card-${i}`}>
                  {/* Duotone via SVG filter on the image wrapper */}
                  <div style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "210/297",
                    filter: "url(#duotone-green)",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}>
                    <Image
                      src={src}
                      alt={`Reporte página ${i + 1}`}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      sizes="320px"
                    />
                  </div>
                  {/* Page label */}
                  <div style={{
                    position: "absolute", bottom: 14, left: 14,
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(6px)",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.6rem", fontWeight: 700,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    padding: "4px 10px", borderRadius: 99,
                  }}>
                    0{i + 1}
                  </div>
                </div>
              ))}
            </div>
            {/* Hover hint */}
            <p style={{
              textAlign: "center",
              marginTop: "2rem",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.06em",
            }}>
              Pasá el mouse para ver las páginas
            </p>
          </div>

          {/* RIGHT: Stats + insights */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "2.5rem" }}>

            {/* Big stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  backdropFilter: "blur(8px)",
                }}>
                  <div style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    color: "var(--g-400)",
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: 90,
                  }}>
                    {s.val}
                  </div>
                  <div style={{
                    width: 1, height: 36,
                    background: "rgba(34,197,94,0.25)",
                    flexShrink: 0,
                  }} />
                  <div style={{
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Insights */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.75rem" }}>
              <p style={{
                fontSize: "0.7rem", fontWeight: 700,
                color: "var(--g-500)",
                letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                Qué incluye el reporte
              </p>
              {insights.map((t, i) => (
                <div key={i} style={{
                  display: "flex", gap: "0.75rem", alignItems: "flex-start",
                  marginBottom: "0.85rem",
                }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: "rgba(34,197,94,0.15)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1,
                  }}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5l2 2 4-4" stroke="var(--g-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                    {t}
                  </span>
                </div>
              ))}

              <a href="#contacto" className="btn btn-primary" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
                Solicitar el reporte completo
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Gondola strip ── */}
      <div style={{ marginTop: "6rem" }}>
        <p style={{
          textAlign: "center",
          fontSize: "0.7rem", fontWeight: 700,
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.12em", textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          Fotos tomadas en campo · Entre Ríos 2025
        </p>

        {/* Single marquee row — large rectangles */}
        <div className="marquee-wrap" style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}>
          <div className="marquee-track-left" style={{ gap: 14 }}>
            {[...gondolaPhotos, ...gondolaPhotos].map((src, i) => (
              <div key={i} style={{
                width: 260,
                height: 180,
                borderRadius: 12,
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
                boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}>
                <Image
                  src={src}
                  alt={`Góndola relevada ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="260px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dark bottom padding */}
        <div style={{ height: "4rem", background: "linear-gradient(to bottom, transparent, #030f07)" }} />
      </div>

      <style>{`
        /* ── Report stack ── */
        .report-stack-wrap {
          position: relative;
        }
        .report-stack {
          position: relative;
          width: 300px;
          height: 440px;
          margin: 0 auto;
        }
        .report-card {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4);
          transition: transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1), box-shadow 0.4s ease;
          cursor: default;
        }
        /* Stacked resting state */
        .report-card-0 { transform: rotate(-3.5deg) translateY(6px);  z-index: 4; }
        .report-card-1 { transform: rotate(-1.2deg) translateY(2px);  z-index: 3; }
        .report-card-2 { transform: rotate( 1.4deg) translateY(-2px); z-index: 2; }
        .report-card-3 { transform: rotate( 3.8deg) translateY(-6px); z-index: 1; }

        /* Fan-out on hover */
        .report-stack:hover .report-card-0 {
          transform: rotate(-14deg) translate(-110px, 18px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.7);
        }
        .report-stack:hover .report-card-1 {
          transform: rotate(-5deg) translate(-36px, -8px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.65);
        }
        .report-stack:hover .report-card-2 {
          transform: rotate( 4deg) translate( 36px, -8px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.65);
        }
        .report-stack:hover .report-card-3 {
          transform: rotate(13deg) translate(110px, 18px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.7);
        }

        /* ── Layout ── */
        .informe-main {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 5rem;
          align-items: center;
          padding-bottom: 1rem;
        }
        @media (max-width: 900px) {
          .informe-main { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .report-stack  { width: 240px !important; height: 352px !important; }
        }
      `}</style>
    </section>
  );
}
