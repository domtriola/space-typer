class Api::UsersController < ApplicationController
  def stats
    # TODO: get user with stats and scores
    user = User.find(params[:id])
    if user
      @scores = user.scores
      render :stats
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
end
