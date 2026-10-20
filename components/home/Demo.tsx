"use client";

import { useState } from "react";

/* Formulario de demo (brief §7).
   Estados: idle → enviando → enviado | error. */

const LEGALES = "https://app.gondolapp.com/legales";

const PERFILES = [
  "Marca",
  "Distribuidora",
  "Repositora",
  "Agencia de trade marketing",
  "Gondolero / relevador",
];

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

type Estado = "idle" | "enviando" | "enviado" | "error";

export default function Demo() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [mensaje, setMensaje] = useState("");

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (estado === "enviando") return;

    const f = new FormData(e.currentTarget);
    setEstado("enviando");
    setMensaje("");

    try {
      const r = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: f.get("nombre"),
          email: f.get("email"),
          empresa: f.get("empresa"),
          perfil: f.get("perfil"),
          consent: f.get("consent") === "on",
          website: f.get("website"), // honeypot
        }),
      });

      const data = await r.json().catch(() => ({}));

      if (r.ok && data.ok) {
        setEstado("enviado");
      } else {
        setEstado("error");
        setMensaje(data.error ?? "No pudimos enviar la solicitud.");
      }
    } catch {
      setEstado("error");
      setMensaje("No pudimos conectarnos. Revisá tu conexión e intentá de nuevo.");
    }
  }

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

        <div style={{ flex: "1 1 400px", minWidth: 0 }}>
          {estado === "enviado" ? (
            /* ── Pantalla de éxito ── */
            <div
              role="status"
              style={{ background: "#17241C", border: "1px solid var(--line-on-dark)", borderRadius: 20, padding: 32, animation: "gin .3s ease" }}
            >
              <div aria-hidden="true" style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--mint)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>
              <div style={{ fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em", marginTop: 18 }}>
                ¡Listo! Te escribimos en los próximos 2 días hábiles.
              </div>
              <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "var(--on-dark)" }}>
                Te mandamos un mail de confirmación. Si no lo ves, revisá el correo no deseado.
              </p>
              <button
                type="button"
                onClick={() => { setEstado("idle"); setMensaje(""); }}
                className="btn"
                style={{ marginTop: 24, background: "transparent", color: "#FFFFFF", boxShadow: "inset 0 0 0 1.5px #3B4A41" }}
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form
              onSubmit={enviar}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14 }}
            >
              {/* Trampa para bots: invisible y fuera del orden de tabulación */}
              <input
                type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label htmlFor="f-nombre" style={etiqueta}>Nombre</label>
                <input id="f-nombre" name="nombre" type="text" placeholder="Tu nombre" required maxLength={120} style={campo} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label htmlFor="f-email" style={etiqueta}>Email laboral</label>
                <input id="f-email" name="email" type="email" placeholder="vos@empresa.com" required maxLength={160} style={campo} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label htmlFor="f-empresa" style={etiqueta}>Empresa</label>
                <input id="f-empresa" name="empresa" type="text" placeholder="Nombre de la empresa" required maxLength={160} style={campo} />
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
                  style={{ marginTop: 3, width: 16, height: 16, accentColor: "var(--mint)" }}
                />
                Acepto que Gondolapp use estos datos solo para contactarme por esta solicitud, según la{" "}
                <a href={LEGALES} style={{ color: "var(--mint)", fontWeight: 700 }}>Política de privacidad</a>.
              </label>

              <button
                type="submit"
                disabled={estado === "enviando"}
                className="btn"
                style={{ gridColumn: "1 / -1", background: "var(--mint)", color: "var(--ink)", fontWeight: 800, marginTop: 2 }}
              >
                {estado === "enviando" ? "Enviando…" : "Solicitar demo"}
              </button>

              {estado === "error" && (
                <p role="alert" style={{ gridColumn: "1 / -1", margin: 0, fontSize: 14, lineHeight: 1.5, color: "#FFC9C0", background: "rgba(255,120,100,.1)", border: "1px solid rgba(255,120,100,.3)", borderRadius: 12, padding: "12px 14px" }}>
                  {mensaje}{" "}
                  Siempre podés escribirnos a{" "}
                  <a href="mailto:hola@gondolapp.com" style={{ color: "var(--mint)", fontWeight: 700 }}>hola@gondolapp.com</a>.
                </p>
              )}

              <p style={{ gridColumn: "1 / -1", margin: 0, fontSize: 14, color: "#9FB0A6", textAlign: "center", fontWeight: 500 }}>
                o escribinos a <a href="mailto:hola@gondolapp.com" style={{ color: "var(--mint)", fontWeight: 700 }}>hola@gondolapp.com</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
