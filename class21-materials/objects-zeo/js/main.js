//Create a stopwatch object that has four properties and three methods


let stopwatch ={
     color: "black",
     price: 1000,
     size: "medium",
     style: "analog",

     colorReport(){
         console.log(`Colour is ${this.color}`)
     },

     priceChanger(){
         console.log(`Price on discount is ${this.price - 250}`)
     },

     styleTeller(){
         console.log(`The Style is ${this.style}`)
     }
}