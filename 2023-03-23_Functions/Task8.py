# Task 8:Write a function that takes a dictionary as a parameter and 
# returns a list of all the keys in the dictionary that have an even value.

fruits = ("orange", "blackberry", "pear", "passionfruit", "dragonfruit",  "apple")
for fruit in fruits:
    if fruits.index(fruit) % 2 == 0:
        print(fruit)