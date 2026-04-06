import Image from "next/image";

const phones = [
  {
    src: "/screenshots/app-logros.jpg",
    alt: "Logros y puntos del gondolero",
    label: "Gamificación y puntos",
    caption: "Los vendedores acumulan puntos, suben de nivel y desbloquean logros.",
    rotate: "-6deg",
    scale: "0.9",
    zIndex: 1,
  },
  {
    src: "/screenshots/app-campanas.jpg",
    alt: "Campañas activas",
    label: "Misiones en campo",
    caption: "Cada campaña es una misión con instrucciones claras y puntos por foto.",
    rotate: "0deg",
    scale: "1",
    zIndex: 3,
  },
  {
    src: "/screenshots/app-detalle.jpg",
    alt: "Detalle de campaña",
    label: "Detalle de campaña",
    caption: "El vendedor ve exactamente qué foto sacar y cuánto gana por hacerlo.",
    rotate: "6deg",
    scale: "0.9",
    zIndex: 1,
  },
];

export default function AppMovil() {
  return (
    <section style={{
      padding: "6rem 1.5rem",
      background: "linear-gradient(180deg, var(--g-900) 0%, #061a0e 100%)",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div className="blur-in" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="badge badge-dark" style={{ marginBottom: "1rem", display: "inline-flex" }}>La app del vendedor</span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            color: "#fff",
            lineHeight: 1.15,
          }}>
            Una PWA que se instala en segundos.<br />
            <span className="grad-text-animated">Sin fricción, sin capacitación.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 500, margin: "0.75rem auto 0" }}>
            El vendedor abre el link, instala en su celular y empieza a ganar puntos. La red ya existe — nosotros la activamos.
          </p>
        </div>

        {/* Phones */}
        <div className="blur-in" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "1.5rem",
          marginBottom: "3.5rem",
          position: "relative",
        }}>
          {phones.map((phone, i) => (
            <div key={i} style={{
              transform: `rotate(${phone.rotate}) scale(${phone.scale})`,
              transformOrigin: "bottom center",
              zIndex: phone.zIndex,
              transition: "transform 0.3s ease",
            }}>
              {/* Phone frame */}
              <div style={{
                width: 200,
                background: "#0a0a0a",
                borderRadius: 40,
                border: "2.5px solid #2a2a2a",
                padding: "10px",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
              }}>
                {/* Notch */}
                <div style={{
                  width: "40%",
                  height: 22,
                  background: "#0a0a0a",
                  borderRadius: "0 0 12px 12px",
                  margin: "0 auto 4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#222" }} />
                  <div style={{ width: 28, height: 4, borderRadius: 2, background: "#1a1a1a" }} />
                </div>
                {/* Screen */}
                <div style={{
                  borderRadius: 28,
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "9/19.5",
                  background: "#111",
                }}>
                  <Image
                    src={phone.src}
                    alt={phone.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="200px"
                  />
                </div>
                {/* Home indicator */}
                <div style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 60, height: 3, background: "#2a2a2a", borderRadius: 2 }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Labels below phones */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", maxWidth: 680, margin: "0 auto" }}>
          {phones.map((phone, i) => (
            <div key={i} className="blur-in" style={{ textAlign: "center", transitionDelay: `${i * 100}ms` }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--g-400)", marginBottom: 4 }}>{phone.label}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{phone.caption}</div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="blur-in" style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          marginTop: "3.5rem",
          paddingTop: "2.5rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          flexWrap: "wrap",
        }}>
          {[
            ["PWA", "Sin descarga de App Store"],
            ["30 seg", "Para subir una foto"],
            ["200 pts", "Por foto aprobada"],
            ["100%", "Tasa de aprobación"],
          ].map(([val, label]) => (
            <div key={val} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.5rem", color: "var(--g-400)", lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .phones-row { flex-direction: column; align-items: center; }
        }
      `}</style>
    </section>
  );
}
