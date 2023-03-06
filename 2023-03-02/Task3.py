# ---------Task 3:
# 3. Write a program that asks the user to enter two integers 
# and checks if they are both even. 
# If they are, print "Both numbers are even : True", 
# otherwise print "Both numbers are even : False".
# If at least one is even print "At least one number is even : True", 
# else "At least one number is even : False".
# Hint : use modulo operator % here

int1=int(input("Enter random number:"))
int2=int(input("Enter other random number:"))

result= int1%2==0 and int2%2==0
print("Entered numbers are even:"+str(result))

result=int1%2==0 or int2%2==0
print("At least one number is even:"+str(result))
