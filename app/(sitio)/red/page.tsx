import type { Metadata } from "next";
import PageRed from "@/components/dc/generado/PageRed";
import { metadatos } from "@/lib/seo";

/* Título y descripción aprobados por Manuel (25/11/2026), del texto de la página
   (docs/sitio/diseno-v1/Red.dc.html). */
export const metadata: Metadata = metadatos(
  "/red",
  "Hacer misiones · Gondolapp",
  "Sacás una foto de la góndola, respondés dos o tres preguntas y cada misión aprobada suma 100 Puntos, canjeables por productos en tu distribuidora.",
);

export default function Pagina() {
  return <PageRed />;
}
