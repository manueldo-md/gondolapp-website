// Arrow components
function ArrowRight() {
  return (
    <div className="snake-arrow-h" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 0.25rem", paddingTop: "4rem", color: "var(--teal)" }}>
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );
}
function ArrowLeft() {
  return (
    <div className="snake-arrow-h" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 0.25rem", paddingTop: "4rem", color: "var(--teal)" }}>
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M19 12H5M12 5l-7 7 7 7" />
      </svg>
    </div>
  );
}

// Mini card component
function FlowCard({ step, color, icon, title, desc, children }: {
  step: string; color: string; icon: string; title: string; desc: string; children?: React.ReactNode;
}) {
  return (
    <div className="card-hover" style={{ padding: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", border: `2px solid ${color}`, flexShrink: 0 }}>
          {icon}
        </div>
        <span style={{ background: color, color: "#fff", fontSize: "0.62rem", fontWeight: 700, padding: "2px 8px", borderRadius: 99 }}>{step}</span>
      </div>
      <h4 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--green-dark)", marginBottom: "0.4rem" }}>{title}</h4>
      <p style={{ color: "#5a6672", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>{desc}</p>
      {children}
    </div>
  );
}

export default function Ecosistema() {
  return (
    <section id="ecosistema" style={{ padding: "6rem 1.5rem" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center fade-up" style={{ marginBottom: "3rem" }}>
          <div className="pill" style={{ marginBottom: "1rem" }}>Cómo funciona en la práctica</div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--green-dark)", lineHeight: 1.15, fontFamily: "var(--font-syne)" }}>
            Una campaña real, paso a paso
          </h2>
          <p style={{ maxWidth: 600, margin: "1rem auto 0", color: "#5a6672", fontSize: "1rem", lineHeight: 1.7 }}>
            La marca <strong style={{ color: "var(--green-dark)" }}>ACME</strong> quiere saber cómo están exhibidos sus aceites en los autoservicios de Entre Ríos.
          </p>
        </div>

        {/* ── ROW 1: Left → Right ── */}
        <div className="snake-row fade-up" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", alignItems: "start", gap: 0, marginBottom: 0 }}>
          <FlowCard step="PASO 1" color="#f59e0b" icon="🏷️" title="ACME crea la campaña" desc="Desde el panel, configura zona, categoría y período.">
            <div style={{ background: "#f8fcfa", border: "1px solid #d0e4d8", borderRadius: 10, padding: "0.7rem", fontSize: "0.72rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: "0.5rem" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b" }} />
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ color: "#bbb", fontSize: "0.6rem", marginLeft: 4 }}>panel.gondolapp.com</span>
              </div>
              <div style={{ color: "#5a6672", lineHeight: 1.7 }}>
                <div style={{ background: "#fff", border: "1px solid #e0e8e3", borderRadius: 6, padding: "5px 8px", marginBottom: 3 }}><span style={{ color: "#aaa" }}>Zona:</span> Paraná, Colón, Gualeguaychú</div>
                <div style={{ background: "#fff", border: "1px solid #e0e8e3", borderRadius: 6, padding: "5px 8px", marginBottom: 3 }}><span style={{ color: "#aaa" }}>Canal:</span> Autoservicios</div>
                <div style={{ background: "linear-gradient(135deg,var(--green-mid),var(--teal))", color: "#fff", borderRadius: 6, padding: "5px 8px", textAlign: "center", fontWeight: 600, marginTop: 4 }}>Lanzar campaña →</div>
              </div>
            </div>
          </FlowCard>

          <ArrowRight />

          <FlowCard step="PASO 2" color="#3b82f6" icon="📱" title="Vendedores reciben la misión" desc="En su próxima visita, sacan foto de la góndola. 30 segundos.">
            <div style={{ background: "#1a1a2e", borderRadius: 12, padding: "0.7rem", maxWidth: 180 }}>
              <div style={{ fontSize: "0.6rem", color: "#aaa", marginBottom: "0.35rem", textAlign: "center" }}>Nueva misión</div>
              <div style={{ background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: 6, padding: "0.4rem", marginBottom: "0.35rem", textAlign: "center" }}>
                <div style={{ fontSize: "0.68rem", color: "#93c5fd", fontWeight: 600 }}>📸 Góndola Aceites</div>
                <div style={{ fontSize: "0.58rem", color: "#aaa", marginTop: 2 }}>Autoservicio Don Juan</div>
              </div>
              <div style={{ display: "flex", gap: 2, justifyContent: "center", marginBottom: 3 }}>
                {["#f0a0a0","#a0c0f0","#f0d0a0"].map((c,i) => <div key={i} style={{ width: 10, height: 16, background: c, borderRadius: 1 }} />)}
                <div style={{ width: 10, height: 16, border: "1px dashed #ef4444", borderRadius: 1 }} />
                <div style={{ width: 10, height: 16, background: "#a0e0b0", borderRadius: 1 }} />
              </div>
              <div style={{ fontSize: "0.58rem", color: "#86efac", textAlign: "center" }}>✓ Foto enviada</div>
            </div>
          </FlowCard>

          <ArrowRight />

          <FlowCard step="PASO 3" color="#22c55e" icon="🤖" title="La IA analiza cada foto" desc="Identifica productos, mide presencia, detecta quiebres y precios.">
            <div style={{ background: "#f8fcfa", border: "1px solid #d0e4d8", borderRadius: 10, padding: "0.7rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.3rem", marginBottom: "0.5rem" }}>
                {[["62%","Share"],["$2.890","Precio"]].map(([v,l],i) => (
                  <div key={i} style={{ background: "#fff", borderRadius: 6, padding: "0.3rem", textAlign: "center" }}>
                    <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--green-dark)" }}>{v}</div>
                    <div style={{ fontSize: "0.55rem", color: "#5a6672" }}>{l}</div>
                  </div>
                ))}
                <div style={{ background: "#fef2f2", borderRadius: 6, padding: "0.3rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: "#ef4444" }}>1</div>
                  <div style={{ fontSize: "0.55rem", color: "#ef4444" }}>Quiebre</div>
                </div>
              </div>
              <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, padding: "4px 6px", fontSize: "0.65rem", color: "#ef4444", fontWeight: 500 }}>
                ⚠️ Mezcla 900ml — <strong>Vacío</strong>
              </div>
            </div>
          </FlowCard>
        </div>

        {/* Connector: turn right */}
        <div className="snake-connector fade-up" style={{ display: "flex", justifyContent: "flex-end", paddingRight: "calc(16.66% - 14px)", margin: "0.25rem 0" }}>
          <svg width="32" height="40" fill="none" stroke="var(--teal)" strokeWidth="2.5" viewBox="0 0 32 40">
            <path d="M16 0 V20 Q16 32 4 32 H4" strokeLinecap="round" />
            <polygon points="0,28 6,32 0,36" fill="var(--teal)" stroke="none" />
          </svg>
        </div>

        {/* ── ROW 2: Right → Left ── */}
        <div className="snake-row snake-row-2 fade-up" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", alignItems: "start", gap: 0, marginBottom: 0 }}>
          <FlowCard step="PASO 5" color="#8b5cf6" icon="🔧" title="Fixer ejecuta y reporta" desc="Acomoda la góndola y sube foto antes/después. La IA valida.">
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              {[["ANTES","#ef4444","#fecaca"],["DESPUÉS","#22c55e","#bbf7d0"]].map(([label, textColor, borderColor], gi) => (
                <div key={gi} style={{ textAlign: "center", position: "relative" }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, color: textColor, marginBottom: 3 }}>{label}</div>
                  <div style={{ background: "#fff", border: `2px solid ${borderColor}`, borderRadius: 8, padding: "0.4rem" }}>
                    <div style={{ display: "flex", gap: 2, justifyContent: "center", marginBottom: 2 }}>
                      {["#f0a0a0","#a0c0f0","#f0d0a0"].map((c,i) => (
                        <div key={i} style={{ width: 10, height: 16, background: c, borderRadius: 1, transform: gi === 0 ? (i===0 ? "rotate(-5deg)" : i===1 ? "rotate(3deg)" : "") : "" }} />
                      ))}
                    </div>
                  </div>
                  {gi === 1 && (
                    <div style={{ position: "absolute", top: 0, right: -6, width: 16, height: 16, borderRadius: "50%", background: "#22c55e", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="9" height="9" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FlowCard>

          <ArrowLeft />

          <FlowCard step="ALERTA" color="#ef4444" icon="🚨" title="Quiebre detectado" desc="Alerta automática + fixer asignado para corregir en el punto de venta.">
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "0.5rem", marginBottom: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 3 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ fontSize: "0.62rem", fontWeight: 700, color: "#ef4444" }}>ALERTA EN VIVO</span>
              </div>
              <div style={{ fontSize: "0.68rem", color: "#374151", fontWeight: 600 }}>Góndola vacía</div>
              <div style={{ fontSize: "0.62rem", color: "#6b7280" }}>Mezcla 900ml · Paraná</div>
            </div>
            <div style={{ background: "#f5f3ff", border: "1px solid #ddd6fe", borderRadius: 8, padding: "0.5rem" }}>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, color: "#7c3aed" }}>🔧 FIXER ASIGNADO</div>
              <div style={{ fontSize: "0.62rem", color: "#6b7280" }}>Misión: acomodar + foto antes/después</div>
            </div>
          </FlowCard>

          <ArrowLeft />

          <FlowCard step="PASO 4" color="#22c55e" icon="📋" title="Plataforma procesa" desc="Cruza resultados, genera alertas y despacha acciones correctivas automáticas.">
            <div style={{ background: "#f8fcfa", border: "1px solid #d0e4d8", borderRadius: 8, padding: "0.5rem", fontSize: "0.7rem", color: "#5a6672", lineHeight: 1.6 }}>
              <div style={{ marginBottom: 3 }}><span style={{ color: "var(--green-dark)", fontWeight: 600 }}>✓</span> 42 fotos procesadas</div>
              <div style={{ marginBottom: 3 }}><span style={{ color: "var(--green-dark)", fontWeight: 600 }}>✓</span> 3 SKUs analizados</div>
              <div style={{ marginBottom: 3 }}><span style={{ color: "#ef4444", fontWeight: 600 }}>⚠</span> 6 quiebres detectados</div>
              <div><span style={{ color: "#7c3aed", fontWeight: 600 }}>→</span> 6 fixers despachados</div>
            </div>
          </FlowCard>
        </div>

        {/* Connector: turn left */}
        <div className="snake-connector fade-up" style={{ display: "flex", justifyContent: "flex-start", paddingLeft: "calc(16.66% - 14px)", margin: "0.25rem 0" }}>
          <svg width="32" height="40" fill="none" stroke="var(--teal)" strokeWidth="2.5" viewBox="0 0 32 40">
            <path d="M16 0 V20 Q16 32 28 32 H28" strokeLinecap="round" />
            <polygon points="32,28 26,32 32,36" fill="var(--teal)" stroke="none" />
          </svg>
        </div>

        {/* ── ROW 3: Result ── */}
        <div className="fade-up">
          <div className="card-hover" style={{ padding: "2rem", borderColor: "var(--teal)", borderWidth: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#d1fae5,#a7f3d0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", border: "2px solid var(--green-dark)", flexShrink: 0 }}>📊</div>
              <div>
                <span style={{ background: "var(--green-dark)", color: "#fff", fontSize: "0.65rem", fontWeight: 700, padding: "2px 10px", borderRadius: 99 }}>RESULTADO</span>
                <h4 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--green-dark)", marginTop: "0.25rem", fontFamily: "var(--font-syne)" }}>ACME recibe el reporte completo de campaña</h4>
              </div>
            </div>

            <div style={{ background: "#f8fcfa", border: "1px solid #d0e4d8", borderRadius: 14, padding: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--green-dark)" }}>Reporte de campaña — ACME Aceites</div>
                  <div style={{ fontSize: "0.68rem", color: "#9ca3af" }}>Entre Ríos · 15-30 Mar 2026 · 47 comercios relevados</div>
                </div>
                <div style={{ background: "#d1fae5", padding: "4px 10px", borderRadius: 8, fontSize: "0.68rem", fontWeight: 600, color: "var(--green-dark)" }}>Completada ✓</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                {[["89%","Presencia general"],["58%","Share of shelf"],["$2.840","Precio promedio"],["6","Quiebres resueltos","#ef4444"]].map(([v,l,c],i) => (
                  <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "0.7rem 0.5rem", textAlign: "center", border: `1px solid ${c ? "#fecaca" : "#e0e8e3"}` }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: c || "var(--green-dark)" }}>{v}</div>
                    <div style={{ fontSize: "0.62rem", color: c || "#5a6672", marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "0.75rem" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#5a6672", marginBottom: "0.5rem" }}>Share de góndola por producto</div>
                {[["Girasol 1.5L","72%","72%","var(--green-dark)","var(--green-mid)"],["Oliva 500ml","55%","55%","var(--teal)","var(--teal-light)"],["Mezcla 900ml","41%","41%","#f59e0b","#fbbf24","#f59e0b"]].map(([name,pct,w,c1,c2,tc],i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                    <span style={{ fontSize: "0.68rem", color: "#5a6672", width: 90, flexShrink: 0 }}>{name}</span>
                    <div style={{ flex: 1, background: "#e8f5f0", borderRadius: 4, height: 16 }}>
                      <div style={{ width: w, height: "100%", background: `linear-gradient(90deg,${c1},${c2})`, borderRadius: 4 }} />
                    </div>
                    <span style={{ fontSize: "0.68rem", fontWeight: 700, color: tc || "var(--green-dark)", width: 30 }}>{pct}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid #e0e8e3", paddingTop: "0.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.68rem", color: "#9ca3af" }}>47 fotos verificadas por IA · 6 correcciones de fixer</span>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--teal)" }}>Descargar PDF →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
