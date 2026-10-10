def points(games):
    y = 0
    for i in games:
        x = i.split(':')
        if x[0] > x[1]:
            y += 3
        elif x[0] == x[1]:
            y += 1
    return y