data = str(input("Enter input string "))
string = ''
for i in data:
    if(i.isupper()) == True:
        string +=  (i.lower())
    elif(i.islower()) == True:
        string += (i.upper())
print(string)