# ---------Task 2:
# (Explore some String functions).
# Create a program that asks the user for a password and checks if it meets the following criteria: 
# at least 8 characters long
# If the password meets all of these criteria, print "Password accepted : True", 
# otherwise print "Password accepted : False".

UserPassword=input("Please enter your password:")
PasswordLenght=len(UserPassword)>=8

print("Password accepted:"+str(PasswordLenght))