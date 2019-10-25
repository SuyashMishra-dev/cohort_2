print("Enter List: ")
lst = input().split(" ")

print("Char: ")
charac = input()

out = ""

for i in lst:
    out += i + charac

print(out)
