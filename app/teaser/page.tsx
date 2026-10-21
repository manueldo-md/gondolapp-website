import type { Metadata } from "next";
import Image from "next/image";
import { IMG } from "@/lib/assets";

/* Página teaser, portada del tablero "Teaser (pre-lanzamiento)".
   La sirve el middleware en todas las rutas mientras TEASER_MODE esté
   en true.

   Una sola pantalla, sin header ni pie del sitio. El único enlace es el
   mailto. */

export const metadata: Metadata = {
  title: "Gondolapp",
  description: "Estamos a días de salir. El mapa del consumo masivo argentino.",
  /* Mientras el sitio está tapado, que los buscadores no lo indexen:
     si no, terminan guardando el teaser en lugar de las páginas reales. */
  robots: { index: false, follow: false },
  openGraph: {
    title: "Gondolapp",
    description: "Estamos a días de salir. El mapa del consumo masivo argentino.",
    url: "https://gondolapp.com",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

/* Cada elemento entra 0,1 s después del anterior */
const sube = (demora: string) => ({ animation: `rise .6s ${demora} ease both` });

export default function Teaser() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
        backgroundImage: "radial-gradient(#E6EAE6 1.1px, transparent 1.1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Halo lila arriba */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(139,124,246,0.18) 0%, rgba(139,124,246,0) 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Degradado a blanco: desvanece la trama en la mitad de abajo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFFFFF 100%)",
          pointerEvents: "none",
        }}
      />

      <main
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "68px 24px 80px",
        }}
      >
        <Image
          src={IMG.logoClaro.src}
          alt="Gondolapp"
          width={301}
          height={78}
          priority
          className="teaser-logo"
          style={{ display: "block", objectFit: "cover", objectPosition: "50% 100%", ...sube("0s") }}
        />

        <h1
          style={{
            margin: "22px 0 0",
            fontWeight: 800,
            /* El 8vw y el tope de 120px son los del tablero. El minimo baja
               de 56 a 44 porque a 390px de ancho 56px parte el titulo en tres
               lineas en vez de las dos del diseno. Arriba de 700px no cambia
               nada: ahi manda el 8vw. */
            fontSize: "clamp(44px, 8vw, 120px)",
            letterSpacing: "-.055em",
            lineHeight: 0.92,
            maxWidth: 1000,
            ...sube(".2s"),
          }}
        >
          Estamos a días
          <br />
          de{" "}
          <span
            style={{
              background: "linear-gradient(92deg,#1E2B5B 0%,#5B4BD6 55%,#8B7CF6 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              paddingRight: ".06em",
            }}
          >
            salir.
          </span>
        </h1>

        <p
          style={{
            margin: "28px 0 0",
            fontSize: "clamp(18px, 1.6vw, 22px)",
            lineHeight: 1.5,
            color: "#4E5D53",
            fontWeight: 500,
            maxWidth: 560,
            ...sube(".3s"),
          }}
        >
          El mapa del consumo masivo argentino.
        </p>

        <a
          href="mailto:hola@gondolapp.com"
          style={{
            marginTop: 40,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            minHeight: 58,
            padding: "0 28px",
            borderRadius: 999,
            background: "#0F1A14",
            color: "#FFFFFF",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 16,
            maxWidth: "100%",
            boxSizing: "border-box",
            ...sube(".4s"),
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 auto" }}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          hola@gondolapp.com
        </a>

        <p style={{ margin: "16px 0 0", fontSize: 14, color: "#5B6B61", fontWeight: 500, ...sube(".5s") }}>
          Si querés información anticipada, escribinos.
        </p>
      </main>

      <footer
        style={{
          position: "relative",
          padding: "0 24px 32px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          fontSize: 12,
          color: "#7A877F",
          fontWeight: 500,
        }}
      >
        © 2026 Gondolapp · Hecho en Entre Ríos, Argentina
      </footer>

      <style>{`
        /* El logo va a 78px salvo en pantallas angostas, donde encogerlo
           deja respirar al titulo. */
        .teaser-logo { height: 78px; width: 301px; }
        @media (max-width: 560px) {
          .teaser-logo { height: 58px; width: 224px; }
        }
      `}</style>
    </div>
  );
}
