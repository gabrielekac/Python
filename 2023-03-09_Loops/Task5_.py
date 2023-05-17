# Write a program that takes an integer as input 
# and prints out whether that integer is prime or not

num = int(input("Enter a number (integer) : "))
if num == 1:
  print("Integer is not a prime number")
elif num > 1:
    for i in range (2, num):
        if (num % i) == 0:
            print("Integer is not a prime number")
            break
    else:
            print("Integer is a prime number")