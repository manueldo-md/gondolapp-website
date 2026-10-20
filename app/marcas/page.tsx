import Link from "next/link";
import type { Metadata } from "next";
import { IMG } from "@/lib/assets";
import { HeroPagina, Columnas, Showcase, Fila, CierreOscuro } from "@/components/pagina/Piezas";
import Stepper, { type Paso } from "@/components/pagina/Stepper";

export const metadata: Metadata = {
  title: "Gondolapp para marcas — Qué pasa con tu marca en cada góndola",
  description:
    "Presencia, quiebres, frentes, precio y exhibición verificados con foto y GPS. Campañas con tu equipo, tus distribuidoras o tu repositora, en un solo panel.",
  openGraph: {
    title: "Gondolapp para marcas — Qué pasa con tu marca en cada góndola",
    description: "Presencia, quiebres, frentes, precio y exhibición verificados con foto y GPS. Campañas con tu equipo, tus distribuidoras o tu repositora, en un solo panel.",
    url: "https://gondolapp.com/marcas",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

const EJECUTA = [
  { n: "01 · EQUIPO PROPIO", t: "Tus vendedores y promotores", d: "Entran por un link de invitación, sin aprobación previa y sin límite de usuarios. Ves el detalle completo de cada comercio." },
  { n: "02 · DISTRIBUIDORAS", t: "La red que ya recorre tus comercios", d: "Invitás a tus distribuidoras y sus vendedores relevan en su recorrido habitual. Ellos ganan puntos, vos ganás cobertura." },
  { n: "03 · REPOSITORA", t: "Tu proveedor de reposición, con datos", d: "Tu repositora ejecuta con sus fixers y cada visita queda registrada con foto, respuestas y comparativa antes y ahora." },
];

const CFG: Paso[] = [
  { n: "01", t: "Nombre, categoría y zona", d: "Nombrás la campaña, elegís la categoría y los SKUs que querés seguir, y definís la zona: provincia, ciudades o radio.", tags: ["Categoría", "SKUs", "Zona"] },
  { n: "02", t: "Qué medir: el formulario", d: "Armás los bloques de foto y sus preguntas. Cada pregunta se tipifica con la métrica que alimenta. Cinco tipos: múltiple, única, sí/no, número y texto.", tags: ["Bloques de foto", "Preguntas tipificadas", "Obligatorias u opcionales"] },
  { n: "03", t: "Modalidad", d: "Única, con objetivo y tope de comercios, o seguimiento continuo con visitas por semana y sin vencimiento.", tags: ["Única", "Continua", "Visitas por semana"] },
  { n: "04", t: "Quién ejecuta", d: "Tu equipo propio (invitado por link), una o varias distribuidoras vinculadas, o tu repositora. Podés combinar ejecutores en la misma campaña.", tags: ["Equipo propio", "Distribuidoras", "Repositora"] },
  { n: "05", t: "Presupuesto y reserva", d: "Ves el costo estimado según ejecutor y tope. Al enviar a ejecución, el saldo se reserva; si la ejecutora rechaza o pide cambios, vuelve a tu cuenta.", tags: ["Costo estimado", "Reserva", "Saldo"] },
  { n: "06", t: "Activa y en seguimiento", d: "Con equipo propio arranca al instante. Con distribuidora, cuando ella la acepta y define qué datos te comparte. Desde ahí, todo en vivo: inicio, fin, tope global, mínimo para cobrar y zonas.", tags: ["Activa", "En vivo", "Alertas"], img: IMG.mDet },
];

const CUENTA = [
  { k: "Primera campaña interna", v: <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.03em", color: "var(--primary)" }}>Gratis</span> },
  { k: "Con tu equipo o repositora", v: "Por campaña, con misiones incluidas" },
  { k: "Con la red de distribuidoras", v: "Por comercio relevado, en escalones" },
  { k: "Comercio rechazado", v: "No se cobra" },
  { k: "Datos", v: "6 meses incluidos; después se archivan, nunca se borran" },
];

export default function Marcas() {
  return (
    <>
      <HeroPagina
        tono="marcas"
        kicker="Para marcas"
        kickerColor="var(--c-marca)"
        titulo="Sabé qué pasa con tu marca en cada góndola del interior."
        bajada="Presencia, quiebres, frentes, precio y exhibición, verificados con foto y GPS. Campañas que lanzás hoy con tu equipo, tus distribuidoras o tu repositora, y seguís en vivo desde un solo panel."
        acciones={
          <>
            <Link href="/#demo" className="btn btn-dark">Solicitar una demo</Link>
            <a href="#configurar" className="btn btn-ghost">Cómo se configura</a>
          </>
        }
        captura={IMG.mDash}
        alt="Dashboard de marca: presencia, ciudades cubiertas y evolución mensual"
      />

      <Columnas kicker="Quién ejecuta" titulo="Tu campaña en la calle, hoy. Con la gente que ya tenés." items={EJECUTA} />

      <Showcase
        kicker="Resultados"
        titulo="Cada respuesta, una métrica. Cada métrica, con su foto."
        texto="Misiones completadas, fotos aprobadas, tipo de negocio y cada pregunta del formulario con su distribución. Descargás el reporte y lo llevás al directorio."
        bullets={[
          "Presencia, quiebre, frentes, precio y exhibición",
          "Precio promedio confirmado por zona y por SKU",
          "Comparables entre campañas, zonas y ejecutores",
        ]}
        captura={IMG.mRes}
        alt="Resultados de una campaña: misiones, fotos aprobadas y respuestas"
      />

      <Showcase
        kicker="Mapa"
        titulo="Dónde estás. Y, sobre todo, dónde no."
        texto="Cada misión es un punto geolocalizado con su último estado. Filtrás por campaña y pintás por presencia o por tipo de comercio. Con la red de una distribuidora ves la ubicación, nunca su cartera."
        captura={IMG.mMapa}
        alt="Mapa de puntos de venta por campaña y por presencia"
        lado="izquierda"
        oscuro
        acento="var(--mint)"
      />

      <Stepper
        id="configurar"
        kicker="Cómo se configura"
        titulo="Seis decisiones. Diez minutos."
        pasos={CFG}
        inicial={5}
        total="06"
      />

      <section style={{ padding: "120px 0" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 400px", minWidth: 0, maxWidth: 600 }}>
            <div className="kick">Tu cuenta</div>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(34px, 4vw, 56px)" }}>
              Cargás saldo. Pagás por lo que se releva.
            </h2>
            <p className="lead" style={{ margin: "18px 0 0", fontSize: 17 }}>
              Sin abono mensual. Cada campaña reserva lo que necesita al enviarse a ejecución; lo que no se usa vuelve a
              tu saldo. El saldo no vence.
            </p>
          </div>
          <div style={{ flex: "1 1 400px", minWidth: 0, borderTop: "1px solid var(--line)" }}>
            {CUENTA.map((f) => <Fila key={f.k} k={f.k} v={f.v} />)}
            <div style={{ marginTop: 16, fontSize: 13, fontWeight: 700, color: "var(--primary)" }}>
              [VALORES DE REFERENCIA · a confirmar]
            </div>
          </div>
        </div>
      </section>

      <CierreOscuro titulo="Tu primera campaña interna," resaltado="gratis." />
    </>
  );
}
