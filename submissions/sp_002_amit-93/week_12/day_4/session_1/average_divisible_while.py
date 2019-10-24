user = int(input('how many: '))
total = 0
for i in range(user):
    numbers = float(input("enter any number"))
    total = total + numbers

avg = total/user
print(avg)    
