print("Enter Limit: ")
limit = int(input())

print("Enter a number: ")
num = int(input())

i = 0
sum = 0
count = 0

while i < limit:
    if i % num == 0:
        sum += i
        count += 1
    i += 1

print("Average is: ")
print(sum / count)

