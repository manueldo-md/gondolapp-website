"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito tener repositores propios?",
    a: "No. Tus vendedores actuales usan la app durante sus visitas habituales. No hace falta contratar a nadie nuevo.",
  },
  {
    q: "¿Qué pasa si un vendedor manda fotos truchas?",
    a: "Triple filtro: validación GPS en tiempo real, detección automática por IA, y aprobación humana de la distribuidora antes de que cuente.",
  },
  {
    q: "¿Funciona fuera de Buenos Aires?",
    a: "Está diseñado específicamente para el interior. Ahí es donde la diferencia es mayor — las marcas y agencias tradicionales casi no llegan.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Depende del volumen y el tipo de servicio. Escribinos y armamos algo a medida para tu operación.",
  },
  {
    q: "¿Los vendedores tienen que descargar algo?",
    a: "Una app web (PWA). Se instala desde el navegador en segundos, funciona offline y no ocupa espacio.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" style={{ padding: "6rem 1.5rem" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center fade-up" style={{ marginBottom: "3rem" }}>
          <div className="pill" style={{ marginBottom: "1rem" }}>FAQ</div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "var(--green-dark)",
              lineHeight: 1.15,
              fontFamily: "var(--font-syne)",
            }}
          >
            Preguntas frecuentes
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card-hover fade-up"
              style={{ padding: 0, overflow: "hidden", transitionDelay: `${i * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                }}
              >
                <span style={{ fontWeight: 600, color: "#1a1a2e", fontSize: "0.97rem" }}>{faq.q}</span>
                <svg
                  className={`faq-arrow ${openIndex === i ? "rotated" : ""}`}
                  width="20" height="20" fill="none" viewBox="0 0 24 24"
                  stroke="var(--green-mid)" strokeWidth={2}
                  style={{ flexShrink: 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <p style={{ padding: "0 1.5rem 1.25rem", color: "#5a6672", lineHeight: 1.7, fontSize: "0.93rem" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
