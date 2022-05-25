// *Variables*
// Create a variable and console log the value

let newVar = 10
console.log(newVar)

// Create a variable, add 10 to it, and alert the value

let varTwo = 5
varThree = varTwo + 10
alert(varThree)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function fourSub(a,b,c,d){
    alert(a-b-c-d)
}

// Create a function that divides one number by another and returns the remainder

function remDiv(a,b){
    return a%b
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumAdd(a,b){
    if (a+b>50){
        alert("jumanji")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function mult3div0(a,b,c){
    if ((a*b*c)%3==0){
        alert("ZEBRA")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNum(wordHere, numberHere){
    for (let i = 0; i < Number(numberHere); i++){
        console.log(wordHere)
    }
}
