inputString = raw_input()
length = len(inputString)
counter = length - 1
outputString = ""
while counter >= 0:
    outputString = outputString + inputString[counter]
    counter -= 1
print(outputString)
