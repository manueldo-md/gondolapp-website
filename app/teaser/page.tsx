import type { Metadata } from "next";
import Image from "next/image";
import { IMG } from "@/lib/assets";
import { ESTANTES, retardos, CICLO } from "@/lib/teaser-gondola";

/* Página teaser, portada del tablero "Teaser B (oscuro, góndola)".
   La sirve el middleware en todas las rutas mientras TEASER_MODE esté
   en true.

   Una sola pantalla, sin header ni pie del sitio. El único enlace es el
   mailto. Todo con CSS: no hay JavaScript. */

export const metadata: Metadata = {
  title: "Gondolapp",
  description:
    "Tu góndola habla. Pronto podrás escucharla. El mapa del consumo masivo argentino.",
  /* Mientras el sitio está tapado, que los buscadores no lo indexen:
     si no, terminan guardando el teaser en lugar de las páginas reales. */
  robots: { index: false, follow: false },
  openGraph: {
    title: "Gondolapp",
    description: "Tu góndola habla. Pronto podrás escucharla.",
    url: "https://gondolapp.com",
    images: [{ url: "/gondolapp-assets/brand/og.jpg", width: 1200, height: 630, alt: "Gondolapp" }],
  },
};

const sube = (demora: string) => ({ animation: `rise .6s ${demora} ease both` });

