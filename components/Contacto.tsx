"use client";

import { useState } from "react";

export default function Contacto() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      rol: (form.elements.namedItem("rol") as HTMLSelectElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(135deg, #0c1f14, #143d24, #1a5c2e)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="hero-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div className="max-w-2xl mx-auto relative" style={{ zIndex: 2 }}>
        <div className="text-center fade-up" style={{ marginBottom: "2.5rem" }}>
          <div className="pill pill-light" style={{ marginBottom: "1rem" }}>Acceso anticipado</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "1rem",
              fontFamily: "var(--font-syne)",
            }}
          >
            Sumate a la lista de espera
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7 }}>
            Estamos construyendo. Los primeros en sumarse van a tener acceso preferencial, input directo en el producto y condiciones especiales.
          </p>
        </div>

        {status === "success" ? (
          <div
            className="fade-up"
            style={{
              background: "rgba(61,184,154,0.12)",
              border: "1px solid var(--teal)",
              borderRadius: 16,
              padding: "2rem",
              textAlign: "center",
              color: "var(--teal-light)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>✓</div>
            <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.25rem" }}>¡Estás en la lista!</h3>
            <p style={{ fontSize: "0.93rem", opacity: 0.8 }}>Te vamos a contactar cuando estemos listos. Gracias por sumarte.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input name="nombre" type="text" required placeholder="Tu nombre *" className="form-input-dark" />
            <input name="empresa" type="text" required placeholder="Empresa *" className="form-input-dark" />
            <select name="rol" required defaultValue="" className="form-select-dark">
              <option value="" disabled>¿Cuál es tu perfil? *</option>
              <option value="distribuidora">Distribuidora</option>
              <option value="marca">Marca / CPG</option>
              <option value="agencia">Agencia de Trade Marketing</option>
              <option value="vendedor">Vendedor / Repositor</option>
              <option value="inversor">Inversor</option>
              <option value="otro">Otro</option>
            </select>
            <input name="email" type="email" required placeholder="tu@email.com *" className="form-input-dark" />
            <input name="whatsapp" type="tel" placeholder="WhatsApp (opcional)" className="form-input-dark" />
            <textarea
              name="mensaje"
              rows={3}
              placeholder="Contanos brevemente tu operación (opcional)"
              className="form-input-dark"
              style={{ resize: "none" }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary pulse"
              style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem", opacity: status === "loading" ? 0.7 : 1 }}
            >
              {status === "loading" ? "Enviando..." : "Quiero acceso anticipado"}
              {status !== "loading" && (
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </button>
            {status === "error" && (
              <p style={{ textAlign: "center", color: "#fca5a5", fontSize: "0.88rem" }}>
                Algo salió mal. Escribinos a hola@gondolapp.com
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
