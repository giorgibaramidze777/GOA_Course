# 2)
nums = [1, 2.5, 3, 4.7, 10, 11.11, 6, 8.0, "bla", True]
floats = list(filter(lambda x: type(x) == float, nums))
print(floats)

# 3)
names = ["ana", "giorgi", "nino", "ata", "aba", "dato", "bob"]
pali = list(filter(lambda n: n == n[::-1], names))
print(pali)

# 4)
names2 = ["ana", "giorgi", "axtona", "nana", "anamaria", "luka"]
res = list(filter(lambda n: n.startswith("a") and n.endswith("a"), names2))
print(res)

# 5)
mix = ["ana", 3, "giorgi", 4, "nino", 7, "dato", 8]
filtered = []
for i in range(len(mix)):
    if (i % 2 == 1 and type(mix[i]) == str) or (type(mix[i]) == int and mix[i] % 2 == 1):
        filtered.append(mix[i])
print(filtered)

# 6)
numbers = [10, 11, 12, 13, 14, 15, 16]
even_index = [numbers[i] for i in range(len(numbers)) if i % 2 == 0]
print(even_index)

# 7)
# JS-ში იგივეა map და filter, უბრალოდ სხვანაირად იწერება
# Python: map(func, list) / filter(func, list)
# JS: arr.map(func) / arr.filter(func)
