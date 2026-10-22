"use client";

import { useEffect, useRef, useState } from "react";
import { ECO, ECO_CONTENT, ECO_W, ECO_H } from "@/lib/eco-data";

/* Simulación de fuerzas portada de la maqueta (ECO, ECO_CONTENT, ecoStep).

   Dos diferencias con el original, que pide el brief §6.3:
   - corre con requestAnimationFrame en vez de setInterval;
   - se pausa cuando la sección no está en pantalla (IntersectionObserver).

   Además, las posiciones se escriben directo en el DOM en cada cuadro en
   lugar de pasar por el estado de React: son 47 nodos + 49 aristas + 26
   partículas, y re-renderizarlos 30 veces por segundo costaría caro. */

const PASO_MS = 33; // mismo paso fijo que el setInterval original
const MAX_PART = 26;

/* Miniaturas desenfocadas recortadas de las fotos de góndola reales.
   Reemplazan las rayas de color de la maqueta (brief §6.3). */
const MINIATURAS = [1, 2, 3, 4, 5, 6].map((n) => `/gondolapp-assets/gondola/miniaturas/g${n}.jpg`);

type SimNode = {
  id: string; kind: string; label: string;
  x: number; y: number; vx: number; vy: number;
  fx: number; fy: number; ph: number; ph2: number;
  parent?: string; rel: string;
};

type Part = {
  vivo: boolean;
  x: number; y: number; vx: number; vy: number;
  age: number; life: number; ph: number;
  kind: string; label: string; c: string;
};

function anchoTexto(label: string, fs: number, pad: number) {
  return label.length * fs * 0.56 + pad;
}

function dims(kind: string, label: string) {
  if (kind === "marca") return { fs: 15, pad: "10px 14px", r: 13, w: anchoTexto(label, 15, 50) };
  if (kind === "distri" || kind === "repo") return { fs: 13, pad: "7px 12px", r: 11, w: anchoTexto(label, 13, 45) };
  return { fs: 11, pad: "5px 10px", r: 13, w: anchoTexto(label, 11, 39) };
}

