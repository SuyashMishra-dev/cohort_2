n = int(input("Enter Limit: "))
m = int(input("Enter Number: "))
sum = 0
num = 0
i=1
while i<=n:
    if i%m==0:
        sum +=i
        num +=1
    i += 1
print(sum/num)