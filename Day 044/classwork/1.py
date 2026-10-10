def digitize(n):
    number = []
    for i in str(n)[::-1]:
        number.append(int(i))
    return number