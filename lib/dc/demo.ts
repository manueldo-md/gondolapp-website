"use client";

/* Envío del formulario de demo del diseño a /api/demo.

   El formulario del lienzo no tiene nombres de campo, así que se leen por
   id dentro del formulario que se tocó. La ruta valida todo y manda los
   mails; si algo falla, se devuelve el mensaje de la ruta para mostrarlo
   debajo del botón. */

type Evento = { currentTarget: EventTarget | null; preventDefault?: () => void };

const FALLA = "No pudimos enviar la solicitud. Escribinos a hola@gondolapp.com.";

export async function enviarDemo(e: Evento, listo: () => void, error: (mensaje: string) => void) {
  e.preventDefault?.();
  const boton = e.currentTarget as HTMLButtonElement | null;
  const form = boton?.closest("form");
  if (!boton || !form) return;

  const campo = (id: string) => form.querySelector<HTMLInputElement & HTMLSelectElement>(`#${id}`);
  const datos = {
    nombre: campo("f-nombre")?.value ?? "",
    email: campo("f-email")?.value ?? "",
    empresa: campo("f-empresa")?.value ?? "",
    perfil: campo("f-perfil")?.value ?? "",
    consent: !!campo("f-priv")?.checked,
  };

  error("");
  boton.disabled = true;
  boton.setAttribute("aria-busy", "true");
  try {
    const res = await fetch("/api/demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    if (res.ok) {
      listo();
      return;
    }
    const data = await res.json().catch(() => ({}));
    error(data.error ?? FALLA);
  } catch {
    error(FALLA);
  } finally {
    boton.disabled = false;
    boton.removeAttribute("aria-busy");
  }
}
