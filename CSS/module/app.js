// import home from "./home.js"
// import cart from "./cart.js"


// cart()




// // Normal function declaration
// function greet() {
//     console.log("Hello, world!");
// }

// // Calling the function
// greet(); // Outputs: Hello, world!
// greet(); // Outputs: Hello, world!



// // IIFE
// (function() {
//     console.log("Hello, world!");
// })(); // Outputs: Hello, world!

// // or using arrow function
// (() => {
//     console.log("Hello, world!");
// })(); // Outputs: Hello, world!






// // Utility functions
// // function add(a, b) {
// //     return a + b;
// // }

// function multiply(a, b) {
//     return a * b;
// }

// console.log(add(2, 3)); // Outputs: 5
// console.log(multiply(2, 3)); // Outputs: 6








// // Encapsulating code to avoid polluting the global scope
// (function() {
//     var privateVariable = "I am private";
//     console.log(privateVariable); // Outputs: I am private
// })();

// // privateVariable is not accessible here
// console.log(typeof privateVariable); // Outputs: undefined

// // Initialization code
// (function() {
//     // Initialization logic here
//     console.log("Initialization code runs once");
// })();




// // Arrow function with single parameter
// const square = x => x * x;
// console.log(square(5)); // Outputs: 25

// // Arrow function with multiple parameters
// // const add = (a, b) => a + b;
// // console.log(add(2, 3)); // Outputs: 5

// // Arrow function with no parameters
// // const greet = () => console.log("Hello!");
// // greet(); // Outputs: Hello!

// // Arrow function as a callback
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(x => x * x);
// console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]



const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Outputs: [1, 2, 3, 4, 5, 6]



const obj1 = { foo: 'bar' };
const obj2 = { baz: 'qux' };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject); // Outputs: { foo: 'bar', baz: 'qux' }





const str = 'hello';

const charArray = [...str];

console.log(charArray); // Outputs: ['h', 'e', 'l', 'l', 'o']



const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];

console.log(newArray); // Outputs: [1, 2, 3, 4, 5]








