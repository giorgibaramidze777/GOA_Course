import math
import string
import time
def de(arr):
    ls = []
    for i in arr:
        if i % 2 == 0:
            ls.append(i)
    return ls
print(de([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

def dede(arr1):
    return sum(arr1) / sum(arr1) # ისე შეიძლება უბრალოდ return 1.0-ის დაწერვა
print(dede([1, 43]))

def dede1(n):
    return math.sqrt(n) if n % 2 == 0 else n * n
print(dede1(5))

def dede2(arr):
    result = []
    x = 0
    for i in arr:
        if x % 2 == 1 and i % 2 == 0:
            result.append(i)
        x += 1
    return result
print(dede2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

def dede3(x, y, o):
    return x + y if o == '+' else x - y if o == '-' else x * y if o == '*' else x / y if o == '/' else 'error'
print(dede3(5, 2, '+'))

def dede4(arr, s):
    res = []
    if s == 'even':
       for i in arr:
           if i % 2 == 0:
               res.append(i)
    elif s == 'odd':
       for i in arr:
           if i % 2 != 0:
               res.append(i)
    return res
print(dede4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'even'))

# ვერ ვაკეთებ 7-ს
def c(num):
    abc = "abcdefghijklmnopqrstuvwxyz"
    return abc[:num]

def impossible():
    text = "hello world"
    temp = ' '
    for ch in text:
        for i in string.printable:
            if i == ch or ch == temp:
                time.sleep(0.04)
                print(temp+i)
                temp += ch
                break
            else:
                time.sleep(0.04)
                print(temp+i)
impossible() # impossible level (:

def dede5(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True
print(dede5(5))