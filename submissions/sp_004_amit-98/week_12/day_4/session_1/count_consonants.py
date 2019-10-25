string="amitkumar"
countConst=0
countVowel=0;
for i in range(0,len(string)):
    if(string[i]=='a' or string[i]=='e' or string[i]=='i' or string[i]=='o' or string[i]=='u'): 
        countVowel=countVowel+1
    else:
        countConst=countConst+1
print(countConst)
