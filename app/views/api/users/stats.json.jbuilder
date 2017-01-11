@scores.each do |score|
  json.set! score.id do
    json.extract! score, :wpm
  end
end
