---
layout: default
title: What Happens to a Player's Performance After Consecutive Wins or Losses?
study: performance-after-wins-or-losses
tab: method
---
This page says exactly how every number on the [Findings tab](/performance-after-wins-or-losses/) was worked out.

## Download the Numbers

Every number behind every chart on the Findings tab, in one spreadsheet.

[Download the spreadsheet](/performance-after-wins-or-losses/performance-after-wins-or-losses-numbers.csv){: .rd-btn download="performance-after-wins-or-losses-numbers.csv"}

## Definitions

### Streak

Games one player lost in a row or won in a row in the order they played them. A draw doesn't end or add to a streak. Draws are taken out of a player's games before streaks are counted, so 7 losses, 2 draws and 3 more losses counts as a losing streak of 10. A game with no result recorded is taken out the same way. A streak doesn't stop at midnight or when a player takes a break. 4 losses one evening and 6 the next morning is a losing streak of 10.

### Game of a streak

A game's place in a streak, counting the wins or losses in a row up to and including that game. The 3rd game of a losing streak is a loss with exactly 2 losses straight before it, once draws are taken out. The **How accurate is a player during a streak?**, **How do games end during a streak?**, **How fast does a player move during a streak?** and **How much better or worse than usual does a player play during a streak?** charts each measure the game at its place in the streak.

### Right after a streak

The next game the player played once the streak reached that length. Only that one game counts. A win counts as 1, a draw as 1/2, and a loss as 0. The **What is the optimal time to wait between games during a streak?**, **How likely is a streak to continue into the next game?** and **How has the win rate after a streak changed?** charts each measure this game.

### Win rate

Wins out of games played, with a draw counting as 1/2 a win. The **What is the optimal time to wait between games during a streak?** chart leaves draws out, so its win rate is wins out of the next games that were won or lost.

### A streak continuing

The game right after a streak continues the streak when it has the same result: a win after a winning streak, or a loss after a losing streak. When that game was a draw it's left out, so the chance a streak continues is out of the next games that were won or lost. On the **How likely is a streak to continue into the next game?** chart, the last point holds every streak of 10 games or more.

### How a game ended

Lichess records how each game finished. The **How do games end during a streak?** chart sorts every game won or lost into these:

- On time: a player's clock ran out.
- Checkmate: the last move of the game mates. Lichess marks a mate in the moves with a #, so I read checkmate off the game's last move.
- Resigned: Lichess recorded the game as finished normally with a winner, and the last move wasn't mate. That means a player resigned.
- Other: anything else, such as a player leaving the game or Lichess ending a game for a rules breach. These games are counted but have no bar of their own.

In a winning streak it's the opponent who ran out of time, was mated or resigned.

### Seconds per move

How long a player spent on each move, read from the clock. Lichess records a player's clock after every move. The time a move took is the clock before it minus the clock after it, plus any seconds the time control adds back after each move. A player's first move is never timed, because Lichess doesn't start the clocks until both players have moved. The move a player was thinking about when the game ended on time or by resignation was never played, so it isn't counted. Each point on the **How fast does a player move during a streak?** chart is the total seconds over the total moves of every game at that place in the streak.

### Random order

Each player's games from one calendar day put in a random order. Every game the player played that day keeps its result and only the order changes. A day runs midnight to midnight UTC, which is how Lichess records its games. No chart on the [Findings tab](/performance-after-wins-or-losses/) draws the random order. The Judgement Calls below and the check that streaks run longer than chance are measured against the random order.

### Tilt

The losing streak's line on the **How much better or worse than usual does a player play during a streak?** chart. Tilt is how much a player's move accuracy changes at each game of a losing streak, compared with the same players' other losses at the same rating. Tilt is a name for a gap in the numbers.

### Hot Streak

The winning streak's line on the **How much better or worse than usual does a player play during a streak?** chart. Hot Streak is how much a player's move accuracy changes at each game of a winning streak, compared with the same players' other wins at the same rating. Hot Streak is also a name for a gap in the numbers.

### Speed

Lichess sorts a game by its clock. Lichess calls a game bullet from 30 seconds up to 3 minutes, blitz from 3 minutes up to 8 and rapid from 8 minutes up to 25. On a speed tab, every game a chart measures is a game of that speed. A streak still runs through all of a player's games, whatever the speed of each game. The Summary tab counts every speed, including classical and ultraBullet. Those two time controls do not have a tab of their own.

### Rating group

A player's average rating across all their games in the study, in groups of 200 points from 1000 up, then 2200 and up. The Chess.com range under each Lichess range is a conversion, read from the [ChessGoals rating comparison table](https://chessgoals.com/rating-comparison/).

