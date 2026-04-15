"use client";

// ─── Data ───────────────────────────────────────────────────────────────
const brands = [
  { name: "ACME",      color: "#f59e0b", bg: "#fffbeb" },
  { name: "Georgalos", color: "#3b82f6", bg: "#eff6ff" },
  { name: "Biomega",   color: "#8b5cf6", bg: "#f5f3ff" },
  { name: "TuMarca",   color: "#22c55e", bg: "#f0fdf4" },
];

const distros = [
  { name: "Dist. Norte ER",  cities: "Paraná · Diamante",    gondoleros: 6 },
  { name: "Dist. Litoral",   cities: "Concordia · Colón",    gondoleros: 5 },
  { name: "Dist. Centro",    cities: "Gualeguaychú · Rosario del Tala", gondoleros: 4 },
];

const fixerTasks = [
  { icon: "🛒", label: "Acomodo de góndola",       color: "#f59e0b" },
  { icon: "⚠️", label: "Alerta de falta de stock", color: "#ef4444" },
  { icon: "📐", label: "Medición trade marketing",  color: "#8b5cf6" },
  { icon: "🪟",  label: "Frenteo y exhibición",      color: "#3b82f6" },
];

const outputs = [
  { icon: "📊", label: "Presencia real en góndola",      color: "var(--g-700)" },
  { icon: "⚠️", label: "Alertas de quiebre al instante", color: "#ef4444"      },
  { icon: "📈", label: "Share of shelf verificado",       color: "var(--t-600)" },
  { icon: "💰", label: "Precio real en campo",            color: "#f59e0b"      },
  { icon: "🗺️", label: "Mapa de cobertura live",          color: "#8b5cf6"      },
];

// ─── Sub-components ──────────────────────────────────────────────────────

function PhoneNode({ delay }: { delay: number }) {
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{
        width: 26, height: 44,
        background: "#111",
        borderRadius: 6,
        border: "1.5px solid #333",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}>
        <div style={{
          position: "absolute", inset: 2, borderRadius: 4,
          background: "rgba(34,197,94,0.6)",
          animation: `phone-flash 3s ${delay}ms ease-in-out infinite`,
        }} />
        <div style={{
          position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
          width: 9, height: 1.5, borderRadius: 1, background: "#333",
        }} />
      </div>
      <div style={{ fontSize: "0.45rem", color: "var(--g-600)", fontWeight: 700 }}>📍</div>
    </div>
  );
}

