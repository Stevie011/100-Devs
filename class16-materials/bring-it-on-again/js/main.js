// *Variables*
// Declare a variable, assign it a value, and alert the value

// let newVar = 10

// alert(newVar)

// Create a variable, divide it by 10, and console log the value

// let secondVar = newVar/10
// console.log(secondVar)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function threeMult(a,b,c){
    alert(a*b*c)
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function fourSub(a,b,c,d){
    console.log((a+b)-c-d)

}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function weHaveAWinner(a,b,c){
    let testVal = ((100 + a)-b)/c
    if(testVal > 25){
        console.log("WE HAVE A WINNNA")
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

let dayInput = document.querySelector("#dayOfWeek").value
dayInput = dayInput.toLowerCase()

//still needs button to be added and the function to be called on click 

if(dayInput == "saturday" || dayInput == "sunday"){
    alert("weekend")
}else if(dayInput == "monday" || dayInput == "tuesday" || dayInput == "wednesday" || dayInput == "thursday" || dayInput == "friday") {
    alert("week day")
}else{
    alert("this is not a day of the week")
}


console.log(dayInput)



//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function threeStep(a){
    for(let i =1; i < a; i +=3)
    console.log(i)
}
