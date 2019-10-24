set_1 = {1, 2, 3, 4, 8}
set_2 = {1, 8, 100}

final_set = set()

for i in set_1:
    if i not in set_2:
        final_set.add(i)

for i in set_2:
    if i not in set_1:
        final_set.add(i)

print(final_set)
