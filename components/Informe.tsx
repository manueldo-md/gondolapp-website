"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

// ─── Report pages (grayscale) ─────────────────────────────────────────────
const informePages = [
  { src: "/screenshots-informe/Informe1.jpg", alt: "Portada del reporte", label: "Portada", desc: "Identidad del relevamiento y datos de campaña" },
  { src: "/screenshots-informe/informe2.jpg", alt: "Análisis de góndola", label: "Análisis", desc: "Presencia, share of shelf y precios verificados" },
  { src: "/screenshots-informe/informe3.jpg", alt: "Métricas de cobertura", label: "Cobertura", desc: "Puntos de venta por ciudad y zona" },
  { src: "/screenshots-informe/informe4.jpg", alt: "Conclusiones", label: "Conclusiones", desc: "Oportunidades detectadas y acciones recomendadas" },
];

// ─── Bubble config: back (z=1) and front (z=10) layers ───────────────────
const bubbles = [
  // ── BACK LAYER — slower, behind the report pages ──
  { src: "002.jpg", size: 128, left: "2%",   top: "12%",  layer: "back",  speed: 28, delay: 500  },
  { src: "004.jpg", size: 142, left: "81%",  top: "6%",   layer: "back",  speed: 22, delay: 300  },
  { src: "006.jpg", size: 132, left: "52%",  top: "78%",  layer: "back",  speed: 32, delay: 1200 },
  { src: "008.jpg", size: 162, left: "-2%",  top: "58%",  layer: "back",  speed: 18, delay: 1600 },
  { src: "010.jpg", size: 112, left: "64%",  top: "74%",  layer: "back",  speed: 26, delay: 800  },
  // ── FRONT LAYER — faster, in front of the report pages ──
  { src: "001.jpg", size: 172, left: "-3%",  top: "24%",  layer: "front", speed: 68, delay: 0    },
  { src: "003.jpg", size: 148, left: "74%",  top: "14%",  layer: "front", speed: 62, delay: 1100 },
  { src: "005.jpg", size: 106, left: "24%",  top: "76%",  layer: "front", speed: 52, delay: 700  },
  { src: "007.jpg", size: 96,  left: "88%",  top: "62%",  layer: "front", speed: 58, delay: 900  },
  { src: "009.jpg", size: 122, left: "38%",  top: "-4%",  layer: "front", speed: 48, delay: 400  },
];

