import Image from "next/image";

const phones = [
  {
    src: "/screenshots/app-logros.jpg",
    alt: "Logros y puntos",
    label: "Niveles y logros",
    caption: "Casual → Activo → Pro. El vendedor sube de nivel con cada foto.",
    rotate: "-12deg",
    scale: 0.78,
    zIndex: 1,
    translateY: 32,
  },
  {
    src: "/screenshots/app-campanas.jpg",
    alt: "Campañas activas",
    label: "Misiones activas",
    caption: "Cada campaña es una misión con instrucciones y puntos por foto.",
    rotate: "-5deg",
    scale: 0.9,
    zIndex: 2,
    translateY: 14,
  },
  {
    src: "/screenshots/app-detalle.jpg",
    alt: "Detalle de campaña",
    label: "Detalle de misión",
    caption: "Qué foto sacar, cuánto gana y cuántos comercios faltan.",
    rotate: "0deg",
    scale: 1,
    zIndex: 5,
    translateY: 0,
  },
  {
    src: "/screenshots/app-actividad.jpg",
    alt: "Actividad y notificaciones",
    label: "Actividad en tiempo real",
    caption: "Notificaciones al instante: foto aprobada, puntos acreditados.",
    rotate: "5deg",
    scale: 0.9,
    zIndex: 2,
    translateY: 14,
  },
  {
    src: "/screenshots/app-canjes.jpg",
    alt: "Canjes de puntos",
    label: "Canjes reales",
    caption: "Crédito celular, nafta, transferencia. Los puntos se convierten en plata.",
    rotate: "12deg",
    scale: 0.78,
    zIndex: 1,
    translateY: 32,
  },
];

function Phone({ phone, width = 170 }: { phone: typeof phones[0]; width?: number }) {
  return (
    <div style={{
      transform: `rotate(${phone.rotate}) scale(${phone.scale}) translateY(${phone.translateY}px)`,
      transformOrigin: "bottom center",
      zIndex: phone.zIndex,
      flexShrink: 0,
    }}>
      <div style={{
        width,
        background: "#0a0a0a",
        borderRadius: 36,
        border: "2.5px solid #2a2a2a",
        padding: "8px",
        boxShadow: "0 28px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}>
        {/* Dynamic island */}
        <div style={{
          width: "35%",
          height: 20,
          background: "#0a0a0a",
          borderRadius: "0 0 12px 12px",
          margin: "0 auto 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#1e1e1e" }} />
          <div style={{ width: 24, height: 4, borderRadius: 2, background: "#181818" }} />
        </div>
        {/* Screen */}
        <div style={{
          borderRadius: 26,
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
            sizes={`${width}px`}
          />
        </div>
        {/* Home bar */}
        <div style={{ height: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 52, height: 3, background: "#222", borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );
}

export default function AppMovil() {
  return (
    <section style={{
      padding: "6rem 1.5rem 5rem",
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

        {/* 5-phone arc — desktop */}
        <div className="blur-in phones-arc" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "0.75rem",
          marginBottom: "3rem",
          position: "relative",
          minHeight: 380,
        }}>
          {phones.map((phone, i) => (
            <Phone key={i} phone={phone} width={170} />
          ))}
          {/* Subtle glow under phones */}
          <div style={{
            position: "absolute",
            bottom: -20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: 80,
            background: "radial-gradient(ellipse, rgba(34,197,94,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
        </div>

        {/* Labels — 5 columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "0.75rem",
          maxWidth: 900,
          margin: "0 auto 3.5rem",
        }}>
          {phones.map((phone, i) => (
            <div key={i} className="blur-in" style={{ textAlign: "center", transitionDelay: `${i * 80}ms`, opacity: i === 0 || i === 4 ? 0.7 : 1 }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--g-400)", marginBottom: 3 }}>{phone.label}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.5 }}>{phone.caption}</div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="blur-in" style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          paddingTop: "2.5rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          flexWrap: "wrap",
        }}>
          {[
            ["PWA", "Sin descarga de App Store"],
            ["30 seg", "Para subir una foto"],
            ["150–500", "Puntos por foto"],
            ["100%", "Tasa de aprobación"],
            ["3", "Canjes disponibles"],
          ].map(([val, label]) => (
            <div key={val} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.4rem", color: "var(--g-400)", lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.38)", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Mobile: show only 3 center phones */}
      <style>{`
        @media (max-width: 700px) {
          .phones-arc > div:first-child,
          .phones-arc > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
