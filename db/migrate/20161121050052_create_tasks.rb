class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :desc
      t.datetime :due
      t.boolean :complete
      t.datetime :completed_on
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
