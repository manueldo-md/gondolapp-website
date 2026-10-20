import Link from "next/link";
import type { Metadata } from "next";
import { IMG } from "@/lib/assets";
import { HeroPagina, Columnas, Showcase, Fila } from "@/components/pagina/Piezas";

export const metadata: Metadata = {
  title: "Gondolapp para repositoras — Vendé reposición con datos",
  description:
    "Cada visita de tus fixers queda con foto, GPS y medición, y tu cliente ve en tiempo real cómo evoluciona su góndola. Antes y ahora, visita tras visita.",
  openGraph: {
    title: "Gondolapp para repositoras — Vendé reposición con datos",
    description: "Cada visita de tus fixers queda con foto, GPS y medición, y tu cliente ve en tiempo real cómo evoluciona su góndola. Antes y ahora, visita tras visita.",
    url: "https://gondolapp.com/repositoras",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

const CAMBIO = [
  { n: "HOY", t: "Planillas y fotos por WhatsApp", d: "Una reunión mensual para explicar qué se hizo. El cliente paga y confía." },
  { n: "CON GONDOLAPP", t: "Cada visita con foto, hora y medición", d: "La evolución de la góndola en un gráfico. El informe se arma solo. El cliente paga y ve." },
  { n: "RESULTADO", t: "Un servicio premium que se renueva", d: "Inteligencia de góndola incluida en tu propuesta. Difícil de comparar con una repositora que solo manda fotos." },
];

const VISITA = [
  { n: "01", quien: "FIXER", t: "Llega y la app lo ubica", d: "La visita programada aparece en su lista del día. Al llegar, el GPS valida que está dentro del radio del comercio." },
  { n: "02", quien: "FIXER", t: "Foto antes", d: "Saca la foto de la góndola tal como la encontró. Control de inclinación y calidad antes de aceptarla." },
  { n: "03", quien: "FIXER", t: "Repone, frentea y responde", d: "Hace su trabajo de reposición y completa el formulario: frentes, SKUs presentes, POP, precio." },
  { n: "04", quien: "FIXER", t: "Foto después y entrega", d: "Saca la foto final. La visita queda entregada con las dos fotos, las respuestas, hora y ubicación." },
  { n: "05", quien: "TU CLIENTE", t: "Lo ve minutos después", d: "En su panel aparece la visita con antes y después, y la comparativa del comercio se actualiza. Sin que le mandes nada." },
];

const COBRO = [
  { k: "Primera campaña", v: <span style={{ fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em", color: "var(--primary)" }}>Gratis</span> },
  { k: "Incluye", v: "200 misiones o 30 días" },
  { k: "Tus fixers", v: "Sin costo en la plataforma" },
  { k: "Después", v: "$100.000 por campaña con 200 misiones · $500 la adicional" },
];

export default function Repositoras() {
  return (
    <>
      <HeroPagina
        tono="repositoras"
        kicker="Para repositoras y agencias de trade"
        kickerColor="var(--c-repo)"
        titulo="Vendé reposición con datos, no con promesas."
        bajada="Gondolapp es el soporte de tu servicio: cada visita de tus fixers queda registrada con foto, GPS y medición, y tu cliente ve en tiempo real cómo evoluciona su góndola. Antes y ahora, visita tras visita."
        acciones={
          <>
            <Link href="/#demo" className="btn btn-dark">Sumar mi repositora</Link>
            <a href="#visita" className="btn btn-ghost">Una visita, paso a paso</a>
          </>
        }
        captura={IMG.rDash}
        alt="Dashboard de repositora: fixers activos, fotos recientes y campañas"
      />

      <Columnas kicker="El cambio" titulo="El cliente deja de confiar. Empieza a ver." items={CAMBIO} />

      <Showcase
        kicker="Góndolas"
        titulo="Cada foto, con su fixer, su comercio y su campaña."
        texto="Todas las fotos de tus fixers en un solo lugar: pendientes, aprobadas, rechazadas o en revisión. Con la declaración del fixer y la fecha. Tu cliente ve las suyas en su propio panel."
        captura={IMG.rGond}
        alt="Góndolas: fotos enviadas por los fixers con comercio, campaña y estado"
      />

      <Showcase
        kicker="Tus fixers"
        titulo="Tu equipo, o la red. Siempre aprobás vos."
        texto="Invitás a tus propios fixers por link o por código. Si necesitás más gente en una zona, publicás la campaña abierta a postulaciones y aprobás a quién sumás. A tus fixers no les cobramos nada: vos ya les pagás por la reposición."
        captura={IMG.rFix}
        alt="Fixers: invitación por link, vinculación por código y solicitudes"
        lado="izquierda"
        oscuro
        acento="var(--mint)"
      />

      {/* Una visita, paso a paso */}
      <section id="visita" style={{ padding: "120px 0", background: "var(--tint-green)" }}>
        <div className="wrap">
          <div style={{ maxWidth: 900 }}>
            <div className="kick">Una visita, paso a paso</div>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)" }}>
              Lo que hace el fixer. Lo que ve tu cliente.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, marginTop: 56, borderTop: "1px solid var(--line-dark)" }}>
            {VISITA.map((v) => (
              <div key={v.n} style={{ padding: "28px 24px 28px 0", borderBottom: "1px solid var(--line-dark)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--text-2)" }}>
                  <span>{v.n}</span>
                  <span style={{ color: v.quien === "FIXER" ? "var(--text-2)" : "var(--primary)" }}>{v.quien}</span>
                </div>
                <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.03em", marginTop: 14, lineHeight: 1.1 }}>{v.t}</div>
                <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.55, color: "var(--text-2)" }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo se cobra */}
      <section style={{ padding: "120px 0" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 420px", minWidth: 0, maxWidth: 620 }}>
            <div className="kick">Cómo se cobra</div>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(34px, 4vw, 56px)" }}>
              Por campaña, con misiones incluidas. La primera, gratis.
            </h2>
            <p className="lead" style={{ margin: "18px 0 0", fontSize: 17 }}>
              Tu primera campaña con tus propios fixers no tiene costo: hasta 200 misiones o 30 días, lo que ocurra
              primero. Después, un valor por campaña con un paquete de misiones y un costo bajo por misión adicional.
              Sin abono mensual. Lo trasladás a tu cliente como parte de un servicio premium.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 32 }}>
              <Link href="/#demo" className="btn btn-dark">Sumar mi repositora</Link>
              <a href="mailto:hola@gondolapp.com" className="btn btn-ghost">hola@gondolapp.com</a>
            </div>
          </div>
          <div style={{ flex: "1 1 360px", minWidth: 0, borderTop: "1px solid var(--line)" }}>
            {COBRO.map((f) => <Fila key={f.k} k={f.k} v={f.v} />)}
          </div>
        </div>
      </section>
    </>
  );
}
