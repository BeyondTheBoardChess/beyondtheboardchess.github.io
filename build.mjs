#!/usr/bin/env node
/**
 * Build the static pages.
 *
 *   node build.mjs
 *
 * Every page is self-contained: the brand stylesheet is inlined and the channel
 * avatar goes in as a base64 data: URI, per the Beyond the Board brand rules.
 * Sources live in src/, so the stylesheet and the avatar are stored once here
 * and pasted in at build time rather than copied by hand into every page.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)));
const css = readFileSync(join(root, 'assets/rainy-brand.css'), 'utf8');
const avatar =
  'data:image/png;base64,' +
  readFileSync(join(root, 'assets/avatar.png')).toString('base64');

const pages = [
  { src: 'src/index.html', out: 'index.html' },
  { src: 'src/corpus.html', out: 'corpus/index.html' },
];

for (const page of pages) {
  const html = readFileSync(join(root, page.src), 'utf8')
    .replace('{{CSS}}', () => css)
    .replace(/\{\{AVATAR\}\}/g, () => avatar);

  if (html.includes('{{')) {
    console.error(`${page.src}: a placeholder was left unfilled`);
    process.exit(1);
  }

  const out = join(root, page.out);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`${page.out}  ${(html.length / 1024).toFixed(0)}KB`);
}
