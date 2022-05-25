# def square_digits(num):
#     num = str(num)
#     result = ""
#     for i in num:
#         result = result + str((int(i)**2))
#     return result


# print(square_digits(9119))

# import math

# def is_square(n):
#     if n < 0:
#         return False
#     elif n == 0:
#         return True
#     elif type(math.sqrt(n)) == int:
#         return True
#     else:
#         return False
        
# print(is_square(3))

# testNum= 4

# print(int((testNum/1.5)))

# def is_square(n):
#     if n < 0:
#         return False
#     elif n == 0:
#         return True
#     else:
#         for i in range(int((n/2))):
#             if i * i == n:
#                 return True
#         else:
#             return False


# print(is_square(3))

# def is_square(n):
#     if n < 0:
#         return False
#     elif n == 0:
#         return True
#     else:
#         for i in range(int((n/2))+1):
#             if i * i == n:
#                 return True
#         else:
#             return False

# def is_square(n):
#     if n < 0:
#         return False
#     elif n == 0:
#         return True
#     else:
#         sqrRoot = n**0.5
#         sqrRootInt = int(sqrRoot)
#         if sqrRoot == sqrRootInt:
#             return True
#         else:
#             return False




# testNum = 4

# print(bin(testNum))




def ip_to_num(ip):
    stopPosition = ip.find(".")     #this looks in the ip address to find the position of the first period 
    part1 = ip[:stopPosition]       #this creates a new string with the first part of the ip address    
    ip=ip[stopPosition+1:]          #this slices the first part of the ip (incl period) off the string
    stopPosition = ip.find(".")     #repeats until the ip is seperated into 4 parts
    part2 = ip[:stopPosition]
    ip=ip[stopPosition+1:]
    stopPosition = ip.find(".")
    part3 = ip[:stopPosition]
    ip=ip[stopPosition+1:]
    stopPosition = ip.find(".")
    part4 = ip

    part1 = bin(int(part1)).replace("0b", "")   #this changes the base 10 to binary and removes the 0b that python includes
    part1 =  part1.zfill(8)                     #this fills with zeroes to make an octet
    part2 = bin(int(part2)).replace("0b", "")
    part2 =  part2.zfill(8)
    part3 = bin(int(part3)).replace("0b", "")
    part3 =  part3.zfill(8)
    part4 = str(bin(int(part4)).replace("0b", ""))
    part4 =  part4.zfill(8)

    result = part1 + part2 + part3 + part4      # this puts the strings back together
    result = int(result, 2)
    return result

# print(ip_to_num('10.0.0.0'))

#*********** pseudo code ip_to_num()


# take ip string, go along until first period is found, slice string till there into new string part1, go again until dot for part 2, etc 
# take each part, convert to int, convert to binary >>>> must be octects- find way to add digits, concatenate strings, convert back to int, back to base 10

def num_to_ip(num):
    ansString = str(bin(num))[2:]       #this converts the input to binary and cuts off the first 2 digts (0b)
    if len(ansString)<32:
        ansString = ansString.zfill(32)
    print(ansString)       
    part1 = ansString[:8]               #this cuts off the fist 8 digits to make the octets
    ansString = ansString[8:]
    part2 = ansString[:8]
    ansString = ansString[8:]
    part3 = ansString[:8]
    ansString = ansString[8:]
    part4 = ansString[:8]
    ansString = ansString[8:]

    print(part1)                       #i've printed out the parts here to check
    print(part2)
    print(part3)
    print(part4)                       #part 4 contains 4 digits instead of 8

    part1 = str(int(part1,2))          #convert back to strings to concatenate back into ip address format
    part2 = str(int(part2,2))
    part3 = str(int(part3,2))
    part4 = str(int(part4,2))

    
    print(part2)
    print(part3)
    print(part4)

    actualAns = part1+"."+part2+"."+part3+"."+part4

    return actualAns

    # print(actualAns)

    

print(num_to_ip(167772160))

#maybe convert input number to same length of digits