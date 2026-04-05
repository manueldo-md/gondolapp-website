const rows = [
  ["Fuerza de campo", "Empleados propios o civiles reclutados", "Red existente de vendedores + fixers neutrales"],
  ["Costo", "Alto a muy alto", "Bajo — la red ya existe"],
  ["Cobertura del interior", "Baja o nula", "Cobertura total"],
  ["Capacidad", "Detectan problemas o los resuelven", "Detecta y resuelve en el mismo ecosistema"],
  ["Datos en tiempo real", "Reportes semanales o mensuales", "Dashboard en vivo con cada foto"],
];

export default function Comparativa() {
  return (
    <section id="comparativa" style={{ padding: "6rem 1.5rem", background: "var(--bg-section)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center fade-up" style={{ marginBottom: "3rem" }}>
          <div className="pill" style={{ marginBottom: "1rem" }}>El diferencial</div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.3rem)",
              fontWeight: 800,
              color: "var(--green-dark)",
              lineHeight: 1.15,
              fontFamily: "var(--font-syne)",
            }}
          >
            No somos uno más
          </h2>
        </div>

        <div className="fade-up" style={{ overflowX: "auto" }}>
          <table className="comp-table">
            <thead>
              <tr>
                <th style={{ background: "linear-gradient(135deg, var(--green-dark), var(--green-mid))", color: "#fff" }}></th>
                <th style={{ background: "linear-gradient(135deg, var(--green-dark), var(--green-mid))", color: "#fff" }}>Otros en el mercado</th>
                <th style={{ background: "linear-gradient(135deg, var(--teal), var(--gcyan))", color: "#fff" }}>GondolApp</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, other, us], i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: "var(--green-dark)" }}>{label}</td>
                  <td>{other}</td>
                  <td className="hl">{us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
