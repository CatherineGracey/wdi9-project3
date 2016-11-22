class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :website
      t.text :pros
      t.text :cons
      t.string :size
      t.string :type
      t.string :industry
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
