import Image from "next/image";

const bullets = [
  "Presencia real de tus productos en cada punto de venta",
  "Share of shelf vs competencia, verificado por IA",
  "Precio real en góndola — no el precio sugerido",
  "Campañas de relevamiento activas en 24hs",
  "Alertas automáticas ante quiebres de stock",
];

function MonitorFrame() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Monitor body */}
      <div style={{
        width: "100%",
        background: "#18181b",
        borderRadius: 14,
        padding: "10px 10px 8px",
        border: "1.5px solid #27272a",
        boxShadow: "0 28px 72px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.1)",
      }}>
        {/* Camera dot */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 7 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#3f3f46" }} />
        </div>
        {/* Screen */}
        <div style={{ borderRadius: 7, overflow: "hidden" }}>
          {/* Browser chrome */}
          <div style={{
            background: "#f1f5f9",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            borderBottom: "1px solid #e2e8f0",
          }}>
            <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
              {["#ef4444","#f59e0b","#22c55e"].map((c,i) => (
                <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <div style={{
              flex: 1,
              background: "#fff",
              borderRadius: 5,
              padding: "3px 10px",
              fontSize: "0.6rem",
              color: "#94a3b8",
              textAlign: "center",
              border: "1px solid #e2e8f0",
            }}>
              app.gondolapp.com/marca/dashboard
            </div>
          </div>
          {/* Screenshot */}
          <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
            <Image
              src="/screenshots/dashboard-marca.jpg"
              alt="Dashboard de marca — GondolApp"
              fill
              style={{ objectFit: "cover", objectPosition: "top left" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      {/* Stand */}
      <div style={{ width: "7%", height: 24, background: "#27272a" }} />
      <div style={{ width: "28%", height: 7, background: "#27272a", borderRadius: "0 0 6px 6px" }} />
    </div>
  );
}

export default function ParaMarcas() {
  return (
    <section id="marcas" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

        {/* Text */}
        <div>
          <span className="badge blur-in" style={{ marginBottom: "1rem", display: "inline-flex" }}>Para marcas CPG</span>
          <h2 className="section-title blur-in" style={{ marginBottom: "1.5rem", transitionDelay: "80ms" }}>
            Tu presupuesto de trade marketing merece datos reales
          </h2>
          <p className="blur-in" style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.5rem", transitionDelay: "160ms" }}>
            Millones invertidos en activaciones y exhibidores — sin saber si tus productos están realmente en la góndola a 300km de Buenos Aires.
          </p>
          <div className="blur-in" style={{ transitionDelay: "240ms" }}>
            {bullets.map((b, i) => (
              <p key={i} style={{ display: "flex", gap: 10, color: "var(--text)", fontSize: "0.9rem", marginBottom: "0.6rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--g-600)", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{b}
              </p>
            ))}
          </div>
        </div>

        {/* Monitor */}
        <div className="blur-in" style={{ transitionDelay: "200ms" }}>
          <MonitorFrame />
        </div>

      </div>
      <style>{`@media(max-width:900px){#marcas > div{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
