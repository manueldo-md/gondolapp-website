import Image from "next/image";

const bullets = [
  "Presencia real de tus productos en cada punto de venta",
  "Share of shelf vs competencia, verificado por IA",
  "Precio real en góndola — no el precio sugerido",
  "Campañas de relevamiento activas en 24hs",
  "Alertas automáticas ante quiebres de stock",
];

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
            Millones invertidos en activaciones, promotores y exhibidores — sin saber si tus productos están realmente en la góndola a 300km de Buenos Aires.
          </p>
          <div className="blur-in" style={{ transitionDelay: "240ms" }}>
            {bullets.map((b, i) => (
              <p key={i} style={{ display: "flex", gap: 10, color: "var(--text)", fontSize: "0.9rem", marginBottom: "0.6rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--g-600)", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{b}
              </p>
            ))}
          </div>
        </div>

        {/* Real screenshot in browser frame */}
        <div className="blur-in" style={{ transitionDelay: "200ms" }}>
          <div style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid var(--border)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)",
          }}>
            {/* Browser chrome */}
            <div style={{
              background: "var(--slate-100)",
              borderBottom: "1px solid var(--border)",
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
                {["#ef4444","#f59e0b","#22c55e"].map((c,i) => (
                  <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{
                flex: 1,
                background: "#fff",
                borderRadius: 6,
                padding: "4px 10px",
                fontSize: "0.65rem",
                color: "var(--slate-500)",
                textAlign: "center",
                border: "1px solid var(--border)",
              }}>
                app.gondolapp.com/dashboard
              </div>
            </div>
            {/* Screenshot */}
            <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
              <Image
                src="/screenshots/dashboard-marca.jpg"
                alt="Dashboard de marca en GondolApp"
                fill
                style={{ objectFit: "cover", objectPosition: "top left" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

      </div>
      <style>{`@media(max-width:768px){#marcas > div{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
