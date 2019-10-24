print("Enter String: ")
string = input()

print("Enter Character: ")
charac = input()

lst = []
temp = ""

for i in string:
    temp += i
    if i is charac:
        lst.append(temp)
        temp = ""

print(lst)
