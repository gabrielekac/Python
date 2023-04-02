# Task 11:Write a function that takes a set as a parameter and 
# returns a new set that contains only the elements that are not divisible by 3.

def AreNotDivisibleSet(set1:set):
    newset = set()
    for element in set1:
        if element % 3 == 0:
            continue
        else: newset.add(element)
    return newset

setInput = {11,13,14,22,28,33,34,56,65,72}
print(AreNotDivisibleSet(setInput))