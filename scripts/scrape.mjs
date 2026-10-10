// Scrapes https://purdy.itch.io/ -> data/games/<slug>/{game.json,devlogs/*.json,images/*}
// itch.io is the source of truth: every run rewrites data/games from scratch.
// Comments are never scraped.
import { writeFile, mkdir, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join, extname } from 'node:path';
import * as cheerio from 'cheerio';

const PROFILE = 'https://purdy.itch.io/';
const OUT = 'data/games';
const DELAY_MS = 2000; // pause before every request; 429s are handled by retry/backoff in get()
const ONLY = process.argv.find((a) => a.startsWith('--only='))?.slice(7);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const sha = (s) => createHash('sha1').update(s).digest('hex').slice(0, 12);

// ---- polite fetch ---------------------------------------------------------
const MAX_ATTEMPTS = 5;
const BACKOFF_MS = 10_000; // doubles each retry: 10s, 20s, 40s, 80s

// Seconds or HTTP-date -> ms, or null if the header is absent/unparseable.
function retryAfterMs(header) {
  if (!header) return null;
  const secs = Number(header);
  if (Number.isFinite(secs)) return secs * 1000;
  const date = Date.parse(header);
  return Number.isNaN(date) ? null : Math.max(0, date - Date.now());
}

async function get(url, { binary = false } = {}) {
  for (let attempt = 1; ; attempt++) {
    await sleep(DELAY_MS);
    let wait = null;
    let reason;
    try {
      const res = await fetch(url, { headers: {
        // use same user agent as Safari making a request
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Safari/605.1.15',
      } });
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        return binary ? buf : buf.toString('utf8');
      }
      // Only rate limiting and server errors are worth retrying; 404 and friends are final.
      if (res.status !== 429 && res.status < 500) throw new Error(`${res.status} ${url}`);
      reason = String(res.status);
      wait = retryAfterMs(res.headers.get('retry-after'));
    } catch (err) {
      if (/^\d{3} /.test(err.message)) throw err;
      reason = err.message; // network error: retry too
    }
    if (attempt >= MAX_ATTEMPTS) throw new Error(`${reason} ${url} (gave up after ${MAX_ATTEMPTS} attempts)`);
    wait ??= BACKOFF_MS * 2 ** (attempt - 1);
    console.warn(`  ! ${reason} for ${url}; retry ${attempt}/${MAX_ATTEMPTS - 1} in ${Math.round(wait / 1000)}s`);
    await sleep(wait);
  }
}
const load = async (url) => cheerio.load(await get(url));

// ---- asset + link rewriting -----------------------------------------------
// `ownSlugs` lets us point links at games/devlogs we mirror; `site:` is resolved by the build.
function makeRewriter(imagesDir, ownSlugs, devlogSlugById) {
  const downloaded = new Map();

  async function localImage(src) {
    if (downloaded.has(src)) return downloaded.get(src);
    let name = null;
    try {
      const buf = await get(src, { binary: true });
      const ext = (extname(new URL(src).pathname) || '.png').toLowerCase();
      name = `${sha(src)}${ext}`;
      await mkdir(imagesDir, { recursive: true });
      await writeFile(join(imagesDir, name), buf);
    } catch (err) {
      console.warn(`  ! could not download ${src}: ${err.message}`);
    }
    downloaded.set(src, name);
    return name;
  }

  function rewriteHref(href) {
    let u;
    try { u = new URL(href, PROFILE); } catch { return href; }
    if (u.hostname !== 'purdy.itch.io') return href;
    const [slug, kind, id] = u.pathname.split('/').filter(Boolean);
    if (!ownSlugs.has(slug)) return href;
    if (!kind) return `site:games/${slug}/index.html`;
    if (kind === 'devlog' && devlogSlugById.get(id)) return `site:games/${slug}/devlog/${devlogSlugById.get(id)}/index.html`;
    return href;
  }

  // `imgPrefix` is how the output HTML reaches the images dir from the page it lives on.
  return async function rewrite(html, imgPrefix) {
    const $ = cheerio.load(`<div id="r">${html ?? ''}</div>`, null, false);
    for (const el of $('img').toArray()) {
      const src = $(el).attr('src') || $(el).attr('data-src');
      if (!src || src.startsWith('data:')) continue;
      const name = await localImage(new URL(src, PROFILE).href);
      if (name) { $(el).attr('src', `${imgPrefix}${name}`).removeAttr('data-src').removeAttr('srcset'); }
    }
    for (const el of $('iframe[src^="//"]').toArray()) $(el).attr('src', `https:${$(el).attr('src')}`);
    for (const el of $('a[href]').toArray()) {
      const href = $(el).attr('href');
      if (/img\.itch\.zone/.test(href)) {
        const name = await localImage(href);
        if (name) { $(el).attr('href', `${imgPrefix}${name}`); continue; }
      }
      $(el).attr('href', rewriteHref(href));
    }
    return $('#r').html().trim();
  };
}

// ---- scraping -------------------------------------------------------------
async function scrapeProfile() {
  const $ = await load(PROFILE);
  // The profile also lists games the user merely supports/owns; keep only their own (author = purdy.itch.io).
  const own = $('.game_cell').toArray().filter((el) => new URL($(el).find('.game_author a').attr('href')).hostname === 'purdy.itch.io');
  return own.map((el, order) => {
    const c = $(el);
    const url = c.find('.game_title a').attr('href');
    return {
      url,
      order, // position on the itch profile; used to sort games that have no dates
      slug: new URL(url).pathname.split('/').filter(Boolean)[0],
      title: c.find('.game_title').text().trim(),
      thumb: c.find('img').attr('data-lazy_src') || c.find('img').attr('src') || null,
      genre: c.find('.game_genre').text().trim() || null,
    };
  });
}

