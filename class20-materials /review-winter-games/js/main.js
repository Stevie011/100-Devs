//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


function evenArr(arrHere){
    let ansArr = []
    for(let i of arrHere){
        if(i%2 ==0){
            ansArr.push(i)
        }
    }
    return ansArr
}

testArr= [1,1,1,10,5,6,7,8 ]

console.log(evenArr(testArr))