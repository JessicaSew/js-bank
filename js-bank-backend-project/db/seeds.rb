User.destroy_all
Account.destroy_all

User.create(name: "jess123", password:"flatiron")
User.create(name: "dawn456", password:"dawn")

Account.create(name: "Checking", account_number: 0202021, balance: 100, user_id: User.all.sample.id)
Account.create(name: "Savings", account_number: 0202021, balance: 500, user_id: User.all.sample.id)
Account.create(name: "Checking", account_number: 0204671, balance: 1050, user_id: User.all.sample.id)
Account.create(name: "Savings", account_number: 0204671, balance: 340, user_id: User.all.sample.id)


