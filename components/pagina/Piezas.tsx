import Link from "next/link";
import Image from "next/image";
import Halo from "@/components/site/Halo";
import type { Asset } from "@/lib/assets";
import type { ReactNode } from "react";

/* Piezas que se repiten en las 5 páginas internas. */

/* Fila etiqueta / valor de las tablas (la clase .row de la maqueta) */
export function Fila({ k, v, oscuro = false, borde }: { k: string; v: ReactNode; oscuro?: boolean; borde?: string }) {
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 20,
      alignItems: "baseline", padding: "18px 0",
      borderBottom: `1px solid ${borde ?? (oscuro ? "var(--line-on-dark)" : "var(--line)")}`,
    }}>
      <b style={{ fontWeight: 700, fontSize: 16 }}>{k}</b>
      <span style={{ fontSize: 15, fontWeight: 600, color: oscuro ? "var(--on-dark)" : "var(--text-2)", textAlign: "right" }}>{v}</span>
    </div>
  );
}

/* Hero de página interna: kicker con el color del actor, título, bajada,
   botones y captura a todo ancho, recta (sin inclinación). */
export function HeroPagina({
  tono, kicker, kickerColor, titulo, bajada, acciones, captura, alt, children,
}: {
  tono: "marcas" | "distribuidoras" | "repositoras" | "red" | "precios";
  kicker: string;
  kickerColor: string;
  titulo: ReactNode;
  bajada?: ReactNode;
  acciones?: ReactNode;
  captura?: Asset;
  alt?: string;
  children?: ReactNode;
}) {
  return (
    <section style={{ padding: "96px 0 0", position: "relative" }}>
      <Halo tono={tono} />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="kick" style={{ color: kickerColor }}>{kicker}</div>
        <h1 className="h1" style={{ margin: "22px 0 0", fontSize: "clamp(48px, 7.6vw, 110px)", maxWidth: 1200 }}>
          {titulo}
        </h1>

        {(bajada || acciones) && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "28px 64px", alignItems: "flex-end", justifyContent: "space-between", marginTop: 36 }}>
            {bajada && <p className="lead" style={{ margin: 0, maxWidth: 640 }}>{bajada}</p>}
            {acciones && <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{acciones}</div>}
          </div>
        )}

        {captura && (
          <div style={{ marginTop: 72 }}>
            <Image
              className="shot" src={captura.src} alt={alt ?? ""}
              width={captura.w} height={captura.h}
              sizes="(max-width: 900px) 92vw, 1320px"
              style={{ height: "auto" }}
            />
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

/* Tres o más columnas numeradas */
export function Columnas({ kicker, titulo, items }: {
  kicker: string;
  titulo: string;
  items: { n: string; t: string; d: string }[];
}) {
  return (
    <section style={{ padding: "120px 0 40px" }}>
      <div className="wrap">
        <div className="kick">{kicker}</div>
        <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(40px, 5.4vw, 76px)", maxWidth: 1000 }}>{titulo}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px 40px", marginTop: 64 }}>
          {items.map((c) => (
            <div key={c.n + c.t}>
              <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--text-2)" }}>{c.n}</div>
              <div style={{ fontWeight: 800, fontSize: 28, letterSpacing: "-0.03em", marginTop: 12 }}>{c.t}</div>
              <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.6, color: "var(--text-2)" }}>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Bloque con texto a un lado y captura al otro */
export function Showcase({
  kicker, titulo, texto, bullets, captura, alt, lado = "derecha", oscuro = false, acento,
}: {
  kicker: string;
  titulo: string;
  texto: string;
  bullets?: string[];
  captura: Asset;
  alt: string;
  lado?: "derecha" | "izquierda";
  oscuro?: boolean;
  acento?: string;
}) {
  const img = (
    <div style={{ flex: "1.4 1 560px", minWidth: 0 }}>
      <Image
        className={`shot ${lado === "izquierda" ? "bleedL" : "bleed"}${oscuro ? " shot-dark" : ""}`}
        src={captura.src} alt={alt} width={captura.w} height={captura.h}
        sizes="(max-width: 900px) 92vw, 60vw" style={{ height: "auto" }}
      />
    </div>
  );

  const txt = (
    <div style={{ flex: "1 1 380px", minWidth: 0, maxWidth: 520 }}>
      <div className="kick" style={acento ? { color: acento } : undefined}>{kicker}</div>
      <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(34px, 4vw, 56px)" }}>{titulo}</h2>
      <p className="lead" style={{ margin: "18px 0 0", fontSize: 17, ...(oscuro ? { color: "var(--on-dark)" } : null) }}>{texto}</p>
      {bullets && (
        <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 10, fontSize: 15, fontWeight: 600 }}>
          {bullets.map((b) => (
            <li key={b} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: 2, background: acento ?? "var(--primary)", flex: "0 0 auto", marginTop: 7 }} />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <section style={{ padding: oscuro ? "112px 0" : "96px 0", ...(oscuro ? { background: "var(--ink)", color: "#FFFFFF" } : null) }}>
      <div className="wrap" style={{ display: "flex", flexWrap: lado === "izquierda" ? "wrap-reverse" : "wrap", gap: 48, alignItems: "center" }}>
        {lado === "izquierda" ? <>{img}{txt}</> : <>{txt}{img}</>}
      </div>
    </section>
  );
}

/* Cierre oscuro con menta */
export function CierreOscuro({ titulo, resaltado, cta = "Solicitar demo" }: { titulo: string; resaltado: string; cta?: string }) {
  return (
    <section style={{ background: "var(--ink)", color: "#FFFFFF", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", right: -200, top: -200, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(126,226,168,0.22) 0%, rgba(126,226,168,0) 65%)", pointerEvents: "none" }} />
      <div className="wrap" style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center", justifyContent: "space-between" }}>
        <h2 className="h2" style={{ fontSize: "clamp(40px, 5.4vw, 80px)", maxWidth: 820 }}>
          {titulo} <span style={{ color: "var(--mint)" }}>{resaltado}</span>
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <Link href="/#demo" className="btn" style={{ background: "var(--mint)", color: "var(--ink)", fontWeight: 800 }}>{cta}</Link>
          <a href="mailto:hola@gondolapp.com" className="btn" style={{ color: "#FFFFFF", boxShadow: "inset 0 0 0 1.5px #3B4A41" }}>hola@gondolapp.com</a>
        </div>
      </div>
    </section>
  );
}

