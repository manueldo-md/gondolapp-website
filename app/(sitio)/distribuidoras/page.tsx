import Link from "next/link";
import type { Metadata } from "next";
import { IMG } from "@/lib/assets";
import { HeroPagina, Columnas, Showcase, Fila } from "@/components/pagina/Piezas";
import Stepper, { type Paso } from "@/components/pagina/Stepper";

export const metadata: Metadata = {
  title: "Gondolapp para distribuidoras — Tu fuerza de venta en vivo",
  description:
    "Un panel de todos tus vendedores, sin costo. Ejecutás las campañas de tus marcas con tu propia gente y convertís tu recorrido diario en argumento para sumar representaciones.",
  openGraph: {
    title: "Gondolapp para distribuidoras — Tu fuerza de venta en vivo",
    description: "Un panel de todos tus vendedores, sin costo. Ejecutás las campañas de tus marcas con tu propia gente y convertís tu recorrido diario en argumento para sumar representaciones.",
    url: "https://gondolapp.com/distribuidoras",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

const PORQUE = [
  { n: "01", t: "Las fotos dejan de morir en el chat", d: "Cada foto de góndola queda con comercio, vendedor, GPS, hora y respuestas. Aprobás antes de que cuente." },
  { n: "02", t: "Llegás a la mesa con datos", d: "Un relevamiento profesional de tu zona que ninguna marca tuvo de una distribuidora. En el piloto, ese dato definió la representación." },
  { n: "03", t: "Tu cartera es tuya", d: "Ninguna otra distribuidora ve tus datos. Cuando ejecutás una campaña de marca, vos elegís qué le compartís." },
];

const FLOW: Paso[] = [
  { n: "01", t: "Te llega la propuesta", d: "La marca envía la campaña con zona, formulario, objetivo y tope. Aparece en tu panel como pendiente de aprobación, con tres opciones: aprobar, pedir cambios o rechazar.", img: IMG.dCamp },
  { n: "02", t: "Elegís qué compartís", d: "Con checks, definís qué datos del relevamiento ve la marca: nombre del comercio, dirección, ubicación, ciudad, fotos. La ubicación en el mapa siempre; la dirección, solo si querés." },
  { n: "03", t: "Aceptás o pedís cambios", d: "Si algo no te cierra, pedís cambios y la marca ajusta. Si aceptás, la campaña aparece en la app de tus vendedores vinculados.", img: IMG.dCamp },
  { n: "04", t: "Tu gente la ejecuta", d: "Tus vendedores la ven en su recorrido habitual, sacan la foto, responden y suman puntos por misión. Vos aprobás antes de que cuente." },
  { n: "05", t: "Cobrás el valor", d: "Tus vendedores canjean puntos con mercadería de tu depósito y Gondolapp te la compra. Además, el relevamiento queda como argumento frente a esa marca y otras." },
];

const PUNTOS = [
  { k: "Panel", v: <span style={{ fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em", color: "var(--mint)" }}>$0</span> },
  { k: "Bienvenida", v: <span style={{ fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em", color: "var(--mint)" }}>10.000 pts</span> },
  { k: "Catálogo de premios", v: "Propio, exclusivo para tus vinculados" },
  { k: "Confirmación", v: "Por código que muestra el vendedor" },
  { k: "Campañas internas", v: "Vos definís cuántos puntos pagás (o ninguno)" },
];

export default function Distribuidoras() {
  return (
    <>
      <HeroPagina
        tono="distribuidoras"
        kicker="Para distribuidoras"
        kickerColor="var(--c-distri)"
        titulo="Tu fuerza de venta en vivo. Y datos para negociar con tus marcas."
        bajada="Un panel de control de todos tus vendedores, sin costo. Ejecutás las campañas de tus marcas con tu propia gente, lanzás campañas internas y convertís tu recorrido diario en el argumento que te faltaba para sumar representaciones."
        acciones={
          <>
            <Link href="/#demo" className="btn btn-dark">Sumar mi distribuidora</Link>
            <a href="#flujo" className="btn btn-ghost">Cuando una marca te manda una campaña</a>
          </>
        }
        captura={IMG.dDash}
        alt="Dashboard de distribuidora: resumen del mes, alertas y actividad de gondoleros"
      />

      <Columnas kicker="Por qué" titulo="Chau WhatsApp. Hola representaciones." items={PORQUE} />

      <Showcase
        kicker="Tu red"
        titulo="Invitás por link. Ves a cada vendedor."
        texto="Un link único de 7 días o el código personal del vendedor. Nivel, fotos enviadas, tasa de aprobación y última misión en tus campañas. Un vendedor puede trabajar con otra distribuidora: vos ves solo lo que hizo para vos."
        captura={IMG.dGond}
        alt="Red de gondoleros: invitación por link, por código y listado con rendimiento"
      />

      <Stepper
        id="flujo"
        kicker="Cuando una marca te manda una campaña"
        titulo="Vos aceptás, vos decidís qué compartís, tu gente la ejecuta."
        pasos={FLOW}
        total="05"
      />

      <section style={{ padding: "120px 0", background: "var(--ink)", color: "#FFFFFF" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 420px", minWidth: 0, maxWidth: 600 }}>
            <div className="kick" style={{ color: "var(--mint)" }}>Puntos y canjes</div>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)" }}>La distri no paga. Gana.</h2>
            <p className="lead" style={{ margin: "18px 0 0", fontSize: 17, color: "var(--on-dark)" }}>
              Arrancás con 10.000 puntos de bienvenida para tus campañas internas. Sumás puntos cada vez que agregás
              valor a la red. Y cuando tus vendedores canjean, lo hacen con mercadería de tu depósito: Gondolapp te la compra.
            </p>
          </div>
          <div style={{ flex: "1 1 400px", minWidth: 0, borderTop: "1px solid var(--line-on-dark)" }}>
            {PUNTOS.map((f) => <Fila key={f.k} k={f.k} v={f.v} oscuro />)}
          </div>
        </div>
      </section>

      <section style={{ padding: "120px 0" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center", justifyContent: "space-between" }}>
          <h2 className="h2" style={{ fontSize: "clamp(40px, 5.4vw, 80px)", maxWidth: 820 }}>
            Tus vendedores ya recorren la calle. <span style={{ color: "var(--primary)" }}>Que cada visita cuente.</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Link href="/#demo" className="btn btn-dark">Sumar mi distribuidora</Link>
            <a href="mailto:hola@gondolapp.com" className="btn btn-ghost">hola@gondolapp.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
