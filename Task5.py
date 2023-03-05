# ---------Task 5:
# 5.Create the program which asks to enter the date (day, month, year). 
# If the date is valid print : "Date valid : True" else "Date valid : False" 
# Date interval From 01.01.0000 till 31.12.9999

import datetime
Date = input("Enter the date in format: day, month, year : ")
day, month, year = Date.split(",")
isValidDate = True
try:
    datetime.datetime(int(year), int(month), int(day))
except ValueError:
    isValidDate = False

if(isValidDate):
    print("Date valid : True")
else:
    print("Date valid : False")

