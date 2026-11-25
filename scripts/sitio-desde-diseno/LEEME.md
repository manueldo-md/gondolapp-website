# Sitio desde el diseño

Genera las páginas del sitio a partir de los lienzos aprobados en el repo de la oficina
(`docs/sitio/diseno-v1/*.dc.html`, `imagenes.md` y las capturas de `docs/sitio/capturas/`).

```
node scripts/sitio-desde-diseno/imagenes.mjs   # capturas PNG -> public/gondolapp-assets/sitio/*.webp
node scripts/sitio-desde-diseno/convert.mjs    # lienzos -> components/dc/generado/* y app/dc.css
```

Por defecto busca la oficina clonada al lado de este repo, en `../gondolapp-oficina-lectura`;
si está en otro lado: `OFICINA=/ruta/a/gondolapp-oficina/ node …`.

- Textos y estilos se copian tal cual; la lógica de cada lienzo (su clase `DCLogic`) se reusa
  sin tocar, sobre `lib/dc/runtime.ts`.
- `blobs.mjs`: qué archivo es cada `/_blob/<id>` (sale de `imagenes.md`; los del Simulador,
  que no están ahí, inferidos por uso).
- Regla del ®: «Gondolapp®» la primera vez que aparece en el cuerpo de cada página; el pie ya
  lo trae. Nunca en el logo, `<title>`, meta, alt ni URL.
- En el celular (hasta 899 px) el Inicio usa `Mobile.dc.html`, y las páginas internas, el
  header y el pie de ese lienzo.
