"use client";

import { useState } from "react";
import Image from "next/image";
import Halo from "@/components/site/Halo";
import { IMG, type Asset } from "@/lib/assets";

/* Hero de /red: toggle Vendedores / Fixers con 4 teléfonos.
   En Fixers hay tres pantallas que no existen en el pack: la maqueta las
   deja como recuadro con el título, y acá se mantiene igual (brief §10:
   las capturas que no están en el pack no existen, no se inventan). */

type Tel = { t: string; img?: Asset; mt: string };

const HERO: { t: string; h: string; p: string; cta: string; phones: Tel[] }[] = [
  {
    t: "Vendedores",
    h: "Lo que ya hacés en tu recorrido, ahora suma premios.",
    p: "Sacás una foto de la góndola, respondés dos o tres preguntas y ganás 100 puntos por misión. Subís de nivel, competís en los rankings y canjeás en tu distribuidora.",
    cta: "Quiero sumarme como vendedor",
    phones: [
      { t: "Campañas disponibles", img: IMG.gCamp, mt: "48px" },
      { t: "Detalle de campaña", img: IMG.gDet, mt: "0" },
      { t: "Logros y niveles", img: IMG.gLog, mt: "72px" },
      { t: "Mi perfil", img: IMG.gPerf, mt: "24px" },
    ],
  },
  {
    t: "Fixers",
    h: "Campañas de reposición en tu zona. Vos elegís cuándo.",
    p: "Distribuidoras y repositoras publican campañas abiertas. Te postulás, te aprueban, vas al comercio, acomodás y probás el trabajo con foto antes y después.",
    cta: "Quiero sumarme como fixer",
    phones: [
      { t: "Ofertas en mi zona", mt: "48px" },
      { t: "Postulación enviada", mt: "0" },
      { t: "Misión: antes y después", mt: "72px" },
      { t: "Mi perfil", img: IMG.gPerf, mt: "24px" },
    ],
  },
];

export default function RedHero() {
  const [tab, setTab] = useState(0);
  const h = HERO[tab];

  return (
    <section style={{ padding: "96px 0 0", position: "relative" }}>
      <Halo tono="red" />
      <div className="wrap" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div role="tablist" aria-label="Vendedores o fixers" style={{ display: "flex", gap: 4, background: "var(--tint-green)", borderRadius: 999, padding: 4 }}>
          {HERO.map((it, i) => {
            const on = i === tab;
            return (
              <button
                key={it.t} type="button" role="tab" aria-selected={on} onClick={() => setTab(i)}
                style={{
                  cursor: "pointer", minHeight: 44, padding: "0 22px", borderRadius: 999, border: 0,
                  background: on ? "var(--ink)" : "transparent", color: on ? "#FFFFFF" : "var(--ink)",
                  fontFamily: "inherit", fontSize: 14, fontWeight: 700,
                }}
              >
                {it.t}
              </button>
            );
          })}
        </div>

        <h1 className="h1" style={{ margin: "30px 0 0", fontSize: "clamp(48px, 7.6vw, 110px)", maxWidth: 1100 }}>{h.h}</h1>
        <p className="lead" style={{ margin: "26px 0 0", maxWidth: 680 }}>{h.p}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 34, justifyContent: "center" }}>
          <a href="#sumarme" className="btn btn-dark">{h.cta}</a>
        </div>

        <div key={tab} className="red-tira" style={{ animation: "gin 0.45s ease" }}>
          {h.phones.map((p) => (
            <div key={p.t} className="red-tel" style={{ marginTop: p.mt }}>
              {p.img ? (
                <Image
                  src={p.img.src} alt={p.t} width={p.img.w} height={p.img.h}
                  sizes="(max-width: 900px) 58vw, 22vw"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: 30, boxShadow: "0 50px 100px -40px rgba(15,26,20,.55), 0 0 0 1px rgba(15,26,20,.06)" }}
                />
              ) : (
                <div style={{
                  aspectRatio: "9/19", borderRadius: 30, background: "var(--tint-green)",
                  display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center",
                  padding: 20, boxSizing: "border-box",
                }}>
                  <span style={{ fontWeight: 800, fontSize: 14, lineHeight: 1.3, color: "var(--text-2)" }}>{p.t}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .red-tira {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: flex-start;
          margin-top: 72px;
          width: 100%;
          max-width: 1100px;
        }
        .red-tel { flex: 1 1 0; min-width: 0; max-width: 260px; }
        @media (max-width: 900px) {
          .red-tira {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            justify-content: flex-start;
            gap: 14px;
            padding: 0 20px;
            margin-left: -20px;
            margin-right: -20px;
          }
          .red-tira::-webkit-scrollbar { display: none; }
          .red-tel {
            flex: 0 0 58%;
            max-width: none;
            margin-top: 0 !important;
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
}
