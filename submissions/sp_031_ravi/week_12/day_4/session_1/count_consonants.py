data = str(input("Enter input string "))
length = len(data)
count = 0
for i in data:
    if(i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u'):
        count += 1
print(length - count)