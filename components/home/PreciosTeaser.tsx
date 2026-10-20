import Link from "next/link";

const CIFRAS = [
  { v: "$0", d: "de abono mensual. Nunca." },
  { v: "1 pt = $10", d: "el punto vale lo mismo en toda campaña." },
  { v: "$3.500", d: "por comercio relevado con la red, y baja por escalones." },
];

const INCLUYE = [
  "Hasta 200 misiones o 30 días",
  "Usuarios ilimitados, los que cargan y los que miran",
  "Resultados, mapa e informe incluidos",
  "Después, el saldo que cargás no vence",
];

const ACTORES = [
  { c: "var(--c-marca)", t: "Marcas", d: "Por campaña con tu equipo, o por comercio relevado con la red." },
  { c: "var(--c-distri)", t: "Distribuidoras", d: "Panel sin costo y 10.000 puntos de bienvenida." },
  { c: "var(--c-repo)", t: "Repositoras", d: "Primera campaña gratis. A tus fixers no les cobramos nada." },
];

function Tilde() {
  return (
    <span aria-hidden="true" style={{ flex: "0 0 auto", width: 22, height: 22, borderRadius: "50%", background: "#8B7CF6", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12l5 5L20 7" />
      </svg>
    </span>
  );
}

export default function PreciosTeaser() {
  return (
    <section id="precios" style={{ padding: "120px 0 96px", background: "var(--tint-blue)" }}>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 72px", alignItems: "stretch" }}>
          {/* Cifras */}
          <div style={{ flex: "1 1 460px", minWidth: 0, display: "flex", flexDirection: "column" }}>
            <div className="kick">Precios</div>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)" }}>
              No te cobramos por tenerla. Te cobramos por usarla.
            </h2>
            <p className="lead" style={{ margin: "18px 0 0", maxWidth: 560 }}>
              Sin abono mensual, sin implementación, sin tarjeta para empezar. Pagás por lo que se releva.
            </p>

            <div style={{ marginTop: "auto", paddingTop: 40 }}>
              {CIFRAS.map((c, i) => (
                <div key={c.v} style={{
                  display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 20, padding: "22px 0",
                  borderTop: "1px solid #D9DEE6",
                  borderBottom: i === CIFRAS.length - 1 ? "1px solid #D9DEE6" : undefined,
                }}>
                  <span style={{ fontWeight: 800, fontSize: "clamp(40px, 4vw, 56px)", letterSpacing: "-0.05em", lineHeight: 1, minWidth: 200 }}>{c.v}</span>
                  <span style={{ fontSize: 16, color: "var(--text-2)", fontWeight: 600 }}>{c.d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta oscura */}
          <div style={{ flex: "0 1 420px", minWidth: 0, background: "var(--ink)", color: "#FFFFFF", borderRadius: 32, padding: "clamp(28px, 3.5vw, 44px)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", boxShadow: "0 50px 100px -50px rgba(15,26,20,.6)" }}>
            <div aria-hidden="true" style={{ position: "absolute", right: -120, top: -120, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,124,246,.35) 0%, rgba(139,124,246,0) 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--rt-accent)" }}>
                <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: "#8B7CF6" }} />
                Para empezar
              </div>
              <div style={{ fontWeight: 800, fontSize: "clamp(30px, 3vw, 40px)", letterSpacing: "-0.045em", lineHeight: 1, marginTop: 14 }}>
                Tu primera campaña,<br />gratis.
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.55, color: "#C7CBD6" }}>
                Con tu propio equipo o con tu repositora. Sin tarjeta y sin compromiso.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "flex", flexDirection: "column", gap: 12, fontSize: 15, fontWeight: 600 }}>
                {INCLUYE.map((t) => (
                  <li key={t} style={{ display: "flex", gap: 12, alignItems: "center" }}><Tilde />{t}</li>
                ))}
              </ul>
              <Link href="/precios" className="btn" style={{ marginTop: 30, background: "#FFFFFF", color: "var(--ink)", width: "100%", justifyContent: "center" }}>
                Ver precios en detalle
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
              <p style={{ margin: "12px 0 0", fontSize: 12, color: "#8B91A3", textAlign: "center" }}>
                Escalones, estimador y qué incluye cada modalidad.
              </p>
            </div>
          </div>
        </div>

        {/* Tira de actores */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginTop: 40 }}>
          {ACTORES.map((a) => (
            <div key={a.t} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "#FFFFFF", borderRadius: 18, padding: "18px 20px" }}>
              <span aria-hidden="true" style={{ flex: "0 0 auto", width: 10, height: 10, borderRadius: 3, background: a.c, marginTop: 6 }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}>{a.t}</div>
                <div style={{ fontSize: 14, color: "var(--text-2)", marginTop: 3, lineHeight: 1.45 }}>{a.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
