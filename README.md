# beyondtheboardchess.github.io

The public findings site for the YouTube channel **Beyond the Board**. It serves at the root of
`https://beyondtheboardchess.github.io`, so a video's page sits at
`/findings/<project-slug>` and the standing corpus page at `/corpus/`.

The repo name is forced by GitHub, not chosen: an account's own site has to live in a repo named
`<account>.github.io`.

## What is here

| Path | What it is |
| --- | --- |
| `index.html` | The front page. An index of published findings pages. Carries no figures. |
| `corpus/index.html` | The standing corpus page: whether the stored copy of the Lichess archives matches what Lichess published. |
| `src/` | The page sources. Edit these, never the built files. |
| `assets/` | The brand stylesheet, the channel avatar, and the vector fallback used as the favicon. |
| `build.mjs` | Inlines the stylesheet and the avatar into each source page and writes the built pages. |

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

To look at it locally, the Browser pane's `site` configuration in `.claude/launch.json` serves the
folder on port 8099. Links are root-absolute (`/corpus/`), so opening a built file over `file://`
will render the page but not resolve its links.

## Checking

```
node verify.mjs ../lichess-corpus/docs/CORPUS-FIDELITY.md
```

Point it at the report the corpus page cites, read out of the corpus repo at the tag named on the
page rather than at whatever the working tree holds:

```
git -C ../lichess-corpus show 0.1.0:docs/CORPUS-FIDELITY.md > /tmp/report.md
```

It reads the visible text of the built pages, so the inlined stylesheet and the base64 avatar
cannot pollute either check, and it proves three things: every figure on the corpus page appears
verbatim in the report, neither page carries a corpus-wide total or a month count, and the front
page carries no digits at all. Run it after every build.

## The rule this site is built around

**No corpus-wide total and no month count appears anywhere on these pages.** The backfill is still
running, so any figure of that shape is wrong the moment the next month lands. Per-month figures
are safe and are what the corpus page carries. Every figure on that page is copied from
`docs/CORPUS-FIDELITY.md` in the `lichess-corpus` repository at tag `0.1.0`, and none of it is
recalculated here.
