# OOP:
# 3. Create a class named BankAccount that has the following attributes: 
# account_number, balance, and owner_name. 
# It should also have methods called deposit() and withdraw() that update the balance
#  accordingly.

class BankAccount:
   def __init__(self,account_number,balance,owner_name):
      self.account_number = account_number
      self.balance = balance
      self.owner_name = owner_name

   def deposit(self, dep):
      self.balance = self.balance + dep

   def withdraw(self, w):
          if(self.balance < w):
            print("You don't have enough funds")
          else:
            self.balance = self.balance - w

            print("Account number :" , self.account_number)
            print("Account owner :" , self.owner_name)
            print("Account balance :" , self.balance , " EUR")

myAccount = BankAccount("LT15AHHA5564123412345",1100,"Gabi Kac")
myAccount.deposit(100)
myAccount.withdraw(600)