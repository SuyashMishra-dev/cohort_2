name = raw_input()
output = ""
for i in range(len(name), 0, -1):
    output = output + name[i-1]
print(output)
