// Ancho y alto real de cada imagen de public/gondolapp-assets -> lib/dc/medidas.ts,
// para que cada <img> del sitio reserve su lugar antes de cargar.
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

const REPO_RAIZ = fileURLToPath(new URL('../../', import.meta.url)).split(path.sep).join('/');
const require = createRequire(REPO_RAIZ + 'package.json');
const sharp = require('sharp');

const base = REPO_RAIZ + 'public';
const archivos = [];
const recorrer = (d) => {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = d + '/' + f.name;
    if (f.isDirectory()) recorrer(p);
    else if (/\.(png|jpe?g|webp)$/i.test(f.name)) archivos.push(p);
  }
};
recorrer(base + '/gondolapp-assets');

const medidas = {};
for (const p of archivos.sort()) {
  const m = await sharp(p).metadata();
  medidas[p.slice(base.length)] = [m.width, m.height];
}

const ts = `/* GENERADO por scripts/sitio-desde-diseno/medidas.mjs: ancho y alto real de cada imagen de
   public/gondolapp-assets, para que cada <img> reserve su lugar antes de cargar. */

export const MEDIDAS: Record<string, [number, number]> = ${JSON.stringify(medidas, null, 2)};

export function proporcion(src: string | undefined) {
  const m = src ? MEDIDAS[src] : undefined;
  return m ? "auto " + m[0] + " / " + m[1] : undefined;
}
`;
fs.writeFileSync(REPO_RAIZ + 'lib/dc/medidas.ts', ts);
console.log('medidas de', archivos.length, 'imágenes');
