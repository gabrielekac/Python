# Task 4:Write a function that takes a list of integers as a parameter 
# and returns a list of only the even integers in the original list

def EvenIntegers (l:list):
    newlist = []
    for integer in l:
        if (integer % 2) == 0:
            newlist.append(integer)
        else:
            continue
    return print(newlist)

EvenIntegers([11,22,33,34,45,96])
EvenIntegers([101,115,211,526,813])