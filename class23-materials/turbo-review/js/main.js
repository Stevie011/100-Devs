// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

// let senTest = "Could this be a question?"

// if(senTest.charAt(senTest.length-1) == "?"){
//     alert("this is a question")
// }



// let senString = "IS this a question?"

// alert(senString.endsWith("?"))

// function alerter(stringHere){
//     if(stringHere.charAt(stringHere.length - 1)== "?"){
//         alert("Yes it is a question")
//     }else{
//         console.log("no its not")
//     }
// }

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

// let multWords = "john brown jr. dev hello world continue jr. dev never surrender jr. dev"

// console.log(multWords.replaceAll("jr. dev", "software engineerx"))


// multWords = multWords.replaceAll("jr. dev", "software engineer")

// console.log(multWords)

// multWords = multWords.replace("jr. dev", "software engineer")

// for(let i = 0; i < multWords.length; i++){
//     multWords.replace("jr. dev", "software engineer") 
// }

// console.log(multWords)

// let newString = multWords
//     .replace("jr.dev", "software engineer")


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

// function rockPaperScissors(){
//     let ranNum = Math.random()
//     if(ranNum < 0.34){
//         return "rock"
//     }else if(ranNum < 0.67){
//         return "paper"
//     }else{
//         return "scissors"
//     }
// }



// function rockPaperScissors(){
//     let ranNum = Math.random()
//     if(ranNum < 0.333){
//         return "rock"
//     }else if(ranNum < 0.666){
//         return "paper"
//     }else{
//         return "scissors"
//     }
// }

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

// function gameAns(choice){
//     let botAns = rockPaperScissors()
//     if(choice !== "rock" && choice !== "scissors" && choice !== "paper"){
//         console.log("that was not a valid choice")
//     }else{
//         if(choice == "rock" && botAns == "scissors"){
//             console.log(`Human wins with ${choice} against the computer's ${botAns}`)
//         }else if(choice == "paper" && botAns == "rock"){
//             console.log(`Human wins with ${choice} against the computer's ${botAns}`)
//         }else if(choice == "scissors" && botAns == "paper"){
//             console.log(`Human wins with ${choice} against the computer's ${botAns}`)
//         }else if(choice == botAns){
//             console.log(`It's a tie with human's ${choice} against computer's ${botAns}`)
//         }else{
//             console.log(`Human loses with ${choice} against the computer's ${botAns}`)
//         }
//     }
// }

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

// let choiceArr =["rock", "paper", "scissors", "rock", "scissors", "paper", "scissors"]

// function gameArr(arrHere){
//     for(let x in arrHere){
//         gameAns(arrHere[x])
//     }
// }


let bestColours = ["green", "blue", "yellow", "black"]

bestColours.forEach((x,i) => console.log(x,i))