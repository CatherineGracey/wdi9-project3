class Job < ApplicationRecord
  belongs_to :job_status, optional: true
  belongs_to :company, optional: true
  belongs_to :user
  has_many :tasks
end
