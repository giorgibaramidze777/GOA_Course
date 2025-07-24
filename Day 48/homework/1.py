def mango(quantity, price):
    free = quantity // 3
    remainder = quantity - free
    return remainder * price