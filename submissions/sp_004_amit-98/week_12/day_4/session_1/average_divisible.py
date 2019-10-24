print("Enter a Limit")
limit=int(input())
print("Enter divisible number")
divisible=int(input())
sumNo=0
avg=0
i=0
countNo=0
for i in range(0,limit):
    if i%divisible==0:
        sumNo+=i
        countNo=countNo+1
avg=sumNo/countNo;
print(avg)