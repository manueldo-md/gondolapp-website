"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { STEPS } from "@/lib/home-data";
import { IMG } from "@/lib/assets";

const AC = "#5B4BD6";

const SOMBRA = "0 40px 80px -36px rgba(15,26,20,.5), 0 0 0 1px rgba(15,26,20,.06)";

export default function ComoFunciona() {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);

  /* Autoplay cada 6 s. Al tocar una pestaña se detiene para siempre. */
  useEffect(() => {
    if (!auto) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % STEPS.length), 6000);
    return () => window.clearInterval(id);
  }, [auto]);

  const s = STEPS[step];

  const elegir = (i: number) => {
    setStep(i);
    setAuto(false);
  };

  return (
    <section id="ciclo" style={{ padding: "96px 0 200px", background: "var(--tint-blue)" }}>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div className="kick" style={{ color: AC }}>Cómo funciona</div>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(32px, 3.8vw, 52px)", maxWidth: 760 }}>
              De la campaña al dato que decide, en cinco pasos.
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: 360, fontSize: 15, lineHeight: 1.55, color: "var(--text-2)", fontWeight: 500 }}>
            Tocá un paso. Si no tocás nada, el ciclo avanza solo.
          </p>
        </div>

        {/* Pestañas */}
        <div role="tablist" aria-label="Pasos" style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 40 }}>
          {STEPS.map((it, i) => {
            const on = i === step;
            return (
              <button
                key={it.n}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => elegir(i)}
                style={{
                  cursor: "pointer",
                  flex: "1 1 180px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  textAlign: "left",
                  fontFamily: "inherit",
                  background: on ? "var(--ink)" : "#FFFFFF",
                  color: on ? "#FFFFFF" : "var(--ink)",
                  border: 0,
                  borderRadius: 16,
                  padding: "14px 18px",
                  minHeight: 56,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, opacity: 0.7 }}>{it.n}</span>
                <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.02em" }}>{it.t}</span>
                {/* Barrita de progreso del autoplay */}
                <span aria-hidden="true" style={{ position: "absolute", left: 0, bottom: 0, height: 3, display: "block", width: "100%" }}>
                  {on && auto && (
                    <span key={`${step}-fill`} style={{ display: "block", height: "100%", background: AC, animation: "gfill 6s linear forwards" }} />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tarjeta del paso */}
        <div style={{ marginTop: 16, background: "#FFFFFF", borderRadius: 28, display: "flex", flexWrap: "wrap", boxShadow: "0 40px 80px -60px rgba(15,26,20,.35)" }}>
          <div style={{ flex: "1 1 340px", minWidth: 0, padding: "clamp(28px, 4vw, 52px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: AC }}>PASO {s.n} / 05</div>
            <h3 style={{ margin: "12px 0 0", fontWeight: 800, fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>{s.title}</h3>
            <p className="lead" style={{ margin: "16px 0 0", fontSize: 17 }}>{s.desc}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
              {s.bullets.map((b) => (
                <li key={b} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 15, fontWeight: 700, padding: "12px 16px", borderRadius: 14, background: "var(--tint-blue)" }}>
                  <span aria-hidden="true" style={{ flex: "0 0 auto", width: 8, height: 8, borderRadius: 2, background: AC }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div key={step} style={{ flex: "1.4 1 520px", minWidth: 0, minHeight: 520, position: "relative", background: "linear-gradient(180deg, #F7F8FA, #EEF0F5)", borderRadius: "0 28px 28px 0", animation: "gin .45s ease" }}>
            <Escenario paso={step} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Escenario visual distinto por paso */
function Escenario({ paso }: { paso: number }) {
  if (paso === 0) {
    return (
      <>
        <Image
          src={IMG.builder.src} alt="Creación de campaña con bloques de preguntas"
          width={IMG.builder.w} height={IMG.builder.h} sizes="(max-width: 900px) 92vw, 45vw"
          style={{ position: "absolute", left: "22%", top: 36, width: "56%", height: "auto", borderRadius: 18, boxShadow: SOMBRA, background: "var(--shot-bg)" }}
        />
        <div style={{ position: "absolute", left: 24, bottom: 24, background: "var(--ink)", color: "#FFFFFF", borderRadius: 14, padding: "12px 16px", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 10, boxShadow: "0 20px 40px -20px rgba(15,26,20,.6)" }}>
          <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: "#8B7CF6" }} />
          Cada pregunta dice qué mide: presencia, exhibición, precio…
        </div>
      </>
    );
  }

  if (paso === 1) {
    return (
      <>
        <Image src={IMG.aCam.src} alt="Cámara guiada con encuadre y nivel" width={IMG.aCam.w} height={IMG.aCam.h} sizes="31vw"
          style={{ position: "absolute", left: "16%", top: 36, width: "31%", height: "auto", borderRadius: 22, boxShadow: SOMBRA, background: "var(--shot-bg)" }} />
        <Image src={IMG.aMulti.src} alt="Pregunta de selección múltiple" width={IMG.aMulti.w} height={IMG.aMulti.h} sizes="31vw"
          style={{ position: "absolute", left: "53%", top: 96, width: "31%", height: "auto", borderRadius: 22, boxShadow: SOMBRA, background: "var(--shot-bg)" }} />
      </>
    );
  }

  if (paso === 2) {
    return (
      <>
        <Image src={IMG.aprob.src} alt="Fotos por aprobar en el panel" width={IMG.aprob.w} height={IMG.aprob.h} sizes="(max-width: 900px) 76vw, 40vw"
          style={{ position: "absolute", left: "28%", top: 40, width: "80%", height: "auto", borderRadius: 18, boxShadow: SOMBRA, background: "var(--shot-bg)" }} />
        <Image src={IMG.aUbic.src} alt="Validación de ubicación: estás en el lugar" width={IMG.aUbic.w} height={IMG.aUbic.h} sizes="26vw"
          style={{ position: "absolute", left: "2%", top: 90, width: "35%", height: "auto", borderRadius: 20, boxShadow: SOMBRA, background: "var(--shot-bg)", zIndex: 3 }} />
      </>
    );
  }

  if (paso === 3) {
    return (
      <>
        <Image src={IMG.d3.src} alt="Resultados de campaña" width={IMG.d3.w} height={IMG.d3.h} sizes="(max-width: 900px) 78vw, 42vw"
          style={{ position: "absolute", left: "28%", top: 28, width: "78%", height: "auto", borderRadius: "16px 0 0 16px", boxShadow: SOMBRA, background: "var(--shot-bg)" }} />
        <Image src={IMG.d1.src} alt="Presencia global y cobertura por ciudad" width={IMG.d1.w} height={IMG.d1.h} sizes="(max-width: 900px) 52vw, 28vw"
          style={{ position: "absolute", left: "4%", top: 120, width: "52%", height: "auto", borderRadius: 14, boxShadow: SOMBRA, background: "var(--shot-bg)", zIndex: 2 }} />
        <Image src={IMG.d2.src} alt="Presencia por tipo de comercio" width={IMG.d2.w} height={IMG.d2.h} sizes="(max-width: 900px) 52vw, 28vw"
          style={{ position: "absolute", left: "14%", top: 300, width: "52%", height: "auto", borderRadius: 14, boxShadow: SOMBRA, background: "var(--shot-bg)", zIndex: 3 }} />
      </>
    );
  }

  /* Paso 5 — comparativa antes / hoy */
  return (
    <>
      <div style={{ position: "absolute", inset: "36px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", boxShadow: SOMBRA, background: "var(--shot-bg)" }}>
          <Image src={IMG.antes.src} alt="Góndola hace dos semanas" fill sizes="(max-width: 900px) 46vw, 22vw" style={{ objectFit: "cover", filter: "saturate(.8)" }} />
          <div style={{ position: "absolute", left: 14, top: 14, background: "rgba(15,26,20,.8)", color: "#FFFFFF", borderRadius: 999, padding: "6px 12px", fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".08em" }}>
            HACE 2 SEMANAS
          </div>
          <div style={{ position: "absolute", left: 14, bottom: 14, background: "#FFFFFF", borderRadius: 12, padding: "10px 14px", fontWeight: 800, fontSize: 18, letterSpacing: "-0.03em" }}>
            Presencia 72%
            <span style={{ display: "block", fontSize: 12, color: "var(--text-2)", fontWeight: 600, letterSpacing: 0 }}>quiebre en 3 SKUs</span>
          </div>
        </div>

        <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", boxShadow: SOMBRA, background: "var(--shot-bg)" }}>
          <Image src={IMG.hoy.src} alt="Góndola hoy, después de la reposición" fill sizes="(max-width: 900px) 46vw, 22vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", left: 14, top: 14, background: "var(--c-vendedor)", color: "#FFFFFF", borderRadius: 999, padding: "6px 12px", fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".08em" }}>
            HOY
          </div>
          <div style={{ position: "absolute", left: 14, bottom: 14, background: "#FFFFFF", borderRadius: 12, padding: "10px 14px", fontWeight: 800, fontSize: 18, letterSpacing: "-0.03em", color: "var(--c-vendedor)" }}>
            Presencia 89%
            <span style={{ display: "block", fontSize: 12, color: "var(--text-2)", fontWeight: 600, letterSpacing: 0 }}>repuesto y confirmado con foto</span>
          </div>
        </div>
      </div>

      <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 44, height: 44, borderRadius: "50%", background: "var(--ink)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px -10px rgba(15,26,20,.6)", zIndex: 2 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
        </svg>
      </div>
    </>
  );
}
