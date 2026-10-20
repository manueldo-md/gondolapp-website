import Link from "next/link";
import type { Metadata } from "next";
import Halo from "@/components/site/Halo";
import { Fila } from "@/components/pagina/Piezas";
import Estimador from "@/components/pagina/Estimador";

export const metadata: Metadata = {
  title: "Precios de Gondolapp — Pagás por lo que se releva",
  description:
    "Sin abono mensual ni licencias por usuario. Cargás saldo y pagás por campaña o por comercio relevado. La primera campaña de cada marca y repositora es gratis.",
};

const CIFRAS = [
  { v: "$0", d: "abono mensual" },
  { v: "1 pt = $10", d: "el punto vale lo mismo en toda campaña" },
  { v: "100 pts", d: "cobra el vendedor por misión aprobada ($1.000)" },
  { v: "Gratis", d: "la primera campaña de cada marca y repositora" },
];

const MOD_A = [
  { k: "Mínimo por campaña", v: "$100.000 · incluye 200 misiones" },
  { k: "Desde la misión 201", v: "$500 por misión" },
  { k: "Campañas continuas", v: "El mínimo se cobra una sola vez" },
  { k: "Usuarios", v: "Ilimitados, los que cargan y los que miran" },
];

const MOD_A_NOTAS = [
  "El mínimo se cobra al activar y no se devuelve aunque no se usen todas las misiones.",
  "Las misiones adicionales se cobran del saldo en el momento; sin saldo, la campaña se pausa y se reanuda sola al recargar.",
  "Ves el detalle completo de cada comercio: nombre, dirección y ubicación exacta.",
];

const MOD_B = [
  { k: "Comercios 1 a 500", v: "350 pts · $3.500" },
  { k: "Comercios 501 a 2.000", v: "280 pts · $2.800" },
  { k: "Comercios 2.001 a 5.000", v: "220 pts · $2.200" },
  { k: "Comercios 5.001 en adelante", v: "180 pts · $1.800" },
];

const MOD_B_NOTAS = [
  "El saldo se reserva sobre el tope de comercios al enviar la campaña; lo no usado vuelve.",
  "Si la distribuidora rechaza o pide cambios, la reserva vuelve completa.",
  "Un comercio rechazado después de relevado no se te cobra.",
];

const TARJETAS = [
  { kick: "Campaña de prueba", kickColor: "var(--mint)", t: "La primera, gratis.", d: "Una por CUIT, con tu propio equipo. Cubre el mínimo: 200 misiones o 30 días, lo que ocurra primero. El cupón vence a los 90 días si no se usa.", oscuro: true },
  { kick: "Tu saldo", kickColor: "var(--text-2)", t: "No vence. No se reintegra.", d: "Cargás por transferencia (te pasamos los datos por privado) y pronto también con tarjeta. Lo que cargás queda en tu cuenta para futuras campañas.", oscuro: false },
  { kick: "Tus datos", kickColor: "var(--text-2)", t: "6 meses incluidos.", d: "Los resultados de cada campaña quedan disponibles 6 meses. Después, un cargo de $10.000 por campaña por mes para seguir consultándolos. Se archivan, nunca se borran.", oscuro: false },
];

const PUNTOS = [
  { k: "Misión aprobada", v: "100 pts · $1.000 para el vendedor" },
  { k: "Plus de la marca", v: "+25 / +50 / +100 pts por misión · próximamente" },
  { k: "Canje en la distribuidora", v: "Mercadería del catálogo propio · código de canje" },
  { k: "Canje por transferencia", v: "Desde nivel Pro (2.000 pts) · con monotributo y factura" },
  { k: "Vencimiento", v: "24 meses · no corre si no hay canje habilitado en la zona" },
  { k: "Logros", v: "No dan puntos: dan reputación" },
];

