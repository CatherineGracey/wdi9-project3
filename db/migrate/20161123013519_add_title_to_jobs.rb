class AddTitleToJobs < ActiveRecord::Migration[5.0]
  def change
    add_column :jobs, :title, :string
    rename_column :jobs, :location, :located
  end
end
