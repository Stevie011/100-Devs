
// let startNum = 0

// while (startNum < 5){
//     console.log(startNum)
//     startNum ++
// }

// for (let startNum = 0; startNum < 5; startNum++){
//     console.log(startNum)
// }

// let maxLaunch = prompt(`Max No of launches here`)

// for(let launchNum = 1; launchNum <= maxLaunch; launchNum++){
//     console.log(`Carousel Launch Number : ${launchNum}`)
// }

//*********start num parity thing here **************still needs work */

// let startNum = Number(prompt(`start number here`))

// for(let i = 1; i <= 10; i ++){
//     if (startNum % 2 == 0){
        
//         console.log(`${startNum} is even`)
//         console.log(`${startNum+1} is odd`)
        
//     }
//     startNum++
// }

//*********************************** */

// function askCheck(){
//     let userInput = Number(prompt(`give me a number`))
//     if(userInput < 100 && userInput > 50){
//         console.log("why thank you")
//     }else{
//         askCheck()
//     }
// }

// askCheck()

//************************************ */

// function multTable(){
    
//     let userInput = Number(prompt(`enter number here`))
//     if(userInput > 2 && userInput < 9){
//         for(let i = 1; i <= 12; i++){
//             console.log(`${userInput} times by ${i} equals ${userInput*i}`)
//         }
//     }else{
//         console.log("only numbers between 2 and 9, not including")
//     }
// }

// multTable()

//********************************* */

// function yesOrNo(){
//     let userInput = prompt(`gimme a yes or a no`).toLowerCase()

//     if (userInput == "yes" || userInput == "no"){
//         console.log("thanks for playing")
//     }else{
//         yesOrNo()
//     }

// }

// yesOrNo()

//******************************* */


// function fizzBuzz(n){
//     let result = []
//     for(let i =1; i <= n; i++){
//         if (i % 3 == 0 && i % 5 == 0){
//             result.push("FizzBuzz")
//         }else if(i % 3==0){
//             result.push("Fizz")
//         }else if(i%5==0){
//             result.push("Buzz")
//         }else{
//             result.push(i)
//         }
//     }
//     return result
// }

// console.log(fizzBuzz(10))


//hackerrank format

// for(let i =1; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz")
//     }else if(i % 3==0){
//         console.log("Fizz")
//     }else if(i%5==0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

//************************* */

// let firstName = prompt(`Enter first name here`)
// let lastName = prompt(`Enter last name here`)
// alert(sayHello(firstName, lastName))

// function sayHello(firstName, lastName) {
//     const message = `Hello, ${firstName} ${lastName}!`;
//     return message;
//   }

//************************** */
  
// function square1(x){
//     return x*x
// }

// function square2(x){
//     return x**2
// }

// function tenPrint(){
//     for(let i = 0; i<10; i++){
//         console.log(`the square of ${i} is ${square1(i)}`)
//     }
// }

//***************************** */

// function min(a, b){
//     if(a>b){
//         return b
//     }else{
//         return a
//     }
// }

//***************************** */


// function calculatePlease(firstNum, whichOp, secondNum){
//     if(whichOp == "+"){
//         return Number(firstNum) + Number(secondNum)
//     }else if(whichOp == "-"){
//         return Number(firstNum) - Number(secondNum)
//     }else if(whichOp == "*"){
//         return Number(firstNum) * Number(secondNum)
//     }else if(whichOp == "/"){
//         return Number(firstNum) / Number(secondNum)
//     }
// }

// function circAndArea(radius){
//     let circ = 2*(Math.PI)*radius
//     let area = (Math.PI)*(radius**2)
//     console.log(`Circ is ${circ} and area is ${area}`)
// }


//*****************MINI RPG GAME****************** */

// const snork ={
//     name: "Snork",
//     health: 300,
//     strength: 50,
//     xp: 0,

//     describe() {
//         return `${this.name} has ${this.health} health points and ${this.strength} current strength. Current XP is ${this.xp}`;
//     }
// }



//hit by arrow
// snork.health -= 20

// function describe(charName){
//     return `${charName.name} has ${charName.health} health points and ${charName.strength} current strength`
// }


// const dog ={
//     name: "Snorkid",
//     species: "hound",
//     size: 30,

//     bark(){
//         return "Grr, grrr!"
//     }

// }


// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


// const r = Number(prompt("Enter the circle radius"))

// const circle ={
//     radius: r,

//     circumference(){
//         return 2*(Math.PI)*this.radius
//     },

//     area(){
//         return (Math.PI)*(this.radius**2)
//     }
// }


// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

const account = {
    name: "Alex",
    balance: 0,

    credit(){
        this.balance += Number(prompt("enter amount here"))
    },

    describe(){
        return `Owner is ${this.name} and the balance is ${this.balance}`
    }
}

