// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

// let favDrink = "Coke"

// console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

// let wordString = "banana, apple, orange, pear"

// let checkAns = wordString.includes("apple")

// console.log(checkAns)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let ranNum = Math.random()
    if(ranNum <= 0.333){
        return "Rock"
    }else if(ranNum <= 0.666){
        return "Paper"
    }else{
        return "Scissors"
    }
}


// let testAns = rockPaperScissors()
// console.log(testAns)
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

//this function takes in a string - only "rock", "paper" or "scissors" will be accepted, and the function will correct for case.
//the bot will randomly choose one of the three, and compare it against the human choice and return a winner as well as both choices

function rockPaperScissorsBot(choice){

    // function rockPaperScissors(){
    //     let ranNum = Math.random()
    //     if(ranNum <= 0.333){
    //         return "Rock"
    //     }else if(ranNum <= 0.666){
    //         return "Paper"
    //     }else{
    //         return "Scissors"
    //     }
    // }

    choice = choice.toLowerCase()
    let botAns = rockPaperScissors().toLowerCase()
    let possAns = "rock, paper, scissors"
    if(possAns.includes(choice) == false){
        console.log("That's not a valid choice")
    }else{
        console.log("Valid Choice")
        if(choice == "paper" && botAns == "rock"){
            console.log(`Human wins with ${choice} against the bot's ${botAns}`)
        }else if(choice == "paper" && botAns == "scissors"){
            console.log(`Human loses with ${choice} against the bot's ${botAns}`)
        }else if(choice == "rock" && botAns == "scissors"){
            console.log(`Human wins with ${choice} against the bot's ${botAns}`)
        }else if(choice == "rock" && botAns == "paper"){
            console.log(`Human loses with ${choice} against the bot's ${botAns}`)
        }else if(choice == "scissors" && botAns == "paper"){
            console.log(`Human wins with ${choice} against the bot's ${botAns}`)
        }else if(choice == "scissors" && botAns == "rock"){
            console.log(`Human loses with ${choice} against the bot's ${botAns}`)
        }else{
            console.log(`It's a tie with human's ${choice} against the bot's ${botAns}`)
        }   
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

let testArr = ["rock", "paper", "scissors", "rock", "paper"]

// function testArray(choiceArr){
//     // for(let i = 0; i < choiceArr.length; i++){
//     //     rockPaperScissorsBot(choiceArr[i])
//     // }
//     choiceArr.forEach(i => rockPaperScissorsBot(i))
// }

let newArr = testArr.map(x => x + "!!")