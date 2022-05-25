// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Feline{
    constructor(name,countryOfOrigin){
        this._name = name
        this._countryOfOrigin = countryOfOrigin
    }
    get name(){
        return this._name
    }
    get countryOfOrigin(){
        return this._countryOfOrigin
    }
    sayHi(){
        console.log(`I am a feline from ${this._countryOfOrigin} and my name is ${this._name}`)
    }
}

class DomesticCat extends Feline{
    constructor(name, countryOfOrigin){
        super(name, countryOfOrigin)
    }
    speak(){
        console.log("I am a house cat and must live inside")
    }
}

class WildCat extends Feline{
    constructor(name, countryOfOrigin){
        super(name, countryOfOrigin)
    }
    speak(){
        console.log("I am a wild cat and live in the bush")
    }
}

let eve = new DomesticCat("Eve","South Africa")
let lynx = new DomesticCat("Lynx","South Africa")
let zazuba = new WildCat("Zazuba","The Wild")

let theZoo = [eve,lynx,zazuba]

for(i of theZoo){
    i.speak()
}


// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
