"use client";

import { useState } from "react";
import Image from "next/image";
import Halo from "@/components/site/Halo";
import { VIEWS, SLOTS, SLOT_PICK } from "@/lib/home-data";

export default function Hero() {
  const [view, setView] = useState(0);
  const v = VIEWS[view];

  /* De las 4 capturas de la vista, el collage usa 3 en posiciones fijas */
  const shots = SLOT_PICK.map((k, i) => {
    const [asset, alt] = v.shots[k];
    return { asset, alt, ...SLOTS[i] };
  });

  return (
    <section style={{ padding: "88px 0 0", position: "relative" }}>
      <Halo tono="home" />

      <div className="wrap" style={{ position: "relative" }}>
        <div className="kick" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--c-marca)" }}>
          <span aria-hidden="true" className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--c-marca)" }} />
          Canal tradicional · Argentina
        </div>

        <h1 className="h1" style={{ margin: "20px 0 0", fontSize: "clamp(46px, 6.6vw, 92px)", maxWidth: 1040, color: "var(--ink)" }}>
          Tu góndola habla,
          <br />
          <span className="grad-text" style={{ paddingRight: ".08em" }}>¡escuchala!</span>
        </h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "28px 64px", alignItems: "flex-end", justifyContent: "space-between", marginTop: 32 }}>
          <p className="lead" style={{ margin: 0, maxWidth: 620 }}>
            La plataforma para ejecutar y medir campañas en el canal tradicional. Tu equipo, tus distribuidoras o tu
            repositora relevan desde el celular; vos lo ves todo en vivo.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a href="#demo" className="btn btn-dark">Solicitar una demo</a>
            <a href="#quehace" className="btn btn-ghost">Qué es Gondolapp</a>
          </div>
        </div>

        {/* ── Collage por actor ── */}
        <div style={{ marginTop: 56 }}>
          <div role="tablist" aria-label="Vista por actor" style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", marginBottom: 22 }}>
            {VIEWS.map((item, i) => {
              const on = i === view;
              return (
                <button
                  key={item.t}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setView(i)}
                  style={{
                    cursor: "pointer",
                    minHeight: 44,
                    padding: "0 20px",
                    borderRadius: 999,
                    border: 0,
                    background: on ? "var(--ink)" : "#FFFFFF",
                    color: on ? "#FFFFFF" : "var(--ink)",
                    fontFamily: "inherit",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {item.t}
                </button>
              );
            })}
          </div>

          <div key={view} style={{ position: "relative", width: "100%", aspectRatio: "16/10", animation: "gin .5s ease" }}>
            {shots.map((s, i) => (
              <Image
                key={`${view}-${i}`}
                src={s.asset.src}
                alt={s.alt}
                width={s.asset.w}
                height={s.asset.h}
                priority={i === 0}
                sizes={s.sizes}
                style={{
                  position: "absolute",
                  left: s.l,
                  top: s.t,
                  width: s.w,
                  height: "auto",
                  borderRadius: s.r,
                  zIndex: s.z,
                  boxShadow: "0 50px 100px -40px rgba(15,26,20,.55), 0 0 0 1px rgba(15,26,20,.06)",
                  background: "var(--shot-bg)",
                }}
              />
            ))}
          </div>

          <p style={{ margin: "14px 0 0", fontSize: 12, color: "#5B6B61", textAlign: "center" }}>{v.cap}</p>
        </div>
      </div>
    </section>
  );
}
