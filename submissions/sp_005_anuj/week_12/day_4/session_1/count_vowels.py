string = "vowel is not consonant"
count = 0

for i in range(0,len(string)):

    if(string[i]=='a' or string[i]=='e' or string[i]=='i' or string[i]=='o' or string[i]=='u'): 

        count = count+1

print(count)