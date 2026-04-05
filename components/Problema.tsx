const cards = [
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Las distribuidoras no ven",
    text: "No pueden costear repositores fulltime en cada ciudad del interior. Las fotos de góndolas se mandan por WhatsApp y la info muere en el chat del gerente.",
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Las marcas gastan fortunas",
    text: "Las multinacionales invierten millones intentando medir un canal fragmentado y opaco. Ni las marcas, ni las consultoras saben qué pasa en esas góndolas.",
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    title: "Los comercios pierden",
    text: "Góndolas desordenadas, quiebres de stock invisibles, y reposición que depende de la buena voluntad. El comercio de barrio queda abandonado.",
  },
];

export default function Problema() {
  return (
    <section id="problema" style={{ padding: "6rem 1.5rem" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center fade-up" style={{ marginBottom: "3.5rem" }}>
          <div className="pill" style={{ marginBottom: "1rem" }}>El problema</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "var(--green-dark)",
              lineHeight: 1.15,
              fontFamily: "var(--font-syne)",
            }}
          >
            Un mercado enorme, completamente ciego
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="card-hover fade-up"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className="icon-circle"
                style={{
                  background: "rgba(26,92,46,0.07)",
                  color: "var(--green-dark)",
                  marginBottom: "1rem",
                }}
              >
                {card.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem", color: "var(--green-dark)" }}>
                {card.title}
              </h3>
              <p style={{ color: "#5a6672", lineHeight: 1.7, fontSize: "0.93rem" }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
