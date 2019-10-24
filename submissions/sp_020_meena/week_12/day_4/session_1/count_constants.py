name =raw_input("enter input:")
vowles = "aeiou"
count = 0
for i in name:
    for j in vowles:
        if i==j:
            count +=0
            #count +=1
        else:
            count +=1
print(count)