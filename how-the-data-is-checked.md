# How the data is checked

Lichess publishes every game played.
I keep a copy.
This page answers one question - Does my copy match what Lichess published?

**Everything matched.**
Not one game came back different.

*Last checked September 2026, covering Lichess's files through July 2026.*

## The check

Three counts have to agree for each month: Lichess's published number, the games inside the file I downloaded, and the games I have saved.
They agree on every month below.

Then the games themselves.
2013-01 is small enough to check whole; larger months have 10k games verified at random, letter by letter against Lichess's original.

## Check it yourself

The files are public, one per month, at <https://database.lichess.org/standard/>, and the counts are Lichess's own, at <https://database.lichess.org/standard/counts.txt>.

Every file has a **fingerprint**: a code that comes out completely different if one character of the file changes.
Download a month and compare it to the list below.

## What this page doesn't cover

It doesn't say a number in any given video is correct, **that gets checked per video** against the games that video used.
This page only covers whether my copy of the games is undamaged.

What I have is the **rated standard games** Lichess publishes, not every game played.

## Month by month

<details>
<summary><b>All 5 months matched.</b> Open for the numbers.</summary>

| Month | Games Lichess published | Games I have | How many were checked | How many were wrong |
| --- | ---: | ---: | --- | ---: |
| 2013-01 | 121,332 | 121,332 | all 121,332 | 0 |
| 2019-06 | 33,935,786 | 33,935,786 | 10,000 at random | 0 |
| 2026-05 | 90,887,615 | 90,887,615 | 10,000 at random | 0 |
| 2026-06 | 86,483,328 | 86,483,328 | 10,000 at random | 0 |
| 2026-07 | 89,288,421 | 89,288,421 | 10,000 at random | 0 |

</details>

## Fingerprints

<details>
<summary>The 5 files I checked, by fingerprint.</summary>

| Month | Fingerprint of the file Lichess gives you |
| --- | --- |
| 2013-01 | `aa40b3671fa3cf1072eb182892cd90b0e1e003a4a5943492f64b77e7f3fd1635` |
| 2019-06 | `21e04a5f055501f056375592ff9c769b1b70c1b5a93c0fc256e2f46646035a91` |
| 2026-05 | `249b4c13e92442ba6694d7f0bdb5b4639047bf74caba1611722a132a012ab294` |
| 2026-06 | `8fd81071f56511e7546cb77e38db5cf32f7e8a437fb906e26959cc064d8b1f79` |
| 2026-07 | `68738b1c448f051dc8d42db645d5b01749988a3bc1c24981adfe44ea92060dc7` |

</details>
