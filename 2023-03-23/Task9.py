# Task 9:Write a function that takes a list of dictionaries as a parameter and
#  returns a new dictionary that contains the sum of the values for each key
#  in the original dictionaries.

dict1 = [{"one" : 2, "two" : 3, "three" : 5, "four" : 6},
            {"one" : 6, "two" : 7, "three" : 6, "four" : 3},
            {"one" : 7, "two" : 2, "three" : 11, "four" : 42}]
result = {}
for i in dict1:
    for k in i.keys():
        result[k] = result.get(k, 0) + i[k] 
print(result)