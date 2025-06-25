//destructuring syntax 
const { calculateArea } = require("./chapter_2")

//if you add a string with an integer it gives you a string 
let a = '5' + 3
let b = a -3 // it becomes a number when you do that 
console.log(typeof b)

//arrays 

let anArray = [[0], [9], [3]]
 console.log(anArray[0][0])

 console.log(calculateArea(3, 5))

 brokenObject = {
    work: 'nice'
 }

 function problematicCode () {
    
    try {
        const subObject = brokenObject.hello.world
        console.log(subObject)
    } catch (anything) {
        console.log(anything.message)
    }
 }



 //Questions 

 // 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.
 let theArray = [2,4, 6, 8,0 ,74, 29, 30]
 function sortArray (anArray) {
    let arrayLength = anArray.length
    let filteredArray = []
    for (let i = 0; i <= arrayLength; i++) {
        if(anArray[i]%2 == 0) {
            filteredArray.push(anArray[i])
        }
    }
   
    return filteredArray.sort((a,b )=> a -b )
 }

 console.log(sortArray(theArray))

//  2. Object Manipulation: Given an array of objects representing people with names and ages, 
// write a function to find the person with the highest age.

const names_and_ages = [
    { name: 'james', age: 27 },
    { name: 'lucy', age: 31 },
    { name: 'juan', age: 102 }
]

function highestAge (aDict) {

    let oldestPersonAge = names_and_ages[0].age
    let j = 0
    for (let i = 1; i < names_and_ages.length; i++) {
        if(oldestPersonAge < names_and_ages[i].age) {
            oldestPersonAge = names_and_ages[i].age
            j = i
        }
        
    }

    return names_and_ages[j].name
   
    
}

console.log(highestAge(names_and_ages))