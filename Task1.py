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