### The break

The time between the end of one game and the start of the player's next. Lichess records when a game starts but not when it ends, so I use the latest time that the first game could have ended given its clock and how many moves it lasted. A break shown as under 1 minute means the player was back within 1 minute at the latest.

### Move accuracy

Lichess's own accuracy figure, the stats a player sees on a game's analysis page. The figure comes from the chess engine Stockfish 19 grading every move. Before grading a move, Stockfish 19 looks about six moves ahead for each player.

## Judgement Calls

Each of these could reasonably have gone the other way.

### A draw doesn't end a streak

- **Why:** Players draw far more often in slow games and at higher ratings. Across all 13 years, players drew 1.5% of their ultraBullet games and 4.9% of their classical games. If a draw ended a streak, slow games and strong players would look less streaky only because they draw more.
- **The other choice:** A draw ends the streak.
- **Does the answer change?** **Barely.** For every 1,000 losing streaks of 10 or more found once each day's games were put in a random order, the games in the order they were really played had 1,107 streaks when a draw didn't end a streak, and 1,121 streaks when a draw ended a streak.

### The random order stays within 1 calendar day

- **Why:** People get better at chess. Over a long stretch a player's wins bunch up toward the end because they improved. Putting the games from that whole stretch in a random order would count the improvement as streaks. A player's strength doesn't change measurably within a day.
- **The other choice:** Put the games in a random order over a shorter or a longer stretch.
- **Does the answer change?** **Yes.** For every 1,000 losing streaks of 10 or more found once a player's games were put in a random order, the games in the order they were really played had 1,058 streaks when the random order stayed within 1 sitting (games less than 1 hour apart), 1,107 streaks when the random order stayed within 1 day, and 1,431 streaks when the random order ran across all 13 years. A day is the shortest stretch the games mark clearly. The sitting figure is lower still, so the day's figures are an upper bound.

### Tournament games are left out

- **Why:** Arena and Swiss games aren't paired by rating. The next game is set by the tournament rather than chosen by the player. Across all 13 years, 11.0% of the games players played were tournament games. Two charts count every game, tournament games included: **What is the optimal time to wait between games during a streak?** and **How likely is a streak to continue into the next game?**
- **The other choice:** Keep tournament games in.
- **Does the answer change?** **Only the size.** For every 1,000 losing streaks of 10 or more found once each day's games were put in a random order, the games in the order they were really played had 1,107 streaks with tournament games in, and 1,125 streaks with tournament games out.

### Rematches stay in

- **Why:** Playing the same opponent again is part of how people play.
- **The other choice:** Take out every game against the opponent from the game before.
- **Does the answer change?** **Only the size.** For every 1,000 losing streaks of 10 or more found once each day's games were put in a random order, the games in the order they were really played had 1,107 streaks with rematches in, and 1,046 streaks with rematches out. So rematches account for 61 of the 107 extra streaks, about 60%. What remained still ended up above all 20 random orders.

### A player needs at least 10 games in the study to count

- **Why:** Fewer games can't make a long streak.
- **The other choice:** A higher bar of 50 games.
- **Does the answer change?** **No.** I tested this on about 1 in every 340 players, picked at random from all 13 years. Raising the bar to 50 games took out 40% of those players but only 5.2% of their long losing streaks. The main figure didn't move.

### A speed tab measures games of that speed

- **Why:** The speed tabs compare bullet, blitz and rapid games, so each tab is measured by the games played at that speed. On the **How accurate is a player during a streak?**, **How do games end during a streak?**, **How fast does a player move during a streak?** and **How much better or worse than usual does a player play during a streak?** charts, the game measured is the streak game itself. On the **What is the optimal time to wait between games during a streak?**, **How likely is a streak to continue into the next game?** and **How has the win rate after a streak changed?** charts, the game measured is the next game after the streak.
- **The other choice:** Put each player under the speed that player played most, and count all of that player's games on that tab.
- **Does the answer change?** **Not measured.**

### An abandoned game counts as the result Lichess recorded

- **Why:** Abandoning a game is the player's own choice, so its result counts like any other game's.
- **The other choice:** Leave abandoned games out.
- **Does the answer change?** **Not measured.** Across all 13 years, about 0.29% of games were abandoned, too few to move any figure.

### Games with no rating are left out

- **Why:** A game with no rating can't be put in a rating group. Lichess recorded no rating on 5,715 games between January 2013 and February 2016.
- **The other choice:** Keep those games in the Summary tab.
- **Does the answer change?** **Not measured.**

### On the break chart, games that overlap are set aside

