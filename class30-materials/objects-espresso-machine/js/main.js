//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class MakeEspressoMachine{
    constructor(brand, price, size, capacity){
        this.brand = brand
        this.price = price
        this. size = size
        this.capacity = capacity
        this.cupsMade = 0
    }
    makeCoffee = function(){
        console.log("Coffee has been made!")
        this.cupsMade += 1
    }
    sizeCheck = function(){
        console.log(`The coffee machine is ${this.size} in size`)
    }
    totalMadeCheck = function(){
        console.log(`Total cups made is ${this.cupsMade}`)
    }

}