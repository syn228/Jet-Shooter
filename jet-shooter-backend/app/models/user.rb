class User < ApplicationRecord
    has_many :games
    has_secure_password
    validates :username, uniqueness: true, presence: true
    validates :password, presence: true
end 
