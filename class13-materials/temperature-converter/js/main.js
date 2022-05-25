//Write your pseduo code first! 

//get the input value in celcius

document.querySelector('#check').addEventListener('click', convert)

//do the maths to change it from c to f



// function convert() {

//     const tempC = document.querySelector('#tempC').value
//     const tempF =
// }
//return this new value to the dom

function convert(){

    const tempC = document.querySelector('#tempC').value
    let tempF = (tempC * 9/5) + 32
    document.querySelector('#answerHere').innerText = `The heat in farenheit is ${tempF}`
}