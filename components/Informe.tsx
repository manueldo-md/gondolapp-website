"use client";
import Image from "next/image";

// ─── Gondola photos ───────────────────────────────────────────────────────
const gondolaPhotos = ["001","002","003","004","005","006","007","008","009","010"]
  .map(n => `/screenshots-reales/${n}.jpg`);

// ─── Shared page primitives ───────────────────────────────────────────────
const P_BG   = "#f8faf9";
const G_DARK = "#0a3d20";
const G_MID  = "#16a34a";
const G_LITE = "#86efac";
const MUTED  = "#64748b";

function PageHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ background: G_DARK, padding: "12px 14px", borderRadius: "8px 8px 0 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: sub ? 4 : 0 }}>
        <svg width="12" height="12" fill="none" stroke={G_LITE} strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
        <span style={{ fontSize: "0.5rem", fontWeight: 800, color: G_LITE, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          GondolApp
        </span>
      </div>
      <p style={{ fontSize: "0.58rem", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.3 }}>{title}</p>
      {sub && <p style={{ fontSize: "0.48rem", color: "rgba(255,255,255,0.5)", margin: "2px 0 0" }}>{sub}</p>}
    </div>
  );
}

function MiniBar({ pct, color = G_MID, height = 6 }: { pct: number; color?: string; height?: number }) {
  return (
    <div style={{ background: "#e2e8f0", borderRadius: 99, height, overflow: "hidden", flex: 1 }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99, transition: "width 0.4s" }} />
    </div>
  );
}

