def high_and_low(n):
    lst = n.split()
    
    fd = []
    
    for i in lst:
        fd.append(int(i))
    
    h = max(fd)
    m = min(fd)
    
    return f"{h} {m}"