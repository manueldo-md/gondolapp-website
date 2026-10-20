/* Límite de envíos por IP, en memoria.

   El brief pide 5 por IP por hora y acepta un Map en memoria como mínimo
   viable, para no crear variables de entorno nuevas (Vercel KV necesitaría
   varias). La contra: el contador vive en la instancia, así que se reinicia
   cuando la función se duerme o si Vercel levanta otra. Para frenar spam
   básico alcanza; si hiciera falta algo más firme, se cambia por KV. */

const VENTANA_MS = 60 * 60 * 1000; // 1 hora
const MAX = 5;

type Registro = { conteo: number; desde: number };

const visitas = new Map<string, Registro>();

/* Limpieza perezosa: se corre al entrar, así el Map no crece sin control. */
function limpiar(ahora: number) {
  for (const [ip, r] of visitas) {
    if (ahora - r.desde > VENTANA_MS) visitas.delete(ip);
  }
}

export function permitido(ip: string): { ok: boolean; restantes: number } {
  const ahora = Date.now();

  if (visitas.size > 500) limpiar(ahora);

  const r = visitas.get(ip);

  if (!r || ahora - r.desde > VENTANA_MS) {
    visitas.set(ip, { conteo: 1, desde: ahora });
    return { ok: true, restantes: MAX - 1 };
  }

  if (r.conteo >= MAX) return { ok: false, restantes: 0 };

  r.conteo++;
  return { ok: true, restantes: MAX - r.conteo };
}

/* Vercel pone la IP real del visitante en x-forwarded-for. */
export function ipDe(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "desconocida";
}
