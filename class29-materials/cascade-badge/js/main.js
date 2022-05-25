//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

let listReverse = list => console.log(list.reverse())

let pokeList = ["bulba","charmander","pikachu"]

//console.log(listReverse(pokeList))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// function sumCheck(arrA,arrB){
//     let ansA
//     let ansB
//     for(let i=0; i < arrA.length; i++){
//         ansA += arrA[i]**2
//     }
//     for(let j=0; j< arrB.length; j++){
//         ansB += arrB[i]**3
//     }
//     if(ansA > ansB){
//         return true
//     }else{
//         return false
//     }
// }

let sumCheck = (arrA, arrB) => arrA.reduce((acc,c) => acc + c**2) > arrB.reduce((acc,c) => acc + c**3)

//nice one liner


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function arrMult(arr){
    let ansArr = []
    for(let i=0; i < arr.length; i++){
        if(arr[i] % i == 0){
            ansArr.push(arr[i])
        }
    }
    return ansArr
}
//this one liner below does the same thing
let arrMult2 = arr => arr.filter((e,i) => e%i === 0)

//filter could be used to make this way more concise

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function stringToNum(arr){
    let newArr = []
    for(let i=0; i<arr.length; i++){
        if(typeof(arr[i])== "string" ){
            newArr.push(parseInt(arr[i], 10))
        }else{
            newArr.push(arr[i])
        }
    }
    let ansVal = 0
    for(let i=0; i<newArr.length; i++){
        ansVal += newArr[i]
    }
    return ansVal
}

