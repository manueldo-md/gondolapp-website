"use client";
import { useState } from "react";

export default function Contacto() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const get = (n: string) => (form.elements.namedItem(n) as HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement).value;
    try {
      const res = await fetch("/api/demo", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ nombre:get("nombre"), empresa:get("empresa"), rol:get("rol"), email:get("email"), whatsapp:get("whatsapp"), mensaje:get("mensaje") }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch { setStatus("error"); }
  }

  return (
    <section id="contacto" style={{
      padding:"5rem 1.5rem",
      background:"linear-gradient(135deg, var(--g-900), #0a2e1a, var(--g-800))",
      position:"relative", overflow:"hidden",
    }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", opacity:0.1,
        backgroundImage:"linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)",
        backgroundSize:"64px 64px" }} />

      <div style={{ maxWidth:560, margin:"0 auto", position:"relative", zIndex:2 }}>
        <div className="blur-in" style={{ textAlign:"center", marginBottom:"2.5rem" }}>
          <span className="badge badge-dark" style={{ marginBottom:"1rem", display:"inline-flex" }}>
            <span className="glow-dot" />
            Acceso anticipado
          </span>
          <h2 style={{ fontFamily:"var(--font-heading)", fontSize:"clamp(2rem,4vw,2.75rem)", fontWeight:800, letterSpacing:"-0.03em", color:"#fff", lineHeight:1.1, marginBottom:"1rem" }}>
            Sumate a la lista de espera
          </h2>
          <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"1rem", lineHeight:1.7 }}>
            Los primeros en sumarse tienen acceso preferencial, input directo en el producto y condiciones especiales.
          </p>
        </div>

        {status === "success" ? (
          <div style={{ background:"rgba(45,212,191,0.1)", border:"1px solid rgba(45,212,191,0.3)", borderRadius:16, padding:"2.5rem", textAlign:"center", color:"var(--t-400)" }}>
            <div style={{ fontSize:"2.5rem", marginBottom:"0.5rem" }}>✓</div>
            <h3 style={{ fontFamily:"var(--font-heading)", fontWeight:700, fontSize:"1.1rem", marginBottom:"0.25rem" }}>¡Estás en la lista!</h3>
            <p style={{ fontSize:"0.9rem", opacity:0.8 }}>Te contactamos cuando estemos listos. Gracias por sumarte.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="blur-in" style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem" }}>
              <input name="nombre" type="text" required placeholder="Tu nombre *" className="input-dark" />
              <input name="empresa" type="text" required placeholder="Empresa *" className="input-dark" />
            </div>
            <select name="rol" required defaultValue="" className="select-dark">
              <option value="" disabled>¿Cuál es tu perfil? *</option>
              <option value="distribuidora">Distribuidora</option>
              <option value="marca">Marca / CPG</option>
              <option value="agencia">Agencia de Trade Marketing</option>
              <option value="vendedor">Vendedor / Repositor</option>
              <option value="inversor">Inversor</option>
              <option value="otro">Otro</option>
            </select>
            <input name="email" type="email" required placeholder="tu@email.com *" className="input-dark" />
            <input name="whatsapp" type="tel" placeholder="WhatsApp (opcional)" className="input-dark" />
            <textarea name="mensaje" rows={3} placeholder="Contanos brevemente tu operación (opcional)" className="input-dark" style={{ resize:"none" }} />
            <button type="submit" disabled={status==="loading"} className="btn btn-primary" style={{ width:"100%", justifyContent:"center", fontSize:"1rem", padding:"14px 28px", marginTop:"0.25rem", opacity:status==="loading"?0.7:1 }}>
              {status==="loading" ? "Enviando..." : "Quiero acceso anticipado"}
              {status!=="loading" && <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
            </button>
            {status==="error" && <p style={{ textAlign:"center", color:"#fca5a5", fontSize:"0.85rem" }}>Algo salió mal. Escribinos a hola@gondolapp.com</p>}
          </form>
        )}
      </div>
    </section>
  );
}
