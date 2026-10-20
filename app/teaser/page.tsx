import type { Metadata } from "next";
import Image from "next/image";
import { IMG } from "@/lib/assets";
import FormularioDemo from "@/components/FormularioDemo";

/* Página teaser. La sirve el middleware en todas las rutas mientras
   TEASER_MODE esté en true. */

const LEGALES = "https://app.gondolapp.com/legales";

export const metadata: Metadata = {
  title: "Gondolapp — Muy pronto",
  description:
    "Inteligencia de góndola para el canal tradicional argentino. Dejanos tus datos y te avisamos cuando abramos.",
  /* Mientras el sitio está tapado, que los buscadores no lo indexen:
     si no, terminan guardando el teaser en lugar de las páginas reales. */
  robots: { index: false, follow: false },
  openGraph: {
    title: "Gondolapp — Muy pronto",
    description: "Inteligencia de góndola para el canal tradicional argentino.",
    url: "https://gondolapp.com",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

export default function Teaser() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "var(--ink)",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Halo menta, el mismo del bloque de demo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-18%",
          top: "-28%",
          width: 760,
          height: 760,
          maxWidth: "130vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(126,226,168,0.20) 0%, rgba(126,226,168,0) 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="wrap"
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 56,
          paddingBottom: 48,
        }}
      >
        <Image
          src={IMG.logoOscuro.src}
          alt="Gondolapp"
          width={150}
          height={39}
          priority
          /* alignSelf: el .wrap es un flex en columna y sin esto el logo
             se estira a todo el ancho */
          style={{ height: 39, width: "auto", display: "block", alignSelf: "flex-start" }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "48px 64px",
            alignItems: "center",
            marginTop: 56,
          }}
        >
          <div style={{ flex: "1 1 440px", minWidth: 0 }}>
            <div className="kick" style={{ color: "var(--mint)" }}>
              Pre-lanzamiento · Argentina
            </div>

            <h1
              className="h1"
              style={{ margin: "20px 0 0", fontSize: "clamp(40px, 5.6vw, 76px)" }}
            >
              Tu góndola habla,
              <br />
              <span style={{ color: "var(--mint)" }}>¡escuchala!</span>
            </h1>

            <p
              className="lead"
              style={{ margin: "24px 0 0", maxWidth: 540, color: "var(--on-dark)" }}
            >
              Estamos terminando de preparar el lanzamiento. Gondolapp convierte el recorrido que tu
              fuerza de venta ya hace en datos de góndola en tiempo real: presencia, quiebres,
              precio y exhibición, con foto y GPS de respaldo.
            </p>

            <p
              style={{
                margin: "20px 0 0",
                maxWidth: 540,
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--on-dark)",
                fontWeight: 600,
              }}
            >
              Dejanos tus datos y te avisamos apenas abramos.
            </p>
          </div>

          <div style={{ flex: "1 1 380px", minWidth: 0 }}>
            <FormularioDemo textoBoton="Quiero que me avisen" idPrefijo="t" />
          </div>
        </div>
      </div>

      <div
        className="wrap"
        style={{
          position: "relative",
          paddingTop: 24,
          paddingBottom: 32,
          borderTop: "1px solid var(--line-on-dark)",
          fontSize: 13,
          lineHeight: 1.6,
          color: "#9FB0A6",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 24px",
          justifyContent: "space-between",
        }}
      >
        <span>© 2026 Gondolapp · Hecho en Entre Ríos, Argentina</span>
        <span style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          <a href="https://app.gondolapp.com" style={{ color: "#9FB0A6" }}>
            Ingresar
          </a>
          <a href={LEGALES} style={{ color: "#9FB0A6" }}>
            Términos y privacidad
          </a>
          <a href="mailto:hola@gondolapp.com" style={{ color: "#9FB0A6" }}>
            hola@gondolapp.com
          </a>
        </span>
      </div>
    </main>
  );
}
