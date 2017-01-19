## User Stats

![User Profile](../images/user_profile.png)

Each time a user completes a race their score for the quote is saved to the database. The score only contains a words per minute value, a boolean value for whether or not they won, and foreign keys for the user and quote it belongs to.

All of the statistics are calculated on the backend with SQL and/or Ruby and ActiveRecord before being sent to the front-end. I avoided using N+1 queries by retrieving all the information I needed in as few queries as possible.

#### Fetching the most recent scores and ordering by WPM. Includes user to avoid N+1 queries:
```ruby
@scores = Score.includes(:user).order('created_at DESC')
  .limit(10).sort { |x, y| y.wpm <=> x.wpm }
```

#### Fetching a random quote and its associated scores:
```ruby
@quote = Quote.order("RANDOM()").first
@scores = @quote.scores.where(user_id: current_user.id)
  .order('created_at DESC').limit(5)
@high_scores = @quote.scores.order('wpm DESC').limit(10)
```

#### Some queries were easier to do using custom SQL queries. The user stats are calculated with SQL:
```ruby
# Get total races, average WPM, and max WPM
user_stats = Score.find_by_sql([<<-SQL, user])
  SELECT
    COUNT(*) AS total_races,
    AVG(scores.wpm) AS avg_wpm,
    MAX(scores.wpm) AS max_wpm
  FROM
    scores
  WHERE
    scores.user_id = ?
SQL

# Get average WPM for the last ten races
avg_last_ten = Score.find_by_sql([<<-SQL, user])
  SELECT
    AVG(last_ten.wpm) AS avg
  FROM (
    SELECT
      *
    FROM
      scores
    WHERE
      user_id = ?
    ORDER BY
      created_at DESC
    LIMIT 10
  ) last_ten
SQL

# Extract values and query for total races won
user_stats = user_stats.first
avg_last_ten = avg_last_ten.first.avg
total_won = Score.where(user_id: user.id, won: true).count

@stats = {
  username: user.username,
  avg_wpm: user_stats.avg_wpm,
  avg_last_ten: avg_last_ten,
  max_wpm: user_stats.max_wpm,
  total_races: user_stats.total_races,
  total_won: total_won
}
```
