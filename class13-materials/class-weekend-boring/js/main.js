//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  dayLow = day.toLowerCase()

  if(dayLow === "tuesday" || dayLow === "thursday"){
    console.log("YOU HAVE CLASS")
  }else if( dayLow === "saturday" || dayLow === "sunday"){
    console.log("Its The Weekend")
  }else{
    console.log("BORING")
  }

}
