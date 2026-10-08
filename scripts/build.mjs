// Reads data/games/**, renders templates/, writes dist/. No dependencies.
import { readFile, readdir, writeFile, mkdir, cp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { layout } from '../templates/layout.mjs';
import { indexPage } from '../templates/index.mjs';
import { gamePage } from '../templates/game.mjs';
import { devlogPage } from '../templates/devlog.mjs';

const DATA = 'data/games';
const DIST = 'dist';

const readJson = async (p) => JSON.parse(await readFile(p, 'utf8'));
const write = async (path, html) => {
  await mkdir(dirname(join(DIST, path)), { recursive: true });
  await writeFile(join(DIST, path), html);
};

if (!existsSync(DATA)) {
  console.error(`${DATA}/ not found. It is not committed; run "npm run scrape" first.`);
  process.exit(1);
}

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });
if (existsSync('static')) await cp('static', DIST, { recursive: true });

const games = [];
for (const slug of await readdir(DATA)) {
  const dir = join(DATA, slug);
  const game = await readJson(join(dir, 'game.json'));
  game.devlogData = [];
  for (const id of game.devlogs ?? []) {
    game.devlogData.push(await readJson(join(dir, 'devlogs', `${id}.json`)));
  }
  if (existsSync(join(dir, 'images'))) {
    await cp(join(dir, 'images'), join(DIST, 'games', slug, 'images'), { recursive: true });
  }
  games.push(game);
}
// Most recently updated first. Undated games keep their itch profile order, after the dated ones.
games.sort((a, b) => (b.updated ?? '').localeCompare(a.updated ?? '') || a.order - b.order);
for (const g of games) g.devlogData.sort((a, b) => b.date.localeCompare(a.date));

await write('index.html', layout({ title: 'Games', root: '', body: indexPage(games) }));
for (const g of games) {
  await write(`games/${g.slug}/index.html`,
    layout({ title: g.title, root: '../../', body: gamePage(g) }));
  for (const d of g.devlogData) {
    await write(`games/${g.slug}/devlog/${d.slug}/index.html`,
      layout({ title: `${d.title} – ${g.title}`, root: '../../../../', body: devlogPage(g, d) }));
  }
}
console.log(`Built ${games.length} game(s) into ${DIST}/`);
