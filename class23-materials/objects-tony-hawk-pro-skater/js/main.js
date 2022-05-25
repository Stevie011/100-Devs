//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function MakeSkater(chName, chAge, chStyle, chHairColor){
    this.name = chName
    this.age = chAge
    this.style = chStyle
    this.hairColor = chHairColor

    this.greet = function(){
        console.log("Howdy")
    }
    this.trick = function(){
        if(style == "street"){
            console.log("kickflip")
        }else if (style == "vert"){
            console.log("180 air")
        }else{
            console.log("what even is your style")
        }
    }
    this.hollaBack = function(word){
        console.log(`Why did you say ${word} to me?`)
    }
}
