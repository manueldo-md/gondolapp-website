const cards = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Las distribuidoras no ven",
    text: "No pueden costear repositores fulltime en el interior. Las fotos de góndola se mandan por WhatsApp y la info muere en el chat del gerente.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Las marcas gastan sin saber",
    text: "Invierten millones en trade marketing sin saber si sus productos están bien exhibidos a 200 km de Buenos Aires. Sin datos, sin leverage.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
    title: "Un mercado sin medir",
    text: "El canal tradicional mueve el 40% del consumo masivo argentino. Nielsen lleva décadas intentando medirlo. Nadie lo logró desde el campo.",
  },
];

export default function Problema() {
  return (
    <section id="problema" style={{ padding: "5rem 1.5rem 4rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Top: Big stat + two side cards ── */}
        <div className="prob-hero blur-in" style={{ marginBottom: "2.5rem" }}>

          {/* LEFT: Giant 200K+ */}
          <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "2rem 0",
          }}>
            <div style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(5rem, 13vw, 10.5rem)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              background: "linear-gradient(135deg, var(--g-600) 0%, var(--t-400) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "1rem",
            }}>
              200K+
            </div>
            <p style={{
              fontSize: "clamp(0.78rem, 1.5vw, 0.92rem)",
              color: "var(--slate-500)",
              fontWeight: 600,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              lineHeight: 1.5,
              maxWidth: 260,
            }}>
              Puntos de venta<br />sin datos en Argentina
            </p>
          </div>

          {/* RIGHT: Two stacked stat cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            {/* Card 1 — $40 */}
            <div style={{
              background: "var(--g-50)",
              border: "1px solid rgba(22,163,74,0.22)",
              borderRadius: 18,
              padding: "1.5rem 1.75rem",
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Decorative bg circle */}
              <div style={{
                position: "absolute", right: -24, top: -24,
                width: 120, height: 120, borderRadius: "50%",
                background: "rgba(22,163,74,0.08)",
                pointerEvents: "none",
              }} />
              {/* Big $40 */}
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.8rem, 5vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, var(--g-700), var(--g-500))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                flexShrink: 0,
              }}>
                $40
              </div>
              {/* Divider */}
              <div style={{ width: 1, alignSelf: "stretch", background: "rgba(22,163,74,0.2)", flexShrink: 0 }} />
              {/* Text */}
              <div>
                <p style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
                  fontWeight: 700,
                  color: "var(--g-900)",
                  lineHeight: 1.4,
                  margin: 0,
                }}>
                  de cada $100 del consumo masivo se venden en un mercado que nadie mide
                </p>
              </div>
            </div>

            {/* Card 2 — 0 plataformas */}
            <div style={{
              background: "linear-gradient(135deg, var(--g-900) 0%, #0a3d20 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 18,
              padding: "1.5rem 1.75rem",
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Glow */}
              <div style={{
                position: "absolute", right: -20, bottom: -20,
                width: 100, height: 100, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              {/* Big 0 */}
              <div style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.8rem, 5vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "var(--g-400)",
                flexShrink: 0,
                textShadow: "0 0 32px rgba(34,197,94,0.4)",
              }}>
                0
              </div>
              {/* Divider */}
              <div style={{ width: 1, alignSelf: "stretch", background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />
              {/* Text */}
              <div>
                <p style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.4,
                  margin: 0,
                }}>
                  plataformas que mapean hoy el canal tradicional desde el campo
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom: 3 problem cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {cards.map((c, i) => (
            <div key={i} className="card blur-in" style={{ padding: "1.75rem", transitionDelay: `${i * 120}ms` }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "var(--g-50)",
                border: "1px solid rgba(22,163,74,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--g-700)",
                marginBottom: "1rem",
              }}>
                {c.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700, fontSize: "1rem",
                color: "var(--text)", marginBottom: "0.5rem",
              }}>
                {c.title}
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.9rem" }}>
                {c.text}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .prob-hero {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 760px) {
          .prob-hero {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
