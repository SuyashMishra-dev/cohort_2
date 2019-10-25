inputString = raw_input()
count = 0
length = len(inputString) - 1
# print(length)
i = 0
while i <= length:
    if inputString[i] == 'a' or inputString[i] == 'e' or inputString[i] == 'i' or inputString[i] == 'o' or inputString[i] == 'u':
        count += 1
    i += 1
print(count)