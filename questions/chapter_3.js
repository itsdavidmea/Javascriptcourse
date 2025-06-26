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


// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.

let ranArray = ['3', '5', '4']
function converString (anArray) {
    let length = anArray.length
    for (let i = 0; i < length; i++) {
        anArray[i] = (anArray[i] + 0) / 10 
    }

    return anArray
}

ranArray = converString(ranArray)
console.log(ranArray)


// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.
let array_of_objects = [
    { price: 4.2 },
    { price: 8.3 },
    { price: 2.2 }

]

array_of_objects.sort(function (a, b) {
    return b.price - a.price
})

console.log(array_of_objects)


// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.
let demo_array = [0, 1, 2, 3, 4, 5]
function trimArray (arr) {
    arr.pop()
    arr = arr.slice(1)
    
    return arr
}

console.log(trimArray(demo_array))

// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, 
// write a function that calculates the total cost of the items.
let shopping_cart = {
    'cheese': {
        quantity: 4,
        price: 8
    },
    milk: {
        quantity: 10,
        price: 4
    }
}
function totalCost (arr) {
    let allKeys = Object.keys(arr)
    let sum = 0 
    for (let i = 0; i < allKeys.length; i++) {
        sum += (arr[allKeys[i]].price * arr[allKeys[i]].quantity)
    }
    console.log(sum)
    return sum
}

totalCost(shopping_cart)

// 7. Object Manipulation: Write a function that deep clones an object 
// (i.e., copies all nested objects and arrays) to prevent unintended mutations.

let friend = {
    'rupert': {
        hobbies: ['gym', 'reading', 'mathematics']
    }
}

function deepClone (arr) {
    let allKeys = Object.keys(arr)
    let newObject = {}
    for (let i = 0; i < allKeys.length; i++) {
        
        newObject[allKeys[i]] =  arr[allKeys[i]]
   
        
    }

   
}

let afriend = deepClone(friend)
friend.james = {hobbies: ['life']}

// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.
let student = {
    chemistry: {
        grade: 9
    },
    physics: {
        grade: 7
    },
    maths: {
        grade: 1
    }
}
console.log(student.chemistry.grade)
let allKeys =  Object.keys(student)
let sumgrade = 0

for ( let i = 0; i < allKeys.length; i++) {
    let currentKey = allKeys[i]
    let currentKeygrade = allKeys[i].grade

    console.log(student.currentKeygrade)
    console.log(currentKey)
    
}
let average = sumgrade / allKeys.length
console.log(average)

// 9. Scope and Closure: Create a function that returns a new function. 
// The returned function should remember and log the number of times it's been called.

function aFunction () {
    let count = 0 

    return function closure () {
        count++
        console.log(count)
    }
}

let status = aFunction()
status()
status()


// 10. Array Sorting: Write a function that sorts an array of 
// objects based on a specific property (e.g., 'date') in descending order.
let grades_array = [
    { subject: 'maths', grade: 10 },
    { subject: 'spanish', grade: 2 },
    { subject: 'literature', grade: 6 }
]

grades_array.sort(function(a, b) {
    return b.grade - a.grade
})

console.log(grades_array)

// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.
let array_of_short_strings = ['hello', 'world', 'my', 'name', 'juan lopez', 'long word']
function filterString(arr) {
    let newString = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > 5) {
            continue
        }
        newString.push(arr[i])
    }

    console.log(newString)
}

filterString(array_of_short_strings)

// 13. Object Iteration: Write a function that counts the number of occurrences of each word 
// in a given string and stores the results in an object.

let sentence = 'hello world my name is hello, is is , what a grade world, my, banana, james, cool'
function occurrences(string, match) {
    word = string.replaceAll(',', '').split(" ")
    
    let count = 0
    for(let i = 0; i <= word.length; i++) {
        if(match === word[i]) {
            count++
        }
    }

    return count 
}

console.log(occurrences(sentence, "hello"))