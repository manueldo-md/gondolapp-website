import Image from "next/image";

// ─── Monitor ─────────────────────────────────────────────────────────────
function MonitorFrame({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{
        width: "100%",
        background: "#18181b",
        borderRadius: 14,
        padding: "10px 10px 8px",
        border: "1.5px solid #27272a",
        boxShadow: "0 24px 56px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
      }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 7 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#3f3f46" }} />
        </div>
        <div style={{ borderRadius: 7, overflow: "hidden" }}>
          <div style={{
            background: "#f1f5f9", padding: "7px 10px",
            display: "flex", alignItems: "center", gap: 7,
            borderBottom: "1px solid #e2e8f0",
          }}>
            <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
              {["#ef4444", "#f59e0b", "#22c55e"].map((c, i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <div style={{
              flex: 1, background: "#fff", borderRadius: 5,
              padding: "3px 8px", fontSize: "0.58rem",
              color: "#94a3b8", textAlign: "center",
              border: "1px solid #e2e8f0",
            }}>
              {url}
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
            <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "top left" }} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </div>
      {/* Stand */}
      <div style={{ width: "7%", height: 22, background: "#27272a" }} />
      <div style={{ width: "26%", height: 6, background: "#27272a", borderRadius: "0 0 6px 6px" }} />
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────
const panels = [
  {
    label: "🏷️ Para marcas CPG",
    labelBg: "var(--g-50)", labelColor: "var(--g-700)", labelBorder: "rgba(22,163,74,0.25)",
    src: "/screenshots/dashboard-marca.jpg",
    alt: "Dashboard de marca — GondolApp",
    url: "app.gondolapp.com/marca/dashboard",
    heading: "Tu presupuesto de trade marketing merece datos reales",
    features: [
      { icon: "📊", text: "Presencia real de tus SKUs en cada punto de venta" },
      { icon: "📐", text: "Share of shelf vs competencia, verificado por IA" },
      { icon: "💰", text: "Precio real en góndola — no el precio sugerido" },
      { icon: "🚀", text: "Campañas de relevamiento activas en 24 hs" },
      { icon: "⚠️", text: "Alertas automáticas ante quiebres de stock" },
      { icon: "📄", text: "Reportes de campaña listos para el directorio" },
    ],
    cta: "Quiero ver mi marca en GondolApp",
    ctaClass: "btn-primary",
  },
  {
    label: "🏭 Para distribuidoras",
    labelBg: "#eff6ff", labelColor: "#1d4ed8", labelBorder: "rgba(59,130,246,0.25)",
    src: "/screenshots/dashboard-dist.jpg",
    alt: "Dashboard distribuidora — GondolApp",
    url: "app.gondolapp.com/distribuidora/dashboard",
    heading: "La distribuidora que llega con datos gana el contrato",
    features: [
      { icon: "👁️", text: "Panel de control de todos tus vendedores en tiempo real" },
      { icon: "🔔", text: "Alertas de quiebre automáticas: sabés antes que el cliente" },
      { icon: "🏆", text: "Relevamiento profesional para presentar a tus marcas" },
      { icon: "📋", text: "El argumento que te faltaba para captar nuevas representaciones" },
      { icon: "📈", text: "Historial de campañas y rendimiento por zona" },
      { icon: "🤝", text: "Coordiná tu red sin WhatsApp: todo desde un panel" },
    ],
    cta: "Quiero ver mi distribuidora en GondolApp",
    ctaClass: "btn-secondary",
  },
];

// ─── Section ─────────────────────────────────────────────────────────────
export default function Plataforma() {
  return (
    <section id="plataforma" style={{ padding: "6rem 1.5rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div className="blur-in" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>La plataforma</span>
          <h2 className="section-title">
            Una plataforma que monitorea<br />en tiempo real la góndola
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 520, margin: "0.75rem auto 0" }}>
            Marcas y distribuidoras ven el mismo canal con perspectivas complementarias. Sin intermediarios, sin Excel, sin WhatsApp.
          </p>
        </div>

        {/* Two columns — each with monitor + info below */}
        <div className="plat-cols">
          {panels.map((p, idx) => (
            <div key={idx} className={`blur-in plat-col`} style={{ transitionDelay: `${idx * 120}ms` }}>

              {/* Label pill */}
              <div style={{ marginBottom: "1rem" }}>
                <span style={{
                  fontSize: "0.72rem", fontWeight: 700,
                  background: p.labelBg, color: p.labelColor,
                  border: `1px solid ${p.labelBorder}`,
                  padding: "5px 16px", borderRadius: 99,
                }}>{p.label}</span>
              </div>

              {/* Monitor */}
              <MonitorFrame src={p.src} alt={p.alt} url={p.url} />

              {/* Info below */}
              <div className="card" style={{ padding: "1.75rem", marginTop: "1.75rem" }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)", fontWeight: 800,
                  fontSize: "1.05rem", color: "var(--text)",
                  marginBottom: "1.25rem", lineHeight: 1.35,
                }}>
                  {p.heading}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: "1.5rem" }}>
                  {p.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>{f.icon}</span>
                      <span style={{ fontSize: "0.875rem", color: "var(--text)", lineHeight: 1.5 }}>{f.text}</span>
                    </div>
                  ))}
                </div>
                <a href="#contacto" className={`btn ${p.ctaClass}`} style={{ width: "100%", justifyContent: "center" }}>
                  {p.cta}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .plat-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .plat-col { display: flex; flex-direction: column; }
        @media (max-width: 860px) {
          .plat-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
