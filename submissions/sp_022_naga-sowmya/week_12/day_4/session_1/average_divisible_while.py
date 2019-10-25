limit = input('Enter Limit: ')
number = input("Enter Number: ")
sum = 0
i=0

while i<=limit:
    if i % number == 0:
        sum = sum + i
    i = i + 1
print(sum/limit)