"use client";

import { useState } from "react";

/* Estimador de /precios, portado de la maqueta (TIERS, redCost).

   Modalidad A — Con tu equipo o una repositora: $100.000 por campaña con
   200 misiones incluidas y $500 la adicional.
   Modalidad B — Con la red de distribuidoras: escalones de 350 / 280 /
   220 / 180 puntos por comercio, con 1 punto = $10. */

const TIERS: [number, number][] = [
  [500, 350],
  [1500, 280],
  [3000, 220],
  [Infinity, 180],
];

const PT = 10; // 1 punto = $10

const fmt = (n: number) => "$" + Math.round(n).toLocaleString("es-AR");
const num = (n: number) => n.toLocaleString("es-AR");

function redCost(n: number) {
  let left = n;
  let pts = 0;
  const parts: [number, number][] = [];
  for (const [size, price] of TIERS) {
    if (left <= 0) break;
    const take = Math.min(left, size);
    pts += take * price;
    parts.push([take, price]);
    left -= take;
  }
  return { pts, parts };
}

const MODOS = ["Red de distribuidoras", "Mi equipo o repositora"];
const TAM_RED = [100, 500, 1500, 3000, 6000];
const TAM_PROPIO = [100, 200, 400, 800, 1500];

const PILL = {
  cursor: "pointer", minHeight: 48, padding: "0 20px", borderRadius: 999,
  border: "1px solid var(--line)", fontFamily: "inherit", fontSize: 15, fontWeight: 700,
} as const;

export default function Estimador() {
  const [modo, setModo] = useState(0);
  const [tam, setTam] = useState(1);

  const tamanos = modo === 0 ? TAM_RED : TAM_PROPIO;
  const n = tamanos[tam];

  let titulo: string, total: string, sub: string, nota: string;
  let filas: { k: string; v: string }[];

  if (modo === 0) {
    const c = redCost(n);
    const ars = c.pts * PT;
    filas = c.parts.map(([take, price]) => ({
      k: `${num(take)} comercios a ${price} pts`,
      v: fmt(take * price * PT),
    }));
    filas.push({ k: "Promedio por comercio", v: fmt(ars / n) });
    filas.push({ k: "De eso, para los vendedores", v: fmt(n * 100 * PT) });
    titulo = `Campaña con red · ${num(n)} comercios`;
    total = fmt(ars);
    sub = `${num(c.pts)} puntos reservados sobre el tope · lo no usado vuelve`;
    nota = "Cada comercio paga el precio del escalón en que cae por su orden en la campaña. Un comercio rechazado no se cobra.";
  } else {
    const extra = Math.max(0, n - 200);
    const ars = 100000 + extra * 500;
    filas = [
      { k: "Mínimo por campaña (200 misiones)", v: fmt(100000) },
      { k: `${num(extra)} misiones adicionales a $500`, v: fmt(extra * 500) },
      { k: "Promedio por misión", v: fmt(ars / n) },
    ];
    titulo = `Equipo propio o repositora · ${num(n)} misiones`;
    total = fmt(ars);
    sub = n <= 200
      ? "Entra dentro del mínimo · tu primera campaña puede ser gratis"
      : "El mínimo se cobra al activar; las adicionales, del saldo en el momento";
    nota = "En campañas continuas el mínimo se cobra una sola vez. Usuarios ilimitados. Sin saldo, la campaña se pausa y se reanuda al recargar.";
  }

  return (
    <section id="estimador" style={{ padding: "112px 0" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 400px", minWidth: 0, maxWidth: 560 }}>
          <div className="kick">Estimador</div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(34px, 4.2vw, 58px)" }}>¿Cuánto cuesta tu campaña?</h2>
          <p className="lead" style={{ margin: "18px 0 0", fontSize: 17 }}>
            Elegí quién ejecuta y cuántos comercios querés relevar. Es una estimación: el precio final es el que te
            muestra la pantalla al enviar la campaña.
          </p>

          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-2)", marginTop: 32 }}>Quién ejecuta</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
            {MODOS.map((m, i) => {
              const on = i === modo;
              return (
                <button key={m} type="button" aria-pressed={on}
                  onClick={() => { setModo(i); setTam(1); }}
                  style={{ ...PILL, background: on ? "var(--ink)" : "#FFFFFF", color: on ? "#FFFFFF" : "var(--ink)" }}>
                  {m}
                </button>
              );
            })}
          </div>

          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-2)", marginTop: 28 }}>
            {modo === 0 ? "Comercios a relevar (tope)" : "Misiones estimadas"}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
            {tamanos.map((z, i) => {
              const on = i === tam;
              return (
                <button key={z} type="button" aria-pressed={on} onClick={() => setTam(i)}
                  style={{ ...PILL, background: on ? "var(--ink)" : "#FFFFFF", color: on ? "#FFFFFF" : "var(--ink)", fontVariantNumeric: "tabular-nums" }}>
                  {num(z)}
                </button>
              );
            })}
          </div>
        </div>

        <div key={`${modo}-${tam}`} style={{ flex: "1 1 400px", minWidth: 0, background: "var(--ink)", color: "#FFFFFF", borderRadius: 28, padding: "clamp(24px, 3vw, 40px)", animation: "gin .3s ease" }}>
          <div className="kick" style={{ color: "var(--mint)" }}>{titulo}</div>
          <div style={{ fontWeight: 800, fontSize: "clamp(44px, 5vw, 72px)", letterSpacing: "-0.05em", lineHeight: 1, marginTop: 14, fontVariantNumeric: "tabular-nums" }}>
            {total}
          </div>
          <div style={{ fontSize: 14, color: "var(--on-dark)", marginTop: 8, fontWeight: 600 }}>{sub}</div>

          <div style={{ marginTop: 28, borderTop: "1px solid var(--line-on-dark)" }}>
            {filas.map((r) => (
              <div key={r.k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--line-on-dark)", fontSize: 14 }}>
                <span style={{ color: "var(--on-dark)", fontWeight: 600 }}>{r.k}</span>
                <span style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>{r.v}</span>
              </div>
            ))}
          </div>

          <p style={{ margin: "18px 0 0", fontSize: 13, color: "#9FB0A6", lineHeight: 1.5 }}>{nota}</p>
        </div>
      </div>
    </section>
  );
}
