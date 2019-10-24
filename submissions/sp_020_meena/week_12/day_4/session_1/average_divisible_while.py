limit = input("Enter a limit")
num = input("Enter a divisible number")
i =1
cnt =0
output = 0
avg = 0
while i<=limit:
    if i%num==0:
        output +=i
        cnt +=1
        print(cnt)
    i +=1
avg = output/cnt
print(avg)