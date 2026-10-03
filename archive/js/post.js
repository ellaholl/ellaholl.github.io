import { posts } from '../data/posts.js';

const slug = new URLSearchParams(window.location.search).get('slug');
const post = posts.find(p => p.slug === slug);

if (!post) {
  document.getElementById('post-content').innerHTML =
    `<p class="not-found">Post not found. <a href="/">← Back home</a></p>`;
} else {
  document.title = `${post.title} — Ella Holl`;

  document.getElementById('post-content').innerHTML = `
    <div class="post-header reveal">
      <a href="/" class="back-link">← Back to blog</a>
      <span class="bf-tag" style="margin-top:1.5rem;">${post.tag || post.category}</span>
      <h1 class="post-title">${post.title}</h1>
      <div class="post-meta">
        <span class="bpost-date">${post.date}</span>
        ${post.stats ? post.stats.map(s =>
          `<span class="post-stat"><strong>${s.num}</strong> ${s.label}</span>`
        ).join('') : ''}
      </div>
    </div>
    <div class="post-body reveal rd1">
      ${post.content}
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
