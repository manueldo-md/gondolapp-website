"use client";

import { useEffect, useState, type ReactNode } from "react";

/* Muestra el diseño de compu o el de celular (Mobile.dc.html).

   El servidor manda los dos y el CSS muestra el que corresponde, así la
   primera pintada ya es la correcta. Una vez en el navegador se deja solo
   el que se ve: no quedan ids repetidos ni animaciones corriendo en algo
   oculto. Las envolturas son display: contents para no romper el header
   pegajoso. */

export const CORTE = 899; // px: hasta acá, celular

export default function Responsive({ desktop, mobile }: { desktop: ReactNode; mobile: ReactNode }) {
  const [modo, setModo] = useState<"dsk" | "mob" | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${CORTE}px)`);
    const elegir = () => setModo(mq.matches ? "mob" : "dsk");
    elegir();
    mq.addEventListener("change", elegir);
    return () => mq.removeEventListener("change", elegir);
  }, []);

  return (
    <>
      {modo !== "mob" && <div className="only-dsk">{desktop}</div>}
      {modo !== "dsk" && <div className="only-mob">{mobile}</div>}
    </>
  );
}

/* Si se llegó con un ancla (/#simulador), el navegador pudo haber intentado
   saltar antes de que quedara solo la versión visible: se repite el salto. */
export function SaltoAlAncla() {
  useEffect(() => {
    const h = decodeURIComponent(window.location.hash.slice(1));
    if (!h) return;
    const saltar = () => document.getElementById(h)?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    const ts = [60, 400].map((ms) => setTimeout(saltar, ms));
    return () => ts.forEach(clearTimeout);
  }, []);
  return null;
}
