limit = input('limit')
num= input('value')
i=0
avg=0
sum=0
while(i<limit):
    if i%num==0:
        sum=sum+i
    i=i+1

print(sum/limit)    