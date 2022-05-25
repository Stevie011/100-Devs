// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

// let favHol = "easter"
// favHol = "CHRISTMAS"

// console.log(favHol)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

// let string = "abcdefg"

// alert(string.slice(string.length-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fiveDif(a,b,c,d,e){
    return Math.abs(100-a-b-c-d-e)
}

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

// function threeMax(a,b,c){
//     console.log("max is ", Math.max(a,b,c))
//     console.log("min is ", Math.min(a,b,c))
// }


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsOrTails(){
    let ranNum = Math.random()
    if (ranNum> 0.5){
        return "Heads"
    }else{
        return "Tails"
    }
}




//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function numMult(a){
    for(let i =0; i < a; i++){
        console.log(headsOrTails())
    }
}

let bestColors = ["green", "blue", "red"]

bestColors.forEach((x,i) => console.log(i))