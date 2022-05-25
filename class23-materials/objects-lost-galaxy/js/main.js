//Create a dog object that has four properties and three methods


// let dog = {}

// dog.color = "brown"
// dog.name = "snork"
// dog.size = "small"
// dog.feet = 4

// dog.bark = function(){  
//     console.log("woof")
// }

// dog.fetch = function(){
//     console.log("but where is the stick?")
// }

// dog.wagTail = function(){
//     console.log("tail is now wagging")
// }

// console.log(dog)


function MakeDog(breed,size,color,name){
    this.breed = breed
    this.size = size
    this.color = color
    this.name = name
    this.wag = function(){
        console.log("Tail is now wagging")
    }
    this.greet = function(){
        console.log(`Hi, my name is ${name}`)
    }
}

// let dog = {}

// dog.color = "brown"

// dog.bark = function(animal){
//     console.log(`Woof woof! I'm barking at the ${animal}`)
// }