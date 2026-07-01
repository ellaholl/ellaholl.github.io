import { posts } from '../data/posts.js';

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

const container = document.getElementById('posts-list');
if (container) {
  container.innerHTML = `<div class="blog-list blog-list--full">${posts.map(renderPostCard).join('')}</div>`;
}
