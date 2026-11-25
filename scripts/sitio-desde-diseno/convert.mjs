// Conversor: .dc.html (lienzo de diseño) -> componentes React del sitio.
// Copia literal de textos y estilos; la lógica de cada lienzo se reusa tal cual.
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { BLOB } from './blobs.mjs';

const REPO_RAIZ = fileURLToPath(new URL("../../", import.meta.url)).split(path.sep).join("/");
// Carpeta de la oficina con docs/sitio (por defecto, un clon al lado de este repo)
const OFICINA = process.env.OFICINA || REPO_RAIZ + '../gondolapp-oficina-lectura/';
const require = createRequire(REPO_RAIZ + 'package.json');
const postcss = require('postcss');

const DIS = OFICINA + 'docs/sitio/diseno-v1/';
const REPO = REPO_RAIZ;
const OUT = REPO + 'components/dc/generado/';
fs.mkdirSync(OUT, { recursive: true });

const log = [];
const warn = (m) => { log.push('AVISO ' + m); };

/* ───────── parser ───────── */
const VOID = new Set(['img', 'input', 'br', 'meta', 'link', 'hr', 'source', 'area', 'col', 'embed', 'wbr']);
function parse(html) {
  const root = { tag: '#root', attrs: [], children: [] };
  const stack = [root];
  let i = 0;
  const attrRe = /\s*([^\s=\/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/y;
  while (i < html.length) {
    if (html.startsWith('<!--', i)) { const e = html.indexOf('-->', i); i = e + 3; continue; }
    if (html.startsWith('</', i)) {
      const e = html.indexOf('>', i); const name = html.slice(i + 2, e).trim().toLowerCase();
      // cerrar hasta encontrar
      for (let k = stack.length - 1; k > 0; k--) { if (stack[k].tag === name) { stack.length = k; break; } }
      i = e + 1; continue;
    }
    if (html[i] === '<' && /[a-zA-Z]/.test(html[i + 1] || '')) {
      let j = i + 1; while (/[a-zA-Z0-9:-]/.test(html[j])) j++;
      const tag = html.slice(i + 1, j).toLowerCase();
      const attrs = [];
      attrRe.lastIndex = j;
      for (;;) {
        // fin del tag?
        const rest = html.slice(attrRe.lastIndex).match(/^\s*(\/?)>/);
        if (rest) { attrRe.lastIndex += rest[0].length; var selfClose = rest[1] === '/'; break; }
        const m = attrRe.exec(html);
        if (!m) throw new Error('attr parse error near ' + html.slice(attrRe.lastIndex, attrRe.lastIndex + 80));
        attrs.push([m[1], m[2] ?? m[3] ?? m[4] ?? null]);
      }
      const node = { tag, attrs, children: [] };
      stack[stack.length - 1].children.push(node);
      i = attrRe.lastIndex;
      if (tag === 'script' || tag === 'style') {
        const e = html.indexOf('</' + tag, i); node.children.push({ text: html.slice(i, e) }); i = html.indexOf('>', e) + 1; continue;
      }
      if (!VOID.has(tag) && !selfClose) stack.push(node);
      continue;
    }
    let e = html.indexOf('<', i + 1); if (e < 0) e = html.length;
    // un '<' que no abre tag queda como texto
    stack[stack.length - 1].children.push({ text: html.slice(i, e) });
    i = e;
  }
  return root;
}
const attr = (n, k) => (n.attrs.find((a) => a[0] === k) || [])[1];
function find(n, pred) { if (pred(n)) return n; for (const c of n.children || []) { const r = find(c, pred); if (r) return r; } return null; }

/* ───────── utilidades ───────── */
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const ATTR_MAP = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength', autocomplete: 'autoComplete', 'xlink:href': 'xlinkHref', 'stroke-width': 'strokeWidth' };
function attrName(k) {
  if (ATTR_MAP[k]) return ATTR_MAP[k];
  if (k.startsWith('aria-') || k.startsWith('data-')) return k;
  if (k.includes('-')) return camel(k);
  return k;
}
const FONT = (s) => s.replace(/'Manrope'/g, 'var(--font-sans)').replace(/'JetBrains Mono'/g, 'var(--font-mono)');

// partes de un string con {{bindings}}
function parts(s) {
  const out = []; let last = 0; const re = /\{\{\s*([^}]+?)\s*\}\}/g; let m;
  while ((m = re.exec(s))) { if (m.index > last) out.push({ lit: s.slice(last, m.index) }); out.push({ expr: m[1] }); last = re.lastIndex; }
  if (last < s.length) out.push({ lit: s.slice(last) });
  return out;
}
function expr(e, ctx) {
  if (e === 'true' || e === 'false') return e;
  const root = e.split('.')[0];
  if (ctx.loop.has(root)) return e;
  if (ctx.used) ctx.used.add(root);
  return 'v.' + e;
}
// valor JS (string) de un atributo con posibles bindings
function jsValue(s, ctx) {
  const p = parts(s);
  if (p.length === 1 && p[0].expr) return expr(p[0].expr, ctx);
  if (!p.some((x) => x.expr)) return JSON.stringify(s);
  return '`' + p.map((x) => x.lit != null ? x.lit.replace(/[`\\$]/g, (c) => '\\' + c) : '${' + expr(x.expr, ctx) + '}').join('') + '`';
}
function styleObj(s, ctx) {
  s = FONT(s);
  if (ctx.kfRename) s = ctx.kfRename(s);
  const decls = []; let depth = 0, q = null, cur = '';
  for (const ch of s) {
    if (q) { if (ch === q) q = null; cur += ch; continue; }
    if (ch === '"' || ch === "'") { q = ch; cur += ch; continue; }
    if (ch === '(') depth++; if (ch === ')') depth--;
    if (ch === '{') depth++; if (ch === '}') depth--;
    if (ch === ';' && depth === 0) { decls.push(cur); cur = ''; continue; }
    cur += ch;
  }
  decls.push(cur);
  const map = new Map();
  for (const d of decls) {
    const k = d.indexOf(':'); if (k < 0) { if (d.trim()) warn('decl rara: ' + d); continue; }
    let prop = d.slice(0, k).trim(); const val = d.slice(k + 1).trim();
    if (!prop) continue;
    if (!prop.startsWith('--')) {
      if (prop.startsWith('-webkit-')) prop = 'Webkit' + camel(prop.slice(8)).replace(/^./, (c) => c.toUpperCase());
      else if (prop.startsWith('-ms-')) prop = 'ms' + camel(prop.slice(4)).replace(/^./, (c) => c.toUpperCase());
      else prop = camel(prop);
    }
    map.delete(prop); map.set(prop, val); // la última gana, como en CSS
  }
  return '{{' + [...map].map(([k, v]) => JSON.stringify(k) + ': ' + jsValue(v, ctx)).join(', ') + '}}';
}

/* ───────── emisión JSX ───────── */
const NO_WS = new Set(['svg', 'g', 'defs', 'select', 'table', 'tbody', 'thead', 'tr', 'path', 'circle', 'rect', 'animate', 'animatemotion', 'mpath', 'option']);
const SVG_TAGS = { animatemotion: 'animateMotion', lineargradient: 'linearGradient', radialgradient: 'radialGradient', clippath: 'clipPath', foreignobject: 'foreignObject' };

// Textos que el diseño deja para completar al publicar (pedido de Manuel, 25/11/2026).
const COMPLETAR = { '[FECHA DE PUBLICACIÓN]': 'noviembre de 2026' };

function emitText(t, ctx) {
  let collapsed = t.replace(/\s+/g, ' ');
  for (const [k, v] of Object.entries(COMPLETAR)) if (collapsed.includes(k)) { collapsed = collapsed.split(k).join(v); log.push(`completado ${ctx.name}: ${k} → ${v}`); }
  const p = parts(collapsed);
  return p.map((x) => {
    if (x.expr) return '{' + expr(x.expr, ctx) + '}';
    let lit = x.lit;
    if (ctx.region === 'body' && ctx.reg && !ctx.reg.done && !ctx.enLink && /Gondolapp(?!®)/.test(lit)) {
      lit = lit.replace(/Gondolapp(?!®)/, 'Gondolapp®'); ctx.reg.done = true; log.push(`® ${ctx.name}: «${lit.trim().slice(0, 90)}»`);
    } else if (/Gondolapp/.test(lit)) log.push(`   ${ctx.name} [${ctx.region}] texto: «${lit.trim().slice(0, 90)}»`);
    return '{' + JSON.stringify(lit) + '}';
  }).join('');
}

function emit(n, ctx, parentTag) {
  if (n.raw != null) return n.raw;
  if (n.text != null) {
    if (!n.text.trim()) return NO_WS.has(parentTag) ? '' : '{" "}';
    return emitText(n.text, ctx);
  }
  const tag = n.tag;
  if (tag === 'sc-for') {
    const list = parts(attr(n, 'list'))[0].expr; const as = attr(n, 'as');
    const c2 = { ...ctx, loop: new Set([...ctx.loop, as]) };
    const idx = '__i' + ctx.loop.size;
    return `{(${expr(list, ctx)} || []).map((${as}, ${idx}) => (<Fragment key={${as} && ${as}.id != null ? ${as}.id : ${idx}}>${kids(n, c2, parentTag)}</Fragment>))}`;
  }
  if (tag === 'sc-if') {
    const val = parts(attr(n, 'value'))[0].expr;
    return `{${expr(val, ctx)} ? (<>${kids(n, ctx, parentTag)}</>) : null}`;
  }
  if (tag === 'dc-import') {
    const name = attr(n, 'name'); ctx.imports.add(name);
    // el Simulador lleva el ® del Inicio si la página no lo puso antes
    if (name === 'Simulador' && ctx.reg) {
      if (ctx.reg.done) warn(ctx.name + ': el ® ya estaba antes del Simulador, y el Simulador también lo lleva');
      else { ctx.reg.done = true; log.push('® ' + ctx.name + ': lo lleva el Simulador'); }
    }
    return `<${name} />`;
  }
  if (ctx.replace && ctx.replace[tag]) { const r = ctx.replace[tag](n, ctx); if (r != null) return r; }

  let region = ctx.region;
  if (tag === 'header') region = 'header'; else if (tag === 'footer') region = 'footer';
  let c2 = region === ctx.region ? ctx : { ...ctx, region };
  // el ® va en el texto del cuerpo, no en botones ni links
  if ((tag === 'a' || tag === 'button') && !c2.enLink) c2 = { ...c2, enLink: true };

  const out = [];
  for (let [k, val] of n.attrs) {
    if (k.startsWith('hint-')) continue;
    if (ctx.dropId && k === 'id') continue;
    const name = attrName(k);
    if (val == null) { out.push(`${name}={true}`); continue; }
    if (k === 'style') { out.push(`style=${styleObj(val, c2)}`); continue; }
    if (k === 'href') val = ctx.href(val);
    if (k === 'src') { const m = val.match(/^\/_blob\/([0-9a-f]{32})$/); if (m) { if (!BLOB[m[1]]) warn('blob sin mapa ' + m[1]); val = BLOB[m[1]] || val; } }
    out.push(`${name}={${jsValue(val, c2)}}`);
  }
  if (tag === 'img') {
    const src = attr(n, 'src') || '';
    // Reserva el lugar antes de que cargue, con la proporción real del archivo
    // (aspect-ratio «auto w / h»: ya cargada, manda la de la imagen, que es la misma).
    let srcVal = src; const mb = src.match(/^\/_blob\/([0-9a-f]{32})$/); if (mb && BLOB[mb[1]]) srcVal = BLOB[mb[1]];
    const ar = '"aspectRatio": proporcion(' + jsValue(srcVal, c2) + ')';
    const si = out.findIndex((x) => x.startsWith('style='));
    if (si >= 0) out[si] = out[si].replace('style={{', 'style={{' + ar + ', '); else out.push('style={{' + ar + '}}');
    if (!/20d2f0ae2173f338bcb46680d5445695/.test(src)) out.push('loading="lazy"');
    out.push('decoding="async"');
  }
  const T = SVG_TAGS[tag] || tag;
  if (VOID.has(tag)) return `<${T} ${out.join(' ')} />`;
  return `<${T}${out.length ? ' ' + out.join(' ') : ''}>${kids(n, c2, tag)}</${T}>`;
}
function kids(n, ctx, tag) { return n.children.map((c) => emit(c, ctx, tag)).join(''); }

/* ───────── hrefs ───────── */
const PAGES = { Main: '/', Marcas: '/marcas', Distribuidoras: '/distribuidoras', Repositoras: '/repositoras', Red: '/red', Precios: '/precios' };
function hrefFor(absHash) {
  return (h) => {
    const m = h.match(/^([A-Za-z]+)\.dc\.html(#.*)?$/);
    if (m) {
      const base = PAGES[m[1]]; if (!base) { warn('href sin página ' + h); return h; }
      return m[2] ? (base === '/' ? '/' + m[2] : base + m[2]) : base;
    }
    if (absHash && h.startsWith('#')) return h === '#top' ? '/' : '/' + h;
    return h;
  };
}

/* ───────── lógica ───────── */
function logicFile(html, name, transform) {
  const m = html.match(/<script type="text\/x-dc" data-dc-script data-props='([^']*)'>([\s\S]*?)<\/script>/);
  if (!m) return null;
  const props = JSON.parse(m[1]); const defaults = {};
  for (const [k, v] of Object.entries(props)) if (!k.startsWith('$')) defaults[k] = v.default;
  let src = m[2];
  src = src.replace(/'\/_blob\/'\s*\+\s*id/g, 'BLOB[id]');
  src = src.replace(/'\/_blob\/([0-9a-f]{32})'/g, (_, id) => { if (!BLOB[id]) warn('blob sin mapa (lógica) ' + id); return JSON.stringify(BLOB[id] || '/_blob/' + id); });
  src = src.replace(/'([A-Za-z]+)\.dc\.html(#[^']*)?'/g, (all, pg, h) => JSON.stringify(hrefFor(false)(pg + '.dc.html' + (h || ''))));
  if (transform) src = transform(src);
  const used = {}; for (const id of (m[2].match(/[0-9a-f]{32}/g) || [])) used[id] = BLOB[id];
  const out = `/* GENERADO desde docs/sitio/diseno-v1/${name}.dc.html (repo gondolapp-oficina). No editar a mano:
   es la lógica del lienzo de diseño, copiada tal cual. */
/* eslint-disable */
import { DCLogic } from "@/lib/dc/runtime";
const BLOB = ${JSON.stringify(used)};
${src}
export default Component;
export const DEFAULT_PROPS = ${JSON.stringify(defaults)};
`;
  return out;
}

/* ───────── CSS ───────── */
const cssOut = [];
function scopeCss(css, S, kfRename) {
  css = FONT(css);
  if (kfRename) css = kfRename(css);
  const root = postcss.parse(css);
  root.walkRules((rule) => {
    if (rule.parent.type === 'atrule' && /keyframes/.test(rule.parent.name)) return;
    const sels = rule.selectors.map((s) => {
      s = s.trim();
      if (s === 'html') return null;
      if (/^body\b/.test(s)) return S + s.slice(4);
      return S + ' ' + s;
    }).filter(Boolean);
    if (!sels.length) rule.remove(); else rule.selectors = sels;
  });
  root.walkAtRules((a) => { if (a.nodes && a.nodes.length === 0) a.remove(); });
  return root.toString();
}
function helmetCss(html) { return [...html.matchAll(/<helmet>[\s\S]*?<style>([\s\S]*?)<\/style>[\s\S]*?<\/helmet>/g)].map((m) => m[1]).join('\n'); }

/* ───────── archivo de componente ───────── */
function component({ name, jsx, logic, imports, extraImports = '', propsSig = '', defs = '' }) {
  const imp = [...imports].map((i) => `import ${i} from "./${i}";`).join('\n');
  return `// @ts-nocheck
"use client";
/* GENERADO desde docs/sitio/diseno-v1 (repo gondolapp-oficina) por el conversor
   del sitio. Textos y estilos literales del diseño aprobado el 25/11/2026. */
/* eslint-disable */
import { Fragment } from "react";
import { useDC } from "@/lib/dc/runtime";
import { proporcion } from "@/lib/dc/medidas";
${logic ? `import Logic, { DEFAULT_PROPS } from "./${logic}";` : ''}
${imp}
${extraImports}
${defs}

export default function ${name}(${propsSig}) {
  ${logic ? 'const v: any = useDC(Logic, DEFAULT_PROPS);' : 'const v: any = {};'}
  return (${jsx});
}
`;
}

function convertPage({ file, name, scope, absHash = false, replace, kf, logicTransform, noReg = false, extraImports }) {
  const html = fs.readFileSync(DIS + file + '.dc.html', 'utf8');
  const tree = parse(html);
  const xdc = find(tree, (n) => n.tag === 'x-dc');
  const body = xdc.children.filter((c) => c.tag !== 'helmet');
  const imports = new Set();
  const kfRename = kf ? (s) => s.replace(new RegExp('\\b(' + kf.join('|') + ')\\b', 'g'), '$1M') : null;
  const ctx = { name, loop: new Set(), region: 'body', reg: noReg ? null : { done: false }, imports, href: hrefFor(absHash), replace, kfRename };
  // Cada <section> de primer nivel va en su propio componente memorizado: así,
  // cuando la lógica refresca algo (p. ej. la animación del ecosistema, 30 veces
  // por segundo), solo se vuelve a dibujar la sección que lo usa.
  const secciones = [];
  const top = find({ children: body }, (n) => n.tag === 'div' && attr(n, 'id') === 'top');
  if (top) top.children = top.children.map((c) => {
    // lo que se importa entre secciones (el Simulador) se emite en su turno, por el ®
    if (c.tag === 'dc-import') return { raw: emit(c, ctx, 'div') };
    if (c.tag !== 'section') return c;
    const used = new Set(); const k = secciones.length;
    const sj = emit(c, { ...ctx, used }, 'div');
    secciones.push({ k, sj, used });
    return { raw: `<S${k} v={{ ${[...used].map((u) => u + ': v.' + u).join(', ')} }} />` };
  });
  let jsx = body.map((c) => emit(c, ctx, 'div')).join('');
  jsx = `<div className="dc ${scope}">${jsx}</div>`;
  let logic = null;
  const L = logicFile(html, file, (s) => { let r = kfRename ? kfRename(s) : s; return logicTransform ? logicTransform(r) : r; });
  if (L) { logic = name + '.logic'; fs.writeFileSync(OUT + logic + '.js', L); }
  const defs = secciones.map(({ k, sj }) => `const S${k} = memo(function S${k}({ v }: { v: any }) {
  return (${sj});
}, igualSinFunciones);`).join('\n\n');
  fs.writeFileSync(OUT + name + '.tsx', component({ name, jsx, logic, imports, extraImports: (extraImports || '') + (secciones.length ? '\nimport { memo } from "react";\nimport { igualSinFunciones } from "@/lib/dc/runtime";' : ''), defs }));
  cssOut.push(`/* ${file}.dc.html */\n` + scopeCss(helmetCss(html), '.' + scope, kfRename));
  return { tree, html };
}

/* ───────── corrida ───────── */
const KF_MOB = ['gin', 'gpulse2', 'gfill', 'gdash'];

// Simulador (se usa dentro del Inicio, en compu y en celular)
// Lleva el ® del Inicio: es lo primero del cuerpo que nombra a Gondolapp fuera de un botón o link
convertPage({ file: 'Simulador', name: 'Simulador', scope: 'dc-sim' });

// Inicio en compu y en celular.
// El formulario de la compu no tiene estado de «enviado»: se usa el bloque del lienzo Mobile.
const KF_RE = new RegExp('\\b(' + KF_MOB.join('|') + ')\\b', 'g');
const mobTree = parse(fs.readFileSync(DIS + 'Mobile.dc.html', 'utf8'));
const sentNode = find(mobTree, (n) => n.tag === 'sc-if' && /\{\{\s*sent\s*\}\}/.test(attr(n, 'value') || '')).children.find((c) => c.tag);
for (const b of [sentNode]) { const btn = find(b, (n) => n.tag === 'button'); btn.attrs = btn.attrs.map(([k, v]) => k === 'onClick' ? [k, '{{__otra}}'] : [k, v]); }
// Formulario de demo: el botón envía a /api/demo y, si la ruta devuelve un error, se
// muestra en rojo debajo del botón (pedido de Manuel, 25/11); se borra al volver a escribir.
function formDemo(n, ctx, { gridCol }) {
  const btn = find(n, (x) => x.tag === 'button');
  btn.attrs = btn.attrs.filter(([k]) => k !== 'onClick');
  btn.attrs.push(['onClick', '{{__enviar}}']);
  n.attrs.push(['onInput', '{{__limpiar}}']);
  const i = n.children.indexOf(btn);
  const estilo = gridCol ? '{ ...ESTILO_ERROR, gridColumn: "1 / -1" }' : 'ESTILO_ERROR';
  n.children.splice(i + 1, 0, { raw: `{__error ? (<p role="alert" style={${estilo}}>{__error}</p>) : null}` });
  return emit(n, { ...ctx, inForm: true, loop: new Set([...ctx.loop, '__enviar', '__otra', '__limpiar']) }, 'div');
}
const DEMO_IMPORT = 'import DemoEnvio, { ESTILO_ERROR } from "@/components/dc/DemoEnvio";';
convertPage({
  file: 'Main', name: 'HomeDesktop', scope: 'dc-main',
  extraImports: DEMO_IMPORT,
  replace: {
    form: (n, ctx) => {
      if (ctx.inForm) return null;
      const formJsx = formDemo(n, ctx, { gridCol: true });
      const c2 = { ...ctx, inForm: true, loop: new Set([...ctx.loop, '__enviar', '__otra', '__limpiar']) };
      const sentJsx = emit(sentNode, { ...c2, kfRename: (s) => s.replace(KF_RE, '$1M') }, 'div');
      return `<DemoEnvio>{(__enviar, __listo, __otra, __error, __limpiar) => __listo ? (<div style={{ flex: "1 1 400px", minWidth: 0 }}>${sentJsx}</div>) : (${formJsx})}</DemoEnvio>`;
    },
  },
});
// En el celular el «enviado» lo maneja la lógica del lienzo (sent/send): DemoEnvio la llama al terminar bien.
const mob = convertPage({
  file: 'Mobile', name: 'HomeMobile', scope: 'dc-mob', kf: KF_MOB,
  extraImports: DEMO_IMPORT,
  replace: {
    form: (n, ctx) => {
      if (ctx.inForm) return null;
      const formJsx = formDemo(n, ctx, { gridCol: false });
      return `<DemoEnvio alListo={${expr('send', ctx)}}>{(__enviar, __listo, __otra, __error, __limpiar) => (${formJsx})}</DemoEnvio>`;
    },
  },
});

// Header y pie de celular, para las páginas internas
{
  const tree = mob.tree; const html = mob.html;
  const kfRename = (s) => s.replace(new RegExp('\\b(' + KF_MOB.join('|') + ')\\b', 'g'), '$1M');
  const hdr = find(tree, (n) => n.tag === 'header'); const ftr = find(tree, (n) => n.tag === 'footer');
  const mk = (node, nm, dropId) => {
    const ctx = { name: nm, loop: new Set(), region: 'x', reg: null, imports: new Set(), href: hrefFor(true), kfRename, dropId };
    return emit(node, ctx, 'div');
  };
  // lógica mínima del menú, copiada de la del lienzo Mobile
  const L = html.match(/menu[A-Za-z]*:[^,}]*/g) || [];
  log.push('menu en lógica Mobile: ' + L.join(' | '));
  fs.writeFileSync(OUT + 'MobileHeader.tsx', `// @ts-nocheck
"use client";
/* GENERADO desde docs/sitio/diseno-v1/Mobile.dc.html: el header de celular, para las páginas internas. */
/* eslint-disable */
import { Fragment, useState } from "react";
import { proporcion } from "@/lib/dc/medidas";
export default function MobileHeader() {
  const [menu, setMenu] = useState(false);
  const v: any = MENU(menu, setMenu);
  return (${mk(hdr, 'MobileHeader', false)});
}
/* Copiado de la lógica del lienzo Mobile (menu, menuOff, menuBg, menuFg, menuToggle, menuClose). */
function MENU(menu: boolean, setMenu: (b: boolean) => void) {
  return { menu, menuOff: !menu, menuBg: menu ? '#0F1A14' : '#F2F4F2', menuFg: menu ? '#FFFFFF' : '#0F1A14', menuToggle: () => setMenu(!menu), menuClose: () => setMenu(false) };
}
`);
  fs.writeFileSync(OUT + 'MobileFooter.tsx', `// @ts-nocheck
/* GENERADO desde docs/sitio/diseno-v1/Mobile.dc.html: el pie de celular, para las páginas internas. */
/* eslint-disable */
import { proporcion } from "@/lib/dc/medidas";
export default function MobileFooter() {
  const v: any = {};
  return (${mk(ftr, 'MobileFooter', false)});
}
`);
}

// Páginas internas: header y pie de compu del lienzo; en celular, los del lienzo Mobile
for (const [file, slug] of [['Marcas', 'marcas'], ['Distribuidoras', 'distribuidoras'], ['Repositoras', 'repositoras'], ['Red', 'red'], ['Precios', 'precios']]) {
  const replace = {
    header: (n, ctx) => { if (ctx.inSwap) return null; return `<Responsive desktop={${emit(n, { ...ctx, inSwap: true }, 'div')}} mobile={<div className="dc-mob dc-contents"><MobileHeader /></div>} />`; },
    footer: (n, ctx) => { if (ctx.inSwap) return null; return `<Responsive desktop={${emit(n, { ...ctx, inSwap: true }, 'div')}} mobile={<div className="dc-mob dc-contents"><MobileFooter /></div>} />`; },
  };
  convertPage({ file, name: 'Page' + file, scope: 'dc-' + slug, replace,
    extraImports: 'import Responsive from "@/components/dc/Responsive";\nimport MobileHeader from "./MobileHeader";\nimport MobileFooter from "./MobileFooter";' });
}

const globalCss = `/* GENERADO por el conversor del sitio a partir de los lienzos de docs/sitio/diseno-v1.
   Cada lienzo queda encerrado en su clase (.dc-main, .dc-mob, .dc-marcas…), así
   los estilos de la compu y los del celular no se pisan. */
html{scroll-behavior:smooth;scroll-padding-top:84px}
@media (max-width:899px){html{scroll-padding-top:68px}}
@media (prefers-reduced-motion: reduce){html{scroll-behavior:auto}}
body{margin:0;background:#FFFFFF}
.dc-sim{display:contents}
.dc-contents{display:contents}
.only-dsk{display:contents}
.only-mob{display:none}
@media (max-width:899px){.only-dsk{display:none}.only-mob{display:contents}}
`;
fs.writeFileSync(REPO + 'app/dc.css', globalCss + cssOut.join('\n'));
console.log(log.join('\n'));
