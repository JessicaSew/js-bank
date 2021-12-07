class AccountSerializer < ActiveModel::Serializer
  attributes :id, :name, :account_number, :balance

  belongs_to :user
end
