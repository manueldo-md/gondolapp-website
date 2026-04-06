import Image from "next/image";

const bullets = [
  "Panel de control de todos tus vendedores en tiempo real",
  "Alertas automáticas de quiebre: sabés antes que el cliente",
  "Relevamiento profesional para presentar a tus marcas",
  "El argumento que te faltaba para captar nuevas representaciones",
  "Historial de campañas y rendimiento por zona",
];

export default function ParaDistribuidoras() {
  return (
    <section id="distribuidoras" style={{ padding: "5rem 1.5rem", background: "var(--bg-subtle)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

        {/* Screenshot first (left) */}
        <div className="blur-in">
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
                app.gondolapp.com/distribuidora
              </div>
            </div>
            {/* Screenshot */}
            <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
              <Image
                src="/screenshots/dashboard-dist.jpg"
                alt="Dashboard de distribuidora en GondolApp"
                fill
                style={{ objectFit: "cover", objectPosition: "top left" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="badge blur-in" style={{ marginBottom: "1rem", display: "inline-flex" }}>Para distribuidoras</span>
          <h2 className="section-title blur-in" style={{ marginBottom: "1.5rem", transitionDelay: "80ms" }}>
            La distribuidora que llega con datos gana el contrato
          </h2>
          <p className="blur-in" style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.5rem", fontSize: "0.95rem", transitionDelay: "160ms" }}>
            Tus vendedores ya visitan 50 comercios por semana. Con GondolApp, cada visita genera datos que antes se perdían en chats de WhatsApp.
          </p>
          <div className="blur-in" style={{ transitionDelay: "240ms" }}>
            {bullets.map((b,i) => (
              <p key={i} style={{ display: "flex", gap: 10, color: "var(--text)", fontSize: "0.9rem", marginBottom: "0.6rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--g-600)", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{b}
              </p>
            ))}
          </div>
        </div>

      </div>
      <style>{`@media(max-width:768px){#distribuidoras > div{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
