# ---------Task 1:
# Create a program that asks the user to enter their age and whether or not they have a driver's license. 
# If the user is at least 18 years old and has a driver's license, the output should be as follows
# "You are able to drive : True
# If not, then
# "You are able to drive : False
UserAge=int(input('Please enter your age'))
UserLicense=input('Do you have a driver license?')
result=(UserAge >=18 and UserLicense=='yes')
print("You are able to drive:"+str(result))

# ---------Task 2:
# (Explore some String functions).
# Create a program that asks the user for a password and checks if it meets the following criteria: 
# at least 8 characters long
# If the password meets all of these criteria, print "Password accepted : True", 
# otherwise print "Password accepted : False".

UserPassword=input("Please enter your password")
PasswordLenght=len(password)>=8
print("Password accepted:"+str(PasswordLenght))