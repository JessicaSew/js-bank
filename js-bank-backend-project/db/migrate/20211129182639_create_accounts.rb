class CreateAccounts < ActiveRecord::Migration[6.1]
  def change
    create_table :accounts do |t|
      t.string :name
      t.integer :account_number
      t.integer :balance
      t.timestamps
    end
  end
end
