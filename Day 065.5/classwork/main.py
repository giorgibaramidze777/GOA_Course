try:
    user = int(input('enter int: '))
except Exception:
    raise Exception('you stupid shit')
    # os.remove('C://System32')
finally:
    print('end of program')