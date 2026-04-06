const leaderboard = [
  { rank: 1, name: "CapitanHielo",   pts: 25480, ciudad: "Paraná",         medal: "🥇" },
  { rank: 2, name: "NorteñoMax",     pts: 19840, ciudad: "Concordia",      medal: "🥈" },
  { rank: 3, name: "VendedoraRocio", pts: 16230, ciudad: "Colón",          medal: "🥉" },
  { rank: 4, name: "ElCaminante",    pts: 12450, ciudad: "Gualeguaychú",   medal: ""   },
  { rank: 5, name: "LaVentajosa",    pts:  9820, ciudad: "Paraná",         medal: ""   },
];

const logros = [
  { emoji: "🎯", title: "Primera foto aprobada", sub: '"Messi empezó así también."',   ok: true  },
  { emoji: "🚀", title: "Velocista",              sub: "10 fotos en un día.",           ok: true  },
  { emoji: "🔥", title: "Racha imparable",        sub: "6 días seguidos con actividad.",ok: false },
  { emoji: "⭐", title: "Top 3 provincial",       sub: "Llegar al podio del ranking.",  ok: false },
];

const canjes = [
  { emoji: "📱", label: "Crédito celular",    pts: 300  },
  { emoji: "⛽", label: "Nafta YPF",          pts: 500  },
  { emoji: "💸", label: "Transferencia",      pts: 1000 },
  { emoji: "🛒", label: "Vale de compras",    pts: 800  },
];

const planes = [
  { marca: "Georgalos",  color: "#f59e0b", bg: "#fffbeb", text: "2× puntos en Paraná",              periodo: "Esta semana",    bonus: "+2x" },
  { marca: "ACME",       color: "#3b82f6", bg: "#eff6ff", text: "500 pts extra por góndola lateral", periodo: "15–30 Abr",     bonus: "+500" },
  { marca: "Biomega",    color: "#8b5cf6", bg: "#f5f3ff", text: "Premio top vendedor $5.000",        periodo: "Abril 2026",    bonus: "🏆"  },
  { marca: "TuMarca",    color: "#22c55e", bg: "#f0fdf4", text: "Creá tu propio plan de incentivos", periodo: "Cuando quieras", bonus: "+" },
];

