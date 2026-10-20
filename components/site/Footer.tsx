import Image from "next/image";
import Link from "next/link";

const LEGALES = "https://app.gondolapp.com/legales";

const COLS = [
  {
    title: "Plataforma",
    links: [
      { label: "Qué es", href: "/#quehace" },
      { label: "El ecosistema", href: "/#ecosistema" },
      { label: "Tiempo real", href: "/#resultados" },
      { label: "Soluciones", href: "/#actores" },
      { label: "Preguntas", href: "/#faq" },
    ],
  },
  {
    title: "Para",
    links: [
      { label: "Marcas", href: "/marcas" },
      { label: "Distribuidoras", href: "/distribuidoras" },
      { label: "Repositoras", href: "/repositoras" },
      { label: "Vendedores y fixers", href: "/red" },
      { label: "Precios", href: "/precios" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="privacidad" style={{ padding: "48px 0 36px" }}>
      <div
        className="wrap"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 32, alignItems: "flex-start" }}
      >
        <div style={{ maxWidth: 420 }}>
          <Image
            src="/gondolapp-assets/brand/logo-fondo-claro.png"
            alt="Gondolapp"
            width={115}
            height={30}
            style={{ height: 30, width: "auto", display: "block" }}
          />
          <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--text-2)", fontWeight: 500, lineHeight: 1.5 }}>
            El mapa del consumo masivo argentino. Marca registrada en trámite ante el INPI (clases 35 y 42).
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
          {COLS.map((col) => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 14, fontWeight: 600 }}>
              <span className="kick" style={{ color: "var(--text-2)" }}>{col.title}</span>
              {col.links.map((l) => (
                <Link key={l.href} href={l.href} style={{ textDecoration: "none" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 14, fontWeight: 600 }}>
            <span className="kick" style={{ color: "var(--text-2)" }}>Legal</span>
            <a href={LEGALES} style={{ textDecoration: "none" }}>Términos y condiciones</a>
            <a href={LEGALES} style={{ textDecoration: "none" }}>Política de privacidad</a>
            <a href={LEGALES} style={{ textDecoration: "none" }}>Todos los documentos legales</a>
            <a href="mailto:hola@gondolapp.com" style={{ textDecoration: "none" }}>hola@gondolapp.com</a>
          </div>
        </div>
      </div>

      <div
        className="wrap"
        style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid var(--line)", fontSize: 12, color: "var(--text-2)", fontWeight: 500, lineHeight: 1.6 }}
      >
        <p style={{ margin: 0, maxWidth: 900 }}>
          Este sitio no usa cookies de seguimiento ni trackers de terceros. Los datos del formulario de demo se tratan
          según la{" "}
          <a href={LEGALES} style={{ fontWeight: 700 }}>Política de privacidad</a>. Términos, privacidad y versiones
          vigentes:{" "}
          <a href={LEGALES} style={{ fontWeight: 700 }}>app.gondolapp.com/legales</a>.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, marginTop: 16 }}>
          <span>© 2026 Gondolapp · Hecho en Entre Ríos, Argentina</span>
          <span>Las cifras de las capturas son de un entorno de demostración.</span>
        </div>
      </div>
    </footer>
  );
}
