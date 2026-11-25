import type { Metadata } from "next";
import PageRepositoras from "@/components/dc/generado/PageRepositoras";
import { metadatos } from "@/lib/seo";

/* Título y descripción aprobados por Manuel (25/11/2026); la descripción, sin «ubicación»
   porque no siempre viaja (foto sin GPS todavía entra, regla M3 de la V1.3)
   (docs/sitio/diseno-v1/Repositoras.dc.html). */
export const metadata: Metadata = metadatos(
  "/repositoras",
  "Para repositoras y agencias de trade · Gondolapp",
  "Gondolapp es el soporte de tu servicio: cada visita de tu equipo de calle queda registrada con hora y respuestas, y tu cliente la ve en su propio panel.",
);

export default function Pagina() {
  return <PageRepositoras />;
}
