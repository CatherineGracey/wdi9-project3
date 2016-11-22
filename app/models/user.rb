class User < ApplicationRecord
  has_secure_password
  has_many :companies, dependent: :destroy
  has_many :jobs, dependent: :destroy
  has_many :tasks, dependent: :destroy
end
