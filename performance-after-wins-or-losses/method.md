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

### Right after a streak

The next game the player played once the streak reached that length. Only that one game counts. A win counts as 1, a draw as 1/2, and a loss as 0.

### Win rate

Wins out of games played, with a draw counting as 1/2 a win.

### Expected

A player's win rate that calendar day once the day's games are put in a random order. Every game the player played that day keeps its result and only the order changes. A day runs midnight to midnight UTC, which is how Lichess records its games.

### Tilt

How far a player's win rate right after a losing streak falls below Expected. Tilt is a name for a gap in the numbers.

### Hot Streak

How far a player's win rate right after a winning streak rises above Expected. Hot Streak is also a name for a gap in the numbers.

### Facing stronger opponents

The win rate the two players' ratings predict for a game. I measured it from the games themselves by counting how often a player wins at every rating gap across all the games in the study.

### Speed

Lichess sorts a game by its clock. Lichess calls a game bullet from 30 seconds up to 3 minutes, blitz from 3 minutes up to 8 and rapid from 8 minutes up to 25. A player's streaks are counted under the speed that player played most. The Summary tab counts every speed, including classical and ultraBullet. Those two time controls do not have a tab of their own.

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

### Expected puts the games in a random order within 1 calendar day

- **Why:** People get better at chess. Over a long stretch a player's wins bunch up toward the end because they improved. Putting the games from that whole stretch in a random order would count the improvement as streaks. A player's strength doesn't change measurably within a day.
- **The other choice:** Put the games in a random order over a shorter or a longer stretch.
- **Does the answer change?** **Yes.** For every 1,000 losing streaks of 10 or more found once a player's games were put in a random order, the games in the order they were really played had 1,058 streaks when the random order stayed within 1 sitting (games less than 1 hour apart), 1,107 streaks when the random order stayed within 1 day, and 1,431 streaks when the random order ran across all 13 years. A day is the shortest stretch the games mark clearly. The sitting figure is lower still, so the day's figures are an upper bound.

### Expected comes from the day's games put in a random order

- **Why:** Some days a player loses more whatever the order. The ratings can't see that, so a day with more losses than usual would be counted as tilt.
- **The other choice:** Expected from the ratings alone.
- **Does the answer change?** **Yes.** After 10 or more losses, players won 30.8% of their next games. The ratings alone predicted 40.7%, a gap of 9.9%. The day's games put in a random order predicted 32.3%, a gap of 1.6%. So using the ratings alone as Expected would have made the gap after the streak 8.3% larger than the random order showed. The **How much of a losing streak is tilt?** chart shows both steps side by side.

### Tournament games are left out

- **Why:** Arena and Swiss games aren't paired by rating. The next game is set by the tournament rather than chosen by the player. Across all 13 years, 11.0% of the games players played were tournament games.
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

### A player's streaks are counted under the speed they played most

- **Why:** The charts compare the real order with a random order inside the same speed. If a streak took the speed of its own games, putting the games in a random order could move the streak from one speed to another. Then the two numbers being compared would stop describing the same players.
- **The other choice:** Each streak takes the speed of its own games.
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

- **Why:** A win rate needs at least 1,600 games right after a streak. The **How long should a player rest before playing their next game?** chart needs 1,600 streaks ended or carried on at each wait. 1,600 is the fewest games that can tell a 55% chance from a 50% one (a power calculation).
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
- Arena and Swiss games.
- Players with fewer than 10 games.

### 3. Put each player's games in order

Every game becomes 2 rows, 1 for each player. Each player's games from all 164 months are joined into one timeline in the order the games started, so no streak is cut off at the end of a month. Names that differ only in capital letters are treated as one player.

### 4. Find every streak and the game after it

Draws are taken out of each timeline and every streak is counted at every length. For each streak I kept the game right after it. That game's record holds:

- its score
- both players' ratings on that game
- the break before it
- its year

### 5. Put each day's games in a random order

Each player's games from each day are put in a random order and step 4 runs again on the new order. For the **How often do streaks happen?** chart the games are put in a random order 20 separate times and the real order is compared with the average of the 20. For the game right after a streak they are put in a random order once.

### 6. Work out what the ratings predict

The win rate at every rating gap, measured across all the games and checked against the real results gap by gap before any chart uses it.

### 7. Split everything by speed and rating group

Every number is split by speed, by rating group, and by both together. Each tab draws its own slice.

### 8. Grade a sample of games for accuracy

About 2.15 million graded games are drawn at random from the places in a streak the chart shows. Those are games 1, 2, 3, 5 and 10. The rest come from the same players' games outside a long streak. Each is graded move by move with Stockfish 19, which looks about six moves ahead for each player. Lichess's own accuracy formula turns the grades into an accuracy figure. My copy of that formula gives the same answers as Lichess's own 13 test examples.

### 9. Add up the numbers

Each chart's numbers are added up from steps 4 to 8. Every number goes in the spreadsheet download with its chart, its tab and the count of games behind it. The download has 6,438 rows.

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

### A shorter stretch gives smaller gaps

A day is the shortest stretch Expected uses. Putting the games in a random order within a sitting gives smaller gaps still, so every figure here is an upper bound.

### After a loss, the next opponent is relatively stronger

After losing, a player's rating drops faster than Lichess's pairing makes up for. So the next opponent is rated higher relative to the player. On 3 recent test months, the games in the order they were really played had more losing streaks of 10 or more than once each day's games were put in a random order, and the ratings alone made about 67% or more of that difference. That share wasn't counted for all 13 years. The **How much of a losing streak is tilt?** chart separates that step out.

### A streak can span days

A losing streak of 10 might be 4 losses one night and 6 the next, so a long streak isn't always one bad sitting. The **How long should a player rest before playing their next game?** chart shows what a break does to a streak.

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