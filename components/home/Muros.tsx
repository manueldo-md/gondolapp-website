"use client";

import { useState } from "react";
import {
  AMBAR,
  CHOQUES,
  CIERRES,
  COMPUERTA,
  GONDOLEROS,
  PERMISOS_INICIALES,
  ROJO,
  VERDE,
  VIOLETA,
  chips,
  type Chip,
  type Permisos,
} from "@/lib/muros-data";

/* Sección "Privacidad": el escenario de los muros.

   Todo el movimiento es CSS (ver @keyframes wFlow/wHit/wOk/wBang en
   globals.css). React sólo decide qué chips existen, según los cuatro
   permisos que el visitante enciende y apaga abajo.

   El escenario es decorativo: va con aria-hidden. Lo que un lector de
   pantalla necesita —qué está compartiendo la distribuidora— está en la
   lista de abajo y en los botones con aria-pressed. */

/* ══════════ íconos ══════════ */
const sv = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

const Persona = (p: { size?: number }) => (
  <svg {...sv} width={p.size ?? 12} height={p.size ?? 12}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);
const Camion = (p: { size?: number }) => (
  <svg {...sv} width={p.size ?? 12} height={p.size ?? 12}>
    <path d="M3 6h11v10H3z" />
    <path d="M14 9h4l3 3v4h-7z" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);
const Escudo = (p: { size?: number }) => (
  <svg {...sv} width={p.size ?? 12} height={p.size ?? 12}>
    <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const Fabrica = (p: { size?: number }) => (
  <svg {...sv} width={p.size ?? 12} height={p.size ?? 12}>
    <path d="M3 21V10l6 3v-3l6 3v-3l6 3v8z" />
    <path d="M17 10V4h3v7" />
  </svg>
);
const Candado = () => (
  <svg {...sv} width={11} height={11} strokeWidth={2.4}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const ICONOS = { fabrica: Fabrica, camion: Camion, escudo: Escudo };

/* ══════════ piezas del escenario ══════════ */

/* Pastilla con el nombre de cada columna */
function Rotulo({ color, children, ...pos }: { color: string; children: React.ReactNode } & React.CSSProperties) {
  return (
    <div
      style={{
        position: "absolute",
        ...pos,
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "5px 11px",
        borderRadius: 999,
        background: "#FFFFFF",
        border: `1px solid ${color}33`,
        color,
        fontFamily: "var(--font-mono), monospace",
        fontSize: 10.5,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        boxShadow: "0 6px 14px -10px rgba(15,26,20,.3)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </div>
  );
}

/* Barra de hierro con remaches. Horizontal o vertical. */
function Muro({ vertical, ...pos }: { vertical?: boolean } & React.CSSProperties) {
  return (
    <div
      style={{
        position: "absolute",
        ...pos,
        borderRadius: 4,
        backgroundColor: "#2E3540",
        backgroundImage: "radial-gradient(circle, #8B96A6 1.2px, transparent 1.4px)",
        backgroundSize: vertical ? "10px 14px" : "14px 10px",
        backgroundPosition: vertical ? "5px 7px" : "7px 5px",
        boxShadow: vertical
          ? "3px 0 0 #11151A, 10px 0 18px -8px rgba(0,0,0,.6)"
          : "0 3px 0 #11151A, 0 10px 18px -8px rgba(0,0,0,.6)",
      }}
    />
  );
}

/* El candado que se apoya sobre un muro */
function Cerradura({ left, top }: { left: string; top: string }) {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        transform: "translate(-50%, -50%)",
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: "var(--ink)",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 0 3px #F2F4F7",
        zIndex: 2,
      }}
    >
      <Candado />
    </div>
  );
}

/* Carril punteado por donde viajan los datos */
function Carril({ color, ...pos }: { color: string } & React.CSSProperties) {
  const vertical = pos.width === 2;
  return (
    <div
      style={{
        position: "absolute",
        ...pos,
        backgroundImage: `linear-gradient(${vertical ? 180 : 90}deg, ${color} 0 4px, transparent 4px 12px)`,
        backgroundSize: vertical ? "2px 12px" : "12px 2px",
        animation: "gflow 1.4s linear infinite",
        opacity: 0.9,
      }}
    />
  );
}

/* Un dato viajando. Si pasa, llega con ✓; si no, choca y rebota con ✕.
   En el celular van las variantes "M", que comprimen el viaje en el
   primer 40% del ciclo para que no se amontonen. */
function Dato({ c, fuente = 10, movil }: { c: Chip; fuente?: number; movil?: boolean }) {
  const m = movil ? "M" : "";
  return (
    <div
      className={c.pasa ? "w-pasa" : "w-choca"}
      style={
        {
          position: "absolute",
          "--x0": c.x0,
          "--y0": c.y0,
          "--x1": c.x1,
          "--y1": c.y1,
          "--xb": c.xb,
          "--yb": c.yb,
          left: c.x0,
          top: c.y0,
          transform: "translate(-50%, -50%)",
          animation: `${c.pasa ? "wFlow" : "wHit"}${m} ${c.dur} linear ${c.delay} infinite both`,
          pointerEvents: "none",
          zIndex: 3,
        } as React.CSSProperties
      }
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 9px",
          borderRadius: 999,
          background: "#FFFFFF",
          border: `1.2px solid ${c.color}`,
          color: c.color,
          fontFamily: "var(--font-mono), monospace",
          fontSize: fuente,
          whiteSpace: "nowrap",
          boxShadow: "0 8px 16px -8px rgba(15,26,20,.45)",
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: c.color }} />
        {c.label}
      </span>
      {c.marca && (
        <span
          className="w-marca"
          style={{
            position: "absolute",
            left: "100%",
            top: "50%",
            marginLeft: 6,
            transform: "translateY(-50%)",
            width: 20,
            height: 20,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 800,
            color: "#FFFFFF",
            background: c.marca.color,
            opacity: 0,
            animation: `${c.pasa ? "wOk" : "wBangP"}${m} ${c.dur} linear ${c.delay} infinite both`,
          }}
        >
          {c.marca.signo}
        </span>
      )}
    </div>
  );
}

