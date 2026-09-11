# How the data is checked

The games behind these videos are a stored copy of the monthly archives Lichess publishes. A check
runs over that copy and asks whether it still matches the archive it was built from. On the months
named below the game counts agreed in full, and every game the check compared came back character
for character the same.

**Verdict: PASS**, compared byte for byte.

## The months this covers

The check runs a month at a time, and its verdict reaches exactly as far as the months it ran on.
Those are **2013-01, 2019-06, 2026-05, 2026-06 and 2026-07**. Lichess publishes months beyond
these, and more of them are still being stored. Nothing on this page says anything about a month
that is not named here.

## 2013-01, checked in full

On 2013-01, the oldest month Lichess publishes, the count agrees three ways: Lichess published
121,332, the archive splits into 121,332 records, and the stored copy holds 121,332 rows. The
difference against the published count is +0. The archive was split into records independently of
the parser, so the middle figure is not the parser marking its own homework.

Every one of the 121,332 games was rebuilt out of the stored copy and compared to the archive byte
for byte, in archive order. Not a sample. Mismatches: 0. The four columns the storage step works
out rather than copies were recomputed from the stored moves on all 121,332 games, and the
disagreements came back at 0.

## The other months, and how much of each was compared

These months are far too large to rebuild in full, so the byte-for-byte comparison runs on a
sample of each. The counts still agree in full.

| Month | Published by Lichess | Difference | Games compared byte for byte | Mismatches |
| --- | ---: | ---: | --- | ---: |
| 2013-01 | 121,332 | +0 | every one of the 121,332, in archive order | 0 |
| 2019-06 | 33,935,786 | +0 | 10,000 of 33,935,786 (0.029%) | 0 |
| 2026-05 | 90,887,615 | +0 | 10,000 of 90,887,615 (0.011%) | 0 |
| 2026-06 | 86,483,328 | +0 | 10,000 of 86,483,328 (0.012%) | 0 |
| 2026-07 | 89,288,421 | +0 | 10,000 of 89,288,421 (0.011%) | 0 |

Samples were drawn uniformly without replacement by `random.Random(0).sample`. On each sampled
month the four computed columns were recomputed from the stored moves on those same 10,000 games,
and the disagreements came back at 0.

## What this says, and where it stops

The check asks whether the stored copy is undamaged. Take a game out of storage, rebuild it, and
you should get back the exact characters Lichess published. Every game the check compared did.

It says nothing about whether a figure in a video is true — that is a separate check, run per
video against the games it actually used. It says nothing about a month that is not named above.
And where it compared a sample, it speaks for the games it drew, not for the ones it did not.

What is stored is the rated standard game archives Lichess publishes, as published, as they stood
when they were fetched. Not every game ever played on Lichess, and not a live feed.

## Where these numbers come from

Every figure on this page is copied from `docs/CORPUS-FIDELITY.md` in the `lichess-corpus`
repository at tag `0.1.0`, where the verdict is PASS. None of it is recalculated here. The
published counts are Lichess's own, from `counts.txt`, fetched 2026-09-03T06:54:17Z from
<https://database.lichess.org/standard/counts.txt>. The archives themselves are the
`lichess_db_standard_rated` files on the same site.