const DISTRIS = [
  { k: "Panel y red de vendedores", v: "Sin costo" },
  { k: "Bienvenida", v: "10.000 puntos para campañas internas" },
  { k: "Campañas internas", v: "Sin costo por ahora · vos definís los puntos (o ninguno)" },
  { k: "Canjes", v: "Gondolapp te compra la mercadería, neto de un acuerdo comercial propio" },
  { k: "Si querés más puntos", v: "Los comprás como una marca" },
];

const REPOS = [
  { k: "Primera campaña con tus fixers", v: "Gratis · 200 misiones o 30 días" },
  { k: "Después", v: "$100.000 por campaña con 200 misiones · $500 la adicional" },
  { k: "Tus fixers", v: "Sin costo en la plataforma: vos ya les pagás por reponer" },
  { k: "Si te contrata una marca", v: "Paga la marca, con su modalidad A" },
];

const ARRANQUE = [
  { n: "01", t: "Te registrás", d: "Marca, distribuidora o repositora: pedís la demo o te damos de alta directo. Aceptás los Términos y el anexo de tu rol." },
  { n: "02", t: "Cargás saldo", d: "Por transferencia hoy; con tarjeta muy pronto. Factura A. La distribuidora no carga nada: arranca con sus puntos de bienvenida." },
  { n: "03", t: "Lanzás la campaña", d: "La pantalla te muestra el costo antes de confirmar. Ese es el precio que queda, aunque la tarifa cambie después." },
  { n: "04", t: "Cerrás cuando quieras", d: "Sin permanencia. Cerrás la campaña, lo aprobado se paga, la reserva no usada vuelve a tu saldo." },
];

function Etiqueta({ letra, texto, color, fondo }: { letra: string; texto: string; color: string; fondo: string }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10, background: fondo, color,
      borderRadius: 999, padding: "6px 14px 6px 6px", fontFamily: "var(--font-mono), monospace",
      fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase",
    }}>
      <span style={{ width: 24, height: 24, borderRadius: "50%", background: color, color: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, letterSpacing: 0 }}>
        {letra}
      </span>
      {texto}
    </div>
  );
}

