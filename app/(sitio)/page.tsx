import type { Metadata } from "next";
import HomeDesktop from "@/components/dc/generado/HomeDesktop";
import HomeMobile from "@/components/dc/generado/HomeMobile";
import Responsive, { SaltoAlAncla } from "@/components/dc/Responsive";

import { metadatos } from "@/lib/seo";

/* Inicio: Main.dc.html en la compu y Mobile.dc.html en el celular.
   Título y descripción aprobados por Manuel (25/11/2026); la descripción es literal del héroe. */
export const metadata: Metadata = metadatos(
  "/",
  "Relevamiento de góndola en el canal tradicional · Gondolapp",
  "Tu equipo, las distribuidoras con las que trabajás o tu repositora relevan desde el celular; vos lo ves todo en vivo.",
);

export default function Inicio() {
  return (
    <>
      <Responsive desktop={<HomeDesktop />} mobile={<HomeMobile />} />
      <SaltoAlAncla />
    </>
  );
}