export default function Gamificacion() {
  return (
    <section id="gamificacion" style={{ padding: "5rem 1.5rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div className="blur-in" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>Gamificación</span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: "var(--text)",
            lineHeight: 1.15,
          }}>
            El vendedor que más trabaja,<br />más gana.
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 520, margin: "0.75rem auto 0" }}>
            Puntos, rankings provinciales, logros desbloqueables y premios reales. La red que ya existe, motivada como nunca.
          </p>
        </div>

        {/* Bento grid top: leaderboard (left tall) + logros + canjes (right) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>

          {/* LEADERBOARD — dark, spans 2 rows */}
          <div className="blur-in" style={{
            gridRow: "1 / 3",
            borderRadius: 18,
            background: "linear-gradient(160deg, var(--g-900) 0%, #0a3d20 60%, #061a0e 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            padding: "2rem",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Glow */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "1.5rem" }}>🏆</span>
              <div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--g-400)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Ranking</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.25rem", color: "#fff", lineHeight: 1.2 }}>
                  Top vendedores — Entre Ríos
                </h3>
              </div>
            </div>

            {/* Period selector visual */}
            <div style={{ display: "flex", gap: 6, marginBottom: "1.25rem" }}>
              {["Semana","Mes","Todo el tiempo"].map((p, i) => (
                <span key={p} style={{
                  fontSize: "0.65rem", fontWeight: 600,
                  padding: "4px 10px", borderRadius: 99,
                  background: i === 2 ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.06)",
                  color: i === 2 ? "var(--g-400)" : "rgba(255,255,255,0.4)",
                  border: i === 2 ? "1px solid rgba(34,197,94,0.3)" : "1px solid transparent",
                }}>{p}</span>
              ))}
            </div>

            {/* Top 3 podium */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {[leaderboard[1], leaderboard[0], leaderboard[2]].map((v, i) => {
                const heights = [80, 100, 68];
                const isCenter = i === 1;
                return (
                  <div key={v.rank} style={{ textAlign: "center", flex: 1 }}>
                    <div style={{ fontSize: isCenter ? "1.6rem" : "1.2rem", marginBottom: 4 }}>{v.medal}</div>
                    <div style={{ fontSize: isCenter ? "0.72rem" : "0.65rem", fontWeight: 700, color: "#fff", marginBottom: 2 }}>{v.name}</div>
                    <div style={{ fontSize: "0.6rem", color: "var(--g-400)", fontWeight: 800, marginBottom: 6 }}>{v.pts.toLocaleString("es-AR")} pts</div>
                    <div style={{
                      height: heights[i],
                      borderRadius: "8px 8px 0 0",
                      background: isCenter
                        ? "linear-gradient(180deg, rgba(34,197,94,0.5), rgba(34,197,94,0.15))"
                        : "rgba(255,255,255,0.07)",
                      border: isCenter ? "1px solid rgba(34,197,94,0.3)" : "1px solid rgba(255,255,255,0.06)",
                    }} />
                  </div>
                );
              })}
            </div>

            {/* Full list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {leaderboard.map((v, i) => (
                <div key={v.rank} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: i < 3 ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
                  borderRadius: 10, padding: "8px 12px",
                  border: i === 0 ? "1px solid rgba(34,197,94,0.25)" : "1px solid rgba(255,255,255,0.04)",
                }}>
                  <span style={{ fontSize: "0.85rem", width: 20, textAlign: "center" }}>{v.medal || `#${v.rank}`}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: i === 0 ? "var(--g-300, #86efac)" : "#fff" }}>{v.name}</div>
                    <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.35)" }}>{v.ciudad}</div>
                  </div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "0.85rem", color: i === 0 ? "var(--g-400)" : "rgba(255,255,255,0.6)" }}>
                    {v.pts.toLocaleString("es-AR")}
                  </div>
                  <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)" }}>pts</div>
                </div>
              ))}
            </div>

            <p style={{ marginTop: "1rem", fontSize: "0.68rem", color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
              Rankings por provincia · actualización diaria
            </p>
          </div>

          {/* LOGROS */}
          <div className="card blur-in" style={{ padding: "1.75rem", transitionDelay: "100ms" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem" }}>
              <span style={{ fontSize: "1.2rem" }}>🎖️</span>
              <div>
                <div style={{ fontSize: "0.62rem", fontWeight: 700, color: "var(--g-600)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Logros</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.05rem", color: "var(--text)" }}>
                  Desbloqueá insignias
                </h3>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {logros.map((l, i) => (
                <div key={i} style={{
                  borderRadius: 12, padding: "0.85rem",
                  background: l.ok ? "var(--g-50)" : "var(--slate-50)",
                  border: `1px solid ${l.ok ? "rgba(22,163,74,0.2)" : "var(--border)"}`,
                  opacity: l.ok ? 1 : 0.6,
                }}>
                  <div style={{ fontSize: "1.4rem", marginBottom: 4 }}>{l.emoji}</div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>{l.title}</div>
                  <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontStyle: "italic", marginBottom: 6 }}>{l.sub}</div>
                  <span style={{
                    fontSize: "0.58rem", fontWeight: 700,
                    color: l.ok ? "var(--g-700)" : "var(--slate-500)",
                    background: l.ok ? "rgba(22,163,74,0.12)" : "rgba(0,0,0,0.05)",
                    padding: "2px 8px", borderRadius: 99,
                  }}>
                    {l.ok ? "✓ Desbloqueado" : "🔒 Bloqueado"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CANJES */}
          <div className="card blur-in" style={{ padding: "1.75rem", transitionDelay: "200ms" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem" }}>
              <span style={{ fontSize: "1.2rem" }}>🎁</span>
              <div>
                <div style={{ fontSize: "0.62rem", fontWeight: 700, color: "var(--t-600)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Canjes</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.05rem", color: "var(--text)" }}>
                  Puntos = plata real
                </h3>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {canjes.map((c, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "var(--bg-subtle)", borderRadius: 10,
                  padding: "10px 14px", border: "1px solid var(--border)",
                }}>
                  <span style={{ fontSize: "1.1rem" }}>{c.emoji}</span>
                  <span style={{ flex: 1, fontSize: "0.82rem", fontWeight: 600, color: "var(--text)" }}>{c.label}</span>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "0.9rem", color: "var(--g-700)" }}>{c.pts}</div>
                    <div style={{ fontSize: "0.55rem", color: "var(--text-muted)" }}>puntos</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* PLANES DE MARCAS — full width */}
        <div className="card blur-in" style={{ padding: "2rem", transitionDelay: "200ms" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "1.3rem" }}>🏷️</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--g-600)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Planes de incentivos</div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.15rem", color: "var(--text)", lineHeight: 1.2 }}>
                Las marcas activan sus propios planes de incentivos
              </h3>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", maxWidth: 380, lineHeight: 1.6 }}>
              Doble puntos en una zona, premio al top vendedor, bonus por campaña específica. Las marcas diseñan el incentivo, la red lo ejecuta.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {planes.map((p, i) => (
              <div key={i} style={{
                borderRadius: 14, padding: "1.1rem",
                background: p.bg,
                border: `1px solid ${p.color}30`,
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: -16, right: -16,
                  width: 64, height: 64, borderRadius: "50%",
                  background: `${p.color}18`,
                }} />
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 900, color: p.color, marginBottom: 6 }}>
                  {p.bonus}
                </div>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>{p.marca}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: 8 }}>{p.text}</div>
                <span style={{
                  fontSize: "0.6rem", fontWeight: 600,
                  background: `${p.color}20`, color: p.color,
                  padding: "2px 8px", borderRadius: 99,
                }}>
                  {p.periodo}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #gamificacion > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          #gamificacion > div > div:nth-child(2) > div:first-child {
            grid-row: auto !important;
          }
        }
        @media (max-width: 640px) {
          #gamificacion > div > div:last-child > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
