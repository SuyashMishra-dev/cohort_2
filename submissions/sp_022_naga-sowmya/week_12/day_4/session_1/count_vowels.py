li = ["masai"]
count = 0
string = str(li[0])
# print(string)

for i in string:
    if(i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u'):
        count = count + 1
print(count)