/*
Task 5

The function below is relying on the global scope.

Transform it into a pure function so that the console.log()
at the bottom give the correct result
*/

const numbers = [1, 2, 3, 4, 5];
let result = 0;

function sumNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
}

console.log(sumNumbers([1, 2, 3])); // 6
console.log(sumNumbers([4, 5, 6])); // 15
console.log(sumNumbers([1, 1, 1])); // 3