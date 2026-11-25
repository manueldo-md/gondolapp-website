"use client";

import { useState, type ReactNode } from "react";
import { enviarDemo } from "@/lib/dc/demo";

/* Estado del formulario de demo: enviando, enviado y el error.

   El formulario de la compu (Main.dc.html) no trae estado de «enviado»: se
   usa el del lienzo Mobile, el mismo para las dos. En el celular, el
   «enviado» lo maneja la lógica del lienzo (alListo).

   El error se muestra en rojo debajo del botón y se borra al volver a
   escribir en el formulario. */

type Enviar = (e: { currentTarget: EventTarget | null; preventDefault?: () => void }) => void;

export default function DemoEnvio({
  alListo,
  children,
}: {
  alListo?: () => void;
  children: (enviar: Enviar, listo: boolean, otra: () => void, error: string, limpiar: () => void) => ReactNode;
}) {
  const [listo, setListo] = useState(false);
  const [error, setError] = useState("");
  const enviar: Enviar = (e) =>
    enviarDemo(
      e,
      () => {
        setListo(true);
        alListo?.();
      },
      setError
    );
  return <>{children(enviar, listo, () => setListo(false), error, () => setError(""))}</>;
}

/* Estilo del mensaje de error: el rojo del diseño (#D64F3C), aclarado para
   leerse sobre el fondo oscuro del bloque de demo. */
export const ESTILO_ERROR = {
  margin: 0,
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: 1.5,
  color: "#FF8A7A",
  textAlign: "center" as const,
};
