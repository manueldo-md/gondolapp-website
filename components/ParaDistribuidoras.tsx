const bullets = [
  "Panel de control de tus vendedores en tiempo real",
  "Alertas automáticas de quiebre de stock",
  "Relevamiento profesional para presentar a tus marcas",
  "El argumento que te faltaba para captar nuevas marcas",
];

export default function ParaDistribuidoras() {
  return (
    <section id="distribuidoras" style={{ padding: "5rem 1.5rem", background: "var(--bg-subtle)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div className="blur-in">
          <div className="card" style={{ padding: "1.5rem", background: "var(--bg)" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.85rem", color: "var(--text)", marginBottom: "1rem" }}>Panel distribuidora</div>
            {[
              ["Carlos M.","Paraná","✓ 12 comercios","var(--g-600)"],
              ["Ana P.","Colón","📍 En ruta","#f59e0b"],
              ["Luis R.","Gualeguaychú","✓ 8 comercios","var(--g-600)"],
              ["María T.","Paraná","✓ 15 comercios","var(--g-600)"],
            ].map(([n,c,s,col],i)=>(
              <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0.5rem 0.75rem", background:"var(--bg-subtle)", borderRadius:8, marginBottom:4, border:"1px solid var(--border)" }}>
                <div>
                  <div style={{ fontWeight:600, fontSize:"0.8rem", color:"var(--text)" }}>{n}</div>
                  <div style={{ fontSize:"0.65rem", color:"var(--text-muted)" }}>{c}</div>
                </div>
                <span style={{ fontSize:"0.7rem", color:col as string, fontWeight:600 }}>{s}</span>
              </div>
            ))}
            <div style={{ marginTop:12, background:"#fef2f2", border:"1px solid #fecaca", borderRadius:8, padding:"0.5rem 0.75rem" }}>
              <div style={{ fontSize:"0.7rem", fontWeight:700, color:"#ef4444" }}>⚠️ 2 quiebres detectados en Paraná</div>
            </div>
            <div style={{ marginTop:8, display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              {[["47","comercios hoy"],["3","alertas activas"]].map(([v,l],i)=>(
                <div key={i} style={{ background:"var(--bg-subtle)", border:"1px solid var(--border)", borderRadius:8, padding:"0.6rem", textAlign:"center" }}>
                  <div style={{ fontFamily:"var(--font-heading)", fontWeight:800, fontSize:"1.25rem", color:"var(--g-700)" }}>{v}</div>
                  <div style={{ fontSize:"0.6rem", color:"var(--text-muted)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="section-title blur-in" style={{ marginBottom:"1.5rem", transitionDelay:"80ms" }}>
            La distribuidora que llega con datos gana el contrato
          </h2>
          <p className="blur-in" style={{ color:"var(--text-muted)", lineHeight:1.7, marginBottom:"1.5rem", fontSize:"0.95rem", transitionDelay:"160ms" }}>
            Las distribuidoras que tienen datos negocian mejor. Las que no, pierden representaciones.
          </p>
          <div className="blur-in" style={{ transitionDelay:"240ms" }}>
            {bullets.map((b,i)=>(
              <p key={i} style={{ display:"flex", gap:8, color:"var(--text)", fontSize:"0.9rem", marginBottom:"0.5rem" }}>
                <span style={{ color:"var(--g-600)", fontWeight:700, flexShrink:0 }}>✓</span>{b}
              </p>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#distribuidoras > div{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
