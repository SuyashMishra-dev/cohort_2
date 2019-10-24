n1 = input()
n2 = input()
sum = 0
count = 0
for i in range(n1):
    if i % n2 == 0 and i > 0:
        # print(i)
        sum += i
        count += 1
print(sum / count)