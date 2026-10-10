#A
# რას აბრუნებს type(5)?
# answer: int
# აირჩიე Immutable ტიპი:

# a) list

# b) str

# c) bool
# answer: b) str

# რას აკეთებს my_list.append(x)?
# answer: ამატებს რამეს(რაც ჩვენ გვინდა) ლისტში

# თუ ფუნქციაში return არ წერია, რას აბრუნებს?
# answer: არაფერს, თუ რეთურნის მაგივრად პრინტი არ გვიწერია
 
# რა განსხვავებაა == და != შორის?
# answer: == ამოწმებს თუ ტოლია, და != ამოწმებს თუ არ ტოლია
# რას აბრუნებს: s = 'Python' s[0:3]
# answer: error-ს სტრინგი არის Immutable 
# str.upper() რას აკეთებს?
# answer: ნუუუ, აბრუნებს დიდი ასოებით რამეს, მაგ: x = "py" x.upper() გამოიტანს = PY

# B
# 1) [1, 2, 3]
# 2) "Hello"
# 3) [1, 2]
# 4) "Hi" "Hi" "Hi"
# 5) True

# C
# 1) error: return result>s< solution: return result
# 2) error: print(>N<ame.lower()) solution: print(name.lower())
# 3) sort არ გვისწავლია, და არ ვიცი

# D
"""2""" 
def l(l):
   return l[::-1]
print(l([1, 2, 3]))

"""3"""
def sm(s):
    x = "" 
    for i in s:
        x += s[0] + s[-1]
        break
    return x

# E
def smm(d):
   return d.lower()[::-1] == d.lower()
# last
def smmm(k, j):
    c = (k * 2) + (j * 2)
    return c