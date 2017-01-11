class CreateQuotes < ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.string :url, null: false
      t.string :image_url, null: false

      t.timestamps null: false
    end

    add_index :quotes, :body, unique: true
  end
end
