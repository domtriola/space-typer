json.extract! @quote, :title, :body, :url, :image_url

json.userScores do
  json.array! @scores do |score|
    json.(score, :user_id, :wpm, :won, :created_at)
  end
end

json.highScores do
  json.array! @high_scores do |score|
    json.(score, :user_id, :wpm, :created_at)
  end
end
