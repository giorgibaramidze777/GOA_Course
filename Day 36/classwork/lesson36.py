def h(x, d):
   for i in range(d):
      print(x)
      
h("hello", 5)

def j(t, GOA):
    if t == True:
       print(GOA)
    else:
      print(" ")
j(True, "kkk")

def n(m, M):
    print(m[0:M])

n([1,2,3,4,5,6,7,8,9,10], 5)



def p(q):
    print(q*q*q)

p(5)

def uhehe(t):
    is_prime = True
    if t < 2:
       print(False)
    else:
       for i in range(2, t):
          if t % i == 0:
            is_prime = False
            break
          else:
             continue
    print(is_prime)  

uhehe(7)