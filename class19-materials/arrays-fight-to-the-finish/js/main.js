//Create an array of movie titles. Loop through the array and each element to the h2.

// let newArr = ["movie 1", "movie 2", "movie 3"]

// newArr.forEach((x,i)=> document.querySelector('h2').innerText += newArr[i])


//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let numArr = [1,2,3,4,5]

// for(let i = 0; i <= numArr.length; i++){
//     numArr[i]= numArr[i]+3
//     console.log(numArr[i])
// }

// console.log(numArr)


//Find the average of all the numbers from question three

let sum = 0

for(let i = 0; i < numArr.length; i ++){
    sum = sum + numArr[i]
}

let aveAns = sum / numArr.length

console.log(aveAns)