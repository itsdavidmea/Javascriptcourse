// 1. Unique Characters in a String
// Question: Write a function to determine if a string has all unique characters. 
// Return true if all characters are unique, and false otherwise. 
// Assume the string only contains lowercase letters.

let aString = "hello"
function uniqueCharacter (aString) {
    let newArray =  []
    let lowercaseString = aString.toLowerCase().replaceAll(".", "")
    
    arrayString = lowercaseString.split("")
    console.log(arrayString)
    for (let i = 0; i < arrayString.length; i++) {
       if (newArray.includes(arrayString[i])) {
        return false
       } else {
        newArray.push(arrayString[i])
       }



    }
    return true

}

// 2. Merge Sorted Arrays
// Question: Given two sorted arrays nums1 and nums2, 
// write a function to merge them into a single, sorted array.

let arr_1 = [2, 4, 6]
let arr_2 = [1, 3, 5, 7]

function mergeSort(arr1, arr2) {
    let newArray = []
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] > arr2[i]) {
            newArray.push(arr2[i])
            newArray.push(arr1[i])
        }
    }
    if(arr1.length < arr2.length) {
        let remainingArray = arr2.slice(arr1.length)
        console.log(remainingArray)
        let final = newArray.concat(remainingArray)
        return final
    }
    return newArray

}

console.log(mergeSort(arr_1, arr_2))


// 3. Find All Duplicates in an Array
// Question: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of the array), 
// some elements appear twice and others appear once. 
// Write a function that returns an array of all the elements that appear twice in the given array. 
// You must achieve this with O(n) time complexity.
let dummy_arr = [1, 2, 3, 5, 6, 2345, 43, 12, 412, 341, 234, 1, 2, 3, 4, 5]
function twiceAppearence(arr) {

    const dict = {}
    newArray = []
    for (let i = 0; i < arr.length; i++) {
        currentValue = arr[i]
        if(currentValue in dict) {
            newArray.push(arr[i])
        }
        dict[arr[i]] = 1
    }

    return newArray
}

console.log(twiceAppearence(dummy_arr))


// 4. Rotate Array
// Question: Rotate an array to the right by k steps, where k is non-negative. 
let test = [1, 2, 3, 4, 5]
function rotateArray(arr) {

    let lastIndex = arr.length - 1 
    for (let k =0; k < arr.length / 2; k++) {
        p = arr[k]
        arr[k] = arr[lastIndex]
        arr[lastIndex] = p
        
        lastIndex--
    }

    return arr 
}

console.log(rotateArray(test))


// 5. Valid Parentheses
// Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

let s = "()[]{}"
let s_2 = "([])[]]{}{]}"

function validParentheses (str) {

    curvedStart = "("
    curvedEnd = ")"

    curlyStart = "{"
    curlyEnd = "}"

    squareStart = "["
    squareStart = "]"

    
}

