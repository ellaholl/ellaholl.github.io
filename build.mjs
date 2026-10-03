// Usage: node build.mjs
// Reads content/<section>/*.md and writes the posts into index.html.
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';

const root = new URL('.', import.meta.url).pathname;
const sections = JSON.parse(readFileSync(join(root, 'content/sections.json'), 'utf8'));
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(s) {
  return esc(s)
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, u) => /^javascript:/i.test(u) ? t : `<a href="${u}">${t}</a>`)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function markdown(src) {
  const out = [], lines = src.split('\n');
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    if (l.startsWith('```')) {
      const code = []; i++;
      while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++]);
      i++; out.push(`<pre><code>${esc(code.join('\n'))}</code></pre>`); continue;
    }
    let m = l.match(/^(#{1,3})\s+(.*)/);
    if (m) { const n = m[1].length + 1; out.push(`<h${n}>${inline(m[2])}</h${n}>`); i++; continue; }
    if (/^>\s?/.test(l)) {
      const q = []; while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, ''));
      out.push(`<blockquote>${inline(q.join(' '))}</blockquote>`); continue;
    }
    if (/^([-*]|\d+\.)\s+/.test(l)) {
      const tag = /^\d/.test(l) ? 'ol' : 'ul', li = [];
      while (i < lines.length && /^([-*]|\d+\.)\s+/.test(lines[i])) li.push(`<li>${inline(lines[i++].replace(/^([-*]|\d+\.)\s+/, ''))}</li>`);
      out.push(`<${tag}>${li.join('')}</${tag}>`); continue;
    }
    const p = [];
    while (i < lines.length && lines[i].trim() && !/^(```|#{1,3}\s|>|([-*]|\d+\.)\s)/.test(lines[i])) p.push(lines[i++]);
    out.push(`<p>${inline(p.join(' '))}</p>`);
  }
  return out.join('\n');
}

function parse(text) {
  text = text.replace(/\r\n/g, '\n');
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return null;
  const meta = {};
  for (const line of m[1].split('\n')) {
    const k = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (k) meta[k[1].toLowerCase()] = k[2].trim().replace(/^(["'])(.*)\1$/, '$2');
  }
  return { meta, body: m[2] };
}

function fallbackCover(title) {
  let h = 0; for (const c of title) h = (h * 31 + c.charCodeAt(0)) % 360;
  return `linear-gradient(145deg,hsl(${h},70%,62%),hsl(${(h + 60) % 360},75%,45%))`;
}

const posts = [], seen = new Set(), known = new Set(sections.map(s => s.id));
for (const d of readdirSync(join(root, 'content'))) {
  const dir = join(root, 'content', d);
  if (statSync(dir).isDirectory() && !known.has(d)) console.warn(`! content/${d} is not listed in content/sections.json, skipped`);
}
for (const sec of sections) {
  const dir = join(root, 'content', sec.id);
  if (!existsSync(dir)) { console.warn(`! missing folder content/${sec.id}`); continue; }
  for (const f of readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'))) {
    const parsed = parse(readFileSync(join(dir, f), 'utf8'));
    if (!parsed || !parsed.meta.title) { console.warn(`! ${sec.id}/${f}: needs a --- front matter block with a title, skipped`); continue; }
    const { meta, body } = parsed;
    if (/^(true|yes)$/i.test(meta.draft || '')) continue;
    let slug = basename(f, '.md').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (seen.has(slug)) slug = `${sec.id}-${slug}`;
    seen.add(slug);
    const date = meta.date || '';
    posts.push({
      slug, section: sec.id, title: meta.title, date,
      year: date.slice(0, 4),
      tags: (meta.tags || '').split(',').map(t => t.trim().replace(/^#/, '').replace(/\s+/g, '-')).filter(Boolean),
      role: meta.role || '', tools: meta.tools || '',
      cover: meta.cover || fallbackCover(meta.title),
      label: meta.label || '', labelColor: meta.labelcolor || '',
      height: Math.min(Math.max(parseInt(meta.height, 10) || 320, 180), 600),
      html: markdown(body)
    });
  }
}
posts.sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.title.localeCompare(b.title));

const data = JSON.stringify({ sections, posts }).replace(/</g, '\\u003c');
const file = join(root, 'index.html');
const html = readFileSync(file, 'utf8');
const re = /(<script id="posts" type="application\/json">)[\s\S]*?(<\/script>)/;
if (!re.test(html)) throw new Error('index.html is missing <script id="posts" type="application/json">');
writeFileSync(file, html.replace(re, (_, a, b) => a + data + b));
console.log(`Built ${posts.length} posts from ${sections.length} sections.`);
