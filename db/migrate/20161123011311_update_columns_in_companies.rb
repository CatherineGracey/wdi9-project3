class UpdateColumnsInCompanies < ActiveRecord::Migration[5.0]
  def change
    rename_column :companies, :type, :focus
  end
end
