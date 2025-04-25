# 1
num1 = int(input("enter a number: "))
for i in range(num1 + 1):
    print(i)
# 2
num1 = int(input("enter a number: "))
num2 = 0
for s in range (num1):
    num2 += s
    print("equal:", num2)
# 3
num3 = int(input("enter a number: "))

for a in range(0, num3 + 1, 3):
    print(a)
# 4
num4 = int(input("enter a number: "))
num5 = 1
for d in range(1, num4, 4):
    num5 = num5 * d
    print("equal:", num5)
# 5(boss level)
num4 = int(input("enter a number: "))
num5 = int(input("enter a number: "))
for e in range(num4, num5 + 1, 2):
    print(e)
# 6 (BOSS LEVEL)
guram = input("enter guram: ")
while guram != "guram":
    print("not guram")
    guram = input("enter guram: ")

if guram == "guram":
    print("you type guram") 
# 7
num6 = int(input("enter a negative number: "))
while num6 >= 0:
    print("not negative")
    num6 = int(input("enter a negative number: "))
if num6 < 0:
    print("it's negative")
# 8
num7 = int(input("enter 5: "))
while num7 != 5:
    print("not 5")
    num7 = int(input("enter 5: "))
if num7 == 5:
    print("Guram teacher")
# 9 (BOSS LEVEL)
pincode=int(input("enter pin: "))

real = 9877

counter=0

while pincode != real:
    pincode=int(input("enter pin: "))
    counter += 1
print("you tried:" , counter)