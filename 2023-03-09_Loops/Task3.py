# Write a program that takes an 
# integer as input and prints out all the factors of that integer.

num=int(input("Enter an integer number"))

print("Factors of", num, "are:")
for i in range(1, num+1):
    if num%1==0:
        print(i)
