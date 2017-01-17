class Api::UsersController < ApplicationController
  def stats
    user = User.find(params[:id])
    if user
      user_stats = Score.find_by_sql([<<-SQL, user])
        SELECT
          COUNT(*) AS total_races,
          AVG(scores.wpm) AS avg_wpm,
          MAX(scores.wpm) AS max_wpm
        FROM
          scores
        WHERE
          scores.user_id = ?
      SQL

      total_won = Score.find_by_sql([<<-SQL, user])
        SELECT
          COUNT(*) AS total_won,
          AVG(scores.wpm) AS avg_wpm,
          MAX(scores.wpm) AS max_wpm
        FROM
          scores
        WHERE
          scores.user_id = ? AND scores.won = TRUE
      SQL

      avg_last_ten = Score.find_by_sql([<<-SQL, user])
        SELECT
          AVG(last_ten.wpm) AS avg
        FROM (
          SELECT
            *
          FROM
            scores
          WHERE
            user_id = ?
          ORDER BY
            created_at DESC
          LIMIT 10
        ) last_ten
      SQL

      user_stats = user_stats.first
      total_won = total_won.first.total_won
      avg_last_ten = avg_last_ten.first.avg

      @stats = {
        username: user.username,
        avg_wpm: user_stats.avg_wpm,
        avg_last_ten: avg_last_ten,
        max_wpm: user_stats.max_wpm,
        total_races: user_stats.total_races,
        total_won: total_won
      }

      render :stats
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
end
