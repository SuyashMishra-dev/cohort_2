marks = [2,4,7,8,8,10,12]
n = len(marks)
#print(n)
output = 0
for i in range(0,n):
    if marks[i]%2==0:
        output +=marks[i]
print(output)