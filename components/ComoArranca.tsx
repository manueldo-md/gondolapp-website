const steps = [
  { num:"1", title:"Te registrás", sub:"15 minutos", desc:"Creás tu cuenta, configurás tu primera zona y categoría." },
  { num:"2", title:"Conectás tu equipo", sub:"1 día", desc:"Tus vendedores instalan la PWA desde el navegador. Sin IT." },
  { num:"3", title:"Primera campaña activa", sub:"24hs", desc:"Lanzás tu primer relevamiento con parámetros específicos." },
  { num:"4", title:"Primeros datos reales", sub:"Esa semana", desc:"Dashboard con fotos verificadas y métricas de campo." },
];

export default function ComoArranca() {
  return (
    <section id="como-arranca" style={{ padding:"5rem 1.5rem" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", textAlign:"center" }}>
        <div className="blur-in" style={{ marginBottom:"3rem" }}>
          <h2 className="section-title">
            En 48hs podés estar operando
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"1.25rem" }}>
          {steps.map((s,i)=>(
            <div key={i} className="card blur-in" style={{ padding:"1.75rem", textAlign:"left", position:"relative", overflow:"hidden", transitionDelay:`${i*100}ms` }}>
              <div style={{ position:"absolute", top:16, right:16, fontFamily:"var(--font-heading)", fontSize:"4rem", fontWeight:800, color:"var(--g-50)", lineHeight:1, userSelect:"none" }}>{s.num}</div>
              <div className="step-circle" style={{ marginBottom:"1rem" }}>{s.num}</div>
              <p style={{ fontFamily:"var(--font-heading)", fontWeight:700, fontSize:"1rem", color:"var(--text)", marginBottom:"0.25rem" }}>{s.title}</p>
              <p style={{ fontSize:"0.75rem", color:"var(--g-600)", fontWeight:600, marginBottom:"0.5rem" }}>{s.sub}</p>
              <p style={{ fontSize:"0.85rem", color:"var(--text-muted)", lineHeight:1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="blur-in" style={{ marginTop:"2rem", color:"var(--text-muted)", fontStyle:"italic", fontSize:"0.95rem" }}>
          Sin implementación. Sin IT. Sin excusas.
        </p>
      </div>
    </section>
  );
}
