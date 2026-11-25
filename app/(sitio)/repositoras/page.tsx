import type { Metadata } from "next";
import PageRepositoras from "@/components/dc/generado/PageRepositoras";

/* Título y bajada: los del diseño aprobado (docs/sitio/diseno-v1/Repositoras.dc.html). */
const titulo = "Gondolapp para repositoras";
const descripcion = "Gondolapp es el soporte de tu servicio: cada visita de tu equipo de calle queda con foto, ubicación y respuestas, y tu cliente la ve en su propio panel.";

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  openGraph: {
    title: titulo,
    description: descripcion,
    url: "https://gondolapp.com/repositoras",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

export default function Pagina() {
  return <PageRepositoras />;
}
