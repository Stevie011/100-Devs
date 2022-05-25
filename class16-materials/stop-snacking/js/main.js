//Create a function that grabs the number of snacks from the input and tells you to stop that many times



let helpButton = document.querySelector('h2')
helpButton.addEventListener("click", snackWarning)

function snackWarning(){
    
    let inputSnacks = Number(document.querySelector("#snacksHere").value)
    document.querySelector("#stops").innerText = ""
    for(let i = 0; i < inputSnacks; i++){
        document.querySelector("#stops").innerText += "STOP! "
        console.log(i)
    }
    
}


