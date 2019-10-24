inputString = raw_input()
count = 0
i = 0

while i < len(inputString):
    if inputString[i] != 'a' and inputString[i] != 'e' and inputString[i] != 'i' and inputString[i] != 'o' and inputString[i] != 'u':
        count += 1
    i += 1
print(count)