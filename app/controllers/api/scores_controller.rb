class Api::ScoresController < ApplicationController
  def index
    # TODO: get recent high scores
  end

  def create
    score = Score.new(score_params)
    if score.save!
      render json: score
    end
  end

  private

  def score_params
    params.require(:score).permit(:wpm, :user_id, :quote_id)
  end
end
