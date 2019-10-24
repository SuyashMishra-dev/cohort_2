string= "String"
reverse_string=""
for i in range(len(string),0,-1):
    reverse_string+=string[i-1]
print(reverse_string)