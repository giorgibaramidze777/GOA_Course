# Conditional Statements
# if == თუ
# else == სხვა/სხვა შემთხვევაში

# if 5 == 5:
    # print("goa")
# else:
    # print("GOA")

if "hello" == "hello":
    print("GOA")
else:
    print("novator")

password = "secretWord"
guess = input()
while guess != password:
    guess = input()
print("Access granted")
# ამ კოდში მომხმარებელს ვთხოვთ პაროლს, თუ არასწორია, ისევ ვთხოვთ პაროლს, სანამ სწორი პაროლი არ შეიყვანა.

num = input("Enter a number: ")
if num > 3:
    print("GOA")
else:
    print("AOG")