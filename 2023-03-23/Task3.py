# Task 3:Write a function that takes a string as a parameter and returns 
# True if the string is a palindrome and False otherwise


def palindrome(str):
    if str == str[::-1]:
        return print("True")
    else:
        return print("False")

str = str(input("Enter word:\n"))
palindrome(str)