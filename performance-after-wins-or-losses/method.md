---
layout: default
title: What Happens to a Player's Performance After Consecutive Wins or Losses?
study: performance-after-wins-or-losses
tab: method
---
This page says exactly how every number on the [Findings tab](/performance-after-wins-or-losses/) was worked out. Every number behind every chart is in a downloadable spreadsheet with one row per metric.

## Definitions

**Streak.** Games one player lost in a row or won in a row in the order they played them. A draw doesn't end or add to a streak. Draws are taken out of a player's games before streaks are counted, so 7 losses, 2 draws and 3 more losses counts as a losing streak of 10. A game with no result recorded is taken out the same way. A streak doesn't stop at midnight or when a player takes a break. 4 losses one evening and 6 the next morning is a losing streak of 10.

**Right after a streak.** The next game the player played once the streak reached that length. Only that one game counts. A win counts as 1, a draw as 1/2, and a loss as 0.

**Win rate.** Wins out of games played, with a draw counting as 1/2 a win.

**Expected.** A player's win rate that calendar day once the day's games are put in a random order. Every game the player played that day keeps its result and only the order changes. A day runs midnight to midnight UTC, which is how Lichess records its games.

**Tilt.** How far a player's win rate right after a losing streak falls below Expected. Tilt is a name for a gap in the numbers.

**Hot Streak.** How far a player's win rate right after a winning streak rises above Expected. Hot Streak is also a name for a gap in the numbers.

**Facing stronger opponents.** The win rate the two players' ratings predict for a game. I measured it from the games themselves by counting how often a player wins at every rating gap across all the games in the study.

**Against an opponent within 100 points.** Both players' ratings as Lichess recorded them on that game are no more than 100 points apart.

**Speed.** Lichess sorts a game by its clock. Lichess calls a game bullet from 30 seconds up to 3 minutes, blitz from 3 minutes up to 8 and rapid from 8 minutes up to 25. A player's streaks are counted under the speed that player played most. The Summary tab counts every speed, including classical and ultraBullet. Those two time controls do not have a tab of their own.

**Rating group.** A player's average rating across all their games in the study, in groups of 200 points from 1000 up, then 2200 and up. The Chess.com range under each Lichess range is a conversion, read from the [ChessGoals rating comparison table](https://chessgoals.com/rating-comparison/).

**The break.** The time between the end of one game and the start of the player's next. Lichess records when a game starts but not when it ends, so I use the latest time that the first game could have ended given its clock and how many moves it lasted. A break shown as under 1 minute means the player was back within 1 minute at the latest.

**Move accuracy.** Lichess's own accuracy figure, the stats a player sees on a game's analysis page. The figure comes from a chess engine grading every move. I used Stockfish 19 looking 12 moves deep.

## Judgement Calls

Each of these could reasonably have gone the other way.

**A draw doesn't end a streak.**

- **Why:** Players draw far more often in slow games and at higher ratings, from 1.5% of games in ultraBullet to 5.5% in classical on the test months. If a draw ended a streak, slow games and strong players would look less streaky only because they draw more.
- **The other choice:** A draw ends the streak.
- **Does the answer change?** Barely. On the test months the number of long streaks changes by about 1/4 and the answer by about 1 part in 100. `Still counting: both figures for all 13 years`

**Expected shuffles the games within 1 calendar day.**

- **Why:** People get better at chess. Over a long stretch a player's wins bunch up toward the end because they improved. A shuffle across that stretch would count the improvement as streaks. Nobody improves measurably in a day.
- **The other choice:** Shuffle a shorter or a longer stretch.
- **Does the answer change?** Yes. On the test months losing streaks of 10 or more came out at 1.049 times what chance makes within 1 sitting (games less than 1 hour apart), 1.096 within 1 day and 1.243 across all 3 months. A day is the shortest stretch the games mark clearly. The sitting figure is lower still, so the day's figures are an upper bound. `Still counting: the 3 figures for all 13 years`

**Expected comes from the shuffled day.**

- **Why:** Some days a player loses more whatever the order. The ratings can't see that, so a bad day would be counted as tilt.
- **The other choice:** Expected from the ratings alone.
- **Does the answer change?** Yes. After 4 losses on the test months, the ratings' prediction would have put 1.50 points of a 2.05-point gap on the streak. The **How much of a losing streak is tilt?** chart shows both steps side by side. `Still counting: both figures for all 13 years`

