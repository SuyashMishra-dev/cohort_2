str ="ashish"
count=0;
for i in range(len(str)):
    if(str[i]=="a" or str[i]=="e" or str[i]=="i" or str[i]=="o" or str[i]=="u"):
        count=count+1

print(len(str)-count)