# 1) lambda არის ანონიმური (სახელის გარეშე) ფუნქცია  
# მას ვიყენებთ მაშინ, როცა პატარა და მარტივი ფუნქცია გვჭირდება ერთჯერადად

# 3)
double = lambda n: n*2

# 4)
numbers = [10, 20, 30, 40, 50]

result = list(map(lambda i: numbers[i] * i, range(len(numbers))))
print(result)

# 5) ჩვენ ვიყენებთ დეფს როცა უნდა დავწეროთ დიდი ფუნქცია ან უბრალოდ გამოვიძახოთ ბერბჯერ, და ლამბდას ვიყენებთ როცა გვინდა შევქნათ იოლი ფუნქცია

# 6) filter არის ფუნქცია, რომელიც იღებს ფუნქციას და iterable-ს,  
# შემდეგ აბრუნებს მხოლოდ იმ ელემენტებს, რომლებისთვისაც ფუნქცია აბრუნებს True-ს.  
# მაგალითად: filter(lambda x: x > 5, [1, 6, 3, 8]) -> [6, 8]

# 7) callback არის ფუნქცია, რომელსაც არგუმენტად ვაწვდით სხვა ფუნქციას,  
# და ის ფუნქცია მომავალში გამოიძახებს მას.  
# ხშირად გამოიყენება event-ებში ან async ოპერაციებში.

# 8) კი

def apply_func_on_list(func, data):
    new_list = []
    for i in data:
        new_list.append(func(i))
    return new_list

numbers2 = [1, 2, 3, 4, 5]
final_result = apply_func_on_list(lambda x: x * 5, numbers2)
print(final_result)