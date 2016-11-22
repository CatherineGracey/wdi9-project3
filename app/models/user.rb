class User < ApplicationRecord
  has_secure_password
  has_many :tasks, dependent: :destroy
  has_many :companies, dependent: :destroy
end
