//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.weight)
        console.log(data.title)
        // console.log(data.subclasses[0].name)
        // data.subclasses.forEach(obj => {  
        //     console.log(obj.name)
        let books = localStorage.getItem("books") + " ; " + data.title
        localStorage.setItem("books", books)
        //     //create li
        const li = document.createElement("li")
        //     //add text to li
        li.textContent = data.title
        //     //append li to the ul
        document.querySelector("ul").appendChild(li)
        // })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//challenge - extend this so something else is displayed 