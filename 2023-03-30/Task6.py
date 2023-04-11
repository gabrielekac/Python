# OOP:
# 6.Create a base class named Vehicle that has the following attributes: 
# make, model, and year. It should also have a method called get_info() that 
# returns a string with the vehicle's make, model, and year.
#  Then create two subclasses, Car and Truck, that inherit from Vehicle and
#  add additional attributes and methods specific to each type of vehicle.

class Vehicle:
	def __init__ (self, make, model,year):
		self.make = make
		self.model = model
		self.year = year
			
	def get_info (self):
		return "Vehicle is a {} model {} and i'ts {} year".format(self.make,self.model,self.year)

class Car (Vehicle):
    def __init__ (self, make, model, year, colour):
        super().__init__(make, model, year)
        self.colour = colour
        print("The car is {}, it's model is {}, it's from {} year and it's colour is {}.".format(self.make,self.model,self.year,self.colour))
    

class Truck (Vehicle):
    def __init__ (self, make, model, year, fuel):
        super().__init__(make, model, year)
        self.fuel = fuel
        print("The truck is {}, it's model is {}, i'ts from {} year and fuel type is {}.".format(self.make,self.model,self.year,self.fuel))


V1 = Car("Volkswaggen", "Passat", "2014", "gold")
T1 = Truck("Mercedes-Benz", "GLC", "2018", "Petrol")

V1.get_info()
T1.get_info()


class Truck(Vehicle):
    def __init__(self, make, model, year, payload_capacity):
        super().__init__(make, model, year)
        self.payload_capacity = payload_capacity

    def get_info(self):
        return f"{super().get_info()} - {self.payload_capacity} t payload capacity"


truck = Truck('Volvo', 'FH16', 2013, 500)
# print(truck.get_info())
car = Car('Toyota', 'Yaris', 2015, 4)
