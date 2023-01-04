// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.



//NOTE: The charAt() method returns the character at the specified index in a string. The index of the first character is 0, the second character is 1, and so on. however, it can get alittle wonky when you have a negative index. 
//Create a function that takes in objects (people)
//Use the char at method and the to UpperCase function to capitalize the first letter of the name variable. Then, use the slice method to remove the first letter of the name variable and concatenate it with the capitalized letter. This will produce a capitalized version of the name variable.
//Use string interpolation to create a sentence using the capitalized name variable and the occupation variable. 
//Return the new array of sentences as the output of the objects to sentence function.
//Define the expected out array, which contains the expected output of the, "iWillFinish" function when called with the people array as an argument.


// METHOD1 - I feel like I've relived this 1000 times, my variable will not be defined! 


// function iWillFinish(people) {
//   return people.map(person => {
//     const name = person.name.charAt(0).toUpperCase() + person.name.slice(1);
//     return `${name} is ${person.occupation}.`;
//   });
// }

// const expectedOutput = [  "Ford Prefect is a hitchhiker.",  "Zaphod Beeblebrox is president of the galaxy.",  "Arthur Dent is a radio employee."];

// expect(iWillFinish(people)).toEqual(expectedOutput);

//I couldnt figure out how to define it. So I took a break and came back. -----------------------------------------------------------------------------------------------------------------------------



//Method2 - Went a reviewd testing with test I decided to use a describe method. 


describe("goodFish", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
  ]
    expect(goodFish(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


// ReferenceError: goodFish is not defined

// b) Create the function that makes the test pass.

const goodFish = (array) => {

  return array.map(obj => obj.name.split(' ').map(word =>{
    return word.charAt(0).toUpperCase() + word.slice(1)}).join(' ') + " " + "is" + " " + obj.occupation + ".") 
      }

//I have no clue how this passed! I literally Ran it almost twenty times 
//To access the properties of the objects in the array, we should iterate over the array
//I used dot notation to access the values of the object's name  
//I capitalized the first letter of each word in the strings, be note that we can split the word at the space between the words. This will create two separate strings, which can then be iterated over to capitalize the first letter of each word. After capitalizing the first letter of each word, you can then add the remaining letters of each word to the capitalized letter to create a new string. Once you have combined the two strings, you will have a new string with the first and last name having capital letters. To complete the expected output, use dot notation to add a space, the word 'is', and the object's occupation to the final string, separated by a period.
//I TRIED THIS OVER AND OVER AGAIN AND IT SAID FAIL, I GOT UP! SAT BACK DOWN, TRIED IT AGAIN AND IT PASSED..


//➜  week-7-assessment-ajgahan19 git:(week-7) ✗ yarn jest 
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-7-assessment-ajgahan19/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   goodFish
//     ✓ returns an array with a sentence about each person with their name capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.172 s
// Ran all test suites.
// ✨  Done in 0.73s.
// ➜  week-7-assessment-ajgahan19 git:(week-7) ✗ 


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

describe("iwanttoSleep", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const output1 = [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    const output2 = [ 2, 1, -1 ]

    expect(iwanttoSleep(hodgepodge1)).toEqual(output1)
    expect(iwanttoSleep(hodgepodge2)).toEqual(output2)
  })
})
// test 1: ReferenceError: iwanttoSleep is not defined
// test 2: Pass


// b) Create the function that makes the test pass.

// I need to create function named "iwanttoSleep"
// pass function parameter of "array"
// Inside the function, return the array after it has been iterated over using the .filter() and .map(). The .filter() function will be applied first, followed by the .map() function.
// Int the argument we use anonymous function to return only elements that have the primitive data type of "number". Use typeof built in method to determine data type.
// in .map argument, use anonymous function to return the remainder of each element's value when divided by three, using the modulo method.

const iwanttoSleep = (array) => {
  return array.filter(value => 
    typeof value === "number"
  ).map((value) => 
    value % 3
  )
}

// ➜  week-7-assessment-ajgahan19 git:(week-7) ✗ yarn jest 
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-7-assessment-ajgahan19/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   goodFish
//     ✓ returns an array with a sentence about each person with their name capitalized (1 ms)
//   iwanttoSleep
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.144 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.50s.
// ➜  week-7-assessment-ajgahan19 git:(week-7) ✗ 



//--------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// describe("goodFood", () => {
//   it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
//     const cubeAndSum1 = [2, 3, 4]
//     const output1 = 99
//     const cubeAndSum2 = [0, 5, 10]
//     const output2 = 1125

//     expect(goodFood(cubeAndSum1)).toEqual(output1)
//     expect(goodFood(cubeAndSum2)).toEqual(output2)
//   })
// })
// test 1:  ReferenceError: goodFood is not defined
// test 2:  Pass


// b) Create the function that makes the test pass.
// First I will create function called "goodFood"
// I will pass function parameter of "array"
// within the function, I need to return the array accessed by first the .map higher order function, then the .reduce built in method.
// in .map argument, return each element in array cubed using "** 3" syntax
// in .reduce argument, use "(a,b) => a+b, 0" syntax; this has it add each value to an accumulating sum until all elements are iterated, starting at 0.

// My overall understanding: "To create a function that will pass the test, I need to create a function called 'goodFood' and pass in an 'array' parameter. Inside the function, return the array after it has been iterated over using the .map() higher order function and the .reduce(). 
// In the argument for the .map() function, return each element in the array cubed using the '** 3' syntax. In the argument for the .reduce() function, use the syntax '(a,b) => a+b, 0' to iterate over each value in the array, adding each value to an accumulating sum starting at 0 until all elements have been iterated over."

const goodFood = (array) => {
    return array.map(value => value ** 3).reduce((a,b) => a + b, 0)
}

// Time:        0.172 s
// Ran all test suites.
// ✨  Done in 0.73s.
// ➜  week-7-assessment-ajgahan19 git:(week-7) ✗ yarn jest 
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-7-assessment-ajgahan19/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   goodFish
//     ✓ returns an array with a sentence about each person with their name capitalized (1 ms)
//   iwanttoSleep
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
//   goodFood
//     ✓ takes in an array of numbers and returns the sum of all the numbers cubed.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.18 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.91s.
// ➜  week-7-assessment-ajgahan19 git:(week-7) ✗ 