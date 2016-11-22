class CreateJobStatuses < ActiveRecord::Migration[5.0]
  def change
    create_table :job_statuses do |t|
      t.string :category

      t.timestamps
    end
  end
end
