"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

// ─── Report pages ─────────────────────────────────────────────────────────
const informePages = [
  { src: "/screenshots-informe/Informe1.jpg", alt: "Portada del reporte",   label: "Portada",      desc: "Identidad del relevamiento y datos de campaña" },
  { src: "/screenshots-informe/informe2.jpg", alt: "Análisis de góndola",   label: "Análisis",     desc: "Presencia, share of shelf y precios verificados" },
  { src: "/screenshots-informe/informe3.jpg", alt: "Métricas de cobertura", label: "Cobertura",    desc: "Puntos de venta por ciudad y zona" },
  { src: "/screenshots-informe/informe4.jpg", alt: "Conclusiones",          label: "Conclusiones", desc: "Oportunidades detectadas y acciones recomendadas" },
];

// ─── Bubble definitions ───────────────────────────────────────────────────
// left/top = initial CSS position (% of section)
// layer: back (z=1) | front (z=10)
// speed: parallax px per viewport unit (positive = moves up as you scroll down)
const BUBBLES = [
  { src: "002.jpg", size: 128, left: "2%",  top: "12%", layer: "back",  speed: 28, delay: 500  },
  { src: "004.jpg", size: 142, left: "81%", top: "6%",  layer: "back",  speed: 22, delay: 300  },
  { src: "006.jpg", size: 132, left: "52%", top: "78%", layer: "back",  speed: 32, delay: 1200 },
  { src: "008.jpg", size: 162, left: "-2%", top: "58%", layer: "back",  speed: 18, delay: 1600 },
  { src: "010.jpg", size: 112, left: "64%", top: "74%", layer: "back",  speed: 26, delay: 800  },
  { src: "001.jpg", size: 172, left: "-3%", top: "24%", layer: "front", speed: 68, delay: 0    },
  { src: "003.jpg", size: 148, left: "74%", top: "14%", layer: "front", speed: 62, delay: 1100 },
  { src: "005.jpg", size: 106, left: "24%", top: "76%", layer: "front", speed: 52, delay: 700  },
  { src: "007.jpg", size: 96,  left: "88%", top: "62%", layer: "front", speed: 58, delay: 900  },
  { src: "009.jpg", size: 122, left: "38%", top: "-4%", layer: "front", speed: 48, delay: 400  },
] as const;

