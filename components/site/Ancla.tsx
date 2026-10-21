"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Lleva la página hasta la sección del # cuando se llega desde otra
   página (por ejemplo /marcas → /#ecosistema).

   Hace falta porque el navegador intenta saltar al ancla en el momento
   del cambio de ruta, cuando la home todavía no se dibujó: no encuentra
   la sección y se queda arriba. Dentro de la misma página el salto
   nativo funciona bien y esto no estorba.

   Se reintenta unas cuantas veces porque el alto de la página sigue
   creciendo mientras cargan las imágenes, y porque Next hace su propio
   scroll al cambiar de ruta. Si el visitante scrollea, toca o usa el
   teclado, se corta en el acto: manda él. */

const MARGEN = 84; // el mismo scroll-padding-top del html
const INTENTOS = [0, 60, 150, 320, 650, 1100, 1700, 2400]; // ms

export default function Ancla() {
  const pathname = usePathname();

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    let cortado = false;
    const cortar = () => {
      cortado = true;
    };

    const acomodar = () => {
      if (cortado) return;
      const el = document.getElementById(id);
      if (!el) return;
      const destino = Math.max(0, el.getBoundingClientRect().top + window.scrollY - MARGEN);
      if (Math.abs(window.scrollY - destino) > 2) {
        window.scrollTo({ top: destino, behavior: "instant" });
      }
    };

    /* Sólo gestos del visitante cortan la corrección; el scrollTo de
       acá arriba no dispara ninguno de estos. */
    window.addEventListener("wheel", cortar, { passive: true });
    window.addEventListener("touchstart", cortar, { passive: true });
    window.addEventListener("keydown", cortar);

    const relojes = INTENTOS.map((ms) => window.setTimeout(acomodar, ms));

    return () => {
      cortado = true;
      relojes.forEach(window.clearTimeout);
      window.removeEventListener("wheel", cortar);
      window.removeEventListener("touchstart", cortar);
      window.removeEventListener("keydown", cortar);
    };
  }, [pathname]);

  return null;
}
