---
layout: default
title: What Happens to a Player's Performance After Consecutive Wins or Losses?
study: performance-after-wins-or-losses
tab: method
---
This page says exactly how every number on the Findings tab was worked out, in enough detail to check it or rebuild it from the same public games. Every number behind every chart goes in a spreadsheet download with one row per number. The download comes with the finished numbers.

## Definitions

**Streak.** Games one player lost in a row or won in a row, in the order they played them. A draw doesn't end a streak and doesn't add to it. Draws are taken out of a player's games before streaks are counted, so seven losses, two draws and three more losses is a losing streak of 10. A game with no result recorded is taken out the same way.

**Right after a streak.** The next game the player played once the streak reached that length. Only that one game counts. A win counts as 1, a draw as half and a loss as 0.

**Win rate.** Wins out of games played, with a draw counting as half a win.

**Expected.** A player's win rate that calendar day once the day's games are put in a random order. Every game the player played that day keeps its result and only the order changes. A day runs midnight to midnight UTC, the clock Lichess records its games in.

**Tilt.** How far a player's win rate right after a losing streak falls below Expected. Tilt is a name for a gap in the numbers. Nothing here can see what a player is feeling (see Limits).

**Hot Streak.** How far a player's win rate right after a winning streak rises above Expected. Hot Streak is also a name for a gap in the numbers.

**Facing stronger opponents.** The win rate the two players' ratings predict for a game. I measured it from the games themselves by counting how often a player wins at every rating gap across all the games in the study.

**Against an opponent within 100 points.** Both players' ratings as Lichess recorded them on that game are no more than 100 points apart, either way.

**Speed.** Lichess sorts a game by its clock. It adds the starting time to 40 times the increment and calls a game bullet from 30 seconds up to 3 minutes, blitz from 3 minutes up to 8 and rapid from 8 minutes up to 25. A player's streaks are counted under the speed that player played most. The Summary tab counts every speed, classical and ultraBullet included. Those two have no tab of their own.

**Rating group.** A player's average rating across all their games in the study, in groups of 200 points from 1000 up, then 2200 and up. The Chess.com range under each Lichess range is a conversion, read from the ChessGoals rating comparison table.

**The break.** The time between the end of one game and the start of the player's next. Lichess records when a game starts but not when it ends, so I use the latest the first game could have ended given its clock and how many moves it lasted. A break shown as under a minute means the player was back within a minute at the latest.

**Move accuracy.** Lichess's own accuracy figure, the one a player sees on a game's analysis page. It comes from a chess engine grading every move, here Stockfish 19 looking 12 moves deep.

## Judgement Calls

Each of these could reasonably have gone the other way. Each says what I picked, why I picked it and whether the other choice changes the answer.

**A draw doesn't end a streak.** Why: players draw far more often in slow games and at higher ratings, from 1.5% of games in ultraBullet to 5.5% in classical on the test months. If a draw ended a streak, slow games and strong players would look less streaky only because they draw more. The other choice: counting a draw as the end of a streak changes how many long streaks there are by about a quarter and the answer by about one part in a hundred on the test months. `Still counting: both figures for all 13 years`

**Expected shuffles the games within one calendar day.** Why: people get better at chess. Over a long stretch a player's wins bunch up toward the end because they improved. A shuffle across that stretch would count the improvement as streaks. Nobody improves measurably in a day. The other choice changes the answer. On the test months, shuffling within one sitting (games less than an hour apart) put losing streaks of 10 or more at 1.049 times what chance makes, one day at 1.096 and all three months at 1.243. A day is the shortest stretch the games mark clearly. The sitting figure is lower still, so the day's figures are an upper bound. `Still counting: the three figures for all 13 years`

**Expected comes from the shuffled day.** Why: some days a player loses more whatever the order. The ratings can't see that. Set against the ratings alone, a bad day would be counted as tilt. After 4 losses on the test months, the ratings' prediction would have put 1.50 points of a 2.05-point gap on the streak. The How much of a losing streak is tilt? chart shows both steps side by side so a reader can see each one. `Still counting: both figures for all 13 years`

