class CreateRecurringTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :recurring_tasks do |t|
      t.string :title #Task name
      t.text :desc #Task description
      t.datetime :firstdue #Date user sets that the task is first due
      t.integer :frequency #Frequency with which the task should be generated
      t.integer :prior #Amount of time between when the task is generated and due next
      t.references :task, foreign_key: true
      t.references :user, foreign_key: true
      t.references :company, foreign_key: true
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
