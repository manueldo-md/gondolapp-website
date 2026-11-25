import type { Metadata } from "next";
import PagePrecios from "@/components/dc/generado/PagePrecios";

/* Título y bajada: los del diseño aprobado (docs/sitio/diseno-v1/Precios.dc.html). */
const titulo = "Gondolapp — Precios";
const descripcion = "Sin abono mensual ni licencias por usuario. Cargás saldo y pagás por lo que se releva. Lo que no se usa, vuelve a tu saldo. Y la primera campaña va por nuestra cuenta.";

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  openGraph: {
    title: titulo,
    description: descripcion,
    url: "https://gondolapp.com/precios",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

export default function Pagina() {
  return <PagePrecios />;
}
