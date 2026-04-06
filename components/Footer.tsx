"use client";
import Image from "next/image";

const cols = [
  { title:"Producto", links:[["Para marcas","#marcas"],["Para distribuidoras","#distribuidoras"],["Para gondoleros","#gondoleros"],["Cómo funciona","#solucion"]] },
  { title:"Empresa", links:[["El problema","#problema"],["Piloto","#numeros"],["Diferencial","#comparativa"],["FAQ","#faq"]] },
];

export default function Footer() {
  return (
    <footer style={{ background:"var(--slate-950)", padding:"3.5rem 1.5rem 2rem" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:"3rem", marginBottom:"3rem" }}>
          <div>
            <Image src="/logo.png" alt="GondolApp" width={140} height={40} style={{ height:34, width:"auto", filter:"brightness(0) invert(1)", opacity:0.8 }} />
            <p style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.85rem", marginTop:"0.75rem", lineHeight:1.6, maxWidth:240 }}>
              El mapa del consumo masivo argentino.
            </p>
            <a href="mailto:hola@gondolapp.com" style={{ display:"inline-block", marginTop:"1rem", color:"rgba(255,255,255,0.5)", fontSize:"0.82rem", textDecoration:"none" }}>
              hola@gondolapp.com
            </a>
          </div>
          {cols.map((col, ci) => (
            <div key={ci}>
              <p style={{ color:"rgba(255,255,255,0.25)", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"1rem" }}>{col.title}</p>
              {col.links.map(([l, h]) => (
                <a key={h} href={h} style={{ display:"block", color:"rgba(255,255,255,0.5)", fontSize:"0.85rem", textDecoration:"none", marginBottom:"0.5rem", transition:"color 0.2s" }}
                  onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
                  onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.5)")}
                >{l}</a>
              ))}
            </div>
          ))}
          <div>
            <p style={{ color:"rgba(255,255,255,0.25)", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"1rem" }}>Contacto</p>
            <a href="#contacto" className="btn btn-primary" style={{ fontSize:"0.82rem", padding:"9px 18px" }}>
              Acceso anticipado
            </a>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:"1.5rem", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.75rem" }}>
          <p style={{ color:"rgba(255,255,255,0.2)", fontSize:"0.75rem" }}>© 2026 GondolApp. Todos los derechos reservados. Argentina.</p>
          <p style={{ color:"rgba(255,255,255,0.2)", fontSize:"0.75rem" }}>gondolapp.com</p>
        </div>
      </div>
      <style>{`@media(max-width:768px){footer > div > div:first-child{grid-template-columns:1fr 1fr!important}}`}</style>
    </footer>
  );
}
