// Imagen para compartir (Open Graph y X): 1200×630, el logo sobre fondo #0F1A14, nada más.
// -> public/gondolapp-assets/brand/og.png
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
const REPO_RAIZ = fileURLToPath(new URL('../../', import.meta.url)).split('\\').join('/');
const require = createRequire(REPO_RAIZ + 'package.json');
const sharp = require('sharp');

const BRAND = REPO_RAIZ + 'public/gondolapp-assets/brand/';
const ANCHO_LOGO = 520;
const logo = await sharp(BRAND + 'logo-fondo-oscuro.png').resize({ width: ANCHO_LOGO }).toBuffer();
const { height: altoLogo } = await sharp(logo).metadata();

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0F1A14' } })
  .composite([{ input: logo, left: Math.round((1200 - ANCHO_LOGO) / 2), top: Math.round((630 - altoLogo) / 2) }])
  .png({ compressionLevel: 9, palette: true })
  .toFile(BRAND + 'og.png');
console.log('og.png', info.width + 'x' + info.height, Math.round(info.size / 1024) + 'KB');
