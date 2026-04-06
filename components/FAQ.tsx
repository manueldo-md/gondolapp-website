"use client";
import { useState } from "react";

const faqs = [
  { q:"¿Necesito tener repositores propios?", a:"No. Tus vendedores actuales usan la app durante sus visitas habituales. No hace falta contratar a nadie nuevo." },
  { q:"¿Qué pasa si un vendedor manda fotos truchas?", a:"Triple filtro: validación GPS en tiempo real, detección automática por IA, y aprobación humana de la distribuidora antes de que cuente." },
  { q:"¿Funciona fuera de Buenos Aires?", a:"Está diseñado específicamente para el interior. Ahí es donde la diferencia es mayor — las marcas y agencias tradicionales casi no llegan." },
  { q:"¿Cuánto cuesta?", a:"Depende del volumen y el tipo de servicio. Escribinos y armamos algo a medida para tu operación." },
  { q:"¿Los vendedores tienen que descargar algo?", a:"Una app web (PWA). Se instala desde el navegador en segundos, funciona offline y no ocupa espacio." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ padding:"5rem 1.5rem", background:"var(--bg-subtle)" }}>
      <div style={{ maxWidth:720, margin:"0 auto" }}>
        <div className="blur-in" style={{ textAlign:"center", marginBottom:"3rem" }}>
          <span className="badge" style={{ marginBottom:"1rem", display:"inline-flex" }}>FAQ</span>
          <h2 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(1.75rem,3.5vw,2.5rem)", fontWeight:800, letterSpacing:"-0.02em", color:"var(--text)", lineHeight:1.2 }}>
            Preguntas frecuentes
          </h2>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {faqs.map((f,i)=>(
            <div key={i} className="card blur-in" style={{ padding:0, transitionDelay:`${i*80}ms` }}>
              <button onClick={()=>setOpen(open===i?-1:i)} style={{ width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1.1rem 1.4rem", background:"none", border:"none", cursor:"pointer", textAlign:"left", gap:16 }}>
                <span style={{ fontFamily:"var(--font-heading)", fontWeight:600, color:"var(--text)", fontSize:"0.95rem" }}>{f.q}</span>
                <svg className={`faq-chevron ${open===i?"open":""}`} width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--g-600)" strokeWidth={2.5} style={{ flexShrink:0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`faq-answer ${open===i?"open":""}`}>
                <p style={{ padding:"0 1.4rem 1.1rem", color:"var(--text-muted)", lineHeight:1.7, fontSize:"0.9rem" }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
