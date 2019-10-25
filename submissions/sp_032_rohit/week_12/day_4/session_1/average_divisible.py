n = int(input("Enter Limit: "))
m = int(input("Enter Number: "))
sum = 0
num = 0
for i in range(1,n+1):
    if i%m==0:
        sum +=i
        num +=1
print(sum/num)