// ─── Section ─────────────────────────────────────────────────────────────
export default function Informe() {
  const sectionRef  = useRef<HTMLElement>(null);
  const bubbleEls   = useRef<(HTMLDivElement | null)[]>([]);

  // Per-bubble mutable state (no re-renders needed for perf)
  const bState = useRef(BUBBLES.map(() => ({
    dragX: 0, dragY: 0,
    startMouseX: 0, startMouseY: 0,
    startDragX: 0, startDragY: 0,
    isDragging: false,
    hasMoved: false,
  })));
  const parallaxY = useRef(BUBBLES.map(() => 0));
  const activeIdx  = useRef<number | null>(null);

  // Lightbox
  const [lightbox, setLightbox] = useState<string | null>(null);

  // ── Combined transform helper ──
  const applyTransform = useCallback((i: number) => {
    const el = bubbleEls.current[i];
    if (!el) return;
    const { dragX, dragY } = bState.current[i];
    const py = parallaxY.current[i];
    el.style.transform = `translateX(${dragX}px) translateY(${py + dragY}px)`;
  }, []);

  // ── Scroll parallax ──
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onScroll = () => {
      const rect  = section.getBoundingClientRect();
      const ratio = (window.innerHeight / 2 - (rect.top + rect.height / 2)) / window.innerHeight;
      BUBBLES.forEach((b, i) => {
        parallaxY.current[i] = ratio * b.speed;
        if (!bState.current[i].isDragging) applyTransform(i);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [applyTransform]);

  // ── Global mouse events (move + up) ──
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const i = activeIdx.current;
      if (i === null) return;
      const s = bState.current[i];
      const dx = e.clientX - s.startMouseX;
      const dy = e.clientY - s.startMouseY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) s.hasMoved = true;
      s.dragX = s.startDragX + dx;
      s.dragY = s.startDragY + dy;
      applyTransform(i);
    };
    const onUp = () => {
      const i = activeIdx.current;
      if (i === null) return;
      const s = bState.current[i];
      if (!s.hasMoved) setLightbox(BUBBLES[i].src);   // click = open lightbox
      s.isDragging = false;
      activeIdx.current = null;
      document.body.style.cursor = "";
      // Reset z-index on the outer parallax wrapper
      const el = bubbleEls.current[i];
      if (el) el.style.zIndex = "";
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [applyTransform]);

  // ── Per-bubble mousedown ──
  const onMouseDown = useCallback((i: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    const s = bState.current[i];
    s.isDragging = true;
    s.hasMoved   = false;
    s.startMouseX = e.clientX;
    s.startMouseY = e.clientY;
    s.startDragX  = s.dragX;
    s.startDragY  = s.dragY;
    activeIdx.current = i;
    document.body.style.cursor = "grabbing";
    // Bring grabbed bubble to front temporarily
    const el = bubbleEls.current[i];
    if (el) el.style.zIndex = "20";
  }, []);

  // ─── Render ───────────────────────────────────────────────────────────
  const renderBubble = (idx: number) => {
    const b = BUBBLES[idx];
    return (
      <div
        key={idx}
        ref={el => { bubbleEls.current[idx] = el; }}
        onMouseDown={onMouseDown(idx)}
        style={{
          position: "absolute",
          left: b.left,
          top: b.top,
          width: b.size,
          height: b.size,
          zIndex: b.layer === "back" ? 1 : 10,
          willChange: "transform",
          cursor: "grab",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        {/* Inner div: float oscillation (independent of parallax + drag) */}
        <div style={{
          width: "100%", height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          animation: `gondola-float ${5 + (idx % 3) * 0.8}s ${b.delay}ms ease-in-out infinite`,
          boxShadow: "0 12px 40px rgba(0,0,0,0.35), 0 0 0 2.5px rgba(255,255,255,0.1)",
          position: "relative",
          transition: "box-shadow 0.2s ease",
        }}
          className="bubble-inner"
        >
          <Image
            src={`/screenshots-reales/${b.src}`}
            alt="Relevamiento en campo"
            fill
            style={{ objectFit: "cover", pointerEvents: "none" }}
            sizes="180px"
            draggable={false}
          />
          {/* Gloss */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            background: "radial-gradient(circle at 35% 28%, rgba(255,255,255,0.2) 0%, transparent 55%)",
            pointerEvents: "none",
          }} />
          {/* Click hint ring (fades out) */}
          <div className="bubble-hint" />
        </div>
      </div>
    );
  };

  const backIdxs  = BUBBLES.map((b, i) => ({ b, i })).filter(x => x.b.layer === "back").map(x => x.i);
  const frontIdxs = BUBBLES.map((b, i) => ({ b, i })).filter(x => x.b.layer === "front").map(x => x.i);

  return (
    <>
      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.88)",
            zIndex: 99999,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out",
            backdropFilter: "blur(6px)",
            animation: "fadeIn 0.2s ease",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "min(90vw, 900px)",
              maxHeight: "90vh",
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
              animation: "scaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/screenshots-reales/${lightbox}`}
              alt="Relevamiento en campo"
              style={{ display: "block", maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
            />
          </div>
          {/* Close hint */}
          <div style={{
            position: "absolute", top: 24, right: 28,
            color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", fontWeight: 600,
            letterSpacing: "0.06em",
          }}>
            ESC / click para cerrar
          </div>
        </div>
      )}

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
        {/* ── BACK bubbles (z=1) ── */}
        {backIdxs.map(renderBubble)}

        {/* ── CONTENT (z=5) ── */}
        <div style={{ position: "relative", zIndex: 5 }}>

          {/* Header */}
          <div className="blur-in" style={{ textAlign: "center", marginBottom: "3.5rem", padding: "0 1.5rem" }}>
            <span className="badge" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>Reporte procesado</span>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 800, letterSpacing: "-0.03em",
              color: "var(--text)", lineHeight: 1.1, marginBottom: "1.25rem",
            }}>
              El primer reporte del canal<br />tradicional con datos reales
            </h2>
            <p style={{
              color: "var(--text-muted)",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              lineHeight: 1.75, maxWidth: 560, margin: "0 auto",
            }}>
              Fotos verificadas en campo, procesadas por IA y convertidas en inteligencia
              de mercado accionable para marcas y distribuidoras.
            </p>
          </div>

          {/* Achievement pills */}
          <div className="blur-in" style={{
            display: "flex", gap: "0.75rem", maxWidth: 1000,
            margin: "0 auto 2.5rem", padding: "0 1.5rem",
            flexWrap: "wrap", justifyContent: "center", transitionDelay: "80ms",
          }}>
            {["+500 fotos verificadas", "16 ciudades cubiertas", "133 PDV relevados", "99,5% aprobación IA"].map(t => (
              <span key={t} style={{
                fontSize: "0.75rem", fontWeight: 700, color: "var(--g-700)",
                background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(22,163,74,0.25)",
                padding: "6px 16px", borderRadius: 99,
                display: "flex", alignItems: "center", gap: 6,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}>
                <span style={{ color: "var(--g-500)", fontSize: "0.8rem" }}>✓</span> {t}
              </span>
            ))}
          </div>

          {/* 4 report pages — grayscale */}
          <div className="blur-in" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem", maxWidth: 1100,
            margin: "0 auto", padding: "0 1.5rem", transitionDelay: "160ms",
          }}>
            {informePages.map((p, i) => (
              <div key={i} className="informe-card">
                <div style={{
                  background: "#fff", borderRadius: 14, overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  aspectRatio: "210/297", position: "relative",
                }}>
                  <Image
                    src={p.src} alt={p.alt} fill
                    style={{ objectFit: "cover", objectPosition: "top", filter: "grayscale(100%) contrast(1.08) brightness(1.03)" }}
                    sizes="280px"
                  />
                  <div style={{
                    position: "absolute", top: 10, right: 10,
                    background: "rgba(0,0,0,0.55)", color: "#fff",
                    fontSize: "0.58rem", fontWeight: 800,
                    padding: "3px 9px", borderRadius: 99,
                    backdropFilter: "blur(4px)", letterSpacing: "0.06em",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div style={{ padding: "0.85rem 0.25rem 0" }}>
                  <p style={{ fontWeight: 700, fontSize: "0.82rem", color: "var(--text)", marginBottom: "0.25rem" }}>{p.label}</p>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stat strip */}
          <div className="blur-in" style={{
            display: "flex", justifyContent: "center", gap: "3rem",
            margin: "3.5rem auto 0", padding: "2.5rem 1.5rem 0",
            borderTop: "1px solid var(--border)", maxWidth: 900,
            flexWrap: "wrap", transitionDelay: "240ms",
          }}>
            {[
              { val: "30 seg", label: "por foto en campo" },
              { val: "IA",     label: "triple validación automática" },
              { val: "< 48 hs", label: "del campo al reporte final" },
            ].map(({ val, label }) => (
              <div key={val} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "var(--font-heading)", fontWeight: 800,
                  fontSize: "1.7rem", color: "var(--g-700)",
                  lineHeight: 1, letterSpacing: "-0.02em",
                }}>{val}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FRONT bubbles (z=10) ── */}
        {frontIdxs.map(renderBubble)}

        <style>{`
          .bubble-inner:hover {
            box-shadow: 0 16px 52px rgba(0,0,0,0.45), 0 0 0 3px rgba(34,197,94,0.5) !important;
          }
          .bubble-hint {
            position: absolute; inset: 0; border-radius: 50%;
            border: 2px solid rgba(255,255,255,0.0);
            transition: border-color 0.3s ease;
            pointer-events: none;
          }
          .bubble-inner:hover .bubble-hint {
            border-color: rgba(255,255,255,0.25);
          }
          .informe-card > div:first-child {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .informe-card:hover > div:first-child {
            transform: translateY(-8px);
            box-shadow: 0 24px 56px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08) !important;
          }
          @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
          @keyframes scaleIn { from { transform: scale(0.88); opacity: 0 } to { transform: scale(1); opacity: 1 } }
          @media (max-width: 860px) {
            #informe [style*="repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
          }
          @media (max-width: 500px) {
            #informe [style*="repeat(4"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