- **Why:** When a player starts a second game before the first could have ended, there's no break to measure.
- **The other choice:** Count those as a break of 0.
- **Does the answer change?** **Yes.** Across all 13 years, about 730 million games started within 10 seconds of the player's last game ending. Counting overlapping games as a break of 0 would have raised that to about 7.8 billion.

### A tab with too few games is dropped

- **Why:** A win rate needs at least 1,600 games right after a streak. The **What is the optimal time to wait between games during a streak?** chart needs 1,600 streaks ended or carried on at each wait. 1,600 is the fewest games that can tell a 55% chance from a 50% one (a power calculation).
- **The other choice:** Draw every tab and mark the thin ones.
- **Does the answer change?** **No.** Only the tabs too thin to read are left off, with no note.

### Accuracy is compared with the same players' own games

- **Why:** A lost game almost always grades lower than a won one. Players deep in a losing streak are lower rated than the players at the start of one. So each game of a losing streak is compared with the same players' other losses at the same rating. Each game of a winning streak is compared with their other wins.
- **The other choice:** Compare with all games.
- **Does the answer change?** **Yes.** Comparing with all games would show who is playing as if it were how they play.

### Accuracy is a sample

- **Why:** Grading every game in the study would take years of computer time.
- **The other choice:** Grade every game.
- **Does the answer change?** **Not measured.** I graded about 2.15 million games drawn at random. The sample holds 7,000 at each place in a streak for every speed and rating group on the tabs. A place that can't reach 7,000 games is graded whole and dropped from its tab if the place is still too thin.

## Steps

### 1. Gather every game

Every game Lichess published from January 2013 to August 2026. That's 8,130,696,420 games in 164 monthly files. [The Lichess Data](https://beyondtheboardchess.github.io/how-the-data-is-checked.html) lists every file by name with its fingerprint and Lichess's own count of its games.

### 2. Leave out the games that can't count

- Correspondence games. One move can take days, so the game has no clear place in a player's order.
- Games with no result recorded.
- Games with no rating recorded.
- Arena and Swiss games, except on the **What is the optimal time to wait between games during a streak?** and **How likely is a streak to continue into the next game?** charts.
- Players with fewer than 10 games.

### 3. Put each player's games in order

Every game becomes 2 rows, 1 for each player. Each player's games from all 164 months are joined into one timeline in the order the games started, so no streak is cut off at the end of a month. Names that differ only in capital letters are treated as one player.

### 4. Find every streak and the game after it

Draws are taken out of each timeline and every streak is counted at every length. Every game won or lost gets its place in the streak it belongs to. For each streak I kept the game right after it. That game's record holds:

- its score
- both players' ratings on that game
- the break before it
- its year

### 5. Read each game's moves for how the game ended and its clock

Each game's moves are read once. That one read gives 2 things:

- whether the last move was checkmate
- each player's clock after every move the player made, turned into seconds per move

A game is read for its clock only when every move carries a clock time. The oldest games have no clock at all, so the **How fast does a player move during a streak?** chart leaves those months out.

### 6. Put each day's games in a random order

Each player's games from each day are put in a random order and step 4 runs again on the new order. To check that streaks run longer than chance, the games are put in a random order 20 separate times and the real order is compared with the average of the 20.

### 7. Work out what the ratings predict

The win rate at every rating gap, measured across all the games and checked against the real results gap by gap. The ratings' prediction measures how much stronger the next opponent is after a losing streak.

### 8. Split everything by speed and rating group

Every number is split by speed, by rating group, and by both together. A speed tab takes the speed of the game being measured, and a rating tab takes the player's average rating. Each tab draws its own slice.

### 9. Grade a sample of games for accuracy

About 2.15 million graded games are drawn at random from the places in a streak the chart shows. Those are games 1, 2, 3, 5 and 10. The rest come from the same players' games outside a long streak. Each is graded move by move with Stockfish 19, which looks about six moves ahead for each player. Lichess's own accuracy formula turns the grades into an accuracy figure. My copy of that formula gives the same answers as Lichess's own 13 test examples.

### 10. Add up the numbers

