//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let testArr = [1,2,3,4]

let arrSum = arr => arr.reduce((acc,c) => acc+c, 0)

// function arrSum(arr){

// }

// let arrSum = 0

// for(let x of testArr){
//     arrSum += x
// }

// console.log(testArr.reduce((acc,c) => acc + c, 0))

//console.log(arrSum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

// function sqrArr(arrHere){
//     let ansArr = []
//     for(let x of arrHere){
//         ansArr.push(x**2)
//     }
//     return ansArr
// }

// let newArr = testArr.map(i => i**2)

// console.log(newArr)

//Create a function that takes string
//Print the reverse of that string to the console

// function strRev(strHere){
//     let ansStr = ""
//     for(let i = strHere.length -1; i >= 0; i--){
//         ansStr += strHere[i]
//     }
//     return ansStr
// }

// let str= "abcde"

// let revString = str => str.split("").reverse().join("")

// console.log(revString)

//Create a function that takes in a string
//Alert if the string is a palindrome or not

// function palChecker(strHere){
//     let ansStr = ""
//     for(let i = strHere.length -1; i >= 0; i--){
//         ansStr += strHere[i]
//     }
//     if(ansStr == strHere){
//         return true
//     }else{
//         return false
//     }
// }

// let palChecker = str => str === str.split('').reverse().join('')