export default function Teaser() {
  return (
    <div className="tsr">
      {/* Halos: lila arriba a la izquierda, menta abajo a la derecha */}
      <div aria-hidden="true" className="tsr-halo tsr-halo-lila" />
      <div aria-hidden="true" className="tsr-halo tsr-halo-menta" />

      <header className="tsr-header">
        <Image
          src={IMG.logoOscuro.src}
          alt="Gondolapp"
          width={115}
          height={30}
          priority
          style={{ height: 30, width: "auto", display: "block", ...sube("0s") }}
        />
        <span className="tsr-proximamente" style={sube(".1s")}>
          <span aria-hidden="true" className="tsr-punto tsr-punto-lila" />
          Próximamente
        </span>
      </header>

      <main className="tsr-main">
        <div className="tsr-texto">
          {/* En el celular reemplaza al titulo largo */}
          <p className="tsr-pronto" style={sube(".2s")}>
            <span className="tsr-degradado">¡Pronto!</span>
          </p>

          <h1 className="tsr-h1" style={sube(".2s")}>
            Tu góndola habla.
            <br />
            <span className="tsr-degradado">Pronto podrás escucharla.</span>
          </h1>

          <p className="tsr-bajada" style={sube(".3s")}>
            El mapa del consumo masivo argentino. Estamos a días de salir.
          </p>

          <div className="tsr-acciones" style={sube(".4s")}>
            <a href="mailto:hola@gondolapp.com" className="tsr-boton">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              hola@gondolapp.com
            </a>
            <span className="tsr-nota">Si querés información anticipada, escribinos.</span>
          </div>
        </div>

        {/* ── Góndola abstracta ── */}
        <div className="tsr-gondola" style={sube(".3s")}>
          <div className="tsr-tarjeta">
            <div className="shelves">
              {ESTANTES.map((estante, i) => {
                const demoras = retardos(estante, i);
                return (
                  <div key={i}>
                    <div
                      className="tsr-fila"
                      style={{ height: estante.alto, marginTop: i === 0 ? 0 : 15 }}
                    >
                      {estante.items.map((it, j) =>
                        it.color ? (
                          <div
                            key={j}
                            className="p"
                            style={{
                              flex: it.flex,
                              background: it.color,
                              height: it.alto,
                              animationDelay: `${demoras[j]!.toFixed(2)}s`,
                            }}
                          />
                        ) : (
                          <div key={j} style={{ flex: it.flex }} />
                        )
                      )}
                    </div>
                    <div className="tsr-riel" />
                  </div>
                );
              })}

              <div className="lens" aria-hidden="true">
                <div className="lensg" />
                <div className="lensh" />
              </div>
            </div>

            <div className="tsr-pie-tarjeta">
              <span className="tsr-relevando">
                <span aria-hidden="true" className="tsr-punto tsr-punto-menta" />
                Relevando
              </span>
              <span className="tsr-zona">Argentina · 2026</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="tsr-footer">© 2026 Gondolapp</footer>

      <style>{`
        /* 100dvh y no 100vh: en el celular la barra del navegador hace que
           100vh sea más alto que lo visible y aparece scroll. */
        .tsr {
          height: 100dvh;
          min-height: 620px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background: #0F1A14;
          color: #FFFFFF;
        }
        .tsr-halo { position: absolute; border-radius: 50%; pointer-events: none; }
        .tsr-halo-lila {
          left: -10%; top: -30%; width: 70%; height: 90%;
          background: radial-gradient(circle, rgba(139,124,246,.28) 0%, rgba(139,124,246,0) 65%);
        }
        .tsr-halo-menta {
          right: -20%; bottom: -40%; width: 70%; height: 90%;
          background: radial-gradient(circle, rgba(126,226,168,.14) 0%, rgba(126,226,168,0) 65%);
        }

        .tsr-header {
          position: relative; padding: 24px 48px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .tsr-proximamente {
          font-family: var(--font-mono), monospace; font-size: 12px;
          letter-spacing: .14em; text-transform: uppercase; color: #A5B4FC;
          display: inline-flex; align-items: center; gap: 10px;
        }
        .tsr-punto { width: 8px; height: 8px; border-radius: 50%; flex: 0 0 auto; }
        .tsr-punto-lila { background: #8B7CF6; animation: blink 1.6s infinite; }
        .tsr-punto-menta { width: 7px; height: 7px; background: #7EE2A8; animation: blink 1.2s infinite; }

        .tsr-main {
          position: relative; flex: 1;
          display: flex; flex-wrap: wrap; align-items: center; align-content: center;
          gap: 32px 64px; padding: 0 48px 24px;
          max-width: 1120px; margin: 0 auto; width: 100%; box-sizing: border-box;
        }
        .tsr-texto { flex: 1 1 520px; min-width: 0; }
        .tsr-pronto { display: none; }
        .tsr-h1 {
          margin: 0; font-weight: 800; font-size: clamp(34px, 5.4vw, 84px);
          letter-spacing: -.05em; line-height: .96;
        }
        .tsr-degradado {
          background: linear-gradient(92deg,#A5B4FC 0%,#8B7CF6 50%,#7EE2A8 100%);
          -webkit-background-clip: text; background-clip: text;
          color: transparent; padding-right: .06em;
        }
        .tsr-bajada {
          margin: 22px 0 0; font-size: clamp(15px, 1.3vw, 20px); line-height: 1.5;
          color: #C9D3CC; font-weight: 500; max-width: 460px;
        }
        .tsr-acciones {
          display: flex; flex-wrap: wrap; align-items: center;
          gap: 14px 20px; margin-top: 30px;
        }
        .tsr-boton {
          display: inline-flex; align-items: center; gap: 12px;
          min-height: 50px; padding: 0 22px; border-radius: 999px;
          background: #FFFFFF; color: #0F1A14; text-decoration: none;
          font-weight: 800; font-size: 15px; box-sizing: border-box; max-width: 100%;
        }
        .tsr-nota { font-size: 13px; color: #9FB0A6; font-weight: 500; }

        .tsr-gondola { flex: 0 1 323px; min-width: 0; width: 100%; position: relative; }
        .tsr-tarjeta {
          position: relative; background: #17241C; border-radius: 24px;
          padding: 24px 22px 19px;
          box-shadow: 0 60px 120px -50px rgba(0,0,0,.8), 0 0 0 1px rgba(255,255,255,.06);
        }
        .shelves { position: relative; }
        .tsr-fila { display: flex; gap: 6px; align-items: flex-end; padding: 0 6px; }
        .tsr-riel { height: 7px; border-radius: 3px; background: #2C3F34; }
        .tsr-pie-tarjeta {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 15px; font-family: var(--font-mono), monospace; font-size: 10px;
          letter-spacing: .1em; text-transform: uppercase; color: #7EE2A8;
        }
        .tsr-relevando { display: inline-flex; align-items: center; gap: 8px; }
        .tsr-zona { color: #9FB0A6; }

        .tsr-footer {
          position: relative; padding: 0 48px 20px;
          display: flex; justify-content: center; text-align: center;
          font-size: 12px; color: #6F7D74; font-weight: 500;
        }

        /* ── La lupa y los productos ── */
        .p { height: 100%; border-radius: 5px 5px 3px 3px; animation: reveal ${CICLO}s linear infinite both; }
        @keyframes reveal {
          0%        { filter: grayscale(1) brightness(.7); }
          3%, 90%   { filter: none; }
          95%, 100% { filter: grayscale(1) brightness(.7); }
        }
        @keyframes blink { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }
        @keyframes lens {
          0%   { left: 44px;  top: 22px;  }
          20%  { left: 235px; top: 22px;  }
          25%  { left: 235px; top: 86px;  }
          45%  { left: 44px;  top: 86px;  }
          50%  { left: 44px;  top: 152px; }
          70%  { left: 235px; top: 152px; }
          75%  { left: 235px; top: 216px; }
          95%  { left: 44px;  top: 216px; }
          100% { left: 44px;  top: 22px;  }
        }
        .lens {
          position: absolute; left: 44px; top: 22px; width: 100px; height: 100px;
          margin: -50px 0 0 -50px; border-radius: 50%; border: 4px solid #FFFFFF;
          box-shadow: 0 0 0 2px rgba(15,26,20,.5), 0 20px 50px -20px rgba(0,0,0,.8),
                      inset 0 0 40px rgba(126,226,168,.18);
          animation: lens ${CICLO}s linear infinite;
          pointer-events: none; z-index: 3; box-sizing: border-box;
        }
        .lensg {
          position: absolute; left: 12px; top: 9px; width: 24px; height: 9px;
          border-radius: 50%; background: rgba(255,255,255,.35); transform: rotate(-30deg);
        }
        .lensh {
          position: absolute; right: -20px; bottom: -20px; width: 15px; height: 42px;
          border-radius: 8px; background: #FFFFFF; transform: rotate(-45deg);
          transform-origin: 50% 0; box-shadow: 0 10px 20px -8px rgba(0,0,0,.7);
        }

        /* ── Version reducida de celular ──
           Queda el logo, ¡Pronto!, la gondola con la lupa y el mail.
           El display:contents del bloque de texto disuelve su caja, asi
           sus hijos entran en el mismo flex que la gondola y se pueden
           reordenar: titulo, gondola, boton. */
        @media (max-width: 640px) {
          .tsr-header { justify-content: center; padding: 20px 24px 0; }
          .tsr-proximamente,
          .tsr-h1,
          .tsr-bajada,
          .tsr-nota { display: none; }

          .tsr-main {
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            gap: 20px;
            padding: 0 24px 12px;
          }
          .tsr-texto { display: contents; }

          .tsr-pronto {
            display: block;
            order: 1;
            margin: 0;
            font-weight: 800;
            font-size: clamp(40px, 13vw, 60px);
            letter-spacing: -.05em;
            line-height: 1;
            text-align: center;
          }
          .tsr-gondola { order: 2; flex: 0 0 auto; max-width: 323px; }
          .tsr-acciones { order: 3; margin-top: 0; justify-content: center; }
          .tsr-footer { padding: 0 24px 16px; }
        }

        /* En pantallas angostas o bajas hay que ganar alto para que entre
           todo sin scroll. */
        @media (max-width: 900px) {
          .tsr-header { padding: 18px 24px; }
          .tsr-main { padding: 0 24px 16px; gap: 24px 32px; }
          .tsr-footer { padding: 0 24px 16px; }
          .tsr-gondola { margin: 0 auto; }
        }
        @media (max-height: 760px) {
          .tsr-header { padding-top: 16px; padding-bottom: 8px; }
          .tsr-bajada { margin-top: 14px; }
          .tsr-acciones { margin-top: 18px; }
          .tsr-tarjeta { padding: 16px 22px 13px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tsr * { animation: none !important; }
          .lens { display: none; }
        }
      `}</style>
    </div>
  );
}
