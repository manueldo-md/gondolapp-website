"use client";

import { useState } from "react";

/* Formulario del teaser: solo el email.
   El formulario completo (empresa, perfil, consentimiento) vive en el
   sitio real, en components/FormularioDemo.tsx. */

const LEGALES = "https://app.gondolapp.com/legales";

type Estado = "idle" | "enviando" | "enviado" | "error";

export default function FormularioTeaser() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [mensaje, setMensaje] = useState("");

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (estado === "enviando") return;

    const f = new FormData(e.currentTarget);
    setEstado("enviando");
    setMensaje("");

    try {
      const r = await fetch("/api/teaser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: f.get("email"), website: f.get("website") }),
      });
      const data = await r.json().catch(() => ({}));

      if (r.ok && data.ok) {
        setEstado("enviado");
      } else {
        setEstado("error");
        setMensaje(data.error ?? "No pudimos guardar tu email.");
      }
    } catch {
      setEstado("error");
      setMensaje("No pudimos conectarnos. Revisá tu conexión e intentá de nuevo.");
    }
  }

  if (estado === "enviado") {
    return (
      <div role="status" style={{ display: "flex", alignItems: "center", gap: 14, animation: "gin .3s ease" }}>
        <span
          aria-hidden="true"
          style={{ flex: "0 0 auto", width: 40, height: 40, borderRadius: "50%", background: "var(--mint)", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </span>
        <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>
          Listo, te avisamos.
        </span>
      </div>
    );
  }

  return (
    /* 560: el campo (240 minimo) y el boton (230) entran en una linea
       en escritorio; mas angosto, el flex-wrap los apila solo. */
    <form onSubmit={enviar} style={{ maxWidth: 560 }}>
      {/* Trampa para bots: invisible y fuera del orden de tabulación */}
      <input
        type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        <label htmlFor="t-email" className="sr-only">Tu email</label>
        <input
          id="t-email"
          name="email"
          type="email"
          placeholder="Tu email"
          required
          maxLength={160}
          autoComplete="email"
          style={{
            flex: "1 1 240px",
            minWidth: 0,
            background: "#17241C",
            border: "1px solid var(--line-on-dark)",
            color: "#FFFFFF",
            borderRadius: 999,
            padding: "0 22px",
            minHeight: 56,
            fontFamily: "inherit",
            fontSize: 16,
          }}
        />
        <button
          type="submit"
          disabled={estado === "enviando"}
          className="btn"
          style={{ background: "var(--mint)", color: "var(--ink)", fontWeight: 800, flex: "0 0 auto" }}
        >
          {estado === "enviando" ? "Enviando…" : "Avisame cuando salga"}
        </button>
      </div>

      {estado === "error" && (
        <p role="alert" style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.5, color: "#FFC9C0" }}>
          {mensaje}{" "}
          Siempre podés escribirnos a{" "}
          <a href="mailto:hola@gondolapp.com" style={{ color: "var(--mint)", fontWeight: 700 }}>hola@gondolapp.com</a>.
        </p>
      )}

      {/* Sin casilla de consentimiento, pero el aviso tiene que estar:
          se está guardando un dato personal. */}
      <p style={{ margin: "14px 0 0", fontSize: 13, lineHeight: 1.5, color: "#9FB0A6" }}>
        Al dejarnos tu email aceptás nuestra{" "}
        <a href={LEGALES} style={{ color: "#9FB0A6", fontWeight: 600 }}>Política de privacidad</a>.
        Lo usamos solo para avisarte.
      </p>
    </form>
  );
}
