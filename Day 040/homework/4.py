def calculator(x, y, op):
    if (type(x) == float or type(x) == int) and (type(y) == float or type(y) == int) and (op == '+'):
        return x + y
    elif (type(x) == float or type(x) == int) and (type(y) == float or type(y) == int) and (op == '-'):
        return x - y
    elif (type(x) == float or type(x) == int) and (type(y) == float or type(y) == int) and (op == '*'):
        return x * y
    elif (type(x) == float or type(x) == int) and (type(y) == float or type(y) == int) and (op == '/'):
        return x / y
    else:
        return "unknown value"