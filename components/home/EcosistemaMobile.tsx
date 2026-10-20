"use client";

import { useState } from "react";
import { MNODES, MEDGES, ECO_TYPES, ECO } from "@/lib/eco-data";

/* Cadena de valor del tablero mobile: 8 nodos fijos en 4 niveles,
   aristas SVG con puntos animados y tap para abrir la ficha.
   En celular no se renderiza la simulación de fuerzas (brief §6.3). */

const W = 350;
const H = 430;

const idx = Object.fromEntries(MNODES.map((n) => [n.id, n]));

const ARISTAS = MEDGES.map(([a, b], i) => {
  const A = idx[a], B = idx[b];
  const my = (A.y + B.y) / 2;
  return {
    id: `me${i}`,
    d: `M${A.x} ${A.y} C ${A.x} ${my}, ${B.x} ${my}, ${B.x} ${B.y}`,
    c: ECO_TYPES[B.kind].c,
    dur: `${2.6 + ((i * 7) % 4) * 0.5}s`,
    beg: `-${(i * 13) % 5}s`,
  };
});

function Icono({ kind, color }: { kind: string; color: string }) {
  /* En em para que acompañe el escalado del nodo en pantallas angostas */
  const p = { width: "1.1em", height: "1.1em", viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (kind === "marca") return <svg {...p}><path d="M3 21V10l6 3v-3l6 3v-3l6 3v8z" /><path d="M17 10V4h3v7" /></svg>;
  if (kind === "distri") return <svg {...p}><path d="M3 6h11v10H3z" /><path d="M14 9h4l3 3v4h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>;
  if (kind === "repo") return <svg {...p}><path d="M4 3v18M20 3v18" /><path d="M4 9h16M4 15h16M4 21h16" /></svg>;
  if (kind === "datos") return <svg {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>;
  return <svg {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>;
}

export default function EcosistemaMobile() {
  const [sel, setSel] = useState("gond");
  const n = idx[sel] ?? MNODES[0];
  const t = ECO_TYPES[n.kind];

  return (
    <>
      <style>{`
        /* Los tres nodos del medio juntos necesitan mas ancho del que hay
           en un celular angosto. Esta variable los encoge en bloque. */
        .eco-cadena { --eco-k: 1; }
        @media (max-width: 520px) { .eco-cadena { --eco-k: 0.84; } }
        @media (max-width: 360px) { .eco-cadena { --eco-k: 0.76; } }
      `}</style>

      <div className="eco-cadena" style={{
        position: "relative", width: "100%", aspectRatio: `${W}/${H}`, marginTop: 28,
        backgroundImage: "radial-gradient(#D8DFD9 1.1px, transparent 1.1px)",
        backgroundSize: "22px 22px", borderRadius: 20,
      }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
          <defs>
            {ARISTAS.map((e) => <path key={e.id} id={e.id} d={e.d} />)}
          </defs>
          {ARISTAS.map((e) => (
            <g key={e.id}>
              <path d={e.d} fill="none" stroke="#B9C4BB" strokeWidth="2" strokeDasharray="4 8" strokeLinecap="round" style={{ animation: "gdash 1.4s linear infinite" }} />
              <circle r="4.5" fill={e.c}>
                <animateMotion dur={e.dur} begin={e.beg} repeatCount="indefinite">
                  <mpath href={`#${e.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
        </svg>

        {MNODES.map((nd) => {
          const c = ECO_TYPES[nd.kind].c;
          const on = sel === nd.id;
          const esMarca = nd.kind === "marca";
          const esDatos = nd.kind === "datos";
          const esInter = nd.kind === "distri" || nd.kind === "repo";
          /* Padding en em: así una sola variable (--eco-k) encoge el nodo
             entero y los tres del medio dejan de solaparse en pantallas
             angostas, sin aplanar la jerarquía de tamaños. */
          const st = esMarca
            ? { bg: c, fg: "#FFFFFF", bd: "0", fs: 15, pad: "0.67em 0.93em" }
            : esDatos
              ? { bg: "var(--ink)", fg: "#FFFFFF", bd: "0", fs: 13, pad: "0.77em 1.08em" }
              : esInter
                ? { bg: "#FFFFFF", fg: c, bd: `2px solid ${c}`, fs: 13, pad: "0.54em 0.85em" }
                : { bg: ECO.light[nd.kind] ?? "#F2F4F2", fg: "var(--ink)", bd: `${nd.kind === "equipo" ? "1.2px dashed " : "1.2px solid "}${c}`, fs: 12, pad: "0.5em 0.83em" };
          return (
            <button
              key={nd.id}
              type="button"
              onClick={() => setSel(nd.id)}
              aria-pressed={on}
              style={{
                position: "absolute",
                left: `${(nd.x / W) * 100}%`,
                top: `${(nd.y / H) * 100}%`,
                transform: "translate(-50%,-50%)",
                cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6,
                padding: st.pad, borderRadius: 12, background: st.bg, color: st.fg, border: st.bd,
                fontFamily: "inherit", fontWeight: 800,
                fontSize: `calc(${st.fs}px * var(--eco-k, 1))`,
                whiteSpace: "nowrap", letterSpacing: "-0.02em",
                boxShadow: on ? `0 0 0 4px ${c}44, 0 10px 30px -12px rgba(15,26,20,.4)` : "0 1px 2px rgba(15,26,20,.08)",
              }}
            >
              <Icono kind={nd.kind} color={esMarca || esDatos ? "#FFFFFF" : c} />
              {nd.label}
            </button>
          );
        })}
      </div>

      {/* Ficha del nodo elegido */}
      <div key={sel} style={{ marginTop: 18, background: "#FFFFFF", borderRadius: 20, boxShadow: "0 0 0 1px var(--line)", padding: 20, animation: "gin .3s ease" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 12, height: 12, borderRadius: 4, background: t.c, display: "block" }} />
          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-2)" }}>{t.t}</span>
        </div>
        <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.03em", marginTop: 8 }}>{n.label}</div>
        {([["Qué hace", t.que], ["Función en la red", t.fun], ["Valor que agrega", t.val]] as const).map(([lbl, v]) => (
          <div key={lbl}>
            <div style={{ marginTop: 12, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: t.c, fontWeight: 800 }}>{lbl}</div>
            <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.5 }}>{v}</p>
          </div>
        ))}
      </div>

      <p style={{ margin: "14px 0 0", fontSize: 12, color: "#5B6B61", lineHeight: 1.5 }}>
        El punto viaja en la dirección de la acción y lleva el color de quien recibe. En la versión de escritorio la red completa es interactiva.
      </p>
    </>
  );
}
