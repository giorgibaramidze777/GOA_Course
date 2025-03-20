# ==
# >
# <
# >=
# <=
# !=




#-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#logical operatios

# and -> და
# or -> ან 

# and უყვარს False

# Or უყვარს True

#print(10 == 10 and 20 == 20)

#print(10 == 10 or 20 > 10)

true = 10 != 24

false = 20 < 10

print(true or false)
print(true and false)

# 2) False

print(False or True and False or True) #true
print(False and True or True and False or True) #true
print((True and False) or (False or True and True)) #true
print(True and True or False and False or True) #true
print((False or True) and (True or False and True)) #true
print(False and True or False or False and True) #false
print(True and False or False and True or False) #false
print((False or False) and (True and False)) #false
print(True and False and True or False) #false
print((False or False) and (False or True and False)) #false
