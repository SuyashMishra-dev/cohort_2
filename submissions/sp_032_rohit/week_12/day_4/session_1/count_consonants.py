name = raw_input()
output=len(name)
for i in name:
    if i=="a" or i=="e" or i=="i" or i=="o" or i=="u":
        output -= 1
print(output)