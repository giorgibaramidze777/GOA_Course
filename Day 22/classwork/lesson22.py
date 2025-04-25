# 1
num = int(input("enter a number: "))
for i in range(num + 1):
    print(i)

# 2
num1 = int(input("enter a number: "))
num2 = 0
for a in range (num1):
    num2 += a
    print("equal:", num2)

# 3
num3 = int(input("enter a number: "))
for s in range(0, num3, 3):
    print(s)

# 4
Num4 = int(input("enter a number: "))
Num5 = 1
for d in range(1, Num4, 4):
    Num5 = Num5 * d
    print("equal:", Num5)

# 5(boss level)
nUm4 = int(input("enter a number: "))
num5 = int(input("enter a number: "))
for d in range(nUm4, num5 + 1, 2):
    print(d)

# 6 (while loop)
Str = input("enter guram: ")
while Str != "guram":
    print("not guram")
    Str = input("enter guram: ")

if Str == "Guram" or Str == "GURAM" or Str == "გურამ" or Str == "guram":
    print("you type guram") 

# 7
num6 = int(input("enter a negative number: "))
while num6 >= 0:
    print("not negative")
    num6 = int(input("enter a negative number: "))
if num6 < 0:
    print("it's negative")
    
# 8 (BOSS LEVEL) ვერ გავაკეთე
pin=int(input("enter pin: "))

realpincode = 9877

count=0

while pin != realpincode:
    pin=int(input("enter pin: "))
    count += 1
print("მცდელობის რაოდენობა:" , count)