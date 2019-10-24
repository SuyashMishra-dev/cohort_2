set_1 = {1, 2}
set_2 = {1, 1, 3, 4, 5}

isSubset = True

for i in set_1:
    if i not in set_2:
        isSubset = False

print(isSubset)
