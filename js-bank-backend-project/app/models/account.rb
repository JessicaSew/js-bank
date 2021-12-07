class Account < ApplicationRecord
    belongs_to :user

#  validates: :name, :account_number, :balance, presence: true
end
