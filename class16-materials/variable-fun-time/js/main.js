//--- Easy
//create a variable and assign it a number

let testVar = 30

//minus 10 from that number

testVar = testVar - 20

//print that number to the console

console.log(testVar)
//--- Medium
//create a variable that holds a value from the input

// let inputVar = document.querySelector("#danceDanceRevolution").value

// inputVar = Number(inputVar)

//add 25 to that number



//alert that number


//--- Hard
//create a variable that holds the h1

let headVar = document.querySelector('h1')

headVar.addEventListener('click', sum)

function sum(){
    let inputVar = document.querySelector("#danceDanceRevolution").value

    inputVar = Number(inputVar) 
    inputVar = inputVar + 25
    console.log(testVar + inputVar)
}

console.log(headVar)



//add an event listener to that element that console logs the sum of the two previous variables

let test1 = "hello"
let test2 = "Hello"
