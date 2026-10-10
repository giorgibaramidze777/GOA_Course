def even_or_odd(number):
    x = number % 2 == 0
    
    if x == 0:
        return "Odd"
    else:
        return "Even"