**Tournament games are left out.** Why: arena and Swiss games aren't paired by rating and the next game is set by the tournament rather than chosen by the player. They were 8.8% of the test months' games. The other choice keeps the same direction with a smaller gap. On the test months losing streaks of 10 or more ran 1.093 times what chance makes with tournament games in and 1.114 with them out. `Still counting: both figures for all 13 years`

**Rematches stay in.** Why: playing the same opponent again is part of how people play. The other choice changes the size. Taking out every game against the opponent from the game before took the extra long losing streaks from 1.093 times chance to 1.048 on the test months, about half. What was left was still above all 20 random orders. `Still counting: both figures for all 13 years`

**A player needs at least 10 games in the study to count.** Why: fewer games can't make a long streak. The other choice doesn't change the answer. Raising the bar to 50 games removed 16% of players and 9.4% of the long losing streaks on the test months. The main figure didn't move. `Still counting: both figures for all 13 years`

**A player's streaks are counted under the speed they played most.** Why: the charts compare the real order with a shuffled one inside the same speed. If a streak took the speed of its own games, a shuffle could move it from one speed to another. Then the two numbers being compared would stop describing the same players. The other choice was not measured.

**An abandoned game counts as the result Lichess recorded.** Why: walking away from a game is something a player on a bad streak does. It was 0.26% of players' games on the test months, too few to move any figure. The other choice was not measured.

**Games with no rating are left out.** Lichess recorded no rating on 5,715 games between January 2013 and February 2016. Those games can't be put in a rating group. The other choice was not measured.

**On the break chart, games that overlap are set aside.** Why: when a player starts a second game before the first could have ended, there's no break to measure. Counting those as a break of zero would have turned about 23 million real instant rematches into about 130 million on the test months. `Still counting: both figures for all 13 years`

**A tab with too few games is dropped.** A win rate needs at least 1,600 games right after a streak. The break chart needs 1,600 streaks ended or carried on at each wait. That's the fewest games that can tell a 55% chance from a 50% one. A dropped tab carries no note.

**Accuracy is compared with the same players' own games.** A lost game almost always grades lower than a won one. Players deep in a losing streak are lower rated than the ones at its start. So each game of a losing streak is compared with the same players' other losses at the same rating. Each game of a winning streak is compared with their other wins. Comparing with all games would show who is playing as if it were how they play.

**Accuracy is a sample.** Grading every game in the study would take years of computer time. I graded `Still counting: how many` games drawn at random. That's 7,000 at each place in a streak for every speed and rating group. A place that can't reach 7,000 games is graded whole and dropped from its tab if it's still too thin.

## Steps

**1. The games.** Every game Lichess published from January 2013 to August 2026. That's 8,130,696,420 games in 164 monthly files. [The Data](https://beyondtheboardchess.github.io/how-the-data-is-checked.html) lists every file by name with its fingerprint and Lichess's own count of its games.

**2. What was left out.**

- Correspondence games. One move can take days, so the game has no clear place in a player's order.
- Games with no result recorded.
- Games with no rating recorded.
- Arena and Swiss games.
- Players with fewer than 10 games.

**3. One timeline per player.** Every game becomes two rows, one for each player. Each player's games from all 164 months are joined into one timeline in the order the games started, so no streak is cut off at the end of a month. Names that differ only in capital letters are treated as one player.

**4. Streaks and the game after each one.** Draws are taken out of each timeline and every streak is counted at every length. For each streak I kept the game right after it. That game's record holds:

- its score
- both players' ratings on that game
- the break before it
- its year

**5. Expected.** Each player's games from each day are put in a random order and step 4 runs again on the shuffled order. For how often streaks happen that's done 20 times and the real order is compared with the average of the 20. For the game right after a streak it's done once.

