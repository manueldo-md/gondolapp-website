# Sitio desde el diseño

Genera las páginas del sitio a partir de los lienzos aprobados en el repo de la oficina
(`docs/sitio/diseno-v1/*.dc.html`, `imagenes.md` y las capturas de `docs/sitio/capturas/`).

```
node scripts/sitio-desde-diseno/imagenes.mjs   # capturas PNG -> public/gondolapp-assets/sitio/*.webp
node scripts/sitio-desde-diseno/medidas.mjs    # ancho y alto de cada imagen -> lib/dc/medidas.ts
node scripts/sitio-desde-diseno/convert.mjs    # lienzos -> components/dc/generado/* y app/dc.css
node scripts/sitio-desde-diseno/og.mjs         # imagen para compartir -> public/gondolapp-assets/brand/og.png
```

Por defecto busca la oficina clonada al lado de este repo, en `../gondolapp-oficina-lectura`;
si está en otro lado: `OFICINA=/ruta/a/gondolapp-oficina/ node …`.

- Textos y estilos se copian tal cual; la lógica de cada lienzo (su clase `DCLogic`) se reusa
  sin tocar, sobre `lib/dc/runtime.ts`.
- `blobs.mjs`: qué archivo es cada `/_blob/<id>` (sale de `imagenes.md`; los del Simulador,
  que no están ahí, inferidos por uso).
- Regla del ®: «Gondolapp®» la primera vez que aparece en el texto del cuerpo de cada página,
  sin contar botones ni links (en el Inicio cae en el Simulador); el pie ya lo trae. Nunca en el logo, `<title>`, meta, alt ni URL.
- En el celular (hasta 899 px) el Inicio usa `Mobile.dc.html`, y las páginas internas, el
  header y el pie de ese lienzo.
- Agregados que no están en los lienzos, pedidos por Manuel: los links a /legales abren en
  pestaña nueva, y el pie lleva el ícono de Instagram debajo de la bajada de la marca.
- `DesktopHeader` y `DesktopFooter` (del lienzo Red, que no marca ninguna página) son para el 404.
- Títulos, descripciones, canonical, Open Graph y JSON-LD: `lib/seo.ts`.
