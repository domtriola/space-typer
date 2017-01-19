json.array! @scores do |score|
  json.userId score.user.id
  json.username score.user.username
  json.wpm score.wpm
  json.created_at time_ago_in_words(score.created_at)
end
