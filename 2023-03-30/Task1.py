# OOP: 
# 1.Create a class named Car that has the following attributes: make, model, and year. 
# It should also have a method called get_info() that returns a string 
# with the car's make, model, and year.

class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def get_info(self) -> str:
        return f"Make: {self.make}\nModel: {self.model}\nYear: {self.year}"
    

car = Car("Volswaggen","B7" ,2014)
print(car.get_info())