"use client";

import { useState } from "react";
import { EXECS, MODES, METRICS } from "@/lib/home-data";

const PILL = {
  cursor: "pointer",
  minHeight: 48,
  padding: "0 20px",
  borderRadius: 999,
  border: "1px solid var(--line)",
  fontFamily: "inherit",
  fontSize: 15,
  fontWeight: 700,
} as const;

export default function Armador() {
  const [exec, setExec] = useState(0);
  const [mode, setMode] = useState(1);
  const [mets, setMets] = useState<Record<string, boolean>>({
    presencia: true,
    quiebre: true,
    precio: true,
    frentes: false,
    exhibicion: false,
  });

  const e = EXECS[exec];
  const m = MODES[mode];
  const fields = METRICS.filter((x) => mets[x.id]);

  return (
    <section id="armador" style={{ padding: "96px 0 112px" }}>
      <div className="wrap">
        <div style={{ maxWidth: 820 }}>
          <div className="kick">Probalo</div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(32px, 3.8vw, 52px)" }}>
            Elegí qué medir y mirá cómo lo ve quien sale a la calle.
          </h2>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 56, marginTop: 48, alignItems: "flex-start" }}>
          {/* ── Controles ── */}
          <div style={{ flex: "1 1 440px", minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-2)" }}>1 · ¿Quién la ejecuta?</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
              {EXECS.map((it, i) => {
                const on = i === exec;
                return (
                  <button key={it.t} type="button" aria-pressed={on} onClick={() => setExec(i)}
                    style={{ ...PILL, background: on ? "var(--ink)" : "#FFFFFF", color: on ? "#FFFFFF" : "var(--ink)" }}>
                    {it.t}
                  </button>
                );
              })}
            </div>

            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-2)", marginTop: 28 }}>2 · ¿Qué querés medir?</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
              {METRICS.map((it) => {
                const on = !!mets[it.id];
                return (
                  <button key={it.id} type="button" aria-pressed={on}
                    onClick={() => setMets((p) => ({ ...p, [it.id]: !p[it.id] }))}
                    style={{ ...PILL, display: "inline-flex", alignItems: "center", gap: 8, padding: "0 18px", background: on ? "var(--mint)" : "#FFFFFF", color: "var(--ink)" }}>
                    <span aria-hidden="true" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13 }}>{on ? "✓" : "+"}</span>
                    {it.t}
                  </button>
                );
              })}
            </div>

            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-2)", marginTop: 28 }}>3 · ¿Una vez o seguimiento?</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
              {MODES.map((it, i) => {
                const on = i === mode;
                return (
                  <button key={it.t} type="button" aria-pressed={on} onClick={() => setMode(i)}
                    style={{ ...PILL, background: on ? "var(--ink)" : "#FFFFFF", color: on ? "#FFFFFF" : "var(--ink)" }}>
                    {it.t}
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid var(--line)" }}>
              <div style={{ fontWeight: 800, fontSize: 24, letterSpacing: "-0.03em" }}>{e.t} · {m.t}</div>
              <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.6, color: "var(--text-2)", maxWidth: 520 }}>{e.how} {m.how}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginTop: 22 }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 30, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}>{fields.length}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", fontWeight: 600 }}>preguntas</div>
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 30, letterSpacing: "-0.04em" }}>GPS + foto</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", fontWeight: 600 }}>validación</div>
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 30, letterSpacing: "-0.04em" }}>{e.data}</div>
                  <div style={{ fontSize: 13, color: "var(--text-2)", fontWeight: 600 }}>datos del comercio</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Teléfono que se arma solo ── */}
          <div style={{ flex: "0 1 380px", minWidth: 0, display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ width: 340, maxWidth: "100%", background: "var(--ink)", borderRadius: 48, padding: 12, boxShadow: "0 60px 100px -50px rgba(15,26,20,0.6)" }}>
              <div style={{ background: "#FFFFFF", borderRadius: 38, padding: "26px 20px 20px", minHeight: 600, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "var(--text-2)", fontWeight: 600 }}>Misión · 100 pts</span>
                  <span style={{ fontSize: 11, fontWeight: 700, background: "var(--mint)", padding: "4px 10px", borderRadius: 999 }}>{m.badge}</span>
                </div>

                <div style={{ fontWeight: 800, fontSize: 19, lineHeight: 1.2, letterSpacing: "-0.02em" }}>Exhibición Aceite de Coco</div>

                <div style={{ borderRadius: 18, padding: 16, display: "flex", alignItems: "center", gap: 12, background: "var(--tint-green)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>Foto de la góndola</div>
                    <div style={{ fontSize: 12, color: "var(--text-2)" }}>GPS · inclinación · calidad</div>
                  </div>
                </div>

                {fields.map((f) => (
                  <div key={f.id} style={{ background: "#F7F9F7", borderRadius: 16, padding: 14, animation: "gin 0.35s ease" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>{f.q}</span>
                      <span style={{ flex: "0 0 auto", fontFamily: "var(--font-mono), monospace", fontSize: 10, color: "var(--text-2)" }}>{f.type}</span>
                    </div>

                    {f.kind === "chips" && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                        {f.opts?.map((o) => (
                          <span key={o} style={{ fontSize: 12, fontWeight: 600, padding: "6px 11px", borderRadius: 999, background: "#FFFFFF" }}>{o}</span>
                        ))}
                      </div>
                    )}

                    {f.kind === "yesno" && (
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 10 }}>
                        <span style={{ textAlign: "center", fontSize: 13, fontWeight: 700, padding: 9, borderRadius: 10, background: "#FFFFFF" }}>Sí</span>
                        <span style={{ textAlign: "center", fontSize: 13, fontWeight: 700, padding: 9, borderRadius: 10, background: "#FFFFFF" }}>No</span>
                      </div>
                    )}

                    {f.kind === "input" && (
                      <div style={{ marginTop: 10, background: "#FFFFFF", borderRadius: 10, padding: "10px 12px", fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "var(--text-2)" }}>
                        {f.ph}
                      </div>
                    )}
                  </div>
                ))}

                {fields.length === 0 && (
                  <div style={{ fontSize: 14, color: "var(--text-2)", textAlign: "center", padding: "20px 8px" }}>
                    Elegí al menos una métrica.
                  </div>
                )}

                <div style={{ marginTop: "auto", background: "var(--primary)", color: "#FFFFFF", borderRadius: 16, minHeight: 52, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15 }}>
                  Enviar misión
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
