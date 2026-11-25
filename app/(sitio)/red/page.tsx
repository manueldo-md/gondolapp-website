import type { Metadata } from "next";
import PageRed from "@/components/dc/generado/PageRed";

/* Título y bajada: los del diseño aprobado (docs/sitio/diseno-v1/Red.dc.html). */
const titulo = "Gondolapp: hacer misiones";
const descripcion = "Sacás una foto de la góndola, respondés dos o tres preguntas y cada misión aprobada suma 100 Puntos, canjeables por productos en tu distribuidora.";

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  openGraph: {
    title: titulo,
    description: descripcion,
    url: "https://gondolapp.com/red",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

export default function Pagina() {
  return <PageRed />;
}
