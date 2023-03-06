# ---------Task 4:
# 4. Write a program that asks the user to enter a year and checks if it is a leap year. 
# A leap year is defined as a year that is divisible by 
# 4 but not by 100, or a year that is divisible by 400. 
# If the year is a leap year, print "Leap year : True", 
# otherwise print "Leap year : False".
# (task with a star, optional)

year=int(input("Enter a year:"))
result=year%4==0 and not year%100==0 or year%400==0

print("Leap year:"+str(result))