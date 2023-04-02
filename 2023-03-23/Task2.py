# Task 2:Write a function that takes a string as a parameter 
# and returns the number of vowels (aeiou) in the string.
# Hint: you can use given_character in "aeiou"

def CountingVowels(str):
    count = 0
    vowels = set("aeiou")
    for letter in str:
        if letter in vowels:
            count += 1
    
    print("Number of vowels in the text:", count)

str = str(input("Enter text:\n")) 
CountingVowels(str)
