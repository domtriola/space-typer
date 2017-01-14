class Api::QuotesController < ApplicationController
  def quote
    @quote = Quote.order("RANDOM()").first
    @scores = @quote.scores.where(user_id: current_user.id)
      .order('created_at DESC').limit(5)
    @high_scores = @quote.scores.order('wpm DESC').limit(10)

    render :show
  end
end
