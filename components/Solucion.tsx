export default function Solucion() {
  return (
    <section id="solucion" style={{ padding: "5rem 1.5rem", background: "var(--bg-subtle)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div className="blur-in" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2 className="section-title">
            De la foto de góndola<br />al dashboard en minutos
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 500, margin: "0.75rem auto 0" }}>
            Sin repositores propios. Nos montamos sobre la red que ya recorre la calle.
          </p>
        </div>

        {/* Bento grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: "1.25rem" }}>

          {/* Card 1 — DETECTAR — large, spanning full left column */}
          <div className="blur-in card" style={{
            gridRow: "1 / 3",
            padding: "2.5rem",
            background: "linear-gradient(160deg, var(--g-900) 0%, var(--g-800) 60%, #0a3d20 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
            position: "relative",
          }}>
            {/* Glow orb */}
            <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: 800, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>01</span>
              <div>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--g-400)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Detectar</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.5rem", color: "#fff", lineHeight: 1.2 }}>Fotos de campo, analizadas por IA</h3>
              </div>
            </div>

            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Vendedores que ya recorren los comercios sacan una foto de la góndola con su celular. Sin apps complicadas — es una PWA que se instala en segundos. La IA analiza cada imagen automáticamente.
            </p>

            {/* Phone mockup with gondola capture */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              {/* Phone */}
              <div style={{ width: 120, flexShrink: 0, background: "#0a0a0a", borderRadius: 18, border: "2px solid rgba(255,255,255,0.15)", padding: "8px", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                <div style={{ background: "#111", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ background: "#1a1a1a", padding: "6px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.5rem", color: "#666" }}>9:41</span>
                    <div style={{ display: "flex", gap: 3 }}>
                      {[3,4,5].map(i => <div key={i} style={{ width: i, height: 6, background: "#555", borderRadius: 1 }} />)}
                    </div>
                  </div>
                  {/* Gondola image simulation */}
                  <div style={{ height: 80, background: "linear-gradient(180deg, #e8f5e9 0%, #c8e6c9 100%)", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 2, padding: "0 4px 4px" }}>
                      {[["#ef9a9a",36],["#90caf9",44],["#ffe082",40],["#ef9a9a",38],["#a5d6a7",42]].map(([c,h],i) => (
                        <div key={i} style={{ width: 14, height: h, background: c, borderRadius: "2px 2px 0 0" }} />
                      ))}
                    </div>
                    {/* Scan line */}
                    <div style={{ position: "absolute", top: "40%", left: 0, right: 0, height: 2, background: "rgba(34,197,94,0.7)", boxShadow: "0 0 8px rgba(34,197,94,0.8)" }} />
                    <div style={{ position: "absolute", inset: 4, border: "1.5px solid rgba(34,197,94,0.6)", borderRadius: 4 }} />
                  </div>
                  <div style={{ padding: "6px 8px", background: "#111" }}>
                    <div style={{ fontSize: "0.5rem", color: "#86efac", fontWeight: 600, marginBottom: 3 }}>✓ Analizando...</div>
                    <div style={{ height: 3, background: "#1a1a1a", borderRadius: 2 }}>
                      <div style={{ width: "70%", height: "100%", background: "linear-gradient(90deg,var(--g-600),var(--t-400))", borderRadius: 2 }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Analysis results floating */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                {[["📦 Share of shelf","62% ↑","var(--g-400)"],["💰 Precio real","$2.890","rgba(255,255,255,0.8)"],["⚠️ Quiebre","Mezcla 900ml","#fca5a5"]].map(([label,val,color],i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "8px 12px", backdropFilter: "blur(8px)" }}>
                    <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.45)", marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, color: color as string }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — RESOLVER */}
          <div className="blur-in card" style={{ padding: "2rem", transitionDelay: "100ms", overflow: "hidden", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, color: "var(--slate-200)", lineHeight: 1 }}>02</span>
              <div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--g-600)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Resolver</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.2rem", color: "var(--text)", lineHeight: 1.2 }}>Quiebre detectado → fixer despachado</h3>
              </div>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Ante cada problema, un ejecutor independiente recibe la misión en segundos. Acomoda, repone y reporta con foto antes/después.
            </p>

            {/* Alert → Action flow */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "0.65rem 0.9rem", display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ef4444" }}>Quiebre detectado</div>
                  <div style={{ fontSize: "0.62rem", color: "#6b7280" }}>Mezcla 900ml · Don Juan · Paraná</div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <svg width="16" height="20" fill="none" viewBox="0 0 16 20"><path d="M8 2v16M8 18l-4-4M8 18l4-4" stroke="var(--g-600)" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div style={{ background: "var(--g-50)", border: "1px solid rgba(22,163,74,0.25)", borderRadius: 10, padding: "0.65rem 0.9rem", display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--g-600)", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--g-700)" }}>Fixer en camino · ETA 45 min</div>
                  <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>📍 2.3 km del punto · Reposición + foto</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — MAPEAR */}
          <div className="blur-in card" style={{ padding: "2rem", transitionDelay: "200ms", overflow: "hidden", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, color: "var(--slate-200)", lineHeight: 1 }}>03</span>
              <div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--t-600)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Mapear</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.2rem", color: "var(--text)", lineHeight: 1.2 }}>El mapa del consumo masivo argentino</h3>
              </div>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Cada foto es un punto de dato. Geolocalizados, verificados, acumulados día a día. Inteligencia de mercado que no existía.
            </p>

            {/* Mini dashboard chart */}
            <div style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 10, padding: "0.9rem" }}>
              <div style={{ fontSize: "0.62rem", color: "var(--text-muted)", marginBottom: "0.6rem", fontWeight: 600 }}>Share de góndola — Entre Ríos</div>
              {[["Tu marca","72%",72,"var(--g-600)"],["Comp. A","48%",48,"var(--slate-400)"],["Comp. B","31%",31,"var(--slate-300)"]].map(([n,p,w,c],i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: "0.62rem", color: "var(--text-muted)", width: 56, flexShrink: 0 }}>{n}</span>
                  <div style={{ flex: 1, background: "var(--border)", borderRadius: 3, height: 8 }}>
                    <div style={{ width: `${w}%`, height: "100%", background: c as string, borderRadius: 3 }} />
                  </div>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, color: c as string, width: 28 }}>{p}</span>
                </div>
              ))}
              <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
                {[["89%","Presencia"],["47","Pdv hoy"]].map(([v,l],i) => (
                  <div key={i} style={{ flex: 1, background: "#fff", border: "1px solid var(--border)", borderRadius: 8, padding: "6px", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1rem", color: "var(--g-700)" }}>{v}</div>
                    <div style={{ fontSize: "0.55rem", color: "var(--text-muted)" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #solucion > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #solucion > div > div:last-child > div:first-child {
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
