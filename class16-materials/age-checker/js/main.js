//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph


let checkButton = document.querySelector('h1')

checkButton.addEventListener('click', ageResponse)

function ageResponse(){
    let ageInput = document.querySelector('#danceDanceRevolution').value 
    ageInput = Number(ageInput)

    if (ageInput < 16){
        document.querySelector('p').innerText = `You can't drive`
    }else if (ageInput > 16 && ageInput < 18){
        document.querySelector('p').innerText = "Don't hate from outside the club"
    }else if (ageInput > 18 && ageInput < 21){
        document.querySelector('p').innerText = "You can't drink"
    }else if (ageInput > 21 && ageInput < 25){
        document.querySelector('p').innerText = "You cant rent cars affordably"
    }else if(ageInput > 25 && ageInput < 30){
        document.querySelector('p').innerText = "you can't rent fancy cars"
    }else if (ageInput > 30){
        document.querySelector('p').innerText = "nothing left"
    }

    
}

// document.querySelector('p').innerText = `${ageInput}`
// console.log(ageResponse())



// let age = 10

// function ageCheck(){
//     if(age<5){
//         return 1
//     }else if(age>5){
//         return "hello"
//     }
// }

// console.log(ageCheck())
