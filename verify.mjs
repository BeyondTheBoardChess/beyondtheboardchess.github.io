#!/usr/bin/env node
/**
 * Prove three things about the built pages, so none has to be taken on trust.
 *
 *   node verify.mjs <path to the lichess-corpus repo>
 *
 * 1. Every figure printed on the corpus page appears verbatim in the fidelity
 *    report, read out of the corpus repo at the tag the page itself cites.
 * 2. Neither page carries a corpus-wide total or a month count, because the
 *    backfill is still running and any figure of that shape goes stale.
 * 3. The front page is an index, so it carries no digit at all.
 *
 * It reads the visible text of the built pages, not the source, so the inlined
 * stylesheet and the base64 avatar cannot pollute any of the three.
 *
 * The report is extracted here rather than passed in, so "read at the cited
 * tag" is enforced instead of assumed: the tag comes off the page, the git
 * command reads that tag, and a page citing a tag that does not exist fails.
 */
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)));
const corpusRepo = process.argv[2];
if (!corpusRepo) {
  console.error('usage: node verify.mjs <path to the lichess-corpus repo>');
  process.exit(2);
}

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
const git = (...args) => execFileSync('git', ['-C', corpusRepo, ...args], { encoding: 'utf8' });

/* ---------- 0. The report, read at the tag the page cites ---------- */

console.log('\n0. The report is read at the tag the corpus page cites\n');

const REPORT = 'docs/CORPUS-FIDELITY.md';
const cited = pages['corpus/index.html'].match(/Tag\s+(\d+\.\d+\.\d+)/);
if (!cited) {
  console.log('  FAIL  the corpus page does not cite a tag');
  process.exit(1);
}
const tag = cited[1];

let report;
try {
  const sha = git('rev-parse', `${tag}^{commit}`).trim();
  report = git('show', `${tag}:${REPORT}`);
  pass(`the page cites tag ${tag}, which resolves to commit ${sha.slice(0, 12)}`);
  pass(`${REPORT} read at that tag, ${report.length} bytes`);
} catch (err) {
  console.log(`  FAIL  cannot read ${REPORT} at tag ${tag}: ${err.message.split('\n')[0]}`);
  process.exit(1);
}

/* ---------- 1. Every figure on the corpus page is in the report ---------- */

console.log('\n1. Every figure on the corpus page appears verbatim in the report\n');

// Timestamps and months are matched before bare numbers, or a date splits into
// its parts and each part is checked as though it were a figure of its own.
const FIGURE = /\d{4}-\d{2}-\d{2}T[\d:]+Z|\d{4}-\d{2}|\+?\d{1,3}(?:,\d{3})*(?:\.\d+)*%?/g;

/**
 * A figure must appear in the report as a figure, not as a fragment of a longer
 * one. A bare substring test would pass "121,332" inside "1,121,332", and would
 * pass "0" against any number at all.
 */
function appearsAsAFigure(figure, text = report) {
  const escaped = figure.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(?<![\\d,.])${escaped}(?![\\d,])`).test(text);
}

// This matcher is the only thing standing behind "every figure is copied from
// the report", so it is checked against a fixture before it is trusted. A bare
// substring test passes all three of the negative cases below.
const FIXTURE = 'published 121,332, archive 121,332 (difference +0), 1,121,332 elsewhere';
for (const [figure, want, why] of [
  ['121,332', true, 'a whole figure still matches'],
  ['21,332', false, 'a tail fragment of 121,332 is rejected'],
  ['1,121', false, 'a head fragment of 1,121,332 is rejected'],
  ['999,999', false, 'a figure that is simply absent is rejected'],
]) {
  const got = appearsAsAFigure(figure, FIXTURE);
  if (got === want) pass(`matcher: ${why}`);
  else fail(`the figure matcher is broken: ${JSON.stringify(figure)} gave ${got}, wanted ${want}`);
}

const figures = [...new Set(pages['corpus/index.html'].match(FIGURE) || [])];
const CITED_TAG_IS_NOT_A_REPORT_FIGURE = tag;

for (const figure of figures) {
  if (figure === CITED_TAG_IS_NOT_A_REPORT_FIGURE) {
    pass(`${figure.padEnd(22)} the git tag, checked against the repo in step 0`);
  } else if (appearsAsAFigure(figure)) {
    pass(`${figure.padEnd(22)} found in the report, whole`);
  } else {
    fail(`${figure} is printed on the page and is NOT in the report as a figure`);
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
    // A count of months always lands on the plural, and up to two words may sit
    // between the number and the noun: "the four sampled months" got past an
    // earlier version of this pattern and onto the page. Requiring the plural
    // is what keeps "one file per month", a rate rather than a count, out.
    re: /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|all|every)\s+(?:of\s+the\s+)?(?:\w+\s+){0,2}months\b/gi,
    what: 'a word counting months',
  },
  {
    // The universal, which the plural rule above cannot see in the singular.
    re: /\b(?:all|every)\s+months?\b/gi,
    what: 'a claim over months as a whole',
  },
];

for (const [name, text] of Object.entries(pages)) {
  for (const { re, what } of banned) {
    const hits = text.match(re);
    if (hits) fail(`${name}: ${what}, found ${JSON.stringify(hits)}`);
    else pass(`${name.padEnd(18)} no ${what}`);
  }
}

/* ---------- 3. The front page carries no figures at all ---------- */

console.log('\n3. The front page is an index and carries no figures\n');

const digits = pages['index.html'].match(/\d/g);
if (digits) fail(`index.html has digits in its visible text: ${JSON.stringify(digits)}`);
else pass('index.html  no digit appears anywhere in its visible text');

console.log(failed ? `\n${failed} check(s) failed\n` : '\nall checks passed\n');
process.exit(failed ? 1 : 0);
