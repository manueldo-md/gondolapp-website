import type { Metadata } from "next";
import PageRepositoras from "@/components/dc/generado/PageRepositoras";
import { metadatos } from "@/lib/seo";

/* Título y descripción aprobados por Manuel (25/11/2026), del texto de la página
   (docs/sitio/diseno-v1/Repositoras.dc.html). */
export const metadata: Metadata = metadatos(
  "/repositoras",
  "Para repositoras y agencias de trade · Gondolapp",
  "Gondolapp es el soporte de tu servicio: cada visita de tu equipo de calle queda con foto, ubicación y respuestas, y tu cliente la ve en su propio panel.",
);

export default function Pagina() {
  return <PageRepositoras />;
}