/* Un intento que se estrella contra el hierro */
function Intento({
  h,
  corto,
  fuente = 10,
  movil,
}: {
  h: (typeof CHOQUES)[number];
  corto?: boolean;
  fuente?: number;
  movil?: boolean;
}) {
  const m = movil ? "M" : "";
  return (
    <div
      className="w-choca"
      style={
        {
          position: "absolute",
          "--x0": h.x0,
          "--y0": h.y0,
          "--x1": h.x1,
          "--y1": h.y1,
          "--xb": h.xb,
          "--yb": h.yb,
          left: h.x0,
          top: h.y0,
          transform: "translate(-50%, -50%)",
          animation: `wHit${m} ${h.dur} ease-in-out ${h.delay} infinite both`,
          pointerEvents: "none",
          zIndex: 4,
        } as React.CSSProperties
      }
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 9px",
          borderRadius: 999,
          background: "#FFFFFF",
          border: `1.2px solid ${h.color}`,
          color: h.color,
          fontFamily: "var(--font-mono), monospace",
          fontSize: fuente,
          whiteSpace: "nowrap",
          boxShadow: "0 8px 16px -8px rgba(15,26,20,.45)",
        }}
      >
        {corto ? h.labelCorto : h.label}
      </span>
      <span
        className="w-marca"
        style={{
          position: "absolute",
          left: "50%",
          top: -14,
          transform: "translateX(-50%)",
          width: 22,
          height: 22,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 800,
          color: "#FFFFFF",
          background: ROJO,
          opacity: 0,
          animation: `wBang${m} ${h.dur} linear ${h.delay} infinite both`,
        }}
      >
        ✕
      </span>
    </div>
  );
}

/* Fila de la compuerta: ✓ verde o ✕ gris */
function FilaCompuerta({ texto, on, fuente = 11 }: { texto: string; on: boolean; fuente?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 7,
        fontSize: fuente,
        fontWeight: 700,
        color: on ? VERDE : "#9AA3AE",
        background: on ? "#E3F5EA" : "#F2F4F7",
        borderRadius: 8,
        padding: "5px 8px",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: fuente }}>{on ? "✓" : "✕"}</span>
      {texto}
    </div>
  );
}

const TRAMA = {
  backgroundImage: "radial-gradient(#D8DEDD 1.2px, transparent 1.2px)",
  backgroundSize: "24px 24px",
};

const RECINTO = (acento: string): React.CSSProperties => ({
  position: "absolute",
  borderRadius: 18,
  border: "1px solid var(--line)",
  background: "#FFFFFF",
  boxShadow: "0 24px 48px -36px rgba(15,26,20,.35)",
  borderTop: `3px solid ${acento}`,
});

