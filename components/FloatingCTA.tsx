"use client";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    const fn = () => { if (!dismissed) setVisible(window.scrollY > 400); };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [dismissed]);
  if (!visible || dismissed) return null;
  return (
    <div className="md:hidden" style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:50, padding:"0.75rem", background:"rgba(255,255,255,0.92)", backdropFilter:"blur(16px)", borderTop:"1px solid var(--border)" }}>
      <div style={{ display:"flex", gap:8 }}>
        <a href="#contacto" className="btn btn-primary" style={{ flex:1, justifyContent:"center", fontSize:"0.9rem" }}>
          Acceso anticipado →
        </a>
        <button onClick={()=>setDismissed(true)} style={{ padding:8, background:"none", border:"1px solid var(--border)", borderRadius:8, cursor:"pointer", color:"var(--text-muted)" }}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>
  );
}
