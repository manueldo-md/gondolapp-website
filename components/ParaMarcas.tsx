const preguntas = [
  "¿Sabés con quién competís en cada punto de venta?",
  "¿Cuántos frentes tenés y qué porcentaje del lineal?",
  "¿Cómo evaluás precios reales en góndola vs precio sugerido?",
  "¿Estás perdiendo share of shelf sin saberlo?",
];
const bullets = [
  "Fotos verificadas de tus góndolas en el interior",
  "Share of shelf vs competencia en tiempo real",
  "Precio real en góndola verificado por campo",
  "Campañas de relevamiento activadas en 24hs",
];

export default function ParaMarcas() {
  return (
    <section id="marcas" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div>
          <span className="badge blur-in" style={{ marginBottom: "1rem", display: "inline-flex" }}>Para marcas</span>
          <h2 className="blur-in" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.2, marginBottom: "1.5rem", transitionDelay: "80ms" }}>
            ¿Sabés lo que pasa con tus productos en la góndola?
          </h2>
          <div className="blur-in" style={{ marginBottom: "1.5rem", transitionDelay: "160ms" }}>
            {preguntas.map((p, i) => (
              <p key={i} style={{ display: "flex", gap: 8, color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem", fontStyle: "italic" }}>
                <span style={{ color: "var(--t-600)", flexShrink: 0 }}>•</span>{p}
              </p>
            ))}
          </div>
          <p className="blur-in" style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem", transitionDelay: "240ms" }}>
            Si alguna de estas no tiene respuesta, el canal tradicional te está costando plata sin que lo sepas.
          </p>
          <div className="blur-in" style={{ transitionDelay: "320ms" }}>
            {bullets.map((b, i) => (
              <p key={i} style={{ display: "flex", gap: 8, color: "var(--text)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                <span style={{ color: "var(--g-600)", fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
              </p>
            ))}
          </div>
        </div>

        <div className="blur-in" style={{ transitionDelay: "200ms" }}>
          <div className="card" style={{ padding: "1.5rem", background: "var(--bg)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: "1rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem" }}>
              {["#ef4444","#f59e0b","#22c55e"].map((c,i)=><div key={i} style={{ width:10,height:10,borderRadius:"50%",background:c }} />)}
              <span style={{ fontSize: "0.65rem", color: "var(--slate-400)", marginLeft: 4 }}>Dashboard de marca · gondolapp.com</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8, marginBottom: "1rem" }}>
              {[["89%","Presencia"],["58%","Share of shelf"],["$2.840","Precio góndola"],["6","Quiebres resueltos"]].map(([v,l],i)=>(
                <div key={i} style={{ background: i===3?"#fef2f2":"var(--bg-subtle)", border: `1px solid ${i===3?"#fecaca":"var(--border)"}`, borderRadius: 10, padding: "0.75rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: 800, color: i===3?"#ef4444":"var(--g-700)" }}>{v}</div>
                  <div style={{ fontSize: "0.62rem", color: i===3?"#ef4444":"var(--text-muted)", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
            {[["Girasol 1.5L","72%","72"],["Oliva 500ml","55%","55"],["Mezcla 900ml","41%","41"]].map(([n,p,w],i)=>(
              <div key={i} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                <span style={{ fontSize:"0.7rem", color:"var(--text-muted)", width:90, flexShrink:0 }}>{n}</span>
                <div style={{ flex:1, background:"var(--bg-subtle)", borderRadius:4, height:10, border:"1px solid var(--border)" }}>
                  <div style={{ width:`${w}%`, height:"100%", background:"linear-gradient(90deg,var(--g-700),var(--t-600))", borderRadius:4 }} />
                </div>
                <span style={{ fontSize:"0.7rem", fontWeight:700, color:"var(--g-700)", width:28 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#marcas > div{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
