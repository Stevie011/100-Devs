//Create a mouse object that has four properties and three methods


let mouseObj ={
    colour: "brown",
    size: "small",
    gender: "F",
    feet: 4,

    squeak(){
        return "Squeak"
    },
    howManyFeet(){
        return `This mouse has ${feet} feet`
    },
    runAway(){
        return "I'm running away"
    }
}

function MakeCar(carMake,carModel,numOfDoors){
    this.make = carMake
    this.model = carModel
    this.doors= numOfDoors

    this.honk = function(){
        alert("BEEP BEEP")
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors`)
    }
}

let hondaCivic = new MakeCar("honda", "civic", 4)