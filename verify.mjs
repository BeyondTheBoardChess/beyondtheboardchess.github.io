#!/usr/bin/env node
/**
 * Prove two things about the built pages, so neither has to be taken on trust.
 *
 *   node verify.mjs <path to CORPUS-FIDELITY.md at the cited tag>
 *
 * 1. Every figure printed on the corpus page appears verbatim in the report.
 * 2. Neither page carries a corpus-wide total or a month count, because the
 *    backfill is still running and any figure of that shape goes stale.
 *
 * It reads the visible text of the built pages, not the source, so the inlined
 * stylesheet and the base64 avatar cannot pollute either check.
 */
import { readFileSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)));
const reportPath = process.argv[2];
if (!reportPath) {
  console.error('usage: node verify.mjs <path to CORPUS-FIDELITY.md>');
  process.exit(2);
}
const report = readFileSync(reportPath, 'utf8');

/** The rendered text of a built page: no markup, no stylesheet, no data URI. */
function visibleText(file) {
  return readFileSync(join(root, file), 'utf8')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const pages = {
  'index.html': visibleText('index.html'),
  'corpus/index.html': visibleText('corpus/index.html'),
};

let failed = 0;
const fail = (msg) => { console.log(`  FAIL  ${msg}`); failed++; };
const pass = (msg) => console.log(`  ok    ${msg}`);

/* ---------- 1. Every figure on the corpus page is in the report ---------- */

// Figures the report does not contain, and why that is correct.
const notFromReport = new Map([
  ['0.1.0', 'the git tag the report was read at, proved by `git tag --contains`'],
]);

console.log('\n1. Every figure on the corpus page appears verbatim in the report\n');

// Timestamps and months are matched before bare numbers, or a date splits into
// its parts and each part is checked as though it were a figure of its own.
const FIGURE = /\d{4}-\d{2}-\d{2}T[\d:]+Z|\d{4}-\d{2}|\+?\d{1,3}(?:,\d{3})*(?:\.\d+)*%?/g;

const figures = [...new Set(pages['corpus/index.html'].match(FIGURE) || [])];

for (const figure of figures) {
  if (notFromReport.has(figure)) {
    pass(`${figure.padEnd(22)} not a report figure: ${notFromReport.get(figure)}`);
  } else if (report.includes(figure)) {
    pass(`${figure.padEnd(22)} found in the report`);
  } else {
    fail(`${figure} is printed on the page and is NOT in the report`);
  }
}

/* ---------- 2. No corpus-wide total and no month count ---------- */

console.log('\n2. No corpus-wide total and no month count, on either page\n');

const banned = [
  { re: /300[,.]?716[,.]?482/g, what: 'the corpus-wide game total' },
  { re: /\b163\b/g, what: 'the count of months Lichess publishes' },
  { re: /\b158\b/g, what: 'the count of months still to be stored' },
  { re: /\b\d[\d,]*\s+months?\b/gi, what: 'a digit counting months' },
  {
    // The word after "months" is captured too, so a quantifier that the
    // sentence goes on to scope reads differently from one that does not.
    re: /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|all|every)\s+(?:of\s+the\s+)?months?(?:\s+\w+)?/gi,
    what: 'a word counting months',
  },
];

// A quantifier that is scoped by the page cannot go stale, so it is allowed by
// name and the reason is printed, rather than being silently excluded from the
// pattern. Anything not listed here is a failure.
const scoped = new Map([
  ['Every month checked', 'scoped by "checked", and the months are named on the page'],
]);

for (const [name, text] of Object.entries(pages)) {
  for (const { re, what } of banned) {
    const hits = (text.match(re) || []).filter((hit) => !scoped.has(hit));
    const allowed = (text.match(re) || []).filter((hit) => scoped.has(hit));
    if (hits.length) fail(`${name}: ${what}, found ${JSON.stringify(hits)}`);
    else pass(`${name.padEnd(18)} no ${what}`);
    for (const hit of allowed) {
      pass(`${name.padEnd(18)} "${hit}" allowed: ${scoped.get(hit)}`);
    }
  }
}

/* ---------- 3. The front page carries no figures at all ---------- */

console.log('\n3. The front page is an index and carries no figures\n');

const digits = pages['index.html'].match(/\d/g);
if (digits) fail(`index.html has digits in its visible text: ${JSON.stringify(digits)}`);
else pass('index.html  no digit appears anywhere in its visible text');

console.log(failed ? `\n${failed} check(s) failed\n` : '\nall checks passed\n');
process.exit(failed ? 1 : 0);
