# I/O:
# 9.Write a Python program that reads a CSV file containing student grades, 
# calculates their average score, and writes the average to a new file.

with open("Students_Grades.csv","r") as f:
    students_grades = f.readlines()

averages = list()
for student_line in students_grades[1:]:
    columns = student_line.replace("\n","").split(";")
    name = columns[0]
    sum_grade = 0
    for grade in columns[1:]:
        sum_grade += int(grade)
    averages.append([name,sum_grade/(len(columns)-1)])

csv_output = students_grades[0].replace("\n","")
for student in averages:
    csv_output += "\n" + student[0] + ";" + str(student[1])

with open("Student_average.csv","w") as f:
    f.write(csv_output)
