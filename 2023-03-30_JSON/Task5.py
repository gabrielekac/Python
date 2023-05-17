# OOP:
# 5.Create a class named Animal that has the following attributes: name and species. 
# It should also have a method called speak() that returns a string with the 
# animal's sound.

class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def speak(self, sound):
        return f'The sound of the animal {self.name} is {sound}'

Anim1=Animal("Dog", "Portuguese water dog")
Anim2=Animal("Cat", "Oriental shorthair")

print(Anim1.speak("au au"))
print(Anim2.speak("miau miau"))