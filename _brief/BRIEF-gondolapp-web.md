# Brief técnico — sitio gondolapp.com

Construir el sitio de lanzamiento de Gondolapp a partir de la maqueta aprobada (artifact de diseño, 6 páginas + home mobile). La maqueta es la fuente de verdad para layout, textos, colores y comportamiento. Este brief cubre lo que la maqueta no puede decir: stack, estructura, integraciones y reglas.

Maqueta: https://claude.ai/artifact/7TKSsJYrVuKKqqLybwL9u2 (tableros: Home, Para marcas, Para distribuidoras, Para repositoras, Vendedores y fixers, Precios, Home · Mobile). Imágenes: carpeta `gondolapp-assets/` adjunta.

## 1. Stack y deploy

- Next.js (App Router) + TypeScript + Tailwind. Sitio estático salvo una API route.
- Deploy en Vercel, proyecto existente `gondolapp-website` (dominio gondolapp.com ya apunta ahí).
- Variables de entorno ya cargadas en Vercel (todos los entornos): `RESEND_API_KEY`, `LEADS_TO`, `LEADS_FROM`. No crear otras. Las variables `SUPABASE_URL` y `SUPABASE_ANON_KEY` que existen en el proyecto son del sitio anterior: no usarlas; se borran después del deploy.
- Analytics: Vercel Web Analytics (`@vercel/analytics`), sin cookies. Nada de Google Analytics, píxel de Meta ni otros trackers. Sin banner de cookies: el sitio no usa cookies de seguimiento, y el pie lo dice.
- Fuentes: Manrope (400/500/600/700/800) + JetBrains Mono (400/500) vía `next/font/google`.
- Imágenes con `next/image`, formatos WebP/AVIF automáticos. Capturas servidas desde `/public/` con los nombres del pack.

## 2. Páginas y rutas

| Ruta | Tablero de la maqueta | Notas |
|---|---|---|
| `/` | Home + Home · Mobile | Secciones con ancla: `#quehace`, `#ciclo`, `#ecosistema`, `#resultados`, `#app`, `#armador`, `#actores`, `#precios`, `#faq`, `#demo` |
| `/marcas` | Para marcas | |
| `/distribuidoras` | Para distribuidoras | |
| `/repositoras` | Para repositoras | |
| `/red` | Vendedores y fixers | ancla `#fixers` |
| `/precios` | Precios | ancla `#estimador` |

En la maqueta los links internos apuntan a `X.dc.html`; mapearlos a las rutas de arriba. Links externos: `https://app.gondolapp.com` (Login) y `https://app.gondolapp.com/legales` (todo lo legal). `mailto:hola@gondolapp.com`.

Metadatos por página (title/description) en castellano rioplatense. Open Graph con `brand/icon-512.png` como imagen hasta que exista una imagen OG propia. Favicon desde `brand/icon-512.png` (generar ico/png/apple-touch).

## 3. Layout responsive

- Un solo sitio, no dos. Breakpoint principal 900px (la maqueta ya usa `@media (max-width:900px)`), y el tablero "Home · Mobile" es la referencia de cómo se reorganiza la home por debajo de ~768px.
- Para las páginas de actores y Precios no hay tablero mobile: aplicar la misma lógica (apilar columnas, tiras horizontales con scroll-snap para pestañas y teléfonos, botones a todo ancho, capturas que se salen del contenedor pasan a 100%).
- Contenedor `max-width:1320px; padding:0 32px` (20px en móvil). Sin scroll horizontal nunca: el wrapper raíz usa `overflow-x: clip` (no `hidden`, porque rompe el header sticky).

## 4. Header

- Sticky arriba, `z-index` alto. Transparente al cargar; a partir de ~90px de scroll pasa a `rgba(255,255,255,.86)` con `backdrop-filter: blur(18px)` y borde inferior `#EEF1EE`. Transición suave ligada al scroll (ver §8).
- Barra de progreso de lectura de 3px arriba del header, gradiente `#1E2B5B → #5B4BD6 → #8B7CF6`, ancho = progreso del scroll de la página.
- Izquierda: logo (`brand/logo-fondo-claro.png`, 34px alto) → `/`. Menú: Inicio · Plataforma (dropdown: Qué es → `/#quehace`, El ecosistema → `/#ecosistema`, Tiempo real → `/#resultados`) · Soluciones (`/#actores`) · Preguntas (`/#faq`).
- Derecha: grupo con fondo `#F2F4F2` y radio 14px: Marcas · Distribuidoras · Repositoras (texto tinta, sin colores por actor) y botón PRECIO (fondo `#0F1A14`, texto blanco, mayúsculas). Separado, botón Login con borde `#D7DED8` → app.gondolapp.com.
- Móvil: logo + Login + hamburguesa. El menú desplegado es el del tablero mobile (incluye la grilla Marcas/Distribuidoras/Repositoras/PRECIO y el botón de demo).
- El halo de color del hero empieza desde el borde superior de la página y pasa por detrás del header (en la maqueta: `inset:-84px 0 0` sobre el fondo del hero). Un color por página: Home lila `rgba(139,124,246,.16)`, Marcas `#5B4BD6`, Distribuidoras `#C4871F`, Repositoras `#2F6FE0`, Red `#1F9D5A`, Precios gris `rgba(120,130,124,.18)`.

