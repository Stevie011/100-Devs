//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
let arrayTest = []
let i =1
for(i = 1; i < 22; i ++){
    
    arrayTest.push("21")
    document.querySelector('h2').innerText = arrayTest
}

// function savage21(){
//     for(let i =0; i < 21; i ++){
//         document.querySelector("#savageSays").innerText += " 21 " 
//     }
// }

// savage21()