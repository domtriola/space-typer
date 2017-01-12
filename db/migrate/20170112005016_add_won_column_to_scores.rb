class AddWonColumnToScores < ActiveRecord::Migration
  def change
    add_column :scores, :won, :boolean, null: false
  end
end
