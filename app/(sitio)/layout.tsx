/* Marco del sitio. Cada página del diseño trae su propio header y pie
   (docs/sitio/diseno-v1), así que acá no se agrega nada. La teaser vive
   fuera de este grupo. El grupo entre paréntesis no aparece en las URLs. */

export default function LayoutSitio({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
