class CreateMemes < ActiveRecord::Migration[5.1]
  def change
    create_table :memes do |t|
      t.text :text_top
      t.text :text_bottom
      t.string :image_url

      t.timestamps
    end
  end
end
