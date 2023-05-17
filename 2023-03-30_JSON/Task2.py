# OOP:
# 2.Create a class named Rectangle that has the following attributes: width and height.
# It should also have methods called area() and perimeter() that return the area 
# and perimeter of the rectangle, respectively.

class Rectangle:
    def __init__(self,width, height):
       self.width = width
       self.height = height

    def area(self):
       return self.width*self.height
    def perimeter(self):
       return (self.width+self.height)*2
    
width = 6
height = 7
re = Rectangle(width,height)

print("The area of the rectangle is", re.area())
print("The perimeter of the rectangle is", re.perimeter())