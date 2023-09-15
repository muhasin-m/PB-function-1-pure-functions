/*
Task 4

The function below is relying on the global scope.

Transform it into a pure function so that the console.log()
at the bottom give the correct result
*/

let sum = 10;

function add(a, b) {
    sum = a + b;
    return sum;
}

console.log(sum); // 10
console.log(add(1, 2)); // 3
console.log(add(5, 3)); // 8
console.log(add(8, 1)); // 9