async function scrapeDevlogIndex(gameUrl) {
  // The devlog RSS feed gives reliable ISO dates; the HTML pages only show relative ones.
  let xml;
  try { xml = await get(`${gameUrl}/devlog.rss`); } catch { return []; }
  const $ = cheerio.load(xml, { xmlMode: true });
  return $('item').toArray().map((el) => ({
    url: $(el).find('link').text().trim(),
    title: $(el).find('title').text().trim(),
    date: new Date($(el).find('pubDate').text()).toISOString().slice(0, 10),
  }));
}

async function main() {
  const profile = await scrapeProfile();
  const games = ONLY ? profile.filter((g) => g.slug === ONLY) : profile;
  console.log(`Found ${profile.length} games on profile (processing ${games.length}).`);
  const ownSlugs = new Set(profile.map((g) => g.slug));

  // Never wipe data/ (and deploy an empty site) because itch returned a block page or changed layout.
  if (!profile.length) throw new Error('No games found on the itch profile; refusing to overwrite data/.');

  if (!ONLY) await rm(OUT, { recursive: true, force: true });

  for (const g of games) {
    console.log(`- ${g.title}`);
    const dir = join(OUT, g.slug);
    await rm(dir, { recursive: true, force: true });
    await mkdir(join(dir, 'devlogs'), { recursive: true });
    const imagesDir = join(dir, 'images');

    const $ = await load(g.url);
    const html = $.html();
    const id = (html.match(/"id":(\d+)/) || [])[1] ?? null;
    const coverUrl = $('meta[property="og:image"]').attr('content') || g.thumb;

    const info = {};
    const dates = {};
    $('.game_info_panel_widget tr').each((_, tr) => {
      const cells = $(tr).find('td').toArray();
      const k = $(cells[0]).text().trim();
      const abbr = $(cells[1]).find('abbr').attr('title');
      if (abbr) {
        // "28 September 2026 @ 03:33 UTC" -> ISO string; relative "8 days ago" text is dropped
        const d = new Date(abbr.replace(' @ ', ' '));
        if (!isNaN(d)) dates[k.toLowerCase()] = d.toISOString();
        return;
      }
      const v = $(cells[1]).text().replace(/\s+/g, ' ').trim();
      if (!k || !v) return;
      // Tags, Platforms and Made with are lists; prefer the individual links so a value containing a comma stays intact.
      if (k === 'Tags' || k === 'Platforms' || k === 'Made with') {
        const links = $(cells[1]).find('a').toArray().map((a) => $(a).text().trim()).filter(Boolean);
        info[k] = links.length ? links : v.split(',').map((t) => t.trim()).filter(Boolean);
      } else info[k] = v;
    });

    const devlogIndex = await scrapeDevlogIndex(g.url);
    const devlogSlugById = new Map(devlogIndex.map((d) => {
      const [, , id, slug] = new URL(d.url).pathname.split('/').filter(Boolean); // game/devlog/<id>/<slug>
      d.id = id; d.slug = slug ?? id;
      return [id, d.slug];
    }));

    const rewrite = makeRewriter(imagesDir, ownSlugs, devlogSlugById);

    const cover = coverUrl ? await rewrite(`<img src="${coverUrl}">`, '').then((h) => cheerio.load(h)('img').attr('src')) : null;
    const screenshots = [];
    for (const href of $('.screenshot_list a').toArray().map((a) => $(a).attr('href'))) {
      const name = await rewrite(`<img src="${href}">`, '').then((h) => cheerio.load(h)('img').attr('src'));
      if (name && !screenshots.includes(name)) screenshots.push(name);
    }

    const descHtml = $('.formatted_description').first().html();
    const game = {
      slug: g.slug,
      id,
      title: $('h1.game_title').text().trim() || g.title,
      url: g.url,
      tagline: $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || null,
      genre: g.genre,
      order: g.order,
      updated: null, // filled in below, once devlog dates are known
      published: dates.published ?? null,
      cover,
      screenshots,
      description_html: descHtml ? await rewrite(descHtml, 'images/') : null,
      info,
      devlogs: [],
    };

    for (const d of devlogIndex) {
      const dp = await load(d.url);
      const body = dp('.post_body').first().html();
      await writeFile(join(dir, 'devlogs', `${d.slug}.json`), JSON.stringify({
        slug: d.slug,
        id: d.id,
        title: dp('h1').first().text().trim() || d.title,
        date: d.date,
        url: d.url,
        // devlog pages live two levels deeper than the game page, hence ../../
        body_html: await rewrite(body, '../../images/'),
      }, null, 2) + '\n');
      game.devlogs.push(d.slug);
      console.log(`    devlog: ${d.title}`);
    }

    game.updated = dates.updated ?? dates.published ?? (devlogIndex.length ? devlogIndex.map((d) => d.date).sort().at(-1) : null);
    await writeFile(join(dir, 'game.json'), JSON.stringify(game, null, 2) + '\n');
  }
  console.log('Done.');
}

main().catch((e) => { console.error(e); process.exit(1); });
