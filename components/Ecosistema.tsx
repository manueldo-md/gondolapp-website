import type { ReactNode } from "react";

const steps = [
  {
    num: "01",
    color: "#f59e0b",
    title: "ACME crea la campaña",
    sub: "La marca define zona, SKUs y período desde el panel web. En 5 minutos la campaña está activa.",
    visual: (
      <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem", fontSize: "0.72rem" }}>
        <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
          {["#ef4444","#f59e0b","#22c55e"].map((c,i) => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
          <span style={{ color: "var(--slate-400)", fontSize: "0.6rem", marginLeft: 4 }}>panel.gondolapp.com</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {[["Zona","Paraná, Colón, Gualeguaychú"],["Canal","Autoservicios"],["SKUs","Aceites ACME (3)"],["Período","15–30 Mar"]].map(([k,v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", background: "var(--bg-subtle)", padding: "5px 8px", borderRadius: 6 }}>
              <span style={{ color: "var(--slate-400)" }}>{k}</span>
              <span style={{ fontWeight: 600, color: "var(--text)" }}>{v}</span>
            </div>
          ))}
          <div style={{ background: "var(--grad-brand)", color: "#fff", borderRadius: 8, padding: "7px", textAlign: "center", fontWeight: 700, marginTop: 2 }}>
            Lanzar campaña →
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    color: "#3b82f6",
    title: "Vendedores capturan en campo",
    sub: "En cada visita, el vendedor abre la PWA y saca una foto. 30 segundos. El GPS registra la ubicación exacta.",
    visual: (
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div style={{ width: 90, background: "#0f0f0f", borderRadius: 14, border: "2px solid #222", padding: 6, flexShrink: 0 }}>
          <div style={{ background: "#1a1a1a", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ height: 60, background: "linear-gradient(180deg,#c8e6c9,#a5d6a7)", position: "relative" }}>
              <div style={{ position: "absolute", inset: 3, border: "1.5px solid rgba(34,197,94,0.7)", borderRadius: 4 }} />
              <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1.5, background: "rgba(34,197,94,0.8)" }} />
            </div>
            <div style={{ padding: "5px 6px", background: "#111" }}>
              <div style={{ fontSize: "0.5rem", color: "#86efac", fontWeight: 700, marginBottom: 2 }}>📍 GPS verificado</div>
              <div style={{ height: 2.5, background: "#222", borderRadius: 2 }}>
                <div style={{ width: "65%", height: "100%", background: "linear-gradient(90deg,#22c55e,#2dd4bf)", borderRadius: 2 }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 8, padding: "6px 8px" }}>
            <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>Misión asignada</div>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text)" }}>📸 Góndola Aceites</div>
          </div>
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "6px 8px" }}>
            <div style={{ fontSize: "0.62rem", color: "#3b82f6", fontWeight: 600 }}>✓ Foto enviada · 14:32</div>
            <div style={{ fontSize: "0.58rem", color: "#6b7280" }}>Autoservicio Don Juan</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "03",
    color: "#22c55e",
    title: "La IA analiza cada imagen",
    sub: "En segundos: identifica productos, mide presencia en góndola, detecta quiebres y lee precios. Triple validación automática.",
    visual: (
      <div style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 8 }}>
          {[["62%","Share","var(--g-700)"],["$2.890","Precio","var(--text)"],["1","Quiebre","#ef4444"]].map(([v,l,c]) => (
            <div key={l} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 8, padding: "6px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.1rem", color: c as string }}>{v}</div>
              <div style={{ fontSize: "0.55rem", color: "var(--text-muted)" }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "6px 8px", display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{ fontSize: "0.85rem" }}>⚠️</span>
          <div>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#ef4444" }}>Quiebre detectado</div>
            <div style={{ fontSize: "0.58rem", color: "#6b7280" }}>Mezcla 900ml — posición vacía</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "04",
    color: "#8b5cf6",
    title: "Alertas automáticas + fixer asignado",
    sub: "Cada quiebre activa una alerta y despacha un ejecutor independiente. La distribuidora ve todo en tiempo real en su panel.",
    visual: (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "0.65rem 0.9rem", display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444", animation: "pulse 1.5s infinite", flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "#ef4444" }}>Quiebre · Mezcla 900ml · Paraná</div>
            <div style={{ fontSize: "0.6rem", color: "#6b7280" }}>Autoservicio Don Juan · hace 2 min</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <svg width="14" height="18" fill="none" viewBox="0 0 14 18"><path d="M7 2v14M7 16l-3-3M7 16l3-3" stroke="var(--g-600)" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 10, padding: "0.65rem 0.9rem", display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: "1rem" }}>🔧</span>
          <div>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "#7c3aed" }}>Fixer asignado · 2.3 km</div>
            <div style={{ fontSize: "0.6rem", color: "#6b7280" }}>ETA 45 min · foto antes/después</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "05",
    color: "#0d9488",
    title: "Reporte completo de campaña",
    sub: "ACME recibe el análisis con presencia real, share de góndola, precios verificados y correcciones ejecutadas. Datos que nunca tuvieron.",
    visual: (
      <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--text)" }}>Reporte ACME Aceites</div>
          <span style={{ background: "var(--g-50)", color: "var(--g-700)", fontSize: "0.58rem", fontWeight: 700, padding: "2px 8px", borderRadius: 99 }}>Completada ✓</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 8 }}>
          {[["89%","Presencia","var(--g-700)"],["58%","Share","var(--t-600)"],["47","Pdv relevados","var(--g-700)"],["6","Quiebres → resueltos","#f59e0b"]].map(([v,l,c]) => (
            <div key={l} style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 8, padding: "7px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.1rem", color: c as string }}>{v}</div>
              <div style={{ fontSize: "0.55rem", color: "var(--text-muted)", lineHeight: 1.3 }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--g-50)", border: "1px solid rgba(22,163,74,0.2)", borderRadius: 8, padding: "6px 8px", fontSize: "0.62rem", color: "var(--g-700)", fontWeight: 600, textAlign: "center" }}>
          Descargar PDF completo →
        </div>
      </div>
    ),
  },
];

function Connector() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "4px 0", position: "relative" }}>
      <div style={{ width: 2, height: 40, backgroundImage: "repeating-linear-gradient(to bottom, var(--g-400) 0, var(--g-400) 4px, transparent 4px, transparent 8px)" }} />
    </div>
  );
}

export default function Ecosistema() {
  return (
    <section id="ecosistema" style={{ padding: "6rem 1.5rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <div className="blur-in" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="section-title">
            De la necesidad de una marca<br />al dato en góndola, en 5 pasos
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 500, margin: "0.75rem auto 0" }}>
            <strong style={{ color: "var(--g-700)" }}>ACME</strong> quiere saber cómo están exhibidos sus aceites en los autoservicios de Entre Ríos.
          </p>
        </div>

        {/* Timeline */}
        <div>
          {steps.map((step, i) => (
            <div key={i}>
              <div className="blur-in" style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "1.5rem", alignItems: "start", transitionDelay: `${i * 80}ms` }}>
                {/* Step number */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: step.color + "18",
                    border: `2px solid ${step.color}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "0.9rem",
                    color: step.color,
                    flexShrink: 0,
                  }}>
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div style={{ paddingBottom: "0.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "center" }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1.3 }}>
                        {step.title}
                      </h3>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.7 }}>{step.sub}</p>
                    </div>
                    <div>{step.visual}</div>
                  </div>
                </div>
              </div>

              {/* Connector (not after last) */}
              {i < steps.length - 1 && <Connector />}
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 700px) {
          #ecosistema .blur-in > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
