import module

# try - არის ფუნქცია რომელიც ამოწმებს თუ შესრულდება error-ი.
# except - არის ფუნქცია რომელიც შესრულდება თუ try-ში არის რამე error-ი. 
# finnaly - არის ფუნქცია რომელიც შესრულდება ყოველთვის იქნება შეცდომა თუ არა, მაინც შესრულდება.
def sm(x):
    try:
        return 10/x
    except ZeroDivisionError:
        return 'ar sheidzleba nulze gayofa!'
    finally:
        return 10+10

print(sm(0))

# syntaxError - როცა არასწორად გვიწერია სინტაქსი
# indexError - როცა გვინდა იმ ინდექსზე წვდომა რომელიც არ არსებობს ლისტში ან სტრინგში
# typeError - როცა რაღაცა ოპერაციას ვცდილობთ, განსხვავებული datatypes შორის.
# valueError - როცა ვცდილობთ არარსებული ცვლადის დაპრინტვას.
# attributeError - როცა ვიყენებთ რაღაცა ატრიბუტს არ მოქმედებს ობიეკტზე
# x = 5 
# x.append(2) 
# ZeroDivisionError - როცა ვწერთ გაყოფას ნულზე.

def pin():
    try:
        pin = input('Enter pin: ')
        if not pin.isdigit():
            raise ValueError('cifra unda iyos!')
    except ValueError:
        return 'pini unda sheicavdes cifrebs'
    else:
        return 'idk if pincode is correct but its number tho'
    finally:
        "end of program"
print(pin())
    
try:
    user = int(input('enter: '))
except ValueError:
        raise Exception('GET OUT')
else:
    check_pin = int(input("check: "))
    if check_pin == module.pincode():
        print('test passed boiiii')
    else:
        raise Exception('wrong pin code')
finally:
    print('end of programm')
# 5)
# ფაილს ___init___.py იმიტომ უნდა ერქვას, რომ პაკეტის დირექტორია აღიქმოდეს როგორც ფითონის პააკეტი და შესაძლებელი იყოს მისი დაიმპორტება