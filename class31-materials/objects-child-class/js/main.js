//Create an a class and extend it - Can be anything you would like it to be! 

class Car{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    brandCheck(){
        console.log(`The brand of this car is ${this._name}`)
    }
}
class RaceCar extends Car{
    constructor(name, driver){
        super(name)
        this._driver = driver
    }
    get driver(){
        return this._driver
    }
    driverAnnouncement(){
        console.log(`My name is ${this.driver} and I'm driving a ${this.name}`)
    }
}


// class Car{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name}is the name of the car`)
//     }
// }
// class RaceCar extends Car{
//     constructor(name,driver){
//         super(name)
//         this.driver = driver
//     }
//     get driver(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }    
// }