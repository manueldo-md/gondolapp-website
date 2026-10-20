import type { Metadata } from "next";
import Image from "next/image";
import { IMG } from "@/lib/assets";

/* Página teaser. La sirve el middleware en todas las rutas mientras
   TEASER_MODE esté en true.

   Al mínimo a propósito: marca, una línea y un mail de contacto. El único
   enlace de toda la página es el mailto. */

export const metadata: Metadata = {
  title: "Gondolapp",
  description: "El mapa del consumo masivo argentino. Estamos a días de salir.",
  /* Mientras el sitio está tapado, que los buscadores no lo indexen:
     si no, terminan guardando el teaser en lugar de las páginas reales. */
  robots: { index: false, follow: false },
  openGraph: {
    title: "Gondolapp",
    description: "El mapa del consumo masivo argentino. Estamos a días de salir.",
    url: "https://gondolapp.com",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

export default function Teaser() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "#FFFFFF",
        color: "var(--ink)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "32px 24px 24px",
        boxSizing: "border-box",
      }}
    >
      {/* El bloque ocupa el espacio libre y se centra adentro; así el
          copyright queda al pie sin desarmar el centrado. */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={IMG.logoClaro.src}
          alt="Gondolapp"
          width={240}
          height={63}
          priority
          style={{ height: "auto", width: "min(240px, 64vw)", display: "block" }}
        />

        <p
          style={{
            margin: "32px 0 0",
            fontSize: "clamp(21px, 3.4vw, 30px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.25,
            maxWidth: 580,
          }}
        >
          El mapa del consumo masivo argentino.
        </p>

        <p
          style={{
            margin: "18px 0 0",
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--text-2)",
            maxWidth: 440,
          }}
        >
          Estamos a días de salir. Si querés información anticipada, escribinos a{" "}
          <a href="mailto:hola@gondolapp.com" style={{ color: "var(--ink)", fontWeight: 700 }}>
            hola@gondolapp.com
          </a>
        </p>
      </div>

      <p style={{ margin: 0, paddingTop: 32, fontSize: 12, color: "var(--text-2)" }}>
        © 2026 Gondolapp
      </p>
    </main>
  );
}
