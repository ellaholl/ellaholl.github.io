import { posts }    from '../data/posts.js';
import { projects } from '../data/projects.js';

// ── Blog ─────────────────────────────────────────────────────────────────────

function renderFeaturedPost(post) {
  return `
    <div class="blog-feature">
      <div class="bf-visual">
        <div class="bf-chart">
          <div class="bf-bar" style="height:40%; background:var(--pink);      animation-delay:0s;"></div>
          <div class="bf-bar" style="height:65%; background:var(--lavender);  animation-delay:0.1s;"></div>
          <div class="bf-bar" style="height:85%; background:var(--pink-deep); animation-delay:0.2s;"></div>
          <div class="bf-bar" style="height:55%; background:var(--lavender);  animation-delay:0.3s;"></div>
          <div class="bf-bar" style="height:95%; background:var(--pink);      animation-delay:0.4s;"></div>
          <div class="bf-bar" style="height:30%; background:var(--lavender);  animation-delay:0.5s;"></div>
        </div>
        <p class="bf-label">Sentiment score distribution, sampled comments</p>
      </div>
      <div class="bf-body">
        <span class="bf-tag">${post.tag}</span>
        <h3 class="bf-title">${post.title}</h3>
        <p class="bf-desc">${post.desc}</p>
        <div class="bf-meta">
          ${post.stats.map(s => `
            <div class="bf-stat">
              <span class="bf-stat-num">${s.num}</span>
              <span class="bf-stat-label">${s.label}</span>
            </div>
          `).join('')}
        </div>
        <a href="post?slug=${post.slug}" class="bf-link">Read the full writeup →</a>
      </div>
    </div>`;
}

function renderPostCard(post) {
  return `
    <a href="post?slug=${post.slug}" class="bpost-card">
      <span class="bpost-cat">${post.category}</span>
      <h3 class="bpost-title">${post.title}</h3>
      <p class="bpost-excerpt">${post.excerpt}</p>
      <div class="bpost-foot">
        <span class="bpost-date">${post.date}</span>
        <span class="bpost-arrow">→</span>
      </div>
    </a>`;
}

function renderBlog() {
  const featured = posts.find(p => p.featured);
  const grid     = posts.filter(p => !p.featured);

  const container = document.getElementById('blog-content');
  if (!container) return;

  container.innerHTML =
    (featured ? renderFeaturedPost(featured) : '') +
    `<div class="blog-list">
      ${grid.map(p => renderPostCard(p)).join('')}
    </div>`;
}

// ── Projects ─────────────────────────────────────────────────────────────────

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

function renderProjects() {
  const container = document.getElementById('projects-content');
  if (!container) return;

  container.innerHTML = `
    <div class="tool-grid">
      ${projects.map(p => renderProjectCard(p)).join('')}
    </div>`;
}

// ── Scroll reveal (static elements only) ─────────────────────────────────────

function initReveal() {
  const els = Array.from(document.querySelectorAll('.reveal'));

  function check() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach(el => {
      if (el.classList.contains('visible')) return;
      if (el.getBoundingClientRect().top < vh - 40) el.classList.add('visible');
    });
  }

  check();
  window.addEventListener('scroll', check, { passive: true });
}

// ── Boot ──────────────────────────────────────────────────────────────────────

renderBlog();
renderProjects();
requestAnimationFrame(initReveal);
