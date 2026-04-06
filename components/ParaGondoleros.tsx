export default function ParaGondoleros() {
  return (
    <section id="gondoleros" style={{
      padding: "5rem 1.5rem",
      background: "linear-gradient(135deg, var(--g-900) 0%, #0a3320 50%, var(--g-800) 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Subtle grid */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", opacity:0.15,
        backgroundImage:"linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
        backgroundSize:"64px 64px" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:2 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"center" }}>
          <div>
            <span className="badge badge-dark blur-in" style={{ marginBottom:"1rem", display:"inline-flex" }}>Para gondoleros</span>
            <h2 className="blur-in" style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.02em", color:"#fff", lineHeight:1.1, marginBottom:"1.25rem", transitionDelay:"80ms" }}>
              Ganás plata haciendo{" "}
              <span className="grad-text-animated">lo que ya hacés</span>
            </h2>
            <div className="blur-in" style={{ marginTop:"1.5rem", transitionDelay:"160ms" }}>
              {["Sacás fotos durante tu recorrido habitual","Acumulás puntos y los canjeás por premios reales","Subís de nivel: Casual → Activo → Pro ⭐","Competís en el ranking de tu zona y provincia"].map((b,i)=>(
                <p key={i} style={{ display:"flex", gap:12, color:"rgba(255,255,255,0.8)", fontSize:"1rem", marginBottom:"0.9rem", lineHeight:1.5 }}>
                  <span style={{ color:"var(--t-400)", fontWeight:700, marginTop:2 }}>→</span>{b}
                </p>
              ))}
            </div>
            <div className="blur-in" style={{ marginTop:"2rem", transitionDelay:"320ms" }}>
              <a href="#contacto" className="btn btn-ghost-white">
                Quiero ser gondolero
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <div className="blur-in" style={{ display:"flex", justifyContent:"center", transitionDelay:"200ms" }}>
            <div style={{ width:240, background:"#0a0a12", borderRadius:40, border:"3px solid #1e293b", padding:"2.5rem 1rem 1.5rem", position:"relative", overflow:"hidden", boxShadow:"0 40px 80px rgba(0,0,0,0.5)" }}>
              <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:72, height:20, background:"#0a0a12", borderRadius:"0 0 14px 14px" }} />
              <div style={{ width:"100%", background:"rgba(22,163,74,0.15)", border:"1px solid rgba(22,163,74,0.3)", borderRadius:12, padding:"0.65rem", marginBottom:8 }}>
                <div style={{ fontSize:"0.55rem", color:"var(--t-400)", fontWeight:700, marginBottom:4 }}>🏆 RANKING ZONA</div>
                {[["#1","Vos","⭐ Pro","342 pts","var(--t-400)"],["#2","Carlos M.","Activo","289 pts","rgba(255,255,255,0.5)"],["#3","Ana P.","Activo","241 pts","rgba(255,255,255,0.4)"]].map(([pos,n,l,p,c],i)=>(
                  <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"3px 0", borderBottom:i<2?"1px solid rgba(255,255,255,0.05)":"none" }}>
                    <span style={{ fontSize:"0.6rem", color:c as string, fontWeight:700, width:16 }}>{pos}</span>
                    <span style={{ fontSize:"0.6rem", color:"#fff", flex:1 }}>{n}</span>
                    <span style={{ fontSize:"0.55rem", color:c as string }}>{l}</span>
                    <span style={{ fontSize:"0.6rem", color:c as string, fontWeight:700, marginLeft:4 }}>{p}</span>
                  </div>
                ))}
              </div>
              <div style={{ width:"100%", background:"linear-gradient(135deg,var(--g-700),var(--t-600))", borderRadius:12, padding:"0.75rem", textAlign:"center", marginBottom:8 }}>
                <div style={{ fontSize:"0.55rem", color:"rgba(255,255,255,0.7)", marginBottom:3 }}>Puntos acumulados</div>
                <div style={{ fontFamily:"var(--font-heading)", fontSize:"2rem", fontWeight:800, color:"#fff", lineHeight:1 }}>342</div>
                <div style={{ fontSize:"0.55rem", color:"rgba(255,255,255,0.75)", marginTop:2 }}>= $3.420 en premios</div>
              </div>
              <div style={{ width:"100%", background:"rgba(255,255,255,0.05)", borderRadius:10, padding:"0.6rem" }}>
                <div style={{ fontSize:"0.55rem", color:"rgba(255,255,255,0.5)", marginBottom:4 }}>Misión disponible</div>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ fontSize:"1rem" }}>📸</span>
                  <div>
                    <div style={{ fontSize:"0.65rem", color:"#fff", fontWeight:600 }}>Góndola Lácteos</div>
                    <div style={{ fontSize:"0.55rem", color:"var(--t-400)" }}>+25 puntos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#gondoleros > div > div{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
