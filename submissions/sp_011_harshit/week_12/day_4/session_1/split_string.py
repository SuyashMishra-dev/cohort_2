name = "bcadabcdabcd"
splitch = "a"
newar = []
newstr =''
for it in name:
    
    
    if not(it == splitch):
        newstr = newstr + it
        
    else :
        newar.append(newstr)
        newstr = ''
    
print(newar)