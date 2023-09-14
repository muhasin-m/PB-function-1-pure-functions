/*
Task 2

The function below is relying on the global scope.

Transform it into a pure function so that the console.log()
at the bottom give the correct result
*/

let string = "hello";

function convertToUpperCase() {
    return string.toUpperCase();
} 

console.log(convertToUpperCase("hi")); // Expected output: "HI"
console.log(convertToUpperCase("javascript")); // Expected output: 'JAVASCRIPT'
console.log(convertToUpperCase("yo!")); // Expected output: 'YO!'