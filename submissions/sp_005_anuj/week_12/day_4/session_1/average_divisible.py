print("Enter Limit")
num1 = int(input())
print("Enter Divisible")
num2 = int(input())
sum = 0
avg = 0
i = 0
count = 0
while i <= num1:
    if i != 0 and i % num2  == 0:
        sum = sum + i
        count = count + 1
    i = i + 1
avg = sum / count
print(avg)