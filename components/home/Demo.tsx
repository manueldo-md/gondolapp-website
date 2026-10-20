import FormularioDemo from "@/components/FormularioDemo";

/* Bloque de demo de la home. El formulario vive en FormularioDemo para
   compartirlo con la página teaser. */

const BENEFICIOS = [
  "Te mostramos la plataforma con tu categoría y tu zona.",
  "Dejamos tu primera campaña lista para salir.",
  "Sin abono, sin implementación, sin IT.",
];

export default function Demo() {
  return (
    <section id="demo" style={{ background: "var(--demo-bg)", color: "#FFFFFF", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", right: -200, top: -200, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(126,226,168,0.22) 0%, rgba(126,226,168,0) 65%)", pointerEvents: "none" }} />

      <div className="wrap" style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 56, alignItems: "center" }}>
        <div style={{ flex: "1 1 460px", minWidth: 0 }}>
          <div className="kick" style={{ color: "var(--mint)" }}>Solicitar una demo</div>
          <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(40px, 5.4vw, 80px)" }}>
            Tu góndola habla.
            <br />
            <span style={{ color: "var(--mint)" }}>Empezá a escucharla esta semana.</span>
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "30px 0 0", display: "flex", flexDirection: "column", gap: 12, fontSize: 17, color: "var(--on-dark)", fontWeight: 500 }}>
            {BENEFICIOS.map((b) => (
              <li key={b} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: 2, background: "var(--mint)", flex: "0 0 auto" }} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: "1 1 400px", minWidth: 0 }}>
          <FormularioDemo />
        </div>
      </div>
    </section>
  );
}
