import { projects } from '../data/projects.js';

const slug    = new URLSearchParams(window.location.search).get('slug');
const project = projects.find(p => p.slug === slug);

if (!project) {
  document.getElementById('project-content').innerHTML =
    `<p class="not-found">Project not found. <a href="/">← Back home</a></p>`;
} else {
  document.title = `${project.title} — Ella Holl`;

  document.getElementById('project-content').innerHTML = `
    <div class="post-header reveal">
      <a href="/" class="back-link">← Back to projects</a>
      <div class="tool-visual ${project.visual}" style="border-radius:16px; margin:1.5rem 0; max-width:200px; height:100px;">
        <span class="tool-icon">${project.icon}</span>
        <span class="tool-status">${project.status}</span>
      </div>
      <h1 class="post-title">${project.title}</h1>
      <div class="tool-chips" style="margin:1rem 0;">
        ${project.tags.map(t => `<span class="t-chip">${t}</span>`).join('')}
      </div>
      <div class="post-meta">
        <a href="${project.tryHref}" class="btn-pink" style="font-size:0.82rem; padding:0.65rem 1.4rem;">${project.tryLabel}</a>
        <a href="${project.codeHref}" class="btn-line" style="font-size:0.82rem; padding:0.65rem 1.4rem;">GitHub →</a>
      </div>
    </div>
    <div class="post-body reveal rd1">
      ${project.content}
    </div>
  `;

  requestAnimationFrame(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    function check() {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(el => { if (!el.classList.contains('visible') && el.getBoundingClientRect().top < vh - 40) el.classList.add('visible'); });
    }
    check();
    window.addEventListener('scroll', check, { passive: true });
  });
}
