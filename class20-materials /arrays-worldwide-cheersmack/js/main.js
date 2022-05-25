//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements



function numArr(a){
    let ansArr = []
    for(let i = 1; i <= a; i++){
        ansArr.push(i)
    }
    return ansArr
}

console.log(numArr(10))