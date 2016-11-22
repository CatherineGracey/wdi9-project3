class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.references :user, foreign_key: true
      t.references :job_status, foreign_key: true
      t.references :company, foreign_key: true
      t.text :pros
      t.text :cons
      t.datetime :date_applied
      t.string :contact_name
      t.string :contact_phone
      t.string :contact_email
      t.string :location
      t.string :salary
      t.text :notes

      t.timestamps
    end
  end
end