function HubCenter() {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "2.5rem 1.5rem",
      background: "linear-gradient(160deg, var(--g-900) 0%, #0a3d20 60%, #061a0e 100%)",
      borderRadius: 20,
      border: "1px solid rgba(255,255,255,0.07)",
      position: "relative",
      overflow: "hidden",
      minHeight: 380,
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 280, height: 280,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        fontSize: "0.6rem", fontWeight: 700, color: "var(--g-400)",
        letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem",
      }}>
        Motor central
      </div>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.75rem" }}>
        {[1, 2, 3].map(r => (
          <div key={r} style={{
            position: "absolute",
            borderRadius: "50%",
            border: "1.5px solid rgba(34,197,94,0.4)",
            width: `${56 + r * 36}px`,
            height: `${56 + r * 36}px`,
            animation: `pulse-ring 2.4s ${r * 0.55}s ease-out infinite`,
          }} />
        ))}
        <div style={{
          width: 72, height: 72, borderRadius: "50%",
          background: "var(--grad-brand)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 48px rgba(22,163,74,0.5)",
          zIndex: 1, flexShrink: 0,
        }}>
          <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.2" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
      </div>
      <div style={{
        fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.5rem",
        color: "#fff", letterSpacing: "-0.03em", marginBottom: "0.35rem",
      }}>
        GondolApp
      </div>
      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginBottom: "2rem", textAlign: "center", lineHeight: 1.5 }}>
        IA · GPS · Validación<br />Gamificación · Reportes
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
        {["Reconocimiento visual", "Geolocalización", "Triple validación", "Push de alertas"].map(tag => (
          <span key={tag} style={{
            fontSize: "0.58rem", fontWeight: 600,
            background: "rgba(34,197,94,0.15)", color: "var(--g-400)",
            border: "1px solid rgba(34,197,94,0.25)",
            padding: "3px 10px", borderRadius: 99,
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

/** Vertical animated connector — same "pelotitas" as horizontal connectors */
function VConnector({ delays, dotColor = "var(--g-500)", glowColor = "var(--g-400)", fromOpacity = 0.5, toOpacity = 0.45 }:
  { delays: number[]; dotColor?: string; glowColor?: string; fromOpacity?: number; toOpacity?: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <div style={{
        width: 2, height: "100%",
        background: `linear-gradient(to bottom, rgba(22,163,74,${fromOpacity}), rgba(245,158,11,${toOpacity}))`,
        position: "relative",
      }}>
        {delays.map((d, i) => (
          <div key={i} style={{
            position: "absolute", left: "50%", transform: "translateX(-50%)",
            width: 7, height: 7, borderRadius: "50%",
            background: dotColor, boxShadow: `0 0 8px ${glowColor}`,
            animation: `flow-dot-v 2.1s ${d}ms linear infinite`,
          }} />
        ))}
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────
export default function Ecosistema() {
  return (
    <section id="ecosistema" style={{ padding: "6rem 1.5rem", background: "var(--bg-subtle)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div className="blur-in" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>El ecosistema</span>
          <h2 className="section-title">
            Marcas, distribuidoras, vendedores<br />y repositores — un solo sistema
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 560, margin: "0.75rem auto 0" }}>
            Cada foto que saca un vendedor alimenta la inteligencia que activa a los Fixers — el brazo ejecutor que acomoda, frentea y valida en el punto de venta.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            Master grid — 5 cols × 3 rows
            Row 1: actors | h-conn | hub | h-conn | intelligence
            Row 2: v-conn  |        | v-conn |      | v-conn
            Row 3: Fixers (span all 5)
        ════════════════════════════════════════════════════════════════ */}
        <div className="eco-grid">

          {/* ── ROW 1, COL 1: Left actors ── */}
          <div style={{ gridColumn: 1, gridRow: 1, display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Marcas */}
            <div className="blur-in card" style={{ padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.85rem" }}>
                <span style={{ fontSize: "1.1rem" }}>🏷️</span>
                <div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--g-600)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Marcas CPG</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text)" }}>Crean campañas</div>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {brands.map(b => (
                  <span key={b.name} style={{
                    fontSize: "0.68rem", fontWeight: 700,
                    background: b.bg, color: b.color,
                    border: `1px solid ${b.color}30`,
                    padding: "3px 10px", borderRadius: 99,
                  }}>{b.name}</span>
                ))}
              </div>
            </div>

            {/* Distribuidoras */}
            <div className="blur-in card" style={{ padding: "1.25rem", transitionDelay: "80ms" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.85rem" }}>
                <span style={{ fontSize: "1.1rem" }}>🏭</span>
                <div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--g-600)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Distribuidoras</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text)" }}>Coordinan la red</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {distros.map((d, i) => (
                  <div key={i} style={{
                    background: "var(--bg-subtle)", borderRadius: 8,
                    padding: "7px 10px", border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <div>
                      <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text)" }}>{d.name}</div>
                      <div style={{ fontSize: "0.58rem", color: "var(--text-muted)" }}>{d.cities}</div>
                    </div>
                    <div style={{
                      fontSize: "0.6rem", fontWeight: 700, color: "var(--g-700)",
                      background: "var(--g-50)", border: "1px solid rgba(22,163,74,0.2)",
                      padding: "2px 8px", borderRadius: 99,
                    }}>
                      {d.gondoleros} gondoleros
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gondoleros */}
            <div className="blur-in card" style={{ padding: "1.25rem", transitionDelay: "160ms" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.85rem" }}>
                <span style={{ fontSize: "1.1rem" }}>📱</span>
                <div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--g-600)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Gondoleros</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text)" }}>Capturan en campo</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "0.75rem", flexWrap: "wrap" }}>
                {[0, 600, 1200, 1800, 2400].map((delay, i) => (
                  <PhoneNode key={i} delay={delay} />
                ))}
                <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", lineHeight: 1.4, paddingBottom: 4 }}>
                  30 seg<br />por foto<br />+ GPS
                </div>
              </div>
            </div>

          </div>

          {/* ── ROW 1, COL 2: H connector left ── */}
          <div style={{ gridColumn: 2, gridRow: 1 }} className="eco-connector">
            <div style={{ flex: 1, height: 2, background: "linear-gradient(to right, rgba(22,163,74,0.1), rgba(22,163,74,0.5))", position: "relative", alignSelf: "center" }}>
              {[0, 800, 1600].map((d, i) => (
                <div key={i} style={{
                  position: "absolute", top: "50%", transform: "translateY(-50%)",
                  width: 7, height: 7, borderRadius: "50%",
                  background: "var(--g-500)", boxShadow: "0 0 8px var(--g-400)",
                  animation: `flow-dot-h 2.4s ${d}ms linear infinite`,
                }} />
              ))}
            </div>
          </div>

          {/* ── ROW 1, COL 3: Hub ── */}
          <div className="blur-in" style={{ gridColumn: 3, gridRow: 1, transitionDelay: "100ms" }}>
            <HubCenter />
          </div>

          {/* ── ROW 1, COL 4: H connector right ── */}
          <div style={{ gridColumn: 4, gridRow: 1 }} className="eco-connector">
            <div style={{ flex: 1, height: 2, background: "linear-gradient(to right, rgba(22,163,74,0.5), rgba(13,148,136,0.3))", position: "relative", alignSelf: "center" }}>
              {[200, 1000, 1800].map((d, i) => (
                <div key={i} style={{
                  position: "absolute", top: "50%", transform: "translateY(-50%)",
                  width: 7, height: 7, borderRadius: "50%",
                  background: "var(--t-400)", boxShadow: "0 0 8px rgba(45,212,191,0.6)",
                  animation: `flow-dot-h 2.4s ${d}ms linear infinite`,
                }} />
              ))}
            </div>
          </div>

          {/* ── ROW 1, COL 5: Intelligence ── */}
          <div className="blur-in" style={{ gridColumn: 5, gridRow: 1, transitionDelay: "200ms" }}>
            <div className="card" style={{ padding: "1.5rem", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "1.1rem" }}>🧠</span>
                <div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--t-600)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Inteligencia</div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text)" }}>Decisiones concretas</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {outputs.map((o, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    background: "var(--bg-subtle)",
                    borderRadius: 10, padding: "10px 12px",
                    border: "1px solid var(--border)",
                  }}>
                    <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{o.icon}</span>
                    <span style={{ fontSize: "0.78rem", fontWeight: 600, color: o.color, lineHeight: 1.3 }}>{o.label}</span>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: "1rem", padding: "10px 12px",
                background: "var(--g-50)", borderRadius: 10,
                border: "1px solid rgba(22,163,74,0.2)",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.1rem", color: "var(--g-700)" }}>Tiempo real</div>
                <div style={{ fontSize: "0.62rem", color: "var(--text-muted)", marginTop: 2 }}>desde que se sube la foto</div>
              </div>
            </div>
          </div>

          {/* ── ROW 2, COL 1: V connector — distribuidoras → fixers ── */}
          <div className="eco-vconn" style={{ gridColumn: 1, gridRow: 2 }}>
            <VConnector delays={[0, 700, 1400]} />
          </div>

          {/* ── ROW 2, COL 3: V connector — hub → fixers ── */}
          <div className="eco-vconn" style={{ gridColumn: 3, gridRow: 2 }}>
            <VConnector delays={[200, 900, 1600]} />
          </div>

          {/* ── ROW 2, COL 5: V connector — inteligencia → fixers ── */}
          <div className="eco-vconn" style={{ gridColumn: 5, gridRow: 2 }}>
            <VConnector delays={[400, 1100, 1800]} />
          </div>

          {/* ── ROW 3: Fixers — full width ── */}
          <div className="blur-in card fixer-row" style={{ gridColumn: "1 / -1", gridRow: 3, transitionDelay: "280ms" }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
              <span style={{ fontSize: "1.5rem" }}>🔧</span>
              <div>
                <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "#d97706", letterSpacing: "0.1em", textTransform: "uppercase" }}>Repositores · Fixers</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text)", whiteSpace: "nowrap" }}>Brazo ejecutor en góndola</div>
              </div>
            </div>

            <div className="fixer-divider" />

            {/* Tasks */}
            <div style={{ display: "flex", gap: 8, flex: 1, flexWrap: "wrap" }}>
              {fixerTasks.map((t, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "var(--bg-subtle)", borderRadius: 8,
                  padding: "8px 14px", border: "1px solid var(--border)",
                  flex: "1 1 auto",
                }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0 }}>{t.icon}</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: t.color, whiteSpace: "nowrap" }}>{t.label}</span>
                </div>
              ))}
            </div>

            <div className="fixer-divider" />

            {/* Payment badge */}
            <div style={{
              flexShrink: 0, textAlign: "center",
              background: "#fffbeb", borderRadius: 10, padding: "10px 18px",
              border: "1px solid #f59e0b33",
            }}>
              <div style={{ fontSize: "1.2rem", marginBottom: 3 }}>💰</div>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#92400e", lineHeight: 1.5 }}>
                Por misión<br />validada
              </div>
            </div>
          </div>

        </div>

        {/* Bottom note */}
        <p className="blur-in" style={{ textAlign: "center", marginTop: "2.5rem", fontSize: "0.82rem", color: "var(--slate-400)", transitionDelay: "300ms" }}>
          Foto validada → inteligencia en tiempo real → alerta al Fixer → corrección en góndola → nuevo dato · Ciclo continuo
        </p>

      </div>

      <style>{`
        .eco-grid {
          display: grid;
          grid-template-columns: 1fr 48px 1.4fr 48px 1fr;
          grid-template-rows: auto 56px auto;
          gap: 0;
          align-items: center;
        }
        .eco-connector {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 4px;
          align-self: center;
        }
        .eco-vconn {
          align-self: stretch;
        }
        @keyframes flow-dot-h {
          0%   { left: -4px;              opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { left: calc(100% + 4px);  opacity: 0; }
        }
        @keyframes flow-dot-v {
          0%   { top: -4px;               opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { top: calc(100% + 4px);   opacity: 0; }
        }
        .fixer-row {
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          border-top: 2px solid #f59e0b22;
        }
        .fixer-divider {
          width: 1px;
          align-self: stretch;
          background: var(--border);
          flex-shrink: 0;
        }
        @media (max-width: 960px) {
          .eco-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .eco-connector { display: none !important; }
          .eco-vconn     { display: none !important; }
          .fixer-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .fixer-divider {
            width: 100%;
            height: 1px;
            align-self: auto;
          }
        }
      `}</style>
    </section>
  );
}
