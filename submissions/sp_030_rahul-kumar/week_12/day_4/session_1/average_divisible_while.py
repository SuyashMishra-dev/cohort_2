a = input()
b = input()
add = 0
i = 0
avg = 0
count = 0
while(i < a):
    if i % b == 0:
        add += i
        count = count + 1
    i = i+1
count = count-1    
print(add/count)

