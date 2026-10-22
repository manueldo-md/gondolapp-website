"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const APP_URL = "https://app.gondolapp.com";

/* "Empezá gratis" va a la misma plataforma que Login: el botón de
   registro está ahí dentro. */
const REGISTRO_URL = APP_URL;

const ACTORES = [
  { label: "Marcas", href: "/marcas" },
  { label: "Distribuidoras", href: "/distribuidoras" },
  { label: "Repositoras", href: "/repositoras" },
];

/* Las siete secciones de la home, con el título de cada una como
   descripción. El orden es el de la página. */
const SOLUCION = [
  { label: "Qué hace", desc: "Lanzás. Relevan. Decidís.", hash: "#quehace" },
  { label: "Cómo funciona", desc: "De la campaña al dato que decide, en cinco pasos.", hash: "#ciclo" },
  { label: "El ecosistema", desc: "El ecosistema que construye valor.", hash: "#ecosistema" },
  { label: "Privacidad", desc: "Tus datos tienen paredes. De hierro.", hash: "#muros", escudo: true },
  { label: "Tiempo real", desc: "Lo que sale del ecosistema: datos que podés usar hoy.", hash: "#resultados" },
  { label: "La app de campo", desc: "Se instala desde un link. Una misión tarda 30 segundos.", hash: "#app" },
  { label: "Probalo", desc: "Elegí qué medir y mirá cómo lo ve quien sale a la calle.", hash: "#armador" },
  { label: "Soluciones", desc: "Una plataforma. Todos los que mueven la góndola.", hash: "#actores" },
];

/* Escudo verde que precede a "Privacidad" en el panel */
function EscudoVerde() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1F9D5A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

/* Flecha del botón "Empezá gratis" */
function Flecha() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

