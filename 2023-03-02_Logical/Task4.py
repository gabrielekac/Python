# ---------Task 4:
# 4. Write a program that asks the user to enter a year and checks if it is a leap year. 
# A leap year is defined as a year that is divisible by 
# 4 but not by 100, or a year that is divisible by 400. 
# If the year is a leap year, print "Leap year : True", 
# otherwise print "Leap year : False".
# (task with a star, optional)

year=int(input("Enter a year:"))
result=year%4==0 and not year%100==0 or year%400==0
<<<<<<< HEAD:Task4.py

print("Leap year:"+str(result))
=======
print("Leap year:"+str(result))
>>>>>>> 2ca0530a9a7baf3b5a2ea1b3de9782a4b66f8dd5:2023-03-02/Task4.py