function Icono({ kind, color, size }: { kind: string; color: string; size: number }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (kind === "marca") return <svg {...p}><path d="M3 21V10l6 3v-3l6 3v-3l6 3v8z" /><path d="M17 10V4h3v7" /></svg>;
  if (kind === "distri") return <svg {...p}><path d="M3 6h11v10H3z" /><path d="M14 9h4l3 3v4h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>;
  if (kind === "repo") return <svg {...p}><path d="M4 3v18M20 3v18" /><path d="M4 9h16M4 15h16M4 21h16" /><path d="M8 6v3M12 6v3M16 6v3M9 12v3M15 12v3" /></svg>;
  return <svg {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>;
}

export default function EcosistemaDesktop() {
  const lienzo = useRef<HTMLDivElement>(null);
  const nodoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const aristaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const partRefs = useRef<(HTMLDivElement | null)[]>([]);
  const etiquetaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fichaRef = useRef<HTMLDivElement>(null);

  const sim = useRef<{ N: SimNode[]; idx: Record<string, number>; P: Part[]; drag: string | null } | null>(null);
  const [hover, setHover] = useState<string>("");
  const hoverRef = useRef("");

  /* La ficha de detalle sí pasa por React: cambia pocas veces. */
  const nodoHover = hover ? ECO.nodes.find((n) => n.id === hover) : null;
  const tipo = nodoHover ? ECO.types[nodoHover.kind] : null;

  useEffect(() => { hoverRef.current = hover; }, [hover]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Estado inicial de la simulación */
    const N: SimNode[] = ECO.nodes.map((n) => ({
      ...n, vx: 0, vy: 0, fx: 0, fy: 0,
      ph: Math.random() * 6.28, ph2: Math.random() * 6.28,
    }));
    const idx: Record<string, number> = {};
    N.forEach((n, i) => { idx[n.id] = i; });
    const P: Part[] = Array.from({ length: MAX_PART }, () => ({
      vivo: false, x: 0, y: 0, vx: 0, vy: 0, age: 0, life: 0, ph: 0, kind: "d", label: "", c: "#000",
    }));
    sim.current = { N, idx, P, drag: null };

    pintar();
    /* Sin movimiento: se dibuja una vez y queda estático (brief §8). */
    if (reduce) return;

    let raf = 0;
    let ultimo = 0;
    let acum = 0;
    let visible = false;

    const bucle = (ahora: number) => {
      raf = requestAnimationFrame(bucle);
      if (!visible) { ultimo = ahora; return; }
      if (!ultimo) ultimo = ahora;
      acum += Math.min(ahora - ultimo, 120); // si la pestaña estuvo oculta, no acumular de más
      ultimo = ahora;
      let pasos = 0;
      while (acum >= PASO_MS && pasos < 4) { paso(); acum -= PASO_MS; pasos++; }
      pintar();
    };

    /* Pausa cuando la sección no está en pantalla */
    const io = new IntersectionObserver(
      (entries) => { visible = entries[0].isIntersecting; },
      { threshold: 0 }
    );
    if (lienzo.current) io.observe(lienzo.current);

    raf = requestAnimationFrame(bucle);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };

    /* ── Física: mismo cálculo que ecoStep en la maqueta ── */
    function paso() {
      const s = sim.current!;
      const N = s.N;
      const t = Date.now() / 1000;

      for (const n of N) {
        const g = n.kind === "marca" ? 0.004 : 0.0012;
        n.fx = g * (ECO_W / 2 - n.x) + Math.cos(t * 0.7 + n.ph) * 0.45;
        n.fy = g * (ECO_H / 2 - n.y) + Math.sin(t * 0.6 + n.ph2) * 0.45;
      }

      /* Repulsión entre todos: las marcas se rechazan más fuerte */
      for (let i = 0; i < N.length; i++) {
        for (let j = i + 1; j < N.length; j++) {
          const a = N[i], b = N[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          let d2 = dx * dx + dy * dy;
          if (d2 < 400) d2 = 400;
          const d = Math.sqrt(d2);
          const am = a.kind === "marca", bm = b.kind === "marca";
          const ae = a.kind === "distri" || a.kind === "repo";
          const be = b.kind === "distri" || b.kind === "repo";
          const k = am && bm ? 42000 : am || bm ? 12000 : ae && be ? 9000 : ae || be ? 4200 : 2600;
          const f = k / d2, ux = dx / d, uy = dy / d;
          a.fx += ux * f; a.fy += uy * f;
          b.fx -= ux * f; b.fy -= uy * f;
        }
      }

      /* Resortes de las aristas */
      for (const e of ECO.edges) {
        const a = N[s.idx[e[0]]], b = N[s.idx[e[1]]];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.sqrt(dx * dx + dy * dy) || 1;
        const f = (d - e[3]) * 0.03, ux = dx / d, uy = dy / d;
        a.fx += ux * f; a.fy += uy * f;
        b.fx -= ux * f; b.fy -= uy * f;
      }

      for (const n of N) {
        if (n.id === s.drag) { n.vx = 0; n.vy = 0; continue; }
        n.vx = (n.vx + n.fx) * 0.8;
        n.vy = (n.vy + n.fy) * 0.8;
        n.x = Math.min(ECO_W - 80, Math.max(80, n.x + n.vx));
        n.y = Math.min(ECO_H - 36, Math.max(36, n.y + n.vy));
      }

      /* Partículas de contenido */
      let vivas = 0;
      for (const q of s.P) {
        if (!q.vivo) continue;
        q.age += 0.033;
        if (q.age >= q.life) { q.vivo = false; continue; }
        q.x += q.vx; q.y += q.vy;
        q.vx *= 0.995; q.vy *= 0.995;
        q.x += Math.sin(t * 1.3 + q.ph) * 0.15;
        vivas++;
      }
      if (vivas < MAX_PART && Math.random() < 0.11) {
        const libre = s.P.find((q) => !q.vivo);
        if (libre) {
          const src = N[Math.floor(Math.random() * N.length)];
          const pool = ECO_CONTENT[src.kind];
          const item = pool[Math.floor(Math.random() * pool.length)];
          const ax = src.x - ECO_W / 2, ay = src.y - ECO_H / 2;
          const ang = Math.atan2(ay, ax) + (Math.random() - 0.5) * 1.4;
          const sp = 0.45 + Math.random() * 0.35;
          libre.vivo = true;
          libre.x = src.x + Math.cos(ang) * 24;
          libre.y = src.y + Math.sin(ang) * 24;
          libre.vx = Math.cos(ang) * sp;
          libre.vy = Math.sin(ang) * sp;
          libre.age = 0;
          libre.life = 5.5 + Math.random() * 2;
          libre.ph = Math.random() * 6.28;
          libre.kind = item[0];
          libre.label = item[1];
          libre.c = ECO.colors[src.kind];
        }
      }
    }

    /* ── Pintado: se escribe directo en el DOM ── */
    function pintar() {
      const s = sim.current!;
      const N = s.N;

      for (let i = 0; i < N.length; i++) {
        const el = nodoRefs.current[i];
        if (!el) continue;
        el.style.left = `${(N[i].x / ECO_W) * 100}%`;
        el.style.top = `${(N[i].y / ECO_H) * 100}%`;
      }

      ECO.edges.forEach((e, i) => {
        const el = aristaRefs.current[i];
        if (!el) return;
        const A = N[s.idx[e[0]]], B = N[s.idx[e[1]]];
        const src = e[2] === "out" ? A : B;
        const dst = e[2] === "out" ? B : A;
        const dx = dst.x - src.x, dy = dst.y - src.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        el.style.left = `${(src.x / ECO_W) * 100}%`;
        el.style.top = `${(src.y / ECO_H) * 100}%`;
        el.style.width = `${(len / ECO_W) * 100}%`;
        el.style.transform = `rotate(${(Math.atan2(dy, dx) * 180) / Math.PI}deg)`;
      });

      /* Etiquetas de equipo interno, al costado del grupo */
      Object.keys(ECO.teams).forEach((mid, i) => {
        const el = etiquetaRefs.current[i];
        if (!el) return;
        const ts = N.filter((n) => n.kind === "equipo" && n.parent === mid);
        if (!ts.length) return;
        const m = N[s.idx[mid]];
        const cx = ts.reduce((a, n) => a + n.x, 0) / ts.length;
        const cy = ts.reduce((a, n) => a + n.y, 0) / ts.length;
        const ox = cx - m.x, oy = cy - m.y;
        const ol = Math.sqrt(ox * ox + oy * oy) || 1;
        el.style.left = `${((cx + (ox / ol) * 52) / ECO_W) * 100}%`;
        el.style.top = `${((cy + (oy / ol) * 52) / ECO_H) * 100}%`;
      });

      for (let i = 0; i < s.P.length; i++) {
        const el = partRefs.current[i];
        const q = s.P[i];
        if (!el) continue;
        if (!q.vivo) { el.style.display = "none"; continue; }
        const fi = Math.min(1, q.age / 0.6);
        const fo = Math.min(1, (q.life - q.age) / 1.6);
        const op = Math.min(fi, fo) * 0.95;
        const sc = 0.7 + 0.3 * fi - 0.1 * (1 - fo);
        el.style.display = "flex";
        el.style.left = `${(q.x / ECO_W) * 100}%`;
        el.style.top = `${(q.y / ECO_H) * 100}%`;
        el.style.opacity = String(op);
        el.style.transform = `translate(-50%,-50%) scale(${sc})`;

        const foto = el.querySelector<HTMLElement>("[data-foto]");
        const mapa = el.querySelector<HTMLElement>("[data-mapa]");
        const punto = el.querySelector<HTMLElement>("[data-punto]");
        const txt = el.querySelector<HTMLElement>("[data-label]");
        if (foto) {
          foto.style.display = q.kind === "f" ? "block" : "none";
          foto.style.borderColor = q.c;
        }
        if (mapa) {
          mapa.style.display = q.kind === "m" ? "flex" : "none";
          mapa.style.borderColor = q.c;
        }
        if (punto) { punto.style.background = q.c; punto.style.boxShadow = `0 0 0 1px ${q.c}`; }
        if (txt && txt.textContent !== q.label) txt.textContent = q.label;
        if (txt) { txt.style.color = q.c; txt.style.borderColor = `${q.c}66`; }
      }

      /* La ficha sigue al nodo que está bajo el mouse */
      const h = hoverRef.current;
      const f = fichaRef.current;
      if (f && h) {
        const n = N[s.idx[h]];
        if (n) {
          const d = dims(n.kind, n.label);
          const derecha = n.x < ECO_W / 2;
          const px = derecha ? n.x + d.w / 2 + 16 : n.x - d.w / 2 - 16;
          f.style.left = `${(px / ECO_W) * 100}%`;
          f.style.top = `${(n.y / ECO_H) * 100}%`;
          const ty = n.y / ECO_H < 0.22 ? "0" : n.y / ECO_H > 0.78 ? "-100%" : "-50%";
          f.style.transform = `translate(${derecha ? "0" : "-100%"}, ${ty})`;
        }
      }
    }
  }, []);

  /* ── Arrastre ── */
  const punto = (e: React.MouseEvent | React.TouchEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const p = "touches" in e ? e.touches[0] : (e as React.MouseEvent);
    return { x: ((p.clientX - r.left) / r.width) * ECO_W, y: ((p.clientY - r.top) / r.height) * ECO_H };
  };

  const mover = (e: React.MouseEvent | React.TouchEvent) => {
    const s = sim.current;
    if (!s?.drag) return;
    const p = punto(e);
    const n = s.N[s.idx[s.drag]];
    n.x = Math.min(ECO_W - 80, Math.max(80, p.x));
    n.y = Math.min(ECO_H - 36, Math.max(36, p.y));
  };

  const soltar = () => { if (sim.current) sim.current.drag = null; };

  return (
    <>
      <div
        ref={lienzo}
        onMouseMove={mover}
        onMouseUp={soltar}
        onMouseLeave={() => { soltar(); setHover(""); }}
        onTouchMove={mover}
        onTouchEnd={soltar}
        style={{
          position: "relative", width: "100%", aspectRatio: `${ECO_W}/${ECO_H}`, marginTop: 40,
          backgroundImage: "radial-gradient(#D8DFD9 1.1px, transparent 1.1px)",
          backgroundSize: "24px 24px", userSelect: "none", touchAction: "none", overflow: "visible",
        }}
      >
        {/* Partículas (pool fijo) */}
        {Array.from({ length: MAX_PART }).map((_, i) => (
          <div
            key={`p${i}`}
            ref={(el) => { partRefs.current[i] = el; }}
            aria-hidden="true"
            style={{ position: "absolute", display: "none", pointerEvents: "none", flexDirection: "column", alignItems: "center", gap: 4 }}
          >
            {/* Foto: miniatura real desenfocada de una góndola */}
            <div
              data-foto
              style={{
                display: "none", width: 52, height: 38, borderRadius: 7, border: "1.5px solid",
                backgroundImage: `url(${MINIATURAS[i % MINIATURAS.length]})`,
                backgroundSize: "cover", backgroundPosition: "center",
                boxShadow: "0 8px 20px -10px rgba(15,26,20,.4)",
              }}
            />
            <div
              data-mapa
              style={{
                display: "none", width: 44, height: 44, borderRadius: "50%", border: "1.5px solid",
                backgroundColor: "#FFFFFF", backgroundImage: "radial-gradient(#D8DFD9 1px, transparent 1px)",
                backgroundSize: "7px 7px", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 20px -10px rgba(15,26,20,.4)",
              }}
            >
              <span data-punto style={{ width: 12, height: 12, borderRadius: "50%", border: "2.5px solid #FFFFFF" }} />
            </div>
            <span
              data-label
              style={{
                fontFamily: "var(--font-mono), monospace", fontSize: 10, background: "#FFFFFF",
                border: "1px solid", padding: "3px 8px", borderRadius: 999, whiteSpace: "nowrap",
              }}
            />
          </div>
        ))}

        {/* Aristas */}
        {ECO.edges.map((e, i) => (
          <div
            key={`e${i}`}
            ref={(el) => { aristaRefs.current[i] = el; }}
            aria-hidden="true"
            style={{
              position: "absolute", height: 2, transformOrigin: "0 50%",
              backgroundImage: "linear-gradient(90deg,#B9C4BB 0 4px,transparent 4px 12px)",
              backgroundSize: "12px 2px", animation: "gflow 1.4s linear infinite",
              opacity: 0.85, pointerEvents: "none",
            }}
          >
            <span
              style={{
                position: "absolute", left: 0, top: -3, width: 8, height: 8, borderRadius: "50%",
                background: ECO.colors[ECO.nodes.find((n) => n.id === (e[2] === "out" ? e[1] : e[0]))!.kind],
                /* El retardo va dentro del atajo: si se pone aparte,
                   React avisa que mezclar los dos puede pisar estilos. */
                animation: `gtravel ${3 + ((i * 7) % 5)}s linear -${(i * 13) % 7}s infinite`,
              }}
            />
          </div>
        ))}

        {/* Etiquetas de equipo interno */}
        {Object.keys(ECO.teams).map((mid, i) => (
          <div
            key={mid}
            ref={(el) => { etiquetaRefs.current[i] = el; }}
            style={{
              position: "absolute", transform: "translate(-50%,-50%)",
              fontFamily: "var(--font-mono), monospace", fontSize: 10.5,
              color: "var(--c-marca)", background: "#EEEBFB", padding: "3px 9px",
              borderRadius: 999, whiteSpace: "nowrap", pointerEvents: "none",
            }}
          >
            {ECO.teams[mid]}
          </div>
        ))}

        {/* Nodos */}
        {ECO.nodes.map((n, i) => {
          const d = dims(n.kind, n.label);
          const c = ECO.colors[n.kind];
          const esMarca = n.kind === "marca";
          const esInter = n.kind === "distri" || n.kind === "repo";
          const bg = esMarca ? c : esInter ? "#FFFFFF" : ECO.light[n.kind];
          const fg = esMarca ? "#FFFFFF" : esInter ? c : "var(--ink)";
          const bd = esMarca ? "0" : esInter ? `2px solid ${c}` : `${n.kind === "equipo" ? "1.2px dashed " : "1.2px solid "}${c}`;
          const activo = hover === n.id;
          return (
            <div
              key={n.id}
              ref={(el) => { nodoRefs.current[i] = el; }}
              onMouseDown={(e) => { e.preventDefault(); if (sim.current) sim.current.drag = n.id; }}
              onTouchStart={() => { if (sim.current) sim.current.drag = n.id; }}
              onMouseEnter={() => setHover(n.id)}
              style={{
                position: "absolute", transform: "translate(-50%,-50%)", padding: d.pad,
                borderRadius: d.r, background: bg, color: fg, border: bd,
                fontWeight: 800, fontSize: d.fs, whiteSpace: "nowrap", cursor: "grab",
                boxShadow: activo ? `0 0 0 4px ${c}44, 0 10px 30px -12px rgba(15,26,20,.4)` : "0 1px 2px rgba(15,26,20,.08)",
                letterSpacing: "-0.02em", lineHeight: 1.2, display: "flex", alignItems: "center", gap: 6,
              }}
            >
              <Icono kind={n.kind} color={esMarca ? "#FFFFFF" : c} size={esMarca ? 16 : esInter ? 15 : 13} />
              {n.label}
            </div>
          );
        })}

        {/* Ficha de detalle */}
        <div
          ref={fichaRef}
          style={{
            position: "absolute", width: 320, maxWidth: "46%", zIndex: 5, background: "#FFFFFF",
            borderRadius: 20, boxShadow: "0 30px 80px -40px rgba(15,26,20,.4), 0 0 0 1px var(--line)",
            padding: "22px 24px", pointerEvents: "none", opacity: nodoHover ? 1 : 0,
            transition: "opacity .2s ease", boxSizing: "border-box",
          }}
        >
          {nodoHover && tipo && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 12, height: 12, borderRadius: 4, background: ECO.colors[nodoHover.kind], display: "block" }} />
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-2)" }}>{tipo.t}</span>
              </div>
              <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.03em", marginTop: 8 }}>{nodoHover.label}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-2)", marginTop: 4, fontWeight: 600 }}>{nodoHover.rel}</div>
              {([["Qué hace", tipo.que], ["Función en la red", tipo.fun], ["Valor que agrega", tipo.val]] as const).map(([t, v], i) => (
                <div key={t}>
                  <div style={{ marginTop: i === 0 ? 14 : 12, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: ECO.colors[nodoHover.kind], fontWeight: 800 }}>{t}</div>
                  <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.5 }}>{v}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Referencias */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px", marginTop: 28, fontSize: 13, color: "var(--text-2)", fontWeight: 600 }}>
        {([["marca", "Marca"], ["equipo", "Equipo interno de la marca"], ["distri", "Distribuidora"], ["repo", "Repositora"], ["gond", "Vendedor"], ["fixer", "Fixer"]] as const).map(([k, t]) => (
          <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Icono kind={k} color={ECO.colors[k]} size={16} />
            {t}
          </span>
        ))}
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
          <span aria-hidden="true" style={{ width: 28, height: 0, borderTop: "2px dashed #B9C4BB", display: "block" }} />
          El trazo fluye en la dirección de la acción · el punto lleva el color de quien recibe
        </span>
      </div>
    </>
  );
}
