lst = ["A", "B", "C", "B", "D"]

final_set = set()

for i in lst:
    if i not in final_set:
        final_set.add(i)

print(len(final_set))
