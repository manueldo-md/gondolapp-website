import { NextResponse, type NextRequest } from "next/server";

/* Modo teaser.

   Con TEASER_MODE=true, todo visitante ve la página teaser aunque el sitio
   completo siga publicado. No se borra ni se revierte nada: las páginas
   siguen ahí, sólo que tapadas.

   Para entrar al sitio completo hay que abrir cualquier URL con
   ?preview=<PREVIEW_SECRET>. Eso deja una cookie y a partir de ahí se
   navega normal, sin arrastrar el parámetro.

   Ojo: en el middleware estas variables se incrustan al construir, no se
   leen en vivo. Si se cambian en Vercel hay que volver a desplegar. */

const COOKIE = "gp_preview";
const TREINTA_DIAS = 60 * 60 * 24 * 30;

/* Ruta temporal para diagnosticar por qué no entra la llave.
   No devuelve el secreto: sólo si existe, cuánto mide y si coincide.
   Se saca apenas esté resuelto. */
const DIAG = "/_diag-teaser";

/* El valor puede llegar maltratado por la URL: en una query "+" significa
   espacio, y puede venir percent-encoded. Se prueban todas las lecturas
   razonables antes de rechazar la llave. */
function lecturasDeLaLlave(req: NextRequest): string[] {
  const crudo = req.nextUrl.search.match(/[?&]preview=([^&]*)/)?.[1] ?? "";
  let decodificado = "";
  try {
    decodificado = decodeURIComponent(crudo);
  } catch {
    decodificado = "";
  }
  const lecturas = [req.nextUrl.searchParams.get("preview") ?? "", crudo, decodificado];
  return [...new Set(lecturas.map((v) => v.trim()).filter(Boolean))];
}

export function middleware(req: NextRequest) {
  const teaserActivo = process.env.TEASER_MODE?.trim() === "true";
  const secreto = process.env.PREVIEW_SECRET?.trim();
  const url = req.nextUrl;

  const llaves = lecturasDeLaLlave(req);
  const coincide = !!secreto && llaves.some((l) => l === secreto);

  /* ── Diagnóstico temporal ── */
  if (url.pathname === DIAG) {
    return NextResponse.json(
      {
        teaserModeCrudo: process.env.TEASER_MODE ?? null,
        teaserActivo,
        secretoDefinido: !!secreto,
        secretoLargo: secreto?.length ?? 0,
        llavesLeidas: llaves.length,
        llavesLargo: llaves.map((l) => l.length),
        coincide,
        cookiePresente: !!req.cookies.get(COOKIE),
        cookieCoincide: !!secreto && req.cookies.get(COOKIE)?.value === secreto,
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  }

  /* Teaser apagado: nadie debería quedarse en /teaser */
  if (!teaserActivo) {
    if (url.pathname === "/teaser") {
      const home = url.clone();
      home.pathname = "/";
      return NextResponse.redirect(home);
    }
    return NextResponse.next();
  }

  /* Sin secreto nadie puede entrar nunca. Queda avisado en los registros
     de Vercel, para no quedarse mirando una página que no cede. */
  if (!secreto) {
    console.warn(
      "TEASER_MODE está activo pero PREVIEW_SECRET llegó vacía al middleware. " +
        "Hay que volver a desplegar después de cargarla en Vercel."
    );
  }

  /* La llave llega por la URL: se guarda en una cookie y se limpia el
     parámetro, para que no quede en el historial ni se comparta sin
     querer al copiar un link. */
  if (coincide) {
    const limpia = url.clone();
    limpia.searchParams.delete("preview");
    const res = NextResponse.redirect(limpia);
    res.cookies.set(COOKIE, secreto!, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: TREINTA_DIAS,
    });
    return res;
  }

  /* Ya tiene la llave guardada: pasa al sitio completo.
     Se marca privada para que el borde no cachee una respuesta del sitio
     completo y se la sirva después a un visitante sin llave. */
  if (secreto && req.cookies.get(COOKIE)?.value === secreto) {
    const res = NextResponse.next();
    res.headers.set("Cache-Control", "private, no-store, max-age=0");
    return res;
  }

  /* Todos los demás ven el teaser, sin cambiar la URL de la barra */
  if (url.pathname === "/teaser") return NextResponse.next();

  const destino = url.clone();
  destino.pathname = "/teaser";
  destino.search = "";
  return NextResponse.rewrite(destino);
}

export const config = {
  /* Quedan afuera: la API (para que el formulario siga enviando), los
     archivos de Next, los de Vercel, las imágenes del sitio y los iconos. */
  matcher: [
    "/((?!api/|_next/|_vercel/|gondolapp-assets/|icon\\.png|apple-icon\\.png|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)",
  ],
};
