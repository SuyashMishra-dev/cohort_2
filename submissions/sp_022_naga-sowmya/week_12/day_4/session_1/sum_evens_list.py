li = [1,2,3,4,5,6,7,8,9]
sum = 0
# print(li)

for i in li:
    if i % 2 == 0:
        sum = sum + i
    i = i + 1
print(sum)