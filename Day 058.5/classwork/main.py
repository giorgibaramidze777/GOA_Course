st = ["hi", "konichiwa", "privet", "gamarjoba", "nihao"]

fl = list(filter(lambda ls: len(ls) > 5, st))
print(fl)

rand = [True, "hello world", "hi", 7, 0.5]

flit = list(filter(lambda arr: type(arr) == str, rand))
print(flit)

rand_n = [4, 5, 8, 1, 3, 9]

m = list(map(lambda num: num*2, rand_n))
print(m)

# points = [["aleksandre", 90] ["giorgi", 100] ["elguja", 1]]

# print(list(filter(lambda n: n ))) vera

names = ["aleqsandre", "giorgi", "deme", "aleko"]

print(list(filter(lambda name: name[0] == "a", names)))