import { QUE_HACE } from "@/lib/home-data";

export default function QueHace() {
  return (
    <section id="quehace" style={{ padding: "112px 0 96px" }}>
      <div className="wrap">
        <div className="kick">Qué hace</div>
        <h2 className="h2" style={{ marginTop: 14, fontSize: "clamp(40px, 5.4vw, 76px)", maxWidth: 1000 }}>
          Lanzás. Relevan. Decidís.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px 40px", marginTop: 64 }}>
          {QUE_HACE.map((c) => (
            <div key={c.n}>
              <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--text-2)" }}>{c.n}</div>
              <div style={{ fontWeight: 800, fontSize: 28, letterSpacing: "-0.03em", marginTop: 12 }}>{c.t}</div>
              <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.6, color: "var(--text-2)" }}>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
