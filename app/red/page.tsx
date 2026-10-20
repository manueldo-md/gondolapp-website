import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { IMG } from "@/lib/assets";
import { Showcase } from "@/components/pagina/Piezas";
import RedHero from "@/components/pagina/RedHero";

export const metadata: Metadata = {
  title: "Gondolapp para vendedores y fixers — Sumá premios en tu recorrido",
  description:
    "Una app que se instala desde un link. Foto, dos o tres respuestas y 100 puntos por misión aprobada. Para vendedores de distribuidoras y fixers de reposición.",
  openGraph: {
    title: "Gondolapp para vendedores y fixers — Sumá premios en tu recorrido",
    description: "Una app que se instala desde un link. Foto, dos o tres respuestas y 100 puntos por misión aprobada. Para vendedores de distribuidoras y fixers de reposición.",
    url: "https://gondolapp.com/red",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

const FRICCION = [
  { v: "Un link", d: "Se instala desde el navegador en segundos. Nada del store, no ocupa espacio.", acento: false },
  { v: "30 seg", d: "Lo que tarda una misión: foto, dos o tres respuestas y listo.", acento: false },
  { v: "Tu alias", d: "Un personaje y un adjetivo: HalcónSereno, BrisaDelLitoral. Más de 600 combinaciones.", acento: false },
  { v: "Sin señal", d: "Sacás la foto igual; se sube cuando volvés a tener datos.", acento: true },
];

/* Los 5 teléfonos alineados con los 5 pasos */
const MISION = [
  { n: "01", img: IMG.gDet, alt: "Detalle de la campaña", t: "Elegís la campaña", d: "Ves solo las campañas de las distribuidoras con las que trabajás. Cada una dice qué hay que hacer y cuántos puntos paga." },
  { n: "02", img: IMG.aUbic, alt: "Validación de ubicación", t: "Indicás el comercio", d: "Lo buscás en tu lista o lo das de alta ahí mismo con el GPS. Tu distribuidora lo confirma después." },
  { n: "03", img: IMG.aCam, alt: "Cámara guiada: encuadre y nivel", t: "Sacás la foto", d: "La app controla que el celular esté derecho y la foto nítida, y registra GPS y hora." },
  { n: "04", img: IMG.aMulti, alt: "Pregunta de selección múltiple", t: "Respondés", d: "Dos o tres preguntas guiadas: qué hay, qué falta, a qué precio. Múltiple, sí/no o número." },
  { n: "05", img: IMG.aDone, alt: "Misión completada", t: "Enviás y cobrás", d: "Tu distribuidora aprueba y los 100 puntos se liberan. Si la campaña pide un mínimo, se liberan todos juntos al llegar." },
];

const GAMI = [
  { n: "100", t: "puntos por misión aprobada", d: "Se liberan al aprobarse. Las marcas pueden sumar un plus por campaña. Una misión pagada nunca se retira." },
  { n: "3", t: "niveles: Casual, Activo y Pro", d: "Activo con 50 misiones aprobadas en un mes. En Pro se abre el canje por transferencia." },
  { n: "8", t: "logros para desbloquear", d: "Primera foto aprobada, Racha imparable, Velocista. Con humor argentino. No dan puntos: dan reputación." },
  { n: "4", t: "rankings, reiniciados cada mes", d: "Mi Distri, Mi Zona, Mi Provincia y Nacional. Competís con quien querés." },
];

const CANJE = [
  { k: "CANJE", t: "Mercadería de tu distribuidora", d: "Elegís el premio, la app te da un código, la distri lo carga y te lo entrega." },
  { k: "NIVEL PRO", t: "Transferencia bancaria", d: "Con monotributo y factura. Los puntos vencen a los 24 meses." },
  { k: "RETENCIÓN", t: "Mínimo por campaña", d: "Si una campaña pide un mínimo de misiones, los puntos se liberan todos juntos al llegar." },
];

const CONFIANZA = [
  { t: "Reglas claras", d: "Reglamento de puntos y términos por actor, públicos desde el día uno." },
  { t: "Reportá un problema", d: "Un botón en cada pantalla. Lo recibe Gondolapp y seguís el estado." },
  { t: "Varias distribuidoras", d: "Podés vincularte a más de una. Cada una ve solo el trabajo que hiciste para ella." },
  { t: "Tus datos", d: "Tu alias es lo que ven los demás. Tus datos reales, solo tu distribuidora y Gondolapp." },
];

export default function Red() {
  return (
    <>
      <RedHero />

      {/* Sin fricción */}
      <section style={{ padding: "120px 0 40px" }}>
        <div className="wrap">
          <div className="kick">Sin fricción</div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(40px, 5.4vw, 76px)", maxWidth: 1000 }}>
            Un link. Treinta segundos. Tu alias.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px 40px", marginTop: 64 }}>
            {FRICCION.map((c) => (
              <div key={c.v}>
                <div style={{ fontWeight: 800, fontSize: 40, letterSpacing: "-0.05em", lineHeight: 1, ...(c.acento ? { color: "var(--primary)" } : null) }}>{c.v}</div>
                <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.6, color: "var(--text-2)" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Una misión, paso a paso: 5 teléfonos alineados con los 5 pasos */}
      <section style={{ padding: "96px 0" }}>
        <div className="wrap">
          <div className="kick">Una misión, paso a paso</div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)", maxWidth: 900 }}>
            Foto, respuestas, puntos.
          </h2>

          <div className="mision-tira">
            {MISION.map((m) => (
              <Image
                key={m.n} src={m.img.src} alt={m.alt} width={m.img.w} height={m.img.h}
                sizes="(max-width: 900px) 46vw, 19vw"
                className="mision-tel"
                style={{ borderRadius: 22, boxShadow: "0 50px 100px -40px rgba(15,26,20,.55), 0 0 0 1px rgba(15,26,20,.06)" }}
              />
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, marginTop: 40, borderTop: "1px solid var(--line)" }}>
            {MISION.map((m) => (
              <div key={m.n} style={{ padding: "28px 24px 28px 0", borderBottom: "1px solid var(--line)" }}>
                <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--text-2)" }}>{m.n}</div>
                <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.03em", marginTop: 14, lineHeight: 1.1 }}>{m.t}</div>
                <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.55, color: "var(--text-2)" }}>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gamificación */}
      <section style={{ padding: "120px 0", background: "var(--ink)", color: "#FFFFFF" }}>
        <div className="wrap">
          <div style={{ maxWidth: 900 }}>
            <div className="kick" style={{ color: "var(--mint)" }}>Puntos, niveles, logros y rankings</div>
            <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)" }}>
              El que más trabaja, más gana. Y se nota.
            </h2>
            <p className="lead" style={{ margin: "18px 0 0", color: "var(--on-dark)" }}>
              Cada misión aprobada vale 100 puntos, iguales en toda campaña. Los puntos suben de nivel, destraban
              logros, posicionan en los rankings y se canjean en tu distribuidora.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 56, marginTop: 64, alignItems: "center" }}>
            <div style={{ flex: "0 1 320px", minWidth: 0, display: "flex", justifyContent: "center", width: "100%" }}>
              <Image
                src={IMG.gLog.src} alt="Logros: nivel, puntos disponibles, estadísticas e insignias"
                width={IMG.gLog.w} height={IMG.gLog.h} sizes="(max-width: 900px) 70vw, 320px"
                style={{ display: "block", width: "100%", maxWidth: 320, height: "auto", borderRadius: 30, boxShadow: "0 60px 120px -50px rgba(0,0,0,.9)" }}
              />
            </div>
            <div style={{ flex: "1 1 440px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px 32px" }}>
              {GAMI.map((g) => (
                <div key={g.n + g.t}>
                  <div style={{ fontWeight: 800, fontSize: 44, letterSpacing: "-0.05em", lineHeight: 1, color: "var(--mint)" }}>{g.n}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginTop: 8 }}>{g.t}</div>
                  <p style={{ margin: "6px 0 0", fontSize: 14, lineHeight: 1.55, color: "var(--on-dark)" }}>{g.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 64, borderTop: "1px solid var(--line-on-dark)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 0 }}>
            {CANJE.map((c) => (
              <div key={c.k} style={{ padding: "24px 24px 24px 0", borderBottom: "1px solid var(--line-on-dark)" }}>
                <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, color: "#9FB0A6" }}>{c.k}</div>
                <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em", marginTop: 8 }}>{c.t}</div>
                <p style={{ margin: "6px 0 0", fontSize: 14, color: "var(--on-dark)" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="fixers">
        <Showcase
          kicker="Para fixers"
          titulo="Campañas de reposición cerca tuyo. Te postulás, te aprueban, ejecutás."
          texto="Los fixers son el brazo ejecutor: acomodan, reponen, frentean. Distribuidoras y repositoras te invitan por link o por código, o publican campañas abiertas a postulaciones en tu zona. Aprueba quien ejecuta la campaña."
          bullets={[
            "Foto antes y después como prueba del trabajo",
            "El pago lo define quien te contrata; la app lo registra",
            "Seguro de accidentes personales a tu cargo, verificado al habilitarte",
            "Trabajás con todas las empresas que quieras; vendedor y fixer son roles separados",
          ]}
          captura={IMG.rFix}
          alt="Vinculación de fixers por link y por código"
          lado="izquierda"
        />
      </div>

      {/* Confianza + CTA */}
      <section id="sumarme" style={{ padding: "0 0 120px" }}>
        <div className="wrap">
          <div style={{ borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 0 }}>
            {CONFIANZA.map((c) => (
              <div key={c.t} style={{ padding: "28px 24px 28px 0", borderBottom: "1px solid var(--line)" }}>
                <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em" }}>{c.t}</div>
                <p style={{ margin: "6px 0 0", fontSize: 14, lineHeight: 1.5, color: "var(--text-2)" }}>{c.d}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center", justifyContent: "space-between", marginTop: 96 }}>
            <h2 className="h2" style={{ fontSize: "clamp(40px, 5.4vw, 80px)", maxWidth: 820 }}>
              ¿Trabajás en la calle? <span style={{ color: "var(--primary)" }}>Pedile el link a tu distribuidora.</span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <Link href="/#demo" className="btn btn-dark">Quiero sumarme</Link>
              <a href="mailto:hola@gondolapp.com" className="btn btn-ghost">hola@gondolapp.com</a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .mision-tira {
          display: flex;
          gap: 18px;
          align-items: flex-end;
          justify-content: center;
          margin-top: 56px;
        }
        .mision-tel { display: block; width: 18.4%; max-width: 220px; height: auto; }
        @media (max-width: 900px) {
          .mision-tira {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            justify-content: flex-start;
            gap: 14px;
            padding: 0 20px;
            margin-left: -20px;
            margin-right: -20px;
          }
          .mision-tira::-webkit-scrollbar { display: none; }
          .mision-tel { flex: 0 0 46%; width: 46%; max-width: none; scroll-snap-align: center; }
        }
      `}</style>
    </>
  );
}
