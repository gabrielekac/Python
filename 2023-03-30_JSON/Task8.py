# I/O:
# 8.Write a Python program that reads a JSON file containing a list of dictionaries, 
# sorts the list by a specific key, and writes the sorted list back to the file.

import json
key = "name"
with open("Persons.json","r") as f:
    persons = json.load(f)["persons"]

persons.sort(key=lambda person:person[key])

with open("Persons.json","w") as f:
    json.dump({"persons":persons},f)