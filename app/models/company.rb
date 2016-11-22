class Company < ApplicationRecord
  belongs_to :user
  has_many :jobs
  has_many :tasks
end