// ─── Section ─────────────────────────────────────────────────────────────
export default function Informe() {
  const sectionRef = useRef<HTMLElement>(null);
  // One ref per bubble (outer parallax wrapper)
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-based parallax
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionMid = rect.top + rect.height / 2;
      const viewMid = window.innerHeight / 2;
      const ratio = (viewMid - sectionMid) / window.innerHeight; // -0.5 → +0.5

      bubbles.forEach((b, i) => {
        const el = bubbleRefs.current[i];
        if (!el) return;
        el.style.transform = `translateY(${ratio * b.speed}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const backBubbles  = bubbles.map((b, i) => ({ ...b, i })).filter(b => b.layer === "back");
  const frontBubbles = bubbles.map((b, i) => ({ ...b, i })).filter(b => b.layer === "front");

  const renderBubble = (b: typeof bubbles[0] & { i: number }) => (
    <div
      key={b.i}
      ref={el => { bubbleRefs.current[b.i] = el; }}
      style={{
        position: "absolute",
        left: b.left,
        top: b.top,
        width: b.size,
        height: b.size,
        willChange: "transform",
        transition: "transform 0.1s linear",
      }}
    >
      {/* Inner div handles the float Y-oscillation independently */}
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        overflow: "hidden",
        animation: `gondola-float ${5 + (b.i % 3) * 0.8}s ${b.delay}ms ease-in-out infinite`,
        boxShadow: "0 12px 40px rgba(0,0,0,0.35), 0 0 0 2px rgba(255,255,255,0.08)",
        position: "relative",
      }}>
        <Image
          src={`/screenshots-reales/${b.src}`}
          alt={`Relevamiento en campo`}
          fill
          style={{ objectFit: "cover" }}
          sizes="180px"
        />
        {/* Rim gloss */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "radial-gradient(circle at 35% 28%, rgba(255,255,255,0.18) 0%, transparent 55%)",
          pointerEvents: "none",
        }} />
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="informe"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "6rem 0 5rem",
        background: "var(--bg-subtle)",
      }}
    >

      {/* ── BACK BUBBLES (z=1, behind content) ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        {backBubbles.map(renderBubble)}
      </div>

      {/* ── CONTENT (z=5) ── */}
      <div style={{ position: "relative", zIndex: 5 }}>

        {/* Header */}
        <div className="blur-in" style={{ textAlign: "center", marginBottom: "3.5rem", padding: "0 1.5rem" }}>
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

        {/* Achievement pills */}
        <div className="blur-in" style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          maxWidth: 1000,
          margin: "0 auto 2.5rem",
          padding: "0 1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          transitionDelay: "80ms",
        }}>
          {["+500 fotos verificadas", "16 ciudades cubiertas", "133 PDV relevados", "99,5% aprobación IA"].map(t => (
            <span key={t} style={{
              fontSize: "0.75rem", fontWeight: 700,
              color: "var(--g-700)",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(22,163,74,0.25)",
              padding: "6px 16px", borderRadius: 99,
              display: "flex", alignItems: "center", gap: 6,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              <span style={{ color: "var(--g-500)", fontSize: "0.8rem" }}>✓</span> {t}
            </span>
          ))}
        </div>

        {/* 4 report pages — GRAYSCALE */}
        <div className="blur-in" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 1.5rem",
          transitionDelay: "160ms",
        }}>
          {informePages.map((p, i) => (
            <div key={i} className="informe-card">
              <div style={{
                background: "#fff",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
                aspectRatio: "210/297",
                position: "relative",
              }}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    filter: "grayscale(100%) contrast(1.08) brightness(1.03)",
                  }}
                  sizes="280px"
                />
                {/* Page number */}
                <div style={{
                  position: "absolute", top: 10, right: 10,
                  background: "rgba(0,0,0,0.55)",
                  color: "#fff",
                  fontSize: "0.58rem", fontWeight: 800,
                  padding: "3px 9px", borderRadius: 99,
                  backdropFilter: "blur(4px)",
                  letterSpacing: "0.06em",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div style={{ padding: "0.85rem 0.25rem 0" }}>
                <p style={{ fontWeight: 700, fontSize: "0.82rem", color: "var(--text)", marginBottom: "0.25rem" }}>
                  {p.label}
                </p>
                <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div className="blur-in" style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          marginTop: "3.5rem",
          padding: "2.5rem 1.5rem 0",
          borderTop: "1px solid var(--border)",
          maxWidth: 900,
          margin: "3.5rem auto 0",
          flexWrap: "wrap",
          transitionDelay: "240ms",
        }}>
          {[
            { val: "30 seg", label: "por foto en campo" },
            { val: "IA", label: "triple validación automática" },
            { val: "< 48 hs", label: "del campo al reporte final" },
          ].map(({ val, label }) => (
            <div key={val} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.7rem",
                color: "var(--g-700)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>{val}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 5 }}>{label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* ── FRONT BUBBLES (z=10, in front of content) ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none" }}>
        {frontBubbles.map(renderBubble)}
      </div>

      <style>{`
        .informe-card {
          display: flex;
          flex-direction: column;
        }
        .informe-card > div:first-child {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .informe-card:hover > div:first-child {
          transform: translateY(-8px);
          box-shadow: 0 24px 56px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08) !important;
        }
        @media (max-width: 860px) {
          #informe .blur-in[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          #informe .blur-in[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
