class CreateDateideas < ActiveRecord::Migration[5.2]
  def change
    create_table :dateideas do |t|
      t.text :body

      t.timestamps
    end
  end
end
