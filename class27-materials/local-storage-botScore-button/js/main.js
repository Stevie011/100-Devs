//Create a button that adds 1 to a botScore stored in localStorage 

if(!localStorage.getItem("botScore")){
    localStorage.setItem("botScore", 0)
}
document.querySelector('button').addEventListener('click', addOneMore)



function addOneMore(){
    let botScoreVal = Number(localStorage.getItem("botScore"))
    botScoreVal +=1 
    localStorage.setItem("botScore", botScoreVal)
}

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = `https://api.nasa.gov/planetary/apod?api_key=V1eiYMpeVOucVxyE2zRVbbaLHcVVWG9rPE6uI0Yp&date=${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector("img").src = data.hdurl
//         document.querySelector("h3").innerText = data.explanation
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

