# How the data is checked

Lichess publishes every game played on it. I keep a copy. This page asks one question: does my
copy still match what Lichess published?

**Everything matched.** No game came back different.

## The check

Three counts have to agree for each month: Lichess's published number, the games inside the file I
downloaded, and the games I have saved. They agree on every month below.

Then the games themselves. 2013-01 is small enough to check whole, so every game in it was
compared letter by letter against the original. The bigger months got 10,000 games each, picked at
random and compared the same way. Nothing Lichess records was dropped, nothing it left blank was
filled in with a guess, and the few numbers I work out myself, like how long a game lasted, were
worked out again from the moves and matched every time.

## Check it yourself

The files are public, one per month, at <https://database.lichess.org/standard/>, and the counts
are Lichess's own, at <https://database.lichess.org/standard/counts.txt>. Every file has a
fingerprint: a code that comes out completely different if one character of the file changes.
Download a month and compare it to the list below.

## What this doesn't cover

It says my copy is undamaged. It doesn't say a number in a video is right — that gets checked per
video, against the games that video used. It covers the months below and no others, and a sampled
month speaks only for its sample. What I have is the rated standard games Lichess publishes, not
every game played there and not a live connection to the site.

## Month by month

| Month | Games Lichess published | Games I have | Difference | How many were checked | How many were wrong |
| --- | ---: | ---: | ---: | --- | ---: |
| 2013-01 | 121,332 | 121,332 | 0 | all 121,332 | 0 |
| 2019-06 | 33,935,786 | 33,935,786 | 0 | 10,000 at random | 0 |
| 2026-05 | 90,887,615 | 90,887,615 | 0 | 10,000 at random | 0 |
| 2026-06 | 86,483,328 | 86,483,328 | 0 | 10,000 at random | 0 |
| 2026-07 | 89,288,421 | 89,288,421 | 0 | 10,000 at random | 0 |

## Fingerprints

| Month | Fingerprint of the file Lichess gives you |
| --- | --- |
| 2013-01 | `aa40b3671fa3cf1072eb182892cd90b0e1e003a4a5943492f64b77e7f3fd1635` |
| 2019-06 | `21e04a5f055501f056375592ff9c769b1b70c1b5a93c0fc256e2f46646035a91` |
| 2026-05 | `249b4c13e92442ba6694d7f0bdb5b4639047bf74caba1611722a132a012ab294` |
| 2026-06 | `8fd81071f56511e7546cb77e38db5cf32f7e8a437fb906e26959cc064d8b1f79` |
| 2026-07 | `68738b1c448f051dc8d42db645d5b01749988a3bc1c24981adfe44ea92060dc7` |
