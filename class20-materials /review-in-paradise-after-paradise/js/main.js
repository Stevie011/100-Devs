// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".


testArr = [4,2,3,4,5,3,4]



function lastFirst(arr){
    if(arr[0] < arr[arr.length-1]){
        alert("Hi")
    }else if(arr[0] > arr[arr.length-1]){
        alert("Bye")
    }else if(arr[0] == arr[arr.length-1]){
        alert("close in an hour")
    }
}

lastFirst(testArr)