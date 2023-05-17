# Task 6: Write a function that takes a list of integers as a parameter 
# and returns the product of all the integers in the list.

def multiply(numbers):
    result = 1
    for i in numbers:
        result = result * i
    return result
numbers = [1,2,3,4]
print(multiply(numbers))