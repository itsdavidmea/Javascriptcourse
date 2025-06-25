// 1. Define a variable called name and set it equal to a string that contains your name. 
// Then, demonstrate how you would change its value to your full name.

let name = 'David';
name = 'David Mea'

console.log(name)

// 2. How would you compare two variables, a and b, to check equality?

let a = 1
let b = 2

console.log(a == b)

// 3. Write an if...else statement in JavaScript that checks 
// if a number stored in a variable age is greater than 18. 
// If true, it should log "Adult" to the console; otherwise, it should log "Minor".

let age = 9
if (age > 18) {
    console.log('Adult')
} else {
    console.log('Minor')
}

// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.
let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let alength = myArray.length
for (let i = 0; i < alength; i++) {
    if (myArray[i]%2 != 0) {
        continue
    }
    console.log(myArray[i])
}

// 5. Given an array numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop.
let anArray = [1, 2, 3, 4, 5]
let sum = 0 
let i = 0
let length = anArray.length

while (sum < 100) {

    // for(let i = 0; i < anArray.length; i++ ) {
    //     sum += anArray[i]
        
    // }
    if (i == length) {
        i = 0
    }
    sum += anArray[i]
    console.log(sum)
    
    i++
}

console.log('the final sum is: ',sum)
console.log('the final sum is: ',i)

// 6. Define a function named calculateArea that takes two parameters, 
// width and height, and returns the area of a rectangle. // width * height

function calculateArea (width, height) {

    return width * height
}

let rectangleArea1 = calculateArea(7, 5)
console.log(rectangleArea1)

module.exports = {

    calculateArea
 }