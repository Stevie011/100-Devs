
stringList = ["a","e","i"]
stringName = "abbdhgji"

def tester(string):
    newString = ""
    for i in stringName:
        if i not in stringList:
            newString = newString + i
    return newString

print(tester(stringName))