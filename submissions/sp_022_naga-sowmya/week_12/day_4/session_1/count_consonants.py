li = ["masai"]
count = 0
string = str(li[0])
# print(string)

for i in string:
    if(i != 'a' and i != 'e' and i != 'i' and i != 'o' and i != 'u'):
        count = count + 1
print(count)