a = input()
b = input()
add = 0
i = 0
avg = 0
count = 0
for i in range(a):
    if i % b == 0:
        add+=i
        count = count+1
count = count - 1
avg = add/count
print(avg)    