const GRADIENTE_CTA = "linear-gradient(92deg, #5B4BD6, #7C6CF0)";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [plat, setPlat] = useState(false);
  const [menu, setMenu] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const platRef = useRef<HTMLDivElement | null>(null);

  /* Anclas: en la home son locales, en el resto vuelven a la home. */
  const anchor = (hash: string) => (isHome ? hash : `/${hash}`);

  /* Header transparente → blanco y barra de progreso.
     Un solo listener, throttled con requestAnimationFrame. */
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setScrolled(y > 90);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, y / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* El menú y el panel se cierran en el onClick de cada link,
     así no hace falta un efecto que reaccione al cambio de ruta. */

  /* Escape cierra lo que esté abierto */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPlat(false);
        setMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* En pantalla táctil no hay "salir con el mouse": tocar fuera cierra. */
  useEffect(() => {
    if (!plat) return;
    const fuera = (e: PointerEvent) => {
      if (!platRef.current?.contains(e.target as Node)) setPlat(false);
    };
    document.addEventListener("pointerdown", fuera);
    return () => document.removeEventListener("pointerdown", fuera);
  }, [plat]);

  const openPlat = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setPlat(true);
  };
  const closePlat = () => {
    closeTimer.current = window.setTimeout(() => setPlat(false), 120);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        /* Con el menú móvil abierto queda opaco, para que el contenido
           no se transparente detrás de la barra. */
        background: menu
          ? "rgba(255,255,255,0.96)"
          : scrolled
            ? "rgba(255,255,255,0.86)"
            : "rgba(255,255,255,0)",
        backdropFilter: scrolled || menu ? "blur(18px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled || menu ? "blur(18px)" : "blur(0px)",
        borderBottom: `1px solid ${scrolled && !menu ? "var(--line-hdr)" : "rgba(238,241,238,0)"}`,
        transition:
          "background .25s ease, backdrop-filter .25s ease, border-bottom-color .25s ease",
      }}
    >
      {/* Barra de progreso de lectura */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: 3,
          width: "100%",
          background: "var(--grad)",
          transformOrigin: "0 50%",
          transform: `scaleX(${progress})`,
          pointerEvents: "none",
        }}
      />

      {/* ── Barra desktop ── */}
      <div
        className="wrap hdr-desktop"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px 20px",
          minHeight: 72,
        }}
      >
        <Link
          href="/"
          aria-label="Gondolapp, inicio"
          /* flexShrink 0: sin esto el flex del header aplasta el logo */
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}
        >
          <Image
            src="/gondolapp-assets/brand/logo-fondo-claro.png"
            alt="Gondolapp"
            width={130}
            height={34}
            priority
            style={{ height: 34, width: "auto", display: "block" }}
          />
        </Link>

        <nav className="nav" aria-label="Principal" style={{ display: "flex", alignItems: "center", gap: "0 2px" }}>
          <a href={anchor("#top")}>Inicio</a>

          {/* El panel va en todas las páginas. Es un índice de las
              secciones de la home, así que desde una página interna las
              anclas vuelven a la home (lo resuelve anchor()). */}
          <div ref={platRef} style={{ position: "relative" }} onMouseEnter={openPlat} onMouseLeave={closePlat}>
              <button
                type="button"
                /* Sólo abre: si cerrara, con mouse el hover lo abriría y el
                   clic siguiente lo cerraría de inmediato. */
                onClick={openPlat}
                onFocus={openPlat}
                aria-expanded={plat}
                style={{
                  cursor: "pointer",
                  background: plat ? "var(--tint-green)" : "transparent",
                  border: 0,
                  borderRadius: 10,
                  padding: "10px 12px",
                  fontFamily: "inherit",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-3)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Nuestra solución
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {plat && (
                <div style={{ position: "absolute", left: 0, top: "100%", paddingTop: 8, animation: "gin .18s ease" }}>
                  <div
                    style={{
                      background: "#FFFFFF",
                      borderRadius: 20,
                      border: "1px solid #E3E8E3",
                      boxShadow: "0 30px 60px -30px rgba(15,26,20,.4)",
                      padding: 10,
                      width: 640,
                      /* En pantallas angostas el panel no se sale de la ventana */
                      maxWidth: "calc(100vw - 48px)",
                    }}
                  >
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                      {SOLUCION.map((it) => (
                        <a
                          key={it.hash}
                          href={anchor(it.hash)}
                          onClick={() => setPlat(false)}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            padding: "10px 12px",
                            textDecoration: "none",
                            borderRadius: 12,
                          }}
                        >
                          <span style={{ fontSize: 15, fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6 }}>
                            {it.escudo && <EscudoVerde />}
                            {it.label}
                          </span>
                          <span style={{ fontSize: 12.5, fontWeight: 500, color: "#4E5D53", lineHeight: 1.35 }}>
                            {it.desc}
                          </span>
                        </a>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        flexWrap: "wrap",
                        marginTop: 10,
                        borderTop: "1px solid #EEF1EE",
                        padding: "12px 12px 4px",
                      }}
                    >
                      <span style={{ fontSize: 13, color: "#4E5D53" }}>
                        ¿Querés verlo con tu categoría y tu zona?
                      </span>
                      <a
                        href={anchor("#demo")}
                        onClick={() => setPlat(false)}
                        style={{ fontSize: 13, fontWeight: 800, color: "#5B4BD6", textDecoration: "none", whiteSpace: "nowrap" }}
                      >
                        Solicitar una demo →
                      </a>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              background: "var(--chip)",
              borderRadius: 14,
              padding: "4px 6px 4px 8px",
            }}
          >
            {ACTORES.map((a) => {
              const active = pathname === a.href;
              return (
                <Link
                  key={a.href}
                  href={a.href}
                  aria-current={active ? "page" : undefined}
                  style={{
                    color: "var(--ink)",
                    textDecoration: "none",
                    padding: "9px 12px",
                    fontSize: 14,
                    fontWeight: 700,
                    borderRadius: 10,
                    background: active ? "#FFFFFF" : "transparent",
                    boxShadow: active ? "0 1px 2px rgba(15,26,20,.08)" : "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {a.label}
                </Link>
              );
            })}
            <Link
              href="/precios"
              style={{
                marginLeft: 6,
                color: "#FFFFFF",
                background: "var(--ink)",
                textDecoration: "none",
                padding: "0 16px",
                minHeight: 38,
                display: "inline-flex",
                alignItems: "center",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: ".06em",
                borderRadius: 10,
              }}
            >
              PRECIO
            </Link>
          </div>

          <a
            href={REGISTRO_URL}
            style={{
              marginLeft: 10,
              background: GRADIENTE_CTA,
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "0 16px",
              minHeight: 38,
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              fontSize: 13,
              fontWeight: 800,
              borderRadius: 10,
              boxShadow: "0 8px 20px -10px rgba(91,75,214,.7)",
              whiteSpace: "nowrap",
            }}
          >
            Empezá gratis
            <Flecha />
          </a>

          <a
            href={APP_URL}
            style={{
              marginLeft: 10,
              color: "var(--ink)",
              textDecoration: "none",
              padding: "0 14px",
              minHeight: 38,
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              fontSize: 13,
              fontWeight: 700,
              border: "1.5px solid var(--line-btn)",
              borderRadius: 10,
              whiteSpace: "nowrap",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
            </svg>
            Login
          </a>
        </div>
      </div>

      {/* ── Barra móvil ── */}
      <div
        className="wrap hdr-mobile"
        style={{ display: "none", alignItems: "center", justifyContent: "space-between", minHeight: 72 }}
      >
        <Link href="/" aria-label="Gondolapp, inicio" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/gondolapp-assets/brand/logo-fondo-claro.png"
            alt="Gondolapp"
            width={130}
            height={34}
            style={{ height: 34, width: "auto", display: "block" }}
          />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a
            href={APP_URL}
            style={{
              color: "var(--ink)",
              textDecoration: "none",
              padding: "0 12px",
              minHeight: 38,
              display: "inline-flex",
              alignItems: "center",
              fontSize: 13,
              fontWeight: 700,
              border: "1.5px solid var(--line-btn)",
              borderRadius: 10,
            }}
          >
            Login
          </a>
          <button
            type="button"
            onClick={() => setMenu((v) => !v)}
            aria-expanded={menu}
            aria-label="Menú"
            style={{
              cursor: "pointer",
              width: 44,
              height: 44,
              borderRadius: 10,
              border: 0,
              background: menu ? "var(--ink)" : "var(--chip)",
              color: menu ? "#FFFFFF" : "var(--ink)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "inherit",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
              {menu ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Menú móvil desplegado ── */}
      {menu && (
        <nav
          className="hdr-mobile-menu"
          aria-label="Principal"
          style={{ borderTop: "1px solid var(--line-hdr)", background: "#FFFFFF", animation: "gin .18s ease" }}
        >
          <div className="wrap" style={{ paddingTop: 12, paddingBottom: 18, display: "flex", flexDirection: "column", gap: 2 }}>
            <a href={anchor("#top")} onClick={() => setMenu(false)} style={{ textDecoration: "none", padding: "12px 4px", fontSize: 17, fontWeight: 700, borderBottom: "1px solid var(--chip)" }}>
              Inicio
            </a>

            <div style={{ padding: "12px 4px 6px", fontSize: 12, color: "var(--text-2)", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>
              Nuestra solución
            </div>
            {SOLUCION.map((it, i) => (
              <a
                key={it.hash}
                href={anchor(it.hash)}
                onClick={() => setMenu(false)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  textDecoration: "none",
                  padding: "9px 4px 9px 14px",
                  ...(i === SOLUCION.length - 1
                    ? { borderBottom: "1px solid var(--chip)", marginBottom: 4 }
                    : null),
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6 }}>
                  {it.escudo && <EscudoVerde />}
                  {it.label}
                </span>
                <span style={{ fontSize: 12, fontWeight: 500, color: "#4E5D53", lineHeight: 1.35 }}>{it.desc}</span>
              </a>
            ))}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 14, background: "var(--chip)", borderRadius: 16, padding: 8 }}>
              {ACTORES.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  onClick={() => setMenu(false)}
                  style={{ textDecoration: "none", padding: 12, fontSize: 15, fontWeight: 700, borderRadius: 10, background: "#FFFFFF", textAlign: "center" }}
                >
                  {a.label}
                </Link>
              ))}
              <Link
                href="/precios"
                onClick={() => setMenu(false)}
                style={{ textDecoration: "none", padding: 12, fontSize: 13, fontWeight: 800, letterSpacing: ".06em", borderRadius: 10, background: "var(--ink)", color: "#FFFFFF", textAlign: "center" }}
              >
                PRECIO
              </Link>
            </div>

            <a
              href={REGISTRO_URL}
              onClick={() => setMenu(false)}
              className="btn"
              style={{
                marginTop: 12,
                background: GRADIENTE_CTA,
                color: "#FFFFFF",
                boxShadow: "0 8px 20px -10px rgba(91,75,214,.7)",
              }}
            >
              Empezá gratis
              <Flecha />
            </a>

            <a href={anchor("#demo")} onClick={() => setMenu(false)} className="btn btn-ghost" style={{ marginTop: 8 }}>
              Solicitar una demo
            </a>
          </div>
        </nav>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hdr-desktop { display: none !important; }
          .hdr-mobile  { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
