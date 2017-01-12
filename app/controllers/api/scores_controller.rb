class Api::ScoresController < ApplicationController
  def index
    @scores = Score.order('created_at DESC', :wpm).limit(10)
      .sort { |x, y| y.wpm <=> x.wpm }
  end

  def create
    @score = Score.new(score_params)
    if @score.save!
      render :show
    end
  end

  private

  def score_params
    params.require(:score).permit(:wpm, :won, :user_id, :quote_id)
  end
end
