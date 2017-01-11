class Api::QuotesController < ApplicationController
  def quote
    @quote = Quote.order("RANDOM()").first
    render :show
  end
end
