//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeShow{
    constructor(name, genre, length, leadActor){
        this.name = name
        this.genre = genre
        this.length = length
        this.leadActor = leadActor
    }

    pauseShow(){
        console.log("Show is now paused")
    }
    playShow(){
        console.log("Show is now playing again")
    }
    nameCheck(){
        console.log(`Show name is ${this.name}`)
    }
}

let southPark = new MakeShow("south park", "comedy", "medium", "cartman")