// ─── Page 1: Portada ─────────────────────────────────────────────────────
function PagePortada() {
  const s = [
    { v: "+500", l: "Fotos" }, { v: "133",  l: "PDV"   },
    { v: "16",   l: "Ciudades" }, { v: "99,5%", l: "IA ok" },
  ];
  return (
    <div style={{ background: P_BG, height: "100%", display: "flex", flexDirection: "column", borderRadius: 8, overflow: "hidden" }}>
      <PageHeader title="Informe de Relevamiento" sub="Canal Tradicional · Entre Ríos 2025" />
      <div style={{ flex: 1, padding: "14px 14px 10px", display: "flex", flexDirection: "column" }}>
        {/* Big title */}
        <div style={{ marginBottom: 12 }}>
          <p style={{ fontSize: "0.78rem", fontWeight: 900, color: G_DARK, lineHeight: 1.2, margin: "0 0 4px" }}>
            Inteligencia<br />de Góndola
          </p>
          <div style={{ width: 28, height: 2.5, background: G_MID, borderRadius: 99 }} />
        </div>
        {/* 4-stat grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
          {s.map((item, i) => (
            <div key={i} style={{
              background: "#fff", border: "1px solid #e2e8f0", borderRadius: 7,
              padding: "7px 8px", textAlign: "center",
              borderTop: `2px solid ${G_MID}`,
            }}>
              <p style={{ fontWeight: 900, fontSize: "1rem", color: G_DARK, margin: 0, lineHeight: 1 }}>{item.v}</p>
              <p style={{ fontSize: "0.44rem", color: MUTED, margin: "2px 0 0", fontWeight: 600 }}>{item.l}</p>
            </div>
          ))}
        </div>
        {/* Timeline strip */}
        <div style={{ marginTop: "auto" }}>
          <p style={{ fontSize: "0.44rem", color: MUTED, marginBottom: 5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Flujo de datos</p>
          <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
            {["Foto 📸", "IA ⚡", "Validar ✓", "Reporte 📊"].map((t, i) => (
              <>
                <div key={i} style={{ background: i === 0 ? G_DARK : i === 3 ? G_MID : "#e2e8f0", borderRadius: 4, padding: "3px 5px", fontSize: "0.4rem", fontWeight: 700, color: i < 1 || i === 3 ? "#fff" : G_DARK, whiteSpace: "nowrap" }}>{t}</div>
                {i < 3 && <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />}
              </>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div style={{ borderTop: "1px solid #e2e8f0", marginTop: 8, paddingTop: 6, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.4rem", color: "#94a3b8" }}>gondolapp.com</span>
          <span style={{ fontSize: "0.4rem", color: "#94a3b8" }}>2025 · Confidencial</span>
        </div>
      </div>
    </div>
  );
}

// ─── Page 2: Share de góndola ────────────────────────────────────────────
function PageShare() {
  const brands = [
    { name: "ACME",       pct: 62, color: G_MID },
    { name: "Georgalos",  pct: 48, color: "#2dd4bf" },
    { name: "Biomega",    pct: 34, color: "#6ee7b7" },
    { name: "Otros",      pct: 28, color: "#d1fae5" },
  ];
  return (
    <div style={{ background: P_BG, height: "100%", display: "flex", flexDirection: "column", borderRadius: 8, overflow: "hidden" }}>
      <PageHeader title="Share of Shelf" sub="Por marca · Promedio 133 PDV" />
      <div style={{ flex: 1, padding: "12px 14px 10px", display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Bar chart */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {brands.map((b, i) => (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <span style={{ fontSize: "0.5rem", fontWeight: 700, color: G_DARK }}>{b.name}</span>
                <span style={{ fontSize: "0.5rem", fontWeight: 800, color: b.color === G_MID ? G_MID : G_DARK }}>{b.pct}%</span>
              </div>
              <MiniBar pct={b.pct} color={b.color} height={7} />
            </div>
          ))}
        </div>
        {/* Divider */}
        <div style={{ border: "none", borderTop: "1px dashed #e2e8f0", margin: "2px 0" }} />
        {/* Presencia */}
        <div>
          <p style={{ fontSize: "0.48rem", fontWeight: 700, color: MUTED, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Presencia promedio</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: "1.1rem", fontWeight: 900, color: G_DARK, lineHeight: 1 }}>89%</span>
            <div style={{ flex: 1 }}><MiniBar pct={89} color={G_MID} height={8} /></div>
          </div>
        </div>
        {/* Mini donut (CSS) */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "auto" }}>
          <div style={{
            width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
            background: `conic-gradient(${G_MID} 0% 62%, #2dd4bf 62% 86%, #6ee7b7 86% 96%, #d1fae5 96% 100%)`,
            boxShadow: "inset 0 0 0 14px #f8faf9",
          }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {brands.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: 2, background: b.color, flexShrink: 0 }} />
                <span style={{ fontSize: "0.42rem", color: MUTED }}>{b.name} {b.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page 3: Cobertura geográfica ────────────────────────────────────────
function PageCobertura() {
  const cities = [
    { name: "Paraná",         pdv: 48, fotos: 240 },
    { name: "Concordia",      pdv: 31, fotos: 155 },
    { name: "Colón",          pdv: 22, fotos: 110 },
    { name: "Gualeguaychú",   pdv: 20, fotos: 100 },
    { name: "Diamante",       pdv: 12, fotos:  58 },
  ];
  return (
    <div style={{ background: P_BG, height: "100%", display: "flex", flexDirection: "column", borderRadius: 8, overflow: "hidden" }}>
      <PageHeader title="Cobertura Geográfica" sub="16 ciudades · Entre Ríos" />
      <div style={{ flex: 1, padding: "12px 14px 10px", display: "flex", flexDirection: "column" }}>
        {/* Table */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 7, overflow: "hidden", marginBottom: 8 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 36px 46px", background: G_DARK, padding: "5px 8px" }}>
            {["Ciudad", "PDV", "Fotos"].map(h => (
              <span key={h} style={{ fontSize: "0.42rem", fontWeight: 700, color: G_LITE, letterSpacing: "0.06em" }}>{h}</span>
            ))}
          </div>
          {cities.map((c, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr 36px 46px",
              padding: "5px 8px", alignItems: "center",
              background: i % 2 === 0 ? "#fff" : "#f8faf9",
              borderTop: "1px solid #f1f5f9",
            }}>
              <span style={{ fontSize: "0.48rem", fontWeight: 600, color: G_DARK }}>{c.name}</span>
              <span style={{ fontSize: "0.48rem", color: G_MID, fontWeight: 700 }}>{c.pdv}</span>
              <span style={{ fontSize: "0.48rem", color: MUTED }}>{c.fotos}</span>
            </div>
          ))}
        </div>
        {/* Coverage total bar */}
        <div style={{ marginTop: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <span style={{ fontSize: "0.44rem", color: MUTED, fontWeight: 600 }}>Cobertura total</span>
            <span style={{ fontSize: "0.44rem", fontWeight: 800, color: G_MID }}>133 PDV · 16 ciudades</span>
          </div>
          <div style={{ display: "flex", gap: 2 }}>
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} style={{ flex: 1, height: 10, background: G_MID, borderRadius: 2, opacity: 0.55 + (i / 16) * 0.45 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page 4: Alertas y conclusiones ──────────────────────────────────────
function PageAlertas() {
  const steps = [
    { label: "Ampliar cobertura norte ER", done: false },
    { label: "Foco en autoservicios <500m²", done: false },
    { label: "Campaña activa ACME aceites", done: true },
  ];
  return (
    <div style={{ background: P_BG, height: "100%", display: "flex", flexDirection: "column", borderRadius: 8, overflow: "hidden" }}>
      <PageHeader title="Alertas y Conclusiones" sub="Campaña Q1 2025" />
      <div style={{ flex: 1, padding: "12px 14px 10px", display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Quiebres */}
        <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 7, padding: "8px 10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
            <span style={{ fontSize: "0.5rem", fontWeight: 700, color: "#c2410c" }}>⚠️ Quiebres detectados</span>
            <span style={{ fontWeight: 900, fontSize: "1rem", color: "#c2410c", lineHeight: 1 }}>47</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <div style={{ flex: 1, background: "#fff", border: "1px solid #fde68a", borderRadius: 5, padding: "4px 6px", textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "0.72rem", fontWeight: 900, color: G_MID }}>38</p>
              <p style={{ margin: 0, fontSize: "0.4rem", color: MUTED }}>Resueltos</p>
            </div>
            <div style={{ flex: 1, background: "#fff", border: "1px solid #fecaca", borderRadius: 5, padding: "4px 6px", textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "0.72rem", fontWeight: 900, color: "#ef4444" }}>9</p>
              <p style={{ margin: 0, fontSize: "0.4rem", color: MUTED }}>Pendientes</p>
            </div>
            <div style={{ flex: 1, background: "#fff", border: `1px solid ${G_LITE}`, borderRadius: 5, padding: "4px 6px", textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "0.72rem", fontWeight: 900, color: G_MID }}>81%</p>
              <p style={{ margin: 0, fontSize: "0.4rem", color: MUTED }}>Resolución</p>
            </div>
          </div>
        </div>
        {/* Next steps */}
        <div>
          <p style={{ fontSize: "0.44rem", fontWeight: 700, color: MUTED, marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.06em" }}>Próximas acciones</p>
          {steps.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 5, alignItems: "center", marginBottom: 4 }}>
              <div style={{
                width: 12, height: 12, borderRadius: "50%", flexShrink: 0,
                background: s.done ? G_MID : "#e2e8f0",
                border: `1.5px solid ${s.done ? G_MID : "#cbd5e1"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {s.done && <svg width="6" height="6" viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>}
              </div>
              <span style={{ fontSize: "0.46rem", color: s.done ? MUTED : G_DARK, fontWeight: s.done ? 400 : 600, textDecoration: s.done ? "line-through" : "none" }}>{s.label}</span>
            </div>
          ))}
        </div>
        {/* Efficiency bar */}
        <div style={{ marginTop: "auto", background: G_DARK, borderRadius: 7, padding: "8px 10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <span style={{ fontSize: "0.44rem", color: G_LITE, fontWeight: 700 }}>Tasa de aprobación IA</span>
            <span style={{ fontSize: "0.72rem", fontWeight: 900, color: "#fff" }}>99,5%</span>
          </div>
          <MiniBar pct={99.5} color={G_MID} height={5} />
        </div>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────
export default function Informe() {
  const pages = [
    { comp: <PagePortada />,   rot: -5,  tx: -8,   dur: 5.8, delay: 0    },
    { comp: <PageShare />,     rot: -1.5, tx: -2,  dur: 6.4, delay: 1400 },
    { comp: <PageCobertura />, rot:  2,  tx:  4,   dur: 5.2, delay: 700  },
    { comp: <PageAlertas />,   rot:  5,  tx:  10,  dur: 6.9, delay: 2100 },
  ];

  return (
    <section id="informe" style={{
      background: "linear-gradient(170deg, var(--g-900) 0%, #030f07 100%)",
      overflow: "hidden",
      padding: "7rem 0 0",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ── Header ── */}
        <div className="blur-in" style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="badge" style={{
            marginBottom: "1.25rem", display: "inline-flex",
            background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "var(--g-400)",
          }}>Reporte procesado</span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 800, letterSpacing: "-0.03em",
            color: "#fff", lineHeight: 1.08, marginBottom: "1.25rem",
          }}>
            El primer reporte del canal<br />tradicional con datos reales
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
            Fotos verificadas en campo, procesadas por IA y convertidas en inteligencia de mercado accionable.
          </p>
        </div>

        {/* ── Main: floating pages + stats ── */}
        <div className="informe-main blur-in" style={{ transitionDelay: "80ms" }}>

          {/* LEFT: 4 floating pages stacked */}
          <div style={{ position: "relative", height: 440 }}>
            {pages.map((p, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `rotate(${p.rot}deg) translateX(${p.tx}px)`,
                  zIndex: 4 - i,
                  animation: `page-float-${i} ${p.dur}s ${p.delay}ms ease-in-out infinite`,
                  boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)",
                  borderRadius: 10,
                  transition: "transform 0.5s cubic-bezier(0.34,1.2,0.64,1), box-shadow 0.4s ease",
                  cursor: "default",
                }}
                className={`report-page-${i}`}
              >
                {p.comp}
              </div>
            ))}
          </div>

          {/* RIGHT: Stats + insights */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}>
            {[
              { val: "+500", label: "Fotos verificadas en campo" },
              { val: "133",  label: "Puntos de venta relevados" },
              { val: "< 48 hs", label: "Del campo al reporte final" },
            ].map((s, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "1.25rem",
                padding: "1.25rem 1.5rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14, backdropFilter: "blur(8px)",
              }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 900, letterSpacing: "-0.03em",
                  color: "var(--g-400)", lineHeight: 1, flexShrink: 0, minWidth: 90,
                }}>{s.val}</div>
                <div style={{ width: 1, height: 36, background: "rgba(34,197,94,0.25)", flexShrink: 0 }} />
                <div style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", fontWeight: 500, lineHeight: 1.4 }}>
                  {s.label}
                </div>
              </div>
            ))}

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--g-500)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Qué incluye el reporte
              </p>
              {[
                "Presencia real de cada SKU en góndola, no estimada",
                "Precios reales capturados in-situ en 16 ciudades",
                "Quiebres detectados y clasificados automáticamente por IA",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1,
                  }}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5l2 2 4-4" stroke="var(--g-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
              <a href="#contacto" className="btn btn-primary" style={{ marginTop: "1.25rem", display: "inline-flex" }}>
                Solicitar reporte completo
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Gondola bubbles strip ── */}
      <div style={{ marginTop: "6rem" }}>
        <p style={{
          textAlign: "center", fontSize: "0.7rem", fontWeight: 700,
          color: "rgba(255,255,255,0.2)", letterSpacing: "0.12em",
          textTransform: "uppercase", marginBottom: "2rem",
        }}>
          Fotos tomadas en campo · Entre Ríos 2025
        </p>

        <div className="marquee-wrap" style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}>
          <div className="marquee-track-left" style={{ gap: 20, alignItems: "center" }}>
            {[...gondolaPhotos, ...gondolaPhotos].map((src, i) => (
              <div key={i} style={{
                width: 150, height: 150,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 2px rgba(34,197,94,0.2)",
                animation: `bubble-sway ${4 + (i % 3)}s ${(i * 400) % 3000}ms ease-in-out infinite`,
              }}>
                <Image src={src} alt={`Góndola ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="150px" />
                {/* Gloss */}
                <div style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 28%, rgba(255,255,255,0.18) 0%, transparent 55%)",
                  pointerEvents: "none",
                }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: "4rem", background: "linear-gradient(to bottom, transparent, #030f07)" }} />
      </div>

      <style>{`
        /* ── Report page individual float animations (rot + float combined) ── */
        @keyframes page-float-0 {
          0%,100% { transform: rotate(-5deg)  translateX(-8px)  translateY(0px);  }
          50%      { transform: rotate(-5deg)  translateX(-8px)  translateY(-14px); }
        }
        @keyframes page-float-1 {
          0%,100% { transform: rotate(-1.5deg) translateX(-2px) translateY(0px);  }
          50%      { transform: rotate(-1.5deg) translateX(-2px) translateY(-10px); }
        }
        @keyframes page-float-2 {
          0%,100% { transform: rotate(2deg)   translateX(4px)  translateY(0px);  }
          50%      { transform: rotate(2deg)   translateX(4px)  translateY(-16px); }
        }
        @keyframes page-float-3 {
          0%,100% { transform: rotate(5deg)   translateX(10px) translateY(0px);  }
          50%      { transform: rotate(5deg)   translateX(10px) translateY(-12px); }
        }
        /* Fan-out on hover */
        .informe-main:hover .report-page-0 { animation: none !important; transform: rotate(-14deg) translate(-120px, 24px) !important; }
        .informe-main:hover .report-page-1 { animation: none !important; transform: rotate(-5deg)  translate(-40px,  -8px) !important; }
        .informe-main:hover .report-page-2 { animation: none !important; transform: rotate( 4deg)  translate( 40px,  -8px) !important; }
        .informe-main:hover .report-page-3 { animation: none !important; transform: rotate(13deg)  translate(120px,  24px) !important; }

        /* Bubble sway */
        @keyframes bubble-sway {
          0%,100% { transform: translateY(0px);   }
          50%      { transform: translateY(-12px); }
        }

        /* Layout */
        .informe-main {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 5rem;
          align-items: center;
          padding-bottom: 1rem;
        }
        @media (max-width: 900px) {
          .informe-main { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
