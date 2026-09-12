# How the data is checked

The games behind these videos are a stored copy of the archives Lichess publishes for anyone to
download. This page asks whether that copy still matches what Lichess published.

**Verdict: PASS.** Every game the check compared came back identical.

| Month | Lichess published | Stored here | Difference | Rebuilt and compared | Came back wrong |
| --- | ---: | ---: | ---: | --- | ---: |
| 2013-01 | 121,332 | 121,332 | 0 | all 121,332 | 0 |
| 2019-06 | 33,935,786 | 33,935,786 | 0 | 10,000 at random | 0 |
| 2026-05 | 90,887,615 | 90,887,615 | 0 | 10,000 at random | 0 |
| 2026-06 | 86,483,328 | 86,483,328 | 0 | 10,000 at random | 0 |
| 2026-07 | 89,288,421 | 89,288,421 | 0 | 10,000 at random | 0 |

The counts agree three ways: what Lichess published, what the archive splits into, and what sits
in storage. 2013-01 was small enough to rebuild whole. The bigger months had 10,000 games each
drawn at random and compared character for character.

Three more checks ran on all five months, and all three came back clean:

- Every label Lichess puts on a game is stored in a field of its own. None left out, none left
  undecided.
- Where Lichess leaves something blank, it's stored blank rather than guessed at. No blanks turned
  into text, and no way of finishing a game outside the six Lichess uses.
- The four things worked out rather than copied, like the number of moves and whether the game had
  clock times, were recalculated from the stored moves. No disagreements.

## Check it yourself

The archives are public, and these are the exact files that were checked. Each is at
<https://database.lichess.org/standard/>, named `lichess_db_standard_rated_<month>.pgn.zst`.
Download one and its SHA-256 should read:

| Month | SHA-256 of the file Lichess serves |
| --- | --- |
| 2013-01 | `aa40b3671fa3cf1072eb182892cd90b0e1e003a4a5943492f64b77e7f3fd1635` |
| 2019-06 | `21e04a5f055501f056375592ff9c769b1b70c1b5a93c0fc256e2f46646035a91` |
| 2026-05 | `249b4c13e92442ba6694d7f0bdb5b4639047bf74caba1611722a132a012ab294` |
| 2026-06 | `8fd81071f56511e7546cb77e38db5cf32f7e8a437fb906e26959cc064d8b1f79` |
| 2026-07 | `68738b1c448f051dc8d42db645d5b01749988a3bc1c24981adfe44ea92060dc7` |

The counts above are Lichess's own, from <https://database.lichess.org/standard/counts.txt>.

## Where this stops

It says the stored copy is undamaged. It doesn't say a figure in a video is true. That gets
checked separately, per video, against the games that video used.

It covers the five months above and no others. Lichess publishes more, and more are still being
stored. Where the check compared a sample, it speaks for the games it drew, and the comparison ran
against the stored copy, so what you can check from here is that its files are the ones Lichess
serves.

What's stored is the rated standard game archives Lichess publishes, as published. Not every game
ever played on Lichess, and not a live feed.
