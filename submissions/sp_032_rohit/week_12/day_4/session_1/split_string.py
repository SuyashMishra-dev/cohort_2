string = raw_input()
n = raw_input()
arr = []
a = 0
i=0
while i<len(string):
    if string[i]==n:
        arr.append(string[a:i])
        a= i+1
    i+=1
arr.append(string[a:])
print(arr)