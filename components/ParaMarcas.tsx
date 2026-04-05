const preguntas = [
  "¿Sabés con quién competís en cada punto de venta?",
  "¿Cómo ocupan la góndola tus productos y cómo la comparten?",
  "¿Cuántos frentes tenés y qué porcentaje del lineal?",
  "¿Cómo evaluás precios reales en góndola vs precio sugerido?",
  "¿Estás perdiendo share of shelf sin saberlo?",
];

const bullets = [
  "Fotos verificadas de tus góndolas en el interior",
  "Share of shelf vs competencia en tiempo real",
  "Precio real en góndola verificado por campo",
  "Auditoría de materiales POP",
  "Campañas de relevamiento activadas en 24hs",
];

export default function ParaMarcas() {
  return (
    <section id="marcas" style={{ padding: "6rem 1.5rem" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="pill fade-up" style={{ marginBottom: "1rem" }}>Para marcas</div>
            <h2
              className="fade-up"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.3rem)",
                fontWeight: 800,
                color: "var(--green-dark)",
                lineHeight: 1.2,
                fontFamily: "var(--font-syne)",
                transitionDelay: "100ms",
              }}
            >
              ¿Sabés lo que pasa con tus productos en la góndola?
            </h2>

            <div className="fade-up" style={{ marginTop: "1.5rem", marginBottom: "1.5rem", transitionDelay: "200ms" }}>
              {preguntas.map((p, i) => (
                <p key={i} style={{ color: "#5a6672", fontStyle: "italic", marginBottom: "0.5rem", lineHeight: 1.6, fontSize: "0.93rem" }}>
                  <span style={{ color: "var(--teal)", marginRight: 8 }}>•</span>{p}
                </p>
              ))}
            </div>

            <p className="fade-up" style={{ color: "#5a6672", lineHeight: 1.7, marginBottom: "1.5rem", transitionDelay: "300ms" }}>
              Si alguna de estas no tiene respuesta, el canal tradicional te está costando plata sin que lo sepas.
            </p>

            <div className="fade-up" style={{ transitionDelay: "400ms" }}>
              {bullets.map((b, i) => (
                <p key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: "0.5rem", color: "#374151" }}>
                  <span style={{ color: "var(--teal)", fontWeight: 700, marginTop: 2 }}>✓</span>
                  {b}
                </p>
              ))}
            </div>
          </div>

          <div className="fade-up" style={{ transitionDelay: "200ms" }}>
            <div style={{ background: "linear-gradient(135deg, #f0faf5, #e6f7f0)", borderRadius: 20, padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 360 }}>
              {/* Mini dashboard mockup */}
              <div style={{ background: "#fff", borderRadius: 14, padding: "1.25rem", width: "100%", boxShadow: "0 4px 20px rgba(26,92,46,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: "1rem" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444" }} />
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b" }} />
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                  <span style={{ color: "#bbb", fontSize: "0.6rem", marginLeft: 4 }}>Dashboard de marca</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                  {[["89%","Presencia"],["58%","Share of shelf"],["$2.840","Precio góndola"],["6","Quiebres"]].map(([v,l],i) => (
                    <div key={i} style={{ background: "#f8fcfa", borderRadius: 10, padding: "0.6rem", textAlign: "center", border: "1px solid #d0e4d8" }}>
                      <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "var(--green-dark)", fontFamily: "var(--font-syne)" }}>{v}</div>
                      <div style={{ fontSize: "0.6rem", color: "#5a6672" }}>{l}</div>
                    </div>
                  ))}
                </div>
                {[["Girasol 1.5L","72%"],["Oliva 500ml","55%"],["Mezcla 900ml","41%"]].map(([name,w],i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: "0.65rem", color: "#5a6672", width: 80, flexShrink: 0 }}>{name}</span>
                    <div style={{ flex: 1, background: "#e8f5f0", borderRadius: 4, height: 12 }}>
                      <div style={{ width: w, height: "100%", background: "linear-gradient(90deg,var(--green-dark),var(--teal))", borderRadius: 4 }} />
                    </div>
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--green-dark)", width: 28 }}>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
