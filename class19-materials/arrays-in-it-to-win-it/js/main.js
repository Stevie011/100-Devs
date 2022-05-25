//Create an array of movies with at least three movies.

let movies = ["matrix 1", "matrix 2", "matrix 3","matrix 4"]


console.log(movies)

//Using the array from above, store the first movie in a variable

let mov1 = movies[0]

//Get the length of the original array and store it in a new variable

let arrLen = movies.length
console.log(arrLen)



//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let lastVal = movies[movies.length-1]

console.log(lastVal)

for(let i = 0; i < movies.length; i ++){
    console.log(movies[i])
}

movies.forEach((x, i,a)=> console.log(x,i,a))