## 5. Sistema visual

- Fondo blanco. Tinta `#0F1A14`, texto secundario `#4E5D53`, líneas `#E3E8E3`. Tintes de sección `#F2F6F2` (verde grisáceo) y `#F2F4F7` (azul grisáceo). Sección "Tiempo real": fondo `#1B1F2A`, acento `#A5B4FC`. Bloque de demo: fondo `#0F1A14`, acento menta `#7EE2A8` (único lugar donde se usa el menta).
- Colores por actor (solo en ecosistema, kickers de Soluciones, etiquetas de Precios y halos): marca/equipo interno `#5B4BD6`, distribuidora `#C4871F`, repositora `#2F6FE0`, vendedor/gondolero `#1F9D5A`, fixer `#E0702D`.
- Título del hero: "Tu góndola habla," en tinta + "¡escuchala!" con gradiente de texto `#1E2B5B → #5B4BD6 → #8B7CF6`.
- Tipografía: display Manrope 800, tracking -0.05em, line-height .94–1. Kickers en JetBrains Mono 12px mayúsculas con tracking .12em.
- Botones pill (radio 999px), 56px de alto, `btn-dark` tinta y `btn-ghost` con borde. Capturas con radio 16–24px y sombra `0 60px 120px -50px rgba(15,26,20,.5)`; sin inclinación ni perspectiva.

## 6. Componentes interactivos de la home

Todos existen funcionando en la maqueta; portar la lógica, no reinventarla.

1. **Hero con pestañas** Marca / Distribuidora / Repositora: cambia un collage de 3 capturas (principal 70%, secundaria 40% abajo a la derecha, teléfono 17% abajo a la izquierda). Posiciones en `SLOTS` de la maqueta.
2. **Cómo funciona**: 5 pestañas (Campaña, Misión, Validación, Datos, Acción) con autoplay cada 6 s y barra de progreso; al tocar una se detiene el autoplay. Tarjeta con texto a la izquierda y escenario visual a la derecha, distinto por paso (collage de capturas; en Acción, comparativa antes/después con etiquetas "HACE 2 SEMANAS · Presencia 72%" y "HOY · Presencia 89%").
3. **Ecosistema** (desktop): simulación de fuerzas en HTML/CSS con 47 nodos y 49 aristas, 4 marcas que se repelen, distribuidoras/repositoras compartidas, equipo interno con borde punteado, arrastre con mouse y touch, tarjeta de detalle al lado del nodo en hover, partículas de contenido (foto, dato, mapa) que nacen de los nodos y se desvanecen, íconos por tipo (fábrica, camión, góndola, persona). Portar el código de `Main.dc.html` (constantes `ECO`, `ECO_CONTENT`, método `ecoStep`) a un componente con `requestAnimationFrame` en vez de `setInterval`, y pausar la simulación cuando la sección no está en pantalla (IntersectionObserver). Para las partículas "foto", usar miniaturas reales recortadas de `gondola/foto-gondola-*.png` (desenfocadas, sin marcas legibles) en lugar de las rayas de color de la maqueta.
   **Móvil (< 768px)**: no renderizar la simulación. Usar la "cadena de valor" del tablero mobile: 8 nodos fijos en 4 niveles (Marca → Equipo interno / Distribuidora / Repositora → Promotores / Vendedores / Fixers → Panel de la marca), aristas SVG con puntos animados (`animateMotion`), tap en un nodo abre la ficha debajo.
4. **Tiempo real**: chips (qué se mide / tipo de pregunta / de dónde sale) + 3 capturas (resultados, mapa, informe HTML). En móvil, carrusel con scroll-snap.
5. **Probalo** (armador de misión): selectores de ejecutor, métricas y modalidad; el teléfono de la derecha se arma con las preguntas elegidas. Lógica en `METRICS`, `EXECS`, `MODES`.
6. **Soluciones**: 5 pestañas (Marcas, Distribuidoras, Repositoras, Vendedores, Fixers); las dos últimas muestran 3 teléfonos escalonados, las otras una captura de escritorio que se sale del contenedor. "Fixer" es un rol vigente: no marcarlo como próximamente.
7. **Precios (teaser)**: bloque gris azulado con tabla de 3 cifras a la izquierda y tarjeta oscura "Tu primera campaña, gratis" a la derecha, más tira de 3 actores.
8. **Preguntas**: pestañas por actor + acordeón.
9. **Demo**: formulario (ver §7) con estados enviando / enviado / error.

