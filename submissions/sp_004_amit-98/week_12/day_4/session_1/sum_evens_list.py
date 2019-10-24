print("Enter a Limit")
limit=int(input())
sumEven=0
for i in range(0,limit+1):
    if i%2==0:
        sumEven+=i
print(sumEven)