const bullets = [
  "Sacás fotos durante tu recorrido habitual",
  "Acumulás puntos y los canjeás por premios reales",
  "Subís de nivel: Casual → Activo → Pro ⭐",
  "Competís en el ranking de tu zona y provincia",
];

export default function ParaGondoleros() {
  return (
    <section id="gondoleros" style={{ padding: "6rem 1.5rem", background: "linear-gradient(135deg, #0c1f14, #143d24, #1a5c2e)", position: "relative", overflow: "hidden" }}>
      <div className="hero-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="pill pill-light fade-up" style={{ marginBottom: "1rem" }}>Para gondoleros</div>
            <h2
              className="fade-up"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.6rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                fontFamily: "var(--font-syne)",
                transitionDelay: "100ms",
              }}
            >
              Ganás plata haciendo{" "}
              <span className="gradient-text">lo que ya hacés</span>
            </h2>

            <div className="fade-up" style={{ marginTop: "2rem", transitionDelay: "200ms" }}>
              {bullets.map((b, i) => (
                <p key={i} style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", display: "flex", alignItems: "flex-start", gap: 12, marginBottom: "1rem", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--teal-light)", fontWeight: 700, marginTop: 2 }}>→</span>
                  {b}
                </p>
              ))}
            </div>

            <div className="fade-up" style={{ marginTop: "2rem", transitionDelay: "350ms" }}>
              <a href="#contacto" className="btn-primary">
                Quiero ser gondolero
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="fade-up flex justify-center" style={{ transitionDelay: "300ms" }}>
            <div style={{ width: 240, height: 480, background: "#0a0a0a", borderRadius: 40, border: "4px solid #333", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "2.5rem 1rem 1rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 80, height: 22, background: "#0a0a0a", borderRadius: "0 0 16px 16px", zIndex: 10 }} />
              {/* App content */}
              <div style={{ width: "100%", background: "#1a1a2e", borderRadius: 16, padding: "0.75rem", marginBottom: 8 }}>
                <div style={{ fontSize: "0.6rem", color: "var(--teal-light)", fontWeight: 700, marginBottom: 4 }}>🏆 RANKING ZONA</div>
                {[["#1","Vos","⭐ Pro","342 pts","var(--teal-light)"],["#2","Carlos M.","Activo","289 pts","#aaa"],["#3","Ana P.","Activo","241 pts","#aaa"]].map(([pos,name,level,pts,c],i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "3px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <span style={{ fontSize: "0.6rem", color: c, fontWeight: 700 }}>{pos}</span>
                    <span style={{ fontSize: "0.6rem", color: "#fff", flex: 1, marginLeft: 6 }}>{name}</span>
                    <span style={{ fontSize: "0.55rem", color: c }}>{level}</span>
                    <span style={{ fontSize: "0.6rem", color: c, marginLeft: 6, fontWeight: 700 }}>{pts}</span>
                  </div>
                ))}
              </div>
              <div style={{ width: "100%", background: "linear-gradient(135deg, var(--green-dark), var(--green-mid))", borderRadius: 12, padding: "0.6rem", textAlign: "center" }}>
                <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.7)", marginBottom: 2 }}>Puntos acumulados</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", fontFamily: "var(--font-syne)" }}>342</div>
                <div style={{ fontSize: "0.55rem", color: "var(--teal-light)" }}>= $3.420 en premios</div>
              </div>
              <div style={{ marginTop: 8, width: "100%", background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "0.5rem" }}>
                <div style={{ fontSize: "0.6rem", color: "#aaa", marginBottom: 3 }}>Misión disponible</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: "1rem" }}>📸</span>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "#fff", fontWeight: 600 }}>Góndola Lácteos</div>
                    <div style={{ fontSize: "0.55rem", color: "#aaa" }}>+25 puntos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
