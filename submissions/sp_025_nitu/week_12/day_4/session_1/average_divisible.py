value=input()
n1= input()
# len(n)
n=0
sum=0
i=0
while i < value :
    if i % n1  == 0:
        sum+=i
        n+=1
    i=i+1
print(sum/n)