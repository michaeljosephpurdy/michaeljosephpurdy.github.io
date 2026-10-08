import { esc, ymd } from './layout.mjs';

const dates = (g) => {
  const parts = [g.published && `Published <time datetime="${esc(g.published)}">${ymd(g.published)}</time>`,
    g.updated && `Updated <time datetime="${esc(g.updated)}">${ymd(g.updated)}</time>`].filter(Boolean);
  return parts.length ? `<p class="dates">${parts.join(' · ')}</p>` : '';
};

// Order: screenshots, description, devlogs, info table, itch widget + link.
export const gamePage = (g) => {
  const images = [...(g.cover && !g.screenshots?.includes(g.cover) ? [g.cover] : []), ...(g.screenshots ?? [])];
  return `
<p><a href="../../index.html">back</a></p>
<h1>${esc(g.title)}</h1>
${dates(g)}
${g.tagline ? `<p class="tagline">${esc(g.tagline)}</p>` : ''}
${images.length ? `<div class="shots">${images.map((s) => `<img src="images/${esc(s)}" alt="" loading="lazy">`).join('')}</div>` : ''}
<section>${g.description_html ?? ''}</section>
${g.devlogData.length ? `<h2>Devlogs</h2>
<ul>${g.devlogData.map((d) =>
  `<li><a href="devlog/${esc(d.slug)}/index.html">${esc(d.title)}</a> <time datetime="${esc(d.date)}">${ymd(d.date)}</time></li>`).join('')}</ul>` : ''}
${Object.keys(g.info ?? {}).length ? `<table class="info"><tbody>${Object.entries(g.info)
  .map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(Array.isArray(v) ? v.join(', ') : v)}</td></tr>`).join('')}</tbody></table>` : ''}
${g.id ? `<iframe class="itch" frameborder="0" src="https://itch.io/embed/${esc(g.id)}" width="552" height="167"></iframe>` : ''}
<p><a href="${esc(g.url)}">View on itch.io</a></p>`;
};
