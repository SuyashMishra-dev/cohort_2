number = input()
total = 0
for x in number:
    if x % 2 == 0:
        total = total + x
    x +=1
print(total)