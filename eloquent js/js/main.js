
// console.log(typeof 4.5)

// console.log(typeof "gh")

let testUrl = 'www.codewars.com#about'

//function removeUrlAnchor(url){
  
    //search along string for #, return slice till that index
    //let foundIndex = url.indexOf("#")
    //return url.slice(0, url.indexOf("#"))
//}

//console.log(removeUrlAnchor(testUrl))

const removeUrlAnchor = (url) => {return url.slice(0, url.indexOf("#"))}