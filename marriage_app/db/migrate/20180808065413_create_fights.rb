class CreateFights < ActiveRecord::Migration[5.2]
  def change
    create_table :fights do |t|
      t.text :description
      t.text :reflection
      t.datetime :date
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
