import { NextResponse, type NextRequest } from "next/server";

/* Modo teaser.

   Con TEASER_MODE=true, todo visitante ve la página teaser aunque el sitio
   completo siga publicado. No se borra ni se revierte nada: las páginas
   siguen ahí, sólo que tapadas.

   Para entrar al sitio completo hay que abrir cualquier URL con
   ?preview=<PREVIEW_SECRET>. Eso deja una cookie y a partir de ahí se
   navega normal, sin arrastrar el parámetro.

   Con TEASER_MODE en cualquier otro valor (o sin definir), el sitio se
   comporta como siempre: apagar el teaser es cambiar una variable en
   Vercel, sin tocar código. */

const COOKIE = "gp_preview";
const TREINTA_DIAS = 60 * 60 * 24 * 30;

export function middleware(req: NextRequest) {
  const teaserActivo = process.env.TEASER_MODE === "true";
  const secreto = process.env.PREVIEW_SECRET;
  const url = req.nextUrl;

  /* Teaser apagado: nadie debería quedarse en /teaser */
  if (!teaserActivo) {
    if (url.pathname === "/teaser") {
      const home = url.clone();
      home.pathname = "/";
      return NextResponse.redirect(home);
    }
    return NextResponse.next();
  }

  /* La llave llega por la URL: se guarda en una cookie y se limpia el
     parámetro, para que no quede dando vueltas en el historial ni se
     comparta sin querer al copiar un link. */
  const llave = url.searchParams.get("preview");
  if (secreto && llave) {
    if (llave === secreto) {
      const limpia = url.clone();
      limpia.searchParams.delete("preview");
      const res = NextResponse.redirect(limpia);
      res.cookies.set(COOKIE, secreto, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: TREINTA_DIAS,
      });
      return res;
    }
    /* Llave equivocada: se sigue de largo y termina viendo el teaser */
  }

  /* Ya tiene la llave guardada: pasa al sitio completo */
  if (secreto && req.cookies.get(COOKIE)?.value === secreto) {
    return NextResponse.next();
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
