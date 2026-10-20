import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

/* Fuentes auto-hospedadas en vez de next/font/google.
   Dos motivos: el build no corre en Windows ARM64 cuando Next intenta
   bajarlas de Google (bug de http2), y servidas desde el mismo dominio
   evitan una conexion extra al cargar. Son las mismas dos familias que
   pide el brief, en su version variable: 55 KB las dos juntas. */

const manrope = localFont({
  src: "./fonts/manrope-var-latin.woff2",
  weight: "400 800",
  style: "normal",
  variable: "--font-sans",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/jetbrains-mono-var-latin.woff2",
  weight: "400 500",
  style: "normal",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gondolapp.com"),
  title: {
    default: "Gondolapp — Tu góndola habla, ¡escuchala!",
    template: "%s",
  },
  description:
    "La plataforma para ejecutar y medir campañas en el canal tradicional. Tu equipo, tus distribuidoras o tu repositora relevan desde el celular; vos lo ves todo en vivo.",
  applicationName: "Gondolapp",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Gondolapp",
    url: "https://gondolapp.com",
    title: "Gondolapp — Tu góndola habla, ¡escuchala!",
    description:
      "Datos de góndola en tiempo real, desde el recorrido que tu fuerza de venta ya hace.",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gondolapp — Tu góndola habla, ¡escuchala!",
    description:
      "Datos de góndola en tiempo real, desde el recorrido que tu fuerza de venta ya hace.",
    images: ["/gondolapp-assets/brand/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* js-reveal va en el HTML del servidor (no por script) para que el
       cliente hidrate exactamente lo mismo. El <noscript> revierte el
       ocultamiento si el visitante no tiene JS. */
    <html lang="es" className={`${manrope.variable} ${mono.variable} js-reveal`}>
      <head>
        <noscript>
          <style>{`
            .js-reveal :is(section > .wrap > *, section > .hs, footer > .wrap > *):not(.in),
            .js-reveal :is(.shot, section img[alt]):not(.in) { opacity: 1 !important; }
          `}</style>
        </noscript>
      </head>
      <body>
        <div className="site-root">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
