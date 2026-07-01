import { projects } from '../data/projects.js';

function renderProjectCard(project) {
  return `
    <div class="tool-card">
      <div class="tool-visual ${project.visual}">
        <span class="tool-icon">${project.icon}</span>
        <span class="tool-status">${project.status}</span>
      </div>
      <div class="tool-body">
        <h3 class="tool-title">${project.title}</h3>
        <p class="tool-desc">${project.desc}</p>
        <div class="tool-chips">
          ${project.tags.map(t => `<span class="t-chip">${t}</span>`).join('')}
        </div>
        <div class="tool-links">
          <a href="project?slug=${project.slug}" class="tool-link tl-try">Read more →</a>
          <a href="${project.tryHref}"  class="tool-link tl-try">${project.tryLabel}</a>
          <a href="${project.codeHref}" class="tool-link tl-code">GitHub</a>
        </div>
      </div>
    </div>`;
}

const container = document.getElementById('projects-list');
if (container) {
  container.innerHTML = `<div class="tool-grid">${projects.map(renderProjectCard).join('')}</div>`;
}
