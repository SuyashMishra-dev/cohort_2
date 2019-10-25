name = raw_input("Please enter string to be reversed: ")
n = len(name)
i = n-1
output = ""
while i>=0:
    output = output + name[i]
    i-=1
print(output)