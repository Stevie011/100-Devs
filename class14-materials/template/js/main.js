let hours = prompt(`input hours here`)
let minutes = prompt(`input minutes here`)
let seconds = prompt(`input seconds here`)

hours = Number(hours)
minutes = Number(minutes)
seconds = Number(seconds)


if (hours < 24 && hours >= 0){
    if (minutes < 60 && minutes >= 0){
        if (seconds < 60 && seconds >= 0){
        alert("valid range")
        alert(`OG time is ${hours} hrs ${minutes} mins ${seconds} secs`)
        }else{
            alert("bad input") 
        }
    }else{
        alert("bad input") 
    }  
}else{
    alert("bad input")
    
}

seconds = seconds + 1

if (seconds == 60){
    minutes = minutes + 1
    seconds = 0
}
// }else{
//     alert(`1 second later is time is ${hours} hrs ${minutes} mins ${seconds} secs`)
// }

if (minutes == 60){
    hours = hours + 1
    minutes = 0
}   
// }else{
//     alert(`1 second later is time is ${hours} hrs ${minutes} mins ${seconds} secs`)
// }

if (hours == 24){
    hours = 0
    minutes = 0
    seconds = 0
   
}

alert(`1 second later is time is ${hours} hrs ${minutes} mins ${seconds} secs`)





// alert(`OG time is ${hours} hrs ${minutes} mins ${seconds} secs`)



// alert(`1 second later is time is ${hours} hrs ${minutes} mins ${seconds} secs`)

