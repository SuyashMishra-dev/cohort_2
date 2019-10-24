A = [12,45,76,97,32]
B = [56,16,15,43,34,65]
trueCount = 0
falseCount = 0


for i in range(0,len(A)):
    for j in range(0,len(B)):
        if(A[i] == B[j]):
            trueCount += 1
        else:
            falseCount += 1
            
if trueCount > 0:
    print(True)
else:
    print(False)