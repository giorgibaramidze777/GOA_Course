def hello():
    print("Hello World!")

for i in range(10):
    hello()

# argument არის მნიშვნელობა რომელსაც წერს პროგრამისტი და ხანდახან მომხმარებელი მაგ:
# def n(name):
    # print(f"Hello {name}!")
# n("Gurami")

# function იმისთვის გვჭირდება რომ მაგალითად ამოვაგდოთ "Hello World!" სიიადან ან "Hello World!" დავამატოთ სიაში

def hello(name):
    print(f'Hello {name}')

hello("Gurami")
