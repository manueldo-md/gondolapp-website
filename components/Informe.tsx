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
  alt: `Relevamiento góndola #${n}`,
}));

// Split into two rows for opposite-direction marquees
const row1 = gondolaPhotos.slice(0, 10);
const row2 = gondolaPhotos.slice(10);

// ─── Components ──────────────────────────────────────────────────────────

function ReportPage({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 10,
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)",
      border: "1px solid var(--border)",
      aspectRatio: "210/297", // A4
      position: "relative",
      flexShrink: 0,
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    }}
      className="informe-page"
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="300px" />
    </div>
  );
}

function GondolaThumb({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      width: 110,
      height: 110,
      borderRadius: 10,
      overflow: "hidden",
      flexShrink: 0,
      position: "relative",
      boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}>
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} sizes="110px" />
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────
export default function Informe() {
  return (
    <section id="informe" style={{
      padding: "5rem 0 6rem",
      background: "linear-gradient(180deg, var(--bg-subtle) 0%, var(--bg) 100%)",
      overflow: "hidden",
    }}>

      {/* Header */}
      <div className="blur-in" style={{ textAlign: "center", marginBottom: "3.5rem", padding: "0 1.5rem" }}>
        <span className="badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>Reporte procesado</span>
        <h2 className="section-title">
          El primer reporte del canal<br />tradicional con datos reales
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 500, margin: "0.75rem auto 0" }}>
          Fotos verificadas en campo, procesadas por IA y convertidas en inteligencia de mercado accionable para marcas y distribuidoras.
        </p>
      </div>

      {/* Main content: report pages left + gondola marquee right */}
      <div className="informe-layout" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* LEFT: 4 report pages in 2×2 grid */}
        <div className="blur-in" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          alignContent: "start",
          transitionDelay: "80ms",
        }}>
          {informePages.map((p, i) => (
            <ReportPage key={i} src={p.src} alt={p.alt} />
          ))}
          {/* Bottom caption */}
          <div style={{ gridColumn: "1 / -1", textAlign: "center", paddingTop: "0.5rem" }}>
            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
              Informe de relevamiento — Entre Ríos 2025<br />
              <span style={{ color: "var(--g-700)", fontWeight: 600 }}>+500 fotos · 16 ciudades · 133 puntos de venta</span>
            </p>
          </div>
        </div>

        {/* RIGHT: Gondola photo marquees */}
        <div className="blur-in" style={{ transitionDelay: "160ms", overflow: "hidden", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }}>

          <div style={{
            fontSize: "0.7rem", fontWeight: 700, color: "var(--text-muted)",
            letterSpacing: "0.08em", textTransform: "uppercase",
            marginBottom: "0.5rem", paddingLeft: "0.5rem",
          }}>
            Relevamientos en campo
          </div>

          {/* Row 1 — scrolls left */}
          <div className="marquee-wrap">
            <div className="marquee-track-left" style={{ gap: 10 }}>
              {[...row1, ...row1].map((g, i) => <GondolaThumb key={i} src={g.src} alt={g.alt} />)}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="marquee-wrap">
            <div className="marquee-track-right" style={{ gap: 10 }}>
              {[...row2, ...row2].map((g, i) => <GondolaThumb key={i} src={g.src} alt={g.alt} />)}
            </div>
          </div>

          {/* Counter badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: "1rem",
            marginTop: "1rem", paddingLeft: "0.5rem", flexWrap: "wrap",
          }}>
            <div style={{
              background: "var(--g-50)",
              border: "1px solid rgba(22,163,74,0.2)",
              borderRadius: 10,
              padding: "0.75rem 1.25rem",
            }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.4rem", color: "var(--g-700)", lineHeight: 1 }}>+500</div>
              <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: 3 }}>fotos en campo</div>
            </div>
            <div style={{
              background: "var(--g-50)",
              border: "1px solid rgba(22,163,74,0.2)",
              borderRadius: 10,
              padding: "0.75rem 1.25rem",
            }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.4rem", color: "var(--g-700)", lineHeight: 1 }}>99,5%</div>
              <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: 3 }}>aprobadas por IA</div>
            </div>
            <div style={{
              background: "var(--g-50)",
              border: "1px solid rgba(22,163,74,0.2)",
              borderRadius: 10,
              padding: "0.75rem 1.25rem",
            }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.4rem", color: "var(--g-700)", lineHeight: 1 }}>16</div>
              <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: 3 }}>ciudades</div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .informe-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .informe-page:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06) !important;
        }
        @media (max-width: 860px) {
          .informe-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
