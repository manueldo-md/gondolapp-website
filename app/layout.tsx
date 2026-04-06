import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Gondolapp — El mapa del consumo masivo argentino",
  description:
    "El primer sistema de inteligencia de mercado para el canal de distribución tradicional. Fotos reales, datos verificados, decisiones concretas.",
  keywords:
    "canal tradicional, trade marketing, distribuidoras, gondola, inteligencia de mercado, Argentina",
  openGraph: {
    title: "Gondolapp",
    description: "Tu góndola habla. ¿La estás escuchando?",
    url: "https://gondolapp.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
