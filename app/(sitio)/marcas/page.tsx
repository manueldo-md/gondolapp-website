import type { Metadata } from "next";
import PageMarcas from "@/components/dc/generado/PageMarcas";

/* Título y bajada: los del diseño aprobado (docs/sitio/diseno-v1/Marcas.dc.html). */
const titulo = "Gondolapp para marcas";
const descripcion = "Presencia, quiebres, frentes, precio y exhibición, relevados en el comercio y con su foto. Campañas que lanzás hoy con tu equipo, las distribuidoras con las que trabajás o tu repositora, y seguís en vivo desde un solo panel.";

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  openGraph: {
    title: titulo,
    description: descripcion,
    url: "https://gondolapp.com/marcas",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

export default function Pagina() {
  return <PageMarcas />;
}
