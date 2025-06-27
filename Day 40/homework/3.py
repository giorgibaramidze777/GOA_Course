def string_to_number(s):
    h = type(s)
    if h == str:
        return int(s)
    else:
        return s