**Tournament games are left out.**

- **Why:** Arena and Swiss games aren't paired by rating. The next game is set by the tournament rather than chosen by the player. Tournament games were 8.8% of the test months' games.
- **The other choice:** Keep tournament games in.
- **Does the answer change?** Only the size. On the test months losing streaks of 10 or more ran 1.093 times what chance makes with tournament games in and 1.114 with them out. `Still counting: both figures for all 13 years`

**Rematches stay in.**

- **Why:** Playing the same opponent again is part of how people play.
- **The other choice:** Take out every game against the opponent from the game before.
- **Does the answer change?** Only the size. On the test months the extra long losing streaks went from 1.093 times chance to 1.048, about 1/2. What remained still ended up above all 20 random orders. `Still counting: both figures for all 13 years`

**A player needs at least 10 games in the study to count.**

- **Why:** Fewer games can't make a long streak.
- **The other choice:** A higher bar of 50 games.
- **Does the answer change?** No. On the test months the higher bar removed 16% of players and 9.4% of the long losing streaks. The main figure didn't move. `Still counting: both figures for all 13 years`

**A player's streaks are counted under the speed they played most.**

- **Why:** The charts compare the real order with a shuffled one inside the same speed. If a streak took the speed of its own games, a shuffle could move the streak from one speed to another. Then the two numbers being compared would stop describing the same players.
- **The other choice:** Each streak takes the speed of its own games.
- **Does the answer change?** Not measured.

**An abandoned game counts as the result Lichess recorded.**

- **Why:** Walking away from a game is something a player on a bad streak does.
- **The other choice:** Leave abandoned games out.
- **Does the answer change?** Not measured. Abandoned games were 0.26% of players' games on the test months, too few to move any figure.

**Games with no rating are left out.**

- **Why:** A game with no rating can't be put in a rating group. Lichess recorded no rating on 5,715 games between January 2013 and February 2016.
- **The other choice:** Keep those games in the Summary tab.
- **Does the answer change?** Not measured.

**On the break chart, games that overlap are set aside.**

- **Why:** When a player starts a second game before the first could have ended, there's no break to measure.
- **The other choice:** Count those as a break of 0.
- **Does the answer change?** Yes. On the test months about 23 million real instant rematches would have become about 130 million. `Still counting: both figures for all 13 years`

**A tab with too few games is dropped.**

- **Why:** A win rate needs at least 1,600 games right after a streak. The **How long should a player step away?** chart needs 1,600 streaks ended or carried on at each wait. 1,600 is the fewest games that can tell a 55% chance from a 50% one (a power calculation).
- **The other choice:** Draw every tab and mark the thin ones.
- **Does the answer change?** No. Only the tabs too thin to read are left off, with no note.

**Accuracy is compared with the same players' own games.**

- **Why:** A lost game almost always grades lower than a won one. Players deep in a losing streak are lower rated than the players at the start of one. So each game of a losing streak is compared with the same players' other losses at the same rating. Each game of a winning streak is compared with their other wins.
- **The other choice:** Compare with all games.
- **Does the answer change?** Yes. Comparing with all games would show who is playing as if it were how they play.

**Accuracy is a sample.**

- **Why:** Grading every game in the study would take years of computer time.
- **The other choice:** Grade every game.
- **Does the answer change?** Not measured. I graded `Still counting: how many` games drawn at random. The sample holds 7,000 at each place in a streak for every speed and rating group. A place that can't reach 7,000 games is graded whole and dropped from its tab if the place is still too thin.

## Steps

**1. The games.** Every game Lichess published from January 2013 to August 2026. That's 8,130,696,420 games in 164 monthly files. [The Lichess Data](https://beyondtheboardchess.github.io/how-the-data-is-checked.html) lists every file by name with its fingerprint and Lichess's own count of its games.

**2. What was left out.**

- Correspondence games. One move can take days, so the game has no clear place in a player's order.
- Games with no result recorded.
- Games with no rating recorded.
- Arena and Swiss games.
- Players with fewer than 10 games.

**3. One timeline per player.** Every game becomes 2 rows, 1 for each player. Each player's games from all 164 months are joined into one timeline in the order the games started, so no streak is cut off at the end of a month. Names that differ only in capital letters are treated as one player.

**4. Streaks and the game after each one.** Draws are taken out of each timeline and every streak is counted at every length. For each streak I kept the game right after it. That game's record holds:

