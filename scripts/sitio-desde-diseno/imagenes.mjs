import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { CAPT } from './blobs.mjs';
const REPO_RAIZ = fileURLToPath(new URL("../../", import.meta.url)).split("\\").join("/");
// Carpeta de la oficina con docs/sitio (por defecto, un clon al lado de este repo)
const OFICINA = process.env.OFICINA || REPO_RAIZ + '../gondolapp-oficina-lectura/';
const require = createRequire(REPO_RAIZ + 'package.json');
const sharp = require('sharp');
const SRC = OFICINA + 'docs/sitio/capturas/';
const DST = REPO_RAIZ + 'public/gondolapp-assets/sitio/';
fs.mkdirSync(DST, { recursive: true });
let total = 0;
for (const name of new Set(Object.values(CAPT))) {
  const img = sharp(SRC + name + '.png');
  const m = await img.metadata();
  // celular (390@3x = 1170): hasta 900 de ancho; escritorio (1440@2x): hasta 2200
  const max = m.width <= 1300 ? 900 : 2200;
  const out = DST + name + '.webp';
  const info = await img.resize({ width: Math.min(max, m.width), withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
  total += info.size;
  console.log(name, m.width + 'x' + m.height, '->', info.width + 'x' + info.height, Math.round(info.size / 1024) + 'KB');
}
console.log('total', Math.round(total / 1024) + 'KB');
