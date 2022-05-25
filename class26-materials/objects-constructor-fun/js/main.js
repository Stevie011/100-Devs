//Create a constructor with 4 properties and 3 methods

class MakePizza{
    constructor(style, size, toppings, price ){
        this.style = style
        this.size = size
        this.toppings = toppings
        this.price = price
        }
        toppingCheck = function(){
            console.log(`This pizza has the following toppings: ${this.toppings}`)
        }

        priceCheck = function(){
            if(this.price >= 10){
                console.log("This pizza costs 10 or more")
            }else{
                console.log("This pizza is under 10")
            }
        }

        sizeCheck = function(){
            console.log(`This pizza is a ${this.size}`)
        }
}
