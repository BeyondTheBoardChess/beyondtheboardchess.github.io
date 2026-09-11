#!/usr/bin/env node
/**
 * Build the static pages.
 *
 *   node build.mjs
 *
 * One layout, one nav, one page per entry in PAGES below. Adding a findings
 * page means adding an entry and a body file, and the header, the nav and the
 * footer come along on their own rather than being copied into a third file.
 *
 * Every built page is self-contained: the brand stylesheet is inlined and the
 * channel avatar goes in as a base64 data: URI, per the Beyond the Board brand
 * rules. assets/ is therefore the single stored copy of both, not something the
 * browser fetches.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)));
const read = (...p) => readFileSync(join(root, ...p), 'utf8');

/** Every page in the nav, in the order it appears. */
const NAV = [
  { href: '/', label: 'Findings' },
  { href: '/corpus/', label: 'The corpus' },
];

const PAGES = [
  {
    out: 'index.html',
    href: '/',
    sub: 'Findings',
    title: 'Beyond the Board: findings',
    desc: 'The data behind the Beyond the Board videos, and the checks that back it.',
  },
  {
    out: 'corpus/index.html',
    href: '/corpus/',
    sub: 'The corpus',
    title: 'Beyond the Board: the corpus check',
    desc: 'Whether the stored copy of the Lichess archives still matches what Lichess published, checked month by month.',
  },
];

const layout = read('src/_layout.html');
const css = read('assets/brand.css');
const avatar =
  'data:image/png;base64,' +
  readFileSync(join(root, 'assets/avatar.png')).toString('base64');

/** The source files a page is assembled from, named after the page it builds. */
const sourceName = (page) => (page.out === 'index.html' ? 'index' : dirname(page.out));

for (const page of PAGES) {
  const name = sourceName(page);
  const nav = NAV.map(({ href, label }) => {
    const current = href === page.href ? ' aria-current="page"' : '';
    return `    <a href="${href}"${current}>${label}</a>`;
  }).join('\n');

  const fields = {
    TITLE: page.title,
    DESC: page.desc,
    SUB: page.sub,
    NAV: nav,
    CSS: css,
    PAGE_CSS: read(`src/${name}.css`),
    MAIN: read(`src/${name}.body.html`),
    AVATAR: avatar,
  };

  let html = layout;
  for (const [field, value] of Object.entries(fields)) {
    // A function replacer, so a `$&` inside the base64 cannot be read as a
    // backreference and silently corrupt the avatar.
    html = html.replaceAll(`{{${field}}}`, () => value);
  }

  if (html.includes('{{')) {
    console.error(`${page.out}: a placeholder was left unfilled`);
    process.exit(1);
  }

  const out = join(root, page.out);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`${page.out}  ${(html.length / 1024).toFixed(0)}KB`);
}
