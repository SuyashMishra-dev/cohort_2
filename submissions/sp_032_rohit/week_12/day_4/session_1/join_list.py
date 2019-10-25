string = raw_input()
n = raw_input()
output = ""

for i in string:
    if i == ',':
        output = output + n
    else:
        output = output + i

print(output)