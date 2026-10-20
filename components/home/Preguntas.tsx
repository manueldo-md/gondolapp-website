"use client";

import { useState } from "react";
import { FAQ } from "@/lib/home-data";

export default function Preguntas() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(0);

  const items = FAQ[tab].items;

  return (
    <section id="faq" style={{ padding: "112px 0 120px" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
        <div style={{ flex: "1 1 300px", minWidth: 0 }}>
          <div className="kick">Preguntas</div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(32px, 3.8vw, 52px)" }}>Lo que todos preguntan.</h2>

          <div role="tablist" aria-label="Preguntas por actor" style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 26 }}>
            {FAQ.map((f, i) => {
              const on = i === tab;
              return (
                <button key={f.label} type="button" role="tab" aria-selected={on}
                  onClick={() => { setTab(i); setOpen(0); }}
                  style={{
                    cursor: "pointer", minHeight: 44, padding: "0 16px", borderRadius: 999,
                    border: "1px solid var(--line)",
                    background: on ? "var(--ink)" : "#FFFFFF", color: on ? "#FFFFFF" : "var(--ink)",
                    fontFamily: "inherit", fontSize: 14, fontWeight: 700,
                  }}>
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ flex: "2 1 520px", minWidth: 0, borderTop: "1px solid var(--line)" }}>
          {items.map((it, i) => {
            const abierto = i === open;
            return (
              <div key={it.q} style={{ borderBottom: "1px solid var(--line)" }}>
                <button
                  type="button"
                  onClick={() => setOpen(abierto ? -1 : i)}
                  aria-expanded={abierto}
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
                    background: "none", border: 0, padding: "22px 0", fontFamily: "inherit", fontSize: 19,
                    fontWeight: 700, textAlign: "left", cursor: "pointer", color: "var(--ink)", minHeight: 44,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {it.q}
                  <span aria-hidden="true" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 22, fontWeight: 400, color: "var(--primary)" }}>
                    {abierto ? "−" : "+"}
                  </span>
                </button>
                {abierto && (
                  <p style={{ margin: "0 0 24px", fontSize: 16, lineHeight: 1.6, color: "var(--text-2)", maxWidth: 660, animation: "gin 0.3s ease" }}>
                    {it.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
