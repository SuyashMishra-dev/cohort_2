set_1 = {1, 2, 3, 4, 5}
set_2 = {1, 8}

isSuper = True

for i in set_2:
    if i not in set_1:
        isSuper = False

print(isSuper)
