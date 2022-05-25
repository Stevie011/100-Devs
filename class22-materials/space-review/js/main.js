//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let testArr = [2,4,6,80]

let sum = testArr.reduce((acc,c) => acc + c,0)
// let count = 0
// testArr.forEach(i => count += i)
// console.log(count)


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

// let testArr = [2,4,6,80]

// function sqrArr(arr){
//     return arr.map(x => x**2)
// }

const newArr = testArr.map(x => x**2)



//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
