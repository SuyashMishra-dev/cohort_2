alphabets = raw_input()
count = 0
for x in alphabets:
    if not x == "a" or x == "e" or x == "i" or x == "o" or x == "u" :
        count +=1
print(count)