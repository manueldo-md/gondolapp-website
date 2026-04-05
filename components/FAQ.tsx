"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Necesito tener repositores propios?",
    a: "No. Tus vendedores actuales usan la app durante sus visitas habituales. No hace falta contratar a nadie nuevo.",
  },
  {
    q: "Que pasa si un vendedor manda fotos truchas?",
    a: "Triple filtro: validacion GPS en tiempo real, deteccion automatica por IA, y aprobacion humana de la distribuidora antes de que cuente.",
  },
  {
    q: "Funciona fuera de Buenos Aires?",
    a: "Esta disenado especificamente para el interior. Ahi es donde la diferencia es mayor — las marcas y agencias tradicionales casi no llegan.",
  },
  {
    q: "Cuanto cuesta?",
    a: "Depende del volumen y el tipo de servicio. Escribinos y armamos algo a medida para tu operacion.",
  },
  {
    q: "Los vendedores tienen que descargar algo?",
    a: "Una app web (PWA). Se instala desde el navegador en segundos, funciona offline y no ocupa espacio.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#F8F8F8] px-4">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-gray-900 text-center fade-in">
          Preguntas frecuentes
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="fade-in bg-white rounded-xl border border-gray-100 overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="font-medium text-gray-900">{faq.q}</span>
                <svg
                  className={`faq-arrow h-5 w-5 text-bosque shrink-0 ml-4 ${openIndex === i ? "rotated" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
