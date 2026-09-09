# Gondolapp Landing — Setup en máquina nueva

Guía para levantar el entorno de desarrollo desde cero en cualquier notebook.

---

## 1. Requisitos previos

### Node.js

El proyecto usa **Node 24** (versión activa en producción al momento de escribir esto: `v24.14.1`).

Si usás [nvm](https://github.com/nvm-sh/nvm) / [nvm-windows](https://github.com/coreybutler/nvm-windows):

```bash
nvm install 24
nvm use 24
```

El archivo `.nvmrc` en la raíz fija la versión; basta con correr `nvm use` dentro del repo.

### Herramientas necesarias

| Herramienta | Versión mínima | Notas |
|---|---|---|
| Node.js | 24.x | Ver arriba |
| npm | viene con Node | el lockfile es `package-lock.json` |
| Git | cualquiera reciente | — |
| Vercel CLI | última | `npm i -g vercel` |

---

## 2. Clonar e instalar

```bash
git clone https://github.com/manueldo-md/gondolapp-website.git gondolapp-landing
cd gondolapp-landing
npm install
```

> **Gestor de paquetes:** `npm` — hay `package-lock.json` y no hay `yarn.lock` ni `pnpm-lock.yaml`. No uses `pnpm` ni `yarn` o el lockfile queda inconsistente.

---

## 3. Variables de entorno

Las variables se cargan desde `.env.local` (excluido de git por `.gitignore`).

### Opción A — bajarlas de Vercel (recomendado)

```bash
# 1. Autenticarse (abre el browser)
vercel login

# 2. Linkear el proyecto al proyecto en Vercel
vercel link
# → seleccionar: manueldo-md / gondolapp-website

# 3. Bajar las env vars del entorno de desarrollo
vercel env pull .env.local
```

Esto crea el `.env.local` con todos los valores ya configurados en el dashboard de Vercel.

### Opción B — crear `.env.local` a mano

Crear el archivo en la raíz con este contenido (reemplazar los valores):

```env
# Supabase — backend para guardar solicitudes de demo del formulario de contacto
SUPABASE_URL=https://<tu-project-ref>.supabase.co
SUPABASE_ANON_KEY=<anon-public-key-del-proyecto>
```

#### Descripción de cada variable

| Variable | Descripción | Requerida para |
|---|---|---|
| `SUPABASE_URL` | URL base del proyecto Supabase (ej: `https://xxxx.supabase.co`) | Guardar leads del formulario de demo |
| `SUPABASE_ANON_KEY` | Clave pública anon del proyecto Supabase | Autenticar llamadas a la REST API de Supabase |

> **Nota:** Si estas variables están vacías, el endpoint `/api/demo` igual responde `{ ok: true }` y loguea el request en consola. El sitio completo funciona sin ellas; solo el formulario de contacto no guardará en base de datos.

---

## 4. Correr en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

El flag `--webpack` ya está incluido en el script `dev` del `package.json` (necesario para Next 16 con Tailwind v4).

---

## 5. Linkear con Vercel (deploy)

```bash
# Si no hiciste el `vercel link` del paso 3-A, hacerlo ahora:
vercel link

# Deploy de preview (no va a producción)
vercel

# Deploy a producción
vercel --prod
```

Los deploys a `main` son automáticos: cualquier push a `main` dispara un deploy en Vercel.

---

## 6. Dependencias externas / pasos manuales

| Dependencia | Cómo configurarla |
|---|---|
| **Supabase** | Acceder al dashboard en [supabase.com](https://supabase.com) con la cuenta del proyecto para obtener URL y anon key. La tabla `demo_requests` tiene que existir en el proyecto. |
| **Vercel** | Acceso al equipo/proyecto en Vercel para poder correr `vercel link`. Pedir acceso a manueldo@gmail.com si no tenés. |
| **GitHub** | Acceso de lectura al repo `manueldo-md/gondolapp-website` para clonar. Actualmente es público. |

---

## 7. Verificar que quedó bien

```bash
# Chequear que el build de producción no tiene errores
npm run build
```

Resultado esperado:
```
✓ Compiled successfully
✓ Generating static pages (5/5)
Route (app)
  ○ /
  ○ /_not-found
  ƒ /api/demo
```

Luego `npm run dev` y verificar en `http://localhost:3000`:
- [ ] El sitio carga sin errores en consola
- [ ] Las imágenes de screenshots (`/screenshots/`, `/screenshots-reales/`, `/screenshots-informe/`) se ven correctamente
- [ ] El formulario de contacto (sección al final) envía sin error 500

---

## 8. Cosas a tener en cuenta

- **`.env.local` nunca se commitea** — está en `.gitignore`. Siempre bajarlo con `vercel env pull` o pedirlo.
- **`node_modules/` tampoco se commitea** — se regenera con `npm install`.
- El proyecto usa **Tailwind CSS v4** con configuración CSS-based (`app/globals.css`), no `tailwind.config.js`. No instales `tailwind.config.js` — va a romper estilos.
- **Next.js 16** (no es el Next.js tradicional — hay breaking changes respecto a versiones anteriores). Leer `AGENTS.md` antes de modificar convenciones de routing o APIs.
- Las imágenes están en `public/` y commiteadas en git. No hay CDN externo ni bucket de S3 para assets estáticos en este momento.
