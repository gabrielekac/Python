# Task 5:Write a function that takes a list of integers 
# and a target sum as parameters and returns a list of two integers from
# the original list that add up to the target sum.

def IntegerTargetSum (l:list, TargetSum:int) -> list:
    for i in l:
        for j in l:
            if (i + j) == TargetSum:
                listForSum = [i, j]         
            else:
                continue
    return print("Integers", listForSum, "add up to the target sum of", TargetSum)

IntegerTargetSum([1,2,3,4,5,6], 7)