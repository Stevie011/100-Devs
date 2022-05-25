


// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }    
// }
// class Cat extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }    
// }

// class SpaceDog extends Dog{
//     constructor(name,breed, planet){
//         super(name, breed)
//         //super(breed)
//         this.planet = planet
//     }
//     orbitCheck(){
//         console.log(`${this.name} is in orbit right now`)
//     }
// }

// let simba = new Dog('Simba','Shepard')
// let machi = new Dog('The Machine','Pitbull')
// let salem = new Cat('Salem', 'American Shorthair')

// let zorro = new SpaceDog("Zorro","wolf","pluto")

// let farm = [simba,machi,salem]

// for( a of farm ){
//     a.speak()
// }