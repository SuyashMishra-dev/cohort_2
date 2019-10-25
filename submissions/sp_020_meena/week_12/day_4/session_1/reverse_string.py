name = "Meena"
output=""
length = len(name)
for i in range(length,0,-1):
    output += name[i-1]
print(output)