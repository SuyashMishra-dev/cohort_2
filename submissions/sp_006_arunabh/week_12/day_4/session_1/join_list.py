inputList = raw_input()
joiningChar = raw_input()
outputString = ""

for i in range(0, len(inputList)):
    # print(inputList[i])
    # if i == len(inputList)-1:
    #     outputString = outputString + inputList[i]
    # else:
    #     outputString = outputString + inputList[i] + joiningChar
    if inputList[i] == ',':
        outputString = outputString + joiningChar
    else:
        outputString = outputString + inputList[i]

print(outputString)