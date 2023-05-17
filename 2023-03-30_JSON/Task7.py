# OOP:
# 7.Create a base class named Person that has the following attributes: 
# name, age, and address. It should also have a method called get_info() that 
# returns a string with the person's name, age, and address. 
# Then create two subclasses, Student and Teacher, that inherit from Person and 
# add additional attributes and methods specific to each role.

class Person:
    def __init__(self, name, age, address ):
        self.name = name
        self.age = age
        self.address = address

    def get_info(self):
        return f'Persons name is {self.name}, she is {self.age} years old and lives in {self.address}'

class Student(Person):
    def __init__(self, name, age, address, grade, program):
        super().__init__(name, age, address)
        self.grade = grade
        self.program = program

    def student_info(self):
        return f'Student {self.name} is in {self.grade} grade and studies {self.program}'

class Teacher(Person):
    def __init__(self, name, age, address, degree, subject):
        super().__init__(name, age, address)
        self.degree = degree
        self.subject = subject

    def teacher_info(self):
        return f'Teacher {self.name} has a {self.degree} degree and teaches {self.subject}'

stud1=Student("Gabriele", 26, "Siauliai", 3, "Bioengineering")
teach1=Teacher("Ruta", 53, "Vilnius", "Professor", "Bioengineering")

print(stud1.student_info())
print(teach1.teacher_info())