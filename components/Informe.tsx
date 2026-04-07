"use client";
import Image from "next/image";

// ─── 4 informe pages ─────────────────────────────────────────────────────
const informePages = [
  {
    src: "/screenshots-informe/Informe1.jpg",
    alt: "Informe — portada",
    label: "Portada del reporte",
    desc: "Identidad del relevamiento y datos de campaña",
  },
  {
    src: "/screenshots-informe/informe2.jpg",
    alt: "Informe — análisis",
    label: "Análisis de góndola",
    desc: "Presencia, share of shelf y precios verificados",
  },
  {
    src: "/screenshots-informe/informe3.jpg",
    alt: "Informe — métricas",
    label: "Métricas de cobertura",
    desc: "Puntos de venta relevados por ciudad y zona",
  },
  {
    src: "/screenshots-informe/informe4.jpg",
    alt: "Informe — conclusiones",
    label: "Conclusiones accionables",
    desc: "Oportunidades detectadas y acciones recomendadas",
  },
];

// ─── 10 gondola bubbles ───────────────────────────────────────────────────
// x/y as % of container · size in px · delay in ms
const bubbles = [
  { src: "001.jpg", size: 158, x:  1, y: 18, delay:    0 },
  { src: "002.jpg", size: 118, x: 12, y:  2, delay:  550 },
  { src: "003.jpg", size: 172, x: 22, y: 28, delay: 1100 },
  { src: "004.jpg", size: 132, x: 36, y:  4, delay: 1600 },
  { src: "005.jpg", size: 148, x: 46, y: 24, delay:  750 },
  { src: "006.jpg", size: 122, x: 57, y:  2, delay: 1250 },
  { src: "007.jpg", size: 162, x: 66, y: 26, delay:  350 },
  { src: "008.jpg", size: 128, x: 77, y:  6, delay:  950 },
  { src: "009.jpg", size: 114, x: 86, y: 24, delay: 1750 },
  { src: "010.jpg", size: 144, x: 88, y:  2, delay:  420 },
];

// ─── Section ─────────────────────────────────────────────────────────────
export default function Informe() {
  return (
    <section id="informe" style={{
      padding: "6rem 0 0",
      background: "var(--bg-subtle)",
      overflow: "hidden",
    }}>

      {/* ── Header ── */}
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
          Fotos verificadas en campo, procesadas por IA y convertidas en
          inteligencia de mercado accionable para marcas y distribuidoras.
        </p>
      </div>

      {/* ── 4 Informe pages horizontal strip ── */}
      <div className="blur-in" style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 1.5rem",
        marginBottom: "5rem",
        transitionDelay: "80ms",
      }}>
        {/* Achievement bar above */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          marginBottom: "1.75rem",
          flexWrap: "wrap",
        }}>
          <div style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(22,163,74,0.3), transparent)",
          }} />
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {["+500 fotos verificadas", "16 ciudades cubiertas", "133 PDV relevados", "99,5% aprobación IA"].map(t => (
              <span key={t} style={{
                fontSize: "0.72rem", fontWeight: 700,
                color: "var(--g-700)",
                background: "var(--g-50)",
                border: "1px solid rgba(22,163,74,0.22)",
                padding: "4px 12px", borderRadius: 99,
                display: "flex", alignItems: "center", gap: 5,
              }}>
                <span style={{ color: "var(--g-500)" }}>✓</span> {t}
              </span>
            ))}
          </div>
          <div style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(22,163,74,0.3), transparent)",
          }} />
        </div>

        {/* 4 pages grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.25rem",
        }}>
          {informePages.map((p, i) => (
            <div key={i} className="informe-card" style={{ transitionDelay: `${i * 80}ms` }}>
              {/* Page */}
              <div style={{
                background: "#fff",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 8px 28px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.05)",
                border: "1px solid var(--border)",
                aspectRatio: "210/297",
                position: "relative",
                marginBottom: "1rem",
              }}>
                <Image
                  src={p.src} alt={p.alt} fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="280px"
                />
                {/* Page number badge */}
                <div style={{
                  position: "absolute", top: 10, right: 10,
                  background: "rgba(22,163,74,0.9)",
                  color: "#fff",
                  fontSize: "0.6rem", fontWeight: 800,
                  padding: "3px 8px", borderRadius: 99,
                  backdropFilter: "blur(4px)",
                }}>
                  0{i + 1}
                </div>
              </div>
              {/* Caption */}
              <p style={{
                fontWeight: 700, fontSize: "0.8rem",
                color: "var(--text)", marginBottom: "0.2rem",
              }}>{p.label}</p>
              <p style={{
                fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: 1.5,
              }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bubble zone ── */}
      <div style={{
        position: "relative",
        background: "linear-gradient(180deg, var(--bg-subtle) 0%, var(--g-900) 100%)",
        padding: "3rem 0 0",
      }}>
        {/* Top fade into bubble zone */}
        <div style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          padding: "0 1.5rem",
        }}>
          <p className="blur-in" style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
            fontWeight: 700,
            color: "var(--g-800)",
            letterSpacing: "-0.01em",
          }}>
            Las fotos que lo hicieron posible
          </p>
          <p style={{
            fontSize: "0.9rem",
            color: "var(--slate-500)",
            marginTop: "0.4rem",
          }}>
            Imágenes reales tomadas por los gondoleros en campo · Entre Ríos 2025
          </p>
        </div>

        {/* Bubbles container */}
        <div style={{
          position: "relative",
          height: 340,
          overflow: "hidden",
        }}>
          {/* Subtle glow bg */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(34,197,94,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {bubbles.map((b, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${b.x}%`,
                top: `${b.y}%`,
                width: b.size,
                height: b.size,
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: `0 8px 32px rgba(0,0,0,0.35), 0 0 0 2px rgba(255,255,255,0.07)`,
                animation: `gondola-float ${5 + (i % 3)}s ${b.delay}ms ease-in-out infinite`,
                flexShrink: 0,
              }}
            >
              <Image
                src={`/screenshots-reales/${b.src}`}
                alt={`Relevamiento en campo #${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="180px"
              />
              {/* Inner rim light */}
              <div style={{
                position: "absolute", inset: 0,
                borderRadius: "50%",
                boxShadow: "inset 0 2px 12px rgba(255,255,255,0.12), inset 0 -4px 16px rgba(0,0,0,0.3)",
                pointerEvents: "none",
              }} />
            </div>
          ))}

          {/* Bottom dark fade */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 80,
            background: "linear-gradient(to bottom, transparent, var(--g-900))",
            pointerEvents: "none",
          }} />
        </div>

        {/* Dark footer strip */}
        <div style={{
          background: "var(--g-900)",
          padding: "2.5rem 1.5rem",
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}>
          {[
            { val: "30 seg", label: "por foto en campo" },
            { val: "IA", label: "triple validación automática" },
            { val: "< 48 hs", label: "del campo al reporte" },
          ].map(({ val, label }) => (
            <div key={val} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.8rem",
                color: "var(--g-400)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>{val}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginTop: 5 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .informe-card {
          display: flex;
          flex-direction: column;
          transition: transform 0.28s ease;
        }
        .informe-card:hover > div:first-child {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.07) !important;
        }
        .informe-card > div:first-child {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        @media (max-width: 860px) {
          #informe > div:nth-child(2) > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          #informe > div:nth-child(2) > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
