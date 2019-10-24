n1 = input()
n2 = input()
sum = 0
count = 0
i = 0
while i < n1:
    if i % n2 == 0 and i > 0:
        sum += i
        count += 1
    i += 1
print(sum / count)