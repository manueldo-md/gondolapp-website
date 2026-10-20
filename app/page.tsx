/* Etapa 1 — base del sitio.
   El hero lleva el copy y el halo definitivos; las secciones de abajo son
   marcadores con sus anclas reales, para poder probar header, menú y
   navegación. Se reemplazan en las etapas 2 y 3. */

const PENDIENTES = [
  { id: "quehace", kick: "Qué hace", title: "Qué hace y cómo funciona", etapa: 2 },
  { id: "ciclo", kick: "Cómo funciona", title: "Campaña · Misión · Validación · Datos · Acción", etapa: 2 },
  { id: "ecosistema", kick: "El ecosistema", title: "Actores y relaciones, en vivo", etapa: 3 },
  { id: "resultados", kick: "Tiempo real", title: "Resultados, mapa y reportes", etapa: 2 },
  { id: "app", kick: "La app de campo", title: "Lo que ve el vendedor en la calle", etapa: 2 },
  { id: "armador", kick: "Probalo", title: "Armá una misión y mirá cómo queda", etapa: 2 },
  { id: "actores", kick: "Soluciones", title: "Marcas · Distribuidoras · Repositoras · Vendedores · Fixers", etapa: 2 },
  { id: "precios", kick: "Precios", title: "Tu primera campaña, gratis", etapa: 2 },
  { id: "faq", kick: "Preguntas", title: "Las dudas más frecuentes, por actor", etapa: 2 },
  { id: "demo", kick: "Demo", title: "Solicitar una demo", etapa: 5 },
];

export default function Home() {
  return (
    <>
      <span id="top" />

      {/* ── HERO ── */}
      <section style={{ padding: "88px 0 0", position: "relative" }}>
        {/* Halo lila: arranca sobre el borde superior y pasa detrás del header */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-84px 0 0",
            background:
              "radial-gradient(55% 45% at 50% 0%, rgba(139,124,246,0.16) 0%, rgba(139,124,246,0) 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="wrap" style={{ position: "relative" }}>
          <div
            className="kick"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--c-marca)" }}
          >
            <span
              aria-hidden="true"
              style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--c-marca)" }}
            />
            Canal tradicional · Argentina
          </div>

          <h1
            className="h1"
            style={{ margin: "20px 0 0", fontSize: "clamp(46px, 6.6vw, 92px)", maxWidth: 1040, color: "var(--ink)" }}
          >
            Tu góndola habla,
            <br />
            <span className="grad-text" style={{ paddingRight: ".08em" }}>
              ¡escuchala!
            </span>
          </h1>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "28px 64px",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginTop: 32,
            }}
          >
            <p className="lead" style={{ margin: 0, maxWidth: 620 }}>
              La plataforma para ejecutar y medir campañas en el canal tradicional. Tu equipo, tus distribuidoras o tu
              repositora relevan desde el celular; vos lo ves todo en vivo.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a href="#demo" className="btn btn-dark">Solicitar una demo</a>
              <a href="#quehace" className="btn btn-ghost">Qué es Gondolapp</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marcadores de sección (etapas 2, 3 y 5) ── */}
      {PENDIENTES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          style={{
            padding: "96px 0",
            background: i % 2 === 0 ? "#FFFFFF" : "var(--tint-green)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <div className="wrap">
            <div className="kick">{s.kick}</div>
            <h2
              className="h2"
              style={{ marginTop: 14, fontSize: "clamp(32px, 4.4vw, 60px)", maxWidth: 900 }}
            >
              {s.title}
            </h2>
            <p
              style={{
                margin: "18px 0 0",
                fontFamily: "var(--font-mono), monospace",
                fontSize: 12,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "var(--text-2)",
              }}
            >
              Llega en la etapa {s.etapa}
            </p>
          </div>
        </section>
      ))}
    </>
  );
}