- its score
- both players' ratings on that game
- the break before it
- its year

**5. Expected.** Each player's games from each day are put in a random order and step 4 runs again on the shuffled order. For the **How often do streaks happen?** chart the shuffle runs 20 times and the real order is compared with the average of the 20. For the game right after a streak the shuffle runs once.

**6. What the ratings predict.** The win rate at every rating gap, measured across all the games and checked against the real results gap by gap before any chart uses it.

**7. The tabs.** Every number is split by speed, by rating group, and by both together. Each tab draws its own slice.

**8. Accuracy.** `Still counting: how many` games are drawn at random from the places in a streak the chart shows. Those are games 1, 2, 3, 5 and 10. The rest come from the same players' games outside a long streak. Each is graded move by move with Stockfish 19 looking 12 moves deep. Lichess's own accuracy formula turns the grades into an accuracy figure. My copy of that formula gives the same answers as Lichess's own 13 test examples.

**9. The numbers.** Each chart's numbers are added up from steps 4 to 8. Every number goes in the spreadsheet download with its chart, its tab and the count of games behind it. The download comes with the finished numbers.

## Checks

**The saved games match what Lichess published.** Every month's count matches Lichess's own count. Games rebuilt from the saved copy come back identical to the originals. [The Lichess Data](https://beyondtheboardchess.github.io/how-the-data-is-checked.html) shows the result month by month. `Still counting: the version of the games this study used`

**Every rule was tested on made-up players where the right answer is known.** Each rule has test cases on both sides of every edge. Some examples:

- a draw inside a streak
- a game at midnight
- a player right on the 10-game bar

**No game goes missing between steps.** At each step the games going in are counted against the games coming out.

**The tests catch real mistakes.** I broke the counting on purpose 7 times, once at each step. A test caught every one. (mutation checks)

**The real order against chance.** Streaks in the real order are compared with 20 separate random orders (a permutation test). The real count has to land outside every one of them before the real count is called more than chance. `Still counting: the result`

**The ratings' prediction matches real results.** The predicted win rate at each rating gap is checked against how often players really won at that gap.

**The full count reproduces the test run.** The program that ran all 164 months was run on the 3 test months first and compared with the test run. `Still counting: the result`

**Every number in the video checked before it's said.** `Still counting: the final check's result`

**Nobody has published this for Lichess.** There's no outside figure to compare these numbers with, for Lichess or any other site.

## Limits

**This can't see inside anyone's head.** Tilt and Hot Streak are names for a gap in the numbers. Draws come in streaks too. On the test months streaks of 6 or more draws happened 1.45 times as often as chance makes them. Nobody rage-draws. So part of what makes streaks run long isn't about feelings at all. `Still counting: the draw figure`

**A shorter stretch gives smaller gaps.** A day is the shortest stretch Expected uses. Shuffling within a sitting gives smaller gaps still, so every figure here is an upper bound.

**Losing makes the next game harder.** After losing, a player's rating drops faster than Lichess's pairing makes up for. So the next opponent is tougher relative to them. On the test months the ratings alone made 2/3 to 9/10 of the extra long losing streaks. The **How much of a losing streak is tilt?** chart separates that step out. `Still counting: the share`

**A streak can span days.** A losing streak of 10 might be 4 losses one night and 6 the next, so a long streak isn't always one bad sitting. The **How long should a player step away?** chart shows what a break does to a streak.

**An account isn't always one person.** Lichess lets players rename their accounts. A renamed account looks like 2 players with a streak cut at the rename. Accounts can be shared or sold. Neither can be seen in the games.

**New accounts can't be spotted.** Lichess's files don't say how settled a player's rating is, so new accounts with swinging ratings are counted like everyone else.

**Times are to the second.** 2 games that start in the same second have no set order.

**The break is at the latest.** Lichess doesn't record when a game ends, so every break is the shortest it could have been.

**Accuracy is a sample.** The sample covers `Still counting: how many` graded games out of the 8.1 billion. The engine looks 12 moves deep.

**This is Lichess only.** Nothing here describes Chess.com players. The Chess.com ranges on the rating tabs are conversions.

**Most of the games are recent.** 88% of them were played from January 2020 on, so an all-time figure is mostly a recent one.

**The charts describe groups of players.** The charts can't say what a break or a streak will do for any one player.