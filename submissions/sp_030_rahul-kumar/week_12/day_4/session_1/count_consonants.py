n = raw_input()
count = 0
c = len(n)
total = 0
for x in n:
    if x == "a" or x == "e" or x == "i" or x == "o" or x == "u":
        count = count + 1
        # print(count)
total = c - count  
print(total)       