export default function Precios() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "88px 0 64px", position: "relative" }}>
        <Halo tono="precios" />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="kick" style={{ color: "var(--text-2)" }}>Precios</div>
          <h1 className="h1" style={{ margin: "20px 0 0", fontSize: "clamp(44px, 6.4vw, 88px)", maxWidth: 1100 }}>
            No te cobramos por tenerla. Te cobramos por usarla.
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "28px 64px", alignItems: "flex-end", justifyContent: "space-between", marginTop: 32 }}>
            <p className="lead" style={{ margin: 0, maxWidth: 640 }}>
              Sin abono mensual ni licencias por usuario. Cargás saldo y pagás por lo que se releva. Lo que no se usa,
              vuelve a tu saldo. Y la primera campaña va por nuestra cuenta.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a href="#estimador" className="btn btn-dark">Estimá tu campaña</a>
              <Link href="/#demo" className="btn btn-ghost">Solicitar una demo</Link>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "28px 24px", marginTop: 64, paddingTop: 40, borderTop: "1px solid var(--line)" }}>
            {CIFRAS.map((c) => (
              <div key={c.v}>
                <div style={{ fontWeight: 800, fontSize: 40, letterSpacing: "-0.05em", lineHeight: 1, color: "var(--ink)" }}>{c.v}</div>
                <div style={{ fontSize: 13, color: "var(--text-2)", fontWeight: 600, marginTop: 8 }}>{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS: modalidades A y B */}
      <section id="marcas" style={{ padding: "96px 0", background: "var(--tint-green)" }}>
        <div className="wrap">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--c-marca)" }}>
            <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 3, background: "var(--c-marca)" }} />
            Para marcas
          </div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(34px, 4.2vw, 58px)", maxWidth: 960 }}>
            El precio depende de quién pone la gente.
          </h2>
          <p className="lead" style={{ margin: "18px 0 0", maxWidth: 720, fontSize: 17 }}>
            Dos modalidades, una cuenta. Las dos se pagan del mismo saldo, y el precio que ves en pantalla al enviar la
            campaña es el que queda.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 48 }}>
            <div style={{ flex: "1 1 440px", minWidth: 0, background: "#FFFFFF", borderRadius: 28, padding: "clamp(24px, 3vw, 40px)" }}>
              <Etiqueta letra="A" texto="Con tu equipo o una repositora" color="var(--c-repo)" fondo="#E9F0FC" />
              <div style={{ fontWeight: 800, fontSize: 30, letterSpacing: "-0.04em", lineHeight: 1.05, marginTop: 12 }}>
                Por campaña, con misiones incluidas.
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.55, color: "var(--text-2)" }}>
                Tu gente ya cobra sueldo, así que no hay puntos de por medio. Pagás el servicio: un mínimo por campaña
                que incluye 200 misiones y un valor bajo por cada misión adicional.
              </p>
              <div style={{ marginTop: 22, borderTop: "1px solid var(--line)" }}>
                {MOD_A.map((f) => <Fila key={f.k} k={f.k} v={f.v} />)}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 8, fontSize: 14, fontWeight: 600, color: "var(--text-3)" }}>
                {MOD_A_NOTAS.map((t) => <li key={t}>· {t}</li>)}
              </ul>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, background: "#FFFFFF", borderRadius: 28, padding: "clamp(24px, 3vw, 40px)" }}>
              <Etiqueta letra="B" texto="Con la red de distribuidoras" color="var(--c-distri)" fondo="#F3EFDF" />
              <div style={{ fontWeight: 800, fontSize: 30, letterSpacing: "-0.04em", lineHeight: 1.05, marginTop: 12 }}>
                Por comercio relevado, en escalones.
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.55, color: "var(--text-2)" }}>
                Como una tarifa de luz: cada comercio paga el precio del escalón en el que cae según su orden dentro de
                la campaña. Los vendedores de la distribuidora cobran sus 100 puntos de ese valor; el resto es el
                servicio de Gondolapp.
              </p>
              <div style={{ marginTop: 22, borderTop: "1px solid var(--line)" }}>
                {MOD_B.map((f) => <Fila key={f.k} k={f.k} v={f.v} />)}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 8, fontSize: 14, fontWeight: 600, color: "var(--text-3)" }}>
                {MOD_B_NOTAS.map((t) => <li key={t}>· {t}</li>)}
              </ul>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 24 }}>
            {TARJETAS.map((c) => (
              <div key={c.t} style={{
                flex: "1 1 300px", borderRadius: 24, padding: 28,
                background: c.oscuro ? "var(--ink)" : "#FFFFFF",
                color: c.oscuro ? "#FFFFFF" : "inherit",
              }}>
                <div className="kick" style={{ color: c.kickColor }}>{c.kick}</div>
                <div style={{ fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em", marginTop: 10 }}>{c.t}</div>
                <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.55, color: c.oscuro ? "var(--on-dark)" : "var(--text-2)" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Estimador />

      {/* LOS PUNTOS */}
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--c-vendedor)" }}>
            <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 3, background: "var(--c-vendedor)" }} />
            Los puntos
          </div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(34px, 4.2vw, 58px)", maxWidth: 960 }}>
            Un punto vale $10. Siempre, en toda campaña.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 56, marginTop: 48 }}>
            <div style={{ flex: "1 1 400px", minWidth: 0, borderTop: "1px solid var(--line)" }}>
              {PUNTOS.map((f) => <Fila key={f.k} k={f.k} v={f.v} />)}
            </div>
            <div style={{ flex: "1 1 360px", minWidth: 0, maxWidth: 520 }}>
              <p className="lead" style={{ margin: 0, fontSize: 17 }}>
                La marca compra los puntos por adelantado; el vendedor los gana misión a misión; la distribuidora los
                convierte en mercadería y Gondolapp se la compra. El valor del punto es el mismo para todos: el
                descuento por volumen lo absorbe Gondolapp, nunca el vendedor.
              </p>
              <p style={{ margin: "16px 0 0", fontSize: 14, lineHeight: 1.55, color: "var(--text-2)" }}>
                El valor del punto está pensado por país y moneda. Hoy: Argentina, pesos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISTRIS Y REPOS */}
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          <div style={{ flex: "1 1 440px", minWidth: 0, background: "#FBF1E0", borderRadius: 28, padding: "clamp(24px, 3vw, 40px)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--c-distri)" }}>
              <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 3, background: "var(--c-distri)" }} />
              Distribuidoras
            </div>
            <div style={{ fontWeight: 800, fontSize: 32, letterSpacing: "-0.04em", lineHeight: 1.05, marginTop: 12 }}>La distri no paga. Gana.</div>
            <div style={{ marginTop: 22, borderTop: "1px solid rgba(15,26,20,.12)" }}>
              {DISTRIS.map((f) => <Fila key={f.k} k={f.k} v={f.v} borde="rgba(15,26,20,.12)" />)}
            </div>
          </div>

          <div style={{ flex: "1 1 440px", minWidth: 0, background: "#E7EFFC", borderRadius: 28, padding: "clamp(24px, 3vw, 40px)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono), monospace", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--c-repo)" }}>
              <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 3, background: "var(--c-repo)" }} />
              Repositoras
            </div>
            <div style={{ fontWeight: 800, fontSize: 32, letterSpacing: "-0.04em", lineHeight: 1.05, marginTop: 12 }}>Por campaña, con misiones incluidas.</div>
            <div style={{ marginTop: 22, borderTop: "1px solid rgba(15,26,20,.12)" }}>
              {REPOS.map((f) => <Fila key={f.k} k={f.k} v={f.v} borde="rgba(15,26,20,.12)" />)}
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO SE ARRANCA */}
      <section style={{ padding: "0 0 112px" }}>
        <div className="wrap">
          <div className="kick">Cómo se arranca</div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(32px, 3.8vw, 52px)", maxWidth: 900 }}>
            Registro, saldo, campaña. Sin contratos eternos.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 0, marginTop: 48, borderTop: "1px solid var(--line)" }}>
            {ARRANQUE.map((s) => (
              <div key={s.n} style={{ padding: "28px 24px 28px 0", borderBottom: "1px solid var(--line)" }}>
                <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--text-2)" }}>{s.n}</div>
                <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.03em", marginTop: 12 }}>{s.t}</div>
                <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: "var(--text-2)" }}>{s.d}</p>
              </div>
            ))}
          </div>
          <p style={{ margin: "28px 0 0", fontSize: 13, color: "var(--text-2)", lineHeight: 1.6, maxWidth: 900 }}>
            Valores en pesos argentinos, vigentes a octubre de 2026, sin IVA. Se revisan periódicamente; los cambios se
            avisan con anticipación y nunca afectan campañas ya enviadas. Los precios de equipo propio y repositora se
            revisarán con las primeras campañas reales.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", color: "#FFFFFF", padding: "112px 0" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center", justifyContent: "space-between" }}>
          <h2 className="h2" style={{ fontSize: "clamp(36px, 4.8vw, 68px)", maxWidth: 820 }}>
            La primera campaña, <span style={{ color: "var(--mint)" }}>gratis.</span> Después, solo lo que uses.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Link href="/#demo" className="btn" style={{ background: "var(--mint)", color: "var(--ink)", fontWeight: 800 }}>Solicitar demo</Link>
            <a href="mailto:hola@gondolapp.com" className="btn" style={{ color: "#FFFFFF", boxShadow: "inset 0 0 0 1.5px #3B4A41" }}>hola@gondolapp.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
