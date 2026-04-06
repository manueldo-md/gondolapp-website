"use client";
import { useState } from "react";

const faqDistribuidoras = [
  { q:"¿Necesito tener repositores propios?", a:"No. Tus vendedores actuales usan la app durante sus visitas habituales. No hace falta contratar a nadie nuevo." },
  { q:"¿Qué pasa si un vendedor manda fotos truchas?", a:"Triple filtro: validación GPS en tiempo real, detección automática por IA, y aprobación humana de la distribuidora antes de que cuente." },
  { q:"¿Funciona fuera de Buenos Aires?", a:"Está diseñado específicamente para el interior. Ahí es donde la diferencia es mayor — las marcas y agencias tradicionales casi no llegan." },
  { q:"¿Cuánto cuesta?", a:"Depende del volumen y el tipo de servicio. Escribinos y armamos algo a medida para tu operación." },
  { q:"¿Los vendedores tienen que descargar algo?", a:"Una app web (PWA). Se instala desde el navegador en segundos, funciona offline y no ocupa espacio." },
];

const faqMarcas = [
  { q:"¿Qué datos recibo exactamente?", a:"Fotos verificadas de góndola con análisis de IA: share of shelf, presencia por SKU, precios reales en campo y detección de quiebres de stock. Todo geolocalizado y con timestamp." },
  { q:"¿Cómo sé que los datos son confiables?", a:"Triple validación: GPS en tiempo real confirma la ubicación, la IA analiza la imagen automáticamente, y un humano aprueba antes de que cuente en el reporte." },
  { q:"¿En qué zonas puedo activar campañas?", a:"Arrancamos en Entre Ríos y estamos expandiendo al resto del interior argentino. Consultanos por la zona que te interesa — probablemente ya tengamos cobertura o podamos activarla rápido." },
  { q:"¿Cuánto tarda en activarse una campaña?", a:"Entre 24 y 48 horas. Definís zona, SKUs y período desde el panel, y los vendedores empiezan a relevar en sus visitas habituales." },
  { q:"¿Cuánto cuesta?", a:"Depende del alcance geográfico y la cantidad de puntos de venta. Escribinos y te armamos una propuesta a medida." },
];

export default function FAQ() {
  const [tab, setTab] = useState<"distri" | "marcas">("distri");
  const [open, setOpen] = useState(0);

  const activeFaqs = tab === "distri" ? faqDistribuidoras : faqMarcas;

  function switchTab(t: "distri" | "marcas") {
    setTab(t);
    setOpen(-1);
  }

  return (
    <section id="faq" style={{ padding:"5rem 1.5rem", background:"var(--bg-subtle)" }}>
      <div style={{ maxWidth:720, margin:"0 auto" }}>
        <div className="blur-in" style={{ textAlign:"center", marginBottom:"2rem" }}>
          <h2 className="section-title">
            Preguntas frecuentes
          </h2>
        </div>

        {/* Tab selector */}
        <div style={{ textAlign:"center", marginBottom:"2rem" }}>
          <div className="faq-tabs">
            <button
              className={`faq-tab${tab === "distri" ? " active" : ""}`}
              onClick={() => switchTab("distri")}
            >
              Para Distribuidoras
            </button>
            <button
              className={`faq-tab${tab === "marcas" ? " active" : ""}`}
              onClick={() => switchTab("marcas")}
            >
              Para Marcas
            </button>
          </div>
        </div>

        {/* FAQ list */}
        <div key={tab} className="faq-list-enter" style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {activeFaqs.map((f,i)=>(
            <div key={i} className="card" style={{ padding:0 }}>
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
