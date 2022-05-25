//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


function MakeFighter(name, size, colour, specialMove){
    this.name = name
    this.size = size
    this.specialMove = specialMove

    this.punch = function(){
        console.log("punch")
    }
    this.sizeReport =  function(){
        console.log(`Fighter is ${this.size} in size`)
    }
    this.specialMoveNow = function(){
        console.log(`Doing my special move which is ${this.specialMove} now`)
    }
}

let Ryu = new MakeFighter("Ryu", "Medium", "White", "haduken")