set_1 = {1, 2, 100}
set_2 = {3, 4, 5}

isDisjoint = True

for i in set_1:
    for j in set_2:
        if i == j:
            isDisjoint = False

print(isDisjoint)
