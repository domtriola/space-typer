json.extract! @quote, :id, :title, :body, :url, :image_url

json.userScores do
  json.array! @scores do |score|
    json.(score, :wpm)
    json.created_at time_ago_in_words(score.created_at)
  end
end

json.highScores do
  json.array! @high_scores do |score|
    json.(score, :wpm)
    json.userId score.user_id
    json.created_at time_ago_in_words(score.created_at)
    json.username User.find(score.user_id).username
  end
end
