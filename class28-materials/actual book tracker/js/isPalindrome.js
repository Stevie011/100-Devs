function isPalindrome(str){
    str = str.toLowerCase()
    let splitString = str.split("")
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")
    if(joinArray == str){
        return true
    }else{
        return false
    }

}