/* Plantillas de los mails del formulario de demo.

   Tres reglas que manda el correo y no la web:
   - Tablas y estilos en línea: Outlook y Gmail descartan <style> y flex.
   - La tipografía de marca no existe en el correo: se usa una pila del
     sistema y se mantiene el peso y el interletrado, que es lo que da el aire.
   - Las imágenes vienen bloqueadas por defecto en muchos clientes, así que
     el diseño tiene que leerse igual sin el logo. */

const INK = "#0F1A14";
const MINT = "#7EE2A8";
const TEXTO_2 = "#4E5D53";
const LINEA = "#E3E8E3";
const SOBRE_OSCURO = "#C9D3CC";

const SITIO = "https://gondolapp.com";
const LEGALES = "https://app.gondolapp.com/legales";
const LOGO = `${SITIO}/gondolapp-assets/brand/logo-fondo-oscuro.png`;

const FUENTE =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

/* Envoltorio común: cabecera oscura con el logo, cuerpo blanco y pie. */
function envoltorio(contenido: string, preheader: string) {
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gondolapp</title>
</head>
<body style="margin:0;padding:0;background:#F2F6F2;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F2F6F2;padding:32px 16px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background:#FFFFFF;border-radius:20px;overflow:hidden;border:1px solid ${LINEA};">

<tr><td style="background:${INK};padding:28px 32px;">
<img src="${LOGO}" width="150" height="39" alt="Gondolapp"
     style="display:block;border:0;height:39px;width:150px;">
</td></tr>

${contenido}

<tr><td style="padding:24px 32px 28px;border-top:1px solid ${LINEA};">
<p style="margin:0;font-family:${FUENTE};font-size:12px;line-height:1.6;color:${TEXTO_2};">
Gondolapp · Hecho en Entre Ríos, Argentina<br>
<a href="${SITIO}" style="color:${TEXTO_2};">gondolapp.com</a> ·
<a href="${LEGALES}" style="color:${TEXTO_2};">Términos y privacidad</a>
</p>
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

/* ── Mail al visitante que pidió la demo ── */

export function mailAlLead(nombre: string) {
  const html = envoltorio(
    `<tr><td style="padding:36px 32px 8px;">
<p style="margin:0 0 18px;font-family:${FUENTE};font-size:16px;line-height:1.6;color:${INK};">
Hola ${escapar(nombre)},
</p>
<h1 style="margin:0 0 16px;font-family:${FUENTE};font-size:26px;line-height:1.25;letter-spacing:-0.5px;color:${INK};font-weight:800;">
Recibimos tu pedido de demo.
</h1>
<p style="margin:0 0 24px;font-family:${FUENTE};font-size:16px;line-height:1.65;color:${TEXTO_2};">
Te contactamos <strong style="color:${INK};">en los próximos 2 días hábiles</strong> para coordinar una
recorrida por la plataforma con tu categoría y tu zona.
</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
       style="background:${INK};border-radius:14px;margin:0 0 24px;">
<tr><td style="padding:20px 22px;">
<p style="margin:0 0 10px;font-family:${FUENTE};font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:${MINT};font-weight:700;">
Qué vamos a ver
</p>
<p style="margin:0;font-family:${FUENTE};font-size:15px;line-height:1.7;color:${SOBRE_OSCURO};">
&bull; Cómo se arma una campaña y quién la ejecuta<br>
&bull; Los datos que vuelven: presencia, quiebre, precio y exhibición<br>
&bull; Tu primera campaña, lista para salir
</p>
</td></tr>
</table>

<p style="margin:0 0 28px;font-family:${FUENTE};font-size:15px;line-height:1.65;color:${TEXTO_2};">
Si necesitás algo antes, respondé este mail o escribinos a
<a href="mailto:hola@gondolapp.com" style="color:${INK};font-weight:600;">hola@gondolapp.com</a>.
</p>
</td></tr>`,
    "Te contactamos en los próximos 2 días hábiles."
  );

  const text = [
    `Hola ${nombre},`,
    "",
    "Recibimos tu pedido de demo de Gondolapp.",
    "Te contactamos en los próximos 2 días hábiles para coordinar una recorrida",
    "por la plataforma con tu categoría y tu zona.",
    "",
    "Qué vamos a ver:",
    "- Cómo se arma una campaña y quién la ejecuta",
    "- Los datos que vuelven: presencia, quiebre, precio y exhibición",
    "- Tu primera campaña, lista para salir",
    "",
    "Si necesitás algo antes, respondé este mail o escribinos a hola@gondolapp.com.",
    "",
    "— Equipo Gondolapp",
    "gondolapp.com",
  ].join("\n");

  return { html, text };
}

/* ── Aviso interno con los datos del lead ── */

export function mailInterno(d: {
  nombre: string;
  email: string;
  empresa: string;
  perfil: string;
  ip: string;
  fecha: string;
}) {
  const fila = (k: string, v: string, ultima = false) =>
    `<tr>
<td style="padding:12px 0;${ultima ? "" : `border-bottom:1px solid ${LINEA};`}font-family:${FUENTE};font-size:13px;color:${TEXTO_2};width:90px;vertical-align:top;">${k}</td>
<td style="padding:12px 0;${ultima ? "" : `border-bottom:1px solid ${LINEA};`}font-family:${FUENTE};font-size:15px;color:${INK};font-weight:600;">${v}</td>
</tr>`;

  const html = envoltorio(
    `<tr><td style="padding:36px 32px 8px;">
<p style="margin:0 0 6px;font-family:${FUENTE};font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:${TEXTO_2};font-weight:700;">
Nueva solicitud de demo
</p>
<h1 style="margin:0 0 24px;font-family:${FUENTE};font-size:26px;line-height:1.25;letter-spacing:-0.5px;color:${INK};font-weight:800;">
${escapar(d.empresa)}
</h1>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
${fila("Nombre", escapar(d.nombre))}
${fila("Email", `<a href="mailto:${escapar(d.email)}" style="color:${INK};">${escapar(d.email)}</a>`)}
${fila("Empresa", escapar(d.empresa))}
${fila("Perfil", escapar(d.perfil), true)}
</table>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
       style="background:#F2F6F2;border-radius:12px;margin:0 0 24px;">
<tr><td style="padding:14px 18px;">
<p style="margin:0;font-family:${FUENTE};font-size:12px;line-height:1.6;color:${TEXTO_2};">
Consentimiento aceptado &bull; ${escapar(d.fecha)} &bull; IP ${escapar(d.ip)}<br>
Respondiendo este mail le escribís directo.
</p>
</td></tr>
</table>
</td></tr>`,
    `${d.empresa} — ${d.perfil}`
  );

  const text = [
    `Nombre:  ${d.nombre}`,
    `Email:   ${d.email}`,
    `Empresa: ${d.empresa}`,
    `Perfil:  ${d.perfil}`,
    "",
    `Consentimiento: aceptado (${LEGALES})`,
    `IP: ${d.ip}`,
    `Fecha: ${d.fecha}`,
  ].join("\n");

  return { html, text };
}

/* Los datos vienen del visitante: se escapan antes de armar el HTML. */
function escapar(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ── Aviso interno del teaser: alguien dejó su mail ── */

export function mailTeaser(d: { email: string; ip: string; fecha: string }) {
  const html = envoltorio(
    `<tr><td style="padding:36px 32px 8px;">
<p style="margin:0 0 6px;font-family:${FUENTE};font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:${TEXTO_2};font-weight:700;">
Teaser
</p>
<h1 style="margin:0 0 20px;font-family:${FUENTE};font-size:26px;line-height:1.25;letter-spacing:-0.5px;color:${INK};font-weight:800;">
Nuevo interesado
</h1>

<p style="margin:0 0 24px;font-family:${FUENTE};font-size:20px;line-height:1.4;color:${INK};font-weight:700;">
<a href="mailto:${escapar(d.email)}" style="color:${INK};">${escapar(d.email)}</a>
</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
       style="background:#F2F6F2;border-radius:12px;margin:0 0 24px;">
<tr><td style="padding:14px 18px;">
<p style="margin:0;font-family:${FUENTE};font-size:12px;line-height:1.6;color:${TEXTO_2};">
Dejó su mail en la página teaser &bull; ${escapar(d.fecha)} &bull; IP ${escapar(d.ip)}<br>
Respondiendo este mail le escribís directo.
</p>
</td></tr>
</table>
</td></tr>`,
    d.email
  );

  const text = [
    "Nuevo interesado desde el teaser.",
    "",
    `Email: ${d.email}`,
    `Fecha: ${d.fecha}`,
    `IP: ${d.ip}`,
  ].join("\n");

  return { html, text };
}
