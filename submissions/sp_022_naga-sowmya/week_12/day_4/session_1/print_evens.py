target = int(input("Enter target: "))
num = 0

for i in range(target+1):
    if num % 2 == 0: 
        print(num)
    num = num + 1