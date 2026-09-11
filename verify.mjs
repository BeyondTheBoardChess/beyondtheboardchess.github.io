#!/usr/bin/env node
/**
 * Prove four things about the built pages, so none has to be taken on trust.
 *
 *   node verify.mjs <path to the lichess-corpus repo>
 *
 * 1. Every figure printed on the corpus page appears verbatim in the fidelity
 *    report, read out of the corpus repo at the tag the page itself cites.
 * 2. No built page carries a corpus-wide total or a month count, because the
 *    backfill is still running and any figure of that shape goes stale.
 * 3. The front page's own prose carries no digit at all. The text of a link
 *    into a findings page is exempt: the front page is an index of published
 *    videos, and a video's title is allowed to have a number in it. Check 2
 *    still reads that link text, so the rule this site exists for is not what
 *    the exemption lets through.
 * 4. Both matchers those checks rest on are proved against a fixture before
 *    anything is trusted to them.
 *
 * It reads the visible text of the built pages, not the source, so the inlined
 * stylesheet and the base64 avatar cannot pollute any of the checks.
 *
 * The report is extracted here rather than passed in, so "read at the cited
 * tag" is enforced instead of assumed: the tag comes off the page, the git
 * command reads that tag, and a page citing a tag that does not exist fails.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)));
const corpusRepo = process.argv[2];
if (!corpusRepo) {
  console.error('usage: node verify.mjs <path to the lichess-corpus repo>');
  process.exit(2);
}

/** The rendered text of a page: no markup, no stylesheet, no data URI. */
function renderedText(html) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const pageHtml = (file) => readFileSync(join(root, file), 'utf8');
const visibleText = (file) => renderedText(pageHtml(file));

/**
 * Every built page: an index.html anywhere in the repo, source and assets
 * aside. Found rather than listed, so a findings page added tomorrow is read
 * by check 2 without anyone having remembered to name it here.
 */
function builtPages(dir = '', found = []) {
  const skip = new Set(['src', 'assets', 'node_modules']);
  for (const entry of readdirSync(join(root, dir), { withFileTypes: true })) {
    if (entry.name.startsWith('.') || skip.has(entry.name)) continue;
    const rel = dir ? `${dir}/${entry.name}` : entry.name;
    if (entry.isDirectory()) builtPages(rel, found);
    else if (entry.name === 'index.html') found.push(rel);
  }
  return found;
}

const pages = Object.fromEntries(builtPages().map((f) => [f, visibleText(f)]));
for (const required of ['index.html', 'corpus/index.html']) {
  if (!pages[required]) {
    console.error(`${required} is missing: run node build.mjs first`);
    process.exit(2);
  }
}

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

console.log('\n2. No corpus-wide total and no month count, on any built page\n');

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

// This reads the whole of every page, the front page's findings entries
// included. Check 3 lets a video's title carry a digit; it does not let it
// carry one of these.
for (const [name, text] of Object.entries(pages)) {
  for (const { re, what } of banned) {
    const hits = text.match(re);
    if (hits) fail(`${name}: ${what}, found ${JSON.stringify(hits)}`);
    else pass(`${name.padEnd(18)} no ${what}`);
  }
}

/* ---------- 3. The front page's own prose carries no figures ---------- */

console.log("\n3. The front page is an index, and its own prose carries no figures\n");

/**
 * A link into a findings page, and everything inside it. Anchors cannot nest,
 * so the first closing tag is this link's own and the lazy match is exact.
 */
const FINDINGS_LINK = /<a\b[^>]*\bhref="\/findings\/[^"]*"[^>]*>[\s\S]*?<\/a>/gi;

/** A page's text with its findings entries taken out: the page's own words. */
const proseOf = (html) => renderedText(html.replace(FINDINGS_LINK, ' '));

// The exemption is only as good as the thing that draws its boundary, so that
// is proved against a fixture too, exactly as the figure matcher is above. The
// fixture is an entry of the shape the index will hold: a video title with a
// rating band in it, wrapped in the card that links to its page.
const INDEX_FIXTURE = `
  <p class="rd-lede">The index says nothing with a digit in it.</p>
  <a class="rd-card rd-entry" href="/findings/best-opening-by-rating-band/">
    <p class="rd-card-title">The best opening at 1600, and why it is not the best at 2200</p>
    <p class="rd-card-sub">Across 5 rating bands</p>
  </a>
  <p>then the page carries on afterwards</p>
  <a class="rd-card rd-entry" href="/corpus/">The corpus, checked back to 2013</a>
`;
const FIXTURE_PROSE = proseOf(INDEX_FIXTURE);
for (const [needle, want, why] of [
  ['1600', false, 'a number in a findings link is exempt'],
  ['5 rating bands', false, 'the whole entry is exempt, not only its title'],
  ['carries on afterwards', true, 'the prose after an entry survives: the match is not greedy'],
  ['nothing with a digit', true, 'the prose before an entry survives'],
  ['2013', true, 'a link that is not a findings link is still read as prose'],
]) {
  const got = FIXTURE_PROSE.includes(needle);
  if (got === want) pass(`exemption: ${why}`);
  else fail(`the findings-entry matcher is broken: ${JSON.stringify(needle)} gave ${got}, wanted ${want}`);
}

const indexHtml = pageHtml('index.html');
const entries = (indexHtml.match(FINDINGS_LINK) || []).length;
pass(`index.html  ${entries} findings entries, exempt from the digit rule and read by check 2`);

const digits = proseOf(indexHtml).match(/\d/g);
if (digits) fail(`index.html has digits in its own prose: ${JSON.stringify(digits)}`);
else pass('index.html  no digit appears outside a findings entry');

console.log(failed ? `\n${failed} check(s) failed\n` : '\nall checks passed\n');
process.exit(failed ? 1 : 0);
