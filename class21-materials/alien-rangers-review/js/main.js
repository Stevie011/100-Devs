//Arrays

//Create and array of tv shows. Loop through and print each show to the console

// let tvShows = ["friends", "seinfeld", "leon"]

// tvShows.forEach((x, i)=> console.log(x))

//Create and array of numbers

let numArr =[1,2,3,4,5,6,7,8,9,10]
//Return a new array of numbers that includes every even number from the previous Arrays

// function oddNums(arr){
//     let newArr =[]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 != 0){
//             newArr.push(i)
//         }
//     }
//     return newArr
// }

// console.log(oddNums(numArr))

let onlyEvens = arr => arr.filter(n => n%2 ===0)

console.log(onlyEvens(numArr))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number


let testArr = [2,6,3,8,4,9]

console.log(testArr.sort((a,b) => a-b))

function secondHighLow(arr){
    let sortedArr = testArr.sort((a,b) => a-b)
    console.log(sortedArr[1])
    console.log(sortedArr[sortedArr.length-2])
}

secondHighLow()