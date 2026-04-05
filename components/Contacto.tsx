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
    <section id="contacto" className="py-16 md:py-24 bg-bosque px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-white fade-in">
          El canal tradicional no va a medirse solo.
        </h2>
        <p className="mt-6 text-white/80 text-lg fade-in" style={{ transitionDelay: "150ms" }}>
          Ya hay distribuidoras del interior operando con datos reales.
          <br />
          Ya hay marcas auditando sus gondolas sin mandar a nadie.
          <br />
          Tu competencia se va a enterar antes que vos?
        </p>
      </div>

      <div className="mx-auto max-w-md mt-10 fade-in" style={{ transitionDelay: "300ms" }}>
        <div className="bg-white rounded-2xl p-8">
          <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-gray-900 text-center">
            Quiero ver Gondolapp en accion
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              name="nombre"
              type="text"
              required
              placeholder="Nombre completo *"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-bosque focus:ring-1 focus:ring-bosque outline-none"
            />
            <input
              name="empresa"
              type="text"
              required
              placeholder="Empresa *"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-bosque focus:ring-1 focus:ring-bosque outline-none"
            />
            <select
              name="rol"
              required
              defaultValue=""
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-bosque focus:ring-1 focus:ring-bosque outline-none text-gray-500"
            >
              <option value="" disabled>Rol *</option>
              <option value="marca">Soy marca</option>
              <option value="distribuidora">Soy distribuidora</option>
              <option value="otro">Otro</option>
            </select>
            <input
              name="email"
              type="email"
              required
              placeholder="Email *"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-bosque focus:ring-1 focus:ring-bosque outline-none"
            />
            <input
              name="whatsapp"
              type="tel"
              placeholder="WhatsApp (opcional)"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-bosque focus:ring-1 focus:ring-bosque outline-none"
            />
            <textarea
              name="mensaje"
              rows={3}
              placeholder="Contanos brevemente tu operacion"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-bosque focus:ring-1 focus:ring-bosque outline-none resize-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-bosque py-3.5 text-white font-medium hover:bg-pradera transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Enviar → Nos contactamos en 24hs"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-green-600 font-medium">
                Gracias! Te contactamos en menos de 24hs.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-600 font-medium">
                Algo salio mal. Escribinos a hola@gondolapp.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
