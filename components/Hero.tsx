const stats = [
  { num: "200K+", label: "Puntos de venta sin datos" },
  { num: "40%", label: "Del consumo masivo es canal tradicional" },
  { num: "0", label: "Plataformas que lo mapean hoy" },
];

export default function Hero() {
  return (
    <>
      {/* Dark hero */}
      <section
        id="inicio"
        style={{
          background: "linear-gradient(135deg, #0c1f14 0%, #143d24 40%, #1a5c2e 70%, #1d6b42 100%)",
          position: "relative",
          overflow: "hidden",
          paddingTop: 100,
          paddingBottom: "5rem",
        }}
      >
        {/* Grid pattern */}
        <div
          className="hero-grid"
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        />
        {/* Radial glow */}
        <div style={{
          position: "absolute", top: "-50%", right: "-20%",
          width: "80%", height: "200%",
          background: "radial-gradient(ellipse, rgba(78,205,196,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="max-w-6xl mx-auto px-6 relative" style={{ zIndex: 2 }}>
          <div style={{ maxWidth: 700 }}>
            <div className="pill pill-light fade-up" style={{ marginBottom: "1.5rem" }}>
              Pre-lanzamiento — Argentina 2026
            </div>
            <h1
              className="fade-up"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: 900,
                lineHeight: 1.08,
                marginBottom: "1.5rem",
                color: "#fff",
                fontFamily: "var(--font-syne)",
              }}
            >
              El mapa en tiempo real del{" "}
              <span className="gradient-text">
                consumo masivo argentino
              </span>
            </h1>
            <p
              className="fade-up"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.15rem",
                lineHeight: 1.7,
                maxWidth: 580,
                marginBottom: "2.5rem",
                transitionDelay: "150ms",
              }}
            >
              Nadie sabe qué se vende, a cuánto y dónde en los 200.000+ puntos de venta del canal tradicional. Nosotros sí vamos a saberlo.
            </p>
            <div className="fade-up flex flex-wrap gap-4" style={{ transitionDelay: "300ms" }}>
              <a href="#contacto" className="btn-primary pulse">
                Quiero acceso anticipado
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#solucion" className="btn-outline">
                Cómo funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="fade-up" style={{ transitionDelay: `${i * 150}ms` }}>
                <div
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                    fontWeight: 900,
                    color: "#111",
                    lineHeight: 1,
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  {s.num}
                </div>
                <p style={{ color: "#6b7280", fontSize: "0.95rem", marginTop: 6, fontWeight: 500 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
