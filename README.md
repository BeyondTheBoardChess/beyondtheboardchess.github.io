# beyondtheboardchess.github.io

The public findings site for the YouTube channel **Beyond the Board**. It serves at the root of
`https://beyondtheboardchess.github.io`, so a video's page sits at `/findings/<project-slug>` and
the standing corpus page at `/corpus/`.

The repo name is forced by GitHub, not chosen: an account's own site has to live in a repo named
`<account>.github.io`.

## What is here

| Path | What it is |
| --- | --- |
| `index.html` | The front page. An index of published findings pages. Carries no figures. |
| `corpus/index.html` | The standing corpus page: whether the stored copy of the Lichess archives matches what Lichess published. |
| `src/_layout.html` | The shared shell: head, header lockup, nav, footer. Every page is this file with its fields filled in. |
| `src/<name>.body.html` | One page's sections. This is the only file that differs between pages. |
| `src/<name>.css` | That page's own rules, on top of the brand stylesheet. |
| `assets/` | The brand stylesheet, the channel avatar, and the vector fallback used as the favicon. |
| `build.mjs` | Assembles the layout and each body into the built pages. Holds the nav and the page list. |
| `verify.mjs` | Proves the built pages carry only figures the fidelity report supports, and none the backfill can make stale. |

Built pages are generated. Edit `src/` and rebuild; never edit `index.html` or `corpus/index.html`
by hand.

## Building

```
node build.mjs
```

Every built page is self-contained. The stylesheet is inlined and the avatar goes in as a base64
`data:` URI, per the channel's brand rules, so `assets/` exists to be the single stored copy of
both rather than to be fetched by the browser. The one external request a page makes is to Google
Fonts.

Run the build after any edit under `src/` and commit the built pages alongside the source, because
GitHub Pages serves what is committed and runs nothing.

### Adding a page

Add an entry to `PAGES` in `build.mjs`, write `src/<name>.body.html` and `src/<name>.css`, and add
a line to `NAV` if it belongs in the header. The header, nav and footer come from the layout, so
they are never copied into a new file.

To look at it locally, the Browser pane's `site` configuration in `.claude/launch.json` serves the
folder on port 8099. Links are root-absolute (`/corpus/`), so opening a built file over `file://`
will render the page but not resolve its links.

## Checking

```
node verify.mjs ../lichess-corpus
```

Point it at a clone of the corpus repo. It reads the tag off the corpus page itself and extracts
`docs/CORPUS-FIDELITY.md` at that tag, so "read at the cited tag" is enforced rather than assumed:
a page citing a tag that does not exist fails here.

It works on the visible text of the built pages, so the inlined stylesheet and the base64 avatar
cannot pollute any check, and it proves four things:

- its own figure matcher rejects fragments, tested against a fixture before anything else runs;
- every figure on the corpus page appears in the report as a whole figure;
- neither page carries a corpus-wide total or a month count;
- the front page carries no digit at all.

Run it after every build.

## The rule this site is built around

**No corpus-wide total and no month count appears anywhere on these pages.** The backfill is still
running, so any figure of that shape is wrong the moment the next month lands. Per-month figures
are safe and are what the corpus page carries. Every figure on that page is copied from
`docs/CORPUS-FIDELITY.md` in the `lichess-corpus` repository at the tag the page names, and none of
it is recalculated here.

A second rule follows from the first: **the page claims only what the report checked.** The counts
were verified in full on every month named, but the byte-for-byte comparison ran on all of 2013-01
and on a sample of each larger month. So the page says "every game checked", never "every game".