/* ══════════ escenario ancho (el del tablero) ══════════ */
function EscenaAncha({ p, cs }: { p: Permisos; cs: Chip[] }) {
  return (
    <div
      aria-hidden="true"
      style={{ position: "relative", width: "100%", aspectRatio: "1300 / 640", marginTop: 48, ...TRAMA }}
    >
      <Rotulo color={VERDE} left="3%" top="6%" transform="translateY(-50%)">
        <Persona />
        Gondoleros y fixers
      </Rotulo>
      <Rotulo color={AMBAR} left="22%" top="6%" transform="translateY(-50%)">
        <Camion />
        Distribuidoras
      </Rotulo>
      <Rotulo color="#0F1A14" left="51%" top="6%" transform="translateY(-50%)">
        <Escudo />
        Compuerta
      </Rotulo>
      <Rotulo color={VIOLETA} left="70%" top="6%" transform="translateY(-50%)">
        <Fabrica />
        Marcas
      </Rotulo>

      {GONDOLEROS.map((g) => (
        <Carril key={g.y} color="#B9C4BB" left="9%" top={g.y} width="12%" height={2} marginTop={-1} />
      ))}
      <Carril color="#C9B8A0" left="40%" top="33%" width="30%" height={2} marginTop={-1} />
      <Carril color="#C9B8A0" left="40%" top="74%" width="30%" height={2} marginTop={-1} />

      {GONDOLEROS.map((g) => (
        <div
          key={g.label}
          style={{
            position: "absolute",
            left: "3%",
            top: g.y,
            transform: "translateY(-50%)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 10px",
            borderRadius: 10,
            background: "#FFFFFF",
            border: "1px solid var(--line)",
            boxShadow: "0 10px 20px -14px rgba(15,26,20,.35)",
            fontSize: 12,
            fontWeight: 800,
            whiteSpace: "nowrap",
            color: VERDE,
          }}
        >
          <Persona size={13} />
          <span style={{ color: "var(--ink)" }}>{g.label}</span>
        </div>
      ))}

      {/* recintos de las distribuidoras */}
      {[
        { nombre: "Dist. Norte", n: "1.240", top: "14%", chipTop: "17%", txtTop: "31%" },
        { nombre: "Dist. Sur", n: "860", top: "56%", chipTop: "59%", txtTop: "73%" },
      ].map((d) => (
        <div key={d.nombre}>
          <div style={{ ...RECINTO(AMBAR), left: "22%", top: d.top, width: "24%", height: "34%" }} />
          <div
            style={{
              position: "absolute",
              left: "23.5%",
              top: d.chipTop,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "7px 12px",
              borderRadius: 10,
              background: "#FBF1E0",
              color: "#8A5A0E",
              fontSize: 13,
              fontWeight: 800,
              whiteSpace: "nowrap",
            }}
          >
            <Camion size={14} />
            {d.nombre}
          </div>
          <div style={{ position: "absolute", left: "23.5%", top: d.txtTop, fontSize: 11, color: "var(--text-2)", fontWeight: 600, lineHeight: 1.5 }}>
            <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.03em", color: "var(--ink)" }}>{d.n}</span> comercios en cartera
            <br />
            <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, color: AMBAR }}>● solo la ve {d.nombre}</span>
          </div>
        </div>
      ))}

      <Muro left="22%" top="49.5%" width="24%" height={12} transform="translateY(-50%)" />
      <Cerradura left="34%" top="49.5%" />

      {/* la compuerta */}
      <div style={{ position: "absolute", left: "51%", top: "14%", width: "14%", height: "76%", borderRadius: 18, border: "1px dashed #B5BEC8", background: "rgba(255,255,255,.6)" }} />
      <div style={{ position: "absolute", left: "51%", top: "50%", width: "14%", transform: "translateY(-50%)", padding: "0 10px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ textAlign: "center", fontSize: 11, color: "var(--text-2)", fontWeight: 700, lineHeight: 1.3, marginBottom: 4 }}>
          Dist. Norte decide qué pasa
        </div>
        {COMPUERTA.map((r) => (
          <FilaCompuerta key={r.llave} texto={r.corto} on={p[r.llave]} />
        ))}
      </div>

      {/* recintos de las marcas */}
      {[
        { nombre: "Marca A", otra: "Marca B", top: "14%", chipTop: "17%", txtTop: "32%" },
        { nombre: "Marca B", otra: "Marca A", top: "56%", chipTop: "59%", txtTop: "74%" },
      ].map((m) => (
        <div key={m.nombre}>
          <div style={{ ...RECINTO(VIOLETA), left: "70%", top: m.top, width: "27%", height: "34%" }} />
          <div
            style={{
              position: "absolute",
              left: "71.5%",
              top: m.chipTop,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 13px",
              borderRadius: 10,
              background: "var(--ink)",
              color: "#FFFFFF",
              fontSize: 13,
              fontWeight: 800,
              whiteSpace: "nowrap",
            }}
          >
            <Fabrica size={14} />
            {m.nombre}
          </div>
          <div style={{ position: "absolute", left: "71.5%", top: m.txtTop, fontSize: 11, color: "var(--text-2)", fontWeight: 600, lineHeight: 1.5 }}>
            Ve: su campaña, sus fotos, su mapa
            <br />
            <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, color: VIOLETA }}>● nada de {m.otra}</span>
          </div>
        </div>
      ))}

      <Muro left="70%" top="49.5%" width="27%" height={12} transform="translateY(-50%)" />
      <Cerradura left="83.5%" top="49.5%" />

      {/* muro de la cartera, con los dos huecos por donde pasan los carriles */}
      <Muro vertical left="48.6%" top="14%" width={12} height="76%" />
      <div style={{ position: "absolute", left: "48.4%", top: "31%", width: 16, height: "14%", background: "#F2F4F7" }} />
      <div style={{ position: "absolute", left: "48.4%", top: "67%", width: 16, height: "14%", background: "#F2F4F7" }} />
      <Cerradura left="49%" top="22%" />
      <Cerradura left="49%" top="88%" />

      {cs.map((c) => (
        <Dato key={c.id} c={c} />
      ))}
      {CHOQUES.map((h) => (
        <Intento key={h.id} h={h} />
      ))}
    </div>
  );
}

