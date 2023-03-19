# Write the program to sort the list (without using sort function). 
# You can implement any algorithm

list_1 = ["b", "a", "c", "z", "s", "r", "l", "o"]
list_sorted = []

while list_1:
    min = list_1[0]  
    for x in list_1: 
        if x < min:
            min = x
    list_sorted.append(min)
    list_1.remove(min)    

print(list_sorted)
