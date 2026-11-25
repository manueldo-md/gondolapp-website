import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./dc.css";
import { IMAGEN_OG, JSON_LD, OPEN_GRAPH_BASE, SITIO } from "@/lib/seo";

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

/* Lo de base para todo el sitio. Cada página pone su título, descripción,
   canonical y Open Graph con metadatos() de lib/seo.ts. */
export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: "Gondolapp",
  applicationName: "Gondolapp",
  openGraph: OPEN_GRAPH_BASE,
  twitter: { card: "summary_large_image", images: [IMAGEN_OG.url] },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* data-scroll-behavior: le avisa a Next que el html tiene scroll
       suave, para que lo desactive mientras cambia de página y el salto
       al ancla caiga donde tiene que caer. */
    <html
      lang="es-AR"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
        />
        <div className="site-root">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