/* ══════════ escenario apilado (opción A para el celular) ══════════

   Mismo relato, girado: arriba el campo, al medio las distribuidoras,
   abajo las marcas, y el muro vertical del centro separando la columna
   izquierda (Norte → Marca A) de la derecha (Sur → Marca B). */

function chipsApilados(p: Permisos): Chip[] {
  const campo: [string, string, string][] = [
    ["foto", "27%", "0s"],
    ["ubicación", "73%", "2.5s"],
    ["respuesta", "27%", "5s"],
    ["precio", "73%", "7.5s"],
  ];
  const pasaNorte: [string, boolean, string][] = [
    ["ubicación", p.ubic, "0s"],
    ["foto", p.fotos, "2.4s"],
    ["nombre", p.nombre, "4.8s"],
    ["dirección", p.dir, "7.2s"],
    ["teléfono", false, "9.6s"],
  ];
  const pasaSur: [string, boolean, string][] = [
    ["ubicación", true, "1.2s"],
    ["foto", true, "5.2s"],
    ["dirección", false, "9.2s"],
  ];

  const bajar = (
    pre: string,
    x: string,
    filas: [string, boolean, string][]
  ): Chip[] =>
    filas.map(([label, pasa, delay], i) =>
      pasa
        ? { id: pre + i, label, color: AMBAR, x0: x, y0: "49%", x1: x, y1: "86%", xb: x, yb: "86%", pasa: true, dur: "12s", delay, marca: { signo: "✓", color: VERDE } }
        : { id: pre + i, label, color: ROJO, x0: x, y0: "49%", x1: x, y1: "68.5%", xb: x, yb: "66.5%", pasa: false, dur: "12s", delay, marca: { signo: "✕", color: ROJO } }
    );

  return [
    ...campo.map(([label, x, delay], i) => ({
      id: "mf" + i,
      label,
      color: VERDE,
      x0: x,
      y0: "20%",
      x1: x,
      y1: "35%",
      xb: x,
      yb: "35%",
      pasa: true,
      dur: "10s",
      delay,
    })),
    ...bajar("mg", "26%", pasaNorte),
    ...bajar("ms", "74%", pasaSur),
  ];
}

const CHOQUES_APILADOS = [
  { id: "mh1", label: "", labelCorto: "Marca B → datos de A ✕", color: VIOLETA, x0: "74%", y0: "92%", x1: "54%", y1: "92%", xb: "64%", yb: "92%", dur: "12s", delay: "0s" },
  { id: "mh2", label: "", labelCorto: "Dist. Sur → cartera Norte ✕", color: AMBAR, x0: "74%", y0: "41%", x1: "54%", y1: "41%", xb: "64%", yb: "41%", dur: "12s", delay: "6s" },
];

