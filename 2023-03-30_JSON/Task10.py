# I/O:
# 10.Write a Python program that reads a CSV file containing student 
# grades and writes a new CSV file with the grades sorted by student name.

import csv

lines = list()
with open("Students_Grades.csv","r") as csvfile:
    students_grades_csv = csv.reader(csvfile,delimiter=";")
    for student in students_grades_csv:
        lines.append(student)

student_grades = lines[1:]
student_grades.sort(key= lambda student:student[0])


with open("Students_Grades.csv","w",newline="") as csvfile:
    writer = csv.writer(csvfile,delimiter=";")
    writer.writerow(lines[0])
    writer.writerows(student_grades)

