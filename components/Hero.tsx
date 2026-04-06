import CycleText from "./CycleText";

const stats = [
  { num: "200K+", label: "Puntos de venta sin datos" },
  { num: "40%", label: "Del consumo masivo en canal tradicional" },
  { num: "0", label: "Plataformas que lo mapean hoy" },
];

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section id="inicio" style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: 120,
        paddingBottom: "6rem",
        textAlign: "center",
        background: "var(--bg)",
      }}>
        {/* Radial gradient orb */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "var(--grad-hero)",
        }} />
        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4,
          backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }} />

        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
          {/* Badge */}
          <div className="blur-in" style={{ marginBottom: "1.5rem" }}>
            <span className="badge">
              <span className="glow-dot" />
              Pre-lanzamiento · Argentina 2026
            </span>
          </div>

          {/* Headline */}
          <h1
            className="blur-in"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "var(--slate-900)",
              marginBottom: "1.25rem",
              transitionDelay: "80ms",
            }}
          >
            Inteligencia de mercado
            <br />
            para <CycleText />
          </h1>

          <p
            className="blur-in"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 580,
              margin: "0 auto 2.5rem",
              transitionDelay: "160ms",
            }}
          >
            El primer sistema que mapea en tiempo real el canal tradicional argentino.
            Fotos verificadas, datos reales, decisiones concretas.
          </p>

          {/* CTAs */}
          <div className="blur-in" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", transitionDelay: "240ms" }}>
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

          {/* Social proof */}
          <p className="blur-in" style={{ marginTop: "2rem", fontSize: "0.8rem", color: "var(--slate-400)", transitionDelay: "320ms" }}>
            Ya operando en 16 ciudades de Entre Ríos · 133 puntos de venta relevados
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-subtle)", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i} className="blur-in" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="shimmer" style={{ borderRadius: 8, padding: "0.25rem 0" }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "var(--g-700)",
                  lineHeight: 1,
                }}>
                  {s.num}
                </div>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: 8, lineHeight: 1.4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
