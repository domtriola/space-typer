class CreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.integer :wpm, null: false

      t.timestamps null: false
    end

    add_reference :scores, :user, foreign_key: true, null: false, index: true
    add_reference :scores, :quote, foreign_key: true, null: false, index: true
  end
end
