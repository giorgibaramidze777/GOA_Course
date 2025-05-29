x = input("Enter a string: ")

print(x.upper())

l = ["LOWER", "upper", "capitalize", "count", "replace", "ti-t-le"]
print(l[0].lower())
print(l[1].upper())
print(l[2].capitalize())
print(l[3].count("t"))
print(l[4].replace("e", "a"))
print(l[5].title())

# lower აპატარავებს ყველა ასოს სტრინგში. upper ადიდებს ყველა ასოს სტრინგში. capitalize ადიდებს მარტო პირველ ასოს. count ითვლის რამდენი მაგალითად ა ასო სტრინგში.
# replace მაგალითად დ ასოს ცვლის ა ასოთი. title ყველა სიტყვას დასაწყისში ადიდებს ასოს. 
# immutable string ახსნა: იმუტაბლე ნიშნავს რომ სტრინგზე ზედამოქმედებას ვერ ვახდენთ, იოლად რომ ვთქვათ როგორც ლისტს ჩვენ სტრინგს ვერ შევცვლით 