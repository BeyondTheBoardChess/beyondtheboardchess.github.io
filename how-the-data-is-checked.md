# How the data is checked

Lichess lets anyone download the games played on it. I downloaded those files and kept them, and
this page asks one question about my copy: does it still match what Lichess published?

**Verdict: everything matched.** Every game that was checked came back identical.

The count matches three ways on every month listed at the bottom of this page: Lichess's own
number, the number of games inside the file I downloaded, and the number I have saved. 2013-01 is
small enough to check every single game, so every single game was checked. The other months are
far too big for that, so 10,000 games of each were picked at random and compared letter by letter
against the original.

## Three more checks

**Is anything missing?** No. Everything Lichess records about a game is kept, on every month
checked.

**Is anything made up?** No. Where Lichess left something blank, it is still blank. Nothing was
filled in with a guess.

**Do the few numbers I work out myself hold up?** Yes. Things like how many moves a game lasted
were worked out a second time from the moves themselves, and every one agreed.

## Check it yourself

You don't have to take my word for any of this. Lichess puts these files up for anyone, one per
month, at <https://database.lichess.org/standard/>.

Every file has a fingerprint: a long code that comes out completely different if even one
character of the file changes. The second table at the bottom of this page lists the fingerprints
of the exact files I checked, so you can download a month yourself and confirm you got the same
file I did.

The game counts in the first table are Lichess's own, published at
<https://database.lichess.org/standard/counts.txt>.

## Where this stops

This says my copy of the games is undamaged. It doesn't say a number in a video is right. That
gets checked separately, one video at a time, against the games that video used.

It covers the months in the tables below and no others. Lichess has more, and I am still saving
more of them. Where only a sample was checked, it speaks for the games it picked.

What I have is the rated standard games Lichess publishes, exactly as they publish them. Not every
game ever played there, and not a live connection to the site.

## What was checked, month by month

| Month | Games Lichess published | Games I have | Difference | How many were checked | How many were wrong |
| --- | ---: | ---: | ---: | --- | ---: |
| 2013-01 | 121,332 | 121,332 | 0 | all 121,332 | 0 |
| 2019-06 | 33,935,786 | 33,935,786 | 0 | 10,000 at random | 0 |
| 2026-05 | 90,887,615 | 90,887,615 | 0 | 10,000 at random | 0 |
| 2026-06 | 86,483,328 | 86,483,328 | 0 | 10,000 at random | 0 |
| 2026-07 | 89,288,421 | 89,288,421 | 0 | 10,000 at random | 0 |

## Fingerprints of the files

| Month | Fingerprint of the file Lichess gives you |
| --- | --- |
| 2013-01 | `aa40b3671fa3cf1072eb182892cd90b0e1e003a4a5943492f64b77e7f3fd1635` |
| 2019-06 | `21e04a5f055501f056375592ff9c769b1b70c1b5a93c0fc256e2f46646035a91` |
| 2026-05 | `249b4c13e92442ba6694d7f0bdb5b4639047bf74caba1611722a132a012ab294` |
| 2026-06 | `8fd81071f56511e7546cb77e38db5cf32f7e8a437fb906e26959cc064d8b1f79` |
| 2026-07 | `68738b1c448f051dc8d42db645d5b01749988a3bc1c24981adfe44ea92060dc7` |
