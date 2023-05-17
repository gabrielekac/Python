# Task 10:Write a function that takes a tuple as a parameter and 
# returns a new tuple that has the first and last elements swapped.

my_tuple = ("my", "name", "is", "gabriele")

list_my_tuple=list(my_tuple)

list_my_tuple[0], list_my_tuple[-1]=list_my_tuple[-1], list_my_tuple[0]
new_tuple=tuple(list_my_tuple)
print(new_tuple)