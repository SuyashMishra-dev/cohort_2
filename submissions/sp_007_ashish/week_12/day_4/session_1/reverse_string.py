str = raw_input('Input String')
l = len(str)-1
revstr=''
for i in range(l,-1,-1):
     revstr+=(str[i])
print(revstr)