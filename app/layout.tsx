import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Gondolapp — El mapa del consumo masivo argentino",
  description:
    "El primer sistema de inteligencia de mercado para el canal de distribucion tradicional. Fotos reales, datos verificados, decisiones concretas.",
  keywords:
    "canal tradicional, trade marketing, distribuidoras, gondola, inteligencia de mercado, Argentina",
  openGraph: {
    title: "Gondolapp",
    description: "Tu gondola habla. La estas escuchando?",
    url: "https://gondolapp.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
