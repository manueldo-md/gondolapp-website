import Image from "next/image";

const bullets = [
  "Panel de control de todos tus vendedores en tiempo real",
  "Alertas automáticas de quiebre: sabés antes que el cliente",
  "Relevamiento profesional para presentar a tus marcas",
  "El argumento que te faltaba para captar nuevas representaciones",
  "Historial de campañas y rendimiento por zona",
];

const comercios = [
  { nombre: "Almacén El Puente",     dir: "Rivadavia 438, Colón",         tipo: "Almacén",   visita: "hace 2 h",    estado: "Validado" },
  { nombre: "Minimercado La Familia",dir: "Urquiza 91, Concordia",         tipo: "Almacén",   visita: "hace 3 h",    estado: "Validado" },
  { nombre: "Distribuidora Sanchez", dir: "",                              tipo: "Mayorista",  visita: "hace 1 día",  estado: "Validado" },
  { nombre: "Kiosco San Martín",     dir: "",                              tipo: "Otro",       visita: "hace 4 h",    estado: "Sin validar" },
  { nombre: "Super Díaz",            dir: "Belgrano 204, Gualeguaychú",    tipo: "Almacén",    visita: "hace 22 h",   estado: "Validado" },
  { nombre: "Dietética Natural",     dir: "",                              tipo: "Otro",       visita: "hace 1 día",  estado: "Validado" },
  { nombre: "Mercado Don Tomás",     dir: "Ibarra 50, Paraná",             tipo: "Otro",       visita: "hace 1 día",  estado: "Validado" },
];

const tipoColor: Record<string, string> = {
  Almacén:  "#dbeafe",
  Mayorista: "#ede9fe",
  Otro:      "#f3f4f6",
};
const tipoText: Record<string, string> = {
  Almacén:  "#1d4ed8",
  Mayorista: "#7c3aed",
  Otro:      "#374151",
};

export default function ParaDistribuidoras() {
  return (
    <section id="distribuidoras" style={{ padding: "5rem 1.5rem", background: "var(--bg-subtle)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

        {/* Stacked visuals */}
        <div className="blur-in" style={{ position: "relative" }}>

          {/* Back: main dashboard screenshot */}
          <div style={{
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid var(--border)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.09)",
          }}>
            <div style={{
              background: "var(--slate-100)",
              borderBottom: "1px solid var(--border)",
              padding: "9px 14px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <div style={{ display: "flex", gap: 5 }}>
                {["#ef4444","#f59e0b","#22c55e"].map((c,i) => (
                  <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{ flex: 1, background: "#fff", borderRadius: 5, padding: "3px 10px", fontSize: "0.62rem", color: "var(--slate-400)", textAlign: "center", border: "1px solid var(--border)" }}>
                app.gondolapp.com/distribuidora
              </div>
            </div>
            <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
              <Image
                src="/screenshots/dashboard-dist.jpg"
                alt="Dashboard distribuidora GondolApp"
                fill
                style={{ objectFit: "cover", objectPosition: "top left" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Front: comercios CSS mockup — floated bottom-right */}
          <div style={{
            position: "absolute",
            bottom: -36,
            right: -24,
            width: "72%",
            background: "#fff",
            borderRadius: 12,
            border: "1px solid var(--border)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.14)",
            overflow: "hidden",
          }}>
            {/* Header */}
            <div style={{ padding: "10px 14px", borderBottom: "1px solid var(--border)" }}>
              <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "var(--text)" }}>Comercios</div>
              <div style={{ fontSize: "0.62rem", color: "var(--text-muted)", marginTop: 1 }}>
                13 comercios · 11 validados · 2 sin validar
              </div>
            </div>
            {/* Table header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 80px 90px 80px",
              padding: "5px 14px",
              background: "var(--slate-50)",
              borderBottom: "1px solid var(--border)",
            }}>
              {["COMERCIO","TIPO","ÚLTIMA VISITA","ESTADO"].map(h => (
                <div key={h} style={{ fontSize: "0.55rem", fontWeight: 700, color: "var(--slate-400)", letterSpacing: "0.04em" }}>{h}</div>
              ))}
            </div>
            {/* Rows */}
            {comercios.map((c, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "1fr 80px 90px 80px",
                padding: "6px 14px",
                borderBottom: i < comercios.length - 1 ? "1px solid var(--slate-100)" : "none",
                alignItems: "center",
                background: i % 2 === 0 ? "#fff" : "var(--slate-50)",
              }}>
                <div>
                  <div style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text)", lineHeight: 1.2 }}>{c.nombre}</div>
                  {c.dir && <div style={{ fontSize: "0.56rem", color: "var(--text-muted)" }}>{c.dir}</div>}
                </div>
                <div>
                  <span style={{
                    fontSize: "0.58rem",
                    fontWeight: 500,
                    background: tipoColor[c.tipo],
                    color: tipoText[c.tipo],
                    padding: "2px 7px",
                    borderRadius: 99,
                  }}>{c.tipo}</span>
                </div>
                <div style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>⏱ {c.visita}</div>
                <div style={{ fontSize: "0.6rem", fontWeight: 600, color: c.estado === "Validado" ? "var(--g-600)" : "#f59e0b" }}>
                  {c.estado === "Validado" ? "✓ " : "⏳ "}{c.estado}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text — right column, extra bottom padding so floating card doesn't overlap */}
        <div style={{ paddingBottom: "3rem" }}>
          <span className="badge blur-in" style={{ marginBottom: "1rem", display: "inline-flex" }}>Para distribuidoras</span>
          <h2 className="section-title blur-in" style={{ marginBottom: "1.5rem", transitionDelay: "80ms" }}>
            La distribuidora que llega con datos gana el contrato
          </h2>
          <p className="blur-in" style={{ color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.5rem", fontSize: "0.95rem", transitionDelay: "160ms" }}>
            Tus vendedores ya visitan 50 comercios por semana. Con GondolApp, cada visita genera datos que antes se perdían en chats de WhatsApp.
          </p>
          <div className="blur-in" style={{ transitionDelay: "240ms" }}>
            {bullets.map((b, i) => (
              <p key={i} style={{ display: "flex", gap: 10, color: "var(--text)", fontSize: "0.9rem", marginBottom: "0.6rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--g-600)", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>{b}
              </p>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        @media(max-width:900px) {
          #distribuidoras > div { grid-template-columns: 1fr !important; }
          #distribuidoras > div > div:first-child { margin-bottom: 3.5rem; }
        }
      `}</style>
    </section>
  );
}
