limit = input('limit')
num= input('value')
sum=0
for i in range(limit+1):
    if i%num==0:
        sum+=i
print(sum/limit)        