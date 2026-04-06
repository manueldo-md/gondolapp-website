import Image from "next/image";
import CycleText from "./CycleText";

const stats = [
  { num: "200K+", label: "Puntos de venta sin datos" },
  { num: "40%",   label: "Del consumo masivo en canal tradicional" },
  { num: "0",     label: "Plataformas que lo mapean hoy" },
];

// Phone-style item
type ShotItem =
  | { type: "phone";   src: string; alt: string }
  | { type: "monitor"; src: string; alt: string; url: string };

// LEFT column — phone screenshots
const col1: ShotItem[] = [
  { type: "phone",   src: "/screenshots/app-campanas.jpg",  alt: "Campañas"  },
  { type: "phone",   src: "/screenshots/app-logros.jpg",    alt: "Logros"    },
  { type: "phone",   src: "/screenshots/app-actividad.jpg", alt: "Actividad" },
  { type: "phone",   src: "/screenshots/app-canjes.jpg",    alt: "Canjes"    },
  { type: "phone",   src: "/screenshots/app-detalle.jpg",   alt: "Detalle"   },
];

// RIGHT column — mix of app + dashboard screenshots
const col2: ShotItem[] = [
  { type: "monitor", src: "/screenshots/dashboard-marca.jpg", alt: "Panel marcas",       url: "app.gondolapp.com/marca" },
  { type: "phone",   src: "/screenshots/app-canjes.jpg",      alt: "Canjes"                                             },
  { type: "monitor", src: "/screenshots/dashboard-dist.jpg",  alt: "Panel distribuidora", url: "app.gondolapp.com/dist"  },
  { type: "phone",   src: "/screenshots/app-campanas.jpg",    alt: "Campañas"                                           },
  { type: "phone",   src: "/screenshots/app-logros.jpg",      alt: "Logros"                                             },
];

// ─── Card renderers ────────────────────────────────────────────────────────

function PhoneCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      position: "relative",
      borderRadius: 20,
      overflow: "hidden",
      aspectRatio: "9/19.5",
      flexShrink: 0,
      boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      border: "1px solid rgba(255,255,255,0.06)",
    }}>
      <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="170px" />
    </div>
  );
}

function MonitorCard({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div style={{
      flexShrink: 0,
      background: "#18181b",
      borderRadius: 12,
      padding: "7px 7px 6px",
      border: "1.5px solid #27272a",
      boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
    }}>
      {/* Camera dot */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 5 }}>
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#3f3f46" }} />
      </div>
      {/* Browser chrome */}
      <div style={{
        background: "#f1f5f9",
        padding: "4px 8px",
        display: "flex", alignItems: "center", gap: 5,
        borderRadius: "5px 5px 0 0",
        borderBottom: "1px solid #e2e8f0",
      }}>
        <div style={{ display: "flex", gap: 3, flexShrink: 0 }}>
          {["#ef4444", "#f59e0b", "#22c55e"].map((c, i) => (
            <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: "#fff", borderRadius: 3,
          padding: "2px 6px", fontSize: "0.42rem", color: "#94a3b8",
          textAlign: "center", border: "1px solid #e2e8f0",
          overflow: "hidden", whiteSpace: "nowrap",
        }}>
          {url}
        </div>
      </div>
      {/* Screenshot */}
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden", borderRadius: "0 0 5px 5px" }}>
        <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "top left" }} sizes="170px" />
      </div>
    </div>
  );
}

function ShotCol({ shots, dir }: { shots: ShotItem[]; dir: "up" | "down" }) {
  const items = [...shots, ...shots]; // duplicate for seamless loop
  return (
    <div className={dir === "up" ? "hero-col-up" : "hero-col-down"} style={{ gap: 12 }}>
      {items.map((s, i) =>
        s.type === "phone"
          ? <PhoneCard key={i} src={s.src} alt={s.alt} />
          : <MonitorCard key={i} src={s.src} alt={s.alt} url={s.url} />
      )}
    </div>
  );
}

// ─── Hero section ──────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <>
      <section id="inicio" style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: 108,
        paddingBottom: "5rem",
        background: "var(--bg)",
      }}>
        {/* Radial gradient bg */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "var(--grad-hero)" }} />
        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.35,
          backgroundImage: "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 70% at 30% 0%, black 30%, transparent 100%)",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "3.5rem", alignItems: "center" }}>

            {/* ── LEFT: Text ── */}
            <div>
              <div className="blur-in" style={{ marginBottom: "1.5rem" }}>
                <span className="badge">
                  <span className="glow-dot" />
                  Pre-lanzamiento · Argentina 2026
                </span>
              </div>

              <h1 className="blur-in" style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                color: "var(--slate-900)",
                marginBottom: "1.25rem",
                transitionDelay: "80ms",
              }}>
                Inteligencia de mercado<br />para <CycleText />
              </h1>

              <p className="blur-in" style={{
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                maxWidth: 500,
                marginBottom: "2.5rem",
                transitionDelay: "160ms",
              }}>
                El primer sistema que mapea en tiempo real el canal tradicional argentino.
                Fotos verificadas, datos reales, decisiones concretas.
              </p>

              <div className="blur-in" style={{ display: "flex", gap: 12, flexWrap: "wrap", transitionDelay: "240ms" }}>
                <a href="#contacto" className="btn btn-primary" style={{ fontSize: "1rem", padding: "13px 28px" }}>
                  Quiero acceso anticipado
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#solucion" className="btn btn-secondary" style={{ fontSize: "1rem", padding: "13px 28px" }}>
                  Ver cómo funciona
                </a>
              </div>

              <p className="blur-in" style={{ marginTop: "1.75rem", fontSize: "0.8rem", color: "var(--slate-400)", transitionDelay: "320ms" }}>
                Ya operando en 16 ciudades de Entre Ríos · 133 puntos de venta relevados
              </p>
            </div>

            {/* ── RIGHT: Floating screenshot columns ── */}
            <div className="blur-in hero-shots-mask" style={{
              height: 580,
              display: "flex",
              gap: 12,
              transitionDelay: "200ms",
            }}>
              <div style={{ flex: 1, position: "relative" }}>
                <ShotCol shots={col1} dir="up" />
              </div>
              <div style={{ flex: 1, position: "relative" }}>
                <ShotCol shots={col2} dir="down" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-subtle)",
        padding: "2.5rem 1.5rem",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem", textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i} className="blur-in" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="shimmer" style={{ borderRadius: 8, padding: "0.25rem 0" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--g-700)", lineHeight: 1 }}>
                  {s.num}
                </div>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: 8, lineHeight: 1.4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          #inicio > div > div > div:last-child { display: none !important; }
          #inicio > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
