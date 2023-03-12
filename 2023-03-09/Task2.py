# 2)Write a program that prints out the numbers from 1 to 100. 
# But for multiples of three, print "Fizz" instead of the number 
# and for multiples of five, print "Buzz". 
# For numbers that are multiples of both three and five, print "FizzBuzz".

for num in range (1,101):
    if num%3==0 and num%5==0:
        print("FizzBuzz")
    elif num%3==0:
        print("Fizz")
    elif num%5==0:
        print("Buzz")
    else:
        print(num)