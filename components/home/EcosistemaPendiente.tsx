/* Marcador de la sección Ecosistema. La simulación de 47 nodos (escritorio)
   y la cadena de valor (móvil) llegan en la Etapa 3. */

export default function EcosistemaPendiente() {
  return (
    <section id="ecosistema" style={{ padding: "112px 0" }}>
      <div className="wrap">
        <div className="kick" style={{ color: "var(--c-marca)" }}>El ecosistema</div>
        <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(36px, 4.6vw, 64px)", maxWidth: 900 }}>
          Actores y relaciones, en vivo.
        </h2>
        <div style={{
          marginTop: 40,
          border: "1px dashed var(--line)",
          borderRadius: 24,
          padding: "72px 32px",
          textAlign: "center",
          background: "var(--tint-green)",
        }}>
          <p style={{ margin: 0, fontFamily: "var(--font-mono), monospace", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-2)" }}>
            Llega en la etapa 3
          </p>
          <p style={{ margin: "12px auto 0", maxWidth: 520, fontSize: 15, lineHeight: 1.6, color: "var(--text-2)" }}>
            La simulación de fuerzas con 47 nodos para escritorio y la cadena de valor para celular.
          </p>
        </div>
      </div>
    </section>
  );
}
