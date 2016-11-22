class Job < ApplicationRecord
  belongs_to :job_status
  belongs_to :company
  belongs_to :user
  has_many :tasks
end
