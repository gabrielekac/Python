# OOP:
# 4.Create a class named Person that has the following attributes: name, age, and address. 
# It should also have a method called get_info() that returns a string with the 
# person's name, age, and address.

class Person:
    def __init__(self, name, age, address ):
        self.name = name
        self.age = age
        self.address = address

    def get_info(self):
        return f'The person name is {self.name}, she is {self.age} years old and lives in {self.address}'

pers1=Person("Gabriele", 26, "Siauliai")
pers2=Person("Tomas", 26, "Siauliai")

print(pers1.get_info())
print(pers2.get_info())
