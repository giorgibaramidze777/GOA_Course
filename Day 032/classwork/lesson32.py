# .lower() .upper() .capitalize() .count() .replace() .title() . find()


I = "HELLO"

print(I.lower())

i = "hello"
print(i.upper())

print(i.capitalize())

print(i.count("l"))

print(i.replace("l", "asdasdasdasd"))

print(i.title())

s = "SOME TEXT"
S = "some text"
t = "some Text"
T = "Some text"

print(s.lower())
print(S.upper())
print(t.capitalize())
print(T.replace("Some text", "b"))

print(s.find("S"))

LLL = ["aleqsi", "aleko", "tornike", "giorgi", "tamazi"]
LLL[0] = LLL[0].upper()
LLL[1] = LLL[1].lower()
print(LLL[0])
LLL[3] = (LLL[3].replace("g", "k"))
print(LLL[2].find("n"))
LLL[4] = (LLL[4].title())