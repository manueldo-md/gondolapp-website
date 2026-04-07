import Image from "next/image";

const allScreens = [
  { src: "/screenshots/app-campanas.jpg",  alt: "Campañas activas"         },
  { src: "/screenshots/app-detalle.jpg",   alt: "Detalle de campaña"        },
  { src: "/screenshots/app-actividad.jpg", alt: "Actividad y notificaciones"},
  { src: "/screenshots/app-logros.jpg",    alt: "Logros y puntos"           },
  { src: "/screenshots/app-canjes.jpg",    alt: "Canjes de puntos"          },
];

// Row 2 reversed order for visual variety
const row2 = [...allScreens].reverse();

const PHONE_W  = 220;   // px outer width
const PHONE_GAP = 20;  // px between phones

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      width: PHONE_W,
      flexShrink: 0,
      background: "#101010",
      borderRadius: 30,
      border: "2px solid #1e1e1e",
      padding: "7px",
      boxShadow: "0 16px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03)",
    }}>
      {/* Dynamic island */}
      <div style={{
        width: "38%",
        height: 17,
        background: "#101010",
        borderRadius: "0 0 9px 9px",
        margin: "0 auto 3px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
      }}>
        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#1e1e1e" }} />
        <div style={{ width: 22, height: 3, borderRadius: 2, background: "#1a1a1a" }} />
      </div>
      {/* Screen */}
      <div style={{
        borderRadius: 22,
        overflow: "hidden",
        position: "relative",
        aspectRatio: "9/19.5",
        background: "#1a1a1a",
      }}>
        <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes={`${PHONE_W}px`} />
      </div>
      {/* Home bar */}
      <div style={{ height: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 44, height: 3, background: "#1e1e1e", borderRadius: 2 }} />
      </div>
    </div>
  );
}

function MarqueeRow({ screens, direction }: { screens: typeof allScreens; direction: "left" | "right" }) {
  const items = [...screens, ...screens]; // duplicate for seamless loop
  return (
    <div className="marquee-wrap">
      <div
        className={direction === "left" ? "marquee-track-left" : "marquee-track-right"}
        style={{ gap: PHONE_GAP }}
      >
        {items.map((s, i) => <PhoneFrame key={i} src={s.src} alt={s.alt} />)}
      </div>
    </div>
  );
}

export default function AppMovil() {
  return (
    <section style={{
      padding: "6rem 0 5rem",
      background: "linear-gradient(180deg, var(--g-900) 0%, #061a0e 100%)",
      overflow: "hidden",
    }}>
      {/* Header */}
      <div className="blur-in" style={{ textAlign: "center", marginBottom: "3.5rem", padding: "0 1.5rem" }}>
        <span className="badge badge-dark" style={{ marginBottom: "1rem", display: "inline-flex" }}>
          La app del vendedor
        </span>
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          color: "#fff",
          lineHeight: 1.15,
          maxWidth: 620,
          margin: "0 auto",
        }}>
          Una PWA que se instala en segundos.{" "}
          <span className="grad-text-animated">Sin fricción.</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 480, margin: "0.75rem auto 0" }}>
          El vendedor abre un link, la instala y empieza a ganar puntos. La red ya existe — nosotros la activamos.
        </p>
      </div>

      {/* Single marquee row — scrolls left */}
      <div className="blur-in">
        <MarqueeRow screens={allScreens} direction="left" />
      </div>

      {/* Bottom stats */}
      <div className="blur-in" style={{
        display: "flex",
        justifyContent: "center",
        gap: "2.5rem",
        marginTop: "3.5rem",
        paddingTop: "2.5rem",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        flexWrap: "wrap",
        padding: "2.5rem 1.5rem 0",
      }}>
        {[
          ["PWA",      "Sin App Store, un link"],
          ["30 seg",   "Para subir una foto"],
          ["+ Datos",  "Campos personalizados"],
          ["Validación Foto", "Control de Nitidez y Orientación"],
        ].map(([val, label]) => (
          <div key={val} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--g-400)", lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.45)", marginTop: 8 }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