function EscenaApilada({ p, cs }: { p: Permisos; cs: Chip[] }) {
  return (
    <div aria-hidden="true" style={{ position: "relative", width: "100%", aspectRatio: "340 / 700", marginTop: 32, ...TRAMA }}>
      <Rotulo color={VERDE} left="1%" top="2%">
        <Persona />
        Gondoleros
      </Rotulo>

      {[
        { label: "Gondolero 1", x: "26%", y: "11%" },
        { label: "Gondolero 2", x: "74%", y: "11%" },
        { label: "Gondolero 3", x: "26%", y: "16.5%" },
        { label: "Fixer", x: "74%", y: "16.5%" },
      ].map((g) => (
        <div
          key={g.label}
          style={{
            position: "absolute",
            left: g.x,
            top: g.y,
            transform: "translate(-50%, -50%)",
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            padding: "5px 9px",
            borderRadius: 9,
            background: "#FFFFFF",
            border: "1px solid var(--line)",
            boxShadow: "0 10px 20px -14px rgba(15,26,20,.35)",
            fontSize: 11,
            fontWeight: 800,
            whiteSpace: "nowrap",
            color: VERDE,
          }}
        >
          <Persona size={11} />
          <span style={{ color: "var(--ink)" }}>{g.label}</span>
        </div>
      ))}

      <Carril color="#B9C4BB" left="26%" top="21%" width={2} height="10%" marginLeft={-1} />
      <Carril color="#B9C4BB" left="74%" top="21%" width={2} height="10%" marginLeft={-1} />

      <Rotulo color={AMBAR} left="1%" top="31%">
        <Camion />
        Distribuidoras
      </Rotulo>

      {[
        { nombre: "Dist. Norte", n: "1.240", left: "1%" },
        { nombre: "Dist. Sur", n: "860", left: "52%" },
      ].map((d) => (
        <div key={d.nombre} style={{ ...RECINTO(AMBAR), left: d.left, top: "37%", width: "47%", height: "13%", padding: 10, boxSizing: "border-box" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 9px", borderRadius: 8, background: "#FBF1E0", color: "#8A5A0E", fontSize: 11, fontWeight: 800, whiteSpace: "nowrap" }}>
            <Camion size={12} />
            {d.nombre}
          </div>
          <div style={{ marginTop: 6, fontSize: 10, color: "var(--text-2)", fontWeight: 600, lineHeight: 1.4 }}>
            <span style={{ fontWeight: 800, fontSize: 14, letterSpacing: "-0.03em", color: "var(--ink)" }}>{d.n}</span> en cartera
          </div>
        </div>
      ))}

      {/* la compuerta, entre las distribuidoras y las marcas */}
      <div style={{ position: "absolute", left: "1%", top: "51%", width: "98%", height: "13%", borderRadius: 14, border: "1px dashed #B5BEC8", background: "rgba(255,255,255,.6)", padding: "8px 10px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", fontSize: 10, color: "var(--text-2)", fontWeight: 700, marginBottom: 5 }}>
          Dist. Norte decide qué pasa
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
          {COMPUERTA.map((r) => (
            <FilaCompuerta key={r.llave} texto={r.corto} on={p[r.llave]} fuente={10} />
          ))}
        </div>
      </div>

      {/* muro horizontal con los dos huecos por donde cruzan los datos */}
      <Muro left="1%" top="69%" width="98%" height={10} transform="translateY(-50%)" />
      <div style={{ position: "absolute", left: "20%", top: "68%", width: "12%", height: 16, background: "#F2F4F7" }} />
      <div style={{ position: "absolute", left: "68%", top: "68%", width: "12%", height: 16, background: "#F2F4F7" }} />
      <Cerradura left="50%" top="69%" />

      <Rotulo color={VIOLETA} left="1%" top="74%">
        <Fabrica />
        Marcas
      </Rotulo>

      {[
        { nombre: "Marca A", otra: "Marca B", left: "1%" },
        { nombre: "Marca B", otra: "Marca A", left: "52%" },
      ].map((m) => (
        <div key={m.nombre} style={{ ...RECINTO(VIOLETA), left: m.left, top: "80%", width: "47%", height: "17%", padding: 10, boxSizing: "border-box" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 10px", borderRadius: 8, background: "var(--ink)", color: "#FFFFFF", fontSize: 11, fontWeight: 800, whiteSpace: "nowrap" }}>
            <Fabrica size={12} />
            {m.nombre}
          </div>
          <div style={{ marginTop: 6, fontSize: 10, color: "var(--text-2)", fontWeight: 600, lineHeight: 1.4 }}>
            Ve su campaña y su mapa
            <br />
            <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 9, color: VIOLETA }}>● nada de {m.otra}</span>
          </div>
        </div>
      ))}

      {/* el muro del centro: Norte nunca ve a Sur, A nunca ve a B */}
      <Muro vertical left="49.5%" top="37%" width={10} height="13%" />
      <Muro vertical left="49.5%" top="80%" width={10} height="17%" />
      <Cerradura left="50%" top="43.5%" />
      <Cerradura left="50%" top="88.5%" />

      {cs.map((c) => (
        <Dato key={c.id} c={c} fuente={9} movil />
      ))}
      {CHOQUES_APILADOS.map((h) => (
        <Intento key={h.id} h={h} corto fuente={9} movil />
      ))}
    </div>
  );
}

/* ══════════ sección ══════════ */
export default function Muros() {
  const [p, setP] = useState<Permisos>(PERMISOS_INICIALES);

  const cs = chips(p);
  const apilados = chipsApilados(p);

  return (
    <section id="muros" style={{ padding: "112px 0", background: "var(--tint-blue)", position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 820 }}>
            <div className="kick" style={{ color: VIOLETA }}>
              Cada uno ve lo suyo
            </div>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)" }}>
              Tus datos tienen paredes. De hierro.
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: 400, fontSize: 15, lineHeight: 1.55, color: "var(--text-2)", fontWeight: 500 }}>
            La red es compartida; la información, no. Cada marca ve solo su red, cada distribuidora ve solo su cartera, y lo que cruza de una a otra lo decide la distribuidora. Mirá cómo viaja un dato y dónde choca.
          </p>
        </div>

        {/* El escenario del tablero mide 1300 de ancho: en un celular no
            entra, así que debajo de 900px va la versión apilada, que
            cuenta lo mismo de arriba hacia abajo. */}
        <div className="muros-ancho">
          <EscenaAncha p={p} cs={cs} />
        </div>
        <div className="muros-angosto">
          <EscenaApilada p={p} cs={apilados} />
        </div>

        {/* controles */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 28px", alignItems: "center", marginTop: 22 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-2)" }}>
            Probá: qué comparte Dist. Norte con Marca A
          </span>
          {COMPUERTA.map((t) => {
            const on = p[t.llave];
            return (
              <button
                key={t.llave}
                type="button"
                aria-pressed={on}
                disabled={t.fijo}
                onClick={() => setP((v) => ({ ...v, [t.llave]: !v[t.llave] }))}
                style={{
                  cursor: t.fijo ? "default" : "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 40,
                  padding: "0 14px",
                  borderRadius: 999,
                  border: "1px solid var(--line)",
                  background: on ? "var(--ink)" : "#FFFFFF",
                  color: on ? "#FFFFFF" : "var(--ink)",
                  fontFamily: "inherit",
                  fontSize: 14,
                  fontWeight: 700,
                  opacity: 1,
                }}
              >
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12 }}>{on ? "✓" : "+"}</span>
                {t.largo}
              </button>
            );
          })}
        </div>

        {/* El escenario es decorativo: esto es lo que lee un lector de pantalla. */}
        <ul className="sr-only">
          {COMPUERTA.map((t) => (
            <li key={t.llave}>
              {t.corto}: {p[t.llave] ? "se comparte con Marca A" : "no se comparte"}
            </li>
          ))}
        </ul>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 40 }}>
          {CIERRES.map((c) => {
            const Icono = ICONOS[c.icono];
            return (
              <div key={c.titulo} style={{ background: "#FFFFFF", borderRadius: 18, padding: 24, border: "1px solid var(--line)" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: c.fondo, color: c.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Icono size={18} />
                </div>
                <div style={{ fontWeight: 800, fontSize: 19, letterSpacing: "-0.03em" }}>{c.titulo}</div>
                <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: "var(--text-2)" }}>{c.texto}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .muros-angosto { display: none; }
        @media (max-width: 900px) {
          .muros-ancho { display: none; }
          .muros-angosto { display: block; }
        }
      `}</style>
    </section>
  );
}
