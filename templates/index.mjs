import { esc } from './layout.mjs';

export const indexPage = (games) => `
<h1>mikepurdy.dev</h1>
<ul class="grid">
${games.map((g) => `  <li>
    <a href="games/${esc(g.slug)}/index.html">
      ${g.cover ? `<img src="games/${esc(g.slug)}/images/${esc(g.cover)}" alt="" loading="lazy">` : '<div class="noimg"></div>'}
      <span>${esc(g.title)}</span>
    </a>
  </li>`).join('\n')}
</ul>`;
