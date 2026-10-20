import { NextResponse } from "next/server";
import { Resend } from "resend";
import { permitido, ipDe } from "@/lib/rate-limit";

/* Formulario de demo (brief §7).

   La API key nunca llega al cliente: se lee acá, en el servidor, desde las
   variables de entorno de Vercel. Sin captcha de terceros y sin cookies. */

export const runtime = "nodejs";

const PERFILES = [
  "Marca",
  "Distribuidora",
  "Repositora",
  "Agencia de trade marketing",
  "Gondolero / relevador",
];

const LEGALES = "https://app.gondolapp.com/legales";

/* Validación mínima de email: hay un @ con algo a cada lado y un punto
   en el dominio. No intenta ser exhaustiva; el mail de confirmación es
   la verificación real. */
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

  /* Trampa para bots: si viene llena, se descarta en silencio.
     Se responde ok igual para no darle pistas al bot. */
  if (limpio(cuerpo.website)) {
    return NextResponse.json({ ok: true });
  }

  const nombre = limpio(cuerpo.nombre, 120);
  const email = limpio(cuerpo.email, 160).toLowerCase();
  const empresa = limpio(cuerpo.empresa, 160);
  const perfil = limpio(cuerpo.perfil, 60);
  const consent = cuerpo.consent === true;

  if (!nombre || !email || !empresa) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }
  if (!EMAIL_OK.test(email)) {
    return NextResponse.json({ error: "Revisá el email." }, { status: 400 });
  }
  if (!PERFILES.includes(perfil)) {
    return NextResponse.json({ error: "Elegí un perfil de la lista." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Falta aceptar la política de privacidad." }, { status: 400 });
  }

  /* 5 envíos por IP por hora */
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
    console.error("Faltan variables de entorno para enviar el mail de demo");
    return NextResponse.json(
      { error: "No pudimos enviar la solicitud." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const interno = [
    `Nombre:  ${nombre}`,
    `Email:   ${email}`,
    `Empresa: ${empresa}`,
    `Perfil:  ${perfil}`,
    "",
    `Consentimiento: aceptado (${LEGALES})`,
    `IP: ${ip}`,
    `Fecha: ${new Date().toISOString()}`,
  ].join("\n");

  const alLead = [
    `Hola ${nombre},`,
    "",
    "Recibimos tu pedido de demo de Gondolapp. Te contactamos en menos de 24 horas hábiles.",
    "",
    "Si necesitás algo antes, respondé este mail o escribinos a hola@gondolapp.com.",
    "",
    "— Equipo Gondolapp",
    "gondolapp.com",
  ].join("\n");

  try {
    /* 1) Aviso interno, con replyTo al lead para contestarle directo */
    const aviso = await resend.emails.send({
      from: desde,
      to: para,
      replyTo: email,
      subject: `Demo · ${empresa} (${perfil})`,
      text: interno,
    });

    if (aviso.error) {
      console.error("Resend (aviso interno):", aviso.error);
      return NextResponse.json(
        { error: "No pudimos enviar la solicitud." },
        { status: 502 }
      );
    }

    /* 2) Confirmación al lead. Si este falla, la solicitud igual llegó:
       no se le devuelve error al visitante. */
    const confirmacion = await resend.emails.send({
      from: desde,
      to: email,
      subject: "Recibimos tu pedido de demo",
      text: alLead,
    });

    if (confirmacion.error) {
      console.error("Resend (confirmación al lead):", confirmacion.error);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Error enviando el mail de demo:", e);
    return NextResponse.json(
      { error: "No pudimos enviar la solicitud." },
      { status: 502 }
    );
  }
}
