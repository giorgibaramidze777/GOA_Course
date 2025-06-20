def gg(n, m=0):
    return n * m
print(gg("sdf", 2))

def greet(f, v):
    x = f + v
    perimeter = 2 * x
    area = f * v
    return perimeter, area

perimeter, area = greet(100, 50)

# x = 150
# perimiter = 300
# area = 5000

print(f"Perimiter: {perimeter}, Area: {area}")