**6. What the ratings predict.** The win rate at every rating gap, measured across all the games and checked against the real results gap by gap before any chart uses it.

**7. The tabs.** Every number is split by speed, by rating group and by both together. Each tab draws its own slice.

**8. Accuracy.** `Still counting: how many` games are drawn at random from the places in a streak the chart shows. Those are games 1, 2, 3, 5 and 10. The rest come from the same players' games outside a long streak. Each is graded move by move with Stockfish 19 looking 12 moves deep. Lichess's own accuracy formula turns the grades into an accuracy figure. My copy of that formula gives the same answers as Lichess's own 13 test examples.

**9. The numbers.** Each chart's numbers are added up from steps 4 to 8. Every one goes in the spreadsheet download with its chart, its tab and the count of games behind it. The download comes with the finished numbers.

## Checks

**The saved games match what Lichess published.** Every month's count matches Lichess's own count. Games rebuilt from the saved copy come back identical to the originals. [The Data](https://beyondtheboardchess.github.io/how-the-data-is-checked.html) shows the result month by month. `Still counting: the version of the games this study used`

**Every rule was tested on made-up players where the right answer is known.** Each rule has test cases on both sides of every edge. Some examples:

- a draw inside a streak
- a game at midnight
- a player right on the 10-game bar

**No game goes missing between steps.** At each step the games going in are counted against the games coming out.

**The tests catch real mistakes.** I broke the counting on purpose seven times, once at each step. A test caught every one.

**The real order against chance.** Streaks in the real order are compared with 20 separate random orders. The real count has to land outside every one of them before it's called more than chance. `Still counting: the result`

**The ratings' prediction matches real results.** The predicted win rate at each rating gap is checked against how often players really won at that gap.

**The full count reproduces the test run.** The program that ran all 164 months was run on the three test months first and compared with the test run. `Still counting: the result`

**Every number in the video checked before it's said.** `Still counting: the final check's result`

**Nobody has published this for Lichess.** There's no outside figure to compare these numbers with, for Lichess or any other site.

## Limits

**This can't see inside anyone's head.** Tilt and Hot Streak are names for a gap in the numbers. Draws come in streaks too. On the test months streaks of 6 or more draws happened 1.45 times as often as chance makes them. Nobody rage-draws. So part of what makes streaks run long isn't about feelings at all. `Still counting: the draw figure`

**A shorter stretch gives smaller gaps.** A day is the shortest stretch Expected uses. Shuffling within a sitting gives smaller gaps still, so every figure here is an upper bound.

**Losing makes the next game harder.** After losing, a player's rating drops faster than Lichess's pairing makes up for. So the next opponent is tougher relative to them. On the test months the ratings alone made two thirds to nine tenths of the extra long losing streaks. The How much of a losing streak is tilt? chart separates that step out. `Still counting: the share`

**Players stop playing.** A player who closes the laptop mid-streak ends the streak, so some streaks look shorter than the day felt.

**An account isn't always one person.** Lichess lets players rename their accounts. A renamed account looks like two players with a streak cut at the rename. Accounts can be shared or sold. Neither can be seen in the games.

**New accounts can't be spotted.** Lichess's files don't say how settled a player's rating is, so new accounts with swinging ratings are counted like everyone else.

**Times are to the second.** Two games that start in the same second have no set order.

**The break is at the latest.** Lichess doesn't record when a game ends, so every break is the shortest it could have been.

**Accuracy is a sample.** It covers `Still counting: how many` graded games out of the 8.1 billion. The engine looks 12 moves deep.

**This is Lichess only.** Nothing here describes Chess.com players. The Chess.com ranges on the rating tabs are conversions.

**Most of the games are recent.** 88% of them were played from January 2020 on, so an all-time figure is mostly a recent one.

**The charts describe groups of players.** They can't say what a break or a streak will do for any one player.
