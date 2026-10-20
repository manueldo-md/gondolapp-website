"use client";

import { useState } from "react";

/* Etapa 2: el formulario está completo a nivel visual y de accesibilidad,
   pero todavía no envía. En la etapa 5 se conecta a /api/demo con Resend
   y se activan los estados enviando / enviado / error. */

const LEGALES = "https://app.gondolapp.com/legales";

const PERFILES = ["Marca", "Distribuidora", "Repositora", "Agencia de trade marketing", "Gondolero / relevador"];

const BENEFICIOS = [
  "Te mostramos la plataforma con tu categoría y tu zona.",
  "Dejamos tu primera campaña lista para salir.",
  "Sin abono, sin implementación, sin IT.",
];

const campo = {
  background: "#17241C",
  border: "1px solid var(--line-on-dark)",
  color: "#FFFFFF",
  borderRadius: 14,
  padding: "0 16px",
  minHeight: 52,
  fontFamily: "inherit",
  fontSize: 15,
} as const;

const etiqueta = { fontSize: 13, fontWeight: 700, color: "var(--on-dark)" } as const;

export default function Demo() {
  const [consent, setConsent] = useState(false);

  return (
    <section id="demo" style={{ background: "var(--demo-bg)", color: "#FFFFFF", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", right: -200, top: -200, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(126,226,168,0.22) 0%, rgba(126,226,168,0) 65%)", pointerEvents: "none" }} />

      <div className="wrap" style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 56, alignItems: "center" }}>
        <div style={{ flex: "1 1 460px", minWidth: 0 }}>
          <div className="kick" style={{ color: "var(--mint)" }}>Solicitar una demo</div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(40px, 5.4vw, 80px)" }}>
            Tu góndola habla.
            <br />
            <span style={{ color: "var(--mint)" }}>Empezá a escucharla esta semana.</span>
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "30px 0 0", display: "flex", flexDirection: "column", gap: 12, fontSize: 17, color: "var(--on-dark)", fontWeight: 500 }}>
            {BENEFICIOS.map((b) => (
              <li key={b} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: 2, background: "var(--mint)", flex: "0 0 auto" }} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ flex: "1 1 400px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14 }}
        >
          {/* Trampa para bots: invisible y fuera del orden de tabulación */}
          <input
            type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label htmlFor="f-nombre" style={etiqueta}>Nombre</label>
            <input id="f-nombre" name="nombre" type="text" placeholder="Tu nombre" required style={campo} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label htmlFor="f-email" style={etiqueta}>Email laboral</label>
            <input id="f-email" name="email" type="email" placeholder="vos@empresa.com" required style={campo} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label htmlFor="f-empresa" style={etiqueta}>Empresa</label>
            <input id="f-empresa" name="empresa" type="text" placeholder="Nombre de la empresa" required style={campo} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label htmlFor="f-perfil" style={etiqueta}>Perfil</label>
            <select id="f-perfil" name="perfil" style={campo} defaultValue={PERFILES[0]}>
              {PERFILES.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <label htmlFor="f-priv" style={{ gridColumn: "1 / -1", display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, lineHeight: 1.5, color: "var(--on-dark)", fontWeight: 500, cursor: "pointer" }}>
            <input
              id="f-priv" name="consent" type="checkbox" required
              checked={consent} onChange={(e) => setConsent(e.target.checked)}
              style={{ marginTop: 3, width: 16, height: 16, accentColor: "var(--mint)" }}
            />
            Acepto que Gondolapp use estos datos solo para contactarme por esta solicitud, según la{" "}
            <a href={LEGALES} style={{ color: "var(--mint)", fontWeight: 700 }}>Política de privacidad</a>.
          </label>

          <button type="submit" className="btn" style={{ gridColumn: "1 / -1", background: "var(--mint)", color: "var(--ink)", fontWeight: 800, marginTop: 2 }}>
            Solicitar demo
          </button>

          <p style={{ gridColumn: "1 / -1", margin: 0, fontSize: 14, color: "#9FB0A6", textAlign: "center", fontWeight: 500 }}>
            o escribinos a <a href="mailto:hola@gondolapp.com" style={{ color: "var(--mint)", fontWeight: 700 }}>hola@gondolapp.com</a>
          </p>
        </form>
      </div>
    </section>
  );
}
