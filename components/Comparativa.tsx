const rows = [
  ["Fuerza de campo","Empleados propios o civiles reclutados","Red existente de vendedores + fixers"],
  ["Costo","Alto a muy alto","Bajo — la red ya existe"],
  ["Cobertura interior","Baja o nula","Cobertura total"],
  ["Capacidad","Detectan O resuelven","Detecta Y resuelve en el mismo ecosistema"],
  ["Datos en tiempo real","Reportes semanales o mensuales","Dashboard en vivo con cada foto"],
];

export default function Comparativa() {
  return (
    <section id="comparativa" style={{ padding:"5rem 1.5rem", background:"var(--bg-subtle)" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <div className="blur-in" style={{ textAlign:"center", marginBottom:"3rem" }}>
          <span className="badge" style={{ marginBottom:"1rem", display:"inline-flex" }}>El diferencial</span>
          <h2 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(1.75rem,3.5vw,2.5rem)", fontWeight:800, letterSpacing:"-0.02em", color:"var(--text)", lineHeight:1.2 }}>
            No somos uno más
          </h2>
        </div>
        <div className="card blur-in" style={{ overflow:"hidden", padding:0 }}>
          <div style={{ overflowX:"auto" }}>
            <table className="comp-table">
              <thead>
                <tr>
                  <th style={{ background:"var(--bg-subtle)", color:"var(--text-muted)", width:"28%" }}></th>
                  <th style={{ background:"var(--bg-subtle)", color:"var(--slate-500)" }}>Otros en el mercado</th>
                  <th style={{ background:"linear-gradient(135deg,var(--g-600),var(--t-600))", color:"#fff" }}>
                    <span style={{ display:"flex", alignItems:"center", gap:6 }}>
                      <span className="glow-dot" style={{ background:"#fff", boxShadow:"0 0 6px rgba(255,255,255,0.8)" }} />
                      GondolApp
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, other, us], i) => (
                  <tr key={i}>
                    <td style={{ fontWeight:600, color:"var(--text)", fontSize:"0.875rem" }}>{label}</td>
                    <td style={{ color:"var(--text-muted)" }}>
                      <span style={{ display:"inline-flex", alignItems:"center", gap:6 }}>
                        <span style={{ color:"#ef4444", fontSize:"1rem" }}>✕</span>{other}
                      </span>
                    </td>
                    <td className="hl">
                      <span style={{ display:"inline-flex", alignItems:"center", gap:6 }}>
                        <span style={{ color:"var(--g-600)", fontSize:"1rem" }}>✓</span>{us}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
