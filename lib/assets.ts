/* Catálogo de imágenes del pack `gondolapp-assets`.
   La maqueta las referencia con ids internos (/_blob/...); acá quedan
   mapeadas a su archivo real, con el tamaño natural para que next/image
   reserve el espacio correcto y no haya saltos de layout. */

export type Asset = { src: string; w: number; h: number };

const a = (src: string, w: number, h: number): Asset => ({
  src: `/gondolapp-assets/${src}`,
  w,
  h,
});

export const IMG = {
  /* Marca */
  mDash: a("panel/marca-dashboard.png", 2880, 1800),
  mDet: a("panel/marca-campana-detalle.png", 2880, 1800),
  mRes: a("panel/marca-resultados.png", 2880, 1800),
  mMapa: a("panel/marca-mapa.png", 2880, 1800),

  /* Distribuidora */
  dDash: a("panel/distri-dashboard.png", 2880, 1800),
  dCamp: a("panel/distri-campanas.png", 2880, 1800),
  dGond: a("panel/distri-gondoleros.png", 2880, 1800),

  /* Repositora */
  rDash: a("panel/repo-dashboard.png", 2880, 1800),
  rGond: a("panel/repo-gondolas.png", 2880, 1800),
  rFix: a("panel/repo-fixers.png", 2880, 1800),

  /* Panel: otros */
  builder: a("panel/campana-builder-bloques.jpg", 817, 1165),
  aprob: a("panel/fotos-por-aprobar.jpg", 954, 962),
  informe: a("panel/informe-html.jpg", 1200, 1158),
  d1: a("panel/datos-presencia-global-ciudades.jpg", 1200, 803),
  d2: a("panel/datos-presencia-tipo-comercio.jpg", 1200, 796),
  d3: a("panel/datos-resultados-campana.jpg", 1200, 1034),
  /* Mapa con racimos y, debajo, los comercios del racimo */
  mapaRacimos: a("panel/panel-mapa-racimos-pdv.jpg", 1174, 933),

  /* App de campo, en orden de flujo */
  gCamp: a("app/01-campanas.jpg", 780, 1509),
  gDet: a("app/02-campana-detalle.jpg", 780, 1618),
  aUbic: a("app/03-ubicacion-validada.jpg", 780, 1503),
  aCam: a("app/04-camara-guiada.jpg", 780, 1507),
  aSiNo: a("app/05-pregunta-si-no.jpg", 780, 1501),
  aNum: a("app/06-pregunta-numero.jpg", 780, 1505),
  aMulti: a("app/07-pregunta-multiple.jpg", 780, 1505),
  aConf: a("app/08-confirmar-envio.jpg", 780, 1503),
  aDone: a("app/09-mision-completada.jpg", 780, 1505),
  aActiv: a("app/10-actividad.jpg", 780, 1508),
  gLog: a("app/11-logros.jpg", 780, 1622),
  gPerf: a("app/12-perfil.jpg", 780, 1501),

  /* Góndola: comparativa del paso Acción */
  antes: a("gondola/antes-hace-2-semanas.jpg", 960, 720),
  hoy: a("gondola/hoy.jpg", 960, 720),

  /* Marca gráfica */
  logoClaro: a("brand/logo-fondo-claro.png", 862, 225),
  logoOscuro: a("brand/logo-fondo-oscuro.png", 862, 225),
  icono: a("brand/icon-512.png", 512, 512),
} as const;
