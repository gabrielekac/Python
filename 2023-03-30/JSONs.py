import json

class Person:
    def __init__(self,name,lastname,age):
        self.name = name
        self.lastname = lastname
        self.age = age
    def __str__(self) -> str:
        return "Name : " + self.name + ",Last Name :" + self.lastname + ", Age : " + str(self.age)

# persons = [{
#     "name":"Gabriele",
#     "last_name":"Kacinskaite",
#     "age":25
# },
# {
#     "name":"Tomas",
#     "last_name":"Barys",
#     "age":25
# }]

# with open("Persons.json","w") as f:
#     json.dump({"persons":persons},f)


with open("Persons.json","r") as f:
    persons = json.load(f)
    # print(persons)
    # persons = f.read()
    # print(type(persons))
    f.close()

persons_objects = list()
for person in persons["persons"]:
    person_obj = Person(person["name"],person["last_name"],person["age"])
    print(person_obj)
    persons_objects.append(person_obj)