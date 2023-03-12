# Create calculator:
# Ask user to provide 2 numbers and one operation to be performed (*,/,+.- or %). 
# If the operation provided does not match one of these, the program should print 
# "Operation provided isn't valid, please,try again" - in this case, the program should
# ask for the operation to be provided again.

number1 = int(input("Enter number1 : "))
number2 = int(input("Enter number2 : "))
print("Select operation:") 
print("1 = *")
print("2 = /")
print("3 = +")
print("4 = -")
print("5 = %")
op = input("Enter operation (1/2/3/4/5):")
while True:
  if op == "1":
    print(number1, "*", number2, "=", number1*number2)
    break
  elif op == "2":
    print(number1, "/", number2, "=", number1/number2)  
    break
  elif op == "3":
    print(number1, "+", number2, "=", number1+number2)
    break
  elif op == "4":
    print(number1, "-", number2, "=", number1-number2)
    break
  elif op == "5":
    print(number1, "%", number2, "=", number1%number2) 
    break
  else:
    print("Operation provided isn't valid, please,try again") 
    
    op = input("Enter operation (1/2/3/4/5) :")
 