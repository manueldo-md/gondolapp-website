const cards = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Las distribuidoras no ven",
    text: "No pueden costear repositores fulltime en cada ciudad del interior. Las fotos de góndola se mandan por WhatsApp y la info muere en el chat del gerente.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Las marcas gastan fortunas",
    text: "Invierten millones en trade marketing sin saber si sus productos están bien exhibidos a 200km de Buenos Aires. Sin datos, sin leverage.",
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
    <section id="problema" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="blur-in" style={{ marginBottom: "3rem", textAlign: "center" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>El problema</span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800,
            color: "var(--text)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}>
            $40 de cada $100 se venden en un mercado que nadie ve
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 540, margin: "0.75rem auto 0" }}>
            El canal tradicional mueve el 40% del consumo masivo argentino. Distribuidoras y marcas operan con datos de hace semanas, cuando los tienen.
          </p>
        </div>

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
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: "0.5rem" }}>
                {c.title}
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.9rem" }}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
