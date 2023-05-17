# 1)Ask the user to enter the text and a letter. 
# Count how many occurrences of the letter provided. 
# 1.1) Based on the task 1, count the occurrences of each 
# character in the text provided and display them in the output.

text = input('Please enter a text: \n')
letter = input('Please enter a letter: \n')
result = text.count(letter)
print("There are {} occurences of requested letter {} ".format(result, letter))

lst, counts = [], []
for charx in text:
    if charx in lst:
        continue
    else:
        lst.append(charx)
        count = text.count(charx)
        counts.append(count)

for i in range(len(lst)):
    print("There are {} occurences of letter {} ".format(counts[i], lst[i]))