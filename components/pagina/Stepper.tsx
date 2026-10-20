"use client";

import { useState } from "react";
import Image from "next/image";
import type { Asset } from "@/lib/assets";

/* Lista de pasos a la izquierda y el detalle a la derecha.
   Lo usan Marcas ("Cómo se configura", 6 pasos) y Distribuidoras
   ("Cuando una marca te manda una campaña", 5 pasos). */

export type Paso = {
  n: string;
  t: string;
  d: string;
  tags?: string[];
  img?: Asset;
};

export default function Stepper({
  id, kicker, titulo, pasos, inicial = 0, fondo, total,
}: {
  id?: string;
  kicker: string;
  titulo: string;
  pasos: Paso[];
  inicial?: number;
  fondo?: string;
  total?: string;
}) {
  const [i, setI] = useState(inicial);
  const p = pasos[i];
  const n = total ?? String(pasos.length).padStart(2, "0");

  return (
    <section id={id} style={{ padding: "120px 0", background: fondo ?? "var(--tint-green)" }}>
      <div className="wrap">
        <div style={{ maxWidth: 900 }}>
          <div className="kick">{kicker}</div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)" }}>{titulo}</h2>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 56, marginTop: 56, alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 320px", minWidth: 0, display: "flex", flexDirection: "column", borderTop: "1px solid var(--line-dark)" }}>
            {pasos.map((s, k) => (
              <button
                key={s.n}
                type="button"
                onClick={() => setI(k)}
                aria-pressed={k === i}
                style={{
                  cursor: "pointer", display: "flex", alignItems: "center", gap: 16, width: "100%",
                  textAlign: "left", fontFamily: "inherit", background: "transparent",
                  color: k === i ? "var(--primary)" : "var(--ink)",
                  border: 0, borderBottom: "1px solid var(--line-dark)", padding: "18px 0",
                  fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", minHeight: 44,
                }}
              >
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, fontWeight: 400, color: "var(--text-2)" }}>{s.n}</span>
                {s.t}
              </button>
            ))}
          </div>

          <div key={i} style={{ flex: "1.4 1 520px", minWidth: 0, animation: "gin 0.35s ease" }}>
            <div className="kick">Paso {p.n} / {n}</div>
            <h3 style={{ margin: "12px 0 0", fontWeight: 800, fontSize: "clamp(28px, 3.2vw, 44px)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>{p.t}</h3>
            <p className="lead" style={{ margin: "16px 0 0", fontSize: 17 }}>{p.d}</p>

            {p.tags && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 20 }}>
                {p.tags.map((t) => (
                  <span key={t} style={{ fontSize: 13, fontWeight: 700, padding: "8px 14px", borderRadius: 999, background: "#FFFFFF" }}>{t}</span>
                ))}
              </div>
            )}

            {p.img && (
              <Image
                className="shot" src={p.img.src} alt={p.t} width={p.img.w} height={p.img.h}
                sizes="(max-width: 900px) 92vw, 55vw" style={{ marginTop: 32, height: "auto" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
