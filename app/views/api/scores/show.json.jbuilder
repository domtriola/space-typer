json.extract! @score, :user_id, :wpm, :won
json.created_at time_ago_in_words(@score.created_at)