Página **Precios**: estimador interactivo (`TIERS`, `redCost`, modos "Mi equipo o repositora" / "Red de distribuidoras", presets de tamaño). Etiquetas: A = Con tu equipo o una repositora (azul), B = Con la red de distribuidoras (ámbar). Página **Red**: toggle Vendedores/Fixers en el hero y los 5 teléfonos del flujo de misión.

## 7. Formulario de demo (Resend)

- Campos: nombre, email laboral, empresa, perfil (select: Marca, Distribuidora, Repositora, Agencia de trade marketing, Gondolero / relevador), checkbox de consentimiento con link a `https://app.gondolapp.com/legales`. Campo oculto `website` como honeypot.
- `POST /api/demo` (Route Handler): valida campos y consentimiento, descarta si el honeypot viene lleno (responder ok igual), rate limit 5 envíos por IP por hora (`@upstash/ratelimit` con Vercel KV, o un Map en memoria como mínimo viable), y envía dos mails con `resend`:
  1. A `LEADS_TO`, desde `LEADS_FROM`, `replyTo` = email del lead, asunto `Demo · {empresa} ({perfil})`, cuerpo en texto con todos los campos.
  2. Al lead, desde `LEADS_FROM`, asunto "Recibimos tu pedido de demo", texto breve: lo contactamos en menos de 24 h hábiles.
- Front: `fetch` a la ruta, botón deshabilitado mientras envía, pantalla de éxito "¡Listo! Te escribimos en menos de 24 h hábiles" con opción de enviar otra, mensaje de error con el mailto como alternativa.
- Sin captcha de terceros, sin cookies. Nunca exponer la API key al cliente.

## 8. Movimiento

- Aparición al scrollear de cada bloque (hijos directos de `.wrap` en cada sección, tiras `.hs`, capturas): deslizamiento de 26px hacia arriba + fundido, 0.8 s, easing `cubic-bezier(.2,.7,.2,1)`; las capturas además escalan de .975 a 1. Implementar con **IntersectionObserver** (una clase `.in` al entrar, umbral ~15%), no con `animation-timeline`, para que funcione en Firefox. Una sola vez por elemento.
- Header transparente → blanco y barra de progreso: con un listener de scroll (throttle con rAF).
- Respetar `prefers-reduced-motion`: sin animaciones, ecosistema estático.
- No agregar más efectos (parallax, contadores, texto que se escribe): la maqueta tiene exactamente estos y es intencional.

## 9. Textos y legales

- Copiar los textos de la maqueta tal cual (voseo rioplatense). Sin promesas de IA: la FAQ dice que el análisis automático de fotos "llega en la próxima etapa".
- No copiar Términos ni Privacidad al sitio: viven en `https://app.gondolapp.com/legales` (única fuente, con versiones). El pie enlaza ahí tres veces (Términos, Privacidad, Todos los documentos).
- Pie: "Este sitio no usa cookies de seguimiento ni trackers de terceros…" y "Las cifras de las capturas son de un entorno de demostración." Mantener.
- Marca registrada en trámite ante el INPI (clases 35 y 42): mantener la frase del pie.

## 10. Imágenes (carpeta `gondolapp-assets/`)

- `brand/`: `logo-fondo-claro.png` (header y pie), `logo-fondo-oscuro.png` (bloque de demo, mails), `icon-512.png` (favicon, app icon, OG provisorio).
- `app/01…12`: pantallas de la app de campo en orden de flujo. Teléfonos siempre con radio 22–28px y sombra; nunca en marco de dispositivo dibujado.
- `panel/`: paneles de marca, distribuidora y repositora + builder de campaña, fotos por aprobar, 3 pantallas de datos, informe HTML.
- `gondola/`: `antes-hace-2-semanas.jpg` y `hoy.jpg` (comparativa del paso Acción, desenfocadas a propósito) y las dos fotos originales para recortar miniaturas del ecosistema (desenfocar antes de usar: no deben leerse marcas).
- Las capturas de la maqueta que no estén en el pack no existen: no inventar.

## 11. Pendientes conocidos (no bloquean el build)

- Imagen Open Graph propia (1200×630) con el logo y el título del hero.
- Print real de una campaña de reposición (antes/después) para reemplazar la comparativa armada.
- Borrar `SUPABASE_*` del proyecto de Vercel una vez desplegado.

## 12. Definición de terminado

- Lighthouse móvil ≥ 90 en Performance, Accessibility, Best Practices y SEO.
- Sin scroll horizontal en 360px, 390px, 768px, 1024px, 1440px.
- Header sticky funcionando en todas las páginas.
- Form probado de punta a punta con un mail real: llegan los dos correos.
- Todas las imágenes con `alt`; contraste AA en textos sobre tintes.
