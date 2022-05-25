// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

// let favFood = "burger"

// favFood = "pizza"

// alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

// let newVar = ""
// newVar = "abcde"
// alert(newVar[1])


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

// function threeNum(a,b,c){
//     alert((a/b)*c)
// }

// threeNum(1,2,3)


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

// function cubeRoot(a){
//     console.log(a**(1/3))
// }

// cubeRoot(64)


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

// function monthCheck(a){
//     a = a.toLowerCase()
//     let summerMonths =["november","december","january"]
//     if(summerMonths.includes(a)){
//         alert("Yay")
//     }else{
//         alert("Boo")
//     }
// }

// monthCheck("March")

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

// function numLoop(a){
//     for(let i =0; i < a; i ++){
//         if(i % 5 != 0){
//             console.log(i)
//         }
//     }
// }

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
let ansArr = []
for(i in input){
    let testArr = input[i]
    if(testArr[0] >= 55 && testArr[1] > 7){
        ansArr.push("Senior")
    }else{
        ansArr.push("Open")
    }

}
