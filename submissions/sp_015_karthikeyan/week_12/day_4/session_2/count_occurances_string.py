inp = input()

dct = {}

for i in inp:
    if i not in dct:
        dct[i] = 1
    elif i in dct:
        x = dct[i] + 1
        dct[i] = x

for key, val in dct.items():
    print(key, val)

