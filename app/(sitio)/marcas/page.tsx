import type { Metadata } from "next";
import PageMarcas from "@/components/dc/generado/PageMarcas";
import { metadatos } from "@/lib/seo";

/* Título y descripción aprobados por Manuel (25/11/2026), del texto de la página
   (docs/sitio/diseno-v1/Marcas.dc.html). */
export const metadata: Metadata = metadatos(
  "/marcas",
  "Relevamiento de góndola para marcas · Gondolapp",
  "Sabé qué pasa con tu marca en las góndolas del interior. Presencia, quiebres, frentes, precio y exhibición, relevados en el comercio y con su foto.",
);

export default function Pagina() {
  return <PageMarcas />;
}