Each chart's numbers are added up from steps 4 to 9. Every number goes in the spreadsheet download with its chart, its tab and the count of games behind it. The download has `Still counting: the download's final number of rows` rows.

## Checks

### The saved games match what Lichess published

Every month's count matches Lichess's own count. Games rebuilt from the saved copy come back identical to the originals. [The Lichess Data](https://beyondtheboardchess.github.io/how-the-data-is-checked.html) shows the result month by month. This study used all 164 months on that page.

### Every rule was tested on made-up players where the right answer is known

Each rule has test cases on both sides of every edge. Some examples:

- a draw inside a streak
- a game at midnight
- a player right on the 10-game bar

### No game goes missing between steps

At each step the games going in are counted against the games coming out.

### The tests catch real mistakes

I broke the counting on purpose 7 times, once at each step. A test caught every one. (mutation checks)

### Checkmate is read only from the last move

I read checkmate from 2,602,000 games across the January 2016 file and the August 2026 file. 646,784 of those games read as checkmate. Every one of the 646,784 games was one Lichess recorded as finished normally with a winner. None of the 852,620 games lost on time read as checkmate, and no draw did.

### A clock is read only when every move has one

On 400,000 games across the January 2016, April 2017, January 2020 and August 2026 files, every game with a clock had one on every move. The January 2016 file had no clock at all.

### The real order against chance

Streaks in the real order are compared with 20 separate random orders (a permutation test). The real count has to land outside every one of them before the real count is called more than chance. Across all 13 years it did, for losing and winning streaks of 6, 10, 15 and 20 or more.

### The ratings' prediction matches real results

The predicted win rate at each rating gap is checked against how often players really won at that gap.

### The full count reproduces the test run

The program that ran all 164 months was run on the 3 test months first and compared with the test run. It matched: 442,462 losing streaks of 10 or more on the 3 test months both times.

### Every number in the video checked before it's said

Every number was counted a second time by a separate program and came out the same.

### No published figure to compare with

There's no outside figure to compare these numbers with, for Lichess or any other site.

## Limits

### This can't measure how a player feels

Tilt and Hot Streak are names for a gap in the numbers. Draws come in streaks too. For every 1,000 streaks of 6 or more draws found once each day's games were put in a random order, the games in the order they were really played had about 1,340 streaks. A streak of draws is hard to explain by frustration. So part of what makes streaks run long has nothing to do with how a player feels.

### A shorter stretch finds fewer extra streaks

A day is the shortest stretch the random order uses. Putting the games in a random order within a sitting finds fewer extra streaks still, so every streak count in the Judgement Calls is an upper bound.

### After a loss, the next opponent is relatively stronger

After losing, a player's rating drops faster than Lichess's pairing makes up for. So the next opponent is rated higher relative to the player. After losing streaks of 10 games or more, the two players' ratings predicted the player would win the next game 40.7% of the time. So part of the lower win rate after a losing streak on the charts comes from who the player faces next. On 3 recent test months, the games in the order they were really played had more losing streaks of 10 or more than once each day's games were put in a random order, and the ratings alone made about 67% or more of that difference. That share wasn't counted for all 13 years.

### Seconds per move mixes speeds on Summary

On the Summary tab, the **How fast does a player move during a streak?** chart puts bullet, blitz and rapid moves together. A rapid move takes far longer than a bullet move, so the Summary lines also move with how many games of each speed sit at each place in a streak. Each speed tab measures one speed only.

### The oldest games have no clock

Lichess's files carry no clock before `Still counting: the first month with a clock on every game`. The **How fast does a player move during a streak?** chart leaves out the `Still counting: share of streak games with no clock` of streak games that have no clock.

### Some games end another way

Some streak games end without a clock running out, a checkmate or a resignation, such as when a player leaves the game. Those games are `Still counting: share of streak games that ended another way` of streak games. They have no bar on the **How do games end during a streak?** chart, so its 3 bars don't add up to 100%.

### A streak can span days

A losing streak of 10 might be 4 losses one night and 6 the next, so a long streak isn't always one bad sitting. The **What is the optimal time to wait between games during a streak?** chart shows how the wait before the next game relates to how that game goes.

### An account isn't always one person

Lichess lets players rename their accounts. A renamed account looks like 2 players with a streak cut at the rename. Accounts can be shared or sold. Neither can be seen in the games.

### New accounts can't be spotted

Lichess's files don't say how settled a player's rating is, so new accounts with swinging ratings are counted like everyone else.

### Times are to the second

2 games that start in the same second have no set order.

### The break is at the latest

Lichess doesn't record when a game ends, so every break is the shortest it could have been.

### Accuracy is a sample

The sample covers about 2.15 million graded games out of the 8.1 billion. Stockfish 19 grades every move of those games, looking about six moves ahead for each player.

### This is Lichess only

Nothing here describes Chess.com players. The Chess.com ranges on the rating tabs are conversions.

### Most of the games are recent

88% of them were played from January 2020 on, so an all-time figure is mostly a recent one.

### The charts describe groups of players

The charts can't say what a break or a streak will do for any one player.