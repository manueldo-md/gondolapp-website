const steps = [
  { num: "1", title: "Te registrás", sub: "15 minutos" },
  { num: "2", title: "Conectás tu equipo", sub: "1 día" },
  { num: "3", title: "Primera campaña activa", sub: "24hs" },
  { num: "4", title: "Primeros datos reales", sub: "Esa semana" },
];

export default function ComoArranca() {
  return (
    <section id="como-arranca" style={{ padding: "6rem 1.5rem", background: "var(--bg-section)" }}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="fade-up" style={{ marginBottom: "3rem" }}>
          <div className="pill" style={{ marginBottom: "1rem" }}>Onboarding</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "var(--green-dark)",
              lineHeight: 1.15,
              fontFamily: "var(--font-syne)",
            }}
          >
            En 48hs podés estar operando
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="card-hover fade-up"
              style={{ textAlign: "center", transitionDelay: `${i * 150}ms` }}
            >
              <div
                className="step-num"
                style={{ margin: "0 auto 1rem", width: 52, height: 52, fontSize: "1.3rem", borderRadius: 14 }}
              >
                {s.num}
              </div>
              <p style={{ fontWeight: 700, color: "var(--green-dark)", marginBottom: 4, fontFamily: "var(--font-syne)" }}>{s.title}</p>
              <p style={{ color: "#9ca3af", fontSize: "0.85rem" }}>{s.sub}</p>
            </div>
          ))}
        </div>

        <p className="fade-up" style={{ marginTop: "2.5rem", color: "#6b7280", fontStyle: "italic", fontSize: "1rem" }}>
          Sin implementación. Sin IT. Sin excusas.
        </p>
      </div>
    </section>
  );
}
