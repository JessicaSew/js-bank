class User < ApplicationRecord
    
    has_many :accounts
    has_secure_password
    
    validates :name, presence: true, uniqueness: true
end
