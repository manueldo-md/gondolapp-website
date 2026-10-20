import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gondolapp.com"),
  title: "Gondolapp — Tu góndola habla, ¡escuchala!",
  description:
    "La plataforma que convierte el recorrido diario de los vendedores en datos de góndola en tiempo real. Para marcas, distribuidoras y repositoras.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Gondolapp",
    title: "Gondolapp — Tu góndola habla, ¡escuchala!",
    description:
      "Datos de góndola en tiempo real, desde el recorrido que tu fuerza de venta ya hace.",
    images: ["/gondolapp-assets/brand/icon-512.png"],
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
        <div className="site-root">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Reveal />
        <Analytics />
      </body>
    </html>
  );
}
