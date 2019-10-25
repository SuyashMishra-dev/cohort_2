inputString = raw_input()
splitChar = raw_input()
stringList = []
previous = 0

for i in range(len(inputString)):
    if inputString[i] == splitChar:
        stringList.append(inputString[previous:i])
        previous = i
        
stringList.append(inputString[previous+1:len(inputString)])
print(stringList)