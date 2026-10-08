import { esc, ymd } from './layout.mjs';

export const devlogPage = (g, d) => `
<p><a href="../../index.html">back</a></p>
<h1>${esc(d.title)}</h1>
<p><time datetime="${esc(d.date)}">${ymd(d.date)}</time> · <a href="${esc(d.url)}">original on itch.io</a></p>
<article>${d.body_html}</article>`;
