json.extract! @quote, :id, :title, :body, :url, :image_url

json.userScores do
  json.array! @scores do |score|
    json.(score, :wpm, :created_at)
    json.username User.find(score.user_id).username
  end
end

json.highScores do
  json.array! @high_scores do |score|
    json.(score, :wpm, :created_at)
    json.username User.find(score.user_id).username
  end
end
