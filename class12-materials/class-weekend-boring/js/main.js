document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value  //this pulls the value from the input
  dayLow = day.toLowerCase()        //this creates a new variable with the user input in lower case
                                    //this serves to make the program case insensitive
  //Conditionals go here
  if (dayLow === "tuesday" || dayLow === "thursday"){
    document.querySelector("h2").textContent = "Class day"
  } else if(dayLow === "Saturday" || dayLow === "Sunday"){
    document.querySelector("h2").textContent = "weekend"
  } else{
    document.querySelector("h2").textContent = "Boring Day"
  }



}
