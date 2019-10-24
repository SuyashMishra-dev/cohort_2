print("Enter Limit: ")
limit = int(input())

print("Enter a number: ")
num = int(input())

sum = 0
count = 0

for i in range(0, limit):
    if i % num == 0:
        sum += i
        count += 1

print("Average is: ")
print(sum / count)

