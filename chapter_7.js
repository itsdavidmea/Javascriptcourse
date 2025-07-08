// 1. How do you create a string that includes both static 
// text and the value of the variable name,
// using template literals?
let variable = 2
let aString = `the value is: ${variable}`



// 2. Convert the following function into an arrow function syntax:

function add(a, b) {
  return a + b;
}

addingFunction = (a, b) => {
    return a + b
}

// 3. Given an object person with properties name and age, 
// use object destructuring to create two variables name and age, 
// extracting the values from the object.

person = {
    name: 'John',
    age: '20'
}

const {name: person_name, age} = person
console.log(person_name)


// 4. Given an array colors with the values ['red', 'green', 'blue'], 
// use array destructuring to create three variables named first, 
// second, and third, assigning the first, second, 
// and third elements of the array to them, respectively.

let colors = ['red', 'green', 'blue']
let [first, second, third] = colors 

// 5. How do you create a new array combined that contains all elements of 
// arrays arr1 and arr2 using the spread operator?
let arr1 = [1, 2, 3, 7]
let arr2 = [4, 5, 6, 7]

const arr3 = [...arr1, ...arr2]
console.log(arr3) 

// 6. How do you create a new object combinedObject that merges the properties 
// of two objects obj1 and obj2, 
// with properties from obj2 overwriting those in obj1 if they exist in both objects?

let obj1 = {
    property1: 'something'
}
let obj2 = {
    property2: 'something'
}

let combinedObject = {
    ...obj1,
    ...obj2
}

console.log(combinedObject)


// 7. How do you safely access the street property of address inside an object user 
// that may not exist, using optional chaining?

const user = { name: 'james' }
let randomVar = user?.['address']?.['street']

// 8. Define a function greet(name, greeting = "Hello") that takes a name and an optional greeting. 
// If the greeting is not provided, it should default to "Hello".

greet = (name, greeting = 'hello') => {
   

    console.log(`${greeting} my name is ${name}`)
}

// 9. Explain the difference between let and const keywords, 
// and give an example of when you would use each.


// 10. Write a for...of loop that iterates over an array 
// numbers and logs each number to the console.

let theArray = [1, 2, 3, 4]

// theArray.forEach((currentValue, currentIndex) => {
//     console.log(currentValue)
// })

// for(currentValue of  theArray) {
//     console.log(currentValue)
// }


// 11. Given an array of numbers, use the map method to create a new array with each number squared.
let original_array = [2, 4, 5, 6, 8, 93]

let new_original_array = original_array.map((a, b) => {
    return a**2
})

console.log(new_original_array)


// 12. How would you use the ternary operator to assign "adult" 
// to a variable ageStatus if age is 18 or over, and "minor" if under 18?
let thisage = 19

let ageStatus = thisage >= 18 ? 'adult' : 'minor' 
console.log(ageStatus)

// 13. How do you use the logical AND operator to execute a function logMessage() 
// only if the variable isLoggedIn is true?

logMeassage = () => {console.log('logged in')}
isLoggedIn = true
isLoggedIn && logMeassage()


// 14. How can you use the logical OR operator to assign a default value of 
// "guest" to a variable username if the current user.name is undefined or null?

let user_2 = {
  name: 'banana muffin'
}

username = user_2.name || 'guest'