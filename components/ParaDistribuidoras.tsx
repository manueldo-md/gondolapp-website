const preguntas = [
  "¿Cómo relevás productos para mostrarle datos reales a tus marcas?",
  "¿Cómo evaluás los materiales POP en cada punto de venta?",
  "¿Cómo medís precios en góndola sin mandar a alguien a recorrer?",
  "¿Sabés qué oportunidades de exhibición estás perdiendo hoy?",
  "¿Podés mostrarle a una marca nueva por qué conviene trabajar con vos?",
];

const bullets = [
  "Panel de control de tus vendedores en tiempo real",
  "Alertas automáticas de quiebre de stock",
  "Relevamiento profesional para presentar a tus marcas",
  "Tus gondoleros ganan puntos — vos ganás datos",
  "El argumento que te faltaba para captar nuevas marcas",
];

export default function ParaDistribuidoras() {
  return (
    <section id="distribuidoras" style={{ padding: "6rem 1.5rem", background: "var(--bg-section)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Visual izquierda */}
          <div className="fade-up order-2 md:order-1">
            <div style={{ background: "linear-gradient(135deg, #e0f2eb, #d1fae5)", borderRadius: 20, padding: "2.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 360 }}>
              <div style={{ background: "#fff", borderRadius: 14, padding: "1.25rem", width: "100%", boxShadow: "0 4px 20px rgba(26,92,46,0.1)" }}>
                <div style={{ fontWeight: 700, fontSize: "0.8rem", color: "var(--green-dark)", marginBottom: "0.75rem", fontFamily: "var(--font-syne)" }}>Panel distribuidora</div>
                {/* Vendedores status */}
                {[["Carlos M.","Paraná","✓ 12 comercios","#22c55e"],["Ana P.","Colón","📍 En ruta","#f59e0b"],["Luis R.","Gualeguaychú","✓ 8 comercios","#22c55e"]].map(([name,city,status,c],i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.4rem 0.6rem", background: "#f8fcfa", borderRadius: 8, marginBottom: 4 }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.75rem", color: "#374151" }}>{name}</div>
                      <div style={{ fontSize: "0.62rem", color: "#9ca3af" }}>{city}</div>
                    </div>
                    <span style={{ fontSize: "0.65rem", color: c, fontWeight: 600 }}>{status}</span>
                  </div>
                ))}
                <div style={{ marginTop: 12, background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "0.5rem" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#ef4444" }}>⚠️ Alerta: 2 quiebres detectados en Paraná</div>
                </div>
              </div>
            </div>
          </div>

          {/* Texto derecha */}
          <div className="order-1 md:order-2">
            <div className="pill fade-up" style={{ marginBottom: "1rem" }}>Para distribuidoras</div>
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
              ¿Sabés qué oportunidades tenés en las góndolas?
            </h2>

            <div className="fade-up" style={{ marginTop: "1.5rem", marginBottom: "1.5rem", transitionDelay: "200ms" }}>
              {preguntas.map((p, i) => (
                <p key={i} style={{ color: "#5a6672", fontStyle: "italic", marginBottom: "0.5rem", lineHeight: 1.6, fontSize: "0.93rem" }}>
                  <span style={{ color: "var(--teal)", marginRight: 8 }}>•</span>{p}
                </p>
              ))}
            </div>

            <p className="fade-up" style={{ color: "#5a6672", lineHeight: 1.7, marginBottom: "1.5rem", transitionDelay: "300ms" }}>
              Las distribuidoras que tienen datos negocian mejor. Las que no, pierden representaciones.
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
        </div>
      </div>
    </section>
  );
}
