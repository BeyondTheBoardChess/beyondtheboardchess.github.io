---
layout: default
month_tables: true
---
# The Data

Lichess publishes every game ever played. I keep a copy. This page answers one question: Does my copy match what Lichess published?

## 1. Where Do the Numbers Come From?

Every study on this site is based on the same games and this page shows where they came from.

[Lichess](https://lichess.org/) lets anyone download the games played on it. I downloaded those files once, kept them exactly as they came, and every number in my studies comes from them. I check my copy against what Lichess published, month by month.

## 2. Did My Copy Match?

{verdict}**Everything matched.** Not one game came back different.{/verdict}

*{coverage}I have all {months} months of games through {through}. That is {games} games.{/coverage}*

## 3. How Did I Load This Data?

1. I tried a few months first. I picked the oldest month Lichess has, a month from the middle and the newest months, because each era stores its games a little differently. I made sure they all came out right before loading anything else.
2. I downloaded every month, oldest first, one file at a time over a single connection so I wasn't putting extra load on Lichess.
3. I kept every file exactly as it came and wrote down its fingerprint the moment it landed.
4. I turned every game into one row in a table. Everything Lichess records about a game is in that row and nothing gets thrown out on the way in. I filter by speed or rating when I ask a question.
5. A few times a check caught my program reading something wrong, like the opening moves. Each time, I fixed the program and reloaded every month from scratch.
6. Then I checked my copy against what Lichess published. That's the rest of this page.

## 4. What Did I Check?

Three counts have to agree for each month. Lichess's published number, the games inside the file I downloaded, and the games I have saved. {counts}They agree on every month below.{/counts}

Then the games themselves. {sampling}The {larger} larger months have {sample} games checked at random, letter by letter against Lichess's original. The {smaller} smaller ones are checked whole, every game in them. That comes to {verified} games of {games} that were completely verified.{/sampling}

## 5. What Doesn't This Page Cover?

It doesn't say a number in any given study is correct, **that gets checked per study** against the games that study used. This page only covers whether my copy of the games is undamaged.

What I have is the **rated standard games** Lichess publishes, not every game played.

## 6. How Can You Check My Copy Yourself?

The files are public, one per month, at the [Lichess Database](https://database.lichess.org/standard/), and the counts are Lichess's own, at the [Lichess Database Counts](https://database.lichess.org/standard/counts.txt).

Every file has a **fingerprint**, a code that comes out completely different if one character of the file changes. Download a month and compare it to the last column of the table below. Click a fingerprint to see the whole code and copy it.