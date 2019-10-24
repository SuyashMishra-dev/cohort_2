listOfNumbers = input()
sumEven = 0
i = 0
while i < len(listOfNumbers):
    if(listOfNumbers[i] % 2 == 0):
        sumEven += listOfNumbers[i]
    i += 1
print(sumEven)