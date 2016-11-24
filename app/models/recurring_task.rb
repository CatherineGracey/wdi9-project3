class RecurringTask < ApplicationRecord
  belongs_to :user
  belongs_to :company, optional: true
  belongs_to :job, optional: true
  belongs_to :task, optional: true
end
