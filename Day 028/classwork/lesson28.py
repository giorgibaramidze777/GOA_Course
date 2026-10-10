#list[]



# food = ["ხინკალი", "მწვადი", "ჭახრაკინა", "ჩაქაფული", "გოჭი", 10, "ხაჭაპური", 10.5, "ბებოს კატლეტი", "ბულიონი"]
# 
# animal = ["კატა", "ძაღლი", "თაგვი", "კურდღელი", "მორიელი", "ბაყაყი", "კუ", "მგელი", "ლომი", "ტიგრი"]
# 
# age = [19, 15, 17, 20, 99]
# 
# print(animal + age)

food = ["pizza", "burger", "sushi", "pasta", "salad"]
print(food)  

strint = ["tbilisi", "batumi", "paris", 10, 20, 30]
print(strint)

#indexing

car = ["BMW", "MERCEDES", "TOYOTA", "L7", 10, 15]
car[1] = "GOA"
car[3] = "giorgi"

print(car[1])

# mutable == ცვლადებადი

# unmutable == უცვლადი

name = "GOA"
print(name[0])

list = ["batumi", "tbilisi", "kutaisi", "samtredia", "zestafon", 38, 39, 61, 16, 32, True, False, True, False, True]
list1 = str(input("enter string: "))
list2 = str(input("enter string: "))
list3 = str(input("enter string: "))

list[4] = list1
list[7] = list2
list[11] = list3

print(list)