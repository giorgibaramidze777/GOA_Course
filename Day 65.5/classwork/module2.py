def filt(arr):
    lam = list(filter(lambda A: A % 2 == 0, arr))
    print(lam)
