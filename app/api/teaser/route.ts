import { NextResponse } from "next/server";
import { Resend } from "resend";
import { permitido, ipDe } from "@/lib/rate-limit";
import { mailTeaser } from "@/lib/emails";

/* Captura de mails de la página teaser.

   Ruta separada de /api/demo a propósito: pide solo el email, manda un
   único aviso interno y no le escribe al visitante. El formulario completo
   —con empresa, perfil y mail de confirmación— vive en el sitio real.

   La API key se lee acá, en el servidor. Sin captcha y sin cookies. */

export const runtime = "nodejs";

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const limpio = (v: unknown, max = 200) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let cuerpo: Record<string, unknown>;
  try {
    cuerpo = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  /* Trampa para bots: si viene llena, se descarta en silencio y se
     responde ok igual, para no darle pistas. */
  if (limpio(cuerpo.website)) {
    return NextResponse.json({ ok: true });
  }

  const email = limpio(cuerpo.email, 160).toLowerCase();

  if (!email) {
    return NextResponse.json({ error: "Dejanos tu email." }, { status: 400 });
  }
  if (!EMAIL_OK.test(email)) {
    return NextResponse.json({ error: "Revisá el email." }, { status: 400 });
  }

  /* Mismo límite que el formulario completo: 5 por IP por hora */
  const ip = ipDe(request);
  if (!permitido(ip).ok) {
    return NextResponse.json(
      { error: "Recibimos varias solicitudes desde tu conexión. Probá de nuevo en un rato." },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const para = process.env.LEADS_TO;
  const desde = process.env.LEADS_FROM;

  if (!apiKey || !para || !desde) {
    console.error("Faltan variables de entorno para enviar el aviso del teaser");
    return NextResponse.json({ error: "No pudimos guardar tu email." }, { status: 500 });
  }

  const fecha = new Date().toLocaleString("es-AR", {
    timeZone: "America/Argentina/Buenos_Aires",
  });
  const aviso = mailTeaser({ email, ip, fecha });

  try {
    const r = await new Resend(apiKey).emails.send({
      from: desde,
      to: para,
      replyTo: email,
      subject: "Teaser · nuevo interesado",
      html: aviso.html,
      text: aviso.text,
    });

    if (r.error) {
      console.error("Resend (aviso del teaser):", r.error);
      return NextResponse.json({ error: "No pudimos guardar tu email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Error enviando el aviso del teaser:", e);
    return NextResponse.json({ error: "No pudimos guardar tu email." }, { status: 502 });
  }
}
