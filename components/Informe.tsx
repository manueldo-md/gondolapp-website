import Image from "next/image";

// ─── 4 informe pages ─────────────────────────────────────────────────────
const informePages = [
  { src: "/screenshots-informe/Informe1.jpg", alt: "Informe GondolApp — página 1" },
  { src: "/screenshots-informe/informe2.jpg", alt: "Informe GondolApp — página 2" },
  { src: "/screenshots-informe/informe3.jpg", alt: "Informe GondolApp — página 3" },
  { src: "/screenshots-informe/informe4.jpg", alt: "Informe GondolApp — página 4" },
];

// ─── 20 gondola real photos ───────────────────────────────────────────────
const gondolaPhotos = [
  "1","3","4","5","6","7","8","9","10",
  "11","12","13","14","15","16","17","18","19","20","23",
].map(n => ({
  src: `/screenshots-reales/${n}${n === "23" ? ".jpeg" : ".jpg"}`,
  alt: `Relevamiento #${n}`,
}));

const row1 = gondolaPhotos.slice(0, 11);
const row2 = gondolaPhotos.slice(10);

// ─── Section ─────────────────────────────────────────────────────────────
export default function Informe() {
  return (
    <section id="informe" style={{
      padding: "6rem 0 7rem",
      background: "linear-gradient(180deg, var(--bg-subtle) 0%, var(--bg) 100%)",
      overflow: "hidden",
    }}>

      {/* Header */}
      <div className="blur-in" style={{ textAlign: "center", marginBottom: "4rem", padding: "0 1.5rem" }}>
        <span className="badge" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>Reporte procesado</span>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "var(--text)",
          lineHeight: 1.1,
          marginBottom: "1.25rem",
        }}>
          El primer reporte del canal<br />tradicional con datos reales
        </h2>
        <p style={{
          color: "var(--text-muted)",
          fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
          lineHeight: 1.75,
          maxWidth: 560,
          margin: "0 auto",
        }}>
          Fotos verificadas en campo, procesadas por IA y convertidas en inteligencia
          de mercado accionable para marcas y distribuidoras.
        </p>
      </div>

      {/* Main: report pages + gondola marquee */}
      <div className="informe-layout">

        {/* LEFT: 4 report pages */}
        <div className="blur-in" style={{ padding: "0 1.5rem 0 max(1.5rem, calc((100vw - 1200px)/2 + 1.5rem))" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}>
            {informePages.map((p, i) => (
              <div key={i} className="informe-page" style={{
                background: "#fff",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 6px 24px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)",
                border: "1px solid var(--border)",
                aspectRatio: "210/297",
                position: "relative",
              }}>
                <Image src={p.src} alt={p.alt} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="280px" />
              </div>
            ))}
          </div>
          <p style={{
            textAlign: "center",
            marginTop: "1.25rem",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            lineHeight: 1.6,
          }}>
            Informe de relevamiento · Entre Ríos 2025<br />
            <strong style={{ color: "var(--g-700)" }}>+500 fotos · 16 ciudades · 133 puntos de venta</strong>
          </p>
        </div>

        {/* RIGHT: gondola marquees */}
        <div className="blur-in" style={{
          display: "flex", flexDirection: "column",
          gap: "1.25rem",
          transitionDelay: "120ms",
        }}>

          <p style={{
            fontSize: "0.75rem", fontWeight: 700,
            color: "var(--slate-400)",
            letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: "0.25rem",
            paddingLeft: "1.5rem",
          }}>
            Relevamientos en campo
          </p>

          {/* Row 1 — scrolls left */}
          <div className="marquee-wrap">
            <div className="marquee-track-left" style={{ gap: 14 }}>
              {[...row1, ...row1].map((g, i) => (
                <div key={i} className="gondola-thumb">
                  <Image src={g.src} alt={g.alt} fill style={{ objectFit: "cover" }} sizes="210px" />
                  <div className="gondola-overlay" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="marquee-wrap">
            <div className="marquee-track-right" style={{ gap: 14 }}>
              {[...row2, ...row2].map((g, i) => (
                <div key={i} className="gondola-thumb">
                  <Image src={g.src} alt={g.alt} fill style={{ objectFit: "cover" }} sizes="210px" />
                  <div className="gondola-overlay" />
                </div>
              ))}
            </div>
          </div>

          {/* Stat badges */}
          <div style={{
            display: "flex",
            gap: "0.75rem",
            marginTop: "0.75rem",
            flexWrap: "wrap",
            paddingLeft: "1.5rem",
          }}>
            {[
              { val: "+500", label: "fotos relevadas" },
              { val: "99,5%", label: "aprobadas por IA" },
              { val: "16", label: "ciudades cubiertas" },
            ].map(({ val, label }) => (
              <div key={val} style={{
                background: "var(--g-50)",
                border: "1px solid rgba(22,163,74,0.2)",
                borderRadius: 12,
                padding: "0.85rem 1.25rem",
                textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  color: "var(--g-700)",
                  lineHeight: 1,
                }}>{val}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .informe-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }
        .informe-page {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          cursor: default;
        }
        .informe-page:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 48px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08) !important;
        }
        .gondola-thumb {
          width: 210px;
          height: 160px;
          border-radius: 14px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
          box-shadow: 0 4px 18px rgba(0,0,0,0.18);
          border: 1.5px solid rgba(255,255,255,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .gondola-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(5,46,22,0.45) 100%
          );
          transition: opacity 0.25s ease;
        }
        .marquee-wrap:hover .gondola-thumb {
          box-shadow: 0 8px 32px rgba(22,163,74,0.25);
        }
        @media (max-width: 860px) {
          .informe-layout {
            grid-template-columns: 1fr !important;
          }
          .informe-layout > div:first-child {
